"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";

interface VideoLightboxProps {
  videoId: string; // ID de YouTube — el iframe se carga solo al abrir
  miniatura: string;
  miniaturaAlt: string;
  titulo: string;
}

/**
 * Miniatura + lightbox cinematográfico sobre fondo negro.
 * El iframe de YouTube se monta únicamente al hacer clic en Play
 * (lazy-load real: nada de YouTube en el load inicial).
 */
export default function VideoLightbox({
  videoId,
  miniatura,
  miniaturaAlt,
  titulo,
}: VideoLightboxProps) {
  const [open, setOpen] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus(); // devolver el foco al disparador
  }, []);

  // Escape para cerrar + bloqueo de scroll del body + foco inicial
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Reproducir video: ${titulo}`}
        className="group relative block w-full overflow-hidden rounded-(--radius-card) border border-dorado-tenue"
      >
        <div className="relative aspect-video">
          <Image
            src={miniatura}
            alt={miniaturaAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-negro-base/40 transition-opacity duration-500 ease-in-out group-hover:bg-negro-base/25" />
          <span className="absolute top-1/2 left-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-dorado bg-negro-base/60 transition-all duration-300 ease-in-out group-hover:scale-[1.08] group-hover:shadow-[0_0_0_10px_var(--color-dorado-tenue)]">
            <Play className="ml-1 h-6 w-6 fill-dorado text-dorado" aria-hidden="true" />
          </span>
        </div>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={titulo}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-negro-base/95 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) close(); // clic fuera cierra
          }}
        >
          <button
            ref={closeBtnRef}
            type="button"
            onClick={close}
            aria-label="Cerrar video"
            className="absolute top-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-dorado-tenue text-texto-claro transition-colors duration-300 hover:border-dorado hover:text-dorado"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="w-full max-w-4xl">
            <div className="relative aspect-video overflow-hidden rounded-(--radius-card)">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
                title={titulo}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
