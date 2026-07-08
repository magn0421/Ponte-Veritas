import AnimateOnScroll from "./AnimateOnScroll";

/** Encabezado de sección: título serif centrado + intro opcional, con fade up */
export default function SectionHeading({
  titulo,
  intro,
  tono = "claro",
  className = "",
}: {
  titulo: string;
  intro?: string;
  /** claro = sobre fondo crema · oscuro = sobre fondo negro */
  tono?: "claro" | "oscuro";
  className?: string;
}) {
  return (
    <AnimateOnScroll direction="up" className={`mx-auto max-w-3xl text-center ${className}`}>
      <h2
        className={`font-serif text-3xl leading-snug sm:text-4xl ${
          tono === "oscuro" ? "text-texto-claro" : "text-texto-oscuro"
        }`}
      >
        {titulo}
      </h2>
      {intro && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            tono === "oscuro" ? "text-texto-claro/70" : "text-texto-gris"
          }`}
        >
          {intro}
        </p>
      )}
    </AnimateOnScroll>
  );
}
