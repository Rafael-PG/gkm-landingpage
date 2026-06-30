"use client";

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { testimonials } from '@/app/home-data';

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const goTo = useCallback((idx: number) => {
    setActiveTestimonial(idx);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-brand-dark text-white overflow-x-clip">
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-brand-red/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-24 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16 space-y-3"
        >
          <span className="inline-flex items-center gap-1.5 text-brand-red font-bold text-xs tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />Testimonios
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight leading-tight">
            Nuestros Clientes <span className="text-brand-red">confían en nosotros</span>
          </h2>
          <p className="text-sm text-white/60 leading-relaxed font-light max-w-2xl mx-auto">
            Nuestros clientes confían porque brindamos servicio de calidad, con grandes técnicos capacitados brindando y dando soluciones ante cualquier problema.
          </p>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 md:pb-16 min-h-[30vh] md:min-h-[40vh]">
        <div className="relative w-full h-full flex flex-col items-center justify-center gap-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full px-4 py-6 md:py-8"
            >
              <div className="max-w-3xl mx-auto text-center space-y-4 md:space-y-8">
                <div className="relative h-10 md:h-14 w-36 md:w-44 mx-auto">
                  <Image src={testimonials[activeTestimonial].logo} alt={testimonials[activeTestimonial].brand} fill className="object-contain opacity-90" />
                </div>
                <blockquote className="text-sm md:text-lg text-gray-300 leading-relaxed font-light">
                  &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
                </blockquote>
                <div className="space-y-1">
                  <div className="text-white font-semibold text-sm">{testimonials[activeTestimonial].author}</div>
                  <div className="text-brand-red text-xs font-bold uppercase tracking-wider">{testimonials[activeTestimonial].brand}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center gap-1" role="tablist" aria-label="Seleccionar testimonio">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                role="tab"
                aria-selected={idx === activeTestimonial}
                aria-label={`Testimonio ${idx + 1}`}
                className="group w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer"
              >
                <span className={`rounded-full transition-all duration-300 ${
                  idx === activeTestimonial
                    ? 'w-5 h-2.5 bg-brand-red'
                    : 'w-2.5 h-2.5 bg-white/30 group-hover:bg-white/50'
                }`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
