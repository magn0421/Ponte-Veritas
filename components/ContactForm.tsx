"use client";

import { useActionState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { enviarContacto } from "@/lib/actions";
import { initialContactFormState } from "@/lib/contact-form-state";
import { razones } from "@/content/home";

const inputCls =
  "w-full rounded-(--radius-btn) border border-dorado-tenue bg-white px-4 py-3 text-sm text-texto-oscuro placeholder:text-texto-gris/60 transition-colors duration-300 focus:border-dorado focus:outline-none";

function FieldError({ error, id }: { error?: string; id: string }) {
  if (!error) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-xs text-red-700">
      {error}
    </p>
  );
}

/** Formulario de contacto con validación vía server action y estados de envío */
export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    enviarContacto,
    initialContactFormState
  );

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="flex h-full min-h-72 flex-col items-center justify-center rounded-(--radius-card) border border-dorado/50 bg-dorado-tenue p-8 text-center"
      >
        <CheckCircle2 className="h-10 w-10 text-dorado" aria-hidden="true" />
        <h3 className="mt-4 font-serif text-xl text-texto-oscuro">Mensaje enviado</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-texto-gris">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="space-y-4">
      <div>
        <label htmlFor="nombre" className="mb-1.5 block text-xs font-semibold tracking-wide uppercase text-texto-oscuro">
          Nombre *
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          autoComplete="name"
          placeholder="Tu nombre"
          aria-describedby="error-nombre"
          className={inputCls}
        />
        <FieldError error={state.errors.nombre} id="error-nombre" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-semibold tracking-wide uppercase text-texto-oscuro">
            Correo electrónico *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="tucorreo@ejemplo.com"
            aria-describedby="error-email"
            className={inputCls}
          />
          <FieldError error={state.errors.email} id="error-email" />
        </div>
        <div>
          <label htmlFor="telefono" className="mb-1.5 block text-xs font-semibold tracking-wide uppercase text-texto-oscuro">
            Teléfono
          </label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            autoComplete="tel"
            placeholder="+57 ..."
            aria-describedby="error-telefono"
            className={inputCls}
          />
          <FieldError error={state.errors.telefono} id="error-telefono" />
        </div>
      </div>

      <div>
        <label htmlFor="razon" className="mb-1.5 block text-xs font-semibold tracking-wide uppercase text-texto-oscuro">
          ¿Qué te trae aquí? *
        </label>
        <select
          id="razon"
          name="razon"
          required
          defaultValue=""
          aria-describedby="error-razon"
          className={inputCls}
        >
          <option value="" disabled>
            Selecciona lo que mejor describe tu momento
          </option>
          {razones.map((r) => (
            <option key={r.titulo} value={r.titulo}>
              {r.titulo}
            </option>
          ))}
        </select>
        <FieldError error={state.errors.razon} id="error-razon" />
      </div>

      <div>
        <label htmlFor="mensaje" className="mb-1.5 block text-xs font-semibold tracking-wide uppercase text-texto-oscuro">
          Mensaje *
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={5}
          placeholder="Cuéntanos brevemente qué te gustaría conversar…"
          aria-describedby="error-mensaje"
          className={inputCls}
        />
        <FieldError error={state.errors.mensaje} id="error-mensaje" />
      </div>

      {state.status === "error" && (
        <p role="alert" className="text-sm text-red-700">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-full items-center justify-center gap-2.5 rounded-(--radius-btn) bg-dorado px-6 py-3.5 text-sm font-semibold tracking-wide uppercase text-texto-oscuro transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-dorado-claro disabled:translate-y-0 disabled:opacity-60 sm:w-auto"
      >
        {pending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Enviando…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden="true" />
            Enviar mensaje
          </>
        )}
      </button>
    </form>
  );
}
