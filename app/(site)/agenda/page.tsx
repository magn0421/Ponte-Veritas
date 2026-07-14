import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CalendarEmbed from "@/components/CalendarEmbed";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Agenda una conversación",
  description:
    "Agenda tu primera conversación con Ponte Veritas: escríbenos por el formulario, por WhatsApp o elige un horario en el calendario.",
  openGraph: {
    title: "Agenda una conversación · Ponte Veritas",
    description: "Tu transformación puede comenzar hoy, con una conversación.",
  },
};

export default function AgendaPage() {
  return (
    <>
      <Hero
        variant="short"
        titulo="Agenda una conversación."
        subtitulo="La primera conversación no tiene costo ni compromiso: es un espacio para escucharte, comprender tu momento y decidir juntos el siguiente paso. Elige la vía que prefieras."
        imagen="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&w=2400&q=80"
        imagenAlt="Atardecer dorado sobre un lago en calma"
      />

      <section className="bg-crema py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-8 px-5 lg:grid-cols-[5fr_4fr] lg:px-8">
          {/* Vía 1: formulario */}
          <AnimateOnScroll direction="up">
            <div className="rounded-(--radius-card) border border-dorado-tenue bg-blanco-calido p-7 sm:p-9">
              <h2 className="font-serif text-2xl text-texto-oscuro">Escríbenos</h2>
              <p className="mt-2 mb-7 text-sm leading-relaxed text-texto-gris">
                Cuéntanos qué te trae aquí y te responderemos en menos de 24 horas hábiles.
              </p>
              <ContactForm />
            </div>
          </AnimateOnScroll>

          <div className="flex flex-col gap-8">
            {/* Vía 2: WhatsApp destacado */}
            <AnimateOnScroll direction="up" delay={120}>
              <div className="rounded-(--radius-card) bg-negro-base p-7 sm:p-9">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-dorado">
                  <MessageCircle className="h-5 w-5 text-dorado" aria-hidden="true" />
                </span>
                <h2 className="mt-5 font-serif text-2xl text-texto-claro">
                  ¿Prefieres algo más directo?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-texto-claro/70">
                  Escríbenos por WhatsApp al {site.telefono} y coordinamos tu conversación
                  en pocos mensajes.
                </p>
                <WhatsAppButton className="mt-6 w-full" />
              </div>
            </AnimateOnScroll>

            {/* Vía 3: calendario (placeholder listo para calendarUrl) */}
            <AnimateOnScroll direction="up" delay={240}>
              <CalendarEmbed />
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
