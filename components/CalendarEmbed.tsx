import { CalendarDays } from "lucide-react";

/**
 * Placeholder para el embed de calendario (Calendly o similar).
 * Cuando exista la cuenta, pasar calendarUrl y el iframe se renderiza solo.
 */
export default function CalendarEmbed({ calendarUrl }: { calendarUrl?: string }) {
  if (calendarUrl) {
    return (
      <iframe
        src={calendarUrl}
        title="Agenda tu conversación en el calendario"
        className="h-[560px] w-full rounded-(--radius-card) border border-dorado-tenue bg-white"
      />
    );
  }
  return (
    <div className="flex h-full min-h-72 flex-col items-center justify-center rounded-(--radius-card) border border-dashed border-dorado/50 bg-blanco-calido p-8 text-center">
      <CalendarDays className="h-10 w-10 text-dorado" aria-hidden="true" />
      <h3 className="mt-4 font-serif text-xl text-texto-oscuro">Calendario en línea</h3>
      <p className="mt-2 max-w-xs text-sm leading-relaxed text-texto-gris">
        Muy pronto podrás elegir directamente aquí el día y la hora de tu conversación.
        Mientras tanto, escríbenos por el formulario o por WhatsApp.
      </p>
    </div>
  );
}
