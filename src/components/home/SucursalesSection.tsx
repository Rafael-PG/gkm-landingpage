"use client";

import { motion } from 'motion/react';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { sucursales } from '@/app/home-data';

export default function SucursalesSection() {
  return (
    <section className="relative bg-brand-dark text-white overflow-x-clip">
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-brand-red/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
        >
          <span className="inline-flex items-center gap-1.5 text-brand-red font-bold text-xs tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />Presencia Estratégica
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight leading-tight">
            Nuestras Sucursales <br className="md:hidden" />
            <span className="text-brand-red">de SOPORTE TÉCNICO</span>
          </h2>
          <p className="text-sm text-white/60 leading-relaxed font-light">
            Ubicaciones optimizadas para garantizar soporte de hardware y logística técnica eficiente de manera oportuna.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {sucursales.map((suc, idx) => {
            const SucIcon = suc.icon;
            return (
              <motion.div
                key={suc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.15 }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-colors duration-500 hover:bg-white/10 hover:border-brand-red/30 hover:shadow-[0_0_30px_rgba(229,40,34,0.1)]"
              >
                <div className="relative h-[250px] md:h-[360px] overflow-hidden">
                  <Image
                    src={suc.image}
                    alt={suc.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-brand-red/10 flex items-center justify-center">
                      <SucIcon className="w-4 h-4 text-brand-red" />
                    </div>
                    <span className="text-xs text-brand-red font-bold uppercase tracking-wider">{suc.subtitle}</span>
                  </div>
                  <h3 className="font-display font-extrabold text-lg text-white group-hover:text-brand-red transition-colors duration-300">{suc.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-light">{suc.desc}</p>
                  <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-white/60">
                    <MapPin className="w-4 h-4 text-brand-red flex-shrink-0" />
                    <span>{suc.location}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
