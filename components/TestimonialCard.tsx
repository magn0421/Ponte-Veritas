import { Quote } from "lucide-react";
import type { Testimonio } from "@/content/types";

export default function TestimonialCard({ testimonio }: { testimonio: Testimonio }) {
  return (
    <figure className="flex h-full flex-col rounded-(--radius-card) border border-dorado-tenue bg-blanco-calido p-7 transition-all duration-500 ease-in-out hover:-translate-y-1 hover:border-dorado/60 hover:shadow-lg hover:shadow-black/5">
      <Quote className="h-7 w-7 text-dorado" aria-hidden="true" />
      <blockquote className="mt-4 flex-1">
        <p className="font-serif text-lg leading-relaxed text-texto-oscuro italic">
          “{testimonio.cita}”
        </p>
      </blockquote>
      <figcaption className="mt-6">
        <p className="text-sm font-bold text-texto-oscuro">{testimonio.autor}</p>
        <p className="mt-0.5 text-xs tracking-wide uppercase text-texto-gris">
          {testimonio.contexto}
        </p>
      </figcaption>
    </figure>
  );
}
