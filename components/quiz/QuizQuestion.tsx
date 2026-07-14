"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Question } from "@/content/quiz/types";
import AnswerCard from "./AnswerCard";
import QuizProgress from "./QuizProgress";

/**
 * Una pregunta por pantalla. Las opciones forman un grupo de radios accesible
 * (fieldset + legend). El botón "Continuar" permanece deshabilitado hasta que
 * se elige una respuesta: no se avanza automáticamente al seleccionar.
 */
export default function QuizQuestion({
  question,
  questionNumber,
  total,
  value,
  onSelect,
  onNext,
  onBack,
  canGoBack,
}: {
  question: Question;
  questionNumber: number;
  total: number;
  value: string | undefined;
  onSelect: (value: string) => void;
  onNext: () => void;
  onBack: () => void;
  canGoBack: boolean;
}) {
  const answered = Boolean(value);

  return (
    <div className="mx-auto w-full max-w-2xl px-5 py-10 sm:py-14 lg:px-8">
      <QuizProgress current={questionNumber} total={total} />

      <fieldset>
        <legend className="mb-6 font-serif text-2xl leading-snug text-texto-oscuro sm:text-3xl">
          {question.text}
        </legend>
        <div className="flex flex-col gap-3">
          {question.options.map((o) => (
            <AnswerCard
              key={o.id}
              name={question.id}
              value={o.id}
              label={o.label}
              checked={value === o.id}
              onSelect={onSelect}
            />
          ))}
        </div>
      </fieldset>

      <div className="mt-8 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={onBack}
          disabled={!canGoBack}
          className="inline-flex items-center gap-2 rounded-(--radius-btn) px-4 py-2.5 text-sm font-semibold tracking-wide uppercase text-texto-gris transition-colors duration-300 hover:text-texto-oscuro disabled:pointer-events-none disabled:opacity-0"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Volver
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!answered}
          className="inline-flex items-center gap-2.5 rounded-(--radius-btn) bg-dorado px-6 py-3 text-sm font-semibold tracking-wide uppercase text-texto-oscuro transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-dorado-claro disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 motion-reduce:hover:translate-y-0"
        >
          Continuar
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
