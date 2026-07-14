import type { Metadata } from "next";
import QuizFlow from "@/components/quiz/QuizFlow";

export const metadata: Metadata = {
  title: "Descubre tu momento actual",
  description:
    "Un espacio breve de reflexión personal para comprender tu momento actual y descubrir posibles caminos de acompañamiento. No es una evaluación clínica.",
  openGraph: {
    title: "Descubre tu momento actual · Ponte Veritas",
    description:
      "Una experiencia de reflexión personal para comprender tu momento y descubrir cómo podemos acompañarte.",
  },
};

export default function DescubreTuMomentoPage() {
  return <QuizFlow />;
}
