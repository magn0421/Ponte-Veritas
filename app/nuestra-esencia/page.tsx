import type { Metadata } from "next";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CTASection from "@/components/CTASection";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import { BridgeMark } from "@/components/Logo";
import { Icon } from "@/lib/icons";
import { esencia } from "@/content/esencia";

export const metadata: Metadata = {
  title: "Nuestra esencia",
  description:
    "La historia, el propósito, la filosofía y los valores que sostienen cada conversación de Ponte Veritas.",
  openGraph: {
    title: "Nuestra esencia · Ponte Veritas",
    description:
      "La historia, el propósito y las convicciones que sostienen cada conversación de Ponte Veritas.",
  },
};

export default function NuestraEsenciaPage() {
  return (
    <>
      <Hero
        variant="short"
        titulo={esencia.hero.titulo}
        subtitulo={esencia.hero.subtitulo}
        imagen={esencia.hero.imagen}
        imagenAlt={esencia.hero.imagenAlt}
      />

      {/* Historia — imagen + texto cruzados */}
      <section className="bg-crema py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <AnimateOnScroll direction="left" duration={800}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-(--radius-card)">
              <Image
                src={esencia.historia.imagen}
                alt={esencia.historia.imagenAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll direction="right" duration={800}>
            <h2 className="font-serif text-3xl leading-snug text-texto-oscuro sm:text-4xl">
              {esencia.historia.titulo}
            </h2>
            <div className="mt-6 space-y-4">
              {esencia.historia.parrafos.map((p) => (
                <p key={p.slice(0, 40)} className="text-base leading-relaxed text-texto-gris">
                  {p}
                </p>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Propósito — declaración central */}
      <section className="bg-negro-base py-24">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <AnimateOnScroll direction="up">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-dorado">
              {esencia.proposito.titulo}
            </p>
            <p className="mt-6 font-serif text-2xl leading-relaxed text-texto-claro sm:text-3xl">
              {esencia.proposito.texto}
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Filosofía */}
      <section className="bg-blanco-calido py-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <SectionHeading titulo={esencia.filosofia.titulo} className="mb-10" />
          <div className="space-y-5">
            {esencia.filosofia.parrafos.map((p, i) => (
              <AnimateOnScroll key={p.slice(0, 40)} direction="up" delay={i * 120}>
                <p className="text-lg leading-relaxed text-texto-gris">{p}</p>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-crema py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading titulo={esencia.valores.titulo} className="mb-14" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {esencia.valores.items.map((valor, i) => (
              <AnimateOnScroll key={valor.titulo} direction="up" delay={i * 100}>
                <article className="group h-full rounded-(--radius-card) border border-dorado-tenue bg-blanco-calido p-6 text-center transition-all duration-500 ease-in-out hover:-translate-y-1 hover:border-dorado/60">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-dorado bg-crema transition-transform duration-300 group-hover:-translate-y-0.5">
                    <Icon name={valor.icono} className="h-5 w-5 text-dorado" />
                  </span>
                  <h3 className="mt-4 text-sm font-bold tracking-wide uppercase text-texto-oscuro">
                    {valor.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-texto-gris">
                    {valor.descripcion}
                  </p>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Fundador */}
      <section className="bg-blanco-calido py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[2fr_3fr] lg:px-8">
          <AnimateOnScroll direction="left" duration={800}>
            <div className="relative mx-auto aspect-[3/4] max-w-sm overflow-hidden rounded-(--radius-card)">
              <Image
                src={esencia.fundador.imagen}
                alt={esencia.fundador.imagenAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll direction="right" duration={800}>
            <h2 className="font-serif text-3xl leading-snug text-texto-oscuro sm:text-4xl">
              {esencia.fundador.titulo}
            </h2>
            <p className="mt-3 text-lg text-dorado">
              {esencia.fundador.nombre} · {esencia.fundador.rol}
            </p>
            <div className="mt-6 space-y-4">
              {esencia.fundador.bio.map((p) => (
                <p key={p.slice(0, 40)} className="text-base leading-relaxed text-texto-gris">
                  {p}
                </p>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Manifiesto — tratamiento tipográfico editorial */}
      <section className="relative overflow-hidden bg-negro-base py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 opacity-[0.05]"
        >
          <BridgeMark className="h-64 w-[32rem]" />
        </div>
        <div className="relative z-10 mx-auto max-w-2xl px-5 text-center lg:px-8">
          <AnimateOnScroll direction="up">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-dorado">
              {esencia.manifiesto.titulo}
            </p>
          </AnimateOnScroll>
          <div className="mt-10 space-y-5">
            {esencia.manifiesto.lineas.map((linea, i) => (
              <AnimateOnScroll key={linea} direction="up" delay={i * 90}>
                <p
                  className={`font-serif leading-relaxed ${
                    i >= esencia.manifiesto.lineas.length - 2
                      ? "text-2xl text-dorado sm:text-3xl"
                      : "text-xl text-texto-claro/85 sm:text-2xl"
                  }`}
                >
                  {linea}
                </p>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        titulo="¿Conversamos?"
        texto="Si algo de lo que leíste resonó contigo, ese puede ser el comienzo de tu conversación."
      />
    </>
  );
}
