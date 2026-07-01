"use client";

import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

function useIsInView(opts?: { once?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (opts?.once) observer.unobserve(el);
        } else if (!opts?.once) {
          setInView(false);
        }
      },
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, inView };
}

const nodePositions = [
  { cx: 200, cy: 200 },
  { cx: 70, cy: 80 },
  { cx: 330, cy: 70 },
  { cx: 65, cy: 320 },
  { cx: 340, cy: 300 },
  { cx: 200, cy: 45 },
];

const nodeRadius = [42, 28, 24, 26, 30, 22];
const nodeLabels = ['GKM', 'Sedes', 'CCTV', 'Soporte', 'Data Center', 'Clientes'];

const route = [0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0];

function DataDot({ onArrive }: { onArrive: (idx: number) => void }) {
  const [step, setStep] = useState(0);
  const [version, setVersion] = useState(0);

  const from = nodePositions[route[step]];
  const to = nodePositions[route[step + 1]];

  const handleComplete = () => {
    const arrivedAt = route[step + 1];
    onArrive(arrivedAt);

    const next = step + 1;
    if (next + 1 >= route.length) {
      setStep(0);
    } else {
      setStep(next);
    }
    setVersion(v => v + 1);
  };

  return (
    <motion.circle
      key={version}
      r={4}
      fill="#e52822"
      initial={{ cx: from.cx, cy: from.cy }}
      animate={{ cx: to.cx, cy: to.cy }}
      onAnimationComplete={handleComplete}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
  );
}

function NetworkTopology() {
  const [activeNode, setActiveNode] = useState(-1);
  const { ref, inView } = useIsInView();

  const satelliteIndices = [1, 2, 3, 4, 5];

  return (
    <div ref={ref} className="w-full h-full">
      <svg viewBox="0 0 400 400" className="w-full h-full">
        <defs>
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#e52822" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#e52822" stopOpacity="0" />
          </radialGradient>
        </defs>

      {satelliteIndices.map(i => (
        <line
          key={`edge-${i}`}
          x1={nodePositions[0].cx} y1={nodePositions[0].cy}
          x2={nodePositions[i].cx} y2={nodePositions[i].cy}
          stroke="#e52822" strokeWidth={1} strokeOpacity={0.2}
        />
      ))}

      <DataDot onArrive={setActiveNode} />

      {inView && (
        <motion.circle
          cx={200} cy={200} r={60} fill="url(#centerGlow)"
          initial={{ r: 55, opacity: 0.3 }}
          animate={{ r: 68, opacity: 0.5 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
      )}

      <circle cx={200} cy={200} r={42} fill="#020202" stroke="#e52822" strokeWidth={2.5} />
      {inView && (
        <motion.circle
          cx={200} cy={200} r={12} fill="#e52822"
          initial={{ r: 10, opacity: 0.7 }}
          animate={{ r: 14, opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
      )}
      <text x={200} y={205} textAnchor="middle" fill="white" fontSize={11} fontFamily="inherit" fontWeight={700}>GKM</text>

      {satelliteIndices.map(i => {
        const isActive = activeNode === i;
        const pos = nodePositions[i];
        const r = nodeRadius[i];
        return (
          <g key={`node-${i}`}>
            {isActive && inView && (
              <motion.circle
                cx={pos.cx} cy={pos.cy} r={r + 4}
                fill="none" stroke="#e52822" strokeWidth={2.5}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: [0.5, 0.9, 0.5], scale: [1, 1.08, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              />
            )}
            <circle
              cx={pos.cx} cy={pos.cy} r={r}
              fill="#020202" stroke="#e52822"
              strokeWidth={isActive ? 2.5 : 1}
              strokeOpacity={isActive ? 1 : 0.3}
            />
            <circle
              cx={pos.cx} cy={pos.cy} r={r * 0.3}
              fill="#e52822" opacity={isActive ? 0.9 : 0.2}
            />
            <text
              x={pos.cx} y={pos.cy + 4.5}
              textAnchor="middle" fill="white"
              fontSize={8} fontFamily="inherit"
              fontWeight={600} opacity={isActive ? 1 : 0.6}
            >
              {nodeLabels[i]}
            </text>
          </g>
        );
      })}
    </svg>
    </div>
  );
}

function AnimatedStat({ stat, visible }: { stat: { value: number | null; suffix: string; label: string }; visible: boolean }) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!visible || hasAnimated.current || stat.value === null) return;
    hasAnimated.current = true;
    const target = stat.value;
    const duration = 1500;
    const start = performance.now();
    const raf = () => {
      const elapsed = performance.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [visible, stat.value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center space-y-1"
    >
      <p className="font-display font-extrabold text-3xl md:text-5xl text-white">
        {stat.value !== null ? count : stat.label.split(' ')[0]}{stat.suffix}
      </p>
      <p className="text-xs md:text-sm font-semibold text-gray-400 tracking-wide">
        {stat.value !== null ? stat.label : stat.label.split(' ').slice(1).join(' ')}
      </p>
    </motion.div>
  );
}

interface Stat {
  value: number | null;
  suffix: string;
  label: string;
}

export default function NosotrosHero({ stats }: { stats: Stat[] }) {
  const router = useRouter();
  const [statsVisible, setStatsVisible] = useState(false);

  return (
    <section className="relative pt-20 pb-8 md:pt-28 md:pb-12 -mt-20 bg-brand-dark text-white overflow-hidden">
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -right-20 w-[450px] h-[450px] bg-brand-red rounded-full blur-[120px] pointer-events-none"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(229,40,34,0.15),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-start md:items-center">
          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
            initial="hidden"
            animate="visible"
            className="relative z-10 space-y-5"
          >
            <motion.span
              variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } } }}
              className="inline-flex items-center gap-1.5 text-brand-red font-bold text-xs tracking-widest uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />Nuestra Trayectoria
            </motion.span>
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } }}
              className="font-display font-extrabold text-4xl md:text-6xl tracking-tight leading-[1.1]"
            >
              Quiénes Somos en{' '}
              <span className="text-brand-red">GKM TECHNOLOGY</span>
            </motion.h1>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } }}
              className="text-gray-300 text-base md:text-lg leading-relaxed font-light max-w-xl"
            >
              Somos el aliado estratégico en hardware y TI preferido por corporaciones y cadenas de retail multisede del país. Diseñamos e implementamos operaciones tecnológicas que nunca se detienen.
            </motion.p>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } } }}
              className="pt-2"
            >
              <button
                onClick={() => router.push('/contacto')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-red hover:bg-brand-red/90 text-white font-semibold rounded-lg transition-all cursor-pointer hover:scale-105 active:scale-95 shadow-lg shadow-brand-red/30"
              >
                Contáctanos
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>

          <div className="absolute inset-0 md:relative md:inset-auto opacity-[0.06] md:opacity-100 pointer-events-none md:pointer-events-auto md:h-[360px] lg:h-[480px] md:flex md:items-center md:justify-center">
            <NetworkTopology />
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          onViewportEnter={() => setStatsVisible(true)}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-10 mt-8 border-t border-white/5"
        >
          {stats.map((stat, idx) => (
            <AnimatedStat key={idx} stat={stat} visible={statsVisible} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
