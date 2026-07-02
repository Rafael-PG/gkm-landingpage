"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: '¿Cuánto tiempo toma implementar un sistema de CCTV empresarial?',
    a: 'Depende de la escala del proyecto. Una instalación estándar para una sede de tamaño medio puede completarse en 3 a 7 días hábiles, incluyendo cableado, configuración de NVR y puesta en marcha del software de monitoreo. Para proyectos multi-sede, diseñamos un cronograma detallado con hitos semanales.',
  },
  {
    q: '¿Ofrecen mantenimiento preventivo para equipos de cómputo?',
    a: 'Sí. Contamos con planes de mantenimiento preventivo programado que incluyen limpieza interna, diagnóstico de discos duros, actualización de controladores, revisión térmica y reporte de estado. Trabajamos con flotas desde 10 hasta 500+ equipos.',
  },
  {
    q: '¿Qué zonas geográficas cubren en Perú?',
    a: 'Tenemos cobertura a nivel nacional. Nuestro equipo técnico despliega servicios en Lima Metropolitana, Callao y las principales regiones del país (Arequipa, Trujillo, Cusco, Piura, Chiclayo, Huancayo, entre otras) con capacidad de respuesta On-Site según el SLA contratado.',
  },
  {
    q: '¿Cuál es el SLA de soporte para emergencias?',
    a: 'Ofrecemos Acuerdos de Nivel de Servicio (SLA) desde 2 horas para incidentes críticos en modalidad 24/7. Nuestra mesa de ayuda centralizada recibe y categoriza incidentes, escalando a ingenieros de campo cuando se requiere intervención presencial.',
  },
  {
    q: '¿Certifican los puntos de red después de la instalación?',
    a: 'Absolutamente. Cada punto de red es certificado con equipos Fluke Networks, entregando un reporte oficial con medidas de pérdida de retorno, atenuación, diafonía y margen de ruido. Garantizamos cumplimiento de la norma ANSI/TIA-568-C.',
  },
];

export default function ServiciosFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-brand-light py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle,#808080_0.7px,transparent_0.7px)] bg-[size:14px_14px] pointer-events-none" />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-1.5 text-brand-red font-bold text-xs tracking-widest uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
            Preguntas Frecuentes
          </span>
          <h2 className="font-display font-extrabold text-2xl md:text-4xl text-brand-dark tracking-tight">
            Resuelve tus <span className="text-brand-red">dudas</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left cursor-pointer"
              >
                <span className="text-sm md:text-base font-semibold text-brand-dark pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-brand-red flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 md:px-6 pb-5 md:pb-6 text-sm text-gray-600 font-light leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
