"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ResourceCard from "./cards/ResourceCard";
import AnimateOnScroll from "./AnimateOnScroll";
import { categorias, recursos, tipos } from "@/content/recursos";
import type { CategoriaRecurso, TipoRecurso } from "@/content/types";

const POR_PAGINA = 6;

const filterBtn = (active: boolean) =>
  `rounded-full border px-4 py-2 text-xs font-semibold tracking-[0.12em] uppercase transition-colors duration-300 ease-in-out ${
    active
      ? "border-dorado bg-dorado text-texto-oscuro"
      : "border-dorado-tenue text-texto-gris hover:border-dorado hover:text-texto-oscuro"
  }`;

interface Props {
  initialCategoria?: string;
  initialTipo?: string;
}

/** Hub de recursos: filtros por categoría y tipo + paginación simple */
export default function ResourcesExplorer({ initialCategoria, initialTipo }: Props) {
  const [categoria, setCategoria] = useState<CategoriaRecurso | null>(
    categorias.find((c) => c === initialCategoria) ?? null
  );
  const [tipo, setTipo] = useState<TipoRecurso | null>(
    tipos.find((t) => t === initialTipo) ?? null
  );
  const [pagina, setPagina] = useState(1);

  const filtrados = useMemo(
    () =>
      recursos.filter(
        (r) => (!categoria || r.categoria === categoria) && (!tipo || r.tipo === tipo)
      ),
    [categoria, tipo]
  );

  const totalPaginas = Math.max(1, Math.ceil(filtrados.length / POR_PAGINA));
  const visibles = filtrados.slice((pagina - 1) * POR_PAGINA, pagina * POR_PAGINA);

  const setFiltroCategoria = (c: CategoriaRecurso | null) => {
    setCategoria(c);
    setPagina(1);
  };
  const setFiltroTipo = (t: TipoRecurso | null) => {
    setTipo(t);
    setPagina(1);
  };

  return (
    <div className="mx-auto max-w-7xl px-5 lg:px-8">
      {/* Filtros */}
      <div className="flex flex-col gap-4">
        <div
          role="group"
          aria-label="Filtrar por categoría"
          className="flex flex-wrap items-center gap-2"
        >
          <span className="mr-1 text-xs font-bold tracking-[0.15em] uppercase text-texto-oscuro">
            Categoría:
          </span>
          <button
            type="button"
            onClick={() => setFiltroCategoria(null)}
            aria-pressed={categoria === null}
            className={filterBtn(categoria === null)}
          >
            Todas
          </button>
          {categorias.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFiltroCategoria(c)}
              aria-pressed={categoria === c}
              className={filterBtn(categoria === c)}
            >
              {c}
            </button>
          ))}
        </div>
        <div
          role="group"
          aria-label="Filtrar por tipo"
          className="flex flex-wrap items-center gap-2"
        >
          <span className="mr-1 text-xs font-bold tracking-[0.15em] uppercase text-texto-oscuro">
            Tipo:
          </span>
          <button
            type="button"
            onClick={() => setFiltroTipo(null)}
            aria-pressed={tipo === null}
            className={filterBtn(tipo === null)}
          >
            Todos
          </button>
          {tipos.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setFiltroTipo(t)}
              aria-pressed={tipo === t}
              className={filterBtn(tipo === t)}
            >
              {t}s
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {visibles.length > 0 ? (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibles.map((recurso, i) => (
            <AnimateOnScroll key={recurso.slug} direction="up" delay={(i % 3) * 100}>
              <ResourceCard recurso={recurso} />
            </AnimateOnScroll>
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center text-texto-gris">
          No encontramos recursos con esos filtros. Prueba otra combinación.
        </p>
      )}

      {/* Paginación simple */}
      {totalPaginas > 1 && (
        <nav aria-label="Paginación" className="mt-14 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setPagina((p) => Math.max(1, p - 1))}
            disabled={pagina === 1}
            aria-label="Página anterior"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-dorado-tenue text-texto-oscuro transition-colors duration-300 hover:border-dorado disabled:opacity-40"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setPagina(n)}
              aria-current={pagina === n ? "page" : undefined}
              className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold transition-colors duration-300 ${
                pagina === n
                  ? "border-dorado bg-dorado text-texto-oscuro"
                  : "border-dorado-tenue text-texto-oscuro hover:border-dorado"
              }`}
            >
              {n}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setPagina((p) => Math.min(totalPaginas, p + 1))}
            disabled={pagina === totalPaginas}
            aria-label="Página siguiente"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-dorado-tenue text-texto-oscuro transition-colors duration-300 hover:border-dorado disabled:opacity-40"
          >
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </nav>
      )}
    </div>
  );
}
