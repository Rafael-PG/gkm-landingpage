"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import { FileText } from 'lucide-react';

export default function CaseCard({ brand, logo, status, metrics, description, tags }: {
  brand: string;
  logo: string;
  status: string;
  metrics: { value: number; suffix: string; label: string }[];
  description: string;
  tags: string[];
}) {
  const [counts, setCounts] = useState<number[]>(metrics.map(() => 0));
  const ref = useRef<HTMLDivElement>(null);
  const done = useRef(false);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    if (done.current) return;
    done.current = true;
    const duration = 2000;
    const startTime = performance.now();
    let raf: number;
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounts(metrics.map(m => Math.floor(eased * m.value)));
      if (progress < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [inView, metrics]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-500"
    >
      <div className="flex items-center justify-between px-6 py-3 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center gap-2 text-[10px] text-brand-gray font-bold uppercase tracking-widest">
          <FileText className="w-3.5 h-3.5 text-brand-red" />
          <span>Expediente Técnico</span>
        </div>
        <span className="text-[10px] text-green-700 bg-green-50 border border-green-200 font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">{status}</span>
      </div>

      <div className="flex items-center gap-4 px-6 pt-5 pb-3">
        <div className="w-12 h-12 relative flex-shrink-0">
          <Image src={logo} alt={brand} fill className="object-contain" />
        </div>
        <div>
          <h3 className="font-display font-bold text-base text-brand-dark">{brand}</h3>
          <p className="text-[10px] text-brand-gray uppercase tracking-widest font-semibold">Reporte de Proyecto</p>
        </div>
      </div>

      <div className="px-6 py-4 border-t border-gray-100">
        <div className="grid grid-cols-3 gap-4">
          {metrics.map((m, i) => (
            <div key={m.label} className="text-center">
              <div className="font-display font-extrabold text-base sm:text-lg md:text-xl text-brand-dark tabular-nums">{counts[i]}{m.suffix}</div>
              <div className="text-[9px] text-brand-gray font-bold uppercase tracking-widest mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-brand-red/50 via-brand-red/20 to-transparent mx-6" />

      <div className="px-6 py-4">
        <p className="text-sm text-brand-gray leading-relaxed font-light">{description}</p>
      </div>

      <div className="px-6 pb-5 flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="bg-brand-red/5 text-brand-red text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider border border-brand-red/15">{tag}</span>
        ))}
      </div>
    </motion.div>
  );
}
