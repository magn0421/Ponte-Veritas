"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { nav } from "@/content/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Detección de scroll con Intersection Observer sobre un sentinel
  // en el tope de la página (sin listener de scroll crudo).
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  // Cerrar menú móvil al navegar
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <div
        ref={sentinelRef}
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 h-16 w-px"
      />
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-in-out ${
          scrolled ? "header-scrolled shadow-lg shadow-black/20" : "bg-transparent"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-500 ease-in-out lg:px-8 ${
            scrolled ? "py-2.5" : "py-4"
          }`}
        >
          <Logo compact={scrolled} />

          {/* Navegación desktop */}
          <nav aria-label="Navegación principal" className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link text-[0.8rem] font-medium tracking-[0.12em] uppercase transition-colors duration-300 ${
                  pathname === item.href ? "text-dorado" : "text-texto-claro hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/agenda"
              className="rounded-(--radius-btn) border border-dorado px-5 py-2.5 text-[0.8rem] font-semibold tracking-[0.12em] uppercase text-texto-claro transition-colors duration-300 hover:bg-dorado hover:text-texto-oscuro"
            >
              Agenda una conversación
            </Link>
          </nav>

          {/* Botón menú móvil */}
          <button
            type="button"
            className="text-texto-claro lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="menu-movil"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Menú móvil */}
        {menuOpen && (
          <nav
            id="menu-movil"
            aria-label="Navegación móvil"
            className="flex flex-col gap-1 border-t border-dorado-tenue bg-negro-base/95 px-5 pt-4 pb-6 backdrop-blur-sm lg:hidden"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`py-3 text-sm font-medium tracking-[0.12em] uppercase ${
                  pathname === item.href ? "text-dorado" : "text-texto-claro"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/agenda"
              className="mt-3 rounded-(--radius-btn) bg-dorado px-5 py-3 text-center text-sm font-semibold tracking-[0.12em] uppercase text-texto-oscuro"
            >
              Agenda una conversación
            </Link>
          </nav>
        )}
      </header>
    </>
  );
}
