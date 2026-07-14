"use client";

import { ArrowRight } from "lucide-react";
import { welcomeContent } from "@/content/quiz/cta";

/** Pantalla de bienvenida del cuestionario. */
export default function QuizWelcome({ onStart }: { onStart: () => void }) {
  return (
    <div className="mx-auto flex min-h-[70svh] w-full max-w-2xl flex-col justify-center px-5 py-14 text-center lg:px-8">
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-dorado">
        Ponte Veritas
      </p>
      <h1 className="mt-4 font-serif text-3xl leading-tight text-texto-oscuro sm:text-4xl">
        {welcomeContent.titulo}
      </h1>
      <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-texto-gris">
        {welcomeContent.intro}
      </p>
      <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-texto-gris/80 italic">
        {welcomeContent.nota}
      </p>
      <div className="mt-9">
        <button
          type="button"
          onClick={onStart}
          className="inline-flex items-center gap-2.5 rounded-(--radius-btn) bg-dorado px-7 py-3.5 text-sm font-semibold tracking-wide uppercase text-texto-oscuro transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-dorado-claro motion-reduce:hover:translate-y-0"
        >
          {welcomeContent.cta}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
