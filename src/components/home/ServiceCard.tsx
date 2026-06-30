"use client";

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ServiceCard({ title, subtitle, description, features, path, icon: Icon }: {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  path: string;
  icon: any;
}) {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
      className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-brand-red/30 hover:shadow-[0_0_40px_-10px_rgba(229,40,34,0.15)] transition-all duration-500"
    >
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 p-6 md:p-8">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-brand-red/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(229,40,34,0.2)] transition-all duration-500">
          <Icon className="w-10 h-10 text-brand-red" />
        </div>

        <div className="flex-1 space-y-4">
          <div>
            <h3 className="font-display font-bold text-xl text-white">{title}</h3>
            <p className="text-[10px] text-brand-red font-bold uppercase tracking-widest mt-0.5">{subtitle}</p>
          </div>

          <ul className="space-y-2">
            {features.map(f => (
              <li key={f} className="flex items-center gap-2 text-xs text-gray-400">
                <span className="w-1 h-1 rounded-full bg-brand-red flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          <div className="w-16 h-px bg-gradient-to-r from-brand-red/60 to-transparent" />

          <p className="text-sm text-gray-400 leading-relaxed font-light">{description}</p>

          <button onClick={() => router.push(path)} className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-red hover:bg-brand-red/90 text-white text-xs font-semibold rounded-lg transition-all cursor-pointer">
            <span>Explorar Servicio</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
