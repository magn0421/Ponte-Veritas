"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { educationCapsule } from "@/content/quiz/cta";

/**
 * Cápsula educativa V2 tras P9: título + párrafos, con límites claros frente a
 * salud mental. No avanza automáticamente.
 */
export default function CoachingEducation({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <div className="mx-auto flex min-h-[60svh] w-full max-w-2xl flex-col justify-center px-5 py-14 lg:px-8">
      <p className="mb-5 text-center text-xs font-semibold tracking-[0.2em] uppercase text-dorado">
        Antes de continuar
      </p>
      <h2 className="text-center font-serif text-2xl leading-snug text-texto-oscuro sm:text-3xl">
        {educationCapsule.titulo}
      </h2>
      <div className="mt-6 space-y-4">
        {educationCapsule.parrafos.map((p, i) => (
          <p key={i} className="text-base leading-relaxed text-texto-gris">
            {p}
          </p>
        ))}
      </div>
      <div className="mt-9 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-(--radius-btn) px-4 py-2.5 text-sm font-semibold tracking-wide uppercase text-texto-gris transition-colors duration-300 hover:text-texto-oscuro"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Volver
        </button>
        <button
          type="button"
          onClick={onNext}
          className="inline-flex items-center gap-2.5 rounded-(--radius-btn) bg-dorado px-7 py-3.5 text-sm font-semibold tracking-wide uppercase text-texto-oscuro transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-dorado-claro motion-reduce:hover:translate-y-0"
        >
          Continuar
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
