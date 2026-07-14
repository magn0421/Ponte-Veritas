import type { Answers } from "@/content/quiz/types";

/**
 * Regla de orientación profesional (spec §9).
 * true únicamente si P5 (pressureLevel) === ALMOST_EVERY_DAY y
 * P6 (copingResources) es INSUFFICIENT o NONE.
 * No diagnostica, no detecta crisis ni determina necesidad de tratamiento.
 */
export function calculateProfessionalGuidance(answers: Answers): boolean {
  const pressureLevel = answers.P5;
  const copingResources = answers.P6;
  return (
    pressureLevel === "ALMOST_EVERY_DAY" &&
    (copingResources === "INSUFFICIENT" || copingResources === "NONE")
  );
}
