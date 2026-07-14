import { questions } from "@/content/quiz/questions";
import type { Answers, ProfileId, QuestionId } from "@/content/quiz/types";

const byId = new Map<QuestionId, (typeof questions)[number]>(
  questions.map((q) => [q.id, q])
);

export function questionById(id: QuestionId) {
  return byId.get(id);
}

/** Perfil seleccionado por el visitante en una pregunta puntuada (o null). */
export function selectedProfile(answers: Answers, id: QuestionId): ProfileId | null {
  const q = byId.get(id);
  const optionId = answers[id];
  if (!q || !optionId) return null;
  const option = q.options.find((o) => o.id === optionId);
  return option?.profile ?? null;
}

/** Id de la opción seleccionada en una pregunta (o null). */
export function selectedOption(answers: Answers, id: QuestionId): string | null {
  return answers[id] ?? null;
}
