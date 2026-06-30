"use client";

import { motion } from 'motion/react';
import Image from 'next/image';
import { processTimeline, timelineImages } from '@/app/home-data';

export default function TimelineSection() {
  return (
    <section className="relative bg-brand-dark text-white py-16 md:py-28 overflow-x-clip">
      <div className="absolute top-1/2 left-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-brand-red/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 md:mb-14">
          <motion.span
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 text-brand-red font-bold text-xs tracking-widest uppercase mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />Garantía Metodológica
          </motion.span>
          <motion.h2
            className="font-display font-extrabold text-3xl md:text-5xl tracking-tight leading-tight"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="block"
            >
              Un proceso diseñado para
            </motion.span>
            <motion.span
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-brand-red inline-block mt-1"
            >
              GARANTIZAR RESULTADOS
            </motion.span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-[3px] w-full max-w-[280px] bg-gradient-to-r from-brand-red via-brand-red to-brand-red/40 rounded-full mt-4 origin-left"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {processTimeline.map((p, idx) => {
              const StepIcon = p.icon;
              return (
                <motion.div
                  key={p.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.1 }}
                  className="relative group"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl h-full overflow-hidden flex flex-col transition-all duration-500 group-hover:bg-white/10 group-hover:border-brand-red/30 group-hover:shadow-[0_0_30px_rgba(229,40,34,0.1)]">
                    <div className="relative h-[200px] md:h-[260px] flex-shrink-0 overflow-hidden">
                      <Image
                        src={timelineImages[idx]}
                        alt={p.title}
                        fill
                        className="object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-brand-dark/5 to-transparent" />
                    </div>

                    <div className="w-12 h-12 rounded-full bg-brand-red border-2 border-white/20 text-white flex items-center justify-center font-display font-extrabold text-lg shadow-lg shadow-brand-red/30 z-10 -mt-6 ml-6 mb-2">
                      {p.step}
                    </div>

                    <div className="p-6 pt-2 flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-brand-red/10 flex items-center justify-center flex-shrink-0">
                          <StepIcon className="w-5 h-5 text-brand-red" />
                        </div>
                        <h3 className="font-display font-bold text-sm lg:text-base text-white group-hover:text-brand-red transition-colors duration-300">{p.title}</h3>
                      </div>
                      <p className="text-xs lg:text-[13px] text-gray-400 leading-relaxed font-light">{p.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
