"use client";

import { motion } from 'motion/react';
import Image from 'next/image';
import type { LucideIcon } from 'lucide-react';

interface Milestone {
  year: string;
  icon: LucideIcon;
  title: string;
  desc: string;
}

export default function TimelineSection({ milestones }: { milestones: Milestone[] }) {
  return (
    <section className="relative bg-brand-dark text-white py-16 md:py-24 overflow-x-clip">
      <div className="absolute top-1/2 left-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-brand-red/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-16 space-y-3"
        >
          <span className="inline-flex items-center gap-1.5 text-brand-red font-bold text-xs tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />Nuestra Trayectoria
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight leading-tight">
            Hitos que han marcado{' '}
            <span className="text-brand-red">nuestro camino</span>
          </h2>
          <div className="h-[3px] w-full max-w-[200px] bg-gradient-to-r from-brand-red via-brand-red to-brand-red/40 rounded-full mt-4 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">
          <div className="relative">
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-brand-red via-white/10 to-transparent" />

            {milestones.map((m, idx) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative pl-14 pb-12 last:pb-0"
              >
                <div className="absolute left-[11px] top-1 w-[17px] h-[17px] rounded-full bg-brand-red border-[3px] border-brand-dark shadow-[0_0_0_1px_rgba(229,40,34,0.3)] z-10" />
                <span className="font-display font-extrabold text-brand-red text-lg md:text-xl">{m.year}</span>
                <div className="flex items-center gap-3 mt-1">
                  <m.icon className="w-5 h-5 text-brand-red/70 flex-shrink-0" />
                  <h3 className="font-display font-bold text-white text-base md:text-lg">{m.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed font-light mt-2 max-w-lg">{m.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[350px] md:h-[450px] lg:h-[520px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/nosotros/equipo-trayectoria.webp"
              alt="Equipo técnico GKM Technology en operaciones"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-brand-dark/10 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white/80 text-sm font-light leading-relaxed">
                <span className="font-bold text-brand-red">+14 años</span> de experiencia nos respaldan como el aliado estratégico en hardware y TI de las principales corporaciones del país.
              </p>
            </div>
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none z-10" />
          </motion.div>
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.12 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 pt-10 border-t border-white/5"
        >
          {[
            { label: 'Rendimiento', value: 90 },
            { label: 'Atención', value: 90 },
            { label: 'Responsabilidad', value: 100 },
          ].map((bar, idx) => (
            <motion.div
              key={bar.label}
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="space-y-2"
            >
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-gray-300">{bar.label}</span>
                <span className="text-sm font-bold text-brand-red">{bar.value}%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${bar.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.6 + idx * 0.15, ease: "easeOut" }}
                  className="h-full bg-brand-red rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
