import type { Metadata } from "next";
import { Landmark, CreditCard, Smartphone, ShieldCheck } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Hero from "@/components/Hero";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Pagos",
  description:
    "Realiza el pago de tu proceso de acompañamiento con Ponte Veritas de forma segura: transferencia bancaria, PSE, tarjeta o billeteras digitales.",
  openGraph: {
    title: "Pagos · Ponte Veritas",
    description: "Formas de pago seguras para tu proceso de acompañamiento.",
  },
};

// Métodos de pago — reemplaza los datos entre comillas por los tuyos reales.
const metodos = [
  {
    icon: Landmark,
    titulo: "Transferencia bancaria",
    descripcion:
      "Realiza una transferencia o consignación a nuestra cuenta y envíanos el comprobante por WhatsApp.",
    detalles: [
      "Banco: (nombre del banco)",
      "Tipo de cuenta: Ahorros",
      "Número: 000-000000-00",
      "Titular: Ponte Veritas S.A.S.",
      "NIT: 000.000.000-0",
    ],
  },
  {
    icon: CreditCard,
    titulo: "Tarjeta / PSE",
    descripcion:
      "Paga con tarjeta de crédito, débito o desde tu cuenta bancaria a través de PSE con el enlace de pago que te compartimos.",
    detalles: [
      "Visa, Mastercard, American Express",
      "PSE (todos los bancos)",
      "Enlace de pago seguro por correo o WhatsApp",
    ],
  },
  {
    icon: Smartphone,
    titulo: "Billeteras digitales",
    descripcion:
      "También puedes pagar de forma rápida desde tu celular con las principales billeteras digitales.",
    detalles: ["Nequi: 300 000 0000", "Daviplata: 300 000 0000"],
  },
];

export default function PagosPage() {
  return (
    <>
      <Hero
        variant="short"
        titulo="Realiza tu pago."
        subtitulo="Elige la forma de pago que más te convenga. Todos nuestros medios son seguros y, una vez confirmado tu pago, coordinamos el inicio de tu proceso de acompañamiento."
        imagen="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=2400&q=80"
        imagenAlt="Escritorio sereno con una taza de café y un cuaderno"
      />

      <section className="bg-crema py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {metodos.map((metodo, i) => (
              <AnimateOnScroll key={metodo.titulo} direction="up" delay={i * 120}>
                <div className="flex h-full flex-col rounded-(--radius-card) border border-dorado-tenue bg-blanco-calido p-7 sm:p-9">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-dorado">
                    <metodo.icon className="h-5 w-5 text-dorado" aria-hidden="true" />
                  </span>
                  <h2 className="mt-5 font-serif text-2xl text-texto-oscuro">
                    {metodo.titulo}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-texto-gris">
                    {metodo.descripcion}
                  </p>
                  <ul className="mt-5 space-y-1.5 border-t border-dorado-tenue pt-5 text-sm text-texto-oscuro">
                    {metodo.detalles.map((detalle) => (
                      <li key={detalle}>{detalle}</li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Confirmación de pago por WhatsApp */}
          <AnimateOnScroll direction="up" delay={120}>
            <div className="mt-8 rounded-(--radius-card) bg-negro-base p-7 sm:p-9">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-dorado">
                <ShieldCheck className="h-5 w-5 text-dorado" aria-hidden="true" />
              </span>
              <h2 className="mt-5 font-serif text-2xl text-texto-claro">
                Confirma tu pago
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-texto-claro/70">
                Una vez realices tu pago, envíanos el comprobante por WhatsApp al{" "}
                {site.telefono} indicando tu nombre completo. Confirmaremos la
                recepción y coordinaremos contigo el siguiente paso de tu proceso.
              </p>
              <WhatsAppButton className="mt-6" />
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
