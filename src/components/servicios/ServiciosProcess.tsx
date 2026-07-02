"use client";

import { motion } from 'motion/react';
import { ClipboardList, PenTool, HardDrive, Headphones } from 'lucide-react';

const steps = [
  { icon: ClipboardList, title: 'Diagnóstico', description: 'Evaluamos tu infraestructura actual, identificamos necesidades y puntos críticos.' },
  { icon: PenTool, title: 'Diseño', description: 'Creamos una solución a medida con ingeniería de alto nivel y los mejores estándares.' },
  { icon: HardDrive, title: 'Implementación', description: 'Ejecutamos la instalación con personal certificado y equipos de última generación.' },
  { icon: Headphones, title: 'Soporte Continuo', description: 'Acompañamiento 24/7 con mantenimiento preventivo y respuesta rápida.' },
];

export default function ServiciosProcess() {
  return (
    <section className="relative bg-brand-dark overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-1/2 left-1/2 w-[600px] md:w-[900px] h-[400px] bg-brand-red/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-1.5 text-brand-red font-bold text-xs tracking-widest uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
            Metodología
          </span>
          <h2 className="font-display font-extrabold text-2xl md:text-4xl text-white tracking-tight">
            Cómo <span className="text-brand-red">Trabajamos</span>
          </h2>
          <p className="text-sm md:text-base text-gray-400 font-light mt-3 max-w-xl mx-auto">
            De la mano con tu equipo, ejecutamos cada proyecto con un proceso probado que garantiza resultados.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative flex flex-col items-center text-center"
              >
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-brand-red/40 to-transparent" />
                )}

                <div className="relative mb-5">
                  <div className="w-20 h-20 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Icon className="w-9 h-9 text-brand-red/80" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-brand-red text-white text-[11px] font-bold flex items-center justify-center font-mono">
                    {i + 1}
                  </div>
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed max-w-xs">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
