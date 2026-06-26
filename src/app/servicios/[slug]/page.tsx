import ServiceDetailClient from "@/components/servicios/ServiceDetailClient";

export function generateStaticParams() {
  return [
    { slug: "cctv" },
    { slug: "soporte-ti" },
    { slug: "servicio-tecnico" },
    { slug: "infraestructura" },
  ];
}

export default function ServiceDetailPage() {
  return <ServiceDetailClient />;
}
