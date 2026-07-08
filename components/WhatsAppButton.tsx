import { MessageCircle } from "lucide-react";
import { site } from "@/content/site";

/**
 * Botón directo a WhatsApp (https://wa.me/).
 * Hover: borde dorado + desplazamiento ligero del icono.
 */
export default function WhatsAppButton({
  label = "Escríbenos por WhatsApp",
  mensaje = "Hola, me gustaría comenzar una conversación con Ponte Veritas.",
  className = "",
}: {
  label?: string;
  mensaje?: string;
  className?: string;
}) {
  const href = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensaje)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2.5 rounded-(--radius-btn) border border-texto-claro/30 px-6 py-3.5 text-sm font-semibold tracking-wide uppercase text-texto-claro transition-colors duration-300 ease-in-out hover:border-dorado hover:text-dorado ${className}`}
    >
      <MessageCircle
        className="h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
        aria-hidden="true"
      />
      {label}
    </a>
  );
}
