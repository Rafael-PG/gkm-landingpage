import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portal B2B",
  description:
    "Portal B2B de clientes GKM Technology. Accede a tickets de soporte TI, proyectos de infraestructura tecnológica, certificaciones Fluke Networks y estado de tus equipos de hardware.",
};

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
