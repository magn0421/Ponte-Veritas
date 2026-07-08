"use client";

import dynamic from "next/dynamic";
import { etapasProceso } from "@/content/proceso";
import { Icon } from "@/lib/icons";

/**
 * Camino de transformación (6 etapas) — sección distintiva.
 * GSAP + ScrollTrigger se cargan solo aquí, vía dynamic import,
 * para no incluirlos en el bundle del resto del sitio.
 */
const TransformationPathInner = dynamic(() => import("./TransformationPathInner"), {
  ssr: false,
  // Fallback estático mientras carga el JS: línea completa y nodos visibles
  loading: () => <StaticPath />,
});

function StaticPath() {
  return (
    <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
      {etapasProceso.map((etapa, i) => (
        <li key={etapa.titulo} className="flex flex-col items-center text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-dorado bg-crema">
            <Icon name={etapa.icono} className="h-6 w-6 text-dorado" />
          </span>
          <h3 className="mt-4 text-xs font-bold tracking-wide uppercase text-texto-oscuro">
            {i + 1}. {etapa.titulo}
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-texto-gris">{etapa.descripcion}</p>
        </li>
      ))}
    </ol>
  );
}

export default function TransformationPath() {
  return <TransformationPathInner />;
}
