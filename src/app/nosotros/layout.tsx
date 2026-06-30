import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "GKM Technology S.A.C. - Conoce nuestra trayectoria, misión, visión y pilares operativos. Más de 14 años de experiencia en infraestructura tecnológica, CCTV, soporte TI 24/7 y servicio técnico autorizado con cobertura nacional en Perú.",
};

export default function NosotrosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
