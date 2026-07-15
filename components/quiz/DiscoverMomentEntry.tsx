import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Feather,
  FileText,
  Leaf,
  MessageCircle,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { descubreMomento } from "@/content/home";
import MomentBackdrop from "./MomentBackdrop";

const iconMap = { FileText, Clock, UserRound } as const;

/** Resalta en dorado una frase dentro de un texto (sin alterar el texto). */
function Highlight({ text, phrase }: { text: string; phrase: string }) {
  const i = text.indexOf(phrase);
  if (i === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, i)}
      <span className="text-dorado">{phrase}</span>
      {text.slice(i + phrase.length)}
    </>
  );
}

/**
 * Sección de entrada al cuestionario en la Home (entre "Cada persona llega por
 * una razón diferente" y "¿Qué es Ponte Veritas?"). Solo actualización visual:
 * enlaza a la ruta del cuestionario sin tocar su lógica.
 *
 * Microanimaciones: aparición suave escalonada (AnimateOnScroll), hover elegante
 * del botón y movimiento muy lento del arte de fondo (CSS, desactivado con
 * prefers-reduced-motion).
 */
export default function DiscoverMomentEntry() {
  const parrafos = descubreMomento.parrafos;

  return (
    <section id="descubre-momento" className="relative overflow-hidden bg-negro-base scroll-mt-20">
      {/* Arte de fondo (líneas doradas convergentes) */}
      <MomentBackdrop className="pointer-events-none absolute inset-y-0 right-0 h-full w-full opacity-70 sm:opacity-90 md:w-[72%]" />
      {/* Degradado para asegurar legibilidad del contenido a la izquierda */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-negro-base from-20% via-negro-base/90 to-negro-base/30 md:via-negro-base/80 md:to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:py-24 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <AnimateOnScroll direction="up">
            <div className="flex items-center gap-3 sm:gap-4">
              <span aria-hidden="true" className="hidden h-px w-8 bg-dorado/40 sm:block" />
              <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full border border-dorado/50">
                <Feather className="h-3.5 w-3.5 text-dorado" aria-hidden="true" />
              </span>
              <p className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-dorado sm:text-xs sm:tracking-[0.2em]">
                {descubreMomento.eyebrow}
              </p>
              <span aria-hidden="true" className="hidden h-px flex-1 bg-dorado/25 sm:block" />
            </div>
          </AnimateOnScroll>

          {/* Título */}
          <AnimateOnScroll direction="up" delay={100}>
            <h2 className="mt-7 font-serif text-4xl leading-[1.05] text-texto-claro sm:text-5xl lg:text-6xl">
              <span className="block">{descubreMomento.tituloPre}</span>
              <span className="block">
                <span className="text-dorado">{descubreMomento.tituloResaltado}</span>{" "}
                {descubreMomento.tituloPost}
              </span>
            </h2>
          </AnimateOnScroll>

          {/* Párrafos */}
          <div className="mt-7 space-y-4">
            {parrafos.map((p, i) => {
              const last = i === parrafos.length - 1;
              return (
                <AnimateOnScroll key={i} direction="up" delay={180 + i * 90}>
                  {last ? (
                    <div className="flex gap-3">
                      <Leaf className="mt-1 h-5 w-5 flex-none text-dorado/70" aria-hidden="true" />
                      <p className="text-base leading-relaxed text-texto-claro/80">
                        <Highlight text={p} phrase="proceso de coaching" />
                      </p>
                    </div>
                  ) : (
                    <p className="max-w-lg text-base leading-relaxed text-texto-claro/85">{p}</p>
                  )}
                </AnimateOnScroll>
              );
            })}
          </div>

          {/* Datos con divisores verticales */}
          <AnimateOnScroll direction="up" delay={460}>
            <div className="mt-10 flex flex-col divide-y divide-dorado-tenue sm:flex-row sm:divide-x sm:divide-y-0">
              {descubreMomento.datos.map((dato) => {
                const Icono = iconMap[dato.icono as keyof typeof iconMap];
                return (
                  <div
                    key={dato.titulo}
                    className="flex flex-1 flex-col items-center py-5 text-center first:pt-0 last:pb-0 sm:px-6 sm:py-0 sm:first:pl-0 sm:first:pt-0 sm:last:pb-0"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-dorado/40">
                      {Icono && <Icono className="h-5 w-5 text-dorado" aria-hidden="true" />}
                    </span>
                    <span className="mt-3 text-[0.7rem] font-bold tracking-[0.1em] uppercase text-dorado">
                      {dato.titulo}
                    </span>
                    <span className="mt-1.5 text-xs leading-relaxed text-texto-claro/55">
                      {dato.detalle}
                    </span>
                  </div>
                );
              })}
            </div>
          </AnimateOnScroll>

          {/* Botón ancho */}
          <AnimateOnScroll direction="up" delay={560}>
            <Link
              href={descubreMomento.cta.href}
              className="group mt-10 flex w-full max-w-lg items-center justify-between gap-3 rounded-(--radius-btn) bg-gradient-to-r from-dorado via-dorado-claro to-dorado bg-[length:200%_100%] bg-left px-5 py-4 text-xs font-bold tracking-[0.08em] uppercase text-texto-oscuro shadow-lg shadow-dorado/10 transition-all duration-500 ease-out hover:bg-right hover:shadow-xl hover:shadow-dorado/30 motion-reduce:transition-none sm:px-8 sm:text-sm sm:tracking-[0.1em]"
            >
              <span className="flex min-w-0 items-center gap-3">
                <Leaf className="h-4 w-4" aria-hidden="true" />
                {descubreMomento.cta.label}
              </span>
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0"
                aria-hidden="true"
              />
            </Link>
          </AnimateOnScroll>

          {/* Frase final */}
          <AnimateOnScroll direction="up" delay={660}>
            <div className="mt-9 flex max-w-xl gap-3 border-t border-dorado-tenue pt-6">
              <MessageCircle className="mt-0.5 h-4 w-4 flex-none text-dorado/70" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-texto-claro/70">
                <Highlight text={descubreMomento.fraseFinal} phrase="nueva perspectiva" />
              </p>
            </div>
          </AnimateOnScroll>

          {/* Aviso */}
          <AnimateOnScroll direction="up" delay={720}>
            <div className="mt-5 flex gap-2.5">
              <ShieldCheck className="mt-0.5 h-4 w-4 flex-none text-texto-claro/40" aria-hidden="true" />
              <p className="text-xs leading-relaxed text-texto-claro/45">
                {descubreMomento.aviso}
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
