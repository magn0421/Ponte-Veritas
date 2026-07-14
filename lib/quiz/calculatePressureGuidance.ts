import type { Answers } from "@/content/quiz/types";

/**
 * Banderas derivadas de P5 (pressureLevel) y P6 (copingResources), según la
 * matriz definitiva V2 (§6) y la regla de precedencia (§9).
 *
 * - showProfessionalGuidance tiene PRECEDENCIA: cuando es true, las otras dos
 *   son false.
 * - Es un bloque transversal: NO es un sexto perfil y NO altera la puntuación.
 * - Se calcula SIEMPRE desde las respuestas actuales (no acumula estado):
 *   cambiar P5 o P6 recalcula correctamente las tres banderas.
 *
 * Matriz (P5 filas · P6 columnas):
 *                 EFFECTIVE     PARTIAL        INSUFFICIENT   NONE
 *  NEVER          —             —              —              —
 *  SOME_DAYS      educ. breve   CPG            CPG+nota       CPG+nota
 *  MORE_THAN_HALF CPG           CPG+nota       PG             PG
 *  ALMOST_EVERY_D CPG+nota      PG             PG             PG
 *
 * "educación breve" (SOME_DAYS+EFFECTIVE) no renderiza bloque adicional en el
 * resultado: ese visitante ya vio la cápsula educativa tras P9.
 */
export interface PressureGuidanceFlags {
  showProfessionalGuidance: boolean;
  showCoachingPressureGuidance: boolean;
  showPreventiveNote: boolean;
}

const NONE_FLAGS: PressureGuidanceFlags = {
  showProfessionalGuidance: false,
  showCoachingPressureGuidance: false,
  showPreventiveNote: false,
};

export function calculatePressureGuidance(answers: Answers): PressureGuidanceFlags {
  const p5 = answers.P5;
  const p6 = answers.P6;
  if (!p5 || !p6) return { ...NONE_FLAGS };

  // 1) ProfessionalGuidance (con precedencia).
  const professional =
    (p5 === "MORE_THAN_HALF" && (p6 === "INSUFFICIENT" || p6 === "NONE")) ||
    (p5 === "ALMOST_EVERY_DAY" &&
      (p6 === "PARTIAL" || p6 === "INSUFFICIENT" || p6 === "NONE"));

  if (professional) {
    return {
      showProfessionalGuidance: true,
      showCoachingPressureGuidance: false,
      showPreventiveNote: false,
    };
  }

  // 2) Sin bloque especial: NEVER (cualquiera) y SOME_DAYS+EFFECTIVE (educación breve).
  if (p5 === "NEVER") return { ...NONE_FLAGS };
  if (p5 === "SOME_DAYS" && p6 === "EFFECTIVE") return { ...NONE_FLAGS };

  // 3) Resto de casos: CoachingPressureGuidance, con nota preventiva donde aplica.
  const note =
    (p5 === "SOME_DAYS" && (p6 === "INSUFFICIENT" || p6 === "NONE")) ||
    (p5 === "MORE_THAN_HALF" && p6 === "PARTIAL") ||
    (p5 === "ALMOST_EVERY_DAY" && p6 === "EFFECTIVE");

  return {
    showProfessionalGuidance: false,
    showCoachingPressureGuidance: true,
    showPreventiveNote: note,
  };
}
