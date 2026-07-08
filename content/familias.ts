import type { AudienceContent } from "./types";

/* COPY PROVISIONAL — todo el copy de esta página es placeholder de alta calidad,
   pendiente de validación con el cliente. Las imágenes son de Unsplash (reemplazar). */

export const familiasContent: AudienceContent = {
  slug: "familias",
  variante: "persona",
  hero: {
    titulo: "Las familias también conversan, sanan y se transforman.",
    subtitulo:
      "Acompañamos a familias y parejas a fortalecer la comunicación, transformar los conflictos y construir relaciones basadas en la comprensión y el respeto.",
    imagen:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=2400&q=80",
    imagenAlt: "Familia caminando junta al atardecer",
  },
  identificacion: {
    titulo: "¿Suena familiar?",
    intro:
      "Toda familia atraviesa momentos en los que las conversaciones se vuelven difíciles — o dejan de suceder. Estos son algunos puntos de partida frecuentes.",
    items: [
      {
        titulo: "Las conversaciones terminan en conflicto",
        descripcion:
          "Los temas importantes se evitan porque cada intento de hablarlos termina en discusión o silencio.",
        icono: "MessagesSquare",
      },
      {
        titulo: "Sienten que se están distanciando",
        descripcion:
          "La rutina, las pantallas o las etapas de la vida han abierto una distancia que quieren cerrar.",
        icono: "UsersRound",
      },
      {
        titulo: "Atraviesan un cambio importante",
        descripcion:
          "Una mudanza, una pérdida, la llegada de un hijo, la adolescencia, la separación: momentos que piden nuevas formas de relacionarse.",
        icono: "ArrowRightLeft",
      },
      {
        titulo: "Quieren construir algo mejor",
        descripcion:
          "No hay una crisis: hay el deseo de ser una familia que se comunica, se apoya y crece junta.",
        icono: "Home",
      },
    ],
  },
  seccionExtra: {
    titulo: "Los desafíos relacionales que solemos acompañar",
    intro:
      "Cada familia es un mundo, pero muchos desafíos se repiten. Nombrarlos es el primer paso para transformarlos.",
    items: [
      {
        titulo: "Comunicación que hiere o que calla",
        descripcion:
          "Palabras que lastiman, silencios que distancian y malentendidos que se acumulan.",
        icono: "MessageCircleWarning",
      },
      {
        titulo: "Conflictos que se repiten",
        descripcion:
          "Discusiones cíclicas sobre los mismos temas, sin llegar a acuerdos que se sostengan.",
        icono: "RefreshCw",
      },
      {
        titulo: "Roles y expectativas en tensión",
        descripcion:
          "Lo que cada uno espera del otro no siempre se ha conversado — solo se ha supuesto.",
        icono: "Scale",
      },
      {
        titulo: "Generaciones que no se entienden",
        descripcion:
          "Padres e hijos hablando idiomas distintos, con amor de fondo pero desencuentro en la forma.",
        icono: "Users",
      },
    ],
  },
  transformacion: {
    titulo: "Lo que una familia puede construir",
    intro:
      "El objetivo no es una familia sin conflictos — es una familia que sabe conversarlos.",
    items: [
      {
        titulo: "Conversaciones que unen",
        descripcion:
          "Hablar de lo difícil sin herirse, y de lo cotidiano con más presencia.",
        icono: "MessageCircleHeart",
      },
      {
        titulo: "Acuerdos que se sostienen",
        descripcion:
          "Pactos construidos entre todos, no impuestos por uno, que resisten el día a día.",
        icono: "Handshake",
      },
      {
        titulo: "Vínculos más fuertes",
        descripcion:
          "Relaciones donde cada miembro se siente visto, escuchado y valorado.",
        icono: "Heart",
      },
      {
        titulo: "Un hogar que da base",
        descripcion:
          "Una familia que funciona como punto de apoyo para que cada uno crezca.",
        icono: "Home",
      },
    ],
  },
  acompanamiento: {
    titulo: "Cómo acompañamos a las familias",
    intro: "Un espacio neutral donde todas las voces caben.",
    parrafos: [
      "Trabajamos con la familia como sistema: no buscamos culpables, buscamos comprender las dinámicas que se han construido entre todos y que entre todos se pueden transformar.",
      "Las sesiones combinan encuentros con la familia completa, conversaciones por subgrupos (pareja, padres e hijos) y, cuando ayuda, espacios individuales. El diseño se adapta a cada familia y a cada momento.",
      "Nuestro rol es facilitar las conversaciones que en casa se han vuelto difíciles: crear las condiciones para que cada uno pueda decir lo que necesita decir y escuchar lo que necesita escuchar.",
    ],
    imagen:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80",
    imagenAlt: "Familia conversando alrededor de una mesa",
  },
  ambitos: {
    titulo: "Ámbitos de acompañamiento",
    intro: "Algunos de los territorios que recorremos con las familias.",
    items: [
      {
        titulo: "Comunicación familiar",
        descripcion: "Herramientas para hablar y escucharse mejor en el día a día.",
        icono: "MessagesSquare",
      },
      {
        titulo: "Relación de pareja",
        descripcion: "Reencontrarse, renegociar acuerdos y fortalecer el vínculo.",
        icono: "Heart",
      },
      {
        titulo: "Crianza y adolescencia",
        descripcion: "Acompañar el crecimiento de los hijos sin perder la conexión.",
        icono: "Sprout",
      },
      {
        titulo: "Transiciones familiares",
        descripcion: "Mudanzas, duelos, separaciones y nuevas configuraciones.",
        icono: "ArrowRightLeft",
      },
      {
        titulo: "Familia y empresa",
        descripcion: "Cuando los vínculos familiares y los negocios comparten mesa.",
        icono: "Briefcase",
      },
      {
        titulo: "Rituales y cultura familiar",
        descripcion: "Construir la identidad y los momentos que los unen.",
        icono: "Star",
      },
    ],
  },
  procesoTitulo: "Así es el camino que recorremos con tu familia",
  procesoIntro:
    "Las mismas seis etapas de todo proceso Ponte Veritas, adaptadas al ritmo y a las voces de tu familia.",
  testimonios: {
    titulo: "Familias que ya recorrieron este camino",
    items: [
      {
        cita: "Volvimos a cenar juntos sin teléfonos y sin miedo a los silencios. Parece pequeño, pero para nosotros fue enorme.",
        autor: "Familia Restrepo",
        contexto: "Proceso de comunicación familiar",
      },
      {
        cita: "Aprendimos que discutir no es el problema. El problema era cómo lo hacíamos. Hoy discutimos mejor y nos reconciliamos más rápido.",
        autor: "Carolina y Javier",
        contexto: "Acompañamiento de pareja",
      },
      {
        cita: "Mi hijo adolescente y yo volvimos a hablar. No de todo, todavía. Pero volvimos a hablar.",
        autor: "Patricia L.",
        contexto: "Proceso padres e hijos",
      },
    ],
  },
  faq: {
    titulo: "Preguntas frecuentes",
    items: [
      {
        pregunta: "¿Tienen que participar todos los miembros de la familia?",
        respuesta:
          "No necesariamente. Lo ideal es que participen quienes quieran hacerlo genuinamente. Muchos procesos comienzan con una parte de la familia y otros miembros se suman después, cuando ven el valor del espacio.",
      },
      {
        pregunta: "¿Esto es terapia familiar?",
        respuesta:
          "No. Es un proceso de acompañamiento y facilitación de conversaciones orientado a fortalecer vínculos y construir acuerdos. Cuando identificamos que una situación requiere apoyo terapéutico o clínico, lo decimos con claridad y ayudamos a encontrar el profesional adecuado.",
      },
      {
        pregunta: "¿Qué pasa si hay mucho conflicto entre nosotros?",
        respuesta:
          "El conflicto no es un impedimento: es, muchas veces, la razón para empezar. Nuestro rol es crear un espacio seguro y neutral donde el conflicto se pueda conversar sin escalarlo.",
      },
      {
        pregunta: "¿Los niños y adolescentes participan en las sesiones?",
        respuesta:
          "Depende del proceso y de su edad. Cuando participan, adaptamos el formato para que su voz tenga un lugar real y se sientan cómodos. Siempre lo definimos junto con los padres.",
      },
      {
        pregunta: "¿Cuánto dura un proceso familiar?",
        respuesta:
          "La mayoría de los procesos familiares se desarrollan entre 6 y 10 encuentros, con espacio entre sesiones para que los acuerdos se prueben en la vida real. El alcance lo definimos juntos en la conversación inicial.",
      },
    ],
  },
  ctaTitulo: "La conversación que su familia necesita puede comenzar hoy.",
  ctaTexto:
    "No esperen a que la distancia crezca. Una conversación a tiempo puede transformar la historia de una familia.",
  ctaBoton: "Comenzar una conversación",
};
