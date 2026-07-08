"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useReducedMotion } from "@/lib/useReducedMotion";

interface Cta {
  label: string;
  href: string;
}

interface HeroProps {
  variant?: "full" | "short";
  titulo: string;
  subtitulo?: string;
  imagen: string;
  imagenAlt: string;
  ctaPrincipal?: Cta;
  ctaSecundario?: Cta;
}

/**
 * Hero parametrizable: la home usa la versión completa (full),
 * las páginas internas la versión corta (short).
 * Secuencia de entrada al cargar: fondo → H1 → subtítulo → botones (1.2–1.8 s total).
 * Parallax extremadamente sutil solo en desktop y sin reduced-motion.
 */
export default function Hero({
  variant = "short",
  titulo,
  subtitulo,
  imagen,
  imagenAlt,
  ctaPrincipal,
  ctaSecundario,
}: HeroProps) {
  const [loaded, setLoaded] = useState(false);
  const bgRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    // Dispara la secuencia de entrada en el siguiente frame tras montar
    const id = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // Parallax sutil del fondo + oscurecimiento progresivo del overlay.
  // Desactivado en móvil y con prefers-reduced-motion.
  useEffect(() => {
    if (reduced) return;
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (!isDesktop) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const section = sectionRef.current;
        const bg = bgRef.current;
        const overlay = overlayRef.current;
        if (section && bg && overlay) {
          const progress = Math.min(1, window.scrollY / Math.max(1, section.offsetHeight));
          bg.style.transform = `translateY(${progress * 40}px)`; // factor mínimo
          overlay.style.opacity = String(Math.min(0.55, 0.2 + progress * 0.5));
        }
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduced]);

  const isFull = variant === "full";
  const enter = (visible: boolean) =>
    visible || reduced
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-8";

  return (
    <section
      ref={sectionRef}
      className={`relative flex items-center overflow-hidden bg-negro-base ${
        isFull ? "min-h-[92svh]" : "min-h-[58svh]"
      }`}
    >
      {/* Fondo con fade in suave */}
      <div
        ref={bgRef}
        className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
          loaded || reduced ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src={imagen}
          alt={imagenAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Overlay degradado para legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-negro-base via-negro-base/70 to-negro-base/20" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-negro-base to-transparent" />
        {/* Overlay de oscurecimiento progresivo con el scroll */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-negro-base"
          style={{ opacity: 0.2 }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-28 pb-16 lg:px-8">
        <div className="max-w-2xl">
          <h1
            className={`font-serif text-4xl leading-tight text-texto-claro transition-all duration-700 ease-out sm:text-5xl ${
              isFull ? "lg:text-6xl" : ""
            } ${enter(loaded)}`}
          >
            {titulo}
          </h1>
          {subtitulo && (
            <p
              className={`mt-6 max-w-xl text-base leading-relaxed text-texto-claro/85 transition-all delay-200 duration-700 ease-out sm:text-lg ${enter(loaded)}`}
            >
              {subtitulo}
            </p>
          )}
          {(ctaPrincipal || ctaSecundario) && (
            <div
              className={`mt-9 flex flex-wrap items-center gap-4 transition-all delay-[400ms] duration-700 ease-out ${enter(loaded)}`}
            >
              {ctaPrincipal && (
                <Link
                  href={ctaPrincipal.href}
                  className="inline-flex items-center gap-2.5 rounded-(--radius-btn) bg-dorado px-6 py-3.5 text-sm font-semibold tracking-wide uppercase text-texto-oscuro transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-dorado-claro"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  {ctaPrincipal.label}
                </Link>
              )}
              {ctaSecundario && (
                <Link
                  href={ctaSecundario.href}
                  className="group inline-flex items-center gap-2.5 rounded-(--radius-btn) border border-dorado/70 px-6 py-3.5 text-sm font-semibold tracking-wide uppercase text-texto-claro transition-colors duration-300 ease-in-out hover:border-dorado"
                >
                  {ctaSecundario.label}
                  <ArrowRight
                    className="h-4 w-4 text-dorado transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
