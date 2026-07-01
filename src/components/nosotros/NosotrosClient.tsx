"use client";

import dynamic from 'next/dynamic';
import { Target, Eye, ShieldCheck, Award, Heart, Building2, Handshake, Warehouse, TrendingUp } from 'lucide-react';

const NosotrosHero = dynamic(() => import('@/components/nosotros/NosotrosHero'), {
  loading: () => (
    <section className="relative pt-20 pb-8 md:pt-28 md:pb-12 -mt-20 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="h-10 w-48 bg-white/5 rounded animate-pulse mb-4" />
        <div className="h-16 w-96 bg-white/5 rounded animate-pulse mb-3" />
        <div className="h-6 w-80 bg-white/5 rounded animate-pulse" />
      </div>
    </section>
  ),
});

const ExcelenciaSection = dynamic(() => import('@/components/home/ExcelenciaSection'), {
  ssr: false,
  loading: () => <div className="h-[600px] bg-brand-light animate-pulse" />,
});

const TimelineSection = dynamic(() => import('@/components/nosotros/TimelineSection'), {
  ssr: false,
  loading: () => <div className="h-[500px] bg-brand-dark animate-pulse" />,
});

const MisionValoresSection = dynamic(() => import('@/components/nosotros/MisionValoresSection'), {
  ssr: false,
  loading: () => <div className="h-[600px] bg-[#F8F9F9] animate-pulse" />,
});

const SucursalesSection = dynamic(() => import('@/components/home/SucursalesSection'), {
  ssr: false,
  loading: () => <div className="h-[500px] bg-brand-light animate-pulse" />,
});

const TestimonialsSection = dynamic(() => import('@/components/home/TestimonialsSection'), {
  ssr: false,
  loading: () => <div className="h-[400px] bg-brand-light animate-pulse" />,
});

const ContactSection = dynamic(() => import('@/components/home/ContactSection'), {
  ssr: false,
  loading: () => <div className="h-[600px] bg-brand-light animate-pulse" />,
});

const stats = [
  { value: 14, suffix: '+', label: 'Años de Experiencia' },
  { value: 340, suffix: '+', label: 'Contratos Corporativos' },
  { value: 100, suffix: '%', label: 'SLA de Cumplimiento' },
  { label: '1,100 m² de Centro Logístico', value: null as number | null, suffix: '' },
];

const milestones = [
  { year: '2012', icon: Building2, title: 'Fundación', desc: 'Nace GKM Technology con la visión de transformar el soporte TI empresarial en Perú, apostando por la calidad y la confianza como pilares fundamentales.' },
  { year: '2015', icon: Handshake, title: 'Primeros Grandes Clientes', desc: 'Incorporamos cadenas de retail multisede a nuestra cartera corporativa, consolidando nuestra propuesta de valor en el sector empresarial.' },
  { year: '2020', icon: Warehouse, title: 'Centro Logístico 1,100 m²', desc: 'Inauguramos nuestra base operativa en Puente Piedra, un centro de almacenamiento general, bobinas de red, servidores y repuestos oficiales.' },
  { year: '2024', icon: TrendingUp, title: '+340 Contratos Corporativos', desc: 'Alcanzamos cobertura nacional con presencia en las principales ciudades del país, atendiendo a corporaciones de diversos sectores.' },
];

const misVis = [
  {
    icon: Target,
    title: 'Nuestra Misión',
    desc: 'Suministrar, mantener y certificar la infraestructura de hardware, videovigilancia CCTV y soporte técnico informático de alta confiabilidad, maximizando el tiempo de actividad de nuestros clientes corporativos.',
  },
  {
    icon: Eye,
    title: 'Nuestra Visión',
    desc: 'Ser reconocidos para el 2030 como la principal corporación de ingeniería de hardware y redes de conectividad del país, famosa por la excelencia técnica, transparencia operacional y tiempos de respuesta impecables.',
  },
];

const valores = [
  { icon: ShieldCheck, title: 'Confiabilidad', desc: 'Garantizamos que cada proyecto cumpla con rigurosos protocolos de testing físico y estándares de calidad certificados.' },
  { icon: Award, title: 'Certificación', desc: 'Todos nuestros puntos e infraestructura son certificados por Fluke Networks, asegurando redes que funcionan a plena capacidad.' },
  { icon: Heart, title: 'Vocación de Servicio', desc: 'Atendemos cada reporte técnico con la urgencia y precisión que un incidente corporativo merece, sin rodeos ni esperas.' },
];

export default function NosotrosClient() {
  return (
    <div className="overflow-x-clip">
      <NosotrosHero stats={stats} />
      <ExcelenciaSection />
      <TimelineSection milestones={milestones} />
      <MisionValoresSection misVis={misVis} valores={valores} />
      <SucursalesSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
