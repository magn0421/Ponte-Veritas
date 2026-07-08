import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";
import CTASection from "./CTASection";
import FAQAccordion from "./FAQAccordion";
import Hero from "./Hero";
import ProcessSection from "./ProcessSection";
import SectionHeading from "./SectionHeading";
import TestimonialCard from "./TestimonialCard";
import { Icon } from "@/lib/icons";
import type { Ambito, AudienceContent } from "@/content/types";

function ItemGrid({ items, cols = 4 }: { items: Ambito[]; cols?: 3 | 4 }) {
  return (
    <div
      className={`grid gap-6 sm:grid-cols-2 ${
        cols === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
      }`}
    >
      {items.map((item, i) => (
        <AnimateOnScroll key={item.titulo} direction="up" delay={i * 100}>
          <article className="group h-full rounded-(--radius-card) border border-dorado-tenue bg-blanco-calido p-6 transition-all duration-500 ease-in-out hover:-translate-y-1 hover:border-dorado/60 hover:shadow-lg hover:shadow-black/5">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-dorado bg-crema transition-transform duration-300 ease-in-out group-hover:-translate-y-0.5">
              <Icon name={item.icono} className="h-5 w-5 text-dorado" />
            </span>
            <h3 className="mt-4 text-sm font-bold tracking-wide uppercase text-texto-oscuro">
              {item.titulo}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-texto-gris">{item.descripcion}</p>
          </article>
        </AnimateOnScroll>
      ))}
    </div>
  );
}

function faqJsonLd(content: AudienceContent) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.items.map((f) => ({
      "@type": "Question",
      name: f.pregunta,
      acceptedAnswer: { "@type": "Answer", text: f.respuesta },
    })),
  };
}

/**
 * Template compartido de páginas de audiencia.
 * Personas y Familias usan la variante "persona"; Organizaciones la
 * variante "b2b" con secciones adicionales (soluciones, casos de éxito).
 */
export default function AudiencePage({ content }: { content: AudienceContent }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(content)) }}
      />

      <Hero
        variant="short"
        titulo={content.hero.titulo}
        subtitulo={content.hero.subtitulo}
        imagen={content.hero.imagen}
        imagenAlt={content.hero.imagenAlt}
        ctaPrincipal={{ label: content.ctaBoton, href: "/agenda" }}
      />

      {/* Identificación */}
      <section className="bg-crema py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            titulo={content.identificacion.titulo}
            intro={content.identificacion.intro}
            className="mb-14"
          />
          <ItemGrid items={content.identificacion.items} />
        </div>
      </section>

      {/* Sección extra: desafíos relacionales (Familias) / resultados buscados (Organizaciones) */}
      {content.seccionExtra && (
        <section className="bg-blanco-calido py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              titulo={content.seccionExtra.titulo}
              intro={content.seccionExtra.intro}
              className="mb-14"
            />
            <ItemGrid items={content.seccionExtra.items} />
          </div>
        </section>
      )}

      {/* Transformación deseada / Cómo trabajamos */}
      <section className={`py-24 ${content.seccionExtra ? "bg-crema" : "bg-blanco-calido"}`}>
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            titulo={content.transformacion.titulo}
            intro={content.transformacion.intro}
            className="mb-14"
          />
          <ItemGrid items={content.transformacion.items} />
        </div>
      </section>

      {/* Cómo acompañamos / Liderazgo y equipos — imagen + texto cruzados */}
      <section className="bg-crema py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <AnimateOnScroll direction="left" duration={800}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-(--radius-card)">
              <Image
                src={content.acompanamiento.imagen}
                alt={content.acompanamiento.imagenAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll direction="right" duration={800}>
            <h2 className="font-serif text-3xl leading-snug text-texto-oscuro sm:text-4xl">
              {content.acompanamiento.titulo}
            </h2>
            <p className="mt-3 text-lg text-dorado">{content.acompanamiento.intro}</p>
            <div className="mt-6 space-y-4">
              {content.acompanamiento.parrafos.map((p) => (
                <p key={p.slice(0, 40)} className="text-base leading-relaxed text-texto-gris">
                  {p}
                </p>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Ámbitos de acompañamiento / Cultura y transformación */}
      <section className="bg-blanco-calido py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            titulo={content.ambitos.titulo}
            intro={content.ambitos.intro}
            className="mb-14"
          />
          <ItemGrid items={content.ambitos.items} cols={3} />
        </div>
      </section>

      {/* Soluciones / programas (solo b2b) */}
      {content.soluciones && (
        <section className="bg-crema py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              titulo={content.soluciones.titulo}
              intro={content.soluciones.intro}
              className="mb-14"
            />
            <ItemGrid items={content.soluciones.items} cols={3} />
          </div>
        </section>
      )}

      {/* Proceso — reutiliza el camino de transformación */}
      <ProcessSection titulo={content.procesoTitulo} intro={content.procesoIntro} />

      {/* Casos de éxito (solo b2b) */}
      {content.casos && (
        <section className="bg-negro-base py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              titulo={content.casos.titulo}
              intro={content.casos.intro}
              tono="oscuro"
              className="mb-14"
            />
            <div className="grid gap-6 lg:grid-cols-3">
              {content.casos.items.map((caso, i) => (
                <AnimateOnScroll key={caso.titulo} direction="up" delay={i * 100}>
                  <article className="h-full rounded-(--radius-card) border border-dorado-tenue bg-negro-suave p-7 transition-colors duration-500 hover:border-dorado/60">
                    <h3 className="font-serif text-xl text-dorado">{caso.titulo}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-texto-claro/70">
                      <span className="font-semibold text-texto-claro">El desafío: </span>
                      {caso.contexto}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-texto-claro/70">
                      <span className="font-semibold text-texto-claro">El resultado: </span>
                      {caso.resultado}
                    </p>
                  </article>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonios */}
      <section className="bg-crema py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading titulo={content.testimonios.titulo} className="mb-14" />
          <div className="grid gap-6 lg:grid-cols-3">
            {content.testimonios.items.map((t, i) => (
              <AnimateOnScroll key={t.autor} direction="up" delay={i * 100}>
                <TestimonialCard testimonio={t} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section className="bg-blanco-calido py-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <SectionHeading titulo={content.faq.titulo} className="mb-12" />
          <AnimateOnScroll direction="up">
            <FAQAccordion items={content.faq.items} />
          </AnimateOnScroll>
        </div>
      </section>

      <CTASection
        titulo={content.ctaTitulo}
        texto={content.ctaTexto}
        botonLabel={content.ctaBoton}
      />
    </>
  );
}
