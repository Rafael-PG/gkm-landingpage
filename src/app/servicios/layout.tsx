import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios Corporativos",
  description:
    "Soluciones integrales de hardware y TI para empresas en Perú: CCTV empresarial, soporte TI 24/7, servicio técnico autorizado multimarca, cableado estructurado certificado Fluke Networks e infraestructura tecnológica con cobertura nacional.",
};

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
