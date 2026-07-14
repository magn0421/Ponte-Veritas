/**
 * Tipos del cuestionario "Descubre tu momento actual".
 * El contenido (preguntas, perfiles, CTA) vive en /content/quiz;
 * la lógica de cálculo, en /lib/quiz. Ambos comparten estos tipos.
 */

/** Los cinco perfiles internos. El orden define el desempate final determinista. */
export const PROFILE_ORDER = [
  "CLARITY",
  "RELATIONSHIPS",
  "GROWTH",
  "LEADERSHIP",
  "REFLECTION",
] as const;

export type ProfileId = (typeof PROFILE_ORDER)[number];

export type QuestionId =
  | "P1" | "P2" | "P3" | "P4" | "P5" | "P6"
  | "P7" | "P8" | "P9" | "P10" | "P11" | "P12";

/**
 * Campo semántico de las preguntas SIN puntos, para volcar su respuesta
 * al objeto de resultado con un nombre claro.
 */
export type MetaField =
  | "pressureLevel"        // P5
  | "copingResources"      // P6
  | "coachingKnowledge"    // P8
  | "coachingUnderstanding" // P9
  | "readinessLevel"       // P10
  | "nextStepIntent";      // P12

export interface QuestionOption {
  /** Identificador estable de la opción (A–E en preguntas con perfil; token en las demás). */
  id: string;
  /** Texto visible de la opción. */
  label: string;
  /** Perfil al que suma (solo en preguntas puntuadas). */
  profile?: ProfileId;
}

export interface Question {
  id: QuestionId;
  /** Peso de la pregunta; 0 = no puntúa. */
  weight: number;
  text: string;
  options: QuestionOption[];
  /** Presente solo en preguntas sin puntos que alimentan el resultado. */
  meta?: MetaField;
}

/** Respuestas del visitante: id de pregunta → id de opción seleccionada. */
export type Answers = Partial<Record<QuestionId, string>>;

export type CtaId =
  | "REQUEST_CONVERSATION"
  | "EXPLORE_SUPPORT"
  | "LEARN_COACHING"
  | "SELF_REFLECTION";

export interface QuizResult {
  scores: Record<ProfileId, number>;
  primaryProfile: ProfileId;
  secondaryProfile: ProfileId | null;
  showSecondaryProfile: boolean;
  pressureLevel: string | null;
  copingResources: string | null;
  coachingKnowledge: string | null;
  coachingUnderstanding: string | null;
  readinessLevel: string | null;
  nextStepIntent: CtaId | null;
  showProfessionalGuidance: boolean;
  dynamicCTA: CtaId | null;
}

export interface ProfileContent {
  id: ProfileId;
  titulo: string;
  interpretacion: string;
  fortaleza: string;
  oportunidad: string;
  ejercicioTitulo: string;
  ejercicioDescripcion: string;
  acompanamiento: string;
}
