import type { Answers } from "@/content/quiz/types";
import { calculatePressureGuidance } from "./calculatePressureGuidance";

/**
 * Regla de orientación profesional (V2 §9). Se activa con
 * MORE_THAN_HALF + (INSUFFICIENT|NONE) o ALMOST_EVERY_DAY + (PARTIAL|INSUFFICIENT|NONE).
 * Delega en la matriz P5/P6 para mantener una única fuente de verdad.
 * No diagnostica, no detecta crisis ni determina necesidad de tratamiento.
 */
export function calculateProfessionalGuidance(answers: Answers): boolean {
  return calculatePressureGuidance(answers).showProfessionalGuidance;
}
