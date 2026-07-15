import type { Camino, ElementoImpacto, Razon } from "./types";

/* Imágenes placeholder de Unsplash — REEMPLAZAR por fotografía propia de la marca */

export const hero = {
  titulo: "Toda transformación comienza con una conversación.",
  subtitulo:
    "Acompañamos a personas, familias y organizaciones a construir nuevas posibilidades, fortalecer sus relaciones y transformar la manera en que viven, se relacionan y lideran.",
  ctaPrincipal: { label: "Comencemos una conversación", href: "/agenda" },
  ctaSecundario: { label: "Descubre cómo podemos acompañarte", href: "#razones" },
  imagen: "/hero.png",
  imagenAlt:
    "Persona cruzando un puente de piedra sobre un río al atardecer, con el sol asomando bajo el arco",
};

export const identificacion = {
  titulo: "Cada persona llega por una razón diferente.",
  intro:
    "Algunas buscan respuestas. Otras quieren crecer, fortalecer sus relaciones, transformar la manera en que lideran o simplemente encontrar un espacio para conversar.",
  cierre: "Sea cual sea tu punto de partida, una conversación puede abrir nuevas posibilidades.",
};

export const razones: Razon[] = [
  {
    titulo: "Estás atravesando un momento de cambio",
    descripcion:
      "Buscas claridad para comprender lo que estás viviendo y decidir cómo avanzar.",
    icono: "Sprout",
    imagen:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
    imagenAlt: "Persona contemplando montañas al amanecer",
  },
  {
    titulo: "Quieres transformar tus relaciones",
    descripcion:
      "Deseas comunicarte mejor, fortalecer vínculos y construir relaciones más conscientes.",
    icono: "Heart",
    imagen:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
    imagenAlt: "Dos personas conversando y sonriendo",
  },
  {
    titulo: "Quieres crecer y descubrir nuevas posibilidades",
    descripcion:
      "Deseas conocerte mejor, desarrollar nuevas capacidades o explorar nuevas formas de vivir, relacionarte y liderar.",
    icono: "Star",
    imagen:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
    imagenAlt: "Camino entre árboles hacia la luz",
  },
  {
    titulo: "Quieres generar un cambio en tu equipo u organización",
    descripcion:
      "Buscas fortalecer el liderazgo, mejorar las conversaciones y construir una cultura más humana y consciente.",
    icono: "Users",
    imagen:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    imagenAlt: "Equipo de trabajo reunido alrededor de una mesa",
  },
  {
    titulo: "Simplemente quieres comenzar una conversación",
    descripcion:
      "No necesitas tener un problema definido ni saber exactamente por dónde empezar. A veces, una conversación puede ser el primer paso para descubrir nuevas posibilidades.",
    icono: "MessageCircle",
    imagen:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",
    imagenAlt: "Espacio cálido y tranquilo para conversar",
    destacada: true,
  },
];

export const descubreMomento = {
  eyebrow: "Una pausa para mirar dónde estás",
  // El título se compone en la vista: "momento" va resaltado en dorado.
  tituloPre: "Descubre tu",
  tituloResaltado: "momento",
  tituloPost: "actual.",
  parrafos: [
    "Toda transformación comienza comprendiendo el momento que estás viviendo.",
    "Este espacio de reflexión puede ayudarte a descubrir nuevas perspectivas y reconocer posibilidades que quizá hoy aún no ves.",
    "También podrás descubrir cómo un proceso de coaching puede ayudarte a desarrollar nuevas perspectivas y herramientas para afrontar momentos de presión, cambios y desafíos personales o profesionales.",
  ],
  datos: [
    { icono: "FileText", titulo: "12 preguntas", detalle: "Reflexiona sobre tu presente" },
    { icono: "Clock", titulo: "2–3 minutos", detalle: "Un espacio breve para ti" },
    { icono: "UserRound", titulo: "Resultado personalizado", detalle: "Una interpretación de tu momento actual" },
  ],
  cta: { label: "Comenzar mi conversación", href: "/descubre-tu-momento" },
  fraseFinal:
    "Cada proceso comienza con una conversación y una decisión de mirar el presente con una nueva perspectiva.",
  aviso:
    "Cuestionario informativo y de reflexión personal. No constituye una evaluación psicológica ni un diagnóstico.",
};

export const queEs = {
  titulo: "¿Qué es Ponte Veritas?",
  subtitulo:
    "Un espacio para transformar la manera en que vivimos, nos relacionamos y lideramos.",
  descripcion:
    "Ponte Veritas acompaña a personas, familias y organizaciones en procesos de transformación humana mediante conversaciones significativas, coaching, formación y acompañamiento que ayudan a generar conciencia, descubrir nuevas perspectivas y convertirlas en posibilidades de acción.",
  cta: { label: "Conoce nuestra esencia", href: "/nuestra-esencia" },
  imagen:
    "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1200&q=80",
  imagenAlt: "Sendero de piedra en un bosque dorado al atardecer",
};

export const tresCaminos = {
  titulo: "Tres caminos. Un mismo propósito: transformar.",
  caminos: [
    {
      titulo: "Personas",
      descripcion:
        "Encuentra claridad, fortalece tu bienestar y construye una vida más consciente y alineada con tu propósito.",
      href: "/personas",
      cta: "Explorar Personas",
      icono: "User",
      imagen:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=80",
      imagenAlt: "Mujer contemplando el horizonte al atardecer",
    },
    {
      titulo: "Familias",
      descripcion:
        "Fortalece la comunicación, transforma los conflictos y construye relaciones basadas en la comprensión y el respeto.",
      href: "/familias",
      cta: "Explorar Familias",
      icono: "Heart",
      imagen:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=80",
      imagenAlt: "Manos unidas en señal de apoyo",
    },
    {
      titulo: "Organizaciones",
      descripcion:
        "Desarrolla líderes conscientes, fortalece los equipos y construye culturas capaces de evolucionar y trascender.",
      href: "/organizaciones",
      cta: "Explorar Organizaciones",
      icono: "Briefcase",
      imagen:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
      imagenAlt: "Equipo profesional conversando frente a un ventanal al atardecer",
    },
  ] satisfies Camino[],
};

export const procesoHome = {
  titulo: "Un proceso que te acompaña en cada paso.",
};

export const impacto = {
  titulo:
    "El impacto se hace visible en lo que vives, en cómo te relacionas y en lo que construyes.",
  elementos: [
    {
      titulo: "Mayor claridad",
      descripcion: "Tomas decisiones más conscientes y alineadas con tus valores.",
      icono: "Lightbulb",
    },
    {
      titulo: "Relaciones más conscientes",
      descripcion: "Te comunicas mejor y construyes vínculos más sanos y auténticos.",
      icono: "Users",
    },
    {
      titulo: "Liderazgos más humanos",
      descripcion: "Equipos comprometidos, culturas positivas y resultados con propósito.",
      icono: "Flag",
    },
    {
      titulo: "Bienestar integral",
      descripcion: "Vives con más equilibrio, sentido y conexión con tu propósito.",
      icono: "Leaf",
    },
    {
      titulo: "Propósito en acción",
      descripcion: "Conviertes tus ideas y valores en acciones que generan impacto real.",
      icono: "Star",
    },
  ] satisfies ElementoImpacto[],
};

export const video = {
  titulo: "Conversaciones que pueden cambiar una vida.",
  texto: "Conoce nuestra historia y la razón por la que hacemos lo que hacemos.",
  cta: "Ver nuestra historia",
  miniatura:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
  miniaturaAlt: "Persona caminando hacia el sol en un paisaje dorado",
};

export const recursosHome = {
  titulo: "Recursos para inspirar tu transformación.",
  cta: "Explorar todos los recursos",
};

export const ctaFinal = {
  titulo: "¿Listo para comenzar tu conversación?",
  texto:
    "Cuidarnos, a nosotros y a lo que es importante para nosotros, es el primer paso para transformar nuestras vidas y nuestro entorno.",
  botonPrincipal: { label: "Comencemos una conversación", href: "/agenda" },
};
