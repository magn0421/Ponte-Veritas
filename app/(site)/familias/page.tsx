import type { Metadata } from "next";
import AudiencePage from "@/components/AudiencePage";
import { familiasContent } from "@/content/familias";

export const metadata: Metadata = {
  title: "Familias",
  description:
    "Acompañamos a familias y parejas a fortalecer la comunicación, transformar los conflictos y construir relaciones basadas en la comprensión y el respeto.",
  openGraph: {
    title: "Familias · Ponte Veritas",
    description:
      "Fortalece la comunicación, transforma los conflictos y construye relaciones basadas en la comprensión y el respeto.",
  },
};

export default function FamiliasPage() {
  return <AudiencePage content={familiasContent} />;
}
