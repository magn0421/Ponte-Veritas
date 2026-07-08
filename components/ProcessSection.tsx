import SectionHeading from "./SectionHeading";
import TransformationPath from "./TransformationPath";

/**
 * Sección "Proceso" reutilizable: título + camino de transformación de 6 etapas.
 * Se usa en Home, Personas, Familias y Organizaciones.
 */
export default function ProcessSection({
  titulo,
  intro,
}: {
  titulo: string;
  intro?: string;
}) {
  return (
    <section className="bg-crema py-24" aria-label={titulo}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading titulo={titulo} intro={intro} className="mb-16" />
        <TransformationPath />
      </div>
    </section>
  );
}
