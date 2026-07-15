/**
 * Arte de fondo de la sección "Descubre tu momento actual": muchas líneas de
 * luz doradas que fluyen y convergen hacia un destello brillante con una flecha
 * (caminos que se unen en una dirección). Decorativo (aria-hidden), recreado con
 * SVG puro — sin imágenes ni librerías. Las líneas se generan de forma
 * determinista para un abanico elegante.
 *
 * Animaciones CSS discretas, desactivadas con prefers-reduced-motion
 * (ver app/globals.css, sección "Descubre tu momento").
 */
const F = { x: 560, y: 300 }; // punto de convergencia
const N = 26;

function buildLines() {
  const solid: string[] = [];
  const dotted: string[] = [];
  for (let i = 0; i < N; i++) {
    const t = i / (N - 1); // 0..1
    const y0 = 18 + t * 566; // extremos izquierdos repartidos (arriba a abajo)
    const x0 = 8 + Math.sin(t * Math.PI) * 30; // ligera entrada en el centro
    // Ondulación suave y aproximación casi horizontal al punto de convergencia.
    const cp1x = 200 + (t - 0.5) * 40;
    const cp1y = y0 * 0.62 + F.y * 0.38 + Math.sin(t * Math.PI * 2.5) * 42;
    const cp2x = F.x - 170;
    const cp2y = F.y + (y0 - F.y) * 0.06;
    const d = `M${x0.toFixed(1)},${y0.toFixed(1)} C${cp1x.toFixed(1)},${cp1y.toFixed(1)} ${cp2x},${cp2y.toFixed(1)} ${F.x},${F.y}`;
    // ~1 de cada 3 líneas, punteada.
    if (i % 3 === 1) dotted.push(d);
    else solid.push(d);
  }
  return { solid, dotted };
}

const { solid, dotted } = buildLines();

const dots: Array<[number, number, number]> = [
  [470, 268, 2.4], [510, 240, 1.9], [430, 336, 2.1], [390, 288, 1.7],
  [520, 322, 2.3], [355, 366, 1.7], [545, 284, 2], [312, 306, 1.5],
  [275, 404, 1.7], [232, 262, 1.4], [430, 214, 1.6], [355, 236, 1.5],
  [300, 348, 1.5], [500, 360, 1.8],
];

export default function MomentBackdrop({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 600"
      className={className}
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="pv-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="var(--color-dorado)" stopOpacity="0" />
          <stop offset="0.5" stopColor="var(--color-dorado)" stopOpacity="0.4" />
          <stop offset="0.9" stopColor="var(--color-dorado-claro)" stopOpacity="0.9" />
          <stop offset="1" stopColor="#fff3d6" stopOpacity="1" />
        </linearGradient>
        <radialGradient id="pv-focal" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#fff3d6" stopOpacity="0.85" />
          <stop offset="0.35" stopColor="var(--color-dorado-claro)" stopOpacity="0.4" />
          <stop offset="1" stopColor="var(--color-dorado)" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="pv-core" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#fffaf0" stopOpacity="1" />
          <stop offset="1" stopColor="var(--color-dorado-claro)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g className="pv-moment-drift">
        {/* Destello de convergencia (capas): flare horizontal + halo + núcleo */}
        <ellipse cx={F.x} cy={F.y} rx="210" ry="24" fill="url(#pv-focal)" className="pv-moment-pulse" />
        <circle cx={F.x} cy={F.y} r="140" fill="url(#pv-focal)" className="pv-moment-pulse" />
        <ellipse cx={F.x} cy={F.y} rx="90" ry="14" fill="url(#pv-core)" />
        <circle cx={F.x} cy={F.y} r="40" fill="url(#pv-core)" />

        {/* Líneas continuas */}
        {solid.map((d, i) => (
          <path key={`s${i}`} d={d} stroke="url(#pv-line)" strokeWidth={0.8 + (i % 3) * 0.25} strokeLinecap="round" />
        ))}

        {/* Líneas punteadas con flujo muy lento hacia el punto */}
        {dotted.map((d, i) => (
          <path key={`d${i}`} d={d} stroke="url(#pv-line)" strokeWidth="1" strokeLinecap="round" strokeDasharray="1 8" className="pv-moment-flow" />
        ))}

        {/* Partículas de luz */}
        {dots.map(([cx, cy, r], i) => (
          <circle key={`c${i}`} cx={cx} cy={cy} r={r} fill="var(--color-dorado-claro)" opacity="0.85" />
        ))}

        {/* Núcleo brillante + flecha que continúa a la derecha */}
        <circle cx={F.x} cy={F.y} r="3.5" fill="#fffaf0" />
        <path
          d={`M${F.x - 8},${F.y} L${F.x + 62},${F.y} M${F.x + 52},${F.y - 8} L${F.x + 63},${F.y} L${F.x + 52},${F.y + 8}`}
          stroke="#fff3d6"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
