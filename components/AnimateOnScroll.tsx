"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type Direction = "up" | "left" | "right" | "scale" | "fade";

interface AnimateOnScrollProps {
  children: ReactNode;
  /** Retraso en ms para entradas escalonadas */
  delay?: number;
  /** Dirección de entrada (máx. 20–40 px según brief) */
  direction?: Direction;
  /** Duración en ms (rango del brief: 400–900) */
  duration?: number;
  className?: string;
  as?: ElementType;
}

const directionClass: Record<Direction, string> = {
  up: "aos-up",
  left: "aos-left",
  right: "aos-right",
  scale: "aos-scale",
  fade: "",
};

/**
 * Wrapper de entrada por scroll con Intersection Observer.
 * Dispara UNA SOLA VEZ por carga de página (unobserve tras revelar).
 * prefers-reduced-motion se respeta desde globals.css (los elementos
 * aparecen visibles de inmediato, sin transición).
 */
export default function AnimateOnScroll({
  children,
  delay = 0,
  direction = "up",
  duration = 700,
  className = "",
  as: Tag = "div",
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target); // una sola vez por carga
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-visible={visible}
      className={`aos ${directionClass[direction]} ${className}`}
      style={{ transitionDelay: `${delay}ms`, transitionDuration: `${duration}ms` }}
    >
      {children}
    </Tag>
  );
}
