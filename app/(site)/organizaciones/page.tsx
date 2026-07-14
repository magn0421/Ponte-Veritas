import type { Metadata } from "next";
import AudiencePage from "@/components/AudiencePage";
import { organizacionesContent } from "@/content/organizaciones";

export const metadata: Metadata = {
  title: "Organizaciones",
  description:
    "Desarrolla líderes conscientes, fortalece los equipos y construye culturas capaces de evolucionar: coaching ejecutivo, programas de liderazgo e intervención de equipos.",
  openGraph: {
    title: "Organizaciones · Ponte Veritas",
    description:
      "Liderazgo consciente, equipos que confían y culturas alineadas con la estrategia.",
  },
};

export default function OrganizacionesPage() {
  return <AudiencePage content={organizacionesContent} />;
}
