"use client";

import { motion } from 'motion/react';
import { ShieldCheck, Cpu, Wrench, Server, CheckCircle2, Clock, Award, Users } from 'lucide-react';
import { useRouter, useParams } from 'next/navigation';

const servicesList = [
  {
    id: 'cctv', title: 'CCTV Empresarial',
    icon: ShieldCheck,
    longDescription: 'Ofrecemos soluciones avanzadas de videovigilancia CCTV diseñadas para proteger los activos de su empresa, controlar los flujos operativos y mitigar riesgos. Diseñamos e implementamos sistemas robustos de circuito cerrado de televisión con tecnología IP y analíticas inteligentes, adaptados a la escala de su negocio.',
    features: ['Cámaras IP de alta definición (4K, Ultra HD, Visión Nocturna a color).', 'Analítica de video avanzada por Inteligencia Artificial (Cruces de línea, merodeo).', 'Sistemas de reconocimiento facial y lectura de patentes (LPR/ANPR).', 'Grabación redundante local (NVR/RAID) e integración segura en la nube.', 'Centros de control y monitoreo unificado multi-sede.', 'Protección perimetral inteligente para almacenes y zonas industriales.'],
    specs: ['Cámaras con grado de protección IP67 e IK10 (Antivandálicas).', 'Switches PoE industriales redundantes.', 'Almacenamiento optimizado para videovigilancia de alta densidad.', 'Certificación de enlaces de fibra u ondas de radio para cámaras remotas.']
  },
  {
    id: 'soporte-ti', title: 'Soporte TI Empresarial',
    icon: Cpu,
    longDescription: 'La inactividad tecnológica cuesta dinero. Nuestro servicio de Soporte TI garantiza la continuidad operativa de su empresa mediante un soporte preventivo y correctivo ágil. Respaldamos su operación con ingenieros calificados listos para atender incidentes críticos bajo estrictos acuerdos de nivel de servicio (SLA).',
    features: ['Mesa de ayuda (Help Desk) disponible bajo esquemas 24/7.', 'Monitoreo remoto activo de servidores, enlaces y redes (RMM).', 'Soporte técnico presencial On-Site de respuesta rápida.', 'Mantenimiento preventivo programado de hardware crítico y servidores.', 'Gestión de copias de seguridad de datos (Backups de nivel corporativo).', 'Configuración segura de cortafuegos (Firewalls) y VPNs.'],
    specs: ['Atención bajo mejores prácticas ITIL v4.', 'Acuerdos de Nivel de Servicio (SLA) de hasta 2 horas para emergencias.', 'Herramientas avanzadas de soporte y control remoto encriptado.', 'Ingenieros certificados en Microsoft, Linux, Cisco y Fortinet.']
  },
  {
    id: 'servicio-tecnico', title: 'Servicio Técnico Autorizado',
    icon: Wrench,
    longDescription: 'Como servicio técnico especializado multimarca, reparamos y optimizamos el hardware tecnológico corporativo de su empresa. Contamos con un laboratorio técnico equipado con tecnología de punta y personal calificado para garantizar diagnósticos precisos y reparaciones duraderas bajo estándares oficiales.',
    features: ['Reparación experta de laptops, desktops y estaciones de trabajo (Workstations).', 'Diagnóstico y reparación a nivel de componentes electrónicos (Placas base).', 'Mantenimiento correctivo y recalibración de terminales y lectores industriales.', 'Uso estricto de repuestos originales o certificados de alta calidad.', 'Atención prioritaria y gestión de flotas de hardware para corporaciones.', 'Laboratorio propio con certificación ESD (Descarga Electroestática).'],
    specs: ['Área técnica equipada con osciloscopios e instrumental de soldadura infrarroja BGA.', 'Garantía por escrito de 3 a 12 meses en todas las reparaciones.', 'Trazabilidad en línea del estado de su equipo mediante nuestro portal de clientes.', 'Soporte directo de marcas líderes como HP, Lenovo, Dell, Zebra.']
  },
  {
    id: 'infraestructura', title: 'Infraestructura Tecnológica',
    icon: Server,
    longDescription: 'Establecemos las autopistas de información de su empresa. Diseñamos e implementamos infraestructura de red física confiable que soporta voz, datos, video y seguridad. Trabajamos con los estándares más estrictos de ingeniería para asegurar redes estables que aguanten las exigencias del mañana.',
    features: ['Diseño e instalación de redes de Cableado Estructurado Cat 6, 6A y Cat 7.', 'Instalación, fusión y certificación de enlaces de fibra óptica monomodo/multimodo.', 'Organización, peinado e integración de Racks, Gabinetes y Data Centers.', 'Rotulado normalizado bajo el estándar ANSI/TIA-606-B.', 'Sistemas de energía ininterrumpida (UPS) e infraestructura eléctrica estabilizada.', 'Certificación oficial de puntos de red con equipos Fluke Networks.'],
    specs: ['Certificaciones emitidas con reporte oficial de pérdida y margen.', 'Materiales de marcas reconocidas como Panduit, Leviton, Nexxt, Siemon.', 'Personal certificado en altura y trabajos de riesgo eléctrico (SCTR).', 'Garantía estructural del cableado de hasta 25 años según fabricante.']
  }
];

export default function ServiceDetailClient() {
  const router = useRouter();
  const params = useParams();
  const activeService = servicesList.find(s => s.id === params.slug);

  if (!activeService) {
    return (
      <div className="bg-brand-light min-h-[50vh] flex items-center justify-center font-sans">
        <div className="text-center space-y-4">
          <h1 className="font-display font-extrabold text-4xl text-brand-dark">Servicio no encontrado</h1>
          <button onClick={() => router.push('/servicios')} className="text-brand-red hover:underline text-sm">← Volver a Servicios</button>
        </div>
      </div>
    );
  }

  const IconComponent = activeService.icon;

  const handleContactService = () => {
    localStorage.setItem('selected_service_interest', activeService.title);
    router.push('/contacto');
  };

  return (
    <div className="bg-brand-light py-12 md:py-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex mb-8 text-xs font-semibold tracking-wider text-brand-gray uppercase" aria-label="Breadcrumb">
          <button onClick={() => router.push('/')} className="hover:text-brand-red cursor-pointer">Inicio</button>
          <span className="mx-2 text-gray-400">/</span>
          <button onClick={() => router.push('/servicios')} className="hover:text-brand-red cursor-pointer">Servicios</button>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-brand-red">{activeService.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="lg:col-span-8 bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-brand-red/10 text-brand-red rounded-xl"><IconComponent className="w-8 h-8 md:w-10 md:h-10" /></div>
              <div>
                <h1 className="font-display font-extrabold text-2xl md:text-4xl text-brand-dark tracking-tight leading-tight">{activeService.title}</h1>
                <p className="text-sm text-brand-red font-semibold tracking-wider uppercase mt-1">GKM Technology</p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-8">{activeService.longDescription}</p>

            <h3 className="font-display font-bold text-lg text-brand-dark uppercase tracking-wide mb-6 border-b border-gray-100 pb-3">Características y Beneficios Clave</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {activeService.features.map((feat, index) => (
                <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} key={index} className="flex items-start gap-3 bg-brand-light/60 p-4 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 leading-snug">{feat}</span>
                </motion.div>
              ))}
            </div>

            <h3 className="font-display font-bold text-lg text-brand-dark uppercase tracking-wide mb-6 border-b border-gray-100 pb-3">Especificaciones e Ingeniería</h3>
            <div className="bg-brand-dark text-gray-200 rounded-xl p-6 md:p-8 font-mono text-sm space-y-4">
              <p className="text-brand-red font-bold uppercase tracking-widest text-xs">// ESPECIFICACIONES DE SERVICIO GKM</p>
              <ul className="space-y-2">
                {activeService.specs.map((spec, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-brand-red font-bold select-none">&gt;</span>
                    <span className="text-gray-300 leading-relaxed">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="lg:col-span-4 space-y-6">
            <div className="bg-brand-dark text-white rounded-2xl p-8 shadow-xl relative overflow-hidden border border-brand-gray/30">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/10 rounded-full blur-2xl -mr-10 -mt-10" />
              <h3 className="font-display font-extrabold text-xl mb-4 relative z-10">¿Necesita cotizar {activeService.title}?</h3>
              <p className="text-sm text-gray-400 mb-6 font-light leading-relaxed">Consulte de manera inmediata con nuestro equipo técnico especializado. Diseñamos planes de soporte, CCTV e infraestructura a la medida de su empresa.</p>
              <div className="space-y-4">
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleContactService} className="w-full py-3 bg-brand-red hover:bg-brand-red/90 text-white rounded-xl font-semibold text-sm transition-colors cursor-pointer shadow-lg shadow-brand-red/20 text-center">Solicitar Cotización Directa</motion.button>
                <div className="border-t border-brand-gray/30 pt-4 flex items-center justify-between text-xs text-gray-400"><span>Atención a nivel nacional</span><span className="font-bold text-brand-red">SLA Garantizado</span></div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md space-y-4 text-sm text-gray-600">
              <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-brand-red flex-shrink-0" /><div><p className="font-bold text-brand-dark">Soporte Técnico de Emergencia</p><p className="text-xs text-gray-500">Mesa de ayuda corporativa 24 horas.</p></div></div>
              <div className="flex items-center gap-3"><Award className="w-5 h-5 text-brand-red flex-shrink-0" /><div><p className="font-bold text-brand-dark">Garantía Asegurada</p><p className="text-xs text-gray-500">Hasta 25 años en cableado estructurado.</p></div></div>
              <div className="flex items-center gap-3"><Users className="w-5 h-5 text-brand-red flex-shrink-0" /><div><p className="font-bold text-brand-dark">Personal Certificado</p><p className="text-xs text-gray-500">Ingenieros calificados bajo normas SCTR.</p></div></div>
            </div>

            <button onClick={() => { router.push('/servicios'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="w-full py-3 border border-brand-gray/30 hover:border-brand-red text-brand-dark hover:text-brand-red bg-white rounded-xl font-semibold text-sm transition-all cursor-pointer text-center">← Ver Todos los Servicios</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
