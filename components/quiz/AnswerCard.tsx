"use client";

/**
 * Opción de respuesta seleccionable. Usa un radio nativo oculto (accesible,
 * navegable con flechas del teclado) y estiliza la etiqueta asociada.
 * Seleccionar NO avanza automáticamente: el visitante confirma con "Continuar".
 */
export default function AnswerCard({
  name,
  value,
  label,
  checked,
  onSelect,
}: {
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onSelect: (value: string) => void;
}) {
  return (
    <label className="group block cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onSelect(value)}
        className="sr-only peer"
      />
      <span className="flex items-start gap-3 rounded-(--radius-card) border border-dorado-tenue bg-blanco-calido p-4 text-sm leading-relaxed text-texto-oscuro transition-colors duration-200 group-hover:border-dorado/60 peer-checked:border-dorado peer-checked:bg-dorado-tenue peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-dorado peer-checked:[&_.answer-dot]:opacity-100 peer-checked:[&_.answer-ring]:border-dorado sm:p-5">
        <span
          aria-hidden="true"
          className="answer-ring mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full border border-dorado/40 transition-colors duration-200"
        >
          <span className="answer-dot h-2.5 w-2.5 rounded-full bg-dorado opacity-0 transition-opacity duration-200" />
        </span>
        {label}
      </span>
    </label>
  );
}
