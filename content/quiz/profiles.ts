import type { ProfileContent, ProfileId } from "./types";

/**
 * Contenido base de los cinco perfiles.
 *
 * Campos APROBADOS (no modificar sin autorización): titulo, fortaleza,
 * oportunidad, ejercicioTitulo.
 *
 * Campos EDITABLES (redacción de enlace, ajústalos a tu voz cuando quieras):
 * interpretacion, ejercicioDescripcion, acompanamiento.
 */
export const profileContent: Record<ProfileId, ProfileContent> = {
  CLARITY: {
    id: "CLARITY",
    titulo: "Estás buscando claridad en un momento de cambio.",
    interpretacion:
      "Tus respuestas reflejan que atraviesas un momento en el que ordenar tu dirección se ha vuelto importante. No se trata de falta de capacidad, sino de encontrar un espacio para mirar con perspectiva y decidir con mayor confianza.",
    fortaleza: "Tienes disposición para comprender antes de actuar.",
    oportunidad: "Convertir la incertidumbre en dirección.",
    ejercicioTitulo: "El ejercicio de las tres columnas.",
    ejercicioDescripcion:
      "En una hoja, dibuja tres columnas: lo que sabes con certeza, lo que aún no sabes y lo que depende de una decisión tuya. Verlo separado suele revelar el primer paso con más claridad.",
    acompanamiento:
      "En Ponte Veritas acompañamos procesos para tomar decisiones con mayor claridad y confianza, a través de conversaciones que ayudan a ordenar lo importante y avanzar con dirección.",
  },
  RELATIONSHIPS: {
    id: "RELATIONSHIPS",
    titulo: "Quieres fortalecer la manera en que te relacionas y construyes vínculos.",
    interpretacion:
      "Tus respuestas muestran que las relaciones y las conversaciones ocupan un lugar central en tu momento actual. Reconocer su valor es el punto de partida para transformarlas.",
    fortaleza: "Reconoces el valor que tienen las relaciones en tu vida.",
    oportunidad: "Aprender a conversar para comprender, no solamente para responder.",
    ejercicioTitulo: "La conversación que todavía no has tenido.",
    ejercicioDescripcion:
      "Piensa en una conversación importante que has estado posponiendo. Escribe qué te gustaría comprender de la otra persona, no solo qué quieres decir. Ese cambio de foco suele abrir la conversación.",
    acompanamiento:
      "En Ponte Veritas acompañamos a personas y familias a comunicarse mejor, transformar los conflictos y construir vínculos más conscientes y auténticos.",
  },
  GROWTH: {
    id: "GROWTH",
    titulo: "Estás explorando nuevas posibilidades para crecer y avanzar.",
    interpretacion:
      "Tus respuestas reflejan una energía orientada al crecimiento: sientes que puedes avanzar más y estás buscando hacia dónde dirigir esa intención para convertirla en acción sostenida.",
    fortaleza: "Tienes disposición para explorar y aprender.",
    oportunidad: "Convertir posibilidades en dirección y experimentación.",
    ejercicioTitulo: "El experimento de los próximos 7 días.",
    ejercicioDescripcion:
      "Elige una sola acción pequeña y concreta que puedas sostener durante siete días. El objetivo no es el resultado, sino comprobar qué aprendes sobre ti al mantener el compromiso.",
    acompanamiento:
      "En Ponte Veritas acompañamos procesos para desarrollar nuevas capacidades y convertir posibilidades en acciones concretas y sostenibles.",
  },
  LEADERSHIP: {
    id: "LEADERSHIP",
    titulo: "Estás buscando liderar, decidir y construir con mayor consciencia.",
    interpretacion:
      "Tus respuestas muestran que asumes responsabilidades que impactan a otros. Tu momento actual invita a pasar de resolver de forma reactiva a elegir conscientemente cómo lideras y construyes.",
    fortaleza: "Estás dispuesto a asumir responsabilidad sobre aquello que construyes.",
    oportunidad: "Pasar de reaccionar ante las responsabilidades a elegir conscientemente cómo liderar.",
    ejercicioTitulo: "El mapa de impacto de una decisión.",
    ejercicioDescripcion:
      "Toma una decisión reciente y dibuja a quiénes afectó: a ti, a tu equipo, a las personas cercanas. Ver el mapa completo ayuda a decidir con mayor consciencia del impacto.",
    acompanamiento:
      "En Ponte Veritas acompañamos a líderes y organizaciones a decidir con mayor consciencia, fortalecer sus equipos y construir culturas más humanas.",
  },
  REFLECTION: {
    id: "REFLECTION",
    titulo: "Necesitas un espacio para detenerte, conversar y comprender mejor tu momento.",
    interpretacion:
      "Tus respuestas reflejan varias preocupaciones que conviven al mismo tiempo. Detenerte a comprender tu momento no es un retroceso: suele ser el primer paso para distinguir qué requiere realmente tu atención.",
    fortaleza: "Reconoces que comprender tu momento puede ser el primer paso para avanzar.",
    oportunidad: "Pasar de acumular preocupaciones a distinguir qué requiere realmente tu atención.",
    ejercicioTitulo: "Vaciar, ordenar y elegir.",
    ejercicioDescripcion:
      "Escribe sin filtro todo lo que ocupa tu mente. Luego agrúpalo en dos columnas: lo que puedes influir y lo que no. Elige un solo asunto de la primera columna para atender esta semana.",
    acompanamiento:
      "En Ponte Veritas ofrecemos un espacio para conversar y comprender tu momento, recuperar perspectiva y encontrar herramientas para afrontar lo que estás viviendo.",
  },
};
