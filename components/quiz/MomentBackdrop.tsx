/**
 * Arte de fondo de la sección "Descubre tu momento actual": líneas de luz
 * doradas que convergen hacia un punto (caminos que se unen en una dirección).
 * Decorativo (aria-hidden), recreado con SVG puro — sin imágenes ni librerías.
 * Las animaciones son CSS discretas y se desactivan con prefers-reduced-motion
 * (ver app/globals.css, sección "Descubre tu momento").
 */
export default function MomentBackdrop({ className = "" }: { className?: string }) {
  const solid = [
    "M20,70 C 200,90 380,150 560,258",
    "M30,120 C 210,140 390,190 560,259",
    "M20,175 C 220,190 400,225 560,260",
    "M25,235 C 220,240 400,252 560,260",
    "M20,300 C 220,300 400,278 560,261",
    "M25,360 C 220,350 400,305 560,262",
    "M20,420 C 220,405 400,332 560,262",
    "M35,470 C 230,450 410,360 560,263",
  ];
  const dotted = [
    "M18,95 C 205,120 385,168 560,258",
    "M22,205 C 220,215 400,238 560,260",
    "M24,270 C 220,272 400,266 560,261",
    "M22,395 C 220,378 400,320 560,262",
  ];
  const dots: Array<[number, number, number]> = [
    [150, 110, 2.4], [300, 175, 1.8], [420, 205, 2.2], [205, 330, 2],
    [360, 300, 1.6], [480, 255, 2.6], [255, 400, 1.8], [110, 250, 1.5],
  ];

  return (
    <svg
      viewBox="0 0 600 520"
      className={className}
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="pv-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="var(--color-dorado)" stopOpacity="0" />
          <stop offset="0.55" stopColor="var(--color-dorado)" stopOpacity="0.45" />
          <stop offset="1" stopColor="var(--color-dorado-claro)" stopOpacity="0.95" />
        </linearGradient>
        <radialGradient id="pv-focal" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="var(--color-dorado-claro)" stopOpacity="0.9" />
          <stop offset="0.4" stopColor="var(--color-dorado)" stopOpacity="0.35" />
          <stop offset="1" stopColor="var(--color-dorado)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g className="pv-moment-drift">
        {/* Resplandor del punto de convergencia */}
        <circle cx="560" cy="260" r="120" fill="url(#pv-focal)" className="pv-moment-pulse" />

        {/* Líneas continuas */}
        {solid.map((d, i) => (
          <path
            key={`s${i}`}
            d={d}
            stroke="url(#pv-line)"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
        ))}

        {/* Líneas punteadas con flujo muy lento hacia el punto */}
        {dotted.map((d, i) => (
          <path
            key={`d${i}`}
            d={d}
            stroke="url(#pv-line)"
            strokeWidth="1"
            strokeLinecap="round"
            strokeDasharray="1 9"
            className="pv-moment-flow"
          />
        ))}

        {/* Partículas de luz */}
        {dots.map(([cx, cy, r], i) => (
          <circle key={`c${i}`} cx={cx} cy={cy} r={r} fill="var(--color-dorado-claro)" opacity="0.8" />
        ))}

        {/* Punta de flecha en el punto de convergencia */}
        <path d="M548,260 L574,260 M566,253 L575,260 L566,267" stroke="var(--color-dorado-claro)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}
