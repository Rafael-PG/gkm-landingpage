import type { Metadata } from "next";

const siteUrl = "https://gkmtechnology.com.pe";

export const metadata: Metadata = {
  title: "Empresa de Infraestructura TI Corporativa en Perú",
  description:
    "GKM Technology: Aliado en infraestructura TI corporativa, soporte 24/7, CCTV y redes certificadas. Más de 14 años asegurando continuidad operativa de empresas multisede en Perú.",
  openGraph: {
    title: "GKM Technology | Empresa de Infraestructura TI Corporativa en Perú",
    description:
      "Conoce nuestra trayectoria, misión y valores. Más de 14 años en infraestructura TI corporativa, CCTV y soporte técnico certificado con cobertura nacional.",
    url: `${siteUrl}/nosotros/`,
    siteName: "GKM Technology",
    images: [
      {
        url: `${siteUrl}/images/logo/gkm-logo.webp`,
        width: 1023,
        height: 442,
        alt: "GKM Technology — Nosotros",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GKM Technology | Infraestructura TI Corporativa Perú",
    description:
      "Más de 14 años en infraestructura TI, soporte 24/7, CCTV y redes certificadas para empresas multisede en Perú.",
    images: [`${siteUrl}/images/logo/gkm-logo.webp`],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${siteUrl}/nosotros/`,
  },
  keywords: [
    "empresa de infraestructura TI corporativa Perú",
    "soporte TI corporativo multisede",
    "instalación CCTV corporativo",
    "certificación Fluke Networks Perú",
    "cableado estructurado certificado",
    "centro logístico TI Puente Piedra",
    "servicio técnico autorizado Lima",
    "GKM Technology",
  ],
};

export default function NosotrosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
