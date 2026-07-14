"use client";

import { useActionState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { enviarLead } from "@/lib/quiz/leadAction";
import { initialLeadFormState } from "@/lib/quiz/lead-state";
import type { QuizResult } from "@/content/quiz/types";

const inputCls =
  "w-full rounded-(--radius-btn) border border-dorado-tenue bg-white px-4 py-3 text-sm text-texto-oscuro placeholder:text-texto-gris/60 transition-colors duration-300 focus:border-dorado focus:outline-none";

/**
 * Formulario OPCIONAL de captación. No bloquea el resultado (el visitante ya vio
 * todo su resultado ampliado). Envía solo los campos permitidos mediante campos
 * ocultos derivados del resultado. Consentimiento explícito, no premarcado.
 */
export default function LeadCapture({ result }: { result: QuizResult }) {
  const [state, formAction, pending] = useActionState(
    enviarLead,
    initialLeadFormState
  );

  if (state.status === "success") {
    return (
      <div
        id="guia"
        role="status"
        className="scroll-mt-24 rounded-(--radius-card) border border-dorado/50 bg-dorado-tenue p-8 text-center"
      >
        <CheckCircle2 className="mx-auto h-10 w-10 text-dorado" aria-hidden="true" />
        <h3 className="mt-4 font-serif text-xl text-texto-oscuro">¡Listo!</h3>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-texto-gris">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form
      id="guia"
      action={formAction}
      noValidate
      className="scroll-mt-24 rounded-(--radius-card) border border-dorado-tenue bg-blanco-calido p-7 sm:p-9"
    >
      <h3 className="font-serif text-2xl text-texto-oscuro">
        Recibe tu guía personalizada
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-texto-gris">
        Déjanos tu nombre y correo si quieres recibir recomendaciones para tu
        momento actual o iniciar una conversación. Es opcional: ya conoces tu
        resultado completo.
      </p>

      {/* Campos ocultos: solo datos permitidos derivados del resultado */}
      <input type="hidden" name="primaryProfile" value={result.primaryProfile} />
      <input type="hidden" name="secondaryProfile" value={result.secondaryProfile ?? ""} />
      <input type="hidden" name="showSecondaryProfile" value={String(result.showSecondaryProfile)} />
      <input type="hidden" name="coachingKnowledge" value={result.coachingKnowledge ?? ""} />
      <input type="hidden" name="coachingUnderstanding" value={result.coachingUnderstanding ?? ""} />
      <input type="hidden" name="readinessLevel" value={result.readinessLevel ?? ""} />
      <input type="hidden" name="nextStepIntent" value={result.nextStepIntent ?? ""} />

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="lead-name" className="mb-1.5 block text-xs font-semibold tracking-wide uppercase text-texto-oscuro">
            Nombre *
          </label>
          <input
            id="lead-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Tu nombre"
            aria-describedby="lead-error-name"
            className={inputCls}
          />
          {state.errors.name && (
            <p id="lead-error-name" role="alert" className="mt-1.5 text-xs text-red-700">
              {state.errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="lead-email" className="mb-1.5 block text-xs font-semibold tracking-wide uppercase text-texto-oscuro">
            Correo *
          </label>
          <input
            id="lead-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="tucorreo@ejemplo.com"
            aria-describedby="lead-error-email"
            className={inputCls}
          />
          {state.errors.email && (
            <p id="lead-error-email" role="alert" className="mt-1.5 text-xs text-red-700">
              {state.errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="mt-4">
        <label className="flex items-start gap-3 text-xs leading-relaxed text-texto-gris">
          <input
            type="checkbox"
            name="consent"
            className="mt-0.5 h-4 w-4 flex-none accent-[var(--color-dorado)]"
            aria-describedby="lead-error-consent"
          />
          <span>
            Autorizo a Ponte Veritas a contactarme y tratar mis datos según su{" "}
            <a href="/nuestra-esencia" className="text-dorado underline">
              Política de Privacidad
            </a>
            .
          </span>
        </label>
        {state.errors.consent && (
          <p id="lead-error-consent" role="alert" className="mt-1.5 text-xs text-red-700">
            {state.errors.consent}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="mt-6 inline-flex items-center gap-2.5 rounded-(--radius-btn) bg-dorado px-6 py-3 text-sm font-semibold tracking-wide uppercase text-texto-oscuro transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-dorado-claro disabled:cursor-not-allowed disabled:opacity-60 motion-reduce:hover:translate-y-0"
      >
        {pending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Enviando…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden="true" />
            Enviar
          </>
        )}
      </button>
    </form>
  );
}
