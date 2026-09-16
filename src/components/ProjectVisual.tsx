import type { Motif } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectVisualProps {
  motif: Motif;
  gradient: [string, string];
  uid: string;
  className?: string;
}

/**
 * Abstract, generated visuals per project — no stock imagery. Each motif is a
 * lightweight SVG keyed to the project's accent gradient. Motion is subtle and
 * disabled under prefers-reduced-motion via global CSS.
 */
export function ProjectVisual({
  motif,
  gradient,
  uid,
  className,
}: ProjectVisualProps) {
  const [from, to] = gradient;
  const gid = `g-${uid}`;

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background: `radial-gradient(120% 100% at 80% 0%, ${from}22, transparent 55%)`,
        }}
      />
      <svg
        viewBox="0 0 400 260"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={from} />
            <stop offset="1" stopColor={to} />
          </linearGradient>
          <radialGradient id={`${gid}-r`} cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor={from} stopOpacity="0.9" />
            <stop offset="1" stopColor={to} stopOpacity="0" />
          </radialGradient>
        </defs>

        {motif === "scan" && <Scan gid={gid} />}
        {motif === "nodes" && <Nodes gid={gid} />}
        {motif === "orbit" && <Orbit gid={gid} />}
        {motif === "wave" && <Wave gid={gid} />}
        {motif === "grid" && <Grid gid={gid} />}
        {motif === "layers" && <Layers gid={gid} />}
        {motif === "flow" && <Flow gid={gid} />}
      </svg>
    </div>
  );
}

function Scan({ gid }: { gid: string }) {
  return (
    <g fill="none" stroke={`url(#${gid})`}>
      {[70, 48, 26].map((r, i) => (
        <circle
          key={r}
          cx="200"
          cy="130"
          r={r}
          strokeOpacity={0.5 - i * 0.1}
          strokeWidth="1.2"
        />
      ))}
      <g className="origin-center animate-spin-slow" style={{ transformBox: "fill-box" }}>
        <line x1="200" y1="130" x2="200" y2="52" stroke={`url(#${gid})`} strokeWidth="1.5" strokeOpacity="0.8" />
        <path d="M200 130 L200 52 A78 78 0 0 1 248 78 Z" fill={`url(#${gid}-r)`} opacity="0.25" />
      </g>
      <circle cx="200" cy="130" r="3" fill={`url(#${gid})`} stroke="none" />
      {[[150, 90], [262, 150], [176, 178], [250, 96]].map(([x, y], i) => (
        <rect
          key={i}
          x={x}
          y={y}
          width="22"
          height="16"
          rx="3"
          strokeOpacity="0.5"
          strokeWidth="1"
          className="animate-float"
          style={{ animationDelay: `${i * 0.6}s` }}
        />
      ))}
    </g>
  );
}

function Nodes({ gid }: { gid: string }) {
  const pts = [
    [70, 70], [150, 40], [230, 80], [320, 55],
    [110, 150], [200, 130], [290, 160], [160, 210], [250, 215],
  ];
  const edges = [
    [0, 1], [1, 2], [2, 3], [0, 4], [1, 5], [2, 6],
    [4, 5], [5, 6], [4, 7], [5, 7], [7, 8], [6, 8], [5, 8],
  ];
  return (
    <g>
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={pts[a][0]}
          y1={pts[a][1]}
          x2={pts[b][0]}
          y2={pts[b][1]}
          stroke={`url(#${gid})`}
          strokeOpacity="0.28"
          strokeWidth="1"
        />
      ))}
      {pts.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i % 3 === 0 ? 4.5 : 3}
          fill={`url(#${gid})`}
          className="animate-float"
          style={{ animationDelay: `${(i % 5) * 0.5}s`, opacity: 0.85 }}
        />
      ))}
    </g>
  );
}

function Orbit({ gid }: { gid: string }) {
  return (
    <g fill="none">
      <circle cx="200" cy="130" r="20" fill={`url(#${gid}-r)`} />
      <circle cx="200" cy="130" r="6" fill={`url(#${gid})`} />
      {[
        { rx: 120, ry: 46, rot: 0 },
        { rx: 120, ry: 46, rot: 60 },
        { rx: 120, ry: 46, rot: -60 },
      ].map((o, i) => (
        <g key={i} transform={`rotate(${o.rot} 200 130)`}>
          <ellipse
            cx="200"
            cy="130"
            rx={o.rx}
            ry={o.ry}
            stroke={`url(#${gid})`}
            strokeOpacity="0.3"
            strokeWidth="1"
          />
          <circle
            cx={200 + o.rx}
            cy="130"
            r="3.5"
            fill={`url(#${gid})`}
            className="animate-float"
            style={{ animationDelay: `${i * 0.8}s` }}
          />
        </g>
      ))}
    </g>
  );
}

function Wave({ gid }: { gid: string }) {
  return (
    <g fill="none" stroke={`url(#${gid})`}>
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          d={`M0 ${150 + i * 8} C 70 ${110 + i * 8}, 130 ${190 + i * 8}, 200 ${150 + i * 8} S 330 ${110 + i * 8}, 400 ${150 + i * 8}`}
          strokeOpacity={0.5 - i * 0.14}
          strokeWidth="1.5"
          className="animate-float"
          style={{ animationDelay: `${i * 0.7}s` }}
        />
      ))}
      {[40, 100, 160, 220, 280, 340].map((x, i) => (
        <rect
          key={x}
          x={x}
          y={170 - (i % 3) * 22}
          width="14"
          height={40 + (i % 3) * 22}
          rx="3"
          fill={`url(#${gid})`}
          fillOpacity="0.16"
          stroke="none"
        />
      ))}
    </g>
  );
}

function Grid({ gid }: { gid: string }) {
  const cells = [];
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 7; c++) {
      cells.push([c, r]);
    }
  }
  return (
    <g>
      {cells.map(([c, r], i) => (
        <rect
          key={i}
          x={40 + c * 46}
          y={50 + r * 42}
          width="34"
          height="30"
          rx="5"
          fill={`url(#${gid})`}
          fillOpacity={(i * 7) % 5 === 0 ? 0.4 : 0.08}
          stroke={`url(#${gid})`}
          strokeOpacity="0.18"
          strokeWidth="1"
          className="animate-float"
          style={{ animationDelay: `${(i % 6) * 0.4}s` }}
        />
      ))}
    </g>
  );
}

function Layers({ gid }: { gid: string }) {
  return (
    <g>
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x={110 - i * 8}
          y={70 + i * 22}
          width="180"
          height="70"
          rx="10"
          fill={`url(#${gid})`}
          fillOpacity={0.16 - i * 0.03}
          stroke={`url(#${gid})`}
          strokeOpacity="0.3"
          strokeWidth="1"
          transform={`skewX(-14)`}
          className="animate-float"
          style={{ animationDelay: `${i * 0.5}s` }}
        />
      ))}
    </g>
  );
}

function Flow({ gid }: { gid: string }) {
  const cols = [70, 200, 330];
  return (
    <g>
      {[80, 130, 180].map((y, r) =>
        cols.map((x, c) =>
          c < 2 ? (
            <line
              key={`${r}-${c}`}
              x1={x + 18}
              y1={y}
              x2={cols[c + 1] - 18}
              y2={[80, 130, 180][(r + c) % 3]}
              stroke={`url(#${gid})`}
              strokeOpacity="0.28"
              strokeWidth="1.2"
            />
          ) : null
        )
      )}
      {cols.map((x, c) =>
        [80, 130, 180].map((y, r) => (
          <circle
            key={`${c}-${r}`}
            cx={x}
            cy={y}
            r={c === 1 ? 7 : 5}
            fill={`url(#${gid})`}
            fillOpacity={c === 1 ? 0.9 : 0.55}
            className="animate-float"
            style={{ animationDelay: `${(r + c) * 0.4}s` }}
          />
        ))
      )}
    </g>
  );
}
