import type { Metadata } from "next";
import { Montserrat, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

const siteUrl = "https://gkmtechnology.com.pe";

const logoUrl = `${siteUrl}/images/logo/gkm-logo.webp`;

export const metadata: Metadata = {
  title: {
    default: "GKM Technology | Servicios TI Corporativos en Perú",
    template: "%s | GKM Technology",
  },
  description:
    "GKM Technology S.A.C. - Líderes en diseño, instalación y mantenimiento de infraestructura tecnológica, CCTV, soporte TI 24/7, servicio técnico autorizado y cableado estructurado certificado a nivel nacional en Perú.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "es_PE",
    siteName: "GKM Technology",
    title: "GKM Technology | Servicios TI Corporativos en Perú",
    description:
      "Líderes en diseño, instalación y mantenimiento de infraestructura tecnológica, CCTV, soporte TI 24/7, servicio técnico autorizado y cableado estructurado certificado a nivel nacional en Perú.",
    images: [{ url: logoUrl, width: 1023, height: 442, alt: "GKM Technology" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GKM Technology | Servicios TI Corporativos en Perú",
    description:
      "Líderes en diseño, instalación y mantenimiento de infraestructura tecnológica, CCTV, soporte TI 24/7, servicio técnico autorizado y cableado estructurado certificado a nivel nacional en Perú.",
    images: [logoUrl],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "GKM Technology S.A.C.",
  url: siteUrl,
  logo: logoUrl,
  image: logoUrl,
  description:
    "Líderes en diseño, instalación y mantenimiento de infraestructura tecnológica, CCTV, soporte TI y servicio técnico autorizado a nivel nacional.",
  telephone: "0800-80142",
  email: "atencionalcliente@gkmtechnology.com.pe",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Los Olivos",
    addressRegion: "Lima",
    addressCountry: "PE",
    streetAddress: "Av. Santa Elvira E Mz. B lote 8",
  },
  areaServed: "Perú",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de TI y Hardware",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "CCTV Empresarial" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Soporte TI 24/7" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Servicio Técnico Autorizado" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Infraestructura Tecnológica" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${spaceGrotesk.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-brand-dark selection:bg-brand-red selection:text-white">
        <link rel="preload" href="/images/hero/slide-cctv.webp" as="image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
