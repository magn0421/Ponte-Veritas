import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CTASection from "@/components/CTASection";
import ResourceCard from "@/components/cards/ResourceCard";
import { getRecursoBySlug, recursos } from "@/content/recursos";

export function generateStaticParams() {
  return recursos.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const recurso = getRecursoBySlug(slug);
  if (!recurso) return {};
  return {
    title: recurso.titulo,
    description: recurso.extracto,
    openGraph: {
      title: recurso.titulo,
      description: recurso.extracto,
      images: [recurso.imagen],
    },
  };
}

/** Template simple de detalle de artículo / guía */
export default async function RecursoDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const recurso = getRecursoBySlug(slug);
  if (!recurso) notFound();

  const relacionados = recursos
    .filter((r) => r.slug !== recurso.slug && r.categoria === recurso.categoria)
    .slice(0, 3);

  const fecha = new Date(`${recurso.fecha}T12:00:00`).toLocaleDateString("es-CO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      {/* Cabecera oscura del artículo */}
      <section className="bg-negro-base pt-32 pb-14">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <Link
            href="/recursos"
            className="group inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-dorado"
          >
            <ArrowLeft
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
              aria-hidden="true"
            />
            Volver a recursos
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-[0.65rem] font-bold tracking-[0.18em] uppercase">
            <span className="rounded bg-dorado px-2.5 py-1 text-texto-oscuro">
              {recurso.categoria}
            </span>
            <span className="text-texto-claro/60">{recurso.tipo}</span>
            <span className="text-texto-claro/40">·</span>
            <time dateTime={recurso.fecha} className="text-texto-claro/60 normal-case">
              {fecha}
            </time>
          </div>
          <h1 className="mt-5 font-serif text-3xl leading-tight text-texto-claro sm:text-4xl">
            {recurso.titulo}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-texto-claro/70">{recurso.extracto}</p>
        </div>
      </section>

      {/* Imagen destacada + cuerpo */}
      <article className="bg-crema pb-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <div className="relative -mt-0 aspect-[16/9] translate-y-0 overflow-hidden rounded-b-(--radius-card)">
            <Image
              src={recurso.imagen}
              alt={recurso.imagenAlt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
          <div className="mt-12 space-y-6">
            {recurso.cuerpo.map((parrafo, i) => (
              <AnimateOnScroll key={parrafo.slice(0, 40)} direction="up" delay={i === 0 ? 0 : 80}>
                <p className="text-base leading-relaxed text-texto-oscuro/85 first:font-serif first:text-xl first:leading-relaxed">
                  {parrafo}
                </p>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* Relacionados */}
        {relacionados.length > 0 && (
          <div className="mx-auto mt-20 max-w-7xl px-5 lg:px-8">
            <h2 className="mb-10 text-center font-serif text-2xl text-texto-oscuro sm:text-3xl">
              Sigue explorando
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relacionados.map((r, i) => (
                <AnimateOnScroll key={r.slug} direction="up" delay={i * 100}>
                  <ResourceCard recurso={r} />
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        )}
      </article>

      <CTASection
        titulo="¿Quieres llevar esta conversación más lejos?"
        texto="Leer inspira; conversar transforma. Agenda una conversación y demos el siguiente paso juntos."
      />
    </>
  );
}
