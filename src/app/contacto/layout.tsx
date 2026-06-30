import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Comunícate con GKM Technology para soporte técnico empresarial 24/7, cotizaciones de CCTV, servicio técnico autorizado o consultoría en infraestructura tecnológica y cableado estructurado en Perú.",
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
