import Image from "next/image";
import { Icon } from "@/lib/icons";
import type { Razon } from "@/content/types";

/** Tarjeta de la sección "Cada persona llega por una razón diferente" */
export default function ReasonCard({ razon, index }: { razon: Razon; index: number }) {
  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-(--radius-card) border transition-all duration-500 ease-in-out hover:-translate-y-1.5 hover:shadow-lg hover:shadow-black/5 ${
        razon.destacada
          ? "border-dorado/50 bg-dorado-tenue hover:border-dorado"
          : "border-dorado-tenue bg-blanco-calido hover:border-dorado/60"
      }`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={razon.imagen}
          alt={razon.imagenAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="relative flex flex-1 flex-col px-5 pt-9 pb-6 text-center">
        <span className="absolute -top-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-dorado bg-blanco-calido transition-transform duration-300 ease-in-out group-hover:-translate-y-0.5">
          <Icon name={razon.icono} className="h-5 w-5 text-dorado" />
        </span>
        <h3 className="text-sm font-bold tracking-wide uppercase text-texto-oscuro">
          {index + 1}. {razon.titulo}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-texto-gris">{razon.descripcion}</p>
      </div>
    </article>
  );
}
