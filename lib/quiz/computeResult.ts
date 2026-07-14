import type { Answers, CtaId, QuizResult } from "@/content/quiz/types";
import { calculateScores } from "./calculateScores";
import { resolveTie } from "./resolveTie";
import { calculateSecondaryProfile } from "./calculateSecondaryProfile";
import { calculateProfessionalGuidance } from "./calculateProfessionalGuidance";
import { calculateDynamicCTA } from "./calculateDynamicCTA";

/**
 * Orquesta el resultado completo a partir del estado de respuestas.
 * Función pura: mismo `answers` → mismo `QuizResult`. Toda la vista debe
 * derivar de aquí, nunca de valores acumulados manualmente.
 */
export function computeResult(answers: Answers): QuizResult {
  const scores = calculateScores(answers);
  const primaryProfile = resolveTie(scores, answers);
  const { secondaryProfile, showSecondaryProfile } = calculateSecondaryProfile(
    scores,
    primaryProfile
  );

  return {
    scores,
    primaryProfile,
    secondaryProfile,
    showSecondaryProfile,
    pressureLevel: answers.P5 ?? null,
    copingResources: answers.P6 ?? null,
    coachingKnowledge: answers.P8 ?? null,
    coachingUnderstanding: answers.P9 ?? null,
    readinessLevel: answers.P10 ?? null,
    nextStepIntent: (answers.P12 as CtaId | undefined) ?? null,
    showProfessionalGuidance: calculateProfessionalGuidance(answers),
    dynamicCTA: calculateDynamicCTA(answers),
  };
}
