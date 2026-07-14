import { questions } from "@/content/quiz/questions";
import { PROFILE_ORDER } from "@/content/quiz/types";
import type { Answers, ProfileId } from "@/content/quiz/types";

/**
 * Calcula las puntuaciones de los cinco perfiles a partir del estado COMPLETO
 * de respuestas. Determinista y sin efectos: la puntuación nunca se acumula al
 * seleccionar, siempre se recalcula desde cero (evita errores al volver atrás o
 * cambiar una respuesta). Máximo por perfil: 15 (P1+P2+P3+P4+P7+P11 = 3+2+3+2+2+3).
 */
export function calculateScores(answers: Answers): Record<ProfileId, number> {
  const scores = Object.fromEntries(
    PROFILE_ORDER.map((p) => [p, 0])
  ) as Record<ProfileId, number>;

  for (const q of questions) {
    if (q.weight <= 0) continue;
    const optionId = answers[q.id];
    if (!optionId) continue;
    const option = q.options.find((o) => o.id === optionId);
    if (option?.profile) {
      scores[option.profile] += q.weight;
    }
  }

  return scores;
}
