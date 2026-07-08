"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { etapasProceso } from "@/content/proceso";
import { Icon } from "@/lib/icons";

gsap.registerPlugin(ScrollTrigger);

const N = etapasProceso.length;

/* Posiciones de los nodos sobre el arco (viewBox 1200×220).
   La curva evoca sutilmente el arco de un puente. */
const DESKTOP_POINTS: [number, number][] = [
  [100, 150],
  [300, 95],
  [500, 70],
  [700, 70],
  [900, 95],
  [1100, 150],
];

const DESKTOP_PATH =
  "M100,150 C170,115 230,102 300,95 C370,88 435,73 500,70 C560,67 640,67 700,70 C765,73 830,88 900,95 C970,102 1030,115 1100,150";

/** Activa los nodos a medida que la línea alcanza cada uno */
function updateNodes(nodes: (HTMLElement | null)[], progress: number) {
  nodes.forEach((node, i) => {
    if (!node) return;
    const threshold = i === 0 ? 0.03 : i / (N - 1) - 0.03;
    node.dataset.active = String(progress >= threshold);
  });
}

export default function TransformationPathInner() {
  const desktopWrapRef = useRef<HTMLDivElement>(null);
  const desktopPathRef = useRef<SVGPathElement>(null);
  const mobileWrapRef = useRef<HTMLDivElement>(null);
  const mobilePathRef = useRef<SVGPathElement>(null);
  const desktopNodes = useRef<(HTMLElement | null)[]>([]);
  const mobileNodes = useRef<(HTMLElement | null)[]>([]);

  useLayoutEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const setup = (
      path: SVGPathElement | null,
      wrap: HTMLDivElement | null,
      nodes: (HTMLElement | null)[]
    ) => {
      if (!path || !wrap) return;
      const length = path.getTotalLength();

      if (reduced) {
        // Con reduced-motion: línea completa y nodos visibles, sin animación
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: 0 });
        updateNodes(nodes, 1);
        return;
      }

      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: wrap,
          start: "top 75%",
          end: "bottom 60%",
          scrub: 1,
          onUpdate: (self) => updateNodes(nodes, self.progress),
        },
      });
    };

    const mm = gsap.matchMedia();
    // Desktop: arco horizontal · Móvil: línea vertical (mismo componente, path distinto)
    mm.add("(min-width: 1024px)", () =>
      setup(desktopPathRef.current, desktopWrapRef.current, desktopNodes.current)
    );
    mm.add("(max-width: 1023px)", () =>
      setup(mobilePathRef.current, mobileWrapRef.current, mobileNodes.current)
    );
    return () => mm.revert();
  }, []);

  return (
    <>
      {/* ------- Desktop: arco horizontal ------- */}
      <div ref={desktopWrapRef} className="hidden lg:block">
        <div className="relative mb-44">
          <svg
            viewBox="0 0 1200 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-auto w-full"
            aria-hidden="true"
          >
            {/* Trazo guía tenue */}
            <path d={DESKTOP_PATH} stroke="var(--color-dorado-tenue)" strokeWidth="2" />
            {/* Línea dorada que se dibuja con el scroll */}
            <path
              ref={desktopPathRef}
              d={DESKTOP_PATH}
              stroke="var(--color-dorado)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
          <ol className="absolute inset-0 m-0 list-none p-0">
            {etapasProceso.map((etapa, i) => {
              const [x, y] = DESKTOP_POINTS[i];
              return (
                <li
                  key={etapa.titulo}
                  ref={(el) => {
                    desktopNodes.current[i] = el;
                  }}
                  data-active="false"
                  className="tp-node absolute flex w-44 -translate-x-1/2 -translate-y-7 flex-col items-center text-center"
                  style={{ left: `${(x / 1200) * 100}%`, top: `${(y / 220) * 100}%` }}
                >
                  <span className="tp-dot flex h-14 w-14 items-center justify-center rounded-full border bg-crema">
                    <Icon name={etapa.icono} className="h-6 w-6" />
                  </span>
                  <div className="tp-text mt-4">
                    <h3 className="text-xs font-bold tracking-wide uppercase text-texto-oscuro">
                      {i + 1}. {etapa.titulo}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-texto-gris">
                      {etapa.descripcion}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>

      {/* ------- Móvil / tablet: línea vertical ------- */}
      <div ref={mobileWrapRef} className="relative lg:hidden">
        <svg
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-7 bottom-7 left-7 h-[calc(100%-3.5rem)] w-1 -translate-x-1/2"
          aria-hidden="true"
        >
          <path d="M2,0 L2,100" stroke="var(--color-dorado-tenue)" strokeWidth="4" />
          <path
            ref={mobilePathRef}
            d="M2,0 L2,100"
            stroke="var(--color-dorado)"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
        <ol className="m-0 flex list-none flex-col gap-12 p-0">
          {etapasProceso.map((etapa, i) => (
            <li
              key={etapa.titulo}
              ref={(el) => {
                mobileNodes.current[i] = el;
              }}
              data-active="false"
              className="tp-node relative flex items-start gap-5"
            >
              <span className="tp-dot z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border bg-crema">
                <Icon name={etapa.icono} className="h-6 w-6" />
              </span>
              <div className="tp-text pt-1">
                <h3 className="text-sm font-bold tracking-wide uppercase text-texto-oscuro">
                  {i + 1}. {etapa.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-texto-gris">
                  {etapa.descripcion}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
