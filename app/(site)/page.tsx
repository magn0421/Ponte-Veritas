import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CTASection from "@/components/CTASection";
import Hero from "@/components/Hero";
import ProcessSection from "@/components/ProcessSection";
import SectionHeading from "@/components/SectionHeading";
import VideoLightbox from "@/components/VideoLightbox";
import ReasonCard from "@/components/cards/ReasonCard";
import PathCard from "@/components/cards/PathCard";
import ResourceCard from "@/components/cards/ResourceCard";
import DiscoverMomentEntry from "@/components/quiz/DiscoverMomentEntry";
import { Icon } from "@/lib/icons";
import {
  ctaFinal,
  hero,
  identificacion,
  impacto,
  procesoHome,
  queEs,
  razones,
  recursosHome,
  tresCaminos,
  video,
} from "@/content/home";
import { getRecursosDestacados } from "@/content/recursos";
import { site } from "@/content/site";

export default function HomePage() {
  const destacados = getRecursosDestacados();

  return (
    <>
      {/* 2. Hero — promesa principal */}
      <Hero
        variant="full"
        titulo={hero.titulo}
        subtitulo={hero.subtitulo}
        imagen={hero.imagen}
        imagenAlt={hero.imagenAlt}
        ctaPrincipal={hero.ctaPrincipal}
        ctaSecundario={hero.ctaSecundario}
      />

      {/* 3. Identificación — "Cada persona llega por una razón diferente" */}
      <section id="razones" className="bg-crema py-24 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            titulo={identificacion.titulo}
            intro={identificacion.intro}
            className="mb-16"
          />
          <div className="grid gap-6 pt-6 sm:grid-cols-2 lg:grid-cols-5">
            {razones.map((razon, i) => (
              <AnimateOnScroll
                key={razon.titulo}
                direction={razon.destacada ? "fade" : "up"}
                // Tarjetas 1–4 escalonadas cada 100 ms; la 5.ª llega después, más suave
                delay={razon.destacada ? 550 : i * 100}
                duration={razon.destacada ? 900 : 700}
              >
                <ReasonCard razon={razon} index={i} />
              </AnimateOnScroll>
            ))}
          </div>
          <AnimateOnScroll direction="up" delay={200}>
            <p className="mt-14 text-center font-serif text-xl text-texto-oscuro italic">
              {identificacion.cierre}
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* 3.5 Descubre tu momento actual — entrada al cuestionario */}
      <DiscoverMomentEntry />

      {/* 4. ¿Qué es Ponte Veritas? — imagen + texto cruzados */}
      <section className="bg-blanco-calido py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <AnimateOnScroll direction="left" duration={800}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-(--radius-card)">
              {/* Zoom cinematográfico extremadamente lento mientras la sección es visible */}
              <div className="slow-zoom absolute inset-0">
                <Image
                  src={queEs.imagen}
                  alt={queEs.imagenAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll direction="right" duration={800}>
            <h2 className="font-serif text-3xl leading-snug text-texto-oscuro sm:text-4xl">
              {queEs.titulo}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-texto-oscuro">{queEs.subtitulo}</p>
            <p className="mt-4 text-base leading-relaxed text-texto-gris">{queEs.descripcion}</p>
            <Link
              href={queEs.cta.href}
              className="group relative mt-7 inline-flex items-center gap-2 text-sm font-semibold tracking-[0.15em] uppercase text-dorado"
            >
              <span className="relative">
                {queEs.cta.label}
                <span
                  className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-dorado transition-transform duration-300 ease-in-out group-hover:scale-x-100"
                  aria-hidden="true"
                />
              </span>
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1.5"
                aria-hidden="true"
              />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* 5. Tres caminos */}
      <section className="bg-crema py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading titulo={tresCaminos.titulo} className="mb-14" />
          <div className="grid gap-6 md:grid-cols-3">
            {tresCaminos.caminos.map((camino, i) => (
              <AnimateOnScroll key={camino.titulo} direction="up" delay={i * 120}>
                <PathCard camino={camino} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Camino de transformación (GSAP ScrollTrigger) */}
      <ProcessSection titulo={procesoHome.titulo} />

      {/* 7. Impacto — el fondo transiciona suavemente hacia negro */}
      <div aria-hidden="true" className="h-24 bg-gradient-to-b from-crema to-negro-base" />
      <section className="bg-negro-base pt-4 pb-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading titulo={impacto.titulo} tono="oscuro" className="mb-16" />
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
            {impacto.elementos.map((el, i) => (
              <AnimateOnScroll key={el.titulo} direction="up" delay={i * 100}>
                <div className="group flex h-full flex-col items-center border-t border-dorado-tenue pt-8 text-center transition-colors duration-500 hover:border-dorado/60">
                  <Icon
                    name={el.icono}
                    className="h-8 w-8 text-dorado/60 transition-colors duration-500 ease-in-out group-hover:text-dorado"
                  />
                  <h3 className="mt-4 text-xs font-bold tracking-[0.15em] uppercase text-texto-claro transition-transform duration-300 ease-in-out group-hover:-translate-y-0.5">
                    {el.titulo}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-texto-claro/60">
                    {el.descripcion}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Video institucional */}
      <section className="bg-crema py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <AnimateOnScroll direction="up">
            <h2 className="font-serif text-3xl leading-snug text-texto-oscuro sm:text-4xl">
              {video.titulo}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-texto-gris">{video.texto}</p>
            <p className="mt-7 inline-flex items-center gap-2 rounded-(--radius-btn) border border-dorado px-5 py-2.5 text-xs font-semibold tracking-[0.15em] uppercase text-texto-oscuro">
              <ArrowRight className="h-3.5 w-3.5 text-dorado" aria-hidden="true" />
              {video.cta}
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll direction="scale" duration={800}>
            <VideoLightbox
              videoId={site.youtubeVideoId}
              miniatura={video.miniatura}
              miniaturaAlt={video.miniaturaAlt}
              titulo={video.titulo}
            />
          </AnimateOnScroll>
        </div>
      </section>

      {/* 9. Recursos destacados */}
      <section className="bg-blanco-calido py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading titulo={recursosHome.titulo} className="mb-14" />
          <div className="grid gap-6 md:grid-cols-3">
            {destacados.map((recurso, i) => (
              <AnimateOnScroll key={recurso.slug} direction="up" delay={i * 100}>
                <ResourceCard recurso={recurso} />
              </AnimateOnScroll>
            ))}
          </div>
          <AnimateOnScroll direction="up" delay={200} className="mt-12 text-center">
            <Link
              href="/recursos"
              className="inline-flex items-center gap-2.5 rounded-(--radius-btn) border border-dorado px-6 py-3 text-sm font-semibold tracking-wide uppercase text-texto-oscuro transition-colors duration-300 ease-in-out hover:bg-dorado-tenue"
            >
              <BookOpen className="h-4 w-4 text-dorado" aria-hidden="true" />
              {recursosHome.cta}
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* 10. CTA final */}
      <CTASection titulo={ctaFinal.titulo} texto={ctaFinal.texto} />
    </>
  );
}
