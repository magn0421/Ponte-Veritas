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

/** Textos de bienvenida (editables). */
export const welcomeContent = {
  titulo: "Descubre tu momento actual",
  intro:
    "Un espacio breve de reflexión personal para comprender mejor el momento que atraviesas y descubrir posibles caminos de acompañamiento. Son 12 preguntas y te tomará unos pocos minutos.",
  nota:
    "No es un test de ansiedad ni una evaluación clínica: es una invitación a mirar tu momento con perspectiva. No necesitas entregar datos personales para conocer tu resultado.",
  cta: "Comenzar",
};

/** Interludios reflexivos — textos APROBADOS (no modificar). */
export const interludes = {
  reflection:
    "A veces, comprender cómo respondemos ante las dificultades puede mostrarnos posibilidades que no habíamos considerado.",
  education:
    "El coaching no consiste en recibir respuestas ni consejos. Es un proceso de conversación, reflexión, aprendizaje y acción que puede ayudarte a ampliar perspectivas y avanzar hacia objetivos definidos.",
};

/** Cápsula educativa que precede al bloque final (editable). */
export const educationCapsule = {
  titulo: "Antes de continuar",
  texto: interludes.education,
};

/** Transición previa al resultado (editable). */
export const resultTransition =
  "Gracias por tomarte este tiempo. Con tus respuestas hemos preparado una lectura de tu momento actual.";

/**
 * Aviso de orientación profesional. Aparece antes del CTA comercial solo cuando
 * showProfessionalGuidance es true. No diagnostica ni detecta crisis. Editable.
 */
export const professionalGuidanceNotice =
  "Por lo que compartiste, este podría ser un buen momento para apoyarte también en profesionales de la salud mental o del bienestar. El coaching puede acompañar tu proceso, pero no sustituye ese tipo de atención. Si lo sientes necesario, considera buscar ese apoyo.";

/** Declaración de alcance visible — texto APROBADO (no modificar). */
export const scopeDeclaration =
  "Este cuestionario tiene fines informativos y de reflexión personal. No constituye una evaluación psicológica, diagnóstico ni tratamiento médico. El coaching no sustituye la atención de profesionales de la salud mental.";

/** Encabezado de la sección "cómo puede acompañar Ponte Veritas" (editable). */
export const accompanimentHeading = "Cómo puede acompañarte Ponte Veritas";
