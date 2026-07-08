"use client";

import { useEffect, useState } from "react";

/**
 * Hook global de accesibilidad de movimiento.
 * Devuelve true si el usuario tiene activo prefers-reduced-motion.
 * Las animaciones CSS ya se desactivan vía media queries en globals.css;
 * este hook cubre las animaciones controladas por JS (parallax, GSAP).
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}
