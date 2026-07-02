"use client";

import { ShieldCheck, Cpu, Wrench, Server } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { PageHeroIllustration } from '@/components/layout/PageHero';
import ServicesHeroSVG from '@/components/servicios/ServicesHeroSVG';
import ServiciosStats from '@/components/servicios/ServiciosStats';
import ServiciosGrid from '@/components/servicios/ServiciosGrid';
import TimelineSection from '@/components/home/TimelineSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ServiciosFaq from '@/components/servicios/ServiciosFaq';
import ServiciosCta from '@/components/servicios/ServiciosCta';

export default function Servicios() {
  const router = useRouter();

  const servicesList = [
    {
      id: 'cctv', path: '/servicios/cctv',
      title: 'CCTV Empresarial', subtitle: 'Sistemas de videovigilancia para seguridad y control operativo.',
      icon: ShieldCheck, stripColor: 'from-red-600 to-red-400', hoverColor: 'bg-gradient-to-br from-red-600 to-red-500',
      features: ['Cámaras IP de alta definición (4K, Ultra HD, Visión Nocturna a color).', 'Analítica de video avanzada por Inteligencia Artificial (Cruces de línea, merodeo).', 'Sistemas de reconocimiento facial y lectura de patentes (LPR/ANPR).']
    },
    {
      id: 'soporte-ti', path: '/servicios/soporte-ti',
      title: 'Soporte TI Empresarial', subtitle: 'Continuidad operativa, soporte remoto y presencial especializado.',
      icon: Cpu, stripColor: 'from-blue-600 to-blue-400', hoverColor: 'bg-gradient-to-br from-blue-600 to-blue-500',
      features: ['Mesa de ayuda (Help Desk) disponible bajo esquemas 24/7.', 'Monitoreo remoto activo de servidores, enlaces y redes (RMM).', 'Soporte técnico presencial On-Site de respuesta rápida.']
    },
    {
      id: 'servicio-tecnico', path: '/servicios/servicio-tecnico',
      title: 'Servicio Técnico Autorizado', subtitle: 'Atención técnica multimarca especializada para equipos de hardware.',
      icon: Wrench, stripColor: 'from-amber-600 to-amber-400', hoverColor: 'bg-gradient-to-br from-amber-600 to-amber-500',
      features: ['Reparación experta de laptops, desktops y estaciones de trabajo (Workstations).', 'Diagnóstico y reparación a nivel de componentes electrónicos (Placas base).', 'Mantenimiento correctivo y recalibración de terminales y lectores industriales.']
    },
    {
      id: 'infraestructura', path: '/servicios/infraestructura',
      title: 'Infraestructura Tecnológica', subtitle: 'Cableado estructurado, redes de fibra óptica y centros de datos.',
      icon: Server, stripColor: 'from-purple-600 to-purple-400', hoverColor: 'bg-gradient-to-br from-purple-600 to-purple-500',
      features: ['Diseño e instalación de redes de Cableado Estructurado Cat 6, 6A y Cat 7.', 'Instalación, fusión y certificación de enlaces de fibra óptica monomodo/multimodo.', 'Organización, peinado e integración de Racks, Gabinetes y Data Centers.']
    }
  ];

  return (
    <>
      <PageHeroIllustration
        kicker="Especialidades de Hardware y TI"
        title={<>Nuestros <span className="text-brand-red">Servicios</span> Corporativos</>}
        description="Garantizamos la continuidad de sus operaciones tecnológicas a través de soluciones de soporte, seguridad y redes robustas y confiables. Diseñamos, instalamos y mantenemos infraestructura TI para empresas de todos los sectores a nivel nacional."
        features={['4 Líneas de Negocio', 'Cobertura Nacional', 'Soporte 24/7']}
        illustration={<ServicesHeroSVG />}
      />

      <ServiciosStats />
      <ServiciosGrid services={servicesList} onNavigate={(path) => { router.push(path); window.scrollTo({ top: 0, behavior: 'smooth' }); }} onContact={(title) => { localStorage.setItem('selected_service_interest', title); router.push('/contacto'); }} />
      <TimelineSection />
      <TestimonialsSection />
      <ServiciosFaq />
      <ServiciosCta />
    </>
  );
}
