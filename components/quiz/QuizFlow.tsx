"use client";

import { useEffect, useMemo } from "react";
import { Loader2 } from "lucide-react";
import { questions } from "@/content/quiz/questions";
import {
  interludes,
  educationCapsule,
  resultTransition,
} from "@/content/quiz/cta";
import { buildFlow, TOTAL_QUESTIONS } from "@/lib/quiz/flow";
import { computeResult } from "@/lib/quiz/computeResult";
import { useQuizState } from "@/lib/quiz/useQuizState";
import QuizWelcome from "./QuizWelcome";
import QuizQuestion from "./QuizQuestion";
import InterludeScreen from "./InterludeScreen";
import ResultView from "./ResultView";

const questionById = new Map(questions.map((q) => [q.id, q]));

/**
 * Orquesta el cuestionario completo en el cliente. `answers` es la única fuente
 * de verdad; el resultado se recalcula con computeResult en cada render.
 */
export default function QuizFlow() {
  const flow = useMemo(() => buildFlow(), []);
  const {
    answers,
    step,
    hydrated,
    setAnswer,
    next,
    back,
    reset,
  } = useQuizState(flow.length);

  // Vuelve al inicio de la pantalla en cada cambio de paso.
  useEffect(() => {
    if (typeof window !== "undefined") window.scrollTo({ top: 0 });
  }, [step]);

  if (!hydrated) {
    return (
      <div className="flex min-h-[60svh] items-center justify-center" role="status" aria-live="polite">
        <Loader2 className="h-6 w-6 animate-spin text-dorado" aria-hidden="true" />
        <span className="sr-only">Cargando…</span>
      </div>
    );
  }

  const current = flow[step];

  switch (current.kind) {
    case "welcome":
      return <QuizWelcome onStart={next} />;

    case "question": {
      const question = questionById.get(current.questionId)!;
      return (
        <QuizQuestion
          question={question}
          questionNumber={current.questionNumber}
          total={TOTAL_QUESTIONS}
          value={answers[current.questionId]}
          onSelect={(v) => setAnswer(current.questionId, v)}
          onNext={next}
          onBack={back}
          canGoBack={step > 0}
        />
      );
    }

    case "interlude":
      return (
        <InterludeScreen
          eyebrow="Una pausa"
          text={interludes.reflection}
          onNext={next}
          onBack={back}
        />
      );

    case "education":
      return (
        <InterludeScreen
          eyebrow={educationCapsule.titulo}
          text={interludes.education}
          onNext={next}
          onBack={back}
        />
      );

    case "transition":
      return (
        <InterludeScreen
          text={resultTransition}
          continueLabel="Ver mi resultado"
          onNext={next}
          onBack={back}
        />
      );

    case "result":
      return <ResultView result={computeResult(answers)} onRestart={reset} />;

    default:
      return null;
  }
}
