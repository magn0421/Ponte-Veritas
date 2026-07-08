import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // En dev el optimizador puede agotar su timeout descargando de Unsplash;
    // el navegador carga las imágenes directo. En producción sí se optimizan.
    unoptimized: process.env.NODE_ENV === "development",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
