"use client";

import { useEffect, useId, useState } from "react";
import "./SWEVisualization.css";

const WIDTH = 560;
const HEIGHT = 360;

// Timeline in seconds. The stream flows continuously until FORM_END.
const STREAM_END = 5.5; // the lead row reaches the bottom here
const FORM_END = 9.5;
const HOLD_END = 11;
const LAUNCH_END = 15.5;
const CYCLE = 16;

// Send-arrow geometry, traced from the reference icon.
const ARROW_ROWS = 33;
const CENTER_ROW = (ARROW_ROWS - 1) / 2;
const ARROW_LEFT = 140;
const ARROW_WIDTH = 268;
const ARROW_CENTER_Y = 180;
const ARROW_HALF_HEIGHT = 130;
const ARROW_PITCH = 8;
const ARROW_TOP = ARROW_CENTER_Y - ARROW_PITCH * CENTER_ROW;
const SLOT_LEFT = ARROW_LEFT + ARROW_WIDTH * 0.16;
const SLOT_RIGHT = ARROW_LEFT + ARROW_WIDTH * 0.67;
const SLOT_HALF_HEIGHT = 10;

// Stream.
const STREAM_PITCH = 12;
const LEAD_END_Y = HEIGHT + 6;
const STREAM_SPEED = (LEAD_END_Y + STREAM_PITCH) / STREAM_END;
// Arrow rows come from the part of the stream crossing the center late in
// the morph, so the top is pulled down from above and the bottom up from below.
const MATCH_TIME = FORM_END - 0.5;
const CENTER_STREAM_INDEX = Math.round(
  (STREAM_SPEED * MATCH_TIME - ARROW_CENTER_Y) / STREAM_PITCH - 1,
);
const STREAM_ROWS = CENTER_STREAM_INDEX + CENTER_ROW + 5;

const LAUNCH_DISTANCE = 200;
const CHAR_WIDTH = 4.2; // 7px monospace
const EDGE_FADE = 0.05;

type ColorName = "blue" | "lilac" | "cream" | "coral" | "lime" | "gold";
type Side = "full" | "left" | "right";

type Token = {
  f0: number;
  f1: number;
  side: Side;
  color: ColorName;
  opacity: number;
};

type ArrowTarget = {
  y: number;
  left: number;
  tokenStart: number;
  right: number;
  slotSplit: number;
};

type Row = {
  streamIndex: number;
  streamX: number;
  streamTokenStart: number;
  streamEnd: number;
  arrow?: ArrowTarget;
  tokens: Token[];
  text?: string;
  textColor: ColorName;
  launchDelay: number;
};

const palette: ColorName[] = ["blue", "lilac", "cream", "coral", "lime", "gold"];

const snippets = [
  // Python
  "def forward(self, x):",
  "for i, batch in enumerate(loader):",
  "return torch.softmax(logits, -1)",
  "import numpy as np",
  "loss.backward()",
  'if __name__ == "__main__":',
  "x = np.linalg.solve(A, b)",
  "yield from walk(node.left)",
  // C++
  "std::vector<Node> frontier;",
  "auto it = cache.find(key);",
  "template <typename T>",
  "std::unique_ptr<Model> model;",
  "for (auto& n : graph[u]) {",
  "constexpr int N = 1024;",
  // C
  "int *buf = malloc(n * sizeof(int));",
  "while (fgets(line, 256, fp)) {",
  "#include <stdio.h>",
  "return EXIT_SUCCESS;",
  "ptr->next = head;",
  // JavaScript
  "const res = await fetch(url);",
  "export default function App() {",
  "items.map((x) => x.id)",
  "useEffect(() => {",
  "const [state, setState] = useState();",
  // SQL
  "SELECT id, name FROM users",
  "WHERE created_at > NOW()",
  "JOIN orders o ON o.user_id = u.id",
  "GROUP BY region;",
  "ORDER BY score DESC LIMIT 10;",
];

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

const random = createRandom(24);

function pick<T>(items: T[]): T {
  return items[Math.floor(random() * items.length)];
}

function clamp01(value: number) {
  return Math.max(0, Math.min(1, value));
}

function easeInOut(value: number) {
  const t = clamp01(value);
  return t * t * (3 - 2 * t);
}

function lerp(start: number, end: number, amount: number) {
  return start + (end - start) * amount;
}

// Left and right edges of the arrow at a given row height.
function arrowEdges(y: number) {
  const a = Math.min(1, Math.abs(y - ARROW_CENTER_Y) / ARROW_HALF_HEIGHT);
  let left = ARROW_LEFT + ARROW_WIDTH * 0.07 * (1 - a); // concave back
  let right = ARROW_LEFT + ARROW_WIDTH * (1 - 0.83 * a);
  if (a > 0.88) left += 14 * ((a - 0.88) / 0.12) ** 2; // rounded back corners
  if (a < 0.15) right -= 10 * (1 - a / 0.15) ** 2; // rounded tip
  return { left, right };
}

// Code-like tokens spanning 0 to 1, split around the slot if needed.
function makeTokens(split: number): Token[] {
  const tokens: Token[] = [];
  let f = 0;

  while (true) {
    const end = Math.min(1, f + 0.1 + random() * 0.28);
    tokens.push({
      f0: f,
      f1: end,
      side: "full",
      color: pick(palette),
      opacity: 0.5 + random() * 0.35,
    });
    const next = end + 0.035 + random() * 0.045;
    if (end >= 1 || next > 0.86) {
      tokens[tokens.length - 1].f1 = 1;
      break;
    }
    f = next;
  }

  if (split < 0) return tokens;

  return tokens.flatMap((token): Token[] => {
    if (token.f1 <= split) return [{ ...token, side: "left" }];
    if (token.f0 >= split) return [{ ...token, side: "right" }];
    return [
      { ...token, f1: split, side: "left" },
      { ...token, f0: split, side: "right" },
    ];
  });
}

function streamSpan(textWidth: number) {
  const indent = Math.floor(random() * 5);
  const x = 32 + indent * 18;
  const end = Math.min(
    WIDTH - 32,
    x + Math.max(150 + random() * 280, textWidth + 40),
  );
  return { x, tokenStart: x + textWidth, end };
}

function makeArrowRow(j: number): Row {
  const y = ARROW_TOP + j * ARROW_PITCH;
  const { left, right } = arrowEdges(y);
  const inSlot = Math.abs(y - ARROW_CENTER_Y) <= SLOT_HALF_HEIGHT;
  const slotSplit = inSlot
    ? (SLOT_LEFT - left) / (SLOT_LEFT - left + right - SLOT_RIGHT)
    : -1;

  // Snippets are only chosen if they fit whole inside the arrow row.
  const maxTextChars = Math.floor(((right - left) * 0.72) / CHAR_WIDTH);
  const fitting = snippets.filter((s) => s.length <= maxTextChars);
  const text =
    j % 2 === 1 && !inSlot && fitting.length > 0 ? pick(fitting) : undefined;
  const textWidth = text ? text.length * CHAR_WIDTH + 8 : 0;
  const span = streamSpan(textWidth);
  const tokenStart = left + textWidth;

  return {
    streamIndex: CENTER_STREAM_INDEX + (CENTER_ROW - j),
    streamX: span.x,
    streamTokenStart: span.tokenStart,
    streamEnd: span.end,
    arrow: { y, left, tokenStart, right, slotSplit },
    tokens: right - tokenStart > 14 ? makeTokens(slotSplit) : [],
    text,
    textColor: pick(palette),
    launchDelay: random() * 0.3,
  };
}

// Stream-only rows keep the flow continuous and fade out as the arrow forms.
function makeFillerRow(k: number): Row {
  const text = k % 2 === 1 ? pick(snippets) : undefined;
  const textWidth = text ? text.length * CHAR_WIDTH + 8 : 0;
  const span = streamSpan(textWidth);

  return {
    streamIndex: k,
    streamX: span.x,
    streamTokenStart: span.tokenStart,
    streamEnd: span.end,
    tokens: makeTokens(-1),
    text,
    textColor: pick(palette),
    launchDelay: 0,
  };
}

const arrowRows = Array.from({ length: ARROW_ROWS }, (_, j) => makeArrowRow(j));
const usedIndices = new Set(arrowRows.map((row) => row.streamIndex));
const fillerRows = Array.from({ length: STREAM_ROWS }, (_, k) => k)
  .filter((k) => !usedIndices.has(k))
  .map(makeFillerRow);
const rows: Row[] = [...fillerRows, ...arrowRows];

function streamX(row: Row, f: number) {
  return lerp(row.streamTokenStart, row.streamEnd, f);
}

function arrowX(target: ArrowTarget, f: number, side: Side) {
  if (side === "left") {
    return lerp(target.tokenStart, SLOT_LEFT, f / target.slotSplit);
  }
  if (side === "right") {
    return lerp(
      SLOT_RIGHT,
      target.right,
      (f - target.slotSplit) / (1 - target.slotSplit),
    );
  }
  return lerp(target.tokenStart, target.right, f);
}

export default function SWEVisualization() {
  const [time, setTime] = useState(0);
  const id = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const fadeYId = `swe-fade-y-${id}`;
  const fadeXId = `swe-fade-x-${id}`;
  const maskYId = `swe-mask-y-${id}`;
  const maskXId = `swe-mask-x-${id}`;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTime(FORM_END + 1);
      return;
    }

    let frame = 0;
    const start = performance.now();
    const animate = (now: number) => {
      setTime(((now - start) / 1000) % CYCLE);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  const formQ = clamp01((time - STREAM_END) / (FORM_END - STREAM_END));
  // Slow pull at first, then accelerating into the arrow.
  const form = formQ * formQ * formQ * (formQ * (formQ * 6 - 15) + 10);
  const flowTime = Math.min(time, FORM_END);
  const fillerFade = 1 - easeInOut(formQ / 0.8);
  const launchQ = clamp01((time - HOLD_END) / (LAUNCH_END - HOLD_END));

  return (
    <figure className="swe-visualization">
      <svg
        className="swe-scene"
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        role="img"
        aria-label="Code streams downward like film credits, gathers into a send arrow, then launches right and dissolves."
      >
        <defs>
          <linearGradient id={fadeYId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#fff" stopOpacity="0" />
            <stop offset={EDGE_FADE} stopColor="#fff" stopOpacity="1" />
            <stop offset={1 - EDGE_FADE} stopColor="#fff" stopOpacity="1" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id={fadeXId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#fff" stopOpacity="1" />
            <stop offset="0.86" stopColor="#fff" stopOpacity="1" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <mask id={maskYId} maskUnits="userSpaceOnUse" x="0" y="0" width={WIDTH} height={HEIGHT}>
            <rect width={WIDTH} height={HEIGHT} fill={`url(#${fadeYId})`} />
          </mask>
          <mask id={maskXId} maskUnits="userSpaceOnUse" x="0" y="0" width={WIDTH} height={HEIGHT}>
            <rect width={WIDTH} height={HEIGHT} fill={`url(#${fadeXId})`} />
          </mask>
        </defs>

        <g mask={`url(#${maskXId})`} aria-hidden="true">
          <g mask={`url(#${maskYId})`}>
            {rows.map((row, index) => {
              const sourceY =
                STREAM_SPEED * flowTime - STREAM_PITCH * (row.streamIndex + 1);
              const target = row.arrow;

              let y = sourceY;
              let dx = 0;
              let opacity = fillerFade;

              if (target) {
                y = lerp(sourceY, target.y, form);
                const p = clamp01((launchQ - row.launchDelay) / 0.7);
                dx = LAUNCH_DISTANCE * p * p;
                opacity = 1 - easeInOut((p - 0.25) / 0.75);
              }

              if (opacity <= 0 || y < -12 || y > HEIGHT + 12) return null;

              const tokenX = (f: number, side: Side) =>
                (target
                  ? lerp(streamX(row, f), arrowX(target, f, side), form)
                  : streamX(row, f)) + dx;

              const textX =
                (target ? lerp(row.streamX, target.left + 1, form) : row.streamX) + dx;

              return (
                <g key={index} opacity={opacity}>
                  {row.text && (
                    <text
                      className={`swe-code-text swe-color--${row.textColor}`}
                      x={textX.toFixed(1)}
                      y={(y + 2.5).toFixed(1)}
                    >
                      {row.text}
                    </text>
                  )}

                  {row.tokens.map((token, tokenIndex) => (
                    <path
                      key={tokenIndex}
                      className={`swe-token swe-color--${token.color}`}
                      d={`M ${tokenX(token.f0, token.side).toFixed(1)} ${y.toFixed(1)} H ${tokenX(token.f1, token.side).toFixed(1)}`}
                      opacity={token.opacity}
                    />
                  ))}
                </g>
              );
            })}
          </g>
        </g>
      </svg>

      <figcaption className="swe-caption">
        <span>SOFTWARE</span>
        <span>·</span>
        <span>SHIPPING</span>
      </figcaption>
    </figure>
  );
}