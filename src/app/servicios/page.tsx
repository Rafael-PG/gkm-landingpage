"use client";

import { motion } from 'motion/react';
import { ShieldCheck, Cpu, Wrench, Server, CheckCircle2, PhoneCall } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Servicios() {
  const router = useRouter();

  const servicesList = [
    {
      id: 'cctv', path: '/servicios/cctv',
      title: 'CCTV Empresarial', subtitle: 'Sistemas de videovigilancia para seguridad y control operativo.',
      icon: ShieldCheck, color: 'from-red-500/10 to-brand-red/5',
      features: ['Cámaras IP de alta definición (4K, Ultra HD, Visión Nocturna a color).', 'Analítica de video avanzada por Inteligencia Artificial (Cruces de línea, merodeo).', 'Sistemas de reconocimiento facial y lectura de patentes (LPR/ANPR).']
    },
    {
      id: 'soporte-ti', path: '/servicios/soporte-ti',
      title: 'Soporte TI Empresarial', subtitle: 'Continuidad operativa, soporte remoto y presencial especializado.',
      icon: Cpu, color: 'from-blue-500/10 to-brand-red/5',
      features: ['Mesa de ayuda (Help Desk) disponible bajo esquemas 24/7.', 'Monitoreo remoto activo de servidores, enlaces y redes (RMM).', 'Soporte técnico presencial On-Site de respuesta rápida.']
    },
    {
      id: 'servicio-tecnico', path: '/servicios/servicio-tecnico',
      title: 'Servicio Técnico Autorizado', subtitle: 'Atención técnica multimarca especializada para equipos de hardware.',
      icon: Wrench, color: 'from-amber-500/10 to-brand-red/5',
      features: ['Reparación experta de laptops, desktops y estaciones de trabajo (Workstations).', 'Diagnóstico y reparación a nivel de componentes electrónicos (Placas base).', 'Mantenimiento correctivo y recalibración de terminales y lectores industriales.']
    },
    {
      id: 'infraestructura', path: '/servicios/infraestructura',
      title: 'Infraestructura Tecnológica', subtitle: 'Cableado estructurado, redes de fibra óptica y centros de datos.',
      icon: Server, color: 'from-purple-500/10 to-brand-red/5',
      features: ['Diseño e instalación de redes de Cableado Estructurado Cat 6, 6A y Cat 7.', 'Instalación, fusión y certificación de enlaces de fibra óptica monomodo/multimodo.', 'Organización, peinado e integración de Racks, Gabinetes y Data Centers.']
    }
  ];

  const handleContactService = (serviceName: string) => {
    localStorage.setItem('selected_service_interest', serviceName);
    router.push('/contacto');
  };

  return (
    <div className="bg-brand-light py-16 md:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-red font-bold text-xs tracking-widest uppercase bg-brand-red/10 px-3 py-1.5 rounded-full inline-block mb-3">Especialidades de Hardware y TI</span>
          <h1 className="font-display font-extrabold text-3xl md:text-5xl text-brand-dark tracking-tight mb-4">Nuestros Servicios Corporativos</h1>
          <p className="text-brand-gray text-base md:text-lg leading-relaxed font-light">Garantizamos la continuidad de sus operaciones tecnológicas a través de soluciones de soporte, seguridad y redes robustas y confiables.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 border border-gray-100 flex flex-col justify-between transition-all group overflow-hidden relative"
              >
                <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-br ${service.color} rounded-bl-full opacity-60 -mr-4 -mt-4 transition-transform group-hover:scale-110 duration-500`} />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-brand-red/10 text-brand-red rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-brand-dark tracking-tight mb-3 group-hover:text-brand-red transition-colors">{service.title}</h3>
                  <p className="text-brand-gray text-sm leading-relaxed mb-6 font-light">{service.subtitle}</p>
                  <ul className="space-y-2 mb-8">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative z-10 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <button onClick={() => { router.push(service.path); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-xs font-bold text-brand-red hover:text-brand-dark transition-colors cursor-pointer flex items-center gap-1 group/btn">
                    <span>Ver Detalles del Servicio</span>
                    <span className="transition-transform group-hover/btn:translate-x-1">→</span>
                  </button>
                  <button onClick={() => handleContactService(service.title)} className="text-xs font-semibold text-brand-gray hover:text-brand-red transition-colors cursor-pointer">Cotizar</button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="bg-brand-dark rounded-2xl p-8 md:p-12 text-white relative overflow-hidden border border-brand-gray/30 shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-red/10 rounded-full blur-3xl -mr-40 -mt-40 pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <h3 className="font-display font-extrabold text-2xl md:text-3xl tracking-tight">Infraestructura Tecnológica Diseñada bajo Estándares de Ingeniería</h3>
              <p className="text-gray-300 text-sm leading-relaxed max-w-2xl font-light">
                GKM Technology no solo implementa; certificamos cada punto de red, cada cámara de seguridad y garantizamos el correcto funcionamiento térmico y eléctrico en cada data center o mesa de ayuda de acuerdo a las directrices internacionales.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <span className="px-3 py-1 bg-brand-gray/30 rounded text-xs text-gray-300 font-mono">Norma ANSI/TIA-568-C</span>
                <span className="px-3 py-1 bg-brand-gray/30 rounded text-xs text-gray-300 font-mono">Certificación Fluke Networks</span>
                <span className="px-3 py-1 bg-brand-gray/30 rounded text-xs text-gray-300 font-mono">Laboratorio ESD de Alta Calidad</span>
              </div>
            </div>
            <div className="lg:col-span-4 text-center lg:text-right">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { router.push('/contacto'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="px-8 py-4 bg-brand-red hover:bg-brand-red/90 text-white rounded-xl font-semibold text-sm transition-all cursor-pointer shadow-xl shadow-brand-red/20 inline-flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Contactar Asesor Senior</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
