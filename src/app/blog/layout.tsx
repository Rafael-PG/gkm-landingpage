import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Tecnológico",
  description:
    "Artículos técnicos sobre infraestructura de redes, cableado estructurado certificado, CCTV inteligente, soporte TI 24/7, servicio técnico de hardware y mejores prácticas para la continuidad operativa de tu empresa en Perú.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
