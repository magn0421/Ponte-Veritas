"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";

/**
 * Pantalla de interludio reutilizable (interludio reflexivo tras P4, cápsula
 * educativa tras P9 y transición al resultado). No avanza automáticamente.
 */
export default function InterludeScreen({
  eyebrow,
  text,
  continueLabel = "Continuar",
  onNext,
  onBack,
  canGoBack = true,
}: {
  eyebrow?: string;
  text: string;
  continueLabel?: string;
  onNext: () => void;
  onBack?: () => void;
  canGoBack?: boolean;
}) {
  return (
    <div className="mx-auto flex min-h-[60svh] w-full max-w-2xl flex-col justify-center px-5 py-14 text-center lg:px-8">
      {eyebrow && (
        <p className="mb-5 text-xs font-semibold tracking-[0.2em] uppercase text-dorado">
          {eyebrow}
        </p>
      )}
      <p className="mx-auto max-w-xl font-serif text-2xl leading-relaxed text-texto-oscuro sm:text-[1.7rem]">
        {text}
      </p>
      <div className="mt-9 flex items-center justify-center gap-4">
        {onBack && (
          <button
            type="button"
            onClick={onBack}
            disabled={!canGoBack}
            className="inline-flex items-center gap-2 rounded-(--radius-btn) px-4 py-2.5 text-sm font-semibold tracking-wide uppercase text-texto-gris transition-colors duration-300 hover:text-texto-oscuro disabled:pointer-events-none disabled:opacity-0"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Volver
          </button>
        )}
        <button
          type="button"
          onClick={onNext}
          className="inline-flex items-center gap-2.5 rounded-(--radius-btn) bg-dorado px-7 py-3.5 text-sm font-semibold tracking-wide uppercase text-texto-oscuro transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-dorado-claro motion-reduce:hover:translate-y-0"
        >
          {continueLabel}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
