import Link from "next/link";
import { BridgeMark } from "@/components/Logo";

export default function NotFound() {
  return (
    <section className="flex min-h-[70svh] flex-col items-center justify-center bg-negro-base px-5 pt-24 text-center">
      <BridgeMark className="h-20 w-40 opacity-60" />
      <h1 className="mt-8 font-serif text-4xl text-texto-claro">Página no encontrada</h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-texto-claro/70">
        Parece que este puente no lleva a ninguna parte. Volvamos al camino.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-(--radius-btn) bg-dorado px-7 py-3.5 text-sm font-semibold tracking-wide uppercase text-texto-oscuro transition-all duration-300 hover:-translate-y-0.5 hover:bg-dorado-claro"
      >
        Volver al inicio
      </Link>
    </section>
  );
}
