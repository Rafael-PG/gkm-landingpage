"use client";

import { useState, useEffect, useLayoutEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ShieldCheck, Cpu, Wrench, Server, Map, Award, Building2, Layers, 
  ArrowRight, Search, FileText, ChevronDown, ChevronRight, MapPin, Monitor, 
  Phone, Mail, Warehouse, Store, Zap, Heart 
} from 'lucide-react';
import { useRouter } from 'next/navigation';


function StatItem({ label, value, suffix, icon: Icon }: { label: string; value: number; suffix: string; icon: any }) {
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
      <div className="font-display font-extrabold text-4xl md:text-5xl text-brand-dark mb-2 tabular-nums">
        {count}{suffix}
      </div>
      <div className="text-xs text-brand-gray uppercase tracking-wider font-semibold">
        {label}
      </div>
    </motion.div>
  );
}

function CaseCard({ brand, logo, status, metrics, description, tags }: {
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
              <div className="font-display font-extrabold text-2xl md:text-3xl text-brand-dark tabular-nums">{counts[i]}{m.suffix}</div>
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

function ServiceCard({ title, subtitle, description, features, path, icon: Icon }: {
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

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const heroSlides = [
    {
      title: 'CCTV Empresarial',
      subtitle: 'Seguridad Electrónica',
      desc: 'Diseñamos, implementamos y mantenemos sistemas de videovigilancia que fortalecen la seguridad, supervisión y control operativo de su empresa.',
      path: '/servicios/cctv',
      image: '/images/hero/slide-cctv.webp',
    },
    {
      title: 'Soporte TI Empresarial',
      subtitle: 'Continuidad Operativa',
      desc: 'Garantizamos la continuidad operativa de su empresa mediante soporte remoto, atención en campo y servicio técnico especializado para equipos informáticos y redes.',
      path: '/servicios/soporte-ti',
      image: '/images/hero/slide-soporte-ti.webp',
    },
    {
      title: 'Servicio Técnico Autorizado',
      subtitle: 'Diagnóstico Certificado',
      desc: 'Brindamos atención técnica especializada para equipos electrónicos de marcas reconocidas, gestionando procesos de diagnóstico, garantía y soporte postventa bajo estándares de fabricante.',
      path: '/servicios/servicio-tecnico',
      image: '/images/hero/slide-servicio-tecnico.webp',
    },
    {
      title: 'Infraestructura Tecnológica',
      subtitle: 'Cableado y Fibra Óptica',
      desc: 'Diseñamos e implementamos soluciones de cableado estructurado, fibra óptica, racks y centros de comunicaciones para garantizar una base tecnológica segura, escalable y preparada para el crecimiento.',
      path: '/servicios/infraestructura',
      image: '/images/hero/slide-infraestructura.webp',
    },
  ];

  const goToSlide = useCallback((index: number) => {
    setSlideDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  }, [currentSlide]);

  const nextSlide = useCallback(() => {
    setSlideDirection(1);
    setCurrentSlide(prev => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setSlideDirection(-1);
    setCurrentSlide(prev => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const servicios = [
    {
      title: 'CCTV Empresarial',
      subtitle: 'Seguridad Electrónica',
      description: 'Sistemas de videovigilancia IP con analíticas inteligentes para proteger sus activos y controlar sus operaciones.',
      features: ['Cobertura Nacional', 'Monitoreo 24/7', 'Tecnología IP'],
      path: '/servicios/cctv',
      icon: ShieldCheck,
    },
    {
      title: 'Soporte TI Empresarial',
      subtitle: 'Continuidad Operativa',
      description: 'Mesa de ayuda 24/7 y soporte en campo para garantizar la continuidad operativa de su empresa.',
      features: ['Mesa de Ayuda 24/7', 'Atención en Campo', 'SLA Garantizado'],
      path: '/servicios/soporte-ti',
      icon: Monitor,
    },
    {
      title: 'Servicio Técnico Autorizado',
      subtitle: 'Atención Técnica Especializada',
      description: 'Diagnóstico y reparación multimarca con laboratorio equipado bajo estándares oficiales de fabricante.',
      features: ['Diagnóstico Certificado', 'Laboratorio Equipado', 'Cobertura Multimarca'],
      path: '/servicios/servicio-tecnico',
      icon: Wrench,
    },
    {
      title: 'Infraestructura Tecnológica',
      subtitle: 'Redes y Conectividad',
      description: 'Cableado estructurado, fibra óptica y centros de datos para una base tecnológica escalable.',
      features: ['Cableado Estructurado', 'Fibra Óptica', 'Centros de Datos'],
      path: '/servicios/infraestructura',
      icon: Server,
    },
  ];

  const casosExito = [
    {
      brand: "Papa John's",
      logo: '/images/brands/LOGO-PAPAJHONS.webp',
      status: '✓ Completado',
      metrics: [
        { value: 12, suffix: '+', label: 'LOCALES' },
        { value: 48, suffix: '+', label: 'CÁMARAS' },
        { value: 24, suffix: '/7', label: 'MONITOREO' },
      ],
      description: 'Instalación de sistemas de videovigilancia IP con monitoreo centralizado para garantizar la seguridad y control operativo de todos los locales a nivel nacional.',
      tags: ['CCTV', 'Seguridad Electrónica'],
    },
    {
      brand: 'Popeyes',
      logo: '/images/brands/LOGO-POPEYES.webp',
      status: '✓ Completado',
      metrics: [
        { value: 800, suffix: '+', label: 'EQUIPOS' },
        { value: 999, suffix: '‰', label: 'UPTIME' },
        { value: 15, suffix: 'min', label: 'RESPUESTA' },
      ],
      description: 'Mesa de ayuda y soporte técnico en campo para garantizar la continuidad operativa de más de 800 equipos en todos los puntos de venta.',
      tags: ['Soporte TI', 'Mesa de Ayuda'],
    },
    {
      brand: 'Dunkin',
      logo: '/images/brands/LOGO-DUNKIN.webp',
      status: '✓ Completado',
      metrics: [
        { value: 15, suffix: '+', label: 'SUCURSALES' },
        { value: 2, suffix: 'km', label: 'FIBRA' },
        { value: 100, suffix: 'Gbps', label: 'CAPACIDAD' },
      ],
      description: 'Diseño e implementación de cableado estructurado y fibra óptica para la interconexión de todas las sucursales con el centro de datos corporativo.',
      tags: ['Infraestructura', 'Redes'],
    },
  ];

  const clientLogos = [
    { name: 'Sika', image: '/images/brands/LOGO-SIKA.webp' },
    { name: 'Dunkin', image: '/images/brands/LOGO-DUNKIN.webp' },
    { name: 'Intcomex', image: '/images/brands/LOGO-INTCOMEX.png' },
    { name: 'Popeyes', image: '/images/brands/LOGO-POPEYES.webp' },
    { name: 'Ferreyros', image: '/images/brands/FERREYROS.webp' },
    { name: 'Don Belisario', image: '/images/brands/LOGO-DON-BELISARIO.webp' },
    { name: 'Hikvision', image: '/images/brands/HIKVISION-1.webp' },
    { name: 'Bembos', image: '/images/brands/LOGO-BEMBOS.webp' },
    { name: "Papa John's", image: '/images/brands/LOGO-PAPAJHONS.webp' },
    { name: 'China Wok', image: '/images/brands/LOGO-CHINAWOK.webp' },
    { name: 'NGR', image: '/images/brands/LOGO-NGR.png' },
    { name: 'Amfora Packaging', image: '/images/brands/LOGO-AMFORAPACKAGING.png' },
    { name: 'AOC', image: '/images/brands/AOC.webp' },
    { name: 'iFFALCON', image: '/images/brands/iFFALCON.webp' },
    { name: 'JVC', image: '/images/brands/JVC.webp' },
    { name: 'KP', image: '/images/brands/KP.webp' },
    { name: 'Philips', image: '/images/brands/PHILIPS.webp' },
    { name: 'TCL', image: '/images/brands/TCL.webp' },
    { name: 'Xiaomi', image: '/images/brands/XIAOMI.webp' },
  ];

  const pillars = [
    { title: 'Cobertura Nacional', desc: 'Atendemos proyectos e incidencias en Lima y las principales ciudades del país mediante personal propio y aliados estratégicos, garantizando soporte oportuno para operaciones distribuidas.', icon: Map },
    { title: 'Equipo Técnico Especializado', desc: 'Contamos con personal técnico de campo, laboratorio, logística y gestión de proyectos para brindar una atención integral en cada etapa del servicio.', icon: Award },
    { title: 'Soluciones Integrales', desc: 'Desde el diagnóstico inicial hasta la implementación y el soporte continuo, integrando tecnología, procesos y capital humano para garantizar resultados sostenibles.', icon: Layers },
    { title: 'Experiencia Multisedes', desc: 'Atención de cadenas comerciales, restaurantes y organizaciones con operaciones distribuidas a nivel nacional, con soporte consistente donde su negocio lo requiera.', icon: Building2 },
  ];

  const processTimeline = [
    { step: '01', title: 'Identificación del Problema', desc: 'Analizamos las necesidades de cada cliente mediante reuniones, levantamiento de información y evaluaciones técnicas en campo. Utilizamos equipos especializados para simular condiciones reales de operación y validar el comportamiento esperado de la solución, permitiéndonos definir la alternativa más adecuada para cada entorno y desafío.', icon: Search },
    { step: '02', title: 'Ingeniería de Diseño', desc: 'Combinamos la experiencia de nuestros ingenieros con herramientas avanzadas de diseño y validación técnica para desarrollar soluciones seguras, eficientes y escalables, alineadas a los objetivos de negocio y preparadas para acompañar el crecimiento de cada organización.', icon: FileText },
    { step: '03', title: 'Implementación del Proyecto', desc: 'Ejecutamos la instalación, configuración y puesta en marcha de cada solución siguiendo buenas prácticas técnicas y de gestión. Nuestro personal cuenta con capacitación para operar de forma segura en entornos de alta exigencia, incluyendo trabajos en altura y espacios confinados, garantizando implementaciones confiables y alineadas a los estándares de cada proyecto.', icon: Cpu },
    { step: '04', title: 'Seguimiento Post Proyecto', desc: 'Todas nuestras soluciones se registran en plataformas de seguimiento en la nube, permitiendo acceder de forma rápida a la información técnica, documentación y evolución de cada proyecto. Complementamos este proceso con soporte, capacitación y acompañamiento continuo para garantizar el máximo rendimiento de la solución implementada.', icon: ShieldCheck },
  ];

  const timelineImages = [
    '/images/timeline/step-01-identificacion.webp',
    '/images/timeline/step-02-ingenieria.webp',
    '/images/timeline/step-03-implementacion.webp',
    '/images/timeline/step-04-seguimiento.webp',
  ];

  const sucursales = [
    { title: 'Sede Central', subtitle: 'Administración y Laboratorio', desc: 'Centro de ingeniería de alta complejidad y soporte corporativo general de hardware.', location: 'Los Olivos, Lima', icon: Building2, image: '/images/sucursales/sede-central.webp' },
    { title: 'Lima Centro Cyber Plaza', subtitle: 'Acopio y Soporte', desc: 'Mesa de soporte rápido, acopio logístico y diagnóstico express de equipos informáticos.', location: 'Cercado de Lima, Lima', icon: Store, image: '/images/sucursales/cyber-plaza.webp' },
    { title: 'Puente Piedra', subtitle: 'Centro de Logística de 1,100 m²', desc: 'Nuestra base operativa de almacenamiento general, bobinas de red, servidores y repuestos oficiales.', location: 'Puente Piedra, Lima', icon: Warehouse, image: '/images/sucursales/puente-piedra.webp' },
  ];

  const stats = [
    { label: 'Años de Experiencia', value: 14, suffix: '+', icon: Award },
    { label: 'Proyectos Mensuales', value: 100, suffix: '+', icon: Layers },
    { label: 'Ejecuciones Mensuales', value: 700, suffix: '+', icon: Zap },
    { label: 'Clientes Satisfechos', value: 1000, suffix: '+', icon: Heart },
  ];

  const testimonials = [
    {
      quote: "Estoy impresionada con el servicio de soporte de TI que brinda GKM Technology. Su equipo destaca por su conocimiento técnico, rapidez de respuesta y atención al detalle en cada intervención. Gracias a su apoyo, hemos podido mantener nuestras operaciones funcionando de manera eficiente. Valoramos su profesionalismo, compromiso y dedicación. ¡Excelente trabajo! Siempre superan expectativas.",
      author: "Cristina Ruiz Mondoñedo",
      brand: "PAPA JHONS",
      logo: "/images/brands/LOGO-PAPAJHONS.webp",
    },
    {
      quote: "Como Administrador de la tienda Popeyes, estoy muy impresionado con el servicio de soporte de TI proporcionado por GKM Technology. Su equipo demuestra un alto nivel de conocimiento técnico y una eficiencia excepcional en la resolución de problemas. Su profesionalismo y compromiso han sido fundamentales para mantener nuestras operaciones en marcha. ¡Gracias por su excelente trabajo y dedicación!",
      author: "Max Reinchard",
      brand: "POPEYES",
      logo: "/images/brands/LOGO-POPEYES.webp",
    },
    {
      quote: "Estoy encantada con el servicio de soporte de TI proporcionado por GKM Technology. Su equipo muestra un profundo conocimiento técnico y una capacidad excepcional para resolver problemas de manera rápida y eficiente. Su profesionalismo y dedicación son invaluables para mantener nuestras operaciones en marcha. ¡Gracias por su excelente trabajo!",
      author: "Elsa Poma",
      brand: "BEMBOS",
      logo: "/images/brands/LOGO-BEMBOS.webp",
    },
    {
      quote: "Como Gerente de Tienda en Don Belisario, me gustaría expresar mi gratitud por el excelente servicio de soporte de TI proporcionado por GKM Technology. Su equipo demuestra un conocimiento técnico excepcional y una capacidad notable para resolver problemas de manera eficiente. Su profesionalismo y compromiso han sido clave para garantizar el funcionamiento sin problemas de nuestra tienda. ¡Gracias por su dedicación y excelente trabajo!",
      author: "Flor Mosquera",
      brand: "DON BELISARIO",
      logo: "/images/brands/LOGO-DON-BELISARIO.webp",
    },
    {
      quote: "Estoy muy satisfecha con el servicio de soporte de TI que GKM Technology brinda a Dunkin' Donuts. Su equipo destaca por su alto nivel técnico y su rápida capacidad de respuesta ante cualquier incidencia en nuestras tiendas. Su eficiencia y profesionalismo han sido clave para asegurar la continuidad de nuestras operaciones y mejorar la experiencia de nuestros clientes. Agradecemos su compromiso constante con la marca.",
      author: "Bayoleth Yaslie Alania Fernández",
      brand: "DUNKIN DONUTS",
      logo: "/images/brands/LOGO-DUNKIN.webp",
    },
  ];

  const homeServices = [
    { path: '/servicios/cctv', title: 'CCTV Empresarial', desc: 'Sistemas de videovigilancia para seguridad y control operativo.', icon: ShieldCheck, features: ['Analíticas de IA avanzadas', 'Monitoreo Centralizado', 'Cámaras IP Antivandálicas'] },
    { path: '/servicios/soporte-ti', title: 'Soporte TI Empresarial', desc: 'Continuidad operativa, soporte remoto y en campo.', icon: Cpu, features: ['Mesa de Ayuda 24/7', 'Mantenimiento Preventivo', 'Acuerdos de SLA ágiles'] },
    { path: '/servicios/servicio-tecnico', title: 'Servicio Técnico Autorizado', desc: 'Atención técnica para equipos electrónicos de marcas reconocidas.', icon: Wrench, features: ['Laboratorio con protección ESD', 'Repuestos de primera línea', 'Diagnóstico Certificado'] },
    { path: '/servicios/infraestructura', title: 'Infraestructura Tecnológica', desc: 'Cableado estructurado, fibra óptica y racks.', icon: Server, features: ['Certificación Fluke Networks', 'Enlaces de Fibra Óptica', 'Garantía Estructural de Red'] },
  ];

  const textRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const headingUnderlineRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const pillarsGridRef = useRef<HTMLDivElement>(null);
  const pillarRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timelineSectionRef = useRef<HTMLDivElement>(null);
  const timelineHeaderRef = useRef<HTMLDivElement>(null);
  const timelineTrackRef = useRef<HTMLDivElement>(null);
  const timelineInnerRef = useRef<HTMLDivElement>(null);
  const timelineCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sucursalesSectionRef = useRef<HTMLDivElement>(null);
  const sucursalesCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const testimonialsSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current || !headingRef.current || !badgeRef.current || !pillarsGridRef.current) return;

    const ctx = gsap.context(() => {
      const badge = badgeRef.current!;
      gsap.set(badge, { y: -15, opacity: 0 });
      gsap.to(badge, {
        y: 0, opacity: 1, duration: 0.6, ease: "power2.out",
        scrollTrigger: { trigger: textRef.current, start: "top 80%", toggleActions: "play none none none" },
      });

      const lines = headingRef.current!.querySelectorAll('.heading-line');
      gsap.set(lines, { y: 50, opacity: 0 });
      gsap.to(lines, {
        y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: textRef.current, start: "top 75%", toggleActions: "play none none none" },
      });

      const para = textRef.current!.querySelector('p');
      if (para) {
        gsap.set(para, { y: 20, opacity: 0 });
        gsap.to(para, {
          y: 0, opacity: 1, duration: 0.6, delay: 0.3, ease: "power2.out",
          scrollTrigger: { trigger: textRef.current, start: "top 75%", toggleActions: "play none none none" },
        });
      }

      if (videoRef.current) {
        gsap.set(videoRef.current, { y: 30, opacity: 0, scale: 0.95 });
        gsap.to(videoRef.current, {
          y: 0, opacity: 1, scale: 1,
          duration: 0.7, delay: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: videoRef.current, start: "top 80%", toggleActions: "play none none none" },
        });
      }

      if (headingUnderlineRef.current) {
        gsap.set(headingUnderlineRef.current, { scaleX: 0, transformOrigin: "left center" });
        gsap.to(headingUnderlineRef.current, {
          scaleX: 1, duration: 0.8, delay: 0.4, ease: "power3.out",
          scrollTrigger: { trigger: textRef.current, start: "top 75%", toggleActions: "play none none none" },
        });
      }

      if (dividerRef.current) {
        gsap.set(dividerRef.current, { scaleX: 0, transformOrigin: "center center" });
        gsap.to(dividerRef.current, {
          scaleX: 1, duration: 0.9, delay: 0.2, ease: "power3.inOut",
          scrollTrigger: { trigger: pillarsGridRef.current, start: "top 85%", toggleActions: "play none none none" },
        });
      }

      const pillarDirs = [
        { rotateY: -8, rotateX: 4 },
        { rotateY: 8, rotateX: 4 },
        { rotateY: -8, rotateX: -4 },
        { rotateY: 8, rotateX: -4 },
      ];

      pillarRefs.current.forEach((card, idx) => {
        if (!card) return;
        const dir = pillarDirs[idx];
        gsap.set(card, { y: 60, opacity: 0, rotateX: dir.rotateX, rotateY: dir.rotateY });
        gsap.to(card, {
          y: 0, opacity: 1, rotateX: 0, rotateY: 0,
          duration: 0.8, delay: idx * 0.12, ease: "power3.out",
          scrollTrigger: { trigger: pillarsGridRef.current, start: "top 80%", toggleActions: "play none none none" },
        });
      });
    });

    return () => { ctx.revert(); ScrollTrigger.getAll().forEach(st => st.kill()); };
  }, []);

  useEffect(() => {
    if (!timelineSectionRef.current || !timelineInnerRef.current) return;

    const mq = window.matchMedia('(min-width: 1024px)');
    if (!mq.matches) return;

    const ctx = gsap.context(() => {
      const track = timelineInnerRef.current!;
      const scrollDistance = window.innerWidth * 0.4;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: timelineSectionRef.current,
          start: "top top",
          end: () => `+=${scrollDistance + window.innerHeight}`,
          pin: true,
          scrub: 1.5,
          invalidateOnRefresh: true,
        }
      });

      tl.to(track, { x: -scrollDistance, ease: "none" }, 0);

      timelineCardRefs.current.forEach((card, idx) => {
        if (!card) return;
        tl.from(card, {
          y: 80, opacity: 0, rotateX: 8,
          duration: 0.15,
          ease: "power3.out",
        }, idx * 0.08);
      });
    });

    return () => { ctx.revert(); };
  }, []);

  useLayoutEffect(() => {
    if (!sucursalesCardRefs.current) return;

    const cards = sucursalesCardRefs.current.filter(Boolean) as HTMLDivElement[];
    if (cards.length === 0) return;

    const ctx = gsap.context(() => {
      cards.forEach((card) => {
        const img = card.querySelector('.parallax-img') as HTMLElement;
        if (!img) return;
        gsap.to(img, {
          y: 15, ease: "none",
          scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: 1 },
        });
      });
    });

    ScrollTrigger.refresh();
    return () => { ctx.revert(); };
  }, []);

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePillarTilt = (e: React.MouseEvent<HTMLDivElement>, idx: number) => {
    const card = pillarRefs.current[idx];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    gsap.to(card, { rotateX: y * -10, rotateY: x * -10, scale: 1.02, duration: 0.4, ease: "power2.out" });
  };

  const resetPillarTilt = (idx: number) => {
    gsap.to(pillarRefs.current[idx], { rotateX: 0, rotateY: 0, scale: 1, duration: 0.5, ease: "power3.out" });
  };

  return (
    <div className="font-sans text-gray-800">
      <section
        className="relative min-h-screen bg-brand-dark flex items-center justify-center text-white -mt-20 pt-20 pb-24 px-4 sm:px-6 lg:px-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute -top-20 left-0 right-0 bottom-0 overflow-hidden pointer-events-none">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
          />

          <div className="absolute inset-0 bg-brand-dark/75" />
        </div>

        
        <div className="max-w-5xl mx-auto text-center relative z-10 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
                className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/30 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase text-brand-red"
              >
                <span>{heroSlides[currentSlide].subtitle}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tighter leading-none"
              >
                {heroSlides[currentSlide].title.split(' ').map((word, i, arr) =>
                  i === arr.length - 1 ? (
                    <span key={i} className="text-brand-red">{word}</span>
                  ) : (
                    <span key={i}>{word} </span>
                  )
                )}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6, ease: "easeOut" }}
                className="max-w-2xl mx-auto text-gray-300 text-base sm:text-xl font-sans font-light leading-relaxed"
              >
                {heroSlides[currentSlide].desc}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(229, 40, 34, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => { router.push(heroSlides[currentSlide].path); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="w-full sm:w-auto px-8 py-4 bg-brand-red hover:bg-brand-red text-white font-semibold rounded-xl text-sm transition-all cursor-pointer shadow-lg shadow-brand-red/30 flex items-center justify-center gap-2"
                >
                  <span>Ver Servicio</span>
                  <ArrowRight className="w-4 h-4 animate-pulse" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.08)', borderColor: 'rgba(255, 255, 255, 0.8)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => { router.push('/contacto'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gray-400 hover:border-white text-white font-semibold rounded-xl text-sm transition-all cursor-pointer"
                >
                  Contactar un Ingeniero
                </motion.button>
              </motion.div>

            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 hover:border-white/30 flex items-center justify-center text-white/60 hover:text-white transition-all duration-300 backdrop-blur-sm z-20 cursor-pointer"
          aria-label="Anterior servicio"
        >
          <ChevronRight className="w-5 h-5 rotate-180" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 hover:border-white/30 flex items-center justify-center text-white/60 hover:text-white transition-all duration-300 backdrop-blur-sm z-20 cursor-pointer"
          aria-label="Siguiente servicio"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className="relative h-1.5 rounded-full transition-all duration-500 cursor-pointer overflow-hidden"
              style={{ width: idx === currentSlide ? '40px' : '12px' }}
              aria-label={`Ir al slide ${idx + 1}`}
            >
              <span className="absolute inset-0 bg-white/20 rounded-full" />
              {idx === currentSlide && (
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 5.5, ease: "linear" }}
                  className="absolute inset-0 bg-white rounded-full origin-left"
                />
              )}
            </button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-white/30" />
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-brand-light to-transparent" />
      </section>

      {/* EXCELENCIA OPERACIONAL */}
      <section className="relative bg-[#F8F9F9] py-24 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px]" />
          <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle,#808080_0.7px,transparent_0.7px)] bg-[size:14px_14px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-10">
            <span ref={badgeRef} className="inline-flex items-center gap-1.5 text-brand-red font-bold text-xs tracking-widest uppercase"><span className="w-1.5 h-1.5 rounded-full bg-brand-red" />Excelencia Operacional</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div ref={textRef} className="lg:col-span-6 space-y-6">
              <h2 ref={headingRef} className="font-display font-extrabold text-brand-dark leading-none tracking-tight">
                <span className="heading-line block text-lg sm:text-2xl md:text-3xl font-normal text-brand-gray mb-3">Un aliado tecnológico para</span>
                <span className="heading-line block text-3xl sm:text-5xl md:text-7xl leading-[1.05]">OPERACIONES QUE NO</span>
                <span className="heading-line block text-3xl sm:text-5xl md:text-7xl leading-[1.05] text-brand-red mt-1">PUEDEN DETENERSE</span>
              </h2>

              <div ref={headingUnderlineRef} className="h-[3px] w-full bg-gradient-to-r from-brand-red via-brand-red to-brand-red/40 rounded-full origin-left" />

              <p className="text-brand-gray text-sm md:text-base leading-relaxed font-light">
                Ayudamos a empresas de diversos sectores a mantener la continuidad de sus operaciones mediante soluciones integrales de infraestructura tecnológica, soporte TI, videovigilancia y servicio técnico autorizado. Nuestra combinación de experiencia, cobertura nacional y capacidad de ejecución nos permite responder con rapidez a los desafíos tecnológicos de organizaciones que requieren un servicio confiable y orientado a resultados.
              </p>
            </div>

            <div ref={videoRef} className="lg:col-span-6">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl bg-brand-dark/5">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/1TunwZKYMRw"
                  title="Video corporativo GKM Technology"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl pointer-events-none" />
              </div>
            </div>
            </div>

          <div ref={dividerRef} className="h-px w-2/5 bg-gradient-to-r from-transparent via-brand-red/60 to-transparent mx-auto origin-center mb-12" />

          <div ref={pillarsGridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 [perspective:1200px]">
            {pillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  ref={el => { pillarRefs.current[idx] = el; }}
                  className="group relative p-6 rounded-2xl bg-white border border-gray-100/80 shadow-md [transform-style:preserve-3d] will-change-transform cursor-default transition-all duration-500 hover:shadow-xl hover:border-brand-red/20 hover:-translate-y-1"
                  onMouseMove={(e) => handlePillarTilt(e, idx)}
                  onMouseLeave={() => resetPillarTilt(idx)}
                >
                  <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-brand-red/15 to-transparent" />
                  <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-brand-red/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex flex-col gap-4">
                    <div className="w-11 h-11 rounded-full bg-brand-red/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(229,40,34,0.2)] transition-all duration-500">
                      <PillarIcon className="w-5 h-5 text-brand-red" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-display font-bold text-sm text-brand-dark uppercase tracking-wide">{pillar.title}</h4>
                      <p className="text-xs text-brand-gray leading-relaxed font-light">{pillar.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section ref={timelineSectionRef} className="relative bg-brand-dark text-white py-28 min-h-screen overflow-x-clip">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="relative z-10">
          <div ref={timelineHeaderRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
            <span className="inline-flex items-center gap-1.5 text-brand-red font-bold text-xs tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />Garantía Metodológica
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight leading-tight">
              Un proceso diseñado para <br />
              <span className="text-brand-red">GARANTIZAR RESULTADOS</span>
            </h2>
            <div className="h-[3px] w-full max-w-[280px] bg-gradient-to-r from-brand-red via-brand-red to-brand-red/40 rounded-full mt-4" />
          </div>

          <div ref={timelineTrackRef} className="overflow-visible">
            <div ref={timelineInnerRef} className="flex flex-col lg:flex-row gap-6 lg:gap-8 lg:w-[140vw] lg:pl-[calc((100vw-1280px)/2+2rem)] lg:pr-8 lg:relative">
              {processTimeline.map((p, idx) => {
                const StepIcon = p.icon;
                return (
                  <div
                    key={p.step}
                    ref={el => { timelineCardRefs.current[idx] = el; }}
                    className="relative flex-1 group"
                  >
                    {idx < processTimeline.length - 1 && (
                      <div className="hidden lg:block absolute top-[260px] left-[calc(50%+2.5rem)] right-[-2rem] h-px bg-gradient-to-r from-brand-red/40 to-brand-red/20" />
                    )}

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl h-full overflow-hidden flex flex-col transition-all duration-500 group-hover:bg-white/10 group-hover:border-brand-red/30 group-hover:shadow-[0_0_30px_rgba(229,40,34,0.1)]">
                      {/* Image Header */}
                      <div className="relative h-[260px] flex-shrink-0 overflow-hidden">
                        <img
                          src={timelineImages[idx]}
                          alt={p.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-brand-dark/5 to-transparent" />
                      </div>

                      {/* Step Circle */}
                      <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-brand-red border-2 border-white/20 text-white items-center justify-center font-display font-extrabold text-lg shadow-lg shadow-brand-red/30 z-10 top-[236px]">
                        {p.step}
                      </div>

                      {/* Content */}
                      <div className="p-6 pt-10 flex-1">
                        <div className="lg:hidden w-12 h-12 rounded-full bg-brand-red/10 border-2 border-brand-red/30 text-brand-red flex items-center justify-center font-display font-extrabold text-lg mb-4">
                          {p.step}
                        </div>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-lg bg-brand-red/10 flex items-center justify-center flex-shrink-0">
                            <StepIcon className="w-5 h-5 text-brand-red" />
                          </div>
                          <h3 className="font-display font-bold text-sm lg:text-base text-white group-hover:text-brand-red transition-colors duration-300">{p.title}</h3>
                        </div>
                        <p className="text-xs lg:text-[13px] text-gray-400 leading-relaxed font-light">{p.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#F8F9F9] py-24 overflow-x-clip border-b border-gray-100">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px]" />
          <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle,#808080_0.7px,transparent_0.7px)] bg-[size:14px_14px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-1.5 text-brand-red font-bold text-xs tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />Confianza Empresarial
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-brand-dark tracking-tight leading-tight">
              Empresas que confían <br className="md:hidden" />
              <span className="text-brand-red">en nosotros</span>
            </h2>
            <p className="text-sm lg:text-base text-brand-gray/80 font-light max-w-2xl mx-auto mt-4 leading-relaxed">
              Trabajamos junto a organizaciones de diversos sectores, brindando soluciones tecnológicas, soporte especializado y servicios de infraestructura que contribuyen a la continuidad operativa de sus negocios.
            </p>
            <div className="h-[3px] w-full max-w-[200px] bg-gradient-to-r from-brand-red via-brand-red to-brand-red/40 rounded-full mt-6 mx-auto" />
          </motion.div>
        </div>

        <div className="relative z-10 space-y-6">
          {/* Row 1 — moving left */}
          <div className="relative w-full overflow-x-clip">
            <div className="animate-marquee items-center gap-5 lg:gap-8 py-1">
              {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, idx) => (
                <div
                  key={`row1-${idx}`}
                  className="flex-shrink-0 w-[160px] lg:w-[180px] h-[68px] lg:h-[76px] bg-white border border-gray-200 rounded-xl flex items-center justify-center p-3 transition-all duration-500 hover:border-brand-red/30 hover:shadow-[0_0_0_2px_rgba(229,40,34,0.06)] group cursor-default select-none"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={logo.image}
                      alt={logo.name}
                      fill
                      className="object-contain transition-all duration-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 — moving right */}
          <div className="relative w-full overflow-x-clip">
            <div className="animate-marquee-reverse items-center gap-5 lg:gap-8 py-1">
              {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, idx) => (
                <div
                  key={`row2-${idx}`}
                  className="flex-shrink-0 w-[160px] lg:w-[180px] h-[68px] lg:h-[76px] bg-white border border-gray-200 rounded-xl flex items-center justify-center p-3 transition-all duration-500 hover:border-brand-red/30 hover:shadow-[0_0_0_2px_rgba(229,40,34,0.06)] group cursor-default select-none"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={logo.image}
                      alt={logo.name}
                      fill
                      className="object-contain transition-all duration-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NUESTROS SERVICIOS */}
      <section className="relative bg-brand-dark text-white overflow-x-clip">
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 w-[800px] h-[800px] bg-brand-red/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 space-y-3"
          >
            <span className="inline-flex items-center gap-1.5 text-brand-red font-bold text-xs tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />Nuestro Portafolio
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight leading-tight">
              Soluciones <span className="text-brand-red">TECNOLÓGICAS</span>
            </h2>
            <p className="text-sm text-white/60 leading-relaxed font-light max-w-2xl mx-auto">
              Ofrecemos servicios integrales de tecnología para empresas que demandan continuidad operativa, seguridad y eficiencia en sus procesos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicios.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* CASOS DE ÉXITO */}
      <section className="relative bg-[#F8F9F9] text-brand-dark py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px]" />
          <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle,#808080_0.7px,transparent_0.7px)] bg-[size:14px_14px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 space-y-3"
          >
            <span className="inline-flex items-center gap-1.5 text-brand-red font-bold text-xs tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />Project Report
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight leading-tight">
              Casos de <span className="text-brand-red">ÉXITO</span>
            </h2>
            <p className="text-sm text-brand-gray/80 leading-relaxed font-light max-w-2xl mx-auto">
              Resultados concretos que demuestran nuestro compromiso con la calidad y la satisfacción de nuestros clientes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {casosExito.map((c) => (
              <CaseCard key={c.brand} {...c} />
            ))}
          </div>
        </div>
      </section>

      <section ref={sucursalesSectionRef} className="relative bg-brand-dark text-white overflow-x-clip">
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto mb-16 space-y-3"
            >
              <span className="inline-flex items-center gap-1.5 text-brand-red font-bold text-xs tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />Presencia Estratégica
              </span>
              <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight leading-tight">
                Nuestras Sucursales <br className="md:hidden" />
                <span className="text-brand-red">de SOPORTE TÉCNICO</span>
              </h2>
              <p className="text-sm text-white/60 leading-relaxed font-light">
                Ubicaciones optimizadas para garantizar soporte de hardware y logística técnica eficiente de manera oportuna.
              </p>
            </motion.div>

            <motion.div
              variants={{
                visible: { transition: { staggerChildren: 0.15 } }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
            >
            {sucursales.map((suc, idx) => {
              const SucIcon = suc.icon;
              return (
                <motion.div
                  key={suc.title}
                  ref={el => { sucursalesCardRefs.current[idx] = el; }}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                  }}
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-colors duration-500 hover:bg-white/10 hover:border-brand-red/30 hover:shadow-[0_0_30px_rgba(229,40,34,0.1)]"
                >
                  <div className="relative h-[360px] bg-white/5">
                    <Image
                      src={suc.image}
                      alt={suc.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-contain transition-all duration-700 group-hover:scale-105 parallax-img"
                    />
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-brand-red/10 flex items-center justify-center">
                        <SucIcon className="w-4 h-4 text-brand-red" />
                      </div>
                      <span className="text-xs text-brand-red font-bold uppercase tracking-wider">{suc.subtitle}</span>
                    </div>
                    <h3 className="font-display font-extrabold text-lg text-white group-hover:text-brand-red transition-colors duration-300">{suc.title}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed font-light">{suc.desc}</p>
                    <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-white/60">
                      <MapPin className="w-4 h-4 text-brand-red flex-shrink-0" />
                      <span>{suc.location}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="relative bg-[#F8F9F9] text-brand-dark py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px]" />
          <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle,#808080_0.7px,transparent_0.7px)] bg-[size:14px_14px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 space-y-3"
          >
            <span className="inline-flex items-center gap-1.5 text-brand-red font-bold text-xs tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />Resultados que Hablan
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight leading-tight">
              Estadísticas de <span className="text-brand-red">NUESTRO TRABAJO</span>
            </h2>
            <p className="text-sm text-brand-gray/80 leading-relaxed font-light max-w-2xl mx-auto">
              Números que respaldan nuestra experiencia y compromiso con la continuidad operativa de nuestros clientes.
            </p>
          </motion.div>

          <motion.div
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat) => (
              <StatItem key={stat.label} {...stat} />
            ))}
          </motion.div>
        </div>
      </section>

      <section ref={testimonialsSectionRef} className="relative bg-brand-dark text-white overflow-x-clip">
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-brand-red/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 space-y-3"
          >
            <span className="inline-flex items-center gap-1.5 text-brand-red font-bold text-xs tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />Testimonios
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight leading-tight">
              Nuestros Clientes <span className="text-brand-red">confían en nosotros</span>
            </h2>
            <p className="text-sm text-white/60 leading-relaxed font-light max-w-2xl mx-auto">
              Nuestros clientes confían porque brindamos servicio de calidad, con grandes técnicos capacitados brindando y dando soluciones ante cualquier problema.
            </p>
          </motion.div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 min-h-[40vh]">
          <div className="relative w-full h-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full px-4 py-8"
              >
                <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
                  <div className="relative h-10 w-32 mx-auto">
                    <Image src={testimonials[activeTestimonial].logo} alt={testimonials[activeTestimonial].brand} fill className="object-contain brightness-0 invert opacity-80" />
                  </div>
                  <blockquote className="text-sm md:text-lg text-gray-300 leading-relaxed font-light">
                    &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
                  </blockquote>
                  <div className="space-y-1">
                    <div className="text-white font-semibold text-sm">{testimonials[activeTestimonial].author}</div>
                    <div className="text-brand-red text-xs font-bold uppercase tracking-wider">{testimonials[activeTestimonial].brand}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

    </div>
  );
}
