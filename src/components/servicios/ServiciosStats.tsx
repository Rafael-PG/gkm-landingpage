"use client";

import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

const stats = [
  { value: 850, suffix: '+', label: 'Clientes Corporativos' },
  { value: 98.5, suffix: '%', label: 'Uptime Garantizado', decimals: 1 },
  { value: 24, suffix: '/7', label: 'Soporte Técnico' },
  { value: 15, suffix: '+', label: 'Años de Experiencia' },
];

function AnimatedStat({ stat, visible }: { stat: typeof stats[number]; visible: boolean }) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!visible || hasAnimated.current) return;
    hasAnimated.current = true;
    const target = stat.value;
    const duration = 1800;
    const start = performance.now();
    const raf = () => {
      const elapsed = performance.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * target);
      if (progress < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [visible, stat.value]);

  return (
    <div className="flex flex-col items-center text-center px-4">
      <span className="font-display font-extrabold text-3xl md:text-4xl text-white tracking-tight">
        {count > 0 ? (
          stat.decimals ? count.toFixed(1) : Math.floor(count)
        ) : 0}
        {stat.suffix}
      </span>
      <span className="text-xs md:text-sm text-gray-400 font-medium mt-1 leading-snug">
        {stat.label}
      </span>
    </div>
  );
}

export default function ServiciosStats() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!statsRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(statsRef.current!); } },
      { threshold: 0.3 }
    );
    observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={statsRef} className="bg-brand-dark border-y border-brand-gray/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-brand-gray/20"
        >
          {stats.map((stat) => (
            <AnimatedStat key={stat.label} stat={stat} visible={visible} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
