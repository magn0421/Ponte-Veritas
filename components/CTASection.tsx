import Link from "next/link";
import { MessageCircle } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import WhatsAppButton from "./WhatsAppButton";
import { BridgeMark } from "./Logo";

interface CTASectionProps {
  titulo: string;
  texto: string;
  botonLabel?: string;
  botonHref?: string;
}

/**
 * Bloque CTA final reutilizable en todas las páginas.
 * Marca de agua del puente con movimiento ambiental casi imperceptible
 * (omitido con prefers-reduced-motion vía CSS).
 */
export default function CTASection({
  titulo,
  texto,
  botonLabel = "Comencemos una conversación",
  botonHref = "/agenda",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-negro-base py-24">
      {/* Símbolo de marca de agua, ~6% de opacidad, deriva ambiental de ±10px en 20s */}
      <div
        aria-hidden="true"
        className="ambient-drift pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06]"
      >
        <BridgeMark className="h-72 w-[36rem]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center lg:px-8">
        <AnimateOnScroll direction="up">
          <h2 className="font-serif text-3xl text-texto-claro sm:text-4xl">{titulo}</h2>
        </AnimateOnScroll>
        <AnimateOnScroll direction="up" delay={150}>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-texto-claro/70">
            {texto}
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll direction="up" delay={300}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={botonHref}
              className="inline-flex items-center gap-2.5 rounded-(--radius-btn) bg-dorado px-7 py-3.5 text-sm font-semibold tracking-wide uppercase text-texto-oscuro transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-dorado-claro hover:shadow-lg hover:shadow-dorado-tenue"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              {botonLabel}
            </Link>
            <WhatsAppButton />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
