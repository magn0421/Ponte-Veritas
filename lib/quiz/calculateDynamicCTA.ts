import { ctaContent } from "@/content/quiz/cta";
import type { Answers, CtaId } from "@/content/quiz/types";

const VALID_CTA = new Set<string>(Object.keys(ctaContent));

/**
 * CTA dinámico según la intención declarada en P12 (nextStepIntent).
 * El id de la opción de P12 coincide con el CtaId. Devuelve null si aún no se
 * ha respondido P12.
 */
export function calculateDynamicCTA(answers: Answers): CtaId | null {
  const intent = answers.P12;
  if (intent && VALID_CTA.has(intent)) return intent as CtaId;
  return null;
}
