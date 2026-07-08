import Link from "next/link";

/** Marca simplificada: puente en arco con estrella, en dorado */
export function BridgeMark({ className = "h-10 w-16" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* estrella */}
      <path
        d="M60 2l2.2 6.8L69 11l-6.8 2.2L60 20l-2.2-6.8L51 11l6.8-2.2L60 2z"
        fill="var(--color-dorado)"
      />
      {/* tablero del puente */}
      <path d="M4 34h112" stroke="var(--color-dorado)" strokeWidth="2.5" strokeLinecap="round" />
      {/* arco */}
      <path
        d="M18 52c8-14 24-22 42-22s34 8 42 22"
        stroke="var(--color-dorado)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* pilares */}
      <path
        d="M30 34v9M45 34v13M60 34v14M75 34v13M90 34v9"
        stroke="var(--color-dorado)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 text-texto-claro"
      aria-label="Ponte Veritas — inicio"
    >
      <BridgeMark className={compact ? "h-8 w-13" : "h-10 w-16"} />
      <span className="flex flex-col">
        <span
          className={`font-serif tracking-[0.18em] text-dorado ${compact ? "text-lg" : "text-xl"}`}
        >
          PONTE VERITAS
        </span>
        {!compact && (
          <span className="text-[0.55rem] tracking-[0.22em] uppercase text-texto-claro/70">
            Transformando conversaciones, transformando vidas
          </span>
        )}
      </span>
    </Link>
  );
}
