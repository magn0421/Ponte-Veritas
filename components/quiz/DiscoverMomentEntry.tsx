import Link from "next/link";
import {
  ArrowRight,
  Clock,
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

/**
 * Sección de entrada al cuestionario en la Home (entre "Cada persona llega por
 * una razón diferente" y "¿Qué es Ponte Veritas?"). Solo actualización visual:
 * enlaza a la ruta del cuestionario sin tocar su lógica.
 *
 * Microanimaciones: aparición suave del contenido (AnimateOnScroll, escalonada),
 * hover elegante del botón y movimiento muy lento del arte de fondo (CSS,
 * desactivado con prefers-reduced-motion).
 */
export default function DiscoverMomentEntry() {
  return (
    <section className="bg-blanco-calido py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-(--radius-card) bg-negro-base">
          {/* Arte de fondo (líneas doradas convergentes) */}
          <MomentBackdrop className="pointer-events-none absolute inset-y-0 right-0 h-full w-full opacity-60 sm:opacity-80 lg:w-[64%]" />
          {/* Degradado para asegurar legibilidad del contenido a la izquierda */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-negro-base via-negro-base/92 to-negro-base/40 lg:via-negro-base/85 lg:to-transparent" />

          <div className="relative px-6 py-14 sm:px-10 sm:py-16 lg:w-[64%] lg:py-20 lg:pl-14">
            {/* Eyebrow */}
            <AnimateOnScroll direction="up">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-8 bg-dorado/50" />
                <Leaf className="h-4 w-4 text-dorado" aria-hidden="true" />
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-dorado">
                  {descubreMomento.eyebrow}
                </p>
              </div>
            </AnimateOnScroll>

            {/* Título */}
            <AnimateOnScroll direction="up" delay={100}>
              <h2 className="mt-6 font-serif text-4xl leading-[1.05] text-texto-claro sm:text-5xl">
                <span className="block">{descubreMomento.tituloPre}</span>
                <span className="block">
                  <span className="text-dorado">{descubreMomento.tituloResaltado}</span>{" "}
                  {descubreMomento.tituloPost}
                </span>
              </h2>
            </AnimateOnScroll>

            {/* Párrafos */}
            <div className="mt-6 max-w-xl space-y-4">
              {descubreMomento.parrafos.map((p, i) => (
                <AnimateOnScroll key={i} direction="up" delay={180 + i * 90}>
                  {i === descubreMomento.parrafos.length - 1 ? (
                    <div className="flex gap-3">
                      <Leaf className="mt-1 h-4 w-4 flex-none text-dorado/70" aria-hidden="true" />
                      <p className="text-base leading-relaxed text-texto-claro/80">{p}</p>
                    </div>
                  ) : (
                    <p className="text-base leading-relaxed text-texto-claro/85">{p}</p>
                  )}
                </AnimateOnScroll>
              ))}
            </div>

            {/* Datos: 12 preguntas · 2–3 minutos · resultado personalizado */}
            <AnimateOnScroll direction="up" delay={460}>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-6 sm:gap-x-10">
                {descubreMomento.datos.map((dato) => {
                  const Icono = iconMap[dato.icono as keyof typeof iconMap];
                  return (
                    <div key={dato.titulo} className="flex max-w-[10rem] flex-col">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-dorado/40">
                        {Icono && <Icono className="h-5 w-5 text-dorado" aria-hidden="true" />}
                      </span>
                      <span className="mt-3 text-[0.7rem] font-bold tracking-[0.12em] uppercase text-dorado">
                        {dato.titulo}
                      </span>
                      <span className="mt-1 text-xs leading-relaxed text-texto-claro/55">
                        {dato.detalle}
                      </span>
                    </div>
                  );
                })}
              </div>
            </AnimateOnScroll>

            {/* Botón */}
            <AnimateOnScroll direction="up" delay={560}>
              <Link
                href={descubreMomento.cta.href}
                className="group mt-10 inline-flex items-center gap-3 rounded-(--radius-btn) bg-gradient-to-r from-dorado to-dorado-claro px-8 py-4 text-sm font-semibold tracking-[0.08em] uppercase text-texto-oscuro shadow-lg shadow-dorado/10 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-xl hover:shadow-dorado/30 motion-reduce:hover:translate-y-0"
              >
                <Leaf className="h-4 w-4" aria-hidden="true" />
                {descubreMomento.cta.label}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0" aria-hidden="true" />
              </Link>
            </AnimateOnScroll>

            {/* Frase final */}
            <AnimateOnScroll direction="up" delay={660}>
              <div className="mt-9 flex max-w-xl gap-3 border-t border-dorado-tenue pt-6">
                <MessageCircle className="mt-0.5 h-4 w-4 flex-none text-dorado/70" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-texto-claro/70 italic">
                  {descubreMomento.fraseFinal}
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
      </div>
    </section>
  );
}
