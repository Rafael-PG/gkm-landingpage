"use client";

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { pillars } from '@/app/home-data';

function PillarCard({ pillar, idx }: { pillar: typeof pillars[0]; idx: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setRotate({ x: y * -10, y: x * -10 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const PillarIcon = pillar.icon;
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.12 }}
      className="group relative p-6 rounded-2xl bg-white border border-gray-100/80 shadow-md [transform-style:preserve-3d] will-change-transform cursor-default transition-all duration-500 hover:shadow-xl hover:border-brand-red/20 hover:-translate-y-1"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(${rotate.x !== 0 || rotate.y !== 0 ? 1.02 : 1})` }}
    >
      <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-brand-red/15 to-transparent" />
      <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-brand-red/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="flex flex-col gap-4">
        <div className="w-11 h-11 rounded-full bg-brand-red/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(229,40,34,0.2)] transition-all duration-500">
          <PillarIcon className="w-5 h-5 text-brand-red" />
        </div>
        <div className="space-y-2">
          <h3 className="font-display font-bold text-sm text-brand-dark uppercase tracking-wide">{pillar.title}</h3>
          <p className="text-xs text-brand-gray leading-relaxed font-light">{pillar.desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ExcelenciaSection() {
  const [youtubeLoaded, setYoutubeLoaded] = useState(false);
  return (
    <section className="relative bg-[#F8F9F9] py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle,#808080_0.7px,transparent_0.7px)] bg-[size:14px_14px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-10">
          <motion.span
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-1.5 text-brand-red font-bold text-xs tracking-widest uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />Excelencia Operacional
          </motion.span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6"
          >
            <motion.h2 className="font-display font-extrabold text-brand-dark leading-none tracking-tight">
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="block text-lg sm:text-2xl md:text-3xl font-normal text-brand-gray mb-3"
              >
                Un aliado tecnológico para
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
                className="block text-3xl sm:text-5xl md:text-7xl leading-[1.05]"
              >
                OPERACIONES QUE NO
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.24, ease: "easeOut" }}
                className="block text-3xl sm:text-5xl md:text-7xl leading-[1.05] text-brand-red mt-1"
              >
                PUEDEN DETENERSE
              </motion.span>
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="h-[3px] w-full bg-gradient-to-r from-brand-red via-brand-red to-brand-red/40 rounded-full origin-left"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-brand-gray text-sm md:text-base leading-relaxed font-light"
            >
              Ayudamos a empresas de diversos sectores a mantener la continuidad de sus operaciones mediante soluciones integrales de infraestructura tecnológica, soporte TI, videovigilancia y servicio técnico autorizado. Nuestra combinación de experiencia, cobertura nacional y capacidad de ejecución nos permite responder con rapidez a los desafíos tecnológicos de organizaciones que requieren un servicio confiable y orientado a resultados.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl bg-brand-dark/5">
              {youtubeLoaded ? (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/1TunwZKYMRw?autoplay=1"
                  title="Video corporativo GKM Technology"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <button
                  onClick={() => setYoutubeLoaded(true)}
                  className="absolute inset-0 w-full h-full cursor-pointer group"
                  aria-label="Reproducir video corporativo GKM Technology"
                >
                  <Image
                    src="/images/yt-thumbnail.jpg"
                    alt="Vista previa del video corporativo GKM Technology"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-brand-red/90 flex items-center justify-center shadow-xl shadow-black/30 group-hover:scale-110 transition-transform duration-200">
                      <svg className="w-7 h-7 md:w-8 md:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </button>
              )}
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl pointer-events-none z-10" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="h-px w-2/5 bg-gradient-to-r from-transparent via-brand-red/60 to-transparent mx-auto origin-center mb-12"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 [perspective:1200px]"
        >
          {pillars.map((pillar, idx) => (
            <PillarCard key={pillar.title} pillar={pillar} idx={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
