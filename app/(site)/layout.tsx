import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Layout de las páginas públicas del sitio (Home, Personas, Recursos, etc.).
 * Aporta el encabezado y el pie de página completos. Las rutas del grupo
 * (site) conservan sus URLs: los paréntesis no aparecen en la dirección.
 */
export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
