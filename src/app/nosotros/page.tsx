"use client";

import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, Award, Heart } from 'lucide-react';
import ExcelenciaSection from '@/components/home/ExcelenciaSection';
import SucursalesSection from '@/components/home/SucursalesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ContactSection from '@/components/home/ContactSection';

const stats = [
  { value: 15, suffix: '+', label: 'Años de Experiencia' },
  { value: 340, suffix: '+', label: 'Contratos Corporativos' },
  { value: 100, suffix: '%', label: 'SLA de Cumplimiento' },
  { label: '1,100 m² de Centro Logístico', value: null as number | null, suffix: '' },
];

function AnimatedStat({ stat, visible }: { stat: typeof stats[0]; visible: boolean }) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!visible || hasAnimated.current || stat.value === null) return;
    hasAnimated.current = true;
    const target = stat.value;
    const duration = 1500;
    const start = performance.now();
    const raf = () => {
      const elapsed = performance.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [visible, stat.value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center space-y-1"
    >
      <p className="font-display font-extrabold text-3xl md:text-5xl text-white">
        {stat.value !== null ? count : stat.label.split(' ')[0]}{stat.suffix}
      </p>
      <p className="text-xs md:text-sm font-semibold text-gray-400 tracking-wide">
        {stat.value !== null ? stat.label : stat.label.split(' ').slice(1).join(' ')}
      </p>
    </motion.div>
  );
}

export default function Nosotros() {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

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

  return (
    <div>
      {/* HERO */}
      <section className="relative py-20 md:py-28 bg-brand-dark text-white overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.2, 0.12] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -right-20 w-[450px] h-[450px] bg-brand-red rounded-full blur-[120px] pointer-events-none"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(229,40,34,0.15),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span
              variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } } }}
              className="inline-flex items-center gap-1.5 text-brand-red font-bold text-xs tracking-widest uppercase mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />Nuestra Trayectoria
            </motion.span>
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } }}
              className="font-display font-extrabold text-3xl md:text-6xl tracking-tight leading-[1.1] mb-6"
            >
              Quiénes Somos en{' '}
              <span className="text-brand-red">GKM Technology</span>
            </motion.h1>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } }}
              className="text-gray-300 text-base md:text-lg leading-relaxed font-light max-w-3xl mx-auto"
            >
              Somos el aliado estratégico en hardware y TI preferido por corporaciones y cadenas de retail multisede del país. Diseñamos e implementamos operaciones tecnológicas que nunca se detienen.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* STATS BAR */}
      <section ref={statsRef} className="bg-brand-dark border-t border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            onViewportEnter={() => setStatsVisible(true)}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
          >
            {stats.map((stat, idx) => (
              <AnimatedStat key={idx} stat={stat} visible={statsVisible} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* EXCELENCIA SECTION */}
      <ExcelenciaSection />

      {/* MISIÓN, VISIÓN Y VALORES */}
      <section className="relative bg-[#F8F9F9] py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px]" />
          <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle,#808080_0.7px,transparent_0.7px)] bg-[size:14px_14px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14 space-y-3"
          >
            <span className="inline-flex items-center gap-1.5 text-brand-red font-bold text-xs tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />Nuestro Propósito
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-brand-dark tracking-tight leading-tight">
              Misión, Visión y{' '}
              <span className="text-brand-red">VALORES</span>
            </h2>
            <div className="h-[3px] w-full max-w-[200px] bg-gradient-to-r from-brand-red via-brand-red to-brand-red/40 rounded-full mt-4 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-7 space-y-6">
              {misVis.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm flex items-start gap-5"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-brand-red" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-base text-brand-dark uppercase tracking-wide">{item.title}</h3>
                    <p className="text-sm text-brand-gray leading-relaxed font-light">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="lg:col-span-5 space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-sm text-brand-gray leading-relaxed font-light bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
              >
                En GKM Technology entendemos que el hardware y la conectividad física de red son el sistema nervioso de la empresa moderna. Si estos fallan, la producción se paraliza. Es por ello que no ofrecemos soluciones paliativas; entregamos ingeniería robusta y certificada.
              </motion.p>
              {valores.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 + idx * 0.08 }}
                  className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-red/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-brand-dark">{item.title}</h4>
                    <p className="text-xs text-brand-gray leading-relaxed font-light mt-0.5">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SUCURSALES */}
      <SucursalesSection />

      {/* TESTIMONIALS */}
      <TestimonialsSection />

      {/* CONTACT */}
      <ContactSection />
    </div>
  );
}
