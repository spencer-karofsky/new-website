import "./MLVisualization.css";

type Point = {
  x3d: number;
  y3d: number;
  x2d: number;
  y2d: number;
  radius3d: number;
  radius2d: number;
  opacity3d: number;
  opacity2d: number;
  color: string;
};

const neutral = "#a4a8bb";

const duration = "13.5s";

const classAColors = ["#8099ed", "#9aaaf1", "#6885db"];
const classBColors = ["#f27b69", "#ff9580", "#d9675b"];

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

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function createClassPoints({
  seed,
  centerX,
  centerY,
  spreadX,
  spreadY,
  angle,
  colors,
  count,
  classOffset
}: {
  seed: number;
  centerX: number;
  centerY: number;
  spreadX: number;
  spreadY: number;
  angle: number;
  colors: string[];
  count: number;
  classOffset: number;
}): Point[] {
  const random = createRandom(seed);
  const points: Point[] = [];
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);

  for (let index = 0; index < count; index += 1) {
    const u1 = Math.max(random(), 0.0001);
    const u2 = random();
    const magnitude = Math.sqrt(-2 * Math.log(u1));

    const normalX = magnitude * Math.cos(2 * Math.PI * u2);
    const normalY = magnitude * Math.sin(2 * Math.PI * u2);

    const u3 = Math.max(random(), 0.0001);
    const u4 = random();
    const normalZ =
      Math.sqrt(-2 * Math.log(u3)) * Math.cos(2 * Math.PI * u4);

    const depth = clamp((normalZ + 2.5) / 5, 0, 1);

    // Correlated dimensions create a tilted 3D cloud with overlapping,
    // subtly offset class centers. Positive depth projects down and forward,
    // matching the diagonal positive k vector below.
    const sharedComponent = normalX * 82;
    const secondComponent = normalY * 53;
    const depthComponent = normalZ * 52;

    const projectedX =
      sharedComponent * 0.82 +
      secondComponent * 0.25 +
      depthComponent * 0.45 +
      classOffset * 14;

    const projectedY =
      sharedComponent * 0.34 +
      secondComponent * 0.72 +
      depthComponent * 0.65 +
      classOffset * 6;

    const rawX = normalX * spreadX;
    const rawY = normalY * spreadY;

    points.push({
      x3d: clamp(320 + projectedX, 24, 616),
      y3d: clamp(180 + projectedY, 24, 336),

      x2d: clamp(centerX + rawX * cos - rawY * sin, 24, 616),
      y2d: clamp(centerY + rawX * sin + rawY * cos, 24, 336),

      radius3d: 1.05 + depth * 0.85,
      radius2d: 0.95 + random() * 0.5,
      opacity3d: 0.56 + depth * 0.36,
      opacity2d: 0.82 + random() * 0.18,
      color: colors[Math.floor(random() * colors.length)]
    });
  }

  return points;
}

const classA = createClassPoints({
  seed: 18,
  centerX: 184,
  centerY: 210,
  spreadX: 60,
  spreadY: 54,
  angle: -0.38,
  colors: classAColors,
  count: 190,
  classOffset: -1
});

const classB = createClassPoints({
  seed: 82,
  centerX: 456,
  centerY: 136,
  spreadX: 60,
  spreadY: 54,
  angle: -0.38,
  colors: classBColors,
  count: 190,
  classOffset: 1
});

const pointKeyTimes = "0;0.07;0.23;0.60;0.68;0.78;0.92;1";
const pointKeySplines =
  "0.4 0 0.2 1;0 0 1 1;0.4 0 0.2 1;0.4 0 0.2 1;0 0 1 1;0.4 0 0.2 1;0 0 1 1";

function AnimatedPoints({ points }: { points: Point[] }) {
  return (
    <g aria-hidden="true">
      {points.map((point, index) => (
        <circle
          key={index}
          cx={point.x3d}
          cy={point.y3d}
          r={point.radius3d}
          opacity="0"
          fill={neutral}
        >
          <animate
            attributeName="cx"
            values={`${point.x3d};${point.x3d};${point.x3d};${point.x2d};${point.x2d};${point.x2d};${point.x2d};${point.x3d}`}
            keyTimes={pointKeyTimes}
            keySplines={pointKeySplines}
            calcMode="spline"
            dur={duration}
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values={`${point.y3d};${point.y3d};${point.y3d};${point.y2d};${point.y2d};${point.y2d};${point.y2d};${point.y3d}`}
            keyTimes={pointKeyTimes}
            keySplines={pointKeySplines}
            calcMode="spline"
            dur={duration}
            repeatCount="indefinite"
          />
          <animate
            attributeName="r"
            values={`${point.radius3d};${point.radius3d};${point.radius3d};${point.radius2d};${point.radius2d};${point.radius2d};${point.radius2d};${point.radius3d}`}
            keyTimes={pointKeyTimes}
            keySplines={pointKeySplines}
            calcMode="spline"
            dur={duration}
            repeatCount="indefinite"
          />
          <animate
            attributeName="fill"
            values={`${neutral};${neutral};${neutral};${neutral};${point.color};${point.color};${neutral};${neutral}`}
            keyTimes={pointKeyTimes}
            calcMode="linear"
            dur={duration}
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values={`0;${point.opacity3d};${point.opacity3d};${point.opacity2d};${point.opacity2d};${point.opacity2d};0;0`}
            keyTimes={pointKeyTimes}
            calcMode="linear"
            dur={duration}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </g>
  );
}

function StaticPoints({ points }: { points: Point[] }) {
  return (
    <g aria-hidden="true">
      {points.map((point, index) => (
        <circle
          key={index}
          cx={point.x2d}
          cy={point.y2d}
          r={point.radius2d}
          opacity={point.opacity2d}
          fill={point.color}
        />
      ))}
    </g>
  );
}

function SpatialGrid() {
  return (
    <g className="ml-spatial-grid" aria-hidden="true">
      <ellipse cx="320" cy="180" rx="205" ry="112" />

      <ellipse
        cx="320"
        cy="180"
        rx="210"
        ry="72"
        transform="rotate(-18 320 180)"
      />
      <ellipse
        cx="320"
        cy="180"
        rx="190"
        ry="66"
        transform="rotate(28 320 180)"
      />
    </g>
  );
}

function AxisLabel({
  x,
  y,
  letter
}: {
  x: number;
  y: number;
  letter: string;
}) {
  const label =
    letter === "i" ? "î" : letter === "j" ? "ĵ" : "k\u02C6";

  return (
    <g className="ml-axis-label" transform={`translate(${x} ${y})`}>
      <text x="0" y="0">{label}</text>
    </g>
  );
}

function BasisVectors() {
  return (
    <g className="ml-basis-vectors" aria-hidden="true">
      {/* Negative halves extend opposite each positive basis vector. */}
      <line className="basis-negative" x1="320" y1="180" x2="320" y2="300" />
      <line className="basis-negative" x1="320" y1="180" x2="200" y2="180" />
      <line className="basis-negative" x1="320" y1="180" x2="380" y2="270" />

      {/* Positive basis vectors: up, right, and toward the viewer. */}
      <line
        className="basis-positive basis-k"
        x1="320"
        y1="180"
        x2="320"
        y2="55"
      />
      <line
        className="basis-positive basis-i"
        x1="320"
        y1="180"
        x2="440"
        y2="180"
      />
      <line
        className="basis-positive basis-j"
        x1="320"
        y1="180"
        x2="260"
        y2="240"
      />
      <circle className="basis-origin" cx="320" cy="180" r="2.2" />

      {/* Axis labels are currently omitted. */}
      {/* <AxisLabel x={449} y={244} letter="i" />
      <AxisLabel x={428} y={85} letter="j" />
      <AxisLabel x={320} y={39} letter="k" /> */}
    </g>
  );
}

export default function MLVisualization() {
  return (
    <figure
      className="ml-visualization"
      aria-label="Illustration of a 3D point cloud projecting into two classes"
    >
      <svg
        className="ml-plot"
        viewBox="0 0 640 360"
        role="img"
        aria-labelledby="ml-plot-title ml-plot-description"
        preserveAspectRatio="xMidYMid meet"
      >
        <title id="ml-plot-title">A point cloud projection</title>
        <desc id="ml-plot-description">
          A volumetric point cloud appears with a 3D basis, projects into two
          differently colored groups, then fades away. This is an illustration,
          not actual model output.
        </desc>

        <defs>
          <radialGradient id="ml-edge-fade">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="70%" stopColor="white" stopOpacity=".85" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>

          <mask id="ml-grid-mask">
            <rect width="640" height="360" fill="url(#ml-edge-fade)" />
          </mask>

          <radialGradient id="ml-cloud-glow-3d">
            <stop offset="0%" stopColor="#929fe0" stopOpacity=".2" />
            <stop offset="100%" stopColor="#929fe0" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="ml-cloud-glow-a">
            <stop offset="0%" stopColor="#8099ed" stopOpacity=".2" />
            <stop offset="100%" stopColor="#8099ed" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="ml-cloud-glow-b">
            <stop offset="0%" stopColor="#f27b69" stopOpacity=".2" />
            <stop offset="100%" stopColor="#f27b69" stopOpacity="0" />
          </radialGradient>

          <marker
            id="ml-arrow-i"
            markerWidth="7"
            markerHeight="7"
            refX="5.5"
            refY="3.5"
            orient="auto"
          >
            <path d="M0,0 L7,3.5 L0,7 Z" fill="#90a6ed" />
          </marker>
          <marker
            id="ml-arrow-j"
            markerWidth="7"
            markerHeight="7"
            refX="5.5"
            refY="3.5"
            orient="auto"
          >
            <path d="M0,0 L7,3.5 L0,7 Z" fill="#ff8877" />
          </marker>
          <marker
            id="ml-arrow-k"
            markerWidth="7"
            markerHeight="7"
            refX="5.5"
            refY="3.5"
            orient="auto"
          >
            <path d="M0,0 L7,3.5 L0,7 Z" fill="#c2b4d6" />
          </marker>
        </defs>

        <g className="ml-3d-scene" opacity="0" mask="url(#ml-grid-mask)">
          <SpatialGrid />
          <BasisVectors />
          <animate
            attributeName="opacity"
            values="0;1;1;0;0;0"
            keyTimes="0;0.07;0.23;0.40;0.92;1"
            calcMode="linear"
            dur={duration}
            repeatCount="indefinite"
          />
        </g>

        <g className="ml-2d-grid" opacity="0" mask="url(#ml-grid-mask)">
          <path d="M 0 60 H 640 M 0 120 H 640 M 0 180 H 640 M 0 240 H 640 M 0 300 H 640" />
          <path d="M 64 0 V 360 M 128 0 V 360 M 192 0 V 360 M 256 0 V 360 M 320 0 V 360 M 384 0 V 360 M 448 0 V 360 M 512 0 V 360 M 576 0 V 360" />
          <animate
            attributeName="opacity"
            values="0;0;0;0;0.62;0.62;0;0"
            keyTimes="0;0.07;0.23;0.52;0.66;0.78;0.92;1"
            calcMode="linear"
            dur={duration}
            repeatCount="indefinite"
          />
        </g>

        <g className="ml-glow ml-glow--3d" opacity="0">
          <ellipse
            cx="320"
            cy="180"
            rx="230"
            ry="170"
            fill="url(#ml-cloud-glow-3d)"
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0;0;0"
            keyTimes="0;0.07;0.23;0.40;0.92;1"
            calcMode="linear"
            dur={duration}
            repeatCount="indefinite"
          />
        </g>

        <g className="ml-glow ml-glow--2d" opacity="0">
          <ellipse
            cx="184"
            cy="210"
            rx="170"
            ry="145"
            fill="url(#ml-cloud-glow-a)"
          />
          <ellipse
            cx="456"
            cy="136"
            rx="170"
            ry="145"
            fill="url(#ml-cloud-glow-b)"
          />
          <animate
            attributeName="opacity"
            values="0;0;0;0;1;1;0;0"
            keyTimes="0;0.07;0.23;0.52;0.66;0.78;0.92;1"
            calcMode="linear"
            dur={duration}
            repeatCount="indefinite"
          />
        </g>

        <g className="ml-points--animated">
          <AnimatedPoints points={classA} />
          <AnimatedPoints points={classB} />
        </g>

        <g className="ml-points--static" aria-hidden="true">
          <StaticPoints points={classA} />
          <StaticPoints points={classB} />
        </g>
      </svg>

      <figcaption className="ml-caption">
        <span>FEATURED WORK</span>
      </figcaption>
    </figure>
  );
}