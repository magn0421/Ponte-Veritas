import { PROFILE_ORDER } from "@/content/quiz/types";
import type { ProfileId } from "@/content/quiz/types";

/**
 * Obtiene el perfil complementario (segundo con mayor puntuación) y decide si
 * debe mostrarse. Regla (spec §8): mostrar solo si
 * secondaryScore >= primaryScore - 3. Los empates del segundo lugar se resuelven
 * de forma determinista por PROFILE_ORDER. Nunca se exponen puntuaciones.
 */
export function calculateSecondaryProfile(
  scores: Record<ProfileId, number>,
  primary: ProfileId
): { secondaryProfile: ProfileId | null; showSecondaryProfile: boolean } {
  const candidates = PROFILE_ORDER.filter((p) => p !== primary);
  const secondaryScore = Math.max(...candidates.map((p) => scores[p]));

  // Primer perfil (según orden fijo) que alcanza esa puntuación.
  const secondaryProfile =
    candidates.find((p) => scores[p] === secondaryScore) ?? null;

  const showSecondaryProfile =
    secondaryProfile !== null && secondaryScore >= scores[primary] - 3;

  return { secondaryProfile, showSecondaryProfile };
}
