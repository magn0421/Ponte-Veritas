import type { CtaId } from "./types";

/**
 * CTA dinámicos según la intención declarada en P12 (nextStepIntent).
 * Las etiquetas son las aprobadas en la especificación; los destinos (href)
 * son propuestos y editables.
 */
export const ctaContent: Record<CtaId, { label: string; href: string; descripcion: string }> = {
  REQUEST_CONVERSATION: {
    label: "Comencemos una conversación",
    href: "/agenda",
    descripcion: "Da el primer paso: una conversación sin costo ni compromiso para escucharte.",
  },
  EXPLORE_SUPPORT: {
    label: "Descubre cómo podemos acompañarte",
    href: "/personas",
    descripcion: "Conoce las formas en que un proceso de acompañamiento podría ayudarte.",
  },
  LEARN_COACHING: {
    label: "Conoce cómo funciona el coaching",
    href: "/nuestra-esencia",
    descripcion: "Comprende en qué consiste un proceso de coaching y cómo trabajamos.",
  },
  SELF_REFLECTION: {
    label: "Recibe tu guía personalizada",
    href: "#guia",
    descripcion: "Déjanos tu correo y recibe recomendaciones para seguir reflexionando por tu cuenta.",
  },
};

/** Textos de bienvenida (editables). Incluye la frase de entrada V2 (§3). */
export const welcomeContent = {
  titulo: "Descubre tu momento actual",
  intro:
    "Un espacio breve de reflexión personal para comprender mejor el momento que atraviesas y descubrir posibles caminos de acompañamiento. También podrás conocer cómo un proceso de coaching puede acompañarte a desarrollar nuevas perspectivas y herramientas para afrontar momentos de presión, cambios y desafíos personales o profesionales. Son 12 preguntas y te tomará unos pocos minutos.",
  nota:
    "No es un test de ansiedad ni una evaluación clínica: es una invitación a mirar tu momento con perspectiva. No necesitas entregar datos personales para conocer tu resultado.",
  cta: "Comenzar",
};

/** Interludio reflexivo tras P4 — texto APROBADO (no modificar). */
export const interludes = {
  reflection:
    "A veces, comprender cómo respondemos ante las dificultades puede mostrarnos posibilidades que no habíamos considerado.",
};

/**
 * Cápsula educativa V2 tras P9 (§4). Reemplaza a la versión V1.
 * Título + dos párrafos, con límites claros frente a salud mental.
 */
export const educationCapsule = {
  titulo: "El coaching puede acompañarte a desarrollar nuevas formas de afrontar tus desafíos.",
  parrafos: [
    "El coaching no consiste en recibir respuestas, consejos ni soluciones prefabricadas. Es un proceso de conversación, reflexión, aprendizaje y acción que puede ayudarte a ampliar perspectivas, reconocer patrones, ordenar prioridades, tomar decisiones y construir herramientas para afrontar momentos de presión, estrés cotidiano, preocupaciones, cambios y desafíos personales o profesionales.",
    "El coaching no diagnostica ni trata trastornos de ansiedad, depresión u otras condiciones de salud mental. Cuando existe malestar intenso, persistente o una afectación significativa de la vida cotidiana, es importante considerar la evaluación y atención de un profesional de la salud mental. En algunos casos, el coaching puede ser complementario, pero no sustituye la atención clínica.",
  ],
};

/** Transición previa al resultado (editable). */
export const resultTransition =
  "Gracias por tomarte este tiempo. Con tus respuestas hemos preparado una lectura de tu momento actual.";

/**
 * CoachingPressureGuidance (V2 §5). Bloque transversal en el resultado — no es
 * un perfil y no altera la puntuación. Se muestra según la matriz P5/P6.
 */
export const coachingPressureGuidance = {
  titulo: "Afrontar la presión también puede aprenderse",
  parrafos: [
    "Tus respuestas indican que las preocupaciones, la tensión o la presión pueden estar ocupando espacio en tu momento actual.",
    "Un proceso de coaching puede ofrecerte un espacio para observar cómo estás respondiendo ante esas situaciones, reconocer patrones, ordenar prioridades, explorar nuevas perspectivas y construir acciones concretas para afrontar tus desafíos de una manera más consciente.",
    "El coaching no busca eliminar todas las dificultades ni sustituye la atención en salud mental. Su propósito es acompañarte a desarrollar recursos y avanzar activamente hacia objetivos y cambios concretos.",
  ],
};

/**
 * Nota preventiva (V2 §7). No es alerta, nivel de riesgo, diagnóstico ni
 * clasificación clínica.
 */
export const preventiveNote =
  "Si notas que la presión, las preocupaciones o la tensión aumentan, se mantienen en el tiempo o comienzan a interferir significativamente con tu descanso, tus relaciones, tu trabajo o tus actividades cotidianas, puede ser útil consultar a un profesional de la salud mental para recibir una orientación adecuada.";

/**
 * ProfessionalGuidance V2 (§8). Aparece antes del acompañamiento cuando
 * showProfessionalGuidance es true. No diagnostica ni detecta crisis.
 */
export const professionalGuidance = {
  titulo: "Antes de continuar",
  subtitulo:
    "Puede ser útil considerar qué tipo de acompañamiento necesitas en este momento.",
  parrafos: [
    "Tus respuestas muestran una combinación de presión frecuente y recursos que actualmente pueden no ser suficientes para afrontar lo que estás viviendo. Este cuestionario no permite determinar la causa, intensidad ni naturaleza de ese malestar y no constituye una evaluación psicológica.",
    "Considera hablar con un profesional de la salud mental que pueda evaluar tu situación y orientarte adecuadamente. El coaching no diagnostica ni trata trastornos de ansiedad, depresión u otras condiciones de salud mental y no sustituye la atención clínica. En algunos casos puede ser un acompañamiento complementario cuando existe claridad sobre sus objetivos y límites.",
    "Si sientes que estás en peligro inmediato, que podrías hacerte daño o que no puedes mantenerte a salvo, busca ayuda de emergencia o apoyo profesional inmediato en tu localidad.",
  ],
};

/** Declaración de alcance visible — texto APROBADO (no modificar). */
export const scopeDeclaration =
  "Este cuestionario tiene fines informativos y de reflexión personal. No constituye una evaluación psicológica, diagnóstico ni tratamiento médico. El coaching no sustituye la atención de profesionales de la salud mental.";

/** Encabezado de la sección "cómo puede acompañar Ponte Veritas" (editable). */
export const accompanimentHeading = "Cómo puede acompañarte Ponte Veritas";
