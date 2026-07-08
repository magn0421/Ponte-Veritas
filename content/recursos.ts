import type { CategoriaRecurso, Recurso, TipoRecurso } from "./types";

/* COPY PROVISIONAL — recursos placeholder para poblar el hub.
   Reemplazar por contenido real al conectar el CMS. */

export const categorias: CategoriaRecurso[] = ["Personas", "Familias", "Organizaciones"];
export const tipos: TipoRecurso[] = ["Artículo", "Video", "Podcast", "Guía"];

export const recursos: Recurso[] = [
  {
    slug: "decisiones-desde-la-claridad",
    titulo: "¿Cómo tomar decisiones desde la claridad y no desde el miedo?",
    extracto:
      "El miedo decide rápido y estrecho; la claridad decide despacio y amplio. Claves para reconocer desde dónde estás eligiendo.",
    categoria: "Personas",
    tipo: "Artículo",
    imagen:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=900&q=80",
    imagenAlt: "Persona frente a un paisaje de montañas al amanecer",
    fecha: "2026-05-12",
    destacado: true,
    cuerpo: [
      "Hay decisiones que tomamos y decisiones que nos toman. Las primeras nacen de la claridad: sabemos qué valoramos, qué queremos construir y qué estamos dispuestos a soltar. Las segundas nacen del miedo: elegimos lo que menos duele hoy, aunque hipoteque lo que más importa mañana.",
      "El primer paso para decidir desde la claridad es reconocer la voz del miedo. El miedo habla en urgente: 'tienes que decidir ya'. Habla en catástrofe: 'si eliges mal, todo se derrumba'. Y habla en escasez: 'esta es tu única oportunidad'. Cuando notes ese tono en tu diálogo interno, detente: probablemente no estás decidiendo, estás huyendo.",
      "La claridad, en cambio, necesita espacio. Necesita la pregunta '¿qué quiero construir?' antes que '¿qué quiero evitar?'. Necesita conversar la decisión con alguien que escuche sin agenda. Y necesita tiempo: no el tiempo de la postergación, sino el de la maduración.",
      "Una práctica sencilla: antes de una decisión importante, escribe dos versiones de tu razonamiento. Una que empiece con 'tengo miedo de que...' y otra que empiece con 'quiero que...'. Leerlas juntas suele revelar desde dónde estás eligiendo — y esa conciencia, por sí sola, ya cambia la decisión.",
    ],
  },
  {
    slug: "comunicacion-vinculos-familiares",
    titulo: "Claves para mejorar la comunicación y fortalecer los vínculos familiares",
    extracto:
      "No se trata de hablar más, sino de hablar distinto. Prácticas concretas para que las conversaciones en casa unan en lugar de distanciar.",
    categoria: "Familias",
    tipo: "Artículo",
    imagen:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=900&q=80",
    imagenAlt: "Familia conversando alrededor de una mesa",
    fecha: "2026-05-05",
    destacado: true,
    cuerpo: [
      "En la mayoría de las familias no falta amor: faltan conversaciones. O más precisamente, sobran conversaciones operativas — quién recoge a quién, qué falta del mercado — y faltan conversaciones que conecten: cómo estás, qué te preocupa, qué necesitas de mí.",
      "Primera clave: crear momentos sin agenda. La conexión no ocurre en el tiempo que sobra, sino en el tiempo que se protege. Una cena sin pantallas, una caminata, un café de sábado. El contexto invita a la conversación que el apuro impide.",
      "Segunda clave: escuchar sin arreglar. Cuando alguien de la familia comparte un problema, el impulso es dar soluciones. Pero la mayoría de las veces, lo que la otra persona necesita primero es sentirse escuchada. Prueba con '¿quieres que te ayude a pensarlo o solo necesitas contarlo?'.",
      "Tercera clave: reparar rápido. Todas las familias se hieren; las que se mantienen unidas son las que reparan. Una disculpa a tiempo, sin 'peros', vale más que mil explicaciones. Y enseña, a quienes están creciendo, que el vínculo importa más que la razón.",
    ],
  },
  {
    slug: "liderazgo-consciente-equipos",
    titulo: "Liderazgo consciente: el impacto que transforma equipos y resultados",
    extracto:
      "Un líder consciente no es un líder blando. Es un líder que sabe lo que genera — y elige generarlo a propósito.",
    categoria: "Organizaciones",
    tipo: "Artículo",
    imagen:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    imagenAlt: "Líder facilitando una reunión de equipo",
    fecha: "2026-04-28",
    destacado: true,
    cuerpo: [
      "Todo líder genera un clima a su alrededor: de confianza o de cautela, de posibilidad o de defensa. La diferencia entre un líder consciente y uno inconsciente no es el estilo — es saber qué clima está generando y elegirlo a propósito.",
      "El liderazgo consciente empieza por el autoconocimiento: cómo reacciono bajo presión, qué conversaciones evito, qué necesito controlar. Sin esa conciencia, el líder repite patrones; con ella, puede elegir respuestas.",
      "Sigue con la calidad de las conversaciones. Los equipos no se transforman con discursos sino con conversaciones cotidianas: el feedback que se da o se calla, el desacuerdo que se conversa o se entierra, el reconocimiento que se expresa o se supone.",
      "Y se completa con coherencia: el equipo no escucha lo que el líder dice; observa lo que el líder hace. Cuando el comportamiento contradice el discurso, el equipo cree en el comportamiento. La cultura de un equipo es la conducta de su líder, repetida.",
    ],
  },
  {
    slug: "guia-conversaciones-dificiles",
    titulo: "Guía práctica: cómo prepararte para una conversación difícil",
    extracto:
      "Una guía paso a paso para entrar a esa conversación que llevas tiempo postergando — con claridad, respeto y propósito.",
    categoria: "Personas",
    tipo: "Guía",
    imagen:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80",
    imagenAlt: "Dos personas en una conversación franca",
    fecha: "2026-04-14",
    cuerpo: [
      "Las conversaciones difíciles no se improvisan: se preparan. No para controlar el resultado, sino para llegar con claridad sobre lo que quieres decir y apertura hacia lo que vas a escuchar.",
      "Paso 1 — Clarifica tu propósito. ¿Qué quieres que sea distinto después de esta conversación? Si tu respuesta honesta es 'que el otro admita que se equivocó', todavía no estás listo. Un buen propósito une: 'quiero que volvamos a confiar', 'quiero que trabajemos mejor juntos'.",
      "Paso 2 — Separa hechos de interpretaciones. 'Llegaste tarde tres veces esta semana' es un hecho. 'No te importa este proyecto' es una interpretación. Las conversaciones se dañan cuando presentamos interpretaciones como hechos.",
      "Paso 3 — Abre con honestidad y cuidado. Una apertura posible: 'Quiero hablar contigo de algo que me importa, y me importa también cómo lo recibas'. Nombrar el cuidado baja las defensas.",
      "Paso 4 — Escucha el doble de lo que hablas. La conversación difícil no es un monólogo bien preparado: es un intercambio. Lo que descubras escuchando puede cambiar — y mejorar — lo que ibas a decir.",
    ],
  },
  {
    slug: "video-que-es-coaching",
    titulo: "¿Qué es (y qué no es) un proceso de coaching?",
    extracto:
      "En este video despejamos los mitos más comunes sobre el coaching y explicamos cómo es un proceso serio de acompañamiento.",
    categoria: "Personas",
    tipo: "Video",
    imagen:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    imagenAlt: "Persona caminando hacia el sol en un paisaje dorado",
    fecha: "2026-03-30",
    cuerpo: [
      "El coaching se ha vuelto una palabra tan usada que casi cualquier cosa cabe dentro. En este video explicamos qué distingue a un proceso serio de acompañamiento: un encuadre claro, un coach formado, confidencialidad y un método centrado en tus objetivos — no en las recetas de otro.",
      "También hablamos de lo que el coaching no es: no es terapia, no es consultoría, no es mentoría y definitivamente no es motivación de tarima. Saber la diferencia te protege y te ayuda a elegir el acompañamiento que tu momento realmente necesita.",
      "[VIDEO PLACEHOLDER — incrustar video real al publicar]",
    ],
  },
  {
    slug: "podcast-familia-que-conversa",
    titulo: "Podcast · La familia que conversa: episodio con especialista invitada",
    extracto:
      "Una conversación sobre por qué los conflictos familiares se repiten y cómo romper los ciclos que nos distancian.",
    categoria: "Familias",
    tipo: "Podcast",
    imagen:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=80",
    imagenAlt: "Manos unidas en señal de apoyo",
    fecha: "2026-03-18",
    cuerpo: [
      "En este episodio conversamos sobre los ciclos de conflicto familiar: por qué las mismas discusiones vuelven una y otra vez, qué papel juega cada miembro en sostenerlas y qué se necesita — de verdad — para romper el patrón.",
      "Hablamos también del perdón como proceso y no como evento, de los silencios que las familias heredan y de cómo una sola persona que cambia su manera de conversar puede empezar a transformar todo el sistema.",
      "[AUDIO PLACEHOLDER — incrustar episodio real al publicar]",
    ],
  },
  {
    slug: "guia-feedback-equipos",
    titulo: "Guía: cómo instalar una cultura de feedback en tu equipo",
    extracto:
      "El feedback no es un formulario anual: es una conversación continua. Guía práctica para líderes que quieren empezar.",
    categoria: "Organizaciones",
    tipo: "Guía",
    imagen:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
    imagenAlt: "Equipo colaborando en una mesa de trabajo",
    fecha: "2026-02-24",
    cuerpo: [
      "La mayoría de los equipos no tienen un problema de talento: tienen un problema de información. Las personas no saben cómo lo están haciendo porque nadie se los dice a tiempo, con claridad y con respeto.",
      "Instalar una cultura de feedback empieza por el líder: pide feedback antes de darlo. Cuando el equipo ve que su líder recibe observaciones sin defenderse, aprende que aquí es seguro decir la verdad.",
      "Sigue con la frecuencia: el feedback útil es cercano al hecho. Un comentario de dos minutos hoy vale más que una evaluación de dos horas en diciembre.",
      "Y se sostiene con el método: describe el hecho, comparte el impacto, pregunta la perspectiva del otro y acuerden el siguiente paso. Cuatro movimientos, una conversación — repetida hasta que se vuelva cultura.",
    ],
  },
  {
    slug: "video-liderar-en-incertidumbre",
    titulo: "Video · Liderar en tiempos de incertidumbre",
    extracto:
      "Qué necesitan los equipos de sus líderes cuando el contexto es incierto — y qué conversaciones no pueden faltar.",
    categoria: "Organizaciones",
    tipo: "Video",
    imagen:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    imagenAlt: "Equipo profesional en conversación junto a un ventanal",
    fecha: "2026-02-10",
    cuerpo: [
      "En contextos inciertos, los equipos no esperan que el líder tenga todas las respuestas: esperan que tenga la honestidad de decir lo que sabe, lo que no sabe y lo que está haciendo para averiguarlo.",
      "En este video exploramos las tres conversaciones que un líder no puede postergar cuando el contexto se mueve: la conversación de realidad, la conversación de prioridades y la conversación de cuidado.",
      "[VIDEO PLACEHOLDER — incrustar video real al publicar]",
    ],
  },
  {
    slug: "habitos-bienestar-integral",
    titulo: "Bienestar integral: pequeños hábitos que sostienen grandes cambios",
    extracto:
      "La transformación no vive en los grandes gestos sino en los ritmos cotidianos. Hábitos sencillos con efecto profundo.",
    categoria: "Personas",
    tipo: "Artículo",
    imagen:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=80",
    imagenAlt: "Persona contemplando el horizonte en la montaña",
    fecha: "2026-01-27",
    cuerpo: [
      "Solemos imaginar la transformación personal como un gran salto: la renuncia, la mudanza, la decisión dramática. Pero la mayoría de las transformaciones sostenibles se parecen menos a un salto y más a un ritmo: pequeñas prácticas repetidas que reorganizan la vida.",
      "El primer hábito es el más contracultural: detenerse. Diez minutos al día sin pantalla, sin tarea y sin culpa. La claridad no aparece en el ruido; aparece en las pausas.",
      "El segundo es la conversación semanal contigo: ¿qué me dio energía esta semana? ¿qué me la quitó? ¿qué quiero repetir y qué quiero cambiar? Quince minutos de honestidad que evitan meses de piloto automático.",
      "El tercero es cuidar un vínculo a la vez. El bienestar no es solo interior: vivimos en relaciones. Una conversación pendiente, una gratitud expresada, una visita postergada. Cada semana, una.",
    ],
  },
];

export function getRecursoBySlug(slug: string): Recurso | undefined {
  return recursos.find((r) => r.slug === slug);
}

export function getRecursosDestacados(): Recurso[] {
  return recursos.filter((r) => r.destacado);
}
