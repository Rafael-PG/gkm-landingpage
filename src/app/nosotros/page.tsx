"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Target, Eye, ShieldCheck, Award, Heart, ArrowRight, Building2, Handshake, Warehouse, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

const ExcelenciaSection = dynamic(() => import('@/components/home/ExcelenciaSection'), {
  loading: () => <div className="h-[600px] bg-brand-light animate-pulse" />,
});

const SucursalesSection = dynamic(() => import('@/components/home/SucursalesSection'), {
  loading: () => <div className="h-[500px] bg-brand-light animate-pulse" />,
});

const TestimonialsSection = dynamic(() => import('@/components/home/TestimonialsSection'), {
  loading: () => <div className="h-[400px] bg-brand-light animate-pulse" />,
});

const ContactSection = dynamic(() => import('@/components/home/ContactSection'), {
  loading: () => <div className="h-[600px] bg-brand-light animate-pulse" />,
});

const stats = [
  { value: 14, suffix: '+', label: 'Años de Experiencia' },
  { value: 340, suffix: '+', label: 'Contratos Corporativos' },
  { value: 100, suffix: '%', label: 'SLA de Cumplimiento' },
  { label: '1,100 m² de Centro Logístico', value: null as number | null, suffix: '' },
];

function AnimatedStat({ stat, visible }: { stat: typeof stats[0]; visible: boolean }) {
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
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });

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

      {isInView && (
        <motion.circle
          cx={200} cy={200} r={60} fill="url(#centerGlow)"
          animate={{ r: [55, 68, 55], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      <circle cx={200} cy={200} r={42} fill="#020202" stroke="#e52822" strokeWidth={2.5} />
      {isInView && (
        <motion.circle
          cx={200} cy={200} r={12} fill="#e52822"
          animate={{ r: [10, 14, 10], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
      <text x={200} y={205} textAnchor="middle" fill="white" fontSize={11} fontFamily="inherit" fontWeight={700}>GKM</text>

      {satelliteIndices.map(i => {
        const isActive = activeNode === i;
        const pos = nodePositions[i];
        const r = nodeRadius[i];
        return (
          <g key={`node-${i}`}>
            {isActive && isInView && (
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

export default function Nosotros() {
  const router = useRouter();
  const [statsVisible, setStatsVisible] = useState(false);

  const misVis = [
    {
      icon: Target,
      title: 'Nuestra Misión',
      desc: 'Suministrar, mantener y certificar la infraestructura de hardware, videovigilancia CCTV y soporte técnico informático de alta confiabilidad, maximizando el tiempo de actividad de nuestros clientes corporativos.',
    },
    {
      icon: Eye,
      title: 'Nuestra Visión',
      desc: 'Ser reconocidos para el 2030 como la principal corporación de ingeniería de hardware y redes de conectividad del país, famosa por la excelencia técnica, transparencia operacional y tiempos de respuesta impecables.',
    },
  ];

  const valores = [
    { icon: ShieldCheck, title: 'Confiabilidad', desc: 'Garantizamos que cada proyecto cumpla con rigurosos protocolos de testing físico y estándares de calidad certificados.' },
    { icon: Award, title: 'Certificación', desc: 'Todos nuestros puntos e infraestructura son certificados por Fluke Networks, asegurando redes que funcionan a plena capacidad.' },
    { icon: Heart, title: 'Vocación de Servicio', desc: 'Atendemos cada reporte técnico con la urgencia y precisión que un incidente corporativo merece, sin rodeos ni esperas.' },
  ];

  const milestones = [
    { year: '2012', icon: Building2, title: 'Fundación', desc: 'Nace GKM Technology con la visión de transformar el soporte TI empresarial en Perú, apostando por la calidad y la confianza como pilares fundamentales.' },
    { year: '2015', icon: Handshake, title: 'Primeros Grandes Clientes', desc: 'Incorporamos cadenas de retail multisede a nuestra cartera corporativa, consolidando nuestra propuesta de valor en el sector empresarial.' },
    { year: '2020', icon: Warehouse, title: 'Centro Logístico 1,100 m²', desc: 'Inauguramos nuestra base operativa en Puente Piedra, un centro de almacenamiento general, bobinas de red, servidores y repuestos oficiales.' },
    { year: '2024', icon: TrendingUp, title: '+340 Contratos Corporativos', desc: 'Alcanzamos cobertura nacional con presencia en las principales ciudades del país, atendiendo a corporaciones de diversos sectores.' },
  ];

  return (
    <div>
      <section className="relative pt-20 pb-8 md:pt-28 md:pb-12 -mt-20 bg-brand-dark text-white">
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

      <ExcelenciaSection />

      <section className="relative bg-brand-dark text-white py-16 md:py-24 overflow-x-clip">
        <div className="absolute top-1/2 left-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-brand-red/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14 md:mb-16 space-y-3"
          >
            <span className="inline-flex items-center gap-1.5 text-brand-red font-bold text-xs tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />Nuestra Trayectoria
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight leading-tight">
              Hitos que han marcado{' '}
              <span className="text-brand-red">nuestro camino</span>
            </h2>
            <div className="h-[3px] w-full max-w-[200px] bg-gradient-to-r from-brand-red via-brand-red to-brand-red/40 rounded-full mt-4 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">
            <div className="relative">
              <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-brand-red via-white/10 to-transparent" />

              {milestones.map((m, idx) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="relative pl-14 pb-12 last:pb-0"
                >
                  <div className="absolute left-[11px] top-1 w-[17px] h-[17px] rounded-full bg-brand-red border-[3px] border-brand-dark shadow-[0_0_0_1px_rgba(229,40,34,0.3)] z-10" />
                  <span className="font-display font-extrabold text-brand-red text-lg md:text-xl">{m.year}</span>
                  <div className="flex items-center gap-3 mt-1">
                    <m.icon className="w-5 h-5 text-brand-red/70 flex-shrink-0" />
                    <h3 className="font-display font-bold text-white text-base md:text-lg">{m.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed font-light mt-2 max-w-lg">{m.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative h-[350px] md:h-[450px] lg:h-[520px] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/nosotros/equipo-trayectoria.webp"
                alt="Equipo técnico GKM Technology en operaciones"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-brand-dark/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white/80 text-sm font-light leading-relaxed">
                  <span className="font-bold text-brand-red">+14 años</span> de experiencia nos respaldan como el aliado estratégico en hardware y TI de las principales corporaciones del país.
                </p>
              </div>
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none z-10" />
            </motion.div>
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.12 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 pt-10 border-t border-white/5"
          >
            {[
              { label: 'Rendimiento', value: 90 },
              { label: 'Atención', value: 90 },
              { label: 'Responsabilidad', value: 100 },
            ].map((bar, idx) => (
              <motion.div
                key={bar.label}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-gray-300">{bar.label}</span>
                  <span className="text-sm font-bold text-brand-red">{bar.value}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${bar.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.6 + idx * 0.15, ease: "easeOut" }}
                    className="h-full bg-brand-red rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative bg-[#F8F9F9] py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px]" />
          <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle,#808080_0.7px,transparent_0.7px)] bg-[size:14px_14px]" />
        </div>
        <div className="absolute top-1/2 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14 space-y-3"
          >
            <span className="inline-flex items-center gap-1.5 text-brand-red font-bold text-xs tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />Nuestro Propósito
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-brand-dark tracking-tight leading-tight">
              Misión, Visión y{' '}
              <span className="text-brand-red">VALORES</span>
            </h2>
            <div className="h-[3px] w-full max-w-[200px] bg-gradient-to-r from-brand-red via-brand-red to-brand-red/40 rounded-full mt-4 mx-auto" />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.12 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10 lg:mb-12"
          >
            {misVis.map((item, idx) => (
              <motion.div
                key={item.title}
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="group relative bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-brand-red to-brand-red/40 rounded-full" />
                <div className="flex items-start gap-5 pt-2">
                  <div className="w-14 h-14 rounded-2xl bg-brand-red/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(229,40,34,0.15)] transition-all duration-300">
                    <item.icon className="w-7 h-7 text-brand-red" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="font-display font-bold text-lg text-brand-dark">{item.title}</h3>
                    <p className="text-sm text-brand-gray leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm mb-10 lg:mb-12 overflow-hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-red" />
            <div className="absolute -top-4 -right-4 text-6xl text-brand-red/[0.04] font-display font-extrabold leading-none pointer-events-none select-none">"</div>
            <div className="relative pl-5">
              <p className="text-sm md:text-base text-brand-gray leading-relaxed font-light italic">
                En GKM Technology entendemos que el hardware y la conectividad física de red son el sistema nervioso de la empresa moderna. Si estos fallan, la producción se paraliza. Es por ello que no ofrecemos soluciones paliativas; entregamos ingeniería robusta y certificada.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 1 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
          >
            {valores.map((item, idx) => (
              <motion.div
                key={item.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-red/20 transition-all duration-300"
              >
                <span className="absolute top-3 right-4 font-display font-extrabold text-3xl text-brand-red/10 leading-none select-none">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(229,40,34,0.15)] transition-all duration-300">
                    <item.icon className="w-6 h-6 text-brand-red" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-display font-bold text-sm text-brand-dark uppercase tracking-wide">{item.title}</h4>
                    <p className="text-xs text-brand-gray leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <SucursalesSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
