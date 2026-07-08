import type { EtapaProceso } from "./types";

/** Las 6 etapas del camino de transformación (se reutiliza en Home, Personas, Familias y Organizaciones) */
export const etapasProceso: EtapaProceso[] = [
  {
    titulo: "Conversación inicial",
    descripcion: "Escuchamos tu historia y comprendemos tu momento actual.",
    icono: "MessageCircle",
  },
  {
    titulo: "Comprender tu momento",
    descripcion: "Exploramos lo que te está sucediendo desde nuevas perspectivas.",
    icono: "Search",
  },
  {
    titulo: "Definir el objetivo del proceso",
    descripcion: "Clarificamos lo que quieres transformar y los resultados que deseas alcanzar.",
    icono: "Target",
  },
  {
    titulo: "Explorar nuevas perspectivas",
    descripcion: "Abrimos conversaciones que amplían tu mirada y reconocen tus recursos.",
    icono: "Compass",
  },
  {
    titulo: "Convertir descubrimientos en acción",
    descripcion: "Diseñamos acciones concretas y coherentes con la vida que quieres construir.",
    icono: "Send",
  },
  {
    titulo: "Evaluar el camino recorrido",
    descripcion: "Revisamos avances, aprendizajes y próximos pasos para seguir creciendo.",
    icono: "CheckCircle2",
  },
];
