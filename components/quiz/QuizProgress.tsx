/**
 * Indicador y barra de progreso del cuestionario.
 * Accesible: expone el avance con role="progressbar" y aria-valuenow.
 */
export default function QuizProgress({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="mb-8">
      <div className="mb-2 flex items-center justify-between text-xs font-medium tracking-[0.12em] uppercase text-texto-gris">
        <span>
          Pregunta {current} de {total}
        </span>
        <span aria-hidden="true">{pct}%</span>
      </div>
      <div
        className="h-1.5 w-full overflow-hidden rounded-full bg-dorado-tenue"
        role="progressbar"
        aria-valuenow={current}
        aria-valuemin={0}
        aria-valuemax={total}
        aria-label={`Pregunta ${current} de ${total}`}
      >
        <div
          className="h-full rounded-full bg-dorado transition-[width] duration-500 ease-out motion-reduce:transition-none"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
