import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import Logo from "./Logo";
import AnimateOnScroll from "./AnimateOnScroll";
import { nav, site } from "@/content/site";

const recursosLinks = [
  { label: "Artículos", href: "/recursos?tipo=Artículo" },
  { label: "Videos", href: "/recursos?tipo=Video" },
  { label: "Guías", href: "/recursos?tipo=Guía" },
  { label: "Podcast", href: "/recursos?tipo=Podcast" },
];

const socialLinks = [
  { label: "Instagram", href: site.redes.instagram, Icon: Instagram },
  { label: "LinkedIn", href: site.redes.linkedin, Icon: Linkedin },
  { label: "YouTube", href: site.redes.youtube, Icon: Youtube },
  { label: "Facebook", href: site.redes.facebook, Icon: Facebook },
];

export default function Footer() {
  return (
    <footer className="bg-negro-base text-texto-claro">
      <AnimateOnScroll direction="fade" duration={900}>
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-texto-claro/60">
              {site.tagline}.
            </p>
          </div>

          <nav aria-label="Navegación del pie de página">
            <h2 className="mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-dorado">
              Navegación
            </h2>
            <ul className="space-y-2.5 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-texto-claro/70 transition-colors duration-300 hover:text-dorado"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/agenda"
                  className="text-texto-claro/70 transition-colors duration-300 hover:text-dorado"
                >
                  Agenda una conversación
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Recursos">
            <h2 className="mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-dorado">
              Recursos
            </h2>
            <ul className="space-y-2.5 text-sm">
              {recursosLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-texto-claro/70 transition-colors duration-300 hover:text-dorado"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-dorado">
              Contacto
            </h2>
            <ul className="space-y-3 text-sm text-texto-claro/70">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2.5 transition-colors duration-300 hover:text-dorado"
                >
                  <Mail className="h-4 w-4 text-dorado" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 transition-colors duration-300 hover:text-dorado"
                >
                  <Phone className="h-4 w-4 text-dorado" aria-hidden="true" />
                  {site.telefono}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-dorado" aria-hidden="true" />
                {site.ciudad}
              </li>
            </ul>
            <div className="mt-5 flex gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-dorado-tenue text-texto-claro/70 transition-colors duration-300 hover:border-dorado hover:text-dorado"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-xs text-texto-claro/40 sm:flex-row lg:px-8">
            <p>© {new Date().getFullYear()} Ponte Veritas. Todos los derechos reservados.</p>
            <p>
              <Link href="/" className="transition-colors duration-300 hover:text-dorado">
                Política de privacidad
              </Link>
              <span className="mx-2">·</span>
              <Link href="/" className="transition-colors duration-300 hover:text-dorado">
                Términos y condiciones
              </Link>
            </p>
          </div>
        </div>
      </AnimateOnScroll>
    </footer>
  );
}
