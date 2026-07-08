import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Recurso } from "@/content/types";

/** Tarjeta de recurso (home y hub de recursos) */
export default function ResourceCard({ recurso }: { recurso: Recurso }) {
  return (
    <Link
      href={`/recursos/${recurso.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-(--radius-card) border border-dorado-tenue bg-blanco-calido transition-all duration-500 ease-in-out hover:-translate-y-1 hover:border-dorado/60 hover:shadow-lg hover:shadow-black/5"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={recurso.imagen}
          alt={recurso.imagenAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.04]"
        />
        <span className="absolute top-4 left-4 rounded bg-dorado/80 px-2.5 py-1 text-[0.65rem] font-bold tracking-[0.15em] uppercase text-texto-oscuro transition-colors duration-500 ease-in-out group-hover:bg-dorado">
          {recurso.categoria}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="text-[0.65rem] font-semibold tracking-[0.18em] uppercase text-texto-gris">
          {recurso.tipo}
        </span>
        <h3 className="mt-2 font-serif text-lg leading-snug text-texto-oscuro">
          {recurso.titulo}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-texto-gris">{recurso.extracto}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-dorado">
          Leer más
          <ArrowRight
            className="h-3.5 w-3.5 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
