import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  i18n: {
    locales: ["en", "pt", "es"], // Defina os idiomas suportados
    defaultLocale: "en", // Define o idioma padrão
  },
};

export default nextConfig;
