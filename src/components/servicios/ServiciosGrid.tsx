"use client";

import { type LucideIcon } from 'lucide-react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface ServiceItem {
  id: string;
  path: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  stripColor: string;
  hoverColor: string;
  features: string[];
}

interface ServiciosGridProps {
  services: ServiceItem[];
  onNavigate: (path: string) => void;
  onContact: (title: string) => void;
}

export default function ServiciosGrid({ services, onNavigate, onContact }: ServiciosGridProps) {
  return (
    <section className="relative bg-brand-light py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle,#808080_0.7px,transparent_0.7px)] bg-[size:14px_14px] pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-1.5 text-brand-red font-bold text-xs tracking-widest uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
            Soluciones Especializadas
          </span>
          <h2 className="font-display font-extrabold text-2xl md:text-4xl text-brand-dark tracking-tight">
            Elige el servicio que tu <span className="text-brand-red">empresa necesita</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 group flex flex-col"
              >
                <div className={`h-1.5 w-full bg-gradient-to-r ${service.stripColor}`} />

                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <div className="flex items-start gap-4 mb-5">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${service.hoverColor}`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-display font-bold text-lg md:text-xl text-brand-dark tracking-tight group-hover:text-brand-red transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-brand-gray font-light mt-0.5">{service.subtitle}</p>
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-6 flex-1">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                        <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${service.hoverColor.includes('red') ? 'text-brand-red' : service.hoverColor.includes('blue') ? 'text-blue-500' : service.hoverColor.includes('amber') ? 'text-amber-500' : 'text-purple-500'}`} />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <button
                      onClick={() => onNavigate(service.path)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-red hover:text-brand-dark transition-colors cursor-pointer group/btn"
                    >
                      <span>Ver Detalles del Servicio</span>
                      <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                    </button>
                    <button
                      onClick={() => onContact(service.title)}
                      className="text-xs font-semibold text-brand-gray hover:text-brand-red transition-colors cursor-pointer"
                    >
                      Cotizar
                    </button>
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
