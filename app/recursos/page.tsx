import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import Hero from "@/components/Hero";
import ResourcesExplorer from "@/components/ResourcesExplorer";

export const metadata: Metadata = {
  title: "Recursos",
  description:
    "Artículos, videos, podcast y guías para inspirar tu transformación: claridad personal, vínculos familiares y liderazgo consciente.",
  openGraph: {
    title: "Recursos · Ponte Veritas",
    description: "Recursos para inspirar tu transformación.",
  },
};

export default async function RecursosPage({
  searchParams,
}: {
  searchParams: Promise<{ categoria?: string; tipo?: string }>;
}) {
  const { categoria, tipo } = await searchParams;

  return (
    <>
      <Hero
        variant="short"
        titulo="Recursos para inspirar tu transformación."
        subtitulo="Artículos, videos, podcast y guías sobre claridad personal, vínculos que unen y liderazgos más humanos."
        imagen="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2400&q=80"
        imagenAlt="Paisaje sereno de lago y montañas al atardecer"
      />
      <section className="bg-crema py-20">
        <ResourcesExplorer initialCategoria={categoria} initialTipo={tipo} />
      </section>
      <CTASection
        titulo="¿Prefieres conversarlo en persona?"
        texto="Los recursos inspiran, pero la transformación ocurre en la conversación. Agenda la tuya."
      />
    </>
  );
}
