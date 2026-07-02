"use client";

import { motion } from 'motion/react';
import { PhoneCall, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ServiciosCta() {
  const router = useRouter();

  return (
    <section className="relative bg-brand-light pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle,#808080_0.7px,transparent_0.7px)] bg-[size:14px_14px] pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-brand-dark rounded-2xl p-8 md:p-14 text-white relative overflow-hidden border border-brand-gray/30 shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 text-brand-red font-bold text-xs tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                ¿Listo para empezar?
              </span>
              <h3 className="font-display font-extrabold text-2xl md:text-4xl tracking-tight leading-tight">
                Transforma tu infraestructura <span className="text-brand-red">tecnológica</span>
              </h3>
              <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed max-w-2xl">
                Solicita una cotización sin compromiso. Uno de nuestros ingenieros se comunicará contigo en menos de 24 horas para entender tus necesidades y ofrecerte la solución ideal.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="px-3 py-1 bg-brand-gray/30 rounded text-[11px] text-gray-300 font-mono">Sin compromiso</span>
                <span className="px-3 py-1 bg-brand-gray/30 rounded text-[11px] text-gray-300 font-mono">Respuesta en 24h</span>
                <span className="px-3 py-1 bg-brand-gray/30 rounded text-[11px] text-gray-300 font-mono">Ingeniero asignado</span>
              </div>
            </div>
            <div className="lg:col-span-4 text-center lg:text-right">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { localStorage.removeItem('selected_service_interest'); router.push('/contacto'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="px-8 py-4 bg-brand-red hover:bg-brand-red/90 text-white rounded-xl font-semibold text-sm transition-all cursor-pointer shadow-xl shadow-brand-red/20 inline-flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Solicitar Cotización</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
