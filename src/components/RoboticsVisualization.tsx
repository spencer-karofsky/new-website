"use client";

import { useEffect, useRef } from "react";
import "./RoboticsVisualization.css";

type Pt = [number, number];
type V3 = [number, number, number];
type P2 = [number, number, number]; // screen x, screen y, camera depth
type Projector = (x: number, y: number, h?: number) => P2;
type Face = { pts: P2[]; depth: number; fill: string };

// The scene is authored in the old SVG coordinates (560 x 360, y down)
// and lifted into 3D: svg x -> world X, svg y -> world Z, height -> world Y.
const VIEW_W = 560;
const VIEW_H = 360;
const CENTER: Pt = [280, 180];
const FOCAL = 540;
const REF_DEPTH = 520;

const route = "M 145 285 C 205 254, 252 245, 286 199 S 310 107, 366 82";
const GOAL: Pt = [366, 82];
const lapMs = 14000;
const orbitMs = 28000;

const LIGHT = norm([-0.55, 0.75, -0.4]);
const SHADOW_DIR: Pt = [0.81, 0.59];
const ROCK_DARK = [38, 35, 50];
const ROCK_LIGHT = [176, 170, 194];
const SHELL = [217, 211, 223];
const PLATE = [97, 89, 112];
const WHEEL = [48, 43, 59];
const WHEEL_SIDE = [68, 62, 80];
const ROVER_SCALE = 1.2;

const CORAL = "#ff8877";
const PERIWINKLE = "#929fe0";

const terrain: { d: string; opacity: number }[] = [
  ...[
    "M-20 55C20 26 38 43 66 27S113 7 134-18",
    "M-15 67C23 39 43 55 72 39S117 19 143-7",
    "M-8 79C30 51 50 68 79 52S125 31 151 4",
    "M-2 91C38 64 57 81 87 65S133 44 160 15",
  ].map((d) => ({ d, opacity: 0.62 })),
  ...[
    "M422 0C439 34 462 44 491 38S542 21 577 45",
    "M414 0C432 42 457 54 490 48S544 31 581 57",
    "M405 0C424 50 453 64 490 58S547 41 586 69",
  ].map((d) => ({ d, opacity: 0.48 })),
  ...[
    "M-18 301C19 278 36 291 54 316S91 356 125 371",
    "M-15 286C27 260 45 276 65 302S101 345 139 359",
    "M-8 271C35 244 55 261 75 288S113 330 151 345",
  ].map((d) => ({ d, opacity: 0.52 })),
];

type RockDef = { rings: string[]; offset: Pt; step: number };

// Each contour ring becomes a terrace, stacked `step` units above the last.
const rocks: RockDef[] = [
  {
    step: 13,
    offset: [0, 0],
    rings: [
      "M185 62c13-12 32-11 42 1l10 14c8 12 4 28-8 36l-17 10c-15 8-34 1-38-15l-4-17c-3-12 4-22 15-29Z",
      "M189 69c10-9 25-8 32 2l7 10c6 9 3 21-6 27l-13 8c-11 6-25 1-28-11l-3-13c-2-9 3-17 11-23Z",
      "M194 77c7-6 17-5 22 2l5 7c4 6 2 14-4 18l-9 5c-8 4-17 1-19-8l-2-9c-1-6 2-11 7-15Z",
    ],
  },
  {
    step: 14,
    offset: [0, 0],
    rings: [
      "M353 145c12-13 33-14 45-2l11 11c11 11 9 30-5 38l-20 12c-15 9-35 2-40-15l-5-17c-3-10 3-21 14-27Z",
      "M359 152c9-10 25-11 34-2l8 8c8 8 7 22-4 28l-15 9c-11 7-26 2-30-11l-4-13c-2-8 2-15 11-19Z",
      "M365 159c7-7 17-8 23-1l5 5c5 5 4 14-3 18l-11 6c-8 5-18 1-21-8l-3-9c-1-5 2-9 10-11Z",
    ],
  },
  {
    step: 12,
    offset: [0, 0],
    rings: [
      "M-14 192c18-13 36-8 45 8l8 16c6 13 0 29-14 34l-18 7c-16 6-32-6-32-23v-20c0-9 3-17 11-22Z",
      "M-7 201c13-9 26-5 32 6l6 12c4 10 0 21-10 25l-14 5c-12 4-23-5-23-17v-15c0-7 3-12 9-16Z",
    ],
  },
  {
    // Sits on the straight line from start to goal, so the route visibly
    // bends under it instead of curving for no reason.
    step: 11,
    offset: [117, 60],
    rings: [
      "M81 112c10-10 27-12 39-5l9 7c10 8 10 23 0 31l-13 10c-13 9-31 3-35-12l-4-14c-2-7 0-13 4-17Z",
      "M86 117c8-7 20-9 29-4l7 5c7 6 7 17 0 23l-10 7c-9 7-22 2-25-9l-3-10c-1-5 0-9 2-12Z",
      "M92 122c5-4 13-6 19-3l5 4c4 3 4 10 0 14l-7 5c-6 4-14 1-16-6l-2-6c-1-3 0-6 1-8Z",
    ],
  },
  {
    step: 12,
    offset: [0, 0],
    rings: [
      "M461 133c11-9 28-8 38 2l9 10c8 10 5 25-6 32l-15 8c-13 7-29 0-32-14l-3-17c-2-8 2-16 9-21Z",
      "M466 139c8-6 20-5 27 2l7 7c6 7 4 18-4 23l-11 6c-9 5-21 0-23-10l-2-12c-1-6 2-12 6-16Z",
      "M472 145c5-4 12-3 16 1l5 5c4 4 3 11-3 14l-8 5c-7 3-14 0-15-7l-2-9c0-4 2-7 7-9Z",
    ],
  },
];

type Ring = { pts: Pt[]; centroid: Pt; bottom: number; top: number };
type Rock = { rings: Ring[]; center: Pt; height: number };

function sub(a: V3, b: V3): V3 {
  return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
}
function dot(a: V3, b: V3) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
function cross(a: V3, b: V3): V3 {
  return [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0],
  ];
}
function norm(a: V3): V3 {
  const l = Math.hypot(a[0], a[1], a[2]) || 1;
  return [a[0] / l, a[1] / l, a[2] / l];
}
function world(x: number, y: number, h = 0): V3 {
  return [x - CENTER[0], h, y - CENTER[1]];
}
function mix(a: number[], b: number[], t: number) {
  return a.map((v, i) => v + (b[i] - v) * t);
}
function rgba(c: number[], a = 1) {
  return `rgba(${c.map((v) => Math.round(Math.min(255, v))).join(",")},${a})`;
}
function clamp(x: number, lo: number, hi: number) {
  return Math.min(hi, Math.max(lo, x));
}

type Camera = { pos: V3; right: V3; up: V3; fwd: V3 };

function makeCamera(target: V3, yaw: number, pitch: number, dist: number): Camera {
  const cp = Math.cos(pitch);
  const pos: V3 = [
    target[0] + dist * cp * Math.sin(yaw),
    target[1] + dist * Math.sin(pitch),
    target[2] + dist * cp * Math.cos(yaw),
  ];
  const fwd = norm(sub(target, pos));
  const right = norm(cross(fwd, [0, 1, 0]));
  const up = cross(right, fwd);
  return { pos, right, up, fwd };
}

function project(cam: Camera, p: V3): P2 {
  const d = sub(p, cam.pos);
  const z = Math.max(1, dot(d, cam.fwd));
  return [
    VIEW_W / 2 + (FOCAL * dot(d, cam.right)) / z,
    VIEW_H / 2 - (FOCAL * dot(d, cam.up)) / z,
    z,
  ];
}

function samplePath(el: SVGPathElement, step: number, closed = false): Pt[] {
  const length = el.getTotalLength();
  const count = Math.max(8, Math.ceil(length / step));
  const last = closed ? count - 1 : count;
  const points: Pt[] = [];
  for (let i = 0; i <= last; i += 1) {
    const p = el.getPointAtLength((length * i) / count);
    points.push([p.x, p.y]);
  }
  return points;
}

function centroidOf(pts: Pt[]): Pt {
  let x = 0;
  let y = 0;
  for (const p of pts) {
    x += p[0];
    y += p[1];
  }
  return [x / pts.length, y / pts.length];
}

function circlePts(c: Pt, r: number, n = 40): Pt[] {
  return Array.from({ length: n }, (_, i) => {
    const a = (i / n) * Math.PI * 2;
    return [c[0] + Math.cos(a) * r, c[1] + Math.sin(a) * r] as Pt;
  });
}

function chamferRect(s0: number, s1: number, f0: number, f1: number, c: number): Pt[] {
  return [
    [s0 + c, f0],
    [s1 - c, f0],
    [s1, f0 + c],
    [s1, f1 - c],
    [s1 - c, f1],
    [s0 + c, f1],
    [s0, f1 - c],
    [s0, f0 + c],
  ];
}

function tracePoly(ctx: CanvasRenderingContext2D, pts: P2[], close = true) {
  ctx.beginPath();
  pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
  if (close) ctx.closePath();
}

function gridFade(x: number, y: number) {
  const d = Math.hypot((x - 280) / 280, (y - 180) / 180);
  if (d >= 1) return 0;
  return d < 0.72 ? 1 - (0.2 * d) / 0.72 : 0.8 * (1 - (d - 0.72) / 0.28);
}

function drawGrid(ctx: CanvasRenderingContext2D, P: Projector) {
  const buckets: number[][][] = Array.from({ length: 6 }, () => []);
  const push = (x1: number, y1: number, x2: number, y2: number) => {
    const a = gridFade((x1 + x2) / 2, (y1 + y2) / 2);
    if (a <= 0.02) return;
    const [ax, ay] = P(x1, y1);
    const [bx, by] = P(x2, y2);
    buckets[Math.min(5, Math.floor(a * 6))].push([ax, ay, bx, by]);
  };
  for (let x = 0; x <= VIEW_W; x += 28) {
    for (let y = 0; y < VIEW_H; y += 28) push(x, y, x, y + 28);
  }
  for (let y = 0; y <= VIEW_H; y += 28) {
    for (let x = 0; x < VIEW_W; x += 28) push(x, y, x + 28, y);
  }
  ctx.lineCap = "butt";
  ctx.lineWidth = 0.7;
  buckets.forEach((segs, b) => {
    if (!segs.length) return;
    ctx.strokeStyle = `rgba(226,220,235,${(0.07 * (b + 0.5)) / 6})`;
    ctx.beginPath();
    for (const [ax, ay, bx, by] of segs) {
      ctx.moveTo(ax, ay);
      ctx.lineTo(bx, by);
    }
    ctx.stroke();
  });
  ctx.lineCap = "round";
}

function drawRock(ctx: CanvasRenderingContext2D, P: Projector, camPos: V3, rock: Rock) {
  rock.rings.forEach(({ pts, centroid, bottom, top }, level) => {
    const walls: { quad: P2[]; depth: number; lit: number }[] = [];

    for (let j = 0; j < pts.length; j += 1) {
      const a = pts[j];
      const b = pts[(j + 1) % pts.length];
      const mx = (a[0] + b[0]) / 2;
      const my = (a[1] + b[1]) / 2;

      let nx = b[1] - a[1];
      let nz = a[0] - b[0];
      if ((mx - centroid[0]) * nx + (my - centroid[1]) * nz < 0) {
        nx = -nx;
        nz = -nz;
      }
      const len = Math.hypot(nx, nz) || 1;
      nx /= len;
      nz /= len;

      const toCamX = camPos[0] - (mx - CENTER[0]);
      const toCamZ = camPos[2] - (my - CENTER[1]);
      if (nx * toCamX + nz * toCamZ <= 0) continue;

      walls.push({
        quad: [P(a[0], a[1], bottom), P(b[0], b[1], bottom), P(b[0], b[1], top), P(a[0], a[1], top)],
        depth: P(mx, my, (bottom + top) / 2)[2],
        lit: Math.max(0, nx * LIGHT[0] + nz * LIGHT[2]),
      });
    }

    walls.sort((q, r) => r.depth - q.depth);
    ctx.lineWidth = 0.6;
    for (const wall of walls) {
      const color = rgba(mix(ROCK_DARK, ROCK_LIGHT, 0.1 + 0.36 * wall.lit + 0.04 * level));
      ctx.fillStyle = color;
      ctx.strokeStyle = color;
      tracePoly(ctx, wall.quad);
      ctx.fill();
      ctx.stroke();
    }

    tracePoly(ctx, pts.map(([x, y]) => P(x, y, top)));
    ctx.fillStyle = rgba(mix(ROCK_DARK, ROCK_LIGHT, 0.36 + 0.1 * level));
    ctx.fill();
    ctx.strokeStyle = "rgba(226,220,235,0.26)";
    ctx.lineWidth = 0.8;
    ctx.stroke();
  });
}

function drawRover(ctx: CanvasRenderingContext2D, P: Projector, camPos: V3, pos: Pt, t: Pt) {
  const side: Pt = [-t[1], t[0]];
  // Local rover coords: s = sideways, f = forward, h = height.
  const S = ROVER_SCALE;
  const at = (s: number, f: number, h: number): V3 => [
    pos[0] + S * (s * side[0] + f * t[0]),
    pos[1] + S * (s * side[1] + f * t[1]),
    S * h,
  ];
  const faces: Face[] = [];

  const face = (local: V3[], n: V3, color: number[]) => {
    const pts3 = local.map(([s, f, h]) => at(s, f, h));
    let cx = 0;
    let cy = 0;
    let ch = 0;
    for (const p of pts3) {
      cx += p[0];
      cy += p[1];
      ch += p[2];
    }
    cx /= pts3.length;
    cy /= pts3.length;
    ch /= pts3.length;
    const nw: V3 = [n[0] * side[0] + n[1] * t[0], n[2], n[0] * side[1] + n[1] * t[1]];
    const toCam: V3 = [camPos[0] - (cx - CENTER[0]), camPos[1] - ch, camPos[2] - (cy - CENTER[1])];
    if (dot(nw, toCam) <= 0) return;
    const lit = 0.55 + 0.45 * Math.max(0, dot(nw, LIGHT));
    faces.push({
      pts: pts3.map(([x, y, h]) => P(x, y, h)),
      depth: P(cx, cy, ch)[2],
      fill: rgba(color.map((v) => v * lit)),
    });
  };

  const prism = (poly: Pt[], h0: number, h1: number, color: number[]) => {
    const [cs, cf] = centroidOf(poly);
    poly.forEach((a, j) => {
      const b = poly[(j + 1) % poly.length];
      let ns = b[1] - a[1];
      let nf = a[0] - b[0];
      if (((a[0] + b[0]) / 2 - cs) * ns + ((a[1] + b[1]) / 2 - cf) * nf < 0) {
        ns = -ns;
        nf = -nf;
      }
      const l = Math.hypot(ns, nf) || 1;
      face(
        [
          [a[0], a[1], h0],
          [b[0], b[1], h0],
          [b[0], b[1], h1],
          [a[0], a[1], h1],
        ],
        [ns / l, nf / l, 0],
        color,
      );
    });
    face(poly.map(([s, f]) => [s, f, h1] as V3), [0, 0, 1], color);
  };

  const wheel = (sIn: number, sOut: number, fc: number, r: number) => {
    const n = 10;
    const ring: Pt[] = Array.from({ length: n }, (_, i) => {
      const a = (i / n) * Math.PI * 2;
      return [fc + Math.cos(a) * r, r + Math.sin(a) * r] as Pt;
    });
    ring.forEach((a, i) => {
      const b = ring[(i + 1) % n];
      const am = ((i + 0.5) / n) * Math.PI * 2;
      face(
        [
          [sIn, a[0], a[1]],
          [sOut, a[0], a[1]],
          [sOut, b[0], b[1]],
          [sIn, b[0], b[1]],
        ],
        [0, Math.cos(am), Math.sin(am)],
        WHEEL,
      );
    });
    face(ring.map(([f, h]) => [sOut, f, h] as V3), [Math.sign(sOut), 0, 0], WHEEL_SIDE);
  };

  for (const fc of [-8, 7]) {
    wheel(9, 12, fc, 3.5);
    wheel(-9, -12, fc, 3.5);
  }
  prism(chamferRect(-8, 8, -14, 14, 3.5), 3, 10, SHELL);
  prism(chamferRect(-5.5, 5.5, -9, 10, 2.2), 10, 12, PLATE);

  faces.sort((a, b) => b.depth - a.depth);
  ctx.lineWidth = 0.4;
  for (const f of faces) {
    ctx.fillStyle = f.fill;
    ctx.strokeStyle = f.fill;
    tracePoly(ctx, f.pts);
    ctx.fill();
    ctx.stroke();
  }

  ctx.fillStyle = PERIWINKLE;
  tracePoly(ctx, [at(-3, 10, 10.05), at(0, 15, 10.05), at(3, 10, 10.05)].map((p) => P(...p)));
  ctx.fill();

  const [sx, sy, sz] = P(...at(0, 3, 12.1));
  const k = REF_DEPTH / sz;
  ctx.beginPath();
  ctx.arc(sx, sy, 3.1 * k * S, 0, Math.PI * 2);
  ctx.fillStyle = CORAL;
  ctx.strokeStyle = "rgba(255,136,119,0.38)";
  ctx.lineWidth = 3 * k * S;
  ctx.stroke();
  ctx.fill();
}

export default function RoboticsVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const geometryRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const root = geometryRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !root || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Sample every authored path once; the render loop only projects points.
    const routeEl = root.querySelector<SVGPathElement>('[data-role="route"]');
    if (!routeEl) return;
    const routeLen = routeEl.getTotalLength();
    const routeLine = samplePath(routeEl, 3);
    const routeMarks = Array.from({ length: Math.floor(routeLen / 9) + 1 }, (_, i) => {
      const p = routeEl.getPointAtLength(i * 9);
      return { s: i * 9, pt: [p.x, p.y] as Pt };
    });
    const terrainLines = Array.from(
      root.querySelectorAll<SVGPathElement>('[data-role="terrain"]'),
    ).map((el, i) => ({ pts: samplePath(el, 4), opacity: terrain[i].opacity }));
    const rockGeo: Rock[] = rocks.map((def, r) => {
      const els = root.querySelectorAll<SVGPathElement>(`[data-rock="${r}"]`);
      const rings = Array.from(els).map((el, k) => {
        const pts = samplePath(el, 5, true).map(
          ([x, y]) => [x + def.offset[0], y + def.offset[1]] as Pt,
        );
        return { pts, centroid: centroidOf(pts), bottom: k * def.step, top: (k + 1) * def.step };
      });
      return { rings, center: rings[0].centroid, height: rings.length * def.step };
    });

    let scale = 1;
    let target: V3 | null = null;

    const render = (time: number, dt: number) => {
      const progress = (time % lapMs) / lapMs;
      const d = routeLen * progress;
      const p = routeEl.getPointAtLength(d);
      const behind = routeEl.getPointAtLength(Math.max(0, d - 1));
      const ahead = routeEl.getPointAtLength(Math.min(routeLen, d + 1));
      const screenAngle = Math.atan2(ahead.y - behind.y, ahead.x - behind.x);
      const tangent: Pt = [Math.cos(screenAngle), Math.sin(screenAngle)];
      const rover: Pt = [p.x, p.y];

      // Drone camera: a slow arc that swings, dips and pulls back, loosely
      // tracking the rover so the parallax on the rocks stays readable.
      const phase = ((time % orbitMs) / orbitMs) * Math.PI * 2;
      const desired = world(
        CENTER[0] + (rover[0] - CENTER[0]) * 0.35,
        CENTER[1] + (rover[1] - CENTER[1]) * 0.35,
      );
      if (!target) {
        target = desired;
      } else {
        const k = 1 - Math.exp(-dt * 1.4);
        const prev: V3 = target;
        target = prev.map((v, i) => v + (desired[i] - v) * k) as V3;
      }
      const cam = makeCamera(
        target,
        0.62 * Math.sin(phase),
        1.0 + 0.18 * Math.sin(2 * phase + 0.6),
        515 + 50 * Math.cos(phase),
      );
      const P: Projector = (x, y, h = 0) => project(cam, world(x, y, h));
      const size = (z: number) => REF_DEPTH / z;

      ctx.setTransform(scale, 0, 0, scale, 0, 0);
      ctx.clearRect(0, 0, VIEW_W, VIEW_H);
      ctx.lineJoin = "round";
      ctx.lineCap = "round";

      // Ground layer
      drawGrid(ctx, P);

      ctx.lineWidth = 0.8;
      for (const line of terrainLines) {
        ctx.strokeStyle = `rgba(193,183,211,${0.16 * line.opacity})`;
        tracePoly(ctx, line.pts.map(([x, y]) => P(x, y)), false);
        ctx.stroke();
      }

      ctx.strokeStyle = "rgba(146,159,224,0.12)";
      ctx.lineWidth = 5;
      tracePoly(ctx, routeLine.map(([x, y]) => P(x, y)), false);
      ctx.stroke();

      for (const mark of routeMarks) {
        const [x, y, z] = P(mark.pt[0], mark.pt[1]);
        ctx.fillStyle = mark.s < d ? "rgba(146,159,224,0.28)" : "rgba(146,159,224,0.95)";
        ctx.beginPath();
        ctx.arc(x, y, 1.05 * size(z), 0, Math.PI * 2);
        ctx.fill();
      }

      const breathe = 0.55 + 0.45 * (0.5 + 0.5 * Math.sin((time / 3400) * Math.PI * 2));
      const [gx, gy, gz] = P(GOAL[0], GOAL[1]);
      const gs = size(gz);
      const glow = ctx.createRadialGradient(gx, gy, 0, gx, gy, 34 * gs);
      glow.addColorStop(0, `rgba(146,159,224,${0.3 * breathe})`);
      glow.addColorStop(1, "rgba(146,159,224,0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(gx, gy, 34 * gs, 0, Math.PI * 2);
      ctx.fill();

      ctx.save();
      ctx.shadowColor = "rgba(146,159,224,0.55)";
      ctx.shadowBlur = 7 * scale * gs;
      tracePoly(ctx, circlePts(GOAL, 14).map(([x, y]) => P(x, y)));
      ctx.fillStyle = "rgba(23,21,31,0.78)";
      ctx.fill();
      ctx.strokeStyle = PERIWINKLE;
      ctx.lineWidth = 3 * gs;
      ctx.stroke();
      ctx.restore();
      tracePoly(ctx, circlePts(GOAL, 7, 24).map(([x, y]) => P(x, y)));
      ctx.fillStyle = PERIWINKLE;
      ctx.fill();

      // Contact shadows
      ctx.save();
      ctx.shadowColor = "rgba(4,3,10,0.55)";
      ctx.shadowBlur = 14 * scale;
      ctx.fillStyle = "rgba(6,5,12,0.35)";
      for (const rock of rockGeo) {
        const off = rock.height * 0.6;
        tracePoly(
          ctx,
          rock.rings[0].pts.map(([x, y]) => P(x + off * SHADOW_DIR[0], y + off * SHADOW_DIR[1])),
        );
        ctx.fill();
      }
      const side: Pt = [-tangent[1], tangent[0]];
      tracePoly(
        ctx,
        chamferRect(-11, 11, -16, 16, 4).map(([s, f]) =>
          P(
            rover[0] + ROVER_SCALE * (s * side[0] + f * tangent[0] + 4 * SHADOW_DIR[0]),
            rover[1] + ROVER_SCALE * (s * side[1] + f * tangent[1] + 4 * SHADOW_DIR[1]),
          ),
        ),
      );
      ctx.fill();
      ctx.restore();

      // Everything with height, painted far to near
      const drawables = [
        ...rockGeo.map((rock) => ({
          depth: P(rock.center[0], rock.center[1], rock.height * 0.5)[2],
          draw: () => drawRock(ctx, P, cam.pos, rock),
        })),
        {
          depth: P(rover[0], rover[1], 6 * ROVER_SCALE)[2],
          draw: () => drawRover(ctx, P, cam.pos, rover, tangent),
        },
        {
          depth: gz,
          draw: () => {
            const [tx, ty] = P(GOAL[0], GOAL[1], 64);
            const beam = ctx.createLinearGradient(gx, gy, tx, ty);
            beam.addColorStop(0, `rgba(146,159,224,${0.55 * breathe})`);
            beam.addColorStop(1, "rgba(146,159,224,0)");
            ctx.strokeStyle = beam;
            ctx.lineWidth = 2.2 * gs;
            ctx.beginPath();
            ctx.moveTo(gx, gy);
            ctx.lineTo(tx, ty);
            ctx.stroke();
          },
        },
      ];
      drawables.sort((a, b) => b.depth - a.depth).forEach((o) => o.draw());

    };

    const staticTime = lapMs * 0.62;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(rect.width * dpr));
      canvas.height = Math.max(1, Math.round(rect.height * dpr));
      scale = canvas.width / VIEW_W;
      if (reduceMotion) {
        target = null;
        render(staticTime, 0);
      }
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
      clock += dt * 1000;
      render(clock, dt);
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
    const io = new IntersectionObserver(([entry]) =>
      entry.isIntersecting ? startLoop() : stopLoop(),
    );
    io.observe(canvas);

    return () => {
      stopLoop();
      io.disconnect();
      ro.disconnect();
    };
  }, []);

  return (
    <figure className="robotics-visualization">
      <canvas
        ref={canvasRef}
        className="robotics-canvas"
        role="img"
        aria-label="A drone-view camera circles above a rover as it drives around rock obstacles toward a glowing goal."
      />

      {/* Authoring geometry: sampled once, never displayed. */}
      <svg ref={geometryRef} className="robotics-geometry" aria-hidden="true" focusable="false">
        <path data-role="route" d={route} />
        {terrain.map((line, i) => (
          <path key={`t-${i}`} data-role="terrain" d={line.d} />
        ))}
        {rocks.map((rock, r) =>
          rock.rings.map((d, k) => <path key={`r-${r}-${k}`} data-rock={r} d={d} />),
        )}
      </svg>
    </figure>
  );
}