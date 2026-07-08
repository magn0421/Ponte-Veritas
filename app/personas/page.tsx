import type { Metadata } from "next";
import AudiencePage from "@/components/AudiencePage";
import { personasContent } from "@/content/personas";

export const metadata: Metadata = {
  title: "Personas",
  description:
    "Acompañamiento personal para encontrar claridad, fortalecer tu bienestar y construir una vida más consciente y alineada con tu propósito.",
  openGraph: {
    title: "Personas · Ponte Veritas",
    description:
      "Acompañamiento personal para encontrar claridad, fortalecer tu bienestar y construir una vida más consciente.",
  },
};

export default function PersonasPage() {
  return <AudiencePage content={personasContent} />;
}
