import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "outline" | "outline-dark";
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-(--radius-btn) px-6 py-3 text-sm font-semibold tracking-wide uppercase transition-all duration-300 ease-in-out";

const variants = {
  /* CTA principal: relleno dorado, texto oscuro */
  primary:
    "bg-dorado text-texto-oscuro hover:bg-dorado-claro hover:-translate-y-0.5 hover:shadow-lg hover:shadow-dorado-tenue",
  /* Secundario: outline dorado sobre transparente (para fondos oscuros) */
  outline:
    "border border-dorado text-dorado hover:bg-dorado-tenue hover:border-dorado-claro hover:text-dorado-claro",
  /* Outline para fondos claros */
  "outline-dark":
    "border border-dorado text-texto-oscuro hover:bg-dorado-tenue hover:border-dorado-claro",
};

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
  type = "button",
  onClick,
  disabled,
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${cls} disabled:opacity-60`}>
      {children}
    </button>
  );
}
