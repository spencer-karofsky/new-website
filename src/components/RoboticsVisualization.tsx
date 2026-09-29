"use client";

import { useEffect, useId, useRef, useState } from "react";
import "./RoboticsVisualization.css";

type Pose = { x: number; y: number; theta: number };

const initialPose: Pose = { x: 0.42, y: 0.18, theta: 0 };
const route = "M 145 285 C 205 254, 252 245, 286 199 S 310 107, 366 82";
const durationMs = 14000;

function matrixFor({ x, y, theta }: Pose) {
  const c = Math.cos(theta);
  const s = Math.sin(theta);

  return [c, -s, x, s, c, y, 0, 0, 1].map((value, index) =>
    index > 5 ? String(value) : value.toFixed(2),
  );
}

function Rover({ titleId }: { titleId: string }) {
  return (
    <g className="robot-rover" aria-hidden="true">
      <rect
        x="-10"
        y="-16"
        width="20"
        height="32"
        rx="5"
        className="rover-shadow"
      />
      <rect
        x="-8"
        y="-14"
        width="16"
        height="28"
        rx="4"
        className="rover-shell"
      />
      <rect
        x="-5.5"
        y="-10"
        width="11"
        height="19"
        rx="3"
        className="rover-top"
      />
      <circle cx="0" cy="-3" r="3.1" className="rover-sensor" />
      <path d="M-3 -10 0 -15 3 -10" className="rover-nose" />
      <rect
        x="-12"
        y="-11"
        width="3"
        height="8"
        rx="1.5"
        className="rover-wheel"
      />
      <rect
        x="9"
        y="-11"
        width="3"
        height="8"
        rx="1.5"
        className="rover-wheel"
      />
      <rect
        x="-12"
        y="4"
        width="3"
        height="8"
        rx="1.5"
        className="rover-wheel"
      />
      <rect
        x="9"
        y="4"
        width="3"
        height="8"
        rx="1.5"
        className="rover-wheel"
      />
      <title id={titleId}>Rover moving along a planned route</title>
    </g>
  );
}

export default function RoboticsVisualization() {
  const pathRef = useRef<SVGPathElement>(null);
  const roverRef = useRef<SVGGElement>(null);
  const [pose, setPose] = useState(initialPose);

  const rawId = useId();
  const id = rawId.replace(/:/g, "");
  const titleId = `robotics-rover-title-${id}`;
  const gridId = `robotics-grid-${id}`;
  const gridFadeId = `robotics-grid-fade-${id}`;
  const gridMaskId = `robotics-grid-mask-${id}`;
  const glowId = `robotics-goal-glow-${id}`;
  const entries = matrixFor(pose);

  useEffect(() => {
    const path = pathRef.current;

    if (
      !path ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let frame = 0;
    let start = 0;

    const length = path.getTotalLength();

    const tick = (now: number) => {
      if (!start) start = now;

      const progress = ((now - start) % durationMs) / durationMs;
      const distance = length * progress;
      const point = path.getPointAtLength(distance);
      const before = path.getPointAtLength(Math.max(0, distance - 1.5));

      const screenAngle = Math.atan2(
        point.y - before.y,
        point.x - before.x,
      );
      const headingDegrees = (screenAngle * 180) / Math.PI + 90;

      roverRef.current?.setAttribute(
        "transform",
        `translate(${point.x} ${point.y}) rotate(${headingDegrees})`,
      );

      // SVG screen y increases downward; invert it for the world-frame matrix.
      const nextPose = {
        x: Number(((point.x - 96) / 320).toFixed(2)),
        y: Number(((330 - point.y) / 320).toFixed(2)),
        theta: -screenAngle,
      };

      setPose((previous) => {
        const previousEntries = matrixFor(previous);
        const nextEntries = matrixFor(nextPose);

        return previousEntries.every(
          (entry, index) => entry === nextEntries[index],
        )
          ? previous
          : nextPose;
      });

      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <figure
      className="robotics-visualization"
      aria-label="A rover follows a navigation path while its numeric transform matrix updates"
    >
      <svg
        className="robotics-scene"
        viewBox="0 0 560 360"
        role="img"
        aria-labelledby={`robotics-title-${id} robotics-desc-${id}`}
      >
        <title id={`robotics-title-${id}`}>Robots in context</title>
        <desc id={`robotics-desc-${id}`}>
          A small rover follows a dotted route around shaded obstacles toward a
          glowing goal. A numeric transformation matrix changes with the
          rover’s position and heading.
        </desc>

        <defs>
          <pattern
            id={gridId}
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <path d="M28 0H0V28" className="robotics-grid-line" />
          </pattern>

          <radialGradient id={gridFadeId}>
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="72%" stopColor="white" stopOpacity=".8" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>

          <mask id={gridMaskId}>
            <rect width="560" height="360" fill={`url(#${gridFadeId})`} />
          </mask>

          <radialGradient id={glowId}>
            <stop offset="0" stopColor="#929fe0" stopOpacity=".3" />
            <stop offset="1" stopColor="#929fe0" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect
          width="560"
          height="360"
          fill={`url(#${gridId})`}
          mask={`url(#${gridMaskId})`}
        />

        <g className="contour contour-a" aria-hidden="true">
          <path d="M-20 55C20 26 38 43 66 27S113 7 134-18" />
          <path d="M-15 67C23 39 43 55 72 39S117 19 143-7" />
          <path d="M-8 79C30 51 50 68 79 52S125 31 151 4" />
          <path d="M-2 91C38 64 57 81 87 65S133 44 160 15" />
        </g>

        <g className="contour contour-b" aria-hidden="true">
          <path d="M422 0C439 34 462 44 491 38S542 21 577 45" />
          <path d="M414 0C432 42 457 54 490 48S544 31 581 57" />
          <path d="M405 0C424 50 453 64 490 58S547 41 586 69" />
        </g>

        <g className="contour contour-c" aria-hidden="true">
          <path d="M-18 301C19 278 36 291 54 316S91 356 125 371" />
          <path d="M-15 286C27 260 45 276 65 302S101 345 139 359" />
          <path d="M-8 271C35 244 55 261 75 288S113 330 151 345" />
        </g>

        <g className="contour obstacle obstacle-one" aria-hidden="true">
          <path d="M185 62c13-12 32-11 42 1l10 14c8 12 4 28-8 36l-17 10c-15 8-34 1-38-15l-4-17c-3-12 4-22 15-29Z" />
          <path d="M189 69c10-9 25-8 32 2l7 10c6 9 3 21-6 27l-13 8c-11 6-25 1-28-11l-3-13c-2-9 3-17 11-23Z" />
          <path d="M194 77c7-6 17-5 22 2l5 7c4 6 2 14-4 18l-9 5c-8 4-17 1-19-8l-2-9c-1-6 2-11 7-15Z" />
        </g>

        <g className="contour obstacle obstacle-two" aria-hidden="true">
          <path d="M353 145c12-13 33-14 45-2l11 11c11 11 9 30-5 38l-20 12c-15 9-35 2-40-15l-5-17c-3-10 3-21 14-27Z" />
          <path d="M359 152c9-10 25-11 34-2l8 8c8 8 7 22-4 28l-15 9c-11 7-26 2-30-11l-4-13c-2-8 2-15 11-19Z" />
          <path d="M365 159c7-7 17-8 23-1l5 5c5 5 4 14-3 18l-11 6c-8 5-18 1-21-8l-3-9c-1-5 2-9 10-11Z" />
        </g>

        <g className="contour obstacle obstacle-three" aria-hidden="true">
          <path d="M-14 192c18-13 36-8 45 8l8 16c6 13 0 29-14 34l-18 7c-16 6-32-6-32-23v-20c0-9 3-17 11-22Z" />
          <path d="M-7 201c13-9 26-5 32 6l6 12c4 10 0 21-10 25l-14 5c-12 4-23-5-23-17v-15c0-7 3-12 9-16Z" />
        </g>

        <g className="contour obstacle obstacle-four" aria-hidden="true">
          <path d="M81 112c10-10 27-12 39-5l9 7c10 8 10 23 0 31l-13 10c-13 9-31 3-35-12l-4-14c-2-7 0-13 4-17Z" />
          <path d="M86 117c8-7 20-9 29-4l7 5c7 6 7 17 0 23l-10 7c-9 7-22 2-25-9l-3-10c-1-5 0-9 2-12Z" />
          <path d="M92 122c5-4 13-6 19-3l5 4c4 3 4 10 0 14l-7 5c-6 4-14 1-16-6l-2-6c-1-3 0-6 1-8Z" />
        </g>

        <g className="contour obstacle obstacle-five" aria-hidden="true">
          <path d="M461 133c11-9 28-8 38 2l9 10c8 10 5 25-6 32l-15 8c-13 7-29 0-32-14l-3-17c-2-8 2-16 9-21Z" />
          <path d="M466 139c8-6 20-5 27 2l7 7c6 7 4 18-4 23l-11 6c-9 5-21 0-23-10l-2-12c-1-6 2-12 6-16Z" />
          <path d="M472 145c5-4 12-3 16 1l5 5c4 4 3 11-3 14l-8 5c-7 3-14 0-15-7l-2-9c0-4 2-7 7-9Z" />
        </g>

        <path ref={pathRef} d={route} className="route-underlay" />
        <path d={route} className="route-line" />

        <circle
          cx="366"
          cy="82"
          r="31"
          fill={`url(#${glowId})`}
          className="goal-glow"
        />
        <circle cx="366" cy="82" r="14" className="goal-ring" />
        <circle cx="366" cy="82" r="7" className="goal-core" />

        <g
          ref={roverRef}
          className="rover-motion"
          transform="translate(145 285) rotate(63)"
        >
          <Rover titleId={titleId} />
        </g>

        <g className="matrix-card">        
          <path
            d="M373 233h-5v48h5M520 233h5v48h-5"
            className="matrix-bracket"
          />
          {entries.map((entry, i) => (
            <text
              key={i}
              x={397 + (i % 3) * 38}
              y={248 + Math.floor(i / 3) * 15}
              className={`matrix-number matrix-number-${i}`}
            >
              {entry}
            </text>
          ))}
        </g>
      </svg>
    </figure>
  );
}