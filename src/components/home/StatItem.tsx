"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';

export default function StatItem({ label, value, suffix, icon: Icon }: { label: string; value: number; suffix: string; icon: any }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    setCount(0);
    const duration = 2000;
    const startTime = performance.now();
    let raf: number;
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
      }}
      className="group relative bg-white border border-gray-100 rounded-2xl p-8 text-center transition-all duration-500 hover:shadow-xl hover:border-brand-red/20 hover:-translate-y-0.5"
    >
      <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(229,40,34,0.2)] transition-all duration-500">
        <Icon className="w-5 h-5 text-brand-red" />
      </div>
      <div className="font-display font-extrabold text-3xl md:text-4xl text-brand-dark mb-2 tabular-nums">
        {count}{suffix}
      </div>
      <div className="text-xs text-brand-gray uppercase tracking-wider font-semibold">
        {label}
      </div>
    </motion.div>
  );
}
