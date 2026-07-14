"use client";

import { useCallback, useEffect, useReducer } from "react";
import type { Answers, QuestionId } from "@/content/quiz/types";

const STORAGE_KEY = "pv-quiz-v1";

export interface QuizState {
  answers: Answers;
  step: number;
  /** true una vez rehidratado desde sessionStorage (evita parpadeos/mismatch). */
  hydrated: boolean;
}

type Action =
  | { type: "set"; id: QuestionId; option: string }
  | { type: "goTo"; step: number }
  | { type: "reset" }
  | { type: "hydrate"; answers: Answers; step: number };

const initial: QuizState = { answers: {}, step: 0, hydrated: false };

function reducer(state: QuizState, action: Action): QuizState {
  switch (action.type) {
    case "set":
      return { ...state, answers: { ...state.answers, [action.id]: action.option } };
    case "goTo":
      return { ...state, step: Math.max(0, action.step) };
    case "reset":
      return { answers: {}, step: 0, hydrated: true };
    case "hydrate":
      return { answers: action.answers, step: action.step, hydrated: true };
    default:
      return state;
  }
}

/**
 * Estado del cuestionario. Fuente única de verdad = `answers`; el resultado se
 * recalcula siempre desde ahí (nunca se acumula). Persiste temporalmente en
 * sessionStorage SOLO las respuestas y el paso, y se limpia al reiniciar.
 * Datos de bienestar no salen de la sesión.
 */
export function useQuizState(totalSteps: number) {
  const [state, dispatch] = useReducer(reducer, initial);

  // Rehidratación tras el montaje (cliente).
  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as { answers?: Answers; step?: number };
        dispatch({
          type: "hydrate",
          answers: parsed.answers ?? {},
          step: Math.min(parsed.step ?? 0, totalSteps - 1),
        });
        return;
      }
    } catch {
      /* almacenamiento no disponible o corrupto: se ignora */
    }
    dispatch({ type: "hydrate", answers: {}, step: 0 });
  }, [totalSteps]);

  // Persistencia temporal de sesión.
  useEffect(() => {
    if (!state.hydrated) return;
    try {
      sessionStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ answers: state.answers, step: state.step })
      );
    } catch {
      /* ignora cuota/no disponible */
    }
  }, [state.answers, state.step, state.hydrated]);

  const setAnswer = useCallback((id: QuestionId, option: string) => {
    dispatch({ type: "set", id, option });
  }, []);

  const next = useCallback(() => {
    dispatch({ type: "goTo", step: Math.min(state.step + 1, totalSteps - 1) });
  }, [state.step, totalSteps]);

  const back = useCallback(() => {
    dispatch({ type: "goTo", step: Math.max(state.step - 1, 0) });
  }, [state.step]);

  const goTo = useCallback(
    (step: number) => dispatch({ type: "goTo", step: Math.min(step, totalSteps - 1) }),
    [totalSteps]
  );

  const reset = useCallback(() => {
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignora */
    }
    dispatch({ type: "reset" });
  }, []);

  return { ...state, setAnswer, next, back, goTo, reset };
}
