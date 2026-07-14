import type { Question } from "./types";

/**
 * Las 12 preguntas definitivas, transcritas literalmente de la especificación
 * funcional aprobada. NO modificar textos, opciones, identificadores ni pesos.
 *
 * Convención de opciones puntuadas:
 *   A → CLARITY · B → RELATIONSHIPS · C → GROWTH · D → LEADERSHIP · E → REFLECTION
 * Preguntas sin puntos: la opción `id` es el valor que se vuelca al resultado.
 */
export const questions: Question[] = [
  {
    id: "P1",
    weight: 3,
    text: "Cuando piensas en tu momento actual, ¿qué situación ocupa más espacio en tu atención?",
    options: [
      { id: "A", profile: "CLARITY", label: "Tengo decisiones o cambios importantes y necesito ordenar mejor mi dirección." },
      { id: "B", profile: "RELATIONSHIPS", label: "Existen relaciones o conversaciones importantes que quisiera afrontar de otra manera." },
      { id: "C", profile: "GROWTH", label: "Siento que puedo avanzar más, pero todavía estoy explorando hacia dónde dirigir mi energía." },
      { id: "D", profile: "LEADERSHIP", label: "Tengo responsabilidades, proyectos o personas que dependen de mis decisiones." },
      { id: "E", profile: "REFLECTION", label: "Tengo varias preocupaciones al mismo tiempo y necesito comprender mejor qué requiere mi atención." },
    ],
  },
  {
    id: "P2",
    weight: 2,
    text: "Cuando aumentan las preocupaciones o responsabilidades, ¿qué suele ocurrirte con mayor frecuencia?",
    options: [
      { id: "A", profile: "CLARITY", label: "Analizo demasiado las posibilidades y me cuesta decidir." },
      { id: "B", profile: "RELATIONSHIPS", label: "Mi manera de comunicarme o relacionarme con otros se ve afectada." },
      { id: "C", profile: "GROWTH", label: "Pierdo continuidad y me cuesta convertir mis intenciones en acciones." },
      { id: "D", profile: "LEADERSHIP", label: "Me concentro en resolver y puedo perder de vista el impacto que genero en otras personas." },
      { id: "E", profile: "REFLECTION", label: "Acumulo pensamientos y preocupaciones hasta que me resulta difícil ordenarlos." },
    ],
  },
  {
    id: "P3",
    weight: 3,
    text: "Si pudieras conseguir un cambio significativo durante los próximos meses, ¿cuál tendría mayor valor para ti?",
    options: [
      { id: "A", profile: "CLARITY", label: "Tomar decisiones con mayor claridad y confianza." },
      { id: "B", profile: "RELATIONSHIPS", label: "Mejorar la calidad de mis relaciones y conversaciones." },
      { id: "C", profile: "GROWTH", label: "Desarrollar capacidades y convertir nuevas posibilidades en acciones." },
      { id: "D", profile: "LEADERSHIP", label: "Liderar, decidir y construir con mayor consciencia." },
      { id: "E", profile: "REFLECTION", label: "Recuperar perspectiva y comprender mejor cómo afrontar mi momento actual." },
    ],
  },
  {
    id: "P4",
    weight: 2,
    text: "Cuando enfrentas una situación importante, ¿qué tiende a resultar más difícil para ti?",
    options: [
      { id: "A", profile: "CLARITY", label: "Elegir una dirección entre diferentes alternativas." },
      { id: "B", profile: "RELATIONSHIPS", label: "Expresar lo que necesito o comprender la perspectiva de otra persona." },
      { id: "C", profile: "GROWTH", label: "Mantener el compromiso y avanzar de forma consistente." },
      { id: "D", profile: "LEADERSHIP", label: "Equilibrar los resultados que necesito conseguir con el impacto de mis decisiones." },
      { id: "E", profile: "REFLECTION", label: "Separar aquello que puedo resolver de las preocupaciones que continúan ocupando mi mente." },
    ],
  },
  {
    id: "P5",
    weight: 0,
    meta: "pressureLevel",
    text: "Durante las últimas dos semanas, ¿con qué frecuencia las preocupaciones, la tensión o el estrés han dificultado que puedas concentrarte, descansar o afrontar tus actividades habituales?",
    options: [
      { id: "NEVER", label: "Nunca." },
      { id: "SOME_DAYS", label: "Algunos días." },
      { id: "MORE_THAN_HALF", label: "Más de la mitad de los días." },
      { id: "ALMOST_EVERY_DAY", label: "Casi todos los días." },
    ],
  },
  {
    id: "P6",
    weight: 0,
    meta: "copingResources",
    text: "Cuando experimentas momentos de presión o tensión, ¿cuentas con estrategias que te ayudan a recuperar perspectiva y afrontar la situación?",
    options: [
      { id: "EFFECTIVE", label: "Sí, tengo estrategias que conozco y utilizo de manera efectiva." },
      { id: "PARTIAL", label: "Tengo algunas estrategias, aunque no siempre consigo aplicarlas." },
      { id: "INSUFFICIENT", label: "He intentado diferentes estrategias, pero siento que actualmente no son suficientes." },
      { id: "NONE", label: "No sé qué herramientas utilizar cuando me siento sobrecargado." },
    ],
  },
  {
    id: "P7",
    weight: 2,
    text: "Piensa en un problema importante que hayas vivido recientemente. ¿Cuál de estas respuestas se parece más a tu manera habitual de afrontarlo?",
    options: [
      { id: "A", profile: "CLARITY", label: "Intenté comprender todas las posibilidades antes de decidir qué hacer." },
      { id: "B", profile: "RELATIONSHIPS", label: "Gran parte de la dificultad estuvo relacionada con conversaciones, expectativas o diferencias con otras personas." },
      { id: "C", profile: "GROWTH", label: "Pensé en diferentes maneras de avanzar, pero me costó mantener acciones concretas en el tiempo." },
      { id: "D", profile: "LEADERSHIP", label: "Asumí la responsabilidad de resolverlo y concentré mi atención en conseguir resultados." },
      { id: "E", profile: "REFLECTION", label: "Le di muchas vueltas a la situación y me resultó difícil encontrar un punto claro desde donde comenzar." },
    ],
  },
  {
    id: "P8",
    weight: 0,
    meta: "coachingKnowledge",
    text: "Antes de llegar a Ponte Veritas, ¿qué tanto conocías sobre coaching?",
    options: [
      { id: "HIGH", label: "Lo conozco y comprendo cómo funciona." },
      { id: "MEDIUM", label: "Tengo una idea general." },
      { id: "LOW", label: "He escuchado hablar de coaching, pero no sé cómo funciona." },
      { id: "NONE", label: "No conocía realmente qué era." },
    ],
  },
  {
    id: "P9",
    weight: 0,
    meta: "coachingUnderstanding",
    text: "¿Cuál de estas opciones describe mejor lo que puede hacer un proceso de coaching?",
    options: [
      { id: "A", label: "Dar consejos y decir qué decisiones tomar." },
      { id: "B", label: "Tratar trastornos emocionales." },
      { id: "C", label: "Acompañar mediante preguntas, reflexión y herramientas para generar claridad y avanzar hacia objetivos." },
      { id: "D", label: "Motivar para pensar positivamente." },
    ],
  },
  {
    id: "P10",
    weight: 0,
    meta: "readinessLevel",
    text: "Si tuvieras acompañamiento y una metodología clara, ¿qué tan dispuesto estarías a trabajar activamente en tu proceso?",
    options: [
      { id: "HIGH", label: "Muy dispuesto." },
      { id: "MEDIUM", label: "Dispuesto, pero quiero comprender mejor cómo funciona." },
      { id: "LOW", label: "No estoy seguro." },
      { id: "NONE", label: "No es una prioridad actualmente." },
    ],
  },
  {
    id: "P11",
    weight: 3,
    text: "Imagina que han pasado seis meses y sientes que realmente has avanzado. ¿Qué sería diferente?",
    options: [
      { id: "A", profile: "CLARITY", label: "Habría tomado decisiones importantes y tendría una dirección más clara." },
      { id: "B", profile: "RELATIONSHIPS", label: "Estaría construyendo relaciones más sanas y manteniendo mejores conversaciones." },
      { id: "C", profile: "GROWTH", label: "Habría desarrollado nuevas capacidades y convertido ideas importantes en acciones." },
      { id: "D", profile: "LEADERSHIP", label: "Estaría liderando y tomando decisiones de una manera más consciente y sostenible." },
      { id: "E", profile: "REFLECTION", label: "Tendría mayor perspectiva sobre mis preocupaciones y mejores herramientas para afrontar momentos difíciles." },
    ],
  },
  {
    id: "P12",
    weight: 0,
    meta: "nextStepIntent",
    text: "Después de conocer tu resultado, ¿qué te gustaría hacer?",
    options: [
      { id: "SELF_REFLECTION", label: "Recibir recomendaciones para continuar reflexionando por mi cuenta." },
      { id: "LEARN_COACHING", label: "Comprender mejor cómo funciona un proceso de coaching." },
      { id: "EXPLORE_SUPPORT", label: "Explorar si un proceso de acompañamiento podría ser adecuado para mí." },
      { id: "REQUEST_CONVERSATION", label: "Solicitar una conversación con Ponte Veritas." },
    ],
  },
];

/** La respuesta conceptualmente correcta de P9 (para derivar coachingUnderstanding). */
export const P9_CORRECT_OPTION = "C";

/** Índices de los interludios dentro del flujo (tras P4 y tras P9). */
export const INTERLUDE_AFTER = {
  reflection: "P4",
  education: "P9",
} as const;
