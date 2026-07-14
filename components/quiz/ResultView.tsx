"use client";

import Link from "next/link";
import { ArrowRight, RotateCcw, Sparkles, Target, Lightbulb, LifeBuoy, Compass } from "lucide-react";
import type { QuizResult } from "@/content/quiz/types";
import { profileContent } from "@/content/quiz/profiles";
import {
  ctaContent,
  professionalGuidance,
  coachingPressureGuidance,
  preventiveNote,
  scopeDeclaration,
  accompanimentHeading,
} from "@/content/quiz/cta";
import LeadCapture from "./LeadCapture";

/**
 * Página de resultados. Todo se deriva de `result` (función pura del estado).
 * No se muestran puntuaciones ni porcentajes. Orden V2 (§10):
 * hero → interpretación → fortaleza/oportunidad → ejercicio →
 * [ProfessionalGuidance si aplica; si no, CoachingPressureGuidance + nota
 * preventiva cuando correspondan] → cómo acompaña Ponte Veritas →
 * captación opcional → CTA dinámico.
 */
export default function ResultView({
  result,
  onRestart,
}: {
  result: QuizResult;
  onRestart: () => void;
}) {
  const primary = profileContent[result.primaryProfile];
  const secondary =
    result.showSecondaryProfile && result.secondaryProfile
      ? profileContent[result.secondaryProfile]
      : null;
  const cta = ctaContent[result.dynamicCTA ?? "REQUEST_CONVERSATION"];

  return (
    <div>
      {/* Hero del resultado */}
      <section className="bg-negro-base px-5 py-16 text-center sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-dorado">
            Tu momento actual
          </p>
          <h1 className="mt-4 font-serif text-3xl leading-tight text-texto-claro sm:text-4xl">
            {primary.titulo}
          </h1>
          {secondary && (
            <p className="mt-5 text-base leading-relaxed text-texto-claro/70">
              También resuena en ti:{" "}
              <span className="text-dorado">{secondary.titulo}</span>
            </p>
          )}
        </div>
      </section>

      {/* Cuerpo del resultado */}
      <section className="bg-crema px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-10">
          {/* Interpretación */}
          <p className="text-lg leading-relaxed text-texto-oscuro">
            {primary.interpretacion}
          </p>

          {/* Fortaleza y oportunidad */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-(--radius-card) border border-dorado-tenue bg-blanco-calido p-6">
              <Sparkles className="h-6 w-6 text-dorado" aria-hidden="true" />
              <h2 className="mt-3 text-xs font-bold tracking-[0.15em] uppercase text-texto-gris">
                Tu fortaleza
              </h2>
              <p className="mt-2 text-base leading-relaxed text-texto-oscuro">
                {primary.fortaleza}
              </p>
            </div>
            <div className="rounded-(--radius-card) border border-dorado-tenue bg-blanco-calido p-6">
              <Target className="h-6 w-6 text-dorado" aria-hidden="true" />
              <h2 className="mt-3 text-xs font-bold tracking-[0.15em] uppercase text-texto-gris">
                Tu oportunidad de desarrollo
              </h2>
              <p className="mt-2 text-base leading-relaxed text-texto-oscuro">
                {primary.oportunidad}
              </p>
            </div>
          </div>

          {/* Ejercicio práctico */}
          <div className="rounded-(--radius-card) bg-negro-base p-7 sm:p-9">
            <div className="flex items-center gap-2 text-dorado">
              <Lightbulb className="h-5 w-5" aria-hidden="true" />
              <span className="text-xs font-bold tracking-[0.15em] uppercase">
                Ejercicio práctico
              </span>
            </div>
            <h2 className="mt-4 font-serif text-2xl text-texto-claro">
              {primary.ejercicioTitulo}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-texto-claro/75">
              {primary.ejercicioDescripcion}
            </p>
          </div>

          {/* Guía P5/P6: ProfessionalGuidance tiene precedencia sobre CPG/nota */}
          {result.showProfessionalGuidance ? (
            <div
              role="note"
              className="rounded-(--radius-card) border border-dorado/50 bg-blanco-calido p-7 sm:p-9"
            >
              <div className="flex items-center gap-2 text-dorado">
                <LifeBuoy className="h-5 w-5" aria-hidden="true" />
                <span className="text-xs font-bold tracking-[0.15em] uppercase">
                  {professionalGuidance.titulo}
                </span>
              </div>
              <h2 className="mt-4 font-serif text-xl leading-snug text-texto-oscuro">
                {professionalGuidance.subtitulo}
              </h2>
              <div className="mt-4 space-y-3">
                {professionalGuidance.parrafos.map((p, i) => (
                  <p key={i} className="text-sm leading-relaxed text-texto-oscuro">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ) : (
            <>
              {result.showCoachingPressureGuidance && (
                <div className="rounded-(--radius-card) border border-dorado-tenue bg-blanco-calido p-7 sm:p-9">
                  <div className="flex items-center gap-2 text-dorado">
                    <Compass className="h-5 w-5" aria-hidden="true" />
                    <span className="text-xs font-bold tracking-[0.15em] uppercase">
                      {coachingPressureGuidance.titulo}
                    </span>
                  </div>
                  <div className="mt-4 space-y-3">
                    {coachingPressureGuidance.parrafos.map((p, i) => (
                      <p key={i} className="text-sm leading-relaxed text-texto-oscuro">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              )}
              {result.showPreventiveNote && (
                <p
                  role="note"
                  className="rounded-(--radius-card) border-l-2 border-dorado/50 bg-blanco-calido/60 px-5 py-4 text-sm leading-relaxed text-texto-gris"
                >
                  {preventiveNote}
                </p>
              )}
            </>
          )}

          {/* Cómo puede acompañar Ponte Veritas */}
          <div>
            <h2 className="font-serif text-2xl text-texto-oscuro">
              {accompanimentHeading}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-texto-gris">
              {primary.acompanamiento}
            </p>
          </div>

          {/* Captación opcional */}
          <LeadCapture result={result} />

          {/* CTA dinámico */}
          <div className="rounded-(--radius-card) bg-dorado-tenue p-7 text-center sm:p-9">
            <p className="mb-5 text-base leading-relaxed text-texto-oscuro">
              {cta.descripcion}
            </p>
            <Link
              href={cta.href}
              className="inline-flex items-center gap-2.5 rounded-(--radius-btn) bg-dorado px-7 py-3.5 text-sm font-semibold tracking-wide uppercase text-texto-oscuro transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-dorado-claro motion-reduce:hover:translate-y-0"
            >
              {cta.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          {/* Declaración de alcance + reinicio */}
          <div className="border-t border-dorado-tenue pt-8 text-center">
            <p className="mx-auto max-w-xl text-xs leading-relaxed text-texto-gris/80">
              {scopeDeclaration}
            </p>
            <button
              type="button"
              onClick={onRestart}
              className="mt-6 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-texto-gris transition-colors duration-300 hover:text-dorado"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              Volver a empezar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
