"use client";

import { useEffect, useRef } from "react";
import "./SWEVisualization.css";

type V3 = [number, number, number];
type P2 = [number, number, number]; // screen x, screen y, camera depth
type Pt = [number, number];
type RGB = number[];
type Projector = (x: number, h: number, z: number) => P2;
type Seg = [number, number, number, number];

// Virtual canvas matches the Robotics scene.
const VIEW_W = 560;
const VIEW_H = 360;
const FOCAL = 525;
const REF_DEPTH = 525;
const NEAR = 30;
// The city runs on a 20 second timeline. Its first 2.5 seconds are only the opening
// hover, so that part is compressed: the cube spins up, then its panels break off.
const CITY_LOOP = 20;
const OPEN_T = 1.3; // seconds the cube spins up before its panels break off
const OPEN_SKIP = 2.5 - OPEN_T;
const LOOP = CITY_LOOP - OPEN_SKIP; // seconds

// Editor window geometry, in world units on the ground plane.
const CHAR = 3.6;
const ROW = 8;
const TITLE = 13;
const GUTTER = 16;
const PAD = 8;
const BAR = 3;
const ROWS = 10;
const WIN_H = TITLE + ROWS * ROW + 6;
const FONT_PX = 10;

const BLUE = [144, 166, 237];
const LILAC = [194, 180, 214];
const CREAM = [238, 230, 229];
const CORAL = [255, 136, 119];
const PERIWINKLE = [146, 159, 224];
const MUTED = [170, 165, 178];
const PALETTE = [BLUE, LILAC, CREAM, CORAL, BLUE, LILAC];
const DARK = [30, 28, 42];
const LIGHT = [132, 126, 152];
const LIGHT_DIR = norm([-0.55, 0.75, -0.4]);

const MONO = 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace';

// ---------------------------------------------------------------- math

function clamp(x: number, lo: number, hi: number) {
  return Math.min(hi, Math.max(lo, x));
}
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}
function smooth01(x: number) {
  const t = clamp(x, 0, 1);
  return t * t * (3 - 2 * t);
}
function smoother(x: number) {
  const t = clamp(x, 0, 1);
  return t * t * t * (t * (t * 6 - 15) + 10);
}
function ramp(t: number, a: number, b: number) {
  return smoother((t - a) / (b - a));
}
function mod(x: number, m: number) {
  return ((x % m) + m) % m;
}
function mix(a: RGB, b: RGB, t: number): RGB {
  return [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];
}
function rgba(c: RGB, a = 1) {
  return `rgba(${Math.round(c[0])},${Math.round(c[1])},${Math.round(c[2])},${a})`;
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
function norm(a: V3): V3 {
  const l = Math.hypot(a[0], a[1], a[2]) || 1;
  return [a[0] / l, a[1] / l, a[2] / l];
}
function hash(a: number, b: number, c: number) {
  const s = Math.sin(a * 127.1 + b * 311.7 + c * 74.7) * 43758.5453;
  return s - Math.floor(s);
}
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

type Camera = { pos: V3; right: V3; up: V3; fwd: V3 };

function makeCamera(target: V3, yaw: number, pitch: number, dist: number): Camera {
  const cp = Math.cos(pitch);
  const sp = Math.sin(pitch);
  const sy = Math.sin(yaw);
  const cy = Math.cos(yaw);
  const pos: V3 = [target[0] + dist * cp * sy, target[1] + dist * sp, target[2] + dist * cp * cy];
  const fwd: V3 = [-cp * sy, -sp, -cp * cy];
  const right: V3 = [cy, 0, -sy];
  return { pos, right, up: cross(right, fwd), fwd };
}

function project(cam: Camera, p: V3): P2 {
  const d = sub(p, cam.pos);
  const z = dot(d, cam.fwd);
  const zs = Math.max(1, z);
  return [VIEW_W / 2 + (FOCAL * dot(d, cam.right)) / zs, VIEW_H / 2 - (FOCAL * dot(d, cam.up)) / zs, z];
}

const random = createRandom(47);
const pick = <T,>(items: T[]): T => items[Math.floor(random() * items.length)];

// ---------------------------------------------------------------- files

// A row is either readable code, a row of code-like bars at an indent, or blank.
type RowSpec = string | number | null;
type Bar = { u0: number; u1: number; color: RGB; opacity: number };
type Row = { v: number; text?: string; lead: number; color: RGB; bars: Bar[] };
type DistrictKey = "sql" | "tf" | "cu" | "py" | "yml";

type FileSpec = {
  key: DistrictKey;
  name: string;
  first: number;
  rows: RowSpec[];
  start: number; // when this file turns into its district
  fall: number; // when the district folds back into the file
};

const FILE_SPECS: FileSpec[] = [
  {
    key: "sql",
    name: "ingest.sql",
    first: 12,
    rows: [
      0,
      "INSERT INTO features (user_id, embedding)",
      "SELECT id, embed(body) FROM events",
      "WHERE ts > now() - INTERVAL '1 day';",
      null,
      0,
      2,
      2,
      0,
      2,
    ],
    start: 4.5,
    fall: 16.8,
  },
  {
    key: "tf",
    name: "main.tf",
    first: 41,
    rows: [
      0,
      'resource "cloud_instance" "gpu_node" {',
      '  machine_type = "gpu-a100-8x"',
      "  count = var.node_count",
      2,
      2,
      4,
      4,
      2,
      0,
    ],
    start: 5.4,
    fall: 16.6,
  },
  {
    key: "cu",
    name: "matmul.cu",
    first: 27,
    rows: [
      "__global__ void matmul(float* A, float* B, float* C) {",
      "  int row = blockIdx.y * blockDim.y + threadIdx.y;",
      2,
      2,
      4,
      4,
      "  C[row * N + col] = sum;",
      0,
      null,
      0,
    ],
    start: 6.3,
    fall: 16.4,
  },
  {
    key: "py",
    name: "server.py",
    first: 58,
    rows: [
      0,
      '@app.post("/predict")',
      "async def predict(req: Request):",
      '    return {"y": model(await req.json())}',
      null,
      0,
      4,
      4,
      8,
      4,
    ],
    start: 7.2,
    fall: 16.2,
  },
  {
    key: "yml",
    name: "deploy.yml",
    first: 19,
    rows: [
      2,
      "    runs-on: ubuntu-latest",
      4,
      "      - run: docker build -t api .",
      "      - run: kubectl apply -f k8s/",
      6,
      6,
      4,
      2,
      2,
    ],
    start: 8.1,
    fall: 16.0,
  },
];

type FileWin = FileSpec & { w: number; cx: number; cz: number; deskX: number; deskZ: number; rowsData: Row[] };

function buildRows(spec: FileSpec, w: number): Row[] {
  return spec.rows.map((r, i) => {
    const v = TITLE + ROW * (i + 0.5) + 2;
    const color = pick([BLUE, LILAC, CREAM, CORAL, CREAM]);
    if (typeof r === "string") {
      const lead = r.length - r.trimStart().length;
      return { v, text: r.trimStart(), lead, color, bars: [] };
    }
    const bars: Bar[] = [];
    if (typeof r === "number") {
      let u = GUTTER + PAD + r * CHAR;
      const count = 3 + Math.floor(random() * 5);
      for (let b = 0; b < count && u < w - PAD - 10; b += 1) {
        const len = 8 + random() * 26;
        const u1 = Math.min(w - PAD, u + len);
        bars.push({ u0: u, u1, color: pick(PALETTE), opacity: 0.5 + random() * 0.35 });
        u = u1 + 4 + random() * 4;
      }
    }
    return { v, lead: 0, color, bars };
  });
}

function widthOf(spec: FileSpec) {
  const longest = Math.max(...spec.rows.map((r) => (typeof r === "string" ? r.length : 0)));
  return Math.max(150, longest * CHAR + GUTTER + PAD * 2);
}

// Back row: storage, data center, GPU hall. Front row: API campus, shipping yard.
function layoutFiles(): FileWin[] {
  const widths = FILE_SPECS.map(widthOf);
  const gap = 22;
  const place = (keys: DistrictKey[], cz: number) => {
    const ws = keys.map((k) => widths[FILE_SPECS.findIndex((f) => f.key === k)]);
    let x = -(ws.reduce((a, b) => a + b, 0) + gap * (ws.length - 1)) / 2;
    return keys.map((k, i) => {
      const cx = x + ws[i] / 2;
      x += ws[i] + gap;
      return { key: k, cx, cz, w: ws[i] };
    });
  };
  const spots = [...place(["sql", "tf", "cu"], -62), ...place(["py", "yml"], 62)];

  // The opening desktop: a tighter, straight three-row layout seen up close.
  const deskGap = 16;
  const deskRows: DistrictKey[][] = [["sql", "tf"], ["py", "cu"], ["yml"]];
  const desk: Record<string, Pt> = {};
  deskRows.forEach((keys, r) => {
    const ws = keys.map((k) => widths[FILE_SPECS.findIndex((f) => f.key === k)]);
    let x = -(ws.reduce((a, b) => a + b, 0) + deskGap * (ws.length - 1)) / 2;
    keys.forEach((k, i) => {
      desk[k] = [x + ws[i] / 2, (r - 1) * (WIN_H + 14)];
      x += ws[i] + deskGap;
    });
  });

  return FILE_SPECS.map((spec) => {
    const spot = spots.find((s) => s.key === spec.key)!;
    return {
      ...spec,
      w: spot.w,
      cx: spot.cx,
      cz: spot.cz,
      deskX: desk[spec.key][0],
      deskZ: desk[spec.key][1],
      rowsData: buildRows(spec, spot.w),
    };
  });
}

const FILES = layoutFiles();

// Opening: the five files are the faces of one glass cube (server.py is the lid).
// The cube spins up, and its panels break off one after another, flying out
// tangentially along curving paths and settling flat onto their lots. At the end of
// the loop the whole thing plays in reverse, so the cube reassembles and spins down.
const CUBE = 110;
const CUBE_LIFT = 10;
const SPIN_START = 0.1;
const SPIN_UP = 1.1;
const OMEGA = 5; // peak spin, radians per second
const THETA0 = 0.6; // resting angle, so two sides of the cube show
const FLY = 0.85;
const RELEASE: Record<DistrictKey, number> = { py: 1.3, yml: 1.36, cu: 1.42, tf: 1.48, sql: 1.54 };
const FACE_NORMAL: Record<DistrictKey, Pt> = { sql: [-1, 0], tf: [0, -1], cu: [1, 0], yml: [0, 1], py: [0, 1] };

function spinAngle(tau: number) {
  const x = clamp((tau - SPIN_START) / SPIN_UP, 0, 1);
  return THETA0 + OMEGA * SPIN_UP * (x ** 3 - x ** 4 / 2) + OMEGA * Math.max(0, tau - SPIN_START - SPIN_UP);
}
function spinRate(tau: number) {
  const x = clamp((tau - SPIN_START) / SPIN_UP, 0, 1);
  return OMEGA * x * x * (3 - 2 * x);
}
function rot2(p: Pt, a: number): Pt {
  const c = Math.cos(a);
  const s = Math.sin(a);
  return [p[0] * c + p[1] * s, -p[0] * s + p[1] * c];
}

// A panel's pose: center, yaw of its "down the file" direction, tilt (0 flat,
// pi/2 upright), and its current size.
type Pose = { c: V3; psi: number; phi: number; w: number; hgt: number };

function attachedPose(f: FileWin, theta: number): Pose {
  const N = rot2(FACE_NORMAL[f.key], theta);
  const psi = Math.atan2(N[0], N[1]);
  if (f.key === "py") return { c: [0, CUBE_LIFT + CUBE, 0], psi, phi: 0, w: CUBE, hgt: CUBE };
  return { c: [(N[0] * CUBE) / 2, CUBE_LIFT + CUBE / 2, (N[1] * CUBE) / 2], psi, phi: Math.PI / 2, w: CUBE, hgt: CUBE };
}

function panelPose(f: FileWin, tau: number): Pose {
  const r = RELEASE[f.key];
  if (tau <= r) return attachedPose(f, spinAngle(tau));
  const th = spinAngle(r);
  const a = attachedPose(f, th);
  const b = attachedPose(f, th + 0.02);

  // leave along the direction of motion; the lid, at the center, heads for its lot
  let T: Pt = [b.c[0] - a.c[0], b.c[2] - a.c[2]];
  if (f.key === "py") T = [f.cx, f.cz];
  const tl = Math.hypot(T[0], T[1]) || 1;
  T = [T[0] / tl, T[1] / tl];

  // keep turning the same way, easing out to the lot's orientation
  const dir = Math.sign(Math.atan2(Math.sin(b.psi - a.psi), Math.cos(b.psi - a.psi))) || 1;
  const turn = Math.PI * 2;
  const spinTravel = OMEGA * FLY; // how far it would turn at full spin during the flight
  let target = dir > 0 ? Math.ceil(a.psi / turn) * turn : Math.floor(a.psi / turn) * turn;
  if (Math.abs(target - a.psi) < spinTravel / 3) target += dir * turn;
  const delta = target - a.psi;
  const k = Math.min(3, spinTravel / Math.abs(delta)); // start at the cube's spin rate

  const u = clamp((tau - r) / FLY, 0, 1);
  const e = 1 - (1 - u) * (1 - u); // leaves at speed, lands gently
  const p0: Pt = [a.c[0], a.c[2]];
  // the first control point sets the launch speed to match the spinning face
  const launch = f.key === "py" ? 6 : (OMEGA * (CUBE / 2) * FLY) / 6;
  const p1: Pt = [p0[0] + T[0] * launch, p0[1] + T[1] * launch];
  const p3: Pt = [f.cx, f.cz];
  const p2: Pt = [lerp(p1[0], p3[0], 0.65), lerp(p1[1], p3[1], 0.65)];
  const m = 1 - e;
  const bx = m * m * m * p0[0] + 3 * m * m * e * p1[0] + 3 * m * e * e * p2[0] + e * e * e * p3[0];
  const bz = m * m * m * p0[1] + 3 * m * m * e * p1[1] + 3 * m * e * e * p2[1] + e * e * e * p3[1];
  const lift = f.key === "py" ? 30 : 16;

  const turnEase = k * (u ** 3 - 2 * u ** 2 + u) + 3 * u ** 2 - 2 * u ** 3;
  return {
    c: [bx, lerp(a.c[1], 0, e) + lift * Math.sin(Math.PI * u) ** 2, bz],
    psi: a.psi + delta * turnEase,
    phi: a.phi * (1 - smooth01(u * 1.8)),
    w: lerp(CUBE, f.w, smoother(u)),
    hgt: lerp(CUBE, WIN_H, smoother(u)),
  };
}

const PER_ROW = 0.17;
const GLASS_HI = [70, 66, 96];
const GLASS_LO = [34, 31, 48];
const FILE_BY_KEY = Object.fromEntries(FILES.map((f) => [f.key, f])) as Record<DistrictKey, FileWin>;

// Lot-local coordinates once a window has settled.
const lotX = (f: FileWin, u: number) => f.cx - f.w / 2 + u;
const lotZ = (f: FileWin, v: number) => f.cz - WIN_H / 2 + v;
const rowV = (i: number) => TITLE + ROW * (i + 0.5) + 2;

// ---------------------------------------------------------------- city

type Item =
  | { type: "box"; x0: number; x1: number; z0: number; z1: number; h: number; deco: Deco; roof: RoofDeco; color: RGB; tint: RGB; tintAmt: number; start: number; dur: number; fall: number }
  | { type: "silo"; cx: number; cz: number; r: number; h: number; start: number; dur: number; fall: number }
  | { type: "container"; x0: number; x1: number; z0: number; z1: number; level: number; color: RGB; start: number; dur: number; fall: number }
  | { type: "crane"; f: FileWin; start: number; dur: number; fall: number };

type Deco = "none" | "dots" | "strips" | "racks" | "vents";
type RoofDeco = "none" | "fans" | "hot";

const ITEMS: Item[] = [];

// Storage: silos rising where the pipeline's rows were.
{
  const f = FILE_BY_KEY.sql;
  const silos: [number, number, number, number][] = [
    [0.2, 0.36, 13, 46],
    [0.42, 0.3, 11, 58],
    [0.65, 0.38, 14, 40],
    [0.85, 0.33, 10, 52],
    [0.32, 0.72, 12, 34],
    [0.56, 0.75, 10, 44],
    [0.78, 0.74, 9, 30],
  ];
  silos.forEach(([u, v, r, h], i) => {
    ITEMS.push({ type: "silo", cx: lotX(f, u * f.w), cz: lotZ(f, v * WIN_H), r, h, start: f.start + i * 0.12, dur: 1.1, fall: f.fall + i * 0.05 });
  });
}

// Data center: each group of code rows extrudes into a long, low rack hall.
{
  const f = FILE_BY_KEY.tf;
  const groups: [number, number, number][] = [
    [1, 3, 15],
    [4, 6, 17],
    [7, 9, 14],
  ];
  groups.forEach(([a, b, h], i) => {
    ITEMS.push({
      type: "box",
      x0: lotX(f, GUTTER + 4),
      x1: lotX(f, f.w - PAD),
      z0: lotZ(f, rowV(a) - ROW / 2),
      z1: lotZ(f, rowV(b) + ROW / 2 - 3),
      h,
      deco: "racks",
      roof: "fans",
      color: PERIWINKLE,
      tint: PERIWINKLE,
      tintAmt: 0.04,
      start: f.start + i * 0.18,
      dur: 1.1,
      fall: f.fall + i * 0.06,
    });
  });
}

// GPU hall: its own building beside the data center, running hot.
{
  const f = FILE_BY_KEY.cu;
  const groups: [number, number, number][] = [
    [0, 3, 22],
    [5, 9, 19],
  ];
  groups.forEach(([a, b, h], i) => {
    ITEMS.push({
      type: "box",
      x0: lotX(f, GUTTER + 4),
      x1: lotX(f, f.w - PAD),
      z0: lotZ(f, rowV(a) - ROW / 2),
      z1: lotZ(f, rowV(b) + ROW / 2 - 3),
      h,
      deco: "vents",
      roof: "hot",
      color: CORAL,
      tint: CORAL,
      tintAmt: 0.05,
      start: f.start + i * 0.2,
      dur: 1.1,
      fall: f.fall + i * 0.06,
    });
  });
}

// API campus: the tower is drawn from the file itself; offices sit beside it.
const TOWER_W = 46;
const TOWER_H = 150;
{
  const f = FILE_BY_KEY.py;
  const offices: [number, number, number, number, number][] = [
    [8, 44, 20, 70, 58],
    [f.w - 46, f.w - 8, 40, 94, 46],
  ];
  offices.forEach(([u0, u1, v0, v1, h], i) => {
    ITEMS.push({
      type: "box",
      x0: lotX(f, u0),
      x1: lotX(f, u1),
      z0: lotZ(f, v0),
      z1: lotZ(f, v1),
      h,
      deco: "strips",
      roof: "none",
      color: BLUE,
      tint: BLUE,
      tintAmt: 0.06,
      start: f.start + 0.7 + i * 0.2,
      dur: 1.1,
      fall: f.fall,
    });
  });
}

// Shipping yard: every line becomes a row of stacked containers under a gantry crane.
{
  const f = FILE_BY_KEY.yml;
  for (let i = 1; i < ROWS - 1; i += 1) {
    const v = rowV(i);
    for (let u = GUTTER + 8; u + 12 < f.w - 10; u += 13.5) {
      if (random() < 0.15) continue;
      const levels = 1 + Math.floor(random() * 3);
      const color = pick([CORAL, BLUE, LILAC, CREAM, BLUE]);
      for (let level = 0; level < levels; level += 1) {
        ITEMS.push({
          type: "container",
          x0: lotX(f, u),
          x1: lotX(f, u + 12),
          z0: lotZ(f, v - 2.6),
          z1: lotZ(f, v + 2.6),
          level,
          color,
          start: f.start + i * 0.06 + level * 0.22 + (u / f.w) * 0.12,
          dur: 0.6,
          fall: f.fall + level * 0.05,
        });
      }
    }
  }
  ITEMS.push({ type: "crane", f, start: f.start + 0.4, dur: 1, fall: f.fall });
}

// Ordinary city fabric around the districts, packed tight so blocks read as one city.
// Blocks in front of the districts stay low so the camera can see over them;
// the skyline behind is taller.
function addFabric(x0: number, x1: number, z0: number, z1: number, band: "back" | "front" | "side") {
  if (random() < 0.12) return;
  const split = x1 - x0 > 26 && random() < 0.5 ? x0 + 11 + random() * (x1 - x0 - 22) : null;
  const spans: Pt[] = split ? [[x0, split - 1], [split + 1, x1]] : [[x0, x1]];
  for (const [a, b] of spans) {
    const r = Math.hypot((a + b) / 2 / 380, (z0 + z1) / 2 / 290);
    ITEMS.push({
      type: "box",
      x0: a,
      x1: b,
      z0,
      z1,
      h: band === "front" ? 6 + random() * 10 : band === "side" ? 8 + random() * 18 : 14 + random() ** 1.4 * 40 + (1 - r) * 12,
      deco: "dots",
      roof: "none",
      color: pick(PALETTE),
      tint: DARK,
      tintAmt: 0,
      start: 8.6 + r * 0.9,
      dur: 1.2,
      fall: 15.6 + (1 - r) * 0.4,
    });
  }
}
for (let x = -380; x < 380; x += 40) {
  for (let z = -148; z > -300; z -= 32) addFabric(x, x + 34, z, z + 26, "back");
  for (let z = 122; z < 290; z += 32) addFabric(x, x + 34, z, z + 26, "front");
}
for (const [x0, x1] of [[-376, -342], [-338, -304], [304, 338], [342, 376]]) {
  for (let z = -110; z < 110; z += 32) addFabric(x0, x1, z, z + 26, "side");
}

// Traffic routes along the streets, telling the data story.
type Route = { pts: Pt[]; cum: number[]; len: number };
function route(pts: Pt[]): Route {
  const cum = [0];
  for (let i = 1; i < pts.length; i += 1) {
    cum.push(cum[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
  }
  return { pts, cum, len: cum[cum.length - 1] };
}
function along(r: Route, s: number): Pt {
  for (let i = 1; i < r.pts.length; i += 1) {
    if (s <= r.cum[i]) {
      const u = (s - r.cum[i - 1]) / (r.cum[i] - r.cum[i - 1] || 1);
      return [lerp(r.pts[i - 1][0], r.pts[i][0], u), lerp(r.pts[i - 1][1], r.pts[i][1], u)];
    }
  }
  return r.pts[r.pts.length - 1];
}

const S = FILE_BY_KEY.sql;
const D = FILE_BY_KEY.tf;
const G = FILE_BY_KEY.cu;
const A = FILE_BY_KEY.py;
const Y = FILE_BY_KEY.yml;
const BACK = -12;
const FRONT = 12;
const TOWER_BACK = A.cz - TOWER_W / 2 - 1;
const TOWER_FRONT = A.cz + TOWER_W / 2 + 1;
const WAVE_SPEED = 60;

// Each pulse is a short train of lights leaving at t0. Arrivals trigger the next step,
// so the loop tells one story: data leaves storage, is processed in the data center,
// crunched in the GPU hall, lights up the model tower, and is served out to the city.
type Pulse = { r: Route; t0: number; speed: number; count: number; spacing: number; color: RGB; box: boolean };
const pulse = (pts: Pt[], t0: number, speed: number, count: number, color: RGB, box = false, spacing = 9): Pulse => ({
  r: route(pts),
  t0,
  speed,
  count,
  spacing,
  color,
  box,
});
const arrive = (p: Pulse) => p.t0 + p.r.len / p.speed;

const STORE_PULSE = pulse([[S.cx, BACK], [S.cx, 0], [D.cx, 0], [D.cx, BACK]], 8.6, 200, 6, CREAM);
const DC_T = arrive(STORE_PULSE);
const DC_PULSE = pulse([[D.cx, BACK], [D.cx, 0], [G.cx, 0], [G.cx, BACK]], DC_T + 0.15, 200, 6, PERIWINKLE);
const GPU_T = arrive(DC_PULSE);
const GPU_PULSE = pulse([[G.cx, BACK], [G.cx, 0], [A.cx, 0], [A.cx, TOWER_BACK]], GPU_T + 0.15, 200, 7, PERIWINKLE);
const TOWER_T = arrive(GPU_PULSE);
const BEACON_T = TOWER_T + (TOWER_H + 12) / WAVE_SPEED;
const OUT_PULSES = [-1, 1].map((side) =>
  pulse([[A.cx, TOWER_FRONT], [A.cx, 116], [side * 380, 116]], TOWER_T + 0.8, 160, 6, CORAL, false, 11),
);
// A deploy rolls in from the shipping yard to the tower.
const DEPLOY_PULSE = pulse([[Y.cx, FRONT], [Y.cx, 0], [A.cx + 30, 0], [A.cx + 30, TOWER_BACK + 4]], 9.6, 70, 1, LILAC, true);
const DEPLOY_T = arrive(DEPLOY_PULSE);
const PULSES = [STORE_PULSE, DC_PULSE, GPU_PULSE, ...OUT_PULSES, DEPLOY_PULSE];

// Quiet ambient traffic on the outer streets keeps the city alive.
type Flow = { r: Route; speed: number; color: RGB; count: number; phase: number };
const AMBIENT: Flow[] = [
  { r: route([[-380, -116], [380, -116]]), speed: 24, color: CREAM, count: 5, phase: 0.4 },
  { r: route([[380, -116], [-380, -116]]), speed: 20, color: LILAC, count: 4, phase: 0.9 },
];

function bump(t: number, t0: number, rise = 0.25, decay = 1.6) {
  if (t < t0) return 0;
  return Math.min(1, (t - t0) / rise) * Math.exp(-Math.max(0, t - t0 - rise) / decay);
}

type Activity = { store: number; dc: number; gpu: number };

// ---------------------------------------------------------------- drawing helpers

type Env = { ctx: CanvasRenderingContext2D; P: Projector; cam: V3; time: number; t: number; act: Activity; scale: number };

const size = (z: number) => REF_DEPTH / Math.max(NEAR, z);

function tracePoly(ctx: CanvasRenderingContext2D, pts: P2[]) {
  ctx.beginPath();
  pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
  ctx.closePath();
}

function bilerp(q: P2[], u: number, v: number): Pt {
  const bx = lerp(q[0][0], q[1][0], u);
  const by = lerp(q[0][1], q[1][1], u);
  const tx = lerp(q[3][0], q[2][0], u);
  const ty = lerp(q[3][1], q[2][1], u);
  return [lerp(bx, tx, v), lerp(by, ty, v)];
}

function drawGlow(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, c: RGB, a: number) {
  if (a <= 0.01 || r <= 0) return;
  const g = ctx.createRadialGradient(x, y, 0, x, y, r);
  g.addColorStop(0, rgba(c, a));
  g.addColorStop(1, rgba(c, 0));
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();
}

// Text laid along a direction on screen, sized to span exactly a to b.
function drawText(ctx: CanvasRenderingContext2D, text: string, a: P2, b: P2, color: RGB, alpha: number, glowPx = 0) {
  const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
  if (len < 2 || alpha <= 0.01) return;
  const measured = ctx.measureText(text).width || 1;
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.fillStyle = rgba(color);
  if (glowPx > 0) {
    ctx.shadowColor = rgba(color, 0.55);
    ctx.shadowBlur = glowPx;
  }
  ctx.translate(a[0], a[1]);
  ctx.rotate(Math.atan2(b[1] - a[1], b[0] - a[0]));
  ctx.scale(len / measured, len / measured);
  ctx.fillText(text, 0, 0);
  ctx.restore();
}

function wallColor(lit: number, tint: RGB, tintAmt: number, lift = 0) {
  return mix(mix(DARK, LIGHT, 0.1 + 0.32 * lit + lift), tint, tintAmt);
}

// The tower lights floor by floor once compute arrives, then stays lit while serving.
function towerWave(h: number, t: number) {
  if (t < TOWER_T) return 0;
  const waveH = (t - TOWER_T) * WAVE_SPEED - 12;
  return Math.exp(-((h - waveH) ** 2) / (2 * 14 * 14));
}
function towerBase(t: number) {
  return 0.3 + 0.3 * ramp(t, TOWER_T + 1.2, BEACON_T + 0.5);
}

type Wall = { q: P2[]; depth: number; lit: number; len: number; face: number };

function boxWalls(env: Env, x0: number, x1: number, z0: number, z1: number, h0: number, h1: number): Wall[] {
  const { P, cam } = env;
  const defs: [number, number, number, number, number, number][] = [
    [x0, z1, x1, z1, 0, 1],
    [x1, z0, x0, z0, 0, -1],
    [x1, z1, x1, z0, 1, 0],
    [x0, z0, x0, z1, -1, 0],
  ];
  const walls: Wall[] = [];
  defs.forEach(([ax, az, bx, bz, nx, nz], face) => {
    const mx = (ax + bx) / 2;
    const mz = (az + bz) / 2;
    if (nx * (cam[0] - mx) + nz * (cam[2] - mz) <= 0) return;
    const q = [P(ax, h0, az), P(bx, h0, bz), P(bx, h1, bz), P(ax, h1, az)];
    if (q.some((p) => p[2] < NEAR)) return;
    walls.push({
      q,
      depth: P(mx, (h0 + h1) / 2, mz)[2],
      lit: Math.max(0, nx * LIGHT_DIR[0] + nz * LIGHT_DIR[2]),
      len: Math.hypot(bx - ax, bz - az),
      face,
    });
  });
  return walls.sort((a, b) => b.depth - a.depth);
}

function decorateWall(env: Env, w: Wall, h0: number, h1: number, deco: Deco, color: RGB, seed: number, alpha: number, wave = false) {
  const { ctx, time, t, act } = env;
  const k = size(w.q[0][2]);
  const hgt = h1 - h0;

  if (deco === "dots") {
    const cols = Math.floor(w.len / 5);
    const rows = Math.floor((hgt - 2.5) / 5.5);
    if (cols < 1 || rows < 1) return;
    ctx.fillStyle = rgba(mix(color, CREAM, 0.35));
    for (let r = 0; r < rows; r += 1) {
      const v = (2.5 + r * 5.5 + 1.5) / hgt;
      for (let c = 0; c < cols; c += 1) {
        const lit = hash(seed, w.face * 97 + r * 13 + c, Math.floor(time * 0.25 + hash(seed, r, c) * 8));
        if (lit > 0.36) continue;
        const [px, py] = bilerp(w.q, (c + 0.5) / cols, v);
        ctx.globalAlpha = alpha * 0.7;
        ctx.fillRect(px - 0.65 * k, py - 0.9 * k, 1.3 * k, 1.8 * k);
      }
    }
  } else if (deco === "strips") {
    ctx.lineWidth = 1.2 * k;
    for (let r = 0, hRow = h0 + 4; hRow < h1 - 2.5; r += 1, hRow += 7) {
      const v = (hRow - h0) / hgt;
      let u = 0.06;
      let n = 0;
      while (u < 0.9) {
        const u1 = Math.min(0.94, u + 0.1 + hash(seed, w.face * 31 + r, n) * 0.22);
        const c = PALETTE[Math.floor(hash(seed, r, n + 7) * PALETTE.length)];
        const base = towerBase(t);
        const a = wave ? base + (1 - base) * towerWave(hRow, t) : 0.55;
        const p0 = bilerp(w.q, u, v);
        const p1 = bilerp(w.q, u1, v);
        ctx.globalAlpha = alpha * a;
        ctx.strokeStyle = rgba(mix(c, CREAM, 0.25));
        ctx.beginPath();
        ctx.moveTo(p0[0], p0[1]);
        ctx.lineTo(p1[0], p1[1]);
        ctx.stroke();
        u = u1 + 0.05;
        n += 1;
      }
    }
  } else if (deco === "racks") {
    if (hgt < 6) return;
    const cols = Math.floor(w.len / 4);
    for (const v of [0.3, 0.62]) {
      for (let c = 0; c < cols; c += 1) {
        const on = hash(seed, c + v * 100, Math.floor(time * (2.5 + 3 * act.dc) + hash(c, seed, v) * 6));
        if (on > 0.3 + 0.4 * act.dc) continue;
        const [px, py] = bilerp(w.q, (c + 0.5) / cols, v);
        ctx.globalAlpha = alpha * clamp(0.4 + 0.6 * act.dc, 0, 1);
        ctx.fillStyle = rgba(c % 3 === 0 ? CREAM : PERIWINKLE);
        ctx.fillRect(px - 0.55 * k, py - 0.55 * k, 1.1 * k, 1.1 * k);
      }
    }
  } else if (deco === "vents") {
    const cols = Math.floor(w.len / 5);
    ctx.lineWidth = 1 * k;
    ctx.strokeStyle = rgba(CORAL);
    for (let c = 0; c < cols; c += 1) {
      const u = (c + 0.5) / cols;
      const p0 = bilerp(w.q, u, 0.2);
      const p1 = bilerp(w.q, u, 0.8);
      ctx.globalAlpha = alpha * clamp((0.2 + 0.8 * act.gpu) * (0.5 + 0.5 * (0.5 + 0.5 * Math.sin(time * 2.2 + c * 0.7 + seed))), 0, 1);
      ctx.beginPath();
      ctx.moveTo(p0[0], p0[1]);
      ctx.lineTo(p1[0], p1[1]);
      ctx.stroke();
    }
  }
}

function decorateRoof(env: Env, q: P2[], w: number, d: number, roof: RoofDeco, seed: number, alpha: number) {
  if (roof === "none") return;
  const { ctx, time, act } = env;
  const k = size(q[0][2]);
  const cols = Math.max(1, Math.floor(w / 10));
  const rows = Math.max(1, Math.floor(d / 9));
  const hot = roof === "hot";
  for (let r = 0; r < rows; r += 1) {
    for (let c = 0; c < cols; c += 1) {
      const [px, py] = bilerp(q, (c + 0.5) / cols, (r + 0.5) / rows);
      const s = 3.4 * k;
      ctx.globalAlpha = alpha;
      ctx.fillStyle = rgba(mix(DARK, LIGHT, 0.18));
      ctx.fillRect(px - s / 2, py - s / 2, s, s);
      ctx.strokeStyle = "rgba(226,220,235,0.22)";
      ctx.lineWidth = 0.5 * k;
      ctx.strokeRect(px - s / 2, py - s / 2, s, s);
      const pulse = 0.5 + 0.5 * Math.sin(time * (hot ? 3 : 1.4) + hash(seed, r, c) * 6);
      const level = hot ? act.gpu : act.dc;
      if (hot) {
        ctx.globalAlpha = alpha * clamp(0.3 + 0.8 * level, 0, 1) * pulse;
        drawGlow(ctx, px, py, 4 * k, CORAL, 0.5);
      }
      ctx.globalAlpha = alpha * clamp((0.3 + 0.7 * level) * (0.5 + 0.5 * pulse), 0, 1);
      ctx.fillStyle = rgba(hot ? CORAL : PERIWINKLE);
      ctx.fillRect(px - 0.5 * k, py - 0.5 * k, 1 * k, 1 * k);
    }
  }
}

function drawBox(
  env: Env,
  x0: number,
  x1: number,
  z0: number,
  z1: number,
  h0: number,
  h1: number,
  o: { deco: Deco; roof: RoofDeco; color: RGB; tint: RGB; tintAmt: number; seed: number; alpha: number; lift?: number; roofTint?: RGB; wave?: boolean },
) {
  const { ctx, P } = env;
  if (h1 - h0 < 0.05) return;
  for (const w of boxWalls(env, x0, x1, z0, z1, h0, h1)) {
    const c = rgba(wallColor(w.lit, o.tint, o.tintAmt, o.lift ?? 0));
    ctx.globalAlpha = o.alpha;
    ctx.fillStyle = c;
    ctx.strokeStyle = c;
    ctx.lineWidth = 0.5;
    tracePoly(ctx, w.q);
    ctx.fill();
    ctx.stroke();
    decorateWall(env, w, h0, h1, o.deco, o.color, o.seed, o.alpha, o.wave);
  }
  const roof = [P(x0, h1, z0), P(x1, h1, z0), P(x1, h1, z1), P(x0, h1, z1)];
  if (roof.some((p) => p[2] < NEAR)) return;
  ctx.globalAlpha = o.alpha;
  ctx.fillStyle = rgba(mix(mix(DARK, LIGHT, 0.36 + (o.lift ?? 0)), o.roofTint ?? o.tint, o.roofTint ? 0.3 : o.tintAmt));
  tracePoly(ctx, roof);
  ctx.fill();
  ctx.strokeStyle = "rgba(226,220,235,0.2)";
  ctx.lineWidth = 0.7;
  ctx.stroke();
  decorateRoof(env, roof, x1 - x0, z1 - z0, o.roof, o.seed, o.alpha);
}

function drawSilo(env: Env, cx: number, cz: number, r: number, h: number, alpha: number) {
  const { ctx, P, cam } = env;
  const n = 20;
  const angles = Array.from({ length: n }, (_, i) => (i / n) * Math.PI * 2);
  const sides: { q: P2[]; depth: number; lit: number }[] = [];
  angles.forEach((a0) => {
    const a1 = a0 + (Math.PI * 2) / n;
    const am = a0 + Math.PI / n;
    const nx = Math.cos(am);
    const nz = Math.sin(am);
    const mx = cx + nx * r;
    const mz = cz + nz * r;
    if (nx * (cam[0] - mx) + nz * (cam[2] - mz) <= 0) return;
    const ax = cx + Math.cos(a0) * r;
    const az = cz + Math.sin(a0) * r;
    const bx = cx + Math.cos(a1) * r;
    const bz = cz + Math.sin(a1) * r;
    const q = [P(ax, 0, az), P(bx, 0, bz), P(bx, h, bz), P(ax, h, az)];
    if (q.some((p) => p[2] < NEAR)) return;
    sides.push({ q, depth: P(mx, h / 2, mz)[2], lit: Math.max(0, nx * LIGHT_DIR[0] + nz * LIGHT_DIR[2]) });
  });
  sides.sort((a, b) => b.depth - a.depth);
  ctx.globalAlpha = alpha;
  ctx.lineWidth = 0.5;
  for (const s of sides) {
    const c = rgba(wallColor(s.lit, LILAC, 0.08, 0.02));
    ctx.fillStyle = c;
    ctx.strokeStyle = c;
    tracePoly(ctx, s.q);
    ctx.fill();
    ctx.stroke();
  }
  // bands brighten as a batch of data leaves storage
  ctx.strokeStyle = rgba(mix([226, 220, 235], CREAM, env.act.store), 0.22 + 0.5 * env.act.store);
  ctx.lineWidth = 0.7;
  for (const f of [0.33, 0.66]) {
    for (const s of sides) {
      const a = bilerp(s.q, 0, f);
      const b = bilerp(s.q, 1, f);
      ctx.beginPath();
      ctx.moveTo(a[0], a[1]);
      ctx.lineTo(b[0], b[1]);
      ctx.stroke();
    }
  }
  const top = angles.map((a) => P(cx + Math.cos(a) * r, h, cz + Math.sin(a) * r));
  if (top.some((p) => p[2] < NEAR)) return;
  ctx.fillStyle = rgba(mix(mix(DARK, LIGHT, 0.4), LILAC, 0.12));
  tracePoly(ctx, top);
  ctx.fill();
  ctx.strokeStyle = "rgba(226,220,235,0.26)";
  ctx.stroke();
  const c = P(cx, h, cz);
  ctx.fillStyle = rgba(mix(DARK, LIGHT, 0.2));
  ctx.beginPath();
  ctx.arc(c[0], c[1], r * 0.25 * size(c[2]), 0, Math.PI * 2);
  ctx.fill();
}

function drawCrane(env: Env, f: FileWin, rise: number, alpha: number) {
  const { ctx, P, time } = env;
  const H = 36 * rise;
  const xa = lotX(f, 10);
  const xb = lotX(f, f.w - 10);
  const za = lotZ(f, 8);
  const zb = lotZ(f, WIN_H - 6);
  const o = { deco: "none" as Deco, roof: "none" as RoofDeco, color: CREAM, tint: LILAC, tintAmt: 0.25, seed: 3, alpha, lift: 0.1 };
  for (const x of [xa, xb]) for (const z of [za, zb]) drawBox(env, x - 1, x + 1, z - 1, z + 1, 0, H, o);
  drawBox(env, xa - 1, xb + 1, za - 1.2, za + 1.2, H - 2.4, H, o);
  drawBox(env, xa - 1, xb + 1, zb - 1.2, zb + 1.2, H - 2.4, H, o);
  if (rise < 0.95) return;
  // trolley with a hanging container
  const u = 0.5 + 0.42 * Math.sin(time * 0.5);
  const x = lerp(xa + 12, xb - 12, u);
  const zm = (za + zb) / 2;
  const hook = H - 12 - 4 * (0.5 + 0.5 * Math.sin(time * 0.9));
  const top = P(x, H - 2.4, zm);
  const bottom = P(x, hook + 5, zm);
  ctx.globalAlpha = alpha;
  ctx.strokeStyle = "rgba(210,204,220,0.6)";
  ctx.lineWidth = 0.5 * size(top[2]);
  ctx.beginPath();
  ctx.moveTo(top[0], top[1]);
  ctx.lineTo(bottom[0], bottom[1]);
  ctx.stroke();
  drawBox(env, x - 6, x + 6, zm - 2.6, zm + 2.6, hook, hook + 5, { ...o, tint: CORAL, tintAmt: 0.35, lift: 0.05 });
}

// ---------------------------------------------------------------- windows

type Mapper = (u: number, v: number) => V3;

function poseAxes(p: Pose) {
  const U: V3 = [Math.cos(p.psi), 0, -Math.sin(p.psi)];
  const V: V3 = [Math.sin(p.psi) * Math.cos(p.phi), -Math.sin(p.phi), Math.cos(p.psi) * Math.cos(p.phi)];
  return { U, V, n: cross(V, U) };
}

function poseMapper(f: FileWin, p: Pose): Mapper {
  const { U, V } = poseAxes(p);
  return (u, v) => {
    const a = (u / f.w - 0.5) * p.w;
    const b = (v / WIN_H - 0.5) * p.hgt;
    return [p.c[0] + U[0] * a + V[0] * b, p.c[1] + U[1] * a + V[1] * b, p.c[2] + U[2] * a + V[2] * b];
  };
}

// The API file stands up on its front edge and becomes the tower's facade.
function towerMapper(f: FileWin, p: number): Mapper {
  const w = lerp(f.w, TOWER_W, p);
  const L = lerp(WIN_H, TOWER_H, p);
  const hinge = lerp(f.cz + WIN_H / 2, f.cz + TOWER_W / 2, p);
  const th = (p * Math.PI) / 2;
  return (u, v) => {
    const d = ((WIN_H - v) / WIN_H) * L;
    return [f.cx + (u / f.w - 0.5) * w, d * Math.sin(th), hinge - d * Math.cos(th)];
  };
}

function drawWindow(
  env: Env,
  f: FileWin,
  M: Mapper,
  o: { panel: number; frame: number; rows: number; text: number; facade: number; wave: boolean; fade: number; typeT: number; glow: number; chrome?: number; ink?: number },
) {
  const { ctx, P, time } = env;
  const Q = (u: number, v: number) => {
    const [x, h, z] = M(u, v);
    return P(x, h, z);
  };
  const corners = [Q(0, WIN_H), Q(f.w, WIN_H), Q(f.w, 0), Q(0, 0)];
  if (corners.some((p) => p[2] < NEAR)) return;
  const k = size(corners[0][2]);

  // glass sheet with a gentle glow; it turns opaque as the API file becomes a facade
  if (o.panel > 0.01) {
    const facadeC = mix(DARK, LIGHT, 0.2);
    const g = ctx.createLinearGradient(corners[3][0], corners[3][1], corners[1][0], corners[1][1]);
    g.addColorStop(0, rgba(mix(GLASS_HI, facadeC, o.facade), lerp(0.42, 0.94, o.facade)));
    g.addColorStop(1, rgba(mix(GLASS_LO, facadeC, o.facade), lerp(0.26, 0.94, o.facade)));
    ctx.save();
    ctx.globalAlpha = o.panel * o.fade;
    ctx.fillStyle = g;
    ctx.shadowColor = rgba(PERIWINKLE, 0.22 * (1 - o.facade));
    ctx.shadowBlur = 18 * env.scale;
    tracePoly(ctx, corners);
    ctx.fill();
    ctx.restore();

    // top-edge highlight catching the light
    const hi0 = Q(1.5, 0.4);
    const hi1 = Q(f.w - 1.5, 0.4);
    ctx.globalAlpha = o.panel * o.fade * (1 - o.facade);
    ctx.strokeStyle = "rgba(255,255,255,0.22)";
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    ctx.moveTo(hi0[0], hi0[1]);
    ctx.lineTo(hi1[0], hi1[1]);
    ctx.stroke();

    const titleA = o.panel * (1 - o.facade) * o.fade * (o.chrome ?? 1);
    if (titleA > 0.01) {
      ctx.globalAlpha = titleA;
      ctx.fillStyle = "rgba(255,255,255,0.05)";
      tracePoly(ctx, [Q(0, TITLE), Q(f.w, TITLE), Q(f.w, 0), Q(0, 0)]);
      ctx.fill();
      [CORAL, LILAC, PERIWINKLE].forEach((c, i) => {
        const p = Q(7 + i * 6, TITLE / 2);
        ctx.fillStyle = rgba(c, 0.85);
        ctx.beginPath();
        ctx.arc(p[0], p[1], 1.5 * size(p[2]), 0, Math.PI * 2);
        ctx.fill();
      });
      const nameW = f.name.length * CHAR * 0.85;
      drawText(ctx, f.name, Q(f.w / 2 - nameW / 2, TITLE / 2 + 0.4), Q(f.w / 2 + nameW / 2, TITLE / 2 + 0.4), MUTED, titleA * 0.8);
    }
  }
  if (o.frame > 0.01) {
    ctx.globalAlpha = o.frame * o.fade;
    ctx.strokeStyle = `rgba(226,220,235,${0.22 + 0.12 * o.panel * (1 - o.facade)})`;
    ctx.lineWidth = 0.8;
    tracePoly(ctx, corners);
    ctx.stroke();
  }

  // rows: gutter numbers, readable code, bars, typed out one row at a time
  const glowPx = o.glow * 3 * env.scale;
  let cursor: { u: number; v: number } | null = null;
  f.rowsData.forEach((row, i) => {
    const tail = i >= ROWS - 2 ? (i === ROWS - 1 ? 0.3 : 0.6) : 1;
    const rp = clamp((o.typeT - i * PER_ROW) / PER_ROW, 0, 1);
    if (rp <= 0) return;
    let end = GUTTER + PAD + row.lead * CHAR;
    if (o.text > 0.01) {
      const num = String(f.first + i);
      const nw = num.length * CHAR * 0.8;
      drawText(ctx, num, Q(GUTTER - 3 - nw, row.v), Q(GUTTER - 3, row.v), MUTED, o.text * 0.45 * tail * o.fade);
      if (row.text) {
        const u0 = GUTTER + PAD + row.lead * CHAR;
        const n = Math.ceil(row.text.length * rp);
        drawText(ctx, row.text.slice(0, n), Q(u0, row.v), Q(u0 + n * CHAR, row.v), row.color, o.text * 0.9 * tail * o.fade, glowPx);
        end = u0 + n * CHAR;
      }
    }
    if (o.rows > 0.01 && row.bars.length) {
      if (glowPx > 0) {
        ctx.save();
        ctx.shadowBlur = glowPx;
      }
      row.bars.forEach((b, j) => {
        const grow = clamp(rp * row.bars.length - j, 0, 1);
        if (grow <= 0) return;
        const uEnd = lerp(b.u0 + BAR / 2, b.u1 - BAR / 2, grow);
        end = uEnd + BAR / 2;
        const a = Q(b.u0 + BAR / 2, row.v);
        const e = Q(uEnd, row.v);
        if (glowPx > 0) ctx.shadowColor = rgba(b.color, 0.5);
        const base = towerBase(env.t);
        const lit = o.wave ? base + (1 - base) * towerWave(M(0, row.v)[1], env.t) : 1;
        ctx.globalAlpha = o.rows * b.opacity * tail * lit * o.fade;
        ctx.strokeStyle = rgba(o.wave ? mix(b.color, CREAM, 0.25) : b.color);
        ctx.lineWidth = BAR * k * lerp(1, 0.55, o.facade) * (o.ink ?? 1);
        ctx.beginPath();
        ctx.moveTo(a[0], a[1]);
        ctx.lineTo(e[0], e[1]);
        ctx.stroke();
      });
      if (glowPx > 0) ctx.restore();
    }
    cursor = { u: end + 1.5, v: row.v };
  });

  // blinking cursor: solid while typing, blinking once the file is written
  const c = cursor as { u: number; v: number } | null;
  if (c && o.text > 0.01 && o.glow > 0.01 && o.typeT < ROWS * PER_ROW + 1.2) {
    const typing = o.typeT < ROWS * PER_ROW;
    const blink = typing ? 1 : mod(time * 1.6, 1) < 0.55 ? 1 : 0;
    if (blink) {
      const a = Q(c.u, c.v - 3.2);
      const b = Q(c.u, c.v + 3.2);
      ctx.save();
      ctx.globalAlpha = o.text * o.fade * 0.9 * o.glow;
      ctx.strokeStyle = rgba(CREAM);
      ctx.shadowColor = rgba(PERIWINKLE, 0.7);
      ctx.shadowBlur = 6 * env.scale;
      ctx.lineWidth = 1.1 * size(a[2]);
      ctx.beginPath();
      ctx.moveTo(a[0], a[1]);
      ctx.lineTo(b[0], b[1]);
      ctx.stroke();
      ctx.restore();
    }
  }
  ctx.globalAlpha = 1;
}

function drawTower(env: Env, f: FileWin, p: number, text: number, fade: number, panel: number, rows: number) {
  const { ctx, P, cam, time } = env;
  const x0 = f.cx - TOWER_W / 2;
  const x1 = f.cx + TOWER_W / 2;
  const z0 = f.cz - TOWER_W / 2;
  const z1 = f.cz + TOWER_W / 2;
  const bodyA = smooth01((p - 0.6) / 0.4) * fade;
  const M = towerMapper(f, p);

  // plane normal decides whether the facade faces the camera
  const th = (p * Math.PI) / 2;
  const n: V3 = [0, Math.cos(th), Math.sin(th)];
  const mid = M(f.w / 2, WIN_H / 2);
  const facadeVisible = dot(n, sub(cam, mid)) > 0;

  const o = { deco: "strips" as Deco, roof: "none" as RoofDeco, color: BLUE, tint: BLUE, tintAmt: 0.05, seed: 11, alpha: bodyA, wave: true };
  const walls = bodyA > 0.01 ? boxWalls(env, x0, x1, z0, z1, 0, TOWER_H).filter((w) => w.face !== 0) : [];
  const facade = { depth: P(f.cx, TOWER_H / 2, z1)[2] };
  const order = [...walls.map((w) => ({ depth: w.depth, w })), ...(facadeVisible ? [{ depth: facade.depth, w: null as Wall | null }] : [])];
  order.sort((a, b) => b.depth - a.depth);

  for (const item of order) {
    if (item.w) {
      const c = rgba(wallColor(item.w.lit, BLUE, 0.05));
      ctx.globalAlpha = bodyA;
      ctx.fillStyle = c;
      ctx.strokeStyle = c;
      ctx.lineWidth = 0.5;
      tracePoly(ctx, item.w.q);
      ctx.fill();
      ctx.stroke();
      decorateWall(env, item.w, 0, TOWER_H, "strips", BLUE, 11, bodyA, true);
    } else {
      drawWindow(env, f, M, { panel, frame: 1 - p, rows, text, facade: p, wave: p > 0.9, fade, typeT: Infinity, glow: 0 });
    }
  }

  if (bodyA <= 0.01) return;
  const roof = [P(x0, TOWER_H, z0), P(x1, TOWER_H, z0), P(x1, TOWER_H, z1), P(x0, TOWER_H, z1)];
  if (roof.some((q) => q[2] < NEAR)) return;
  ctx.globalAlpha = bodyA;
  ctx.fillStyle = rgba(mix(DARK, LIGHT, 0.38));
  tracePoly(ctx, roof);
  ctx.fill();
  ctx.strokeStyle = "rgba(226,220,235,0.2)";
  ctx.lineWidth = 0.7;
  ctx.stroke();

  // crown, spire, beacon
  const crownA = smooth01((p - 0.85) / 0.15) * fade;
  drawBox(env, f.cx - 14, f.cx + 14, f.cz - 14, f.cz + 14, TOWER_H, TOWER_H + 20 * crownA, { ...o, alpha: crownA });
  if (crownA < 0.05) return;
  const s0 = P(f.cx, TOWER_H + 20, f.cz);
  const s1 = P(f.cx, TOWER_H + 34, f.cz);
  if (s0[2] < NEAR || s1[2] < NEAR) return;
  const k = size(s1[2]);
  ctx.globalAlpha = crownA;
  ctx.strokeStyle = "rgba(210,204,220,0.8)";
  ctx.lineWidth = 0.9 * k;
  ctx.beginPath();
  ctx.moveTo(s0[0], s0[1]);
  ctx.lineTo(s1[0], s1[1]);
  ctx.stroke();
  const flash = bump(env.t, BEACON_T, 0.15, 1.1);
  const breathe = (0.55 + 0.45 * (0.5 + 0.5 * Math.sin((time / 3.4) * Math.PI * 2))) * (1 + 1.2 * flash);
  const beamTop = P(f.cx, TOWER_H + 80, f.cz);
  const beam = ctx.createLinearGradient(s1[0], s1[1], beamTop[0], beamTop[1]);
  beam.addColorStop(0, rgba(PERIWINKLE, 0.5 * breathe));
  beam.addColorStop(1, rgba(PERIWINKLE, 0));
  ctx.strokeStyle = beam;
  ctx.lineWidth = 2 * k;
  ctx.beginPath();
  ctx.moveTo(s1[0], s1[1]);
  ctx.lineTo(beamTop[0], beamTop[1]);
  ctx.stroke();
  drawGlow(ctx, s1[0], s1[1], 18 * k * (1 + flash), PERIWINKLE, Math.min(0.8, 0.35 * breathe));
  ctx.fillStyle = rgba(PERIWINKLE);
  ctx.beginPath();
  ctx.arc(s1[0], s1[1], 2 * k, 0, Math.PI * 2);
  ctx.fill();

  ctx.globalAlpha = 1;
}

function drawGrid(ctx: CanvasRenderingContext2D, P: Projector, fog: (x: number, z: number) => number, alpha: number) {
  const BUCKETS = 6;
  const buckets = Array.from({ length: BUCKETS }, () => [] as Seg[]);
  const push = (x1: number, z1: number, x2: number, z2: number) => {
    const a = fog((x1 + x2) / 2, (z1 + z2) / 2);
    if (a <= 0.02) return;
    const pa = P(x1, 0, z1);
    const pb = P(x2, 0, z2);
    if (pa[2] < NEAR || pb[2] < NEAR) return;
    buckets[Math.min(BUCKETS - 1, Math.floor(a * BUCKETS))].push([pa[0], pa[1], pb[0], pb[1]]);
  };
  for (let x = -384; x <= 384; x += 32) for (let z = -288; z < 288; z += 32) push(x, z, x, z + 32);
  for (let z = -288; z <= 288; z += 32) for (let x = -384; x < 384; x += 32) push(x, z, x + 32, z);
  ctx.lineWidth = 0.7;
  ctx.lineCap = "butt";
  buckets.forEach((segs, b) => {
    if (!segs.length) return;
    ctx.strokeStyle = `rgba(226,220,235,${(0.07 * alpha * (b + 0.5)) / BUCKETS})`;
    ctx.beginPath();
    for (const [ax, ay, bx, by] of segs) {
      ctx.moveTo(ax, ay);
      ctx.lineTo(bx, by);
    }
    ctx.stroke();
  });
  ctx.lineCap = "round";
}

// ---------------------------------------------------------------- component

export default function SWEVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let scale = 1;

    const render = (loopT: number, time: number) => {
      // City time: the opening hover is compressed into OPEN_T seconds.
      const t = loopT < OPEN_T ? (loopT * 2.5) / OPEN_T : loopT + OPEN_SKIP;
      // ---- timeline
      const view = ramp(t, 2.5, 5) * (1 - ramp(t, 16, 19.2));
      const panel = 1 - ramp(t, 4, 4.8) + ramp(t, 17.2, 18.2);
      const frame = lerp(1, 0.4, ramp(t, 4, 5) * (1 - ramp(t, 17.2, 18.2)));
      const traffic = view * ramp(t, 8.3, 8.8) * (1 - ramp(t, 15.8, 16.4));

      // A slow partial orbit: swing out while tilting down, sweep across the city,
      // then return to the starting heading while rising back overhead.
      const yaw =
        -0.3 * ramp(t, 2.5, 5.5) +
        0.6 * smooth01((t - 5) / 11) -
        0.3 * ramp(t, 16, 19.5) +
        0.07 * Math.sin((2 * Math.PI * loopT) / LOOP) * (1 - view);
      const pitch = lerp(0.85, 0.66, view) + 0.05 * Math.sin((2 * Math.PI * t) / CITY_LOOP) * view;
      const target: V3 = [0, lerp(52, 34, view), 0];
      const cam = makeCamera(target, yaw, pitch, lerp(470, 660, view));
      const P: Projector = (x, h, z) => project(cam, [x, h, z]);

      const fogFar = lerp(560, 400, view);
      const fogNear = fogFar * 0.55;
      const fog = (x: number, z: number) => smooth01((fogFar - Math.hypot(x - target[0], z - target[2])) / (fogFar - fogNear));

      const act: Activity = {
        store: bump(t, STORE_PULSE.t0 - 0.4, 0.3, 0.8),
        dc: 0.25 + 0.75 * bump(t, DC_T) + 0.25 * ramp(t, DC_T, DC_T + 0.6),
        gpu: 0.25 + 0.75 * bump(t, GPU_T) + 0.25 * ramp(t, GPU_T, GPU_T + 0.6),
      };
      const env: Env = { ctx, P, cam: cam.pos, time, t, act, scale };

      ctx.setTransform(scale, 0, 0, scale, 0, 0);
      ctx.clearRect(0, 0, VIEW_W, VIEW_H);
      ctx.globalAlpha = 1;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.font = `${FONT_PX}px ${MONO}`;
      ctx.textBaseline = "middle";
      ctx.textAlign = "left";

      const riseOf = (start: number, dur: number, fall: number) => ramp(t, start, start + dur) * (1 - ramp(t, fall, fall + 1));

      // ---- ground glows under each district
      const glowAt = (f: FileWin, c: RGB, r: number, a: number) => {
        const q = P(f.cx, 0, f.cz);
        if (q[2] > NEAR) drawGlow(ctx, q[0], q[1], r * size(q[2]), c, a);
      };
      glowAt(A, PERIWINKLE, 150, (0.1 + 0.12 * towerBase(t)) * riseOf(A.start, 1.2, A.fall));
      glowAt(D, PERIWINKLE, 110, 0.14 * act.dc * riseOf(D.start, 1.2, D.fall));
      glowAt(G, CORAL, 100, 0.16 * act.gpu * riseOf(G.start, 1.2, G.fall));
      glowAt(S, LILAC, 90, (0.06 + 0.1 * act.store) * riseOf(S.start, 1.2, S.fall));

      if (view > 0.01) drawGrid(ctx, P, fog, view);

      // a deploy landing: a ring spreads from the tower's base
      const deployAge = t - DEPLOY_T;
      if (deployAge > 0 && deployAge < 1.4 && traffic > 0.01) {
        const ring = Array.from({ length: 48 }, (_, i) => {
          const a = (i / 48) * Math.PI * 2;
          const r = 30 + deployAge * 42;
          return P(A.cx + Math.cos(a) * r, 0.5, A.cz + Math.sin(a) * r);
        });
        if (ring.every((q) => q[2] > NEAR)) {
          ctx.globalAlpha = (1 - deployAge / 1.4) * 0.7 * traffic;
          ctx.strokeStyle = rgba(LILAC);
          ctx.lineWidth = 1.2;
          tracePoly(ctx, ring);
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      }

      // ---- files: floating windows that settle into lots
      const towerP = ramp(t, A.start, A.start + 1.2) * (1 - ramp(t, A.fall, A.fall + 1.2));
      // The opening plays forward from the start of the loop and in reverse at the end.
      const tau = loopT < LOOP / 2 ? loopT : LOOP - loopT;
      const spin = clamp(spinRate(tau) / OMEGA, 0, 1) * (tau < RELEASE.sql + 0.3 ? 1 : 0);
      if (spin > 0.01) {
        const g = P(0, 0, 0);
        drawGlow(ctx, g[0], g[1], 130 * size(g[2]), PERIWINKLE, 0.22 * spin);
      }

      const sheets = FILES.map((f) => {
        const pose = panelPose(f, tau);
        const M = poseMapper(f, pose);
        const { n } = poseAxes(pose);
        const facing = dot(n, sub(cam.pos, pose.c)) > 0;
        const flight = clamp((tau - RELEASE[f.key]) / FLY, 0, 1);
        return { f, pose, M, facing, flight, depth: P(pose.c[0], pose.c[1], pose.c[2])[2] };
      });

      // soft shadows on the ground beneath the cube and flying panels
      for (const { f, M } of sheets) {
        const corners = [M(0, WIN_H), M(f.w, WIN_H), M(f.w, 0), M(0, 0)];
        const avgH = corners.reduce((acc, c) => acc + c[1], 0) / 4;
        if (avgH <= 0.3) continue;
        const q = corners.map(([x, h, z]) => P(x + 4 + h * 0.25, 0, z + 5 + h * 0.3));
        if (q.some((c) => c[2] < NEAR)) continue;
        ctx.save();
        ctx.globalAlpha = 0.28 * Math.min(1, avgH / 10) * fog(f.cx, f.cz);
        ctx.shadowColor = "rgba(4,3,10,0.6)";
        ctx.shadowBlur = 12 * scale;
        ctx.fillStyle = "rgba(6,5,12,0.5)";
        tracePoly(ctx, q);
        ctx.fill();
        ctx.restore();
      }

      sheets.sort((a, b) => b.depth - a.depth);

      for (const { f, pose, M, facing, flight } of sheets) {
        const fade = fog(f.cx, f.cz);

        // Code is already written; it goes into the city and the panels return empty.
        // Only the side of a panel facing the camera shows its code.
        const opening = t < 12;
        const appear = ramp(loopT, 0.05, 0.4) * (facing ? 1 : 0);
        const rowsA = opening ? (1 - ramp(t, f.start - 0.1, f.start + 0.6)) * appear : 0;
        const textA = opening ? (1 - ramp(t, f.start - 0.4, f.start + 0.3)) * appear : 0;
        const typeT = Infinity;
        const glow = 1 - flight;

        if (f.key === "py" && towerP > 0.001) {
          // drawn as the standing facade with the tower
          drawWindow(env, f, M, { panel: 0, frame, rows: 0, text: 0, facade: 0, wave: false, fade, typeT, glow: 0 });
          continue;
        }
        drawWindow(env, f, M, {
          panel: facing ? panel : panel * 0.7,
          frame,
          rows: f.key === "py" ? (opening ? appear : 0) : clamp(rowsA, 0, 1),
          text: clamp(textA, 0, 1),
          facade: 0,
          wave: false,
          fade,
          typeT,
          glow,
          chrome: facing ? 1 : 0,
          ink: pose.w / f.w,
        });
      }

      // ---- everything with height, painted far to near
      const drawables: { depth: number; draw: () => void }[] = [];

      if (towerP > 0.001) {
        const fade = fog(A.cx, A.cz);
        const textA = t < 12 ? clamp(1 - ramp(t, A.start - 0.1, A.start + 0.5), 0, 1) : 0;
        const plane = Math.max(panel, towerP);
        const rows = t < 12 ? 1 : 1 - ramp(t, A.fall + 0.5, A.fall + 1.1);
        drawables.push({
          depth: P(A.cx, TOWER_H * 0.4 * towerP, A.cz)[2],
          draw: () => drawTower(env, A, towerP, textA, fade, plane, rows),
        });
      }

      ITEMS.forEach((it, idx) => {
        const rise = riseOf(it.start, it.dur, it.fall);
        if (rise <= 0.005) return;
        if (it.type === "silo") {
          const a = fog(it.cx, it.cz) * smooth01(rise * 4);
          if (a <= 0.02) return;
          drawables.push({ depth: P(it.cx, (it.h * rise) / 2, it.cz)[2], draw: () => drawSilo(env, it.cx, it.cz, it.r * lerp(0.6, 1, rise), it.h * rise, a) });
        } else if (it.type === "box") {
          const cx = (it.x0 + it.x1) / 2;
          const cz = (it.z0 + it.z1) / 2;
          const a = fog(cx, cz) * smooth01(rise * 4);
          if (a <= 0.02) return;
          drawables.push({
            depth: P(cx, (it.h * rise) / 2, cz)[2],
            draw: () =>
              drawBox(env, it.x0, it.x1, it.z0, it.z1, 0, it.h * rise, {
                deco: rise > 0.6 ? it.deco : "none",
                roof: rise > 0.8 ? it.roof : "none",
                color: it.color,
                tint: it.tint,
                tintAmt: it.tintAmt,
                seed: idx,
                alpha: a,
              }),
          });
        } else if (it.type === "container") {
          const cx = (it.x0 + it.x1) / 2;
          const cz = (it.z0 + it.z1) / 2;
          const a = fog(cx, cz) * rise;
          if (a <= 0.02) return;
          const h0 = it.level * 5.4 + (1 - rise) * 18;
          drawables.push({
            depth: P(cx, h0 + 2.5, cz)[2],
            draw: () =>
              drawBox(env, it.x0, it.x1, it.z0, it.z1, h0, h0 + 5, {
                deco: "none",
                roof: "none",
                color: it.color,
                tint: it.color,
                tintAmt: 0.32,
                seed: idx,
                alpha: a,
                roofTint: it.color,
              }),
          });
        } else {
          const a = fog(it.f.cx, it.f.cz) * smooth01(rise * 3);
          if (a <= 0.02) return;
          drawables.push({ depth: P(it.f.cx, 18 * rise, it.f.cz)[2] - 5, draw: () => drawCrane(env, it.f, rise, a) });
        }
      });

      if (traffic > 0.01) {
        const light = (x: number, z: number, tail: Pt | null, color: RGB, box: boolean, a: number) => {
          const [px, py, pz] = P(x, box ? 2 : 1.2, z);
          if (pz < NEAR) return;
          drawables.push({
            depth: pz,
            draw: () => {
              const k = size(pz);
              ctx.globalAlpha = a;
              if (tail) {
                const q = P(tail[0], 1.2, tail[1]);
                if (q[2] > NEAR) {
                  const g = ctx.createLinearGradient(q[0], q[1], px, py);
                  g.addColorStop(0, rgba(color, 0));
                  g.addColorStop(1, rgba(color, 0.9));
                  ctx.strokeStyle = g;
                  ctx.lineWidth = 1.5 * k;
                  ctx.beginPath();
                  ctx.moveTo(q[0], q[1]);
                  ctx.lineTo(px, py);
                  ctx.stroke();
                }
              }
              drawGlow(ctx, px, py, 3.6 * k, color, 0.35);
              ctx.fillStyle = rgba(color);
              if (box) ctx.fillRect(px - 2.2 * k, py - 1.4 * k, 4.4 * k, 2.8 * k);
              else {
                ctx.beginPath();
                ctx.arc(px, py, 1.2 * k, 0, Math.PI * 2);
                ctx.fill();
              }
              ctx.globalAlpha = 1;
            },
          });
        };

        for (const pl of PULSES) {
          for (let i = 0; i < pl.count; i += 1) {
            const s = (t - pl.t0) * pl.speed - i * pl.spacing;
            if (s <= 0 || s >= pl.r.len) continue;
            const [x, z] = along(pl.r, s);
            const a = fog(x, z) * traffic * Math.min(1, (pl.r.len - s) / 12, s / 6);
            if (a <= 0.02) continue;
            light(x, z, pl.box ? null : along(pl.r, Math.max(0, s - 14)), pl.color, pl.box, a);
          }
        }

        for (const fl of AMBIENT) {
          for (let i = 0; i < fl.count; i += 1) {
            const s = mod(time * fl.speed + (i / fl.count + fl.phase) * fl.r.len, fl.r.len);
            const [x, z] = along(fl.r, s);
            const a = 0.5 * fog(x, z) * traffic * Math.min(1, s / 16, (fl.r.len - s) / 16);
            if (a <= 0.02) continue;
            light(x, z, null, fl.color, false, a);
          }
        }
      }

      drawables.sort((a, b) => b.depth - a.depth).forEach((d) => d.draw());
      ctx.globalAlpha = 1;
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(rect.width * dpr));
      canvas.height = Math.max(1, Math.round(rect.height * dpr));
      scale = canvas.width / VIEW_W;
      if (reduceMotion) render(12 - OPEN_SKIP, 12 - OPEN_SKIP);
    };
    resize();
    canvas.classList.add("is-ready");
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    if (reduceMotion) return () => ro.disconnect();

    let frameId = 0;
    let last = 0;
    let clock = 0;

    const loop = (now: number) => {
      const dt = last ? Math.min(0.05, (now - last) / 1000) : 0;
      last = now;
      clock += dt;
      render(clock % LOOP, clock);
      frameId = window.requestAnimationFrame(loop);
    };
    const startLoop = () => {
      if (frameId) return;
      last = 0;
      frameId = window.requestAnimationFrame(loop);
    };
    const stopLoop = () => {
      window.cancelAnimationFrame(frameId);
      frameId = 0;
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
    <figure className="swe-visualization">
      <canvas
        ref={canvasRef}
        className="swe-canvas"
        role="img"
        aria-label="A spinning glass cube of five code files breaks apart onto a city grid and each becomes its own district: silos, a data center, a GPU hall, a central tower with offices, and a shipping yard, with light flowing between them as the camera circles."
      />
    </figure>
  );
}