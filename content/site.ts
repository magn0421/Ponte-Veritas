export const site = {
  nombre: "Ponte Veritas",
  tagline: "Transformando conversaciones, transformando vidas",
  descripcion:
    "Acompañamos a personas, familias y organizaciones a construir nuevas posibilidades, fortalecer sus relaciones y transformar la manera en que viven, se relacionan y lideran.",
  url: "https://www.ponteveritas.com",
  email: "hola@ponteveritas.com",
  telefono: "+57 300 123 4567",
  whatsapp: "573001234567", // para https://wa.me/
  ciudad: "Bogotá, Colombia",
  redes: {
    instagram: "https://instagram.com/ponteveritas",
    linkedin: "https://linkedin.com/company/ponteveritas",
    youtube: "https://youtube.com/@ponteveritas",
    facebook: "https://facebook.com/ponteveritas",
  },
  /** ID del video institucional de YouTube (placeholder — reemplazar) */
  youtubeVideoId: "dQw4w9WgXcQ",
} as const;

export const nav = [
  { label: "Personas", href: "/personas" },
  { label: "Familias", href: "/familias" },
  { label: "Organizaciones", href: "/organizaciones" },
  { label: "Nuestra esencia", href: "/nuestra-esencia" },
  { label: "Recursos", href: "/recursos" },
  { label: "Pagos", href: "/pagos" },
] as const;
