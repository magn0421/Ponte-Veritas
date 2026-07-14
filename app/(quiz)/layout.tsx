import Link from "next/link";
import { X } from "lucide-react";
import Logo from "@/components/Logo";

/**
 * Layout de navegación mínima para el cuestionario "Descubre tu momento actual".
 * Solo logo (vuelve al inicio) y un botón de salida discreto: sin menú
 * completo ni pie de página, para una experiencia enfocada y sin distracciones.
 */
export default function QuizLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-svh flex-col bg-crema">
      <header className="border-b border-dorado-tenue bg-negro-base">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-3.5 lg:px-8">
          <Logo compact />
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium tracking-[0.12em] uppercase text-texto-claro/70 transition-colors duration-300 hover:text-dorado"
          >
            <X className="h-4 w-4" aria-hidden="true" />
            Salir
          </Link>
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
