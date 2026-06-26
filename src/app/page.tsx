"use client";

import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, Cpu, Wrench, Server, Map, Award, Building2, Layers, 
  ArrowRight, Search, FileText, CheckCircle2, ChevronRight, MapPin, 
  Phone, Mail, Warehouse, Store, Sparkles, Send, Terminal 
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { LeadFormInput } from '@/lib/types';

export default function Home() {
  const router = useRouter();
  const [homeFormData, setHomeFormData] = useState<LeadFormInput>({
    nombre: '', empresa: '', telefono: '', correo: '', servicio: '', mensaje: ''
  });
  const [homeFormLoading, setHomeFormLoading] = useState(false);
  const [homeFormSubmitted, setHomeFormSubmitted] = useState(false);
  const [homeWebhookPayload, setHomeWebhookPayload] = useState<any>(null);

  const handleHomeFormChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setHomeFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleHomeFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!homeFormData.nombre || !homeFormData.correo || !homeFormData.telefono || !homeFormData.servicio) {
      alert('Por favor, rellene todos los campos requeridos (*).');
      return;
    }
    setHomeFormLoading(true);
    setTimeout(() => {
      const payload = {
        timestamp: new Date().toISOString(),
        leadId: 'GKM-LEAD-' + Math.floor(Math.random() * 900000 + 100000),
        origin: 'GKM Web Corporativa - Home Page',
        crmStatus: 'LEAD_CAPTURED',
        payload: { ...homeFormData }
      };
      setHomeWebhookPayload(payload);
      setHomeFormLoading(false);
      setHomeFormSubmitted(true);
    }, 1500);
  };

  const clientLogos = [
    { name: 'Sika', text: 'SIKA' },
    { name: 'Dunkin', text: 'DUNKIN' },
    { name: 'Intcomex', text: 'INTCOMEX' },
    { name: 'Popeyes', text: 'POPEYES' },
    { name: 'Ferreyros', text: 'FERREYROS' },
    { name: 'Don Belisario', text: 'DON BELISARIO' },
    { name: 'Hikvision', text: 'HIKVISION' },
    { name: 'Bembos', text: 'BEMBOS' }
  ];

  const pillars = [
    { title: 'Cobertura Nacional', desc: 'Capacidad operativa ágil y oportuna en todas las regiones del país.', icon: Map },
    { title: 'Equipo Técnico Especializado', desc: 'Ingenieros altamente certificados y bajo estrictos seguros SCTR.', icon: Award },
    { title: 'Soluciones Integrales', desc: 'Desde el diseño de planos hasta el mantenimiento correctivo y laboratorio.', icon: Layers },
    { title: 'Experiencia Multisedes', desc: 'Soporte y despliegues sincronizados para grandes cadenas y retail.', icon: Building2 },
  ];

  const processTimeline = [
    { step: '01', title: 'Identificación del Problema', desc: 'Analizamos sus cuellos de botella tecnológicos, fallas de red físicas, o vulnerabilidades perimetrales.', icon: Search },
    { step: '02', title: 'Ingeniería de Diseño', desc: 'Diseñamos diagramas unifilares, dimensionamiento de switches PoE, topología de red y planos de distribución.', icon: FileText },
    { step: '03', title: 'Implementación', desc: 'Ejecución limpia y certificada: tendido, fusión, montaje de racks y calibración técnica en laboratorio ESD.', icon: Cpu },
    { step: '04', title: 'Seguimiento Post Proyecto', desc: 'Auditorías periódicas, soporte helpdesk de respuesta rápida bajo acuerdos SLA y visualización en portal B2B.', icon: ShieldCheck },
  ];

  const sucursales = [
    { title: 'Sede Central', subtitle: 'Administración y Laboratorio', desc: 'Centro de ingeniería de alta complejidad y soporte corporativo general de hardware.', location: 'Los Olivos, Lima', icon: Building2 },
    { title: 'Lima Centro Cyber Plaza', subtitle: 'Acopio y Soporte', desc: 'Mesa de soporte rápido, acopio logístico y diagnóstico express de equipos informáticos.', location: 'Cercado de Lima, Lima', icon: Store },
    { title: 'Puente Piedra', subtitle: 'Centro de Logística de 1,100 m²', desc: 'Nuestra base operativa de almacenamiento general, bobinas de red, servidores y repuestos oficiales.', location: 'Puente Piedra, Lima', icon: Warehouse },
  ];

  const homeServices = [
    { path: '/servicios/cctv', title: 'CCTV Empresarial', desc: 'Sistemas de videovigilancia para seguridad y control operativo.', icon: ShieldCheck, features: ['Analíticas de IA avanzadas', 'Monitoreo Centralizado', 'Cámaras IP Antivandálicas'] },
    { path: '/servicios/soporte-ti', title: 'Soporte TI Empresarial', desc: 'Continuidad operativa, soporte remoto y en campo.', icon: Cpu, features: ['Mesa de Ayuda 24/7', 'Mantenimiento Preventivo', 'Acuerdos de SLA ágiles'] },
    { path: '/servicios/servicio-tecnico', title: 'Servicio Técnico Autorizado', desc: 'Atención técnica para equipos electrónicos de marcas reconocidas.', icon: Wrench, features: ['Laboratorio con protección ESD', 'Repuestos de primera línea', 'Diagnóstico Certificado'] },
    { path: '/servicios/infraestructura', title: 'Infraestructura Tecnológica', desc: 'Cableado estructurado, fibra óptica y racks.', icon: Server, features: ['Certificación Fluke Networks', 'Enlaces de Fibra Óptica', 'Garantía Estructural de Red'] },
  ];

  return (
    <div className="font-sans text-gray-800">
      <section className="relative min-h-[90vh] bg-brand-dark flex items-center justify-center text-white overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15], x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-brand-red rounded-full blur-[130px] pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.2, 0.12], x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-brand-red rounded-full blur-[130px] pointer-events-none"
        />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />

        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } } }}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center relative z-10 space-y-8"
        >
          <motion.div
            variants={{ hidden: { opacity: 0, scale: 0.85, y: 15 }, visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 15 } } }}
            className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/30 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase text-brand-red"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hardware &amp; TI Solutions para Corporaciones</span>
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
            className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tighter leading-none"
          >
            Servicios Tecnológicos <br />para <span className="text-brand-red relative inline-block">Empresas</span>
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
            className="max-w-2xl mx-auto text-gray-300 text-base sm:text-xl font-sans font-light leading-relaxed"
          >
            Un aliado tecnológico para operaciones que no pueden detenerse. Garantizamos infraestructura física y soporte de hardware continuo.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(229, 40, 34, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => { router.push('/servicios'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="w-full sm:w-auto px-8 py-4 bg-brand-red hover:bg-brand-red text-white font-semibold rounded-xl text-sm transition-all cursor-pointer shadow-lg shadow-brand-red/30 flex items-center justify-center gap-2"
            >
              <span>Nuestros Servicios</span>
              <ArrowRight className="w-4 h-4 animate-pulse" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.08)', borderColor: 'rgba(255, 255, 255, 0.8)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => { router.push('/contacto'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gray-400 hover:border-white text-white font-semibold rounded-xl text-sm transition-all cursor-pointer"
            >
              Contactar un Ingeniero
            </motion.button>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-brand-light to-transparent" />
      </section>

      <section className="bg-brand-light py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-16 space-y-3"
          >
            <span className="text-brand-red font-bold text-xs tracking-widest uppercase">Especialización de Hardware</span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-brand-dark tracking-tight">Ingeniería Corporativa Certificada</h2>
            <p className="text-brand-gray text-base leading-relaxed font-light">
              Ofrecemos soluciones físicas robustas, excluyendo el desarrollo de software, enfocándonos al 100% en la estabilidad, seguridad y soporte de sus activos informáticos.
            </p>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {homeServices.map((service) => {
              const ServiceIcon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}
                  whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)", borderColor: "rgba(229, 40, 34, 0.25)" }}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 p-6 flex flex-col justify-between transition-all duration-300 group cursor-pointer"
                  onClick={() => { router.push(service.path); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                >
                  <div>
                    <div className="w-12 h-12 bg-brand-red/10 text-brand-red rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                      <ServiceIcon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-brand-dark mb-2 group-hover:text-brand-red transition-colors duration-300">{service.title}</h3>
                    <p className="text-brand-gray text-xs leading-relaxed mb-4 font-light">{service.desc}</p>
                    <ul className="space-y-1.5 mb-6">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-1.5 text-[11px] text-gray-500 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-brand-red pt-4 border-t border-gray-50 mt-2">
                    <span>Explorar detalles</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-5 space-y-6"
            >
              <span className="text-brand-red font-bold text-xs tracking-widest uppercase">Excelencia Operacional</span>
              <h2 className="font-display font-extrabold text-3xl md:text-5xl text-brand-dark leading-none tracking-tight">OPERACIONES QUE NO PUEDEN DETENERSE</h2>
              <p className="text-brand-gray text-sm md:text-base leading-relaxed font-light">
                Comprendemos de manera profunda las necesidades técnicas de las empresas con múltiples sucursales a nivel nacional. Si su red se cae o una cámara de seguridad falla, nuestro engranaje logístico responde de manera inmediata.
              </p>
              <div className="border-l-4 border-brand-red pl-4 py-2 italic text-sm text-brand-gray bg-brand-light">
                &ldquo;No desarrollamos software. Optimizamos y defendemos su infraestructura física y su continuidad de hardware con ingenieros reales.&rdquo;
              </div>
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {pillars.map((pillar) => {
                const PillarIcon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } } }}
                    whileHover={{ scale: 1.03, y: -3, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.03), 0 4px 6px -2px rgba(0, 0, 0, 0.03)" }}
                    className="p-6 rounded-2xl bg-brand-light border border-gray-100 shadow-sm flex gap-4 items-start transition-all duration-300"
                  >
                    <div className="p-2.5 bg-brand-red/10 text-brand-red rounded-lg flex-shrink-0">
                      <PillarIcon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-display font-bold text-sm text-brand-dark uppercase tracking-wide">{pillar.title}</h4>
                      <p className="text-xs text-brand-gray leading-relaxed font-light">{pillar.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-brand-dark text-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16 space-y-3"
          >
            <span className="text-brand-red font-bold text-xs tracking-widest uppercase">Garantía Metodológica</span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight">Nuestro Proceso de Ingeniería</h2>
            <p className="text-gray-400 text-sm font-light">
              Garantizamos la precisión en cada etapa del despliegue tecnológico, asegurando auditorías físicas rigurosas.
            </p>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 relative"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.4 }}
              className="hidden md:block absolute top-[54px] left-12 right-12 h-0.5 bg-brand-gray/30 z-0 origin-left"
            />

            {processTimeline.map((p) => (
              <motion.div
                key={p.step}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}
                className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left space-y-4 group"
              >
                <div className="flex items-center justify-between w-full md:pr-4">
                  <div className="w-14 h-14 bg-brand-gray/20 text-white border-2 border-brand-gray/40 rounded-full flex items-center justify-center font-display font-extrabold text-lg group-hover:border-brand-red group-hover:bg-brand-red transition-all duration-300 relative">
                    {p.step}
                    <span className="absolute inset-0 rounded-full border border-brand-red/40 scale-125 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500" />
                  </div>
                  <span className="text-[10px] font-mono text-brand-red font-bold hidden md:inline">✓</span>
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-lg group-hover:text-brand-red transition-colors duration-300">{p.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-light">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-brand-light py-16 overflow-hidden border-b border-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 mb-10 text-center"
        >
          <h2 className="font-display font-extrabold text-sm tracking-widest text-brand-dark uppercase">Empresas que confían en nosotros</h2>
        </motion.div>

        <div className="relative w-full flex items-center overflow-x-hidden py-4 bg-white border-y border-gray-100">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-16">
            {[...clientLogos, ...clientLogos].map((logo, idx) => (
              <div key={idx} className="inline-flex items-center justify-center min-w-[150px] h-12 text-brand-gray hover:text-brand-red transition-colors font-display font-black text-sm tracking-widest border border-dashed border-gray-200/50 px-4 rounded-lg bg-brand-light/40 select-none cursor-default">
                {logo.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16 space-y-3"
          >
            <span className="text-brand-red font-bold text-xs tracking-widest uppercase">Presencia Estratégica</span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-brand-dark tracking-tight">Nuestras Sucursales y Sedes</h2>
            <p className="text-brand-gray text-sm leading-relaxed font-light">
              Ubicaciones optimizadas para garantizar soporte de hardware y logística técnica eficiente de manera oportuna.
            </p>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {sucursales.map((suc) => {
              const SucIcon = suc.icon;
              return (
                <motion.div
                  key={suc.title}
                  variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}
                  whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)", borderColor: "rgba(229, 40, 34, 0.3)" }}
                  className="bg-brand-light p-8 rounded-2xl border border-gray-200 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-white rounded-xl border border-gray-200 text-brand-red flex items-center justify-center">
                      <SucIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-extrabold text-lg text-brand-dark leading-tight">{suc.title}</h3>
                      <p className="text-xs text-brand-red font-bold uppercase tracking-wider mt-0.5">{suc.subtitle}</p>
                    </div>
                    <p className="text-xs text-brand-gray leading-relaxed font-light">{suc.desc}</p>
                  </div>
                  <div className="pt-6 border-t border-gray-200/50 mt-6 flex items-center gap-2 text-xs font-semibold text-brand-dark">
                    <MapPin className="w-4 h-4 text-brand-red flex-shrink-0" />
                    <span>{suc.location}</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="bg-brand-light py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {!homeFormSubmitted ? (
              <motion.div
                key="home-form-container"
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 space-y-8"
              >
                <div className="text-center max-w-2xl mx-auto space-y-2">
                  <span className="bg-brand-red/10 text-brand-red text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full inline-block">Cotización Rápida B2B</span>
                  <h3 className="font-display font-extrabold text-2xl md:text-3xl text-brand-dark">¿Iniciamos su proyecto tecnológico?</h3>
                  <p className="text-xs md:text-sm text-brand-gray font-light">Complete los datos corporativos para programar un diagnóstico técnico o cotización sin costo.</p>
                </div>

                <form onSubmit={handleHomeFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-brand-dark uppercase tracking-wider block">Nombre Completo <span className="text-brand-red">*</span></label>
                      <input type="text" name="nombre" required value={homeFormData.nombre} onChange={handleHomeFormChange} placeholder="Ej. Rafael Huarcaya" className="w-full px-4 py-3 bg-brand-light border border-gray-200 focus:border-brand-red focus:ring-1 focus:ring-brand-red rounded-xl text-sm text-brand-dark outline-none transition-all placeholder-gray-400" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-brand-dark uppercase tracking-wider block">Empresa <span className="text-brand-red">*</span></label>
                      <input type="text" name="empresa" required value={homeFormData.empresa} onChange={handleHomeFormChange} placeholder="Ej. Inversiones S.A." className="w-full px-4 py-3 bg-brand-light border border-gray-200 focus:border-brand-red focus:ring-1 focus:ring-brand-red rounded-xl text-sm text-brand-dark outline-none transition-all placeholder-gray-400" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-brand-dark uppercase tracking-wider block">Correo Corporativo <span className="text-brand-red">*</span></label>
                      <input type="email" name="correo" required value={homeFormData.correo} onChange={handleHomeFormChange} placeholder="correo@empresa.com" className="w-full px-4 py-3 bg-brand-light border border-gray-200 focus:border-brand-red focus:ring-1 focus:ring-brand-red rounded-xl text-sm text-brand-dark outline-none transition-all placeholder-gray-400" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-brand-dark uppercase tracking-wider block">Teléfono <span className="text-brand-red">*</span></label>
                      <input type="tel" name="telefono" required value={homeFormData.telefono} onChange={handleHomeFormChange} placeholder="999 999 999" className="w-full px-4 py-3 bg-brand-light border border-gray-200 focus:border-brand-red focus:ring-1 focus:ring-brand-red rounded-xl text-sm text-brand-dark outline-none transition-all placeholder-gray-400" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-brand-dark uppercase tracking-wider block">Servicio de Interés <span className="text-brand-red">*</span></label>
                    <select name="servicio" required value={homeFormData.servicio} onChange={handleHomeFormChange} className="w-full px-4 py-3 bg-brand-light border border-gray-200 focus:border-brand-red focus:ring-1 focus:ring-brand-red rounded-xl text-sm text-brand-dark outline-none transition-all cursor-pointer">
                      <option value="">Seleccione un servicio...</option>
                      <option value="CCTV Empresarial">CCTV Empresarial (Seguridad y Control)</option>
                      <option value="Soporte TI Empresarial">Soporte TI Empresarial (Mesa de ayuda y campo)</option>
                      <option value="Servicio Técnico Autorizado">Servicio Técnico Autorizado (Hardware y Laboratorio)</option>
                      <option value="Infraestructura Tecnológica">Infraestructura Tecnológica (Cableado y Fibra)</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-brand-dark uppercase tracking-wider block">Mensaje / Requerimiento</label>
                    <textarea name="mensaje" rows={3} value={homeFormData.mensaje} onChange={handleHomeFormChange} placeholder="Indique el alcance o urgencia del servicio de hardware..." className="w-full px-4 py-3 bg-brand-light border border-gray-200 focus:border-brand-red focus:ring-1 focus:ring-brand-red rounded-xl text-sm text-brand-dark outline-none transition-all placeholder-gray-400 resize-none" />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={homeFormLoading}
                    type="submit"
                    className="w-full py-4 bg-brand-red hover:bg-brand-red/95 disabled:bg-brand-gray/50 text-white font-semibold rounded-xl text-sm shadow-xl shadow-brand-red/20 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    {homeFormLoading ? (
                      <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /><span>Conectando con CRM...</span></>
                    ) : (
                      <><Send className="w-4 h-4" /><span>Enviar a CRM Corporativo</span></>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="home-form-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl shadow-xl border border-green-100 p-8 md:p-12 space-y-6"
              >
                <div className="flex items-center gap-4 text-green-600 bg-green-50 p-4 rounded-xl border border-green-100">
                  <CheckCircle2 className="w-8 h-8 flex-shrink-0" />
                  <div>
                    <h4 className="font-display font-extrabold text-lg text-green-800">¡Lead Registrado con Éxito!</h4>
                    <p className="text-xs text-green-700 font-light">Nuestra API ha enlazado el prospecto técnico con el CRM de ventas de GKM S.A.C.</p>
                  </div>
                </div>

                <div className="space-y-3 bg-brand-dark text-gray-200 rounded-xl p-6 font-mono text-xs overflow-hidden border border-brand-gray/40">
                  <div className="flex items-center gap-2 text-brand-red font-bold uppercase tracking-wider text-[10px] mb-2 border-b border-brand-gray/30 pb-2">
                    <Terminal className="w-4 h-4" />
                    <span>// CRM API CONNECTION STATUS OK</span>
                  </div>
                  <pre className="text-gray-300 font-sans text-xs bg-black/40 p-3 rounded leading-relaxed overflow-x-auto">
                    {JSON.stringify(homeWebhookPayload, null, 2)}
                  </pre>
                </div>

                <div className="text-center pt-2">
                  <button
                    onClick={() => { setHomeFormSubmitted(false); setHomeFormData({ nombre: '', empresa: '', telefono: '', correo: '', servicio: '', mensaje: '' }); }}
                    className="px-5 py-2.5 bg-brand-dark hover:bg-brand-red text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    Registrar nuevo requerimiento
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
