export interface Razon {
  titulo: string;
  descripcion: string;
  icono: string; // nombre de icono lucide
  imagen: string;
  imagenAlt: string;
  destacada?: boolean; // tarjeta 5: fondo dorado tenue
}

export interface Camino {
  titulo: string;
  descripcion: string;
  href: string;
  cta: string;
  icono: string;
  imagen: string;
  imagenAlt: string;
}

export interface EtapaProceso {
  titulo: string;
  descripcion: string;
  icono: string;
}

export interface ElementoImpacto {
  titulo: string;
  descripcion: string;
  icono: string;
}

export type CategoriaRecurso = "Personas" | "Familias" | "Organizaciones";
export type TipoRecurso = "Artículo" | "Video" | "Podcast" | "Guía";

export interface Recurso {
  slug: string;
  titulo: string;
  extracto: string;
  categoria: CategoriaRecurso;
  tipo: TipoRecurso;
  imagen: string;
  imagenAlt: string;
  fecha: string; // ISO
  cuerpo: string[]; // párrafos
  destacado?: boolean;
}

export interface PreguntaFrecuente {
  pregunta: string;
  respuesta: string;
}

export interface Testimonio {
  cita: string;
  autor: string;
  contexto: string;
}

export interface Ambito {
  titulo: string;
  descripcion: string;
  icono: string;
}

/** Contenido para el template compartido AudiencePage (Personas / Familias / Organizaciones) */
export interface AudienceContent {
  slug: string;
  variante: "persona" | "b2b";
  hero: {
    titulo: string;
    subtitulo: string;
    imagen: string;
    imagenAlt: string;
  };
  identificacion: {
    titulo: string;
    intro: string;
    items: Ambito[];
  };
  /** Solo Familias: desafíos relacionales. Organizaciones lo usa como "Resultados buscados". */
  seccionExtra?: {
    titulo: string;
    intro: string;
    items: Ambito[];
  };
  transformacion: {
    titulo: string;
    intro: string;
    items: Ambito[];
  };
  acompanamiento: {
    titulo: string;
    intro: string;
    parrafos: string[];
    imagen: string;
    imagenAlt: string;
  };
  ambitos: {
    titulo: string;
    intro: string;
    items: Ambito[];
  };
  /** Solo variante b2b: soluciones y programas */
  soluciones?: {
    titulo: string;
    intro: string;
    items: Ambito[];
  };
  /** Solo variante b2b: casos de éxito */
  casos?: {
    titulo: string;
    intro: string;
    items: { titulo: string; contexto: string; resultado: string }[];
  };
  procesoTitulo: string;
  procesoIntro: string;
  testimonios: {
    titulo: string;
    items: Testimonio[];
  };
  faq: {
    titulo: string;
    items: PreguntaFrecuente[];
  };
  ctaTitulo: string;
  ctaTexto: string;
  ctaBoton: string;
}
