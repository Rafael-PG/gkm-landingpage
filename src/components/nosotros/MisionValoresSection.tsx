"use client";

import { motion } from 'motion/react';
import type { LucideIcon } from 'lucide-react';

interface MisVisItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface ValorItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export default function MisionValoresSection({
  misVis,
  valores,
}: {
  misVis: MisVisItem[];
  valores: ValorItem[];
}) {
  return (
    <section className="relative bg-[#F8F9F9] py-16 md:py-24 overflow-hidden" style={{ isolation: 'isolate' }}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle,#808080_0.7px,transparent_0.7px)] bg-[size:14px_14px]" />
      </div>
      <div className="absolute top-1/2 right-0 translate-x-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />

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

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.12 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10 lg:mb-12"
        >
          {misVis.map((item) => (
            <motion.div
              key={item.title}
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="group relative bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-brand-red to-brand-red/40 rounded-full" />
              <div className="flex items-start gap-5 pt-2">
                <div className="w-14 h-14 rounded-2xl bg-brand-red/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(229,40,34,0.15)] transition-all duration-300">
                  <item.icon className="w-7 h-7 text-brand-red" />
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="font-display font-bold text-lg text-brand-dark">{item.title}</h3>
                  <p className="text-sm text-brand-gray leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm mb-10 lg:mb-12 overflow-hidden"
        >
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-red" />
          <div className="absolute -top-4 -right-4 text-6xl text-brand-red/[0.04] font-display font-extrabold leading-none pointer-events-none select-none">"</div>
          <div className="relative pl-5">
            <p className="text-sm md:text-base text-brand-gray leading-relaxed font-light italic">
              En GKM Technology entendemos que el hardware y la conectividad física de red son el sistema nervioso de la empresa moderna. Si estos fallan, la producción se paraliza. Es por ello que no ofrecemos soluciones paliativas; entregamos ingeniería robusta y certificada.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 1 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {valores.map((item, idx) => (
            <motion.div
              key={item.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-red/20 transition-all duration-300"
            >
              <span className="absolute top-3 right-4 font-display font-extrabold text-3xl text-brand-red/10 leading-none select-none">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(229,40,34,0.15)] transition-all duration-300">
                  <item.icon className="w-6 h-6 text-brand-red" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-display font-bold text-sm text-brand-dark uppercase tracking-wide">{item.title}</h4>
                  <p className="text-xs text-brand-gray leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
