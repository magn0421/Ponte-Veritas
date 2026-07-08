"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import type { PreguntaFrecuente } from "@/content/types";

/**
 * Accordion accesible para preguntas frecuentes.
 * Apertura suave con grid-template-rows; el icono + rota a ×.
 * El schema FAQPage (JSON-LD) lo emite la página que lo usa.
 */
export default function FAQAccordion({ items }: { items: PreguntaFrecuente[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = useId();

  return (
    <div className="divide-y divide-dorado-tenue rounded-(--radius-card) border border-dorado-tenue bg-blanco-calido">
      {items.map((item, i) => {
        const open = openIndex === i;
        const headerId = `${baseId}-faq-h-${i}`;
        const panelId = `${baseId}-faq-p-${i}`;
        return (
          <div key={item.pregunta}>
            <h3>
              <button
                type="button"
                id={headerId}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-300 hover:text-dorado"
              >
                <span className="text-base font-semibold text-texto-oscuro">
                  {item.pregunta}
                </span>
                <Plus
                  className={`h-5 w-5 shrink-0 text-dorado transition-transform duration-300 ease-in-out ${
                    open ? "rotate-45" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              data-open={open}
              className="faq-panel"
            >
              <div>
                <p className="px-6 pb-6 text-sm leading-relaxed text-texto-gris">
                  {item.respuesta}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
