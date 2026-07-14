import type { Answers, CtaId, QuizResult } from "@/content/quiz/types";
import { calculateScores } from "./calculateScores";
import { resolveTie } from "./resolveTie";
import { calculateSecondaryProfile } from "./calculateSecondaryProfile";
import { calculatePressureGuidance } from "./calculatePressureGuidance";
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

  // Banderas P5/P6 (V2). La matriz ya es mutuamente excluyente; el guard de
  // precedencia lo deja explícito: si ProfessionalGuidance es true, las otras
  // dos son false.
  const pressure = calculatePressureGuidance(answers);
  const showProfessionalGuidance = pressure.showProfessionalGuidance;
  const showCoachingPressureGuidance = showProfessionalGuidance
    ? false
    : pressure.showCoachingPressureGuidance;
  const showPreventiveNote = showProfessionalGuidance
    ? false
    : pressure.showPreventiveNote;

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
    showProfessionalGuidance,
    showCoachingPressureGuidance,
    showPreventiveNote,
    dynamicCTA: calculateDynamicCTA(answers),
  };
}
