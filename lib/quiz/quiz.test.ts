import { describe, it, expect } from "vitest";
import type { Answers, ProfileId } from "@/content/quiz/types";
import { calculateScores } from "./calculateScores";
import { resolveTie } from "./resolveTie";
import { calculateSecondaryProfile } from "./calculateSecondaryProfile";
import { calculateProfessionalGuidance } from "./calculateProfessionalGuidance";
import { calculateDynamicCTA } from "./calculateDynamicCTA";
import { computeResult } from "./computeResult";

/** Construye respuestas con las 6 preguntas puntuadas (A–E). */
function scored(
  p: Record<"P1" | "P2" | "P3" | "P4" | "P7" | "P11", "A" | "B" | "C" | "D" | "E">
): Answers {
  return { P1: p.P1, P2: p.P2, P3: p.P3, P4: p.P4, P7: p.P7, P11: p.P11 };
}

const all = (opt: "A" | "B" | "C" | "D" | "E") =>
  scored({ P1: opt, P2: opt, P3: opt, P4: opt, P7: opt, P11: opt });

describe("calculateScores + resolveTie — ganador de cada perfil", () => {
  const cases: Array<[string, "A" | "B" | "C" | "D" | "E", ProfileId]> = [
    ["1. CLARITY", "A", "CLARITY"],
    ["2. RELATIONSHIPS", "B", "RELATIONSHIPS"],
    ["3. GROWTH", "C", "GROWTH"],
    ["4. LEADERSHIP", "D", "LEADERSHIP"],
    ["5. REFLECTION", "E", "REFLECTION"],
  ];
  it.each(cases)("%s", (_name, opt, expected) => {
    const answers = all(opt);
    const scores = calculateScores(answers);
    expect(scores[expected]).toBe(15); // 3+2+3+2+2+3
    expect(resolveTie(scores, answers)).toBe(expected);
  });
});

describe("resolveTie — desempates", () => {
  it("6. empate resuelto por P11", () => {
    // CLARITY=6 (P3,P11) vs LEADERSHIP=6 (P2,P4,P7); P11=A → CLARITY
    const answers = scored({ P1: "E", P2: "D", P3: "A", P4: "D", P7: "D", P11: "A" });
    const scores = calculateScores(answers);
    expect(scores.CLARITY).toBe(6);
    expect(scores.LEADERSHIP).toBe(6);
    expect(resolveTie(scores, answers)).toBe("CLARITY");
  });

  it("7. empate que continúa y se resuelve por P3", () => {
    // CLARITY=6 (P1,P3) vs LEADERSHIP=6 (P2,P4,P7); P11=E (externo) → P3=A → CLARITY
    const answers = scored({ P1: "A", P2: "D", P3: "A", P4: "D", P7: "D", P11: "E" });
    const scores = calculateScores(answers);
    expect(scores.CLARITY).toBe(6);
    expect(scores.LEADERSHIP).toBe(6);
    expect(resolveTie(scores, answers)).toBe("CLARITY");
  });

  it("8. empate que se resuelve por P1 (rama de la función)", () => {
    // P1 es inalcanzable en un empate real de dos perfiles (paridad), por lo que
    // se prueba la rama con un empate artificial: P11 y P3 apuntan fuera del
    // conjunto empatado y P1 (=A, CLARITY) decide.
    const scores: Record<ProfileId, number> = {
      CLARITY: 6, RELATIONSHIPS: 0, GROWTH: 0, LEADERSHIP: 6, REFLECTION: 3,
    };
    const answers: Answers = { P11: "E", P3: "C", P1: "A" };
    expect(resolveTie(scores, answers)).toBe("CLARITY");
  });

  it("fallback determinista final cuando nada resuelve el empate", () => {
    const scores: Record<ProfileId, number> = {
      CLARITY: 6, RELATIONSHIPS: 6, GROWTH: 0, LEADERSHIP: 0, REFLECTION: 0,
    };
    // Sin respuestas de desempate útiles → gana el primero por PROFILE_ORDER.
    expect(resolveTie(scores, {})).toBe("CLARITY");
  });
});

describe("calculateSecondaryProfile — perfil complementario", () => {
  it("9. complementario mostrado (borde secondary = primary - 3)", () => {
    const answers = scored({ P1: "A", P2: "A", P3: "A", P4: "E", P7: "B", P11: "B" });
    const scores = calculateScores(answers);
    // CLARITY=8, RELATIONSHIPS=5, REFLECTION=2
    expect(scores.CLARITY).toBe(8);
    expect(scores.RELATIONSHIPS).toBe(5);
    const { secondaryProfile, showSecondaryProfile } = calculateSecondaryProfile(scores, "CLARITY");
    expect(secondaryProfile).toBe("RELATIONSHIPS");
    expect(showSecondaryProfile).toBe(true);
  });

  it("10. complementario NO mostrado", () => {
    const answers = scored({ P1: "A", P2: "A", P3: "A", P4: "B", P7: "B", P11: "A" });
    const scores = calculateScores(answers);
    // CLARITY=11, RELATIONSHIPS=4 → 4 < 11-3
    expect(scores.CLARITY).toBe(11);
    const { secondaryProfile, showSecondaryProfile } = calculateSecondaryProfile(scores, "CLARITY");
    expect(secondaryProfile).toBe("RELATIONSHIPS");
    expect(showSecondaryProfile).toBe(false);
  });
});

describe("calculateProfessionalGuidance — orientación profesional", () => {
  it("11. activada (P5=ALMOST_EVERY_DAY y P6=NONE)", () => {
    expect(calculateProfessionalGuidance({ P5: "ALMOST_EVERY_DAY", P6: "NONE" })).toBe(true);
    expect(calculateProfessionalGuidance({ P5: "ALMOST_EVERY_DAY", P6: "INSUFFICIENT" })).toBe(true);
  });

  it("12. NO activada", () => {
    expect(calculateProfessionalGuidance({ P5: "SOME_DAYS", P6: "NONE" })).toBe(false);
    expect(calculateProfessionalGuidance({ P5: "ALMOST_EVERY_DAY", P6: "EFFECTIVE" })).toBe(false);
    expect(calculateProfessionalGuidance({})).toBe(false);
  });
});

describe("calculateDynamicCTA — CTA dinámico", () => {
  it("13. REQUEST_CONVERSATION", () => {
    expect(calculateDynamicCTA({ P12: "REQUEST_CONVERSATION" })).toBe("REQUEST_CONVERSATION");
  });
  it("14. EXPLORE_SUPPORT", () => {
    expect(calculateDynamicCTA({ P12: "EXPLORE_SUPPORT" })).toBe("EXPLORE_SUPPORT");
  });
  it("15. LEARN_COACHING", () => {
    expect(calculateDynamicCTA({ P12: "LEARN_COACHING" })).toBe("LEARN_COACHING");
  });
  it("16. SELF_REFLECTION", () => {
    expect(calculateDynamicCTA({ P12: "SELF_REFLECTION" })).toBe("SELF_REFLECTION");
  });
  it("sin P12 → null", () => {
    expect(calculateDynamicCTA({})).toBeNull();
  });
});

describe("computeResult — recálculo y restauración", () => {
  it("17. cambiar una respuesta previa recalcula el resultado", () => {
    const before = computeResult(all("A"));
    expect(before.primaryProfile).toBe("CLARITY");
    // El visitante vuelve atrás y cambia todas sus respuestas a B.
    const after = computeResult(all("B"));
    expect(after.primaryProfile).toBe("RELATIONSHIPS");
    // No hay acumulación: el resultado depende solo del estado actual.
    expect(after.scores.CLARITY).toBe(0);
  });

  it("18. restaurar respuestas produce el mismo resultado (idempotente)", () => {
    const answers: Answers = {
      ...all("C"),
      P5: "SOME_DAYS", P6: "PARTIAL", P8: "MEDIUM", P9: "C", P10: "HIGH", P12: "EXPLORE_SUPPORT",
    };
    const first = computeResult(answers);
    const restored = computeResult({ ...answers });
    expect(restored).toEqual(first);
    expect(restored.primaryProfile).toBe("GROWTH");
    expect(restored.nextStepIntent).toBe("EXPLORE_SUPPORT");
    expect(restored.coachingUnderstanding).toBe("C");
  });

  it("no expone datos de bienestar en cálculo de perfil pero los conserva en el objeto", () => {
    const r = computeResult({ ...all("A"), P5: "ALMOST_EVERY_DAY", P6: "NONE" });
    expect(r.showProfessionalGuidance).toBe(true);
    expect(r.pressureLevel).toBe("ALMOST_EVERY_DAY");
  });
});
