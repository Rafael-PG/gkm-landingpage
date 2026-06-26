import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "GKM Technology | Servicios de Hardware y TI Corporativos",
  description:
    "GKM Technology S.A.C. - Líderes en diseño, instalación y mantenimiento de infraestructura tecnológica, CCTV, soporte TI y servicio técnico autorizado a nivel nacional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full">
      <body className="min-h-full flex flex-col bg-brand-light selection:bg-brand-red selection:text-white">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
