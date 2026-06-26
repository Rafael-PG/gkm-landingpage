"use client";

import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, Award, Heart, Map, Building2, Wrench } from 'lucide-react';

export default function Nosotros() {
  const stats = [
    { value: '15+', label: 'Años de Experiencia' },
    { value: '340+', label: 'Contratos Corporativos' },
    { value: '100%', label: 'SLA de Cumplimiento' },
    { value: '1,100 m²', label: 'Centro de Distribución' }
  ];

  const corePillars = [
    { title: 'Cobertura Nacional', desc: 'Capacidad operativa para desplegar cuadrillas de ingenieros, equipamiento de redes y laboratorios técnicos en cualquier región del Perú con tiempos de respuesta coordinados.', icon: Map },
    { title: 'Equipo Técnico Certificado', desc: 'Nuestros ingenieros y técnicos cuentan con certificaciones SCTR vigentes y de fabricantes de hardware de primera línea para garantizar servicios seguros y de excelencia.', icon: Award },
    { title: 'Logística de Gran Escala', desc: 'Respaldados por nuestro Centro Logístico de Puente Piedra de 1,100 m² para acopio, ensamblado, pruebas de laboratorio y distribución ágil de repuestos y equipos.', icon: Building2 },
    { title: 'Enfoque en Hardware y Redes', desc: 'Especialización total y absoluta en capas físicas y operativas: desde el tendido de fibra óptica de alto tráfico hasta la microelectrónica de equipos corporativos.', icon: Wrench }
  ];

  return (
    <div className="bg-white font-sans text-gray-700">
      <section className="relative py-20 md:py-28 bg-brand-dark text-white overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.2, 0.12] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -right-20 w-[450px] h-[450px] bg-brand-red rounded-full blur-[120px] pointer-events-none"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(229,40,34,0.15),transparent_60%)]" />

        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
        >
          <motion.span variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } } }} className="text-brand-red font-bold text-xs tracking-widest uppercase bg-brand-red/15 px-3 py-1.5 rounded-full inline-block mb-3">Nuestra Trayectoria</motion.span>
          <motion.h1 variants={{ hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } }} className="font-display font-extrabold text-3xl md:text-5xl tracking-tight mb-6">Quiénes Somos en <span className="text-brand-red">GKM Technology</span></motion.h1>
          <motion.p variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } }} className="max-w-3xl mx-auto text-gray-300 text-base md:text-lg leading-relaxed font-light">
            Somos el aliado estratégico en hardware y TI preferido por corporaciones y cadenas de retail multisede del país. Diseñamos e implementamos operaciones tecnológicas que nunca se detienen.
          </motion.p>
        </motion.div>
      </section>

      <section className="bg-brand-light border-y border-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
          >
            {stats.map((stat, idx) => (
              <motion.div key={idx} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }} className="space-y-1">
                <p className="font-display font-extrabold text-3xl md:text-5xl text-brand-red">{stat.value}</p>
                <p className="text-xs md:text-sm font-semibold text-brand-gray tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }} className="space-y-6">
              <h2 className="font-display font-extrabold text-2xl md:text-3xl text-brand-dark leading-tight tracking-tight">Misión, Visión y Compromiso Operativo</h2>
              <p className="text-gray-600 leading-relaxed font-light">
                En GKM Technology entendemos que el hardware y la conectividad física de red son el sistema nervioso de la empresa moderna. Si estos fallan, la producción se paraliza. Es por ello que no ofrecemos soluciones paliativas; entregamos ingeniería robusta y certificada.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-red/10 text-brand-red rounded-xl"><Target className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-brand-dark uppercase tracking-wide">Nuestra Misión</h4>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                      Suministrar, mantener y certificar la infraestructura de hardware, videovigilancia CCTV y soporte técnico informático de alta confiabilidad, maximizando el tiempo de actividad de nuestros clientes corporativos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-red/10 text-brand-red rounded-xl"><Eye className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-brand-dark uppercase tracking-wide">Nuestra Visión</h4>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                      Ser reconocidos para el 2030 como la principal corporación de ingeniería de hardware y redes de conectividad del país, famosa por la excelencia técnica, transparencia operacional y tiempos de respuesta impecables.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 gap-4"
            >
              <motion.div variants={{ hidden: { opacity: 0, scale: 0.95, y: 15 }, visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } } }} whileHover={{ y: -5, transition: { duration: 0.2 } }} className="bg-brand-dark text-white p-6 rounded-2xl flex flex-col justify-between aspect-square border border-brand-gray/20 shadow-lg">
                <ShieldCheck className="w-10 h-10 text-brand-red" />
                <div>
                  <h4 className="font-display font-bold text-lg mb-2">Confiabilidad</h4>
                  <p className="text-xs text-gray-400">Garantizamos que cada proyecto cumpla con rigurosos protocolos de testing físico.</p>
                </div>
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, scale: 0.95, y: 15 }, visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, delay: 0.05 } } }} whileHover={{ y: -5, transition: { duration: 0.2 } }} className="bg-brand-light p-6 rounded-2xl flex flex-col justify-between aspect-square border border-gray-200">
                <Award className="w-10 h-10 text-brand-red" />
                <div>
                  <h4 className="font-display font-bold text-lg text-brand-dark mb-2">Certificación</h4>
                  <p className="text-xs text-brand-gray">Todos nuestros puntos e infraestructura son certificados por Fluke Networks.</p>
                </div>
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, scale: 0.95, y: 15 }, visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } } }} whileHover={{ y: -5, transition: { duration: 0.2 } }} className="bg-brand-light p-6 rounded-2xl flex flex-col justify-between aspect-square border border-gray-200 col-span-2 flex-row items-center gap-6">
                <Heart className="w-10 h-10 text-brand-red flex-shrink-0" />
                <div>
                  <h4 className="font-display font-bold text-base text-brand-dark mb-1">Vocación de Servicio</h4>
                  <p className="text-xs text-brand-gray">Atendemos cada reporte técnico con la urgencia y precisión que un incidente corporativo merece, sin rodeos.</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-brand-light py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-brand-dark uppercase tracking-wider mb-4">Pilares Operativos GKM</h2>
            <p className="text-brand-gray text-sm leading-relaxed font-light">Nuestra estructura técnica y logística está diseñada para solventar cualquier percance o reto que enfrente su equipamiento multisede.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {corePillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex gap-4 items-start"
              >
                <div className="p-3 bg-brand-red/10 text-brand-red rounded-xl flex-shrink-0"><pillar.icon className="w-6 h-6" /></div>
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-lg text-brand-dark">{pillar.title}</h3>
                  <p className="text-sm text-brand-gray leading-relaxed font-light">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
