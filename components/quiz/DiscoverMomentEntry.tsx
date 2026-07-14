import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { descubreMomento } from "@/content/home";

/**
 * Sección de entrada al cuestionario en la Home. Se ubica entre "Cada persona
 * llega por una razón diferente" y "¿Qué es Ponte Veritas?". Enlaza a la página
 * independiente del cuestionario sin alterar el resto de la Home.
 */
export default function DiscoverMomentEntry() {
  return (
    <section className="bg-blanco-calido py-24">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <AnimateOnScroll direction="up">
          <div className="relative overflow-hidden rounded-(--radius-card) bg-negro-base px-7 py-12 text-center sm:px-12 sm:py-16">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-dorado">
              <Compass className="h-5 w-5 text-dorado" aria-hidden="true" />
            </span>
            <p className="mt-6 text-xs font-semibold tracking-[0.2em] uppercase text-dorado">
              {descubreMomento.eyebrow}
            </p>
            <h2 className="mx-auto mt-3 max-w-2xl font-serif text-3xl leading-tight text-texto-claro sm:text-4xl">
              {descubreMomento.titulo}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-texto-claro/75">
              {descubreMomento.texto}
            </p>
            <p className="mx-auto mt-4 text-xs tracking-wide text-texto-claro/50">
              {descubreMomento.nota}
            </p>
            <div className="mt-9">
              <Link
                href={descubreMomento.cta.href}
                className="inline-flex items-center gap-2.5 rounded-(--radius-btn) bg-dorado px-7 py-3.5 text-sm font-semibold tracking-wide uppercase text-texto-oscuro transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-dorado-claro motion-reduce:hover:translate-y-0"
              >
                {descubreMomento.cta.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
