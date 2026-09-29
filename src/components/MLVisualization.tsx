"use client";

import { useEffect, useRef } from "react";
import "./MLVisualization.css";

type Pt = [number, number];
type V3 = [number, number, number];
type P2 = [number, number, number]; // screen x, screen y, camera depth
type Seg = [number, number, number, number];

// Virtual canvas matches the old SVG viewBox so sizes carry over.
const VIEW_W = 640;
const VIEW_H = 360;
const DIST = 640;
const FOCAL = 640;
const LOOP = 18; // seconds

// Camera: a low orbit where the two groups overlap in depth, then a sweep to
// straight overhead, where the data's main plane faces the viewer.
const YAW_START = 1.35;
const YAW_DRIFT = 0.25;
const YAW_FLAT = -0.38;
const PITCH_3D = 0.42;
const PITCH_FLAT = 1.56;

const NEUTRAL = [164, 168, 187];
const PALETTES = [
  [
    [128, 153, 237],
    [154, 170, 241],
    [104, 133, 219],
  ],
  [
    [242, 123, 105],
    [255, 149, 128],
    [217, 103, 91],
  ],
];
const CENTROID_RGB = ["128,153,237", "242,123,105"];

// ---------------------------------------------------------------- data

type Datum = { u: number; v: number; w: number; shade: number; r2d: number; o2d: number };

function createRandom(seed: number) {
  let state = seed >>> 0;
  return () => {
    state += 0x6d2b79f5;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function gaussian(random: () => number) {
  const u1 = Math.max(random(), 0.0001);
  const u2 = random();
  return Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
}

// Two groups separated along u. From the opening camera angle u points into
// the screen, so they read as one cloud until the view flattens.
function makeCluster(seed: number, cu: number, cv: number, count: number): Datum[] {
  const random = createRandom(seed);
  return Array.from({ length: count }, () => {
    const nu = gaussian(random);
    const nv = gaussian(random);
    const nw = gaussian(random);
    const v = cv + nv * 46;
    return {
      u: cu + nu * 44,
      v,
      w: 0.35 * (v - cv) + nw * 52,
      shade: Math.floor(random() * 3),
      r2d: 0.95 + random() * 0.5,
      o2d: 0.82 + random() * 0.18,
    };
  });
}

const DATA: Datum[] = [...makeCluster(18, -105, 12, 190), ...makeCluster(82, 105, -12, 190)];

// A few real k-means iterations on the flattened coordinates, precomputed.
type KStep = { c: Pt[]; assign: Uint8Array };

function runKMeans(): KStep[] {
  let c: Pt[] = [
    [-60, -80],
    [90, 50],
  ];
  const steps: KStep[] = [];
  for (let it = 0; it < 5; it += 1) {
    const assign = new Uint8Array(DATA.length);
    const sum = [
      [0, 0, 0],
      [0, 0, 0],
    ];
    DATA.forEach((p, i) => {
      const d0 = (p.u - c[0][0]) ** 2 + (p.v - c[0][1]) ** 2;
      const d1 = (p.u - c[1][0]) ** 2 + (p.v - c[1][1]) ** 2;
      const k = d0 <= d1 ? 0 : 1;
      assign[i] = k;
      sum[k][0] += p.u;
      sum[k][1] += p.v;
      sum[k][2] += 1;
    });
    steps.push({ c: c.map((x) => [x[0], x[1]] as Pt), assign });
    const prev = c;
    c = sum.map((s, k) => (s[2] ? ([s[0] / s[2], s[1] / s[2]] as Pt) : prev[k]));
  }
  return steps;
}

const STEPS = runKMeans();
const FINAL_CENTROIDS = STEPS[STEPS.length - 1].c;
const K_START = 8.6;
const K_STEP = 1.05;

// ---------------------------------------------------------------- math

function clamp(x: number, lo: number, hi: number) {
  return Math.min(hi, Math.max(lo, x));
}
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}
function smoother(x: number) {
  const t = clamp(x, 0, 1);
  return t * t * t * (t * (t * 6 - 15) + 10);
}
function ramp(t: number, a: number, b: number) {
  return smoother((t - a) / (b - a));
}
function mixRGB(a: number[], b: number[], t: number) {
  return [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];
}
function sub(a: V3, b: V3): V3 {
  return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
}
function dot(a: V3, b: V3) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
function cross(a: V3, b: V3): V3 {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
}

type Camera = { pos: V3; right: V3; up: V3; fwd: V3 };

function makeCamera(yaw: number, pitch: number): Camera {
  const cp = Math.cos(pitch);
  const sp = Math.sin(pitch);
  const sy = Math.sin(yaw);
  const cy = Math.cos(yaw);
  const pos: V3 = [DIST * cp * sy, DIST * sp, DIST * cp * cy];
  const fwd: V3 = [-cp * sy, -sp, -cp * cy];
  const right: V3 = [cy, 0, -sy];
  return { pos, right, up: cross(right, fwd), fwd };
}

function project(cam: Camera, p: V3): P2 {
  const d = sub(p, cam.pos);
  const z = Math.max(1, dot(d, cam.fwd));
  return [VIEW_W / 2 + (FOCAL * dot(d, cam.right)) / z, VIEW_H / 2 - (FOCAL * dot(d, cam.up)) / z, z];
}

// ---------------------------------------------------------------- drawing

function arrow(ctx: CanvasRenderingContext2D, a: P2, b: P2, color: string, width: number) {
  const dx = b[0] - a[0];
  const dy = b[1] - a[1];
  const l = Math.hypot(dx, dy) || 1;
  const ux = dx / l;
  const uy = dy / l;
  const head = 7;

  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.beginPath();
  ctx.moveTo(a[0], a[1]);
  ctx.lineTo(b[0] - ux * head * 0.7, b[1] - uy * head * 0.7);
  ctx.stroke();

  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(b[0], b[1]);
  ctx.lineTo(b[0] - ux * head - uy * head * 0.5, b[1] - uy * head + ux * head * 0.5);
  ctx.lineTo(b[0] - ux * head + uy * head * 0.5, b[1] - uy * head - ux * head * 0.5);
  ctx.closePath();
  ctx.fill();
}

function gridFade(u: number, v: number) {
  const d = Math.hypot(u / 300, v / 190);
  if (d >= 1) return 0;
  return d < 0.7 ? 1 : 1 - (d - 0.7) / 0.3;
}

function drawGrid(ctx: CanvasRenderingContext2D, P: (p: V3) => P2, alpha: number) {
  const BUCKETS = 6;
  const buckets = Array.from({ length: BUCKETS }, () => [] as Seg[]);
  const push = (u1: number, v1: number, u2: number, v2: number) => {
    const a = gridFade((u1 + u2) / 2, (v1 + v2) / 2);
    if (a <= 0.02) return;
    const pa = P([u1, 0, v1]);
    const pb = P([u2, 0, v2]);
    buckets[Math.min(BUCKETS - 1, Math.floor(a * BUCKETS))].push([pa[0], pa[1], pb[0], pb[1]]);
  };
  for (let u = -320; u <= 320; u += 40) for (let v = -200; v < 200; v += 40) push(u, v, u, v + 40);
  for (let v = -200; v <= 200; v += 40) for (let u = -320; u < 320; u += 40) push(u, v, u + 40, v);

  ctx.lineWidth = 0.75;
  ctx.lineCap = "butt";
  buckets.forEach((segs, b) => {
    if (!segs.length) return;
    ctx.strokeStyle = `rgba(211,202,225,${(0.07 * alpha * (b + 0.5)) / BUCKETS})`;
    ctx.beginPath();
    for (const [ax, ay, bx, by] of segs) {
      ctx.moveTo(ax, ay);
      ctx.lineTo(bx, by);
    }
    ctx.stroke();
  });
  ctx.lineCap = "round";
}

function drawGlow(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, rgb: string, a: number) {
  if (a <= 0.01) return;
  const g = ctx.createRadialGradient(x, y, 0, x, y, r);
  g.addColorStop(0, `rgba(${rgb},${0.2 * a})`);
  g.addColorStop(1, `rgba(${rgb},0)`);
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();
}

// ---------------------------------------------------------------- component

export default function MLVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let scale = 1;

    const render = (t: number, intro: number) => {
      // ---- timeline
      const forward = ramp(t, 5, 8);
      const back = ramp(t, 15.8, 18);
      const flatPhase = t < 15.8;
      const view = flatPhase ? forward : 1 - back;

      const yaw3d = YAW_START - YAW_DRIFT * (1 - Math.cos((Math.PI * Math.min(t, 5)) / 5)) / 2;
      const yaw = flatPhase ? lerp(yaw3d, YAW_FLAT, forward) : lerp(YAW_FLAT, YAW_START, back);
      const pitch =
        lerp(PITCH_3D, PITCH_FLAT, view) + 0.04 * Math.sin((2 * Math.PI * t) / LOOP) * (1 - view);
      const flat = flatPhase ? ramp(t, 5.6, 8) : 1 - ramp(t, 15.8, 17.8);

      const axesAlpha = (1 - ramp(t, 5, 6.5)) + ramp(t, 16.6, 18);
      const gridAlpha = ramp(t, 6.8, 8.2) * (1 - ramp(t, 15.6, 16.6));
      const glowAlpha = ramp(t, 13, 14.2) * (1 - ramp(t, 15.4, 16.2));
      const colorKeep = 1 - ramp(t, 15.5, 16.3);

      // ---- k-means state
      let prevAssign: Uint8Array | null = null;
      let curAssign: Uint8Array | null = null;
      let blend = 0;
      if (t >= K_START) {
        const k = Math.min(STEPS.length - 1, Math.floor((t - K_START) / K_STEP));
        const u = t >= K_START + STEPS.length * K_STEP ? 1 : (t - K_START - k * K_STEP) / K_STEP;
        prevAssign = k === 0 ? null : STEPS[k - 1].assign;
        curAssign = STEPS[k].assign;
        blend = smoother((u - 0.45) / 0.35);
      }

      const cam = makeCamera(yaw, pitch);
      const P = (p: V3) => project(cam, p);

      ctx.setTransform(scale, 0, 0, scale, 0, 0);
      ctx.clearRect(0, 0, VIEW_W, VIEW_H);
      ctx.globalAlpha = intro;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";

      // ---- glows
      const origin = P([0, 0, 0]);
      drawGlow(ctx, origin[0], origin[1], 230, "146,159,224", axesAlpha);
      FINAL_CENTROIDS.forEach((c, j) => {
        const p = P([c[0], 0, c[1]]);
        drawGlow(ctx, p[0], p[1], 160, CENTROID_RGB[j], glowAlpha);
      });

      // ---- flat grid on the data plane
      if (gridAlpha > 0.01) drawGrid(ctx, P, gridAlpha);

      // ---- 3D frame: basis vectors
      if (axesAlpha > 0.01) {
        const a = 0.65 * axesAlpha;
        ctx.setLineDash([4, 5]);
        ctx.strokeStyle = `rgba(193,190,207,${0.34 * 0.58 * a * 1.6})`;
        ctx.lineWidth = 1.3;
        for (const end of [
          [-100, 0, 0],
          [0, -110, 0],
          [0, 0, -95],
        ] as V3[]) {
          const q = P(end);
          ctx.beginPath();
          ctx.moveTo(origin[0], origin[1]);
          ctx.lineTo(q[0], q[1]);
          ctx.stroke();
        }
        ctx.setLineDash([]);

        ctx.globalAlpha = intro * a;
        arrow(ctx, origin, P([0, 125, 0]), "#c2b4d6", 1.8);
        arrow(ctx, origin, P([120, 0, 0]), "#90a6ed", 1.8);
        arrow(ctx, origin, P([0, 0, 110]), "#ff8877", 1.8);
        ctx.fillStyle = "#eee6e5";
        ctx.beginPath();
        ctx.arc(origin[0], origin[1], 2.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = intro;
      }

      // ---- points
      for (let i = 0; i < DATA.length; i += 1) {
        const d = DATA[i];
        const [x, y, z] = P([d.u, d.w * (1 - flat), d.v]);
        const depth = clamp(0.5 + (DIST - z) / 260, 0, 1);
        const r = lerp(1.05 + depth * 0.85, d.r2d, flat);
        const o = lerp(0.56 + depth * 0.36, d.o2d, flat);

        let rgb = NEUTRAL;
        if (curAssign) {
          const from = prevAssign ? PALETTES[prevAssign[i]][d.shade] : NEUTRAL;
          rgb = mixRGB(from, PALETTES[curAssign[i]][d.shade], blend);
        }
        rgb = mixRGB(NEUTRAL, rgb, colorKeep);

        ctx.fillStyle = `rgba(${Math.round(rgb[0])},${Math.round(rgb[1])},${Math.round(rgb[2])},${o})`;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const staticTime = 14.5;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(rect.width * dpr));
      canvas.height = Math.max(1, Math.round(rect.height * dpr));
      scale = canvas.width / VIEW_W;
      if (reduceMotion) render(staticTime, 1);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    if (reduceMotion) return () => ro.disconnect();

    let frame = 0;
    let last = 0;
    let clock = 0;

    const loop = (now: number) => {
      const dt = last ? Math.min(0.05, (now - last) / 1000) : 0;
      last = now;
      clock += dt;
      render(clock % LOOP, smoother(clock / 1.2));
      frame = window.requestAnimationFrame(loop);
    };
    const startLoop = () => {
      if (frame) return;
      last = 0;
      frame = window.requestAnimationFrame(loop);
    };
    const stopLoop = () => {
      window.cancelAnimationFrame(frame);
      frame = 0;
    };

    // Pause while scrolled out of view; the clock resumes where it left off.
    const io = new IntersectionObserver(([entry]) => (entry.isIntersecting ? startLoop() : stopLoop()));
    io.observe(canvas);

    return () => {
      stopLoop();
      io.disconnect();
      ro.disconnect();
    };
  }, []);

  return (
    <figure className="ml-visualization">
      <canvas
        ref={canvasRef}
        className="ml-canvas"
        role="img"
        aria-label="Illustration: a 3D point cloud rotates, flattens onto a plane, and separates into two colored clusters. Not actual model output."
      />
    </figure>
  );
}