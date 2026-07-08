import type { AudienceContent } from "./types";

/* COPY PROVISIONAL — todo el copy de esta página es placeholder de alta calidad,
   pendiente de validación con el cliente. Las imágenes son de Unsplash (reemplazar). */

export const personasContent: AudienceContent = {
  slug: "personas",
  variante: "persona",
  hero: {
    titulo: "Un espacio para ti, para tu claridad y para tu camino.",
    subtitulo:
      "Acompañamos a personas que quieren comprenderse mejor, tomar decisiones con sentido y construir una vida más consciente y alineada con su propósito.",
    imagen:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2400&q=80",
    imagenAlt: "Persona contemplando un paisaje de montañas al atardecer",
  },
  identificacion: {
    titulo: "¿Te reconoces en alguno de estos momentos?",
    intro:
      "Cada proceso comienza en un lugar distinto. Estos son algunos de los momentos desde los que las personas llegan a Ponte Veritas.",
    items: [
      {
        titulo: "Sientes que es momento de un cambio",
        descripcion:
          "Algo en tu vida pide moverse — un trabajo, una relación, una etapa — y quieres claridad antes de decidir.",
        icono: "Sprout",
      },
      {
        titulo: "Buscas reconectar contigo",
        descripcion:
          "Has estado tan ocupado respondiendo a todo lo demás que necesitas un espacio para escucharte.",
        icono: "Compass",
      },
      {
        titulo: "Quieres crecer con intención",
        descripcion:
          "No hay una crisis: hay un deseo genuino de desarrollarte, conocerte mejor y ampliar tus posibilidades.",
        icono: "Star",
      },
      {
        titulo: "Cargas con decisiones difíciles",
        descripcion:
          "Tienes frente a ti una decisión importante y quieres tomarla desde la claridad, no desde el miedo.",
        icono: "Scale",
      },
    ],
  },
  transformacion: {
    titulo: "Lo que puedes construir en este proceso",
    intro:
      "Un acompañamiento personal no te dice qué hacer: te ayuda a ver con más claridad para que tus decisiones sean tuyas.",
    items: [
      {
        titulo: "Claridad sobre tu momento",
        descripcion:
          "Comprender qué estás viviendo, qué te mueve y qué quieres conservar o transformar.",
        icono: "Lightbulb",
      },
      {
        titulo: "Decisiones con sentido",
        descripcion:
          "Elegir desde tus valores y tu propósito, con criterios propios y confianza en tu criterio.",
        icono: "Signpost",
      },
      {
        titulo: "Bienestar sostenible",
        descripcion:
          "Construir hábitos, límites y ritmos de vida que cuiden tu energía y tu equilibrio.",
        icono: "Leaf",
      },
      {
        titulo: "Una vida más coherente",
        descripcion:
          "Alinear lo que piensas, lo que sientes y lo que haces — en tu trabajo, tus vínculos y tu día a día.",
        icono: "CircleCheckBig",
      },
    ],
  },
  acompanamiento: {
    titulo: "Cómo te acompañamos",
    intro: "Conversaciones que abren perspectivas, no fórmulas prefabricadas.",
    parrafos: [
      "Trabajamos a través de conversaciones significativas: encuentros uno a uno, presenciales o virtuales, donde tu historia es el punto de partida. No llegamos con respuestas hechas; llegamos con preguntas que ayudan a mirar distinto.",
      "Cada proceso se diseña contigo: la frecuencia, la profundidad y el enfoque se ajustan a tu momento y a lo que quieres transformar. Puede durar unas pocas sesiones o acompañarte durante una etapa completa de tu vida.",
      "Lo que sí es constante es el espacio: confidencial, sin juicios y con la profundidad necesaria para que las conversaciones se conviertan en decisiones y las decisiones en acción.",
    ],
    imagen:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
    imagenAlt: "Conversación cercana entre dos personas en un espacio cálido",
  },
  ambitos: {
    titulo: "Ámbitos de acompañamiento",
    intro: "Algunos de los territorios que solemos recorrer juntos.",
    items: [
      {
        titulo: "Propósito y sentido de vida",
        descripcion: "Descubrir qué te mueve y cómo llevarlo a tu vida cotidiana.",
        icono: "Compass",
      },
      {
        titulo: "Transiciones vitales",
        descripcion: "Cambios de carrera, de ciudad, de etapa o de rol.",
        icono: "ArrowRightLeft",
      },
      {
        titulo: "Bienestar y equilibrio",
        descripcion: "Gestionar el estrés, cuidar tu energía y poner límites sanos.",
        icono: "Leaf",
      },
      {
        titulo: "Desarrollo personal y profesional",
        descripcion: "Fortalecer capacidades, confianza y presencia.",
        icono: "TrendingUp",
      },
      {
        titulo: "Relaciones y vínculos",
        descripcion: "Comunicarte mejor y construir relaciones más conscientes.",
        icono: "Heart",
      },
      {
        titulo: "Toma de decisiones",
        descripcion: "Decidir con claridad en momentos que importan.",
        icono: "Scale",
      },
    ],
  },
  procesoTitulo: "Así es el camino que recorremos contigo",
  procesoIntro:
    "Seis etapas que dan estructura al proceso sin quitarle humanidad. Cada una avanza a tu ritmo.",
  testimonios: {
    titulo: "Historias de quienes ya comenzaron su conversación",
    items: [
      {
        cita: "Llegué buscando una respuesta y encontré algo mejor: la capacidad de hacerme mejores preguntas. Hoy tomo decisiones con una calma que no conocía.",
        autor: "Mariana G.",
        contexto: "Proceso de transición profesional",
      },
      {
        cita: "No era terapia, no era consultoría. Era una conversación honesta que me ayudó a ver lo que yo solo no estaba viendo.",
        autor: "Andrés R.",
        contexto: "Acompañamiento personal",
      },
      {
        cita: "Aprendí a escucharme antes de responderle al mundo. Eso cambió mi manera de trabajar, de relacionarme y de descansar.",
        autor: "Laura M.",
        contexto: "Proceso de bienestar y equilibrio",
      },
    ],
  },
  faq: {
    titulo: "Preguntas frecuentes",
    items: [
      {
        pregunta: "¿Esto es terapia psicológica?",
        respuesta:
          "No. El acompañamiento de Ponte Veritas es un proceso de coaching y conversaciones significativas orientado al crecimiento, la claridad y la acción. No sustituye un proceso terapéutico; cuando identificamos que un tema requiere apoyo clínico, lo conversamos contigo y te ayudamos a encontrar el profesional adecuado.",
      },
      {
        pregunta: "¿Cuánto dura un proceso?",
        respuesta:
          "Depende de lo que quieras trabajar. Algunos procesos se completan en 4 a 6 sesiones; otros acompañan una etapa más larga. En la conversación inicial definimos juntos un alcance realista, y siempre puedes ajustar el ritmo.",
      },
      {
        pregunta: "¿Las sesiones son presenciales o virtuales?",
        respuesta:
          "Ambas. Trabajamos presencialmente en Bogotá y de manera virtual con personas en cualquier lugar. La profundidad de la conversación no depende del formato.",
      },
      {
        pregunta: "¿Qué pasa en la primera conversación?",
        respuesta:
          "Es un encuentro sin costo ni compromiso donde escuchamos tu historia, comprendemos tu momento y evaluamos juntos si este acompañamiento es lo que necesitas. Si no lo es, te lo decimos con honestidad.",
      },
      {
        pregunta: "¿Todo lo que converse es confidencial?",
        respuesta:
          "Sí, absolutamente. La confidencialidad es la base del espacio que construimos. Nada de lo que compartas sale de la conversación.",
      },
    ],
  },
  ctaTitulo: "Tu conversación puede comenzar hoy.",
  ctaTexto:
    "No necesitas tenerlo todo claro para empezar. De hecho, empezar es la manera de ganar claridad.",
  ctaBoton: "Comenzar una conversación",
};
