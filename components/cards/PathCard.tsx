import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/lib/icons";
import type { Camino } from "@/content/types";

/** Tarjeta grande de la sección "Tres caminos" */
export default function PathCard({ camino }: { camino: Camino }) {
  return (
    <Link
      href={camino.href}
      className="group relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-(--radius-card) border border-dorado-tenue transition-all duration-500 ease-in-out hover:-translate-y-1.5 hover:border-dorado/60 hover:shadow-xl hover:shadow-black/20"
    >
      <Image
        src={camino.imagen}
        alt={camino.imagenAlt}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.05]"
      />
      {/* Overlay oscuro que disminuye en hover para revelar la imagen */}
      <div className="absolute inset-0 bg-gradient-to-t from-negro-base via-negro-base/60 to-negro-base/20 transition-opacity duration-500 ease-in-out group-hover:opacity-80" />

      <div className="relative z-10 p-7">
        <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-dorado bg-negro-base/50">
          <Icon name={camino.icono} className="h-5 w-5 text-dorado" />
        </span>
        <h3 className="font-serif text-2xl tracking-[0.08em] uppercase text-dorado transition-transform duration-500 ease-in-out group-hover:-translate-y-1">
          {camino.titulo}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-texto-claro/75 transition-opacity duration-500 ease-in-out group-hover:text-texto-claro">
          {camino.descripcion}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-dorado">
          {camino.cta}
          <ArrowRight
            className="h-4 w-4 transition-transform duration-500 ease-in-out group-hover:translate-x-1.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
