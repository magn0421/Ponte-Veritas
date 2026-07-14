import { PROFILE_ORDER } from "@/content/quiz/types";
import type { Answers, ProfileId } from "@/content/quiz/types";
import { selectedProfile } from "./helpers";

/** Preguntas de desempate, en orden de prioridad (spec §7). */
const TIE_BREAK_QUESTIONS = ["P11", "P3", "P1"] as const;

/**
 * Determina el perfil principal. Si hay empate en la puntuación máxima:
 *   1) se prefiere el perfil elegido en P11; si no está entre los empatados,
 *   2) el elegido en P3; si no,
 *   3) el elegido en P1; y como red de seguridad determinista,
 *   4) el primero según PROFILE_ORDER entre los empatados.
 *
 * Nota (documentada con Miguel): por paridad de los pesos, el nivel P1 no llega
 * a decidir un empate estricto de dos perfiles; el fallback (4) garantiza que el
 * resultado sea siempre determinista en cualquier caso residual.
 */
export function resolveTie(
  scores: Record<ProfileId, number>,
  answers: Answers
): ProfileId {
  const max = Math.max(...PROFILE_ORDER.map((p) => scores[p]));
  const tied = PROFILE_ORDER.filter((p) => scores[p] === max);

  if (tied.length === 1) return tied[0];

  for (const qid of TIE_BREAK_QUESTIONS) {
    const chosen = selectedProfile(answers, qid);
    if (chosen && tied.includes(chosen)) return chosen;
  }

  // Fallback determinista final: orden fijo de perfiles.
  return tied[0];
}
