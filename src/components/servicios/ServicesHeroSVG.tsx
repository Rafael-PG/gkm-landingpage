"use client";

import { motion } from 'motion/react';
import { ShieldCheck, Cpu, Wrench, Server } from 'lucide-react';

const items = [
  { icon: ShieldCheck, label: 'CCTV Empresarial', id: 'cctv' },
  { icon: Cpu, label: 'Soporte TI', id: 'soporte' },
  { icon: Wrench, label: 'Soporte Técnico', id: 'tecnico' },
  { icon: Server, label: 'Infraestructura', id: 'infra' },
];

const badges = [
  { label: 'Videovigilancia', x: '14%', y: '1%', delay: 0.2 },
  { label: 'Mesa de Ayuda', x: '60%', y: '1%', delay: 0.5 },
  { label: 'Reparaciones', x: '16%', y: '87%', delay: 0.8 },
  { label: 'Conectividad', x: '60%', y: '87%', delay: 1.1 },
];

export default function ServicesHeroSVG() {
  return (
    <div className="relative w-full max-w-[460px]">
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        viewBox="0 0 460 380"
        preserveAspectRatio="xMidYMid meet"
      >
        <motion.path
          d="M 120 80 L 340 80 L 340 300 L 120 300 Z"
          fill="none"
          stroke="rgba(229,40,34,0.2)"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
        <motion.path
          d="M 120 80"
          fill="none"
          stroke="rgba(229,40,34,0.15)"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />

        <motion.path
          d="M 120 80 L 340 300"
          fill="none"
          stroke="rgba(229,40,34,0.08)"
          strokeWidth="1"
          strokeDasharray="4 6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.3, ease: 'easeInOut' }}
        />
        <motion.path
          d="M 340 80 L 120 300"
          fill="none"
          stroke="rgba(229,40,34,0.08)"
          strokeWidth="1"
          strokeDasharray="4 6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: 'easeInOut' }}
        />
        <motion.circle
          cx="120" cy="80" r="4"
          fill="#e52822"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.3 }}
        />
        <motion.circle
          cx="340" cy="80" r="4"
          fill="#e52822"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.3 }}
        />
        <motion.circle
          cx="120" cy="300" r="4"
          fill="#e52822"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.3 }}
        />
        <motion.circle
          cx="340" cy="300" r="4"
          fill="#e52822"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.3 }}
        />

        <motion.circle
          r="3"
          fill="#e52822"
          initial={{ cx: 120, cy: 80, opacity: 0 }}
          animate={{
            cx: [120, 340, 340, 120, 120],
            cy: [80, 80, 300, 300, 80],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
            delay: 1.5,
          }}
          style={{ opacity: 0.9 }}
        />

        <motion.path
          d="M 120 80 L 340 80 L 340 300 L 120 300 Z"
          fill="none"
          stroke="rgba(229,40,34,0.06)"
          strokeWidth="1"
          strokeDasharray="8 4"
          animate={{ strokeDashoffset: [0, -24] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
        />
      </svg>

      <div className="relative grid grid-cols-2 gap-5 md:gap-6 p-6 md:p-8 z-10">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center gap-3 text-center"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center group transition-all duration-300 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(229,40,34,0.15) 0%, transparent 70%)',
                  }}
                />
                <motion.div
                  animate={{
                    borderColor: ['rgba(255,255,255,0.1)', 'rgba(229,40,34,0.2)', 'rgba(255,255,255,0.1)'],
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                  className="absolute inset-0 rounded-2xl border"
                />
                <Icon className="w-9 h-9 md:w-11 md:h-11 text-white/80 relative z-10" />
              </div>
              <span className="text-[10px] md:text-xs text-gray-400 font-semibold uppercase tracking-widest">
                {item.label}
              </span>
            </motion.div>
          );
        })}
      </div>

      {badges.map((badge) => (
        <motion.div
          key={badge.label}
          className="absolute px-2.5 py-1 rounded-md bg-white/5 backdrop-blur-sm border border-white/10 text-[9px] font-mono text-gray-400 tracking-wider z-20"
          style={{ left: badge.x, top: badge.y }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, -3, 0] }}
          transition={{
            opacity: { delay: 1.8 + badge.delay, duration: 0.4 },
            y: { duration: 4 + badge.delay, repeat: Infinity, ease: 'easeInOut', delay: 2 + badge.delay },
          }}
        >
          {badge.label}
        </motion.div>
      ))}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        className="text-center text-[10px] text-gray-500/60 font-mono tracking-wider mt-1"
      >
        Soluciones integradas
      </motion.p>
    </div>
  );
}
