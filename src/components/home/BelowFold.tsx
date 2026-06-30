"use client";

import { motion } from 'motion/react';
import Image from 'next/image';
import { servicios, casosExito, clientLogos, stats } from '@/app/home-data';
import ServiceCard from '@/components/home/ServiceCard';
import CaseCard from '@/components/home/CaseCard';
import StatItem from '@/components/home/StatItem';
import ExcelenciaSection from './ExcelenciaSection';
import TimelineSection from './TimelineSection';
import SucursalesSection from './SucursalesSection';
import TestimonialsSection from './TestimonialsSection';
import ContactSection from './ContactSection';

export default function BelowFold() {
  return (
    <>
      <ExcelenciaSection />
      <TimelineSection />

      {/* CLIENT LOGOS MARQUEE */}
      <section className="relative bg-[#F8F9F9] py-16 md:py-24 overflow-x-clip border-b border-gray-100">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px]" />
          <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle,#808080_0.7px,transparent_0.7px)] bg-[size:14px_14px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-1.5 text-brand-red font-bold text-xs tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />Confianza Empresarial
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-brand-dark tracking-tight leading-tight">
              Empresas que confían <br className="md:hidden" />
              <span className="text-brand-red">en nosotros</span>
            </h2>
            <p className="text-sm lg:text-base text-brand-gray/80 font-light max-w-2xl mx-auto mt-4 leading-relaxed">
              Trabajamos junto a organizaciones de diversos sectores, brindando soluciones tecnológicas, soporte especializado y servicios de infraestructura que contribuyen a la continuidad operativa de sus negocios.
            </p>
            <div className="h-[3px] w-full max-w-[200px] bg-gradient-to-r from-brand-red via-brand-red to-brand-red/40 rounded-full mt-6 mx-auto" />
          </motion.div>
        </div>

        <div className="relative z-10 space-y-6">
          <div className="relative w-full overflow-x-clip">
            <div className="animate-marquee items-center gap-5 lg:gap-8 py-1">
              {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, idx) => (
                <div key={`row1-${idx}`} className="flex-shrink-0 w-[160px] lg:w-[180px] h-[68px] lg:h-[76px] bg-white border border-gray-200 rounded-xl flex items-center justify-center p-3 transition-all duration-500 hover:border-brand-red/30 hover:shadow-[0_0_0_2px_rgba(229,40,34,0.06)] group cursor-default select-none">
                  <div className="relative w-full h-full">
                    <Image src={logo.image} alt={logo.name} fill className="object-contain transition-all duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative w-full overflow-x-clip">
            <div className="animate-marquee-reverse items-center gap-5 lg:gap-8 py-1">
              {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, idx) => (
                <div key={`row2-${idx}`} className="flex-shrink-0 w-[160px] lg:w-[180px] h-[68px] lg:h-[76px] bg-white border border-gray-200 rounded-xl flex items-center justify-center p-3 transition-all duration-500 hover:border-brand-red/30 hover:shadow-[0_0_0_2px_rgba(229,40,34,0.06)] group cursor-default select-none">
                  <div className="relative w-full h-full">
                    <Image src={logo.image} alt={logo.name} fill className="object-contain transition-all duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NUESTROS SERVICIOS */}
      <section className="relative bg-brand-dark text-white overflow-x-clip">
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-brand-red/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 space-y-3"
          >
            <span className="inline-flex items-center gap-1.5 text-brand-red font-bold text-xs tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />Nuestro Portafolio
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight leading-tight">
              Soluciones <span className="text-brand-red">TECNOLÓGICAS</span>
            </h2>
            <p className="text-sm text-white/60 leading-relaxed font-light max-w-2xl mx-auto">
              Ofrecemos servicios integrales de tecnología para empresas que demandan continuidad operativa, seguridad y eficiencia en sus procesos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {servicios.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* CASOS DE ÉXITO */}
      <section className="relative bg-[#F8F9F9] text-brand-dark py-16 md:py-24 overflow-hidden">
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
            className="text-center mb-16 space-y-3"
          >
            <span className="inline-flex items-center gap-1.5 text-brand-red font-bold text-xs tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />Project Report
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight leading-tight">
              Casos de <span className="text-brand-red">ÉXITO</span>
            </h2>
            <p className="text-sm text-brand-gray/80 leading-relaxed font-light max-w-2xl mx-auto">
              Resultados concretos que demuestran nuestro compromiso con la calidad y la satisfacción de nuestros clientes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {casosExito.map((c) => (
              <CaseCard key={c.brand} {...c} />
            ))}
          </div>
        </div>
      </section>

      <SucursalesSection />

      {/* ESTADÍSTICAS */}
      <section className="relative bg-[#F8F9F9] text-brand-dark py-16 md:py-24 overflow-hidden">
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
            className="text-center mb-16 space-y-3"
          >
            <span className="inline-flex items-center gap-1.5 text-brand-red font-bold text-xs tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />Resultados que Hablan
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight leading-tight">
              Estadísticas de <span className="text-brand-red">NUESTRO TRABAJO</span>
            </h2>
            <p className="text-sm text-brand-gray/80 leading-relaxed font-light max-w-2xl mx-auto">
              Números que respaldan nuestra experiencia y compromiso con la continuidad operativa de nuestros clientes.
            </p>
          </motion.div>

          <motion.div
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat) => (
              <StatItem key={stat.label} {...stat} />
            ))}
          </motion.div>
        </div>
      </section>

      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
