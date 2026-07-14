import { questions } from "@/content/quiz/questions";
import type { QuestionId } from "@/content/quiz/types";

/**
 * Define el orden exacto de pantallas del cuestionario, incluyendo los
 * interludios. Flujo (spec §3):
 * Bienvenida → P1–P4 → Interludio reflexivo → P5–P9 → Cápsula educativa →
 * P10–P12 → Transición → Resultado.
 */
export type FlowStep =
  | { kind: "welcome" }
  | { kind: "question"; questionId: QuestionId; questionNumber: number }
  | { kind: "interlude" }
  | { kind: "education" }
  | { kind: "transition" }
  | { kind: "result" };

export function buildFlow(): FlowStep[] {
  const steps: FlowStep[] = [{ kind: "welcome" }];
  questions.forEach((q, i) => {
    steps.push({ kind: "question", questionId: q.id, questionNumber: i + 1 });
    if (q.id === "P4") steps.push({ kind: "interlude" });
    if (q.id === "P9") steps.push({ kind: "education" });
  });
  steps.push({ kind: "transition" });
  steps.push({ kind: "result" });
  return steps;
}

export const TOTAL_QUESTIONS = questions.length;
