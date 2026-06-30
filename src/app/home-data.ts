import {
  ShieldCheck, Cpu, Wrench, Server, Map, Award, Building2, Layers,
  ArrowRight, Search, FileText, MapPin, Monitor, Warehouse, Store, Zap, Heart
} from 'lucide-react';

export const heroSlides = [
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

export const servicios = [
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

export const casosExito = [
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

export const clientLogos = [
  { name: 'Sika', image: '/images/brands/LOGO-SIKA.webp' },
  { name: 'Dunkin', image: '/images/brands/LOGO-DUNKIN.webp' },
  { name: 'Intcomex', image: '/images/brands/LOGO-INTCOMEX.webp' },
  { name: 'Popeyes', image: '/images/brands/LOGO-POPEYES.webp' },
  { name: 'Ferreyros', image: '/images/brands/FERREYROS.webp' },
  { name: 'Don Belisario', image: '/images/brands/LOGO-DON-BELISARIO.webp' },
  { name: 'Hikvision', image: '/images/brands/HIKVISION-1.webp' },
  { name: 'Bembos', image: '/images/brands/LOGO-BEMBOS.webp' },
  { name: "Papa John's", image: '/images/brands/LOGO-PAPAJHONS.webp' },
  { name: 'China Wok', image: '/images/brands/LOGO-CHINAWOK.webp' },
  { name: 'NGR', image: '/images/brands/LOGO-NGR.webp' },
  { name: 'Amfora Packaging', image: '/images/brands/LOGO-AMFORAPACKAGING.webp' },
  { name: 'AOC', image: '/images/brands/AOC.webp' },
  { name: 'iFFALCON', image: '/images/brands/iFFALCON.webp' },
  { name: 'JVC', image: '/images/brands/JVC.webp' },
  { name: 'KP', image: '/images/brands/KP.webp' },
  { name: 'Philips', image: '/images/brands/PHILIPS.webp' },
  { name: 'TCL', image: '/images/brands/TCL.webp' },
  { name: 'Xiaomi', image: '/images/brands/XIAOMI.webp' },
];

export const homeServices = [
  { path: '/servicios/cctv', title: 'CCTV Empresarial', desc: 'Sistemas de videovigilancia para seguridad y control operativo.', icon: ShieldCheck, features: ['Analíticas de IA avanzadas', 'Monitoreo Centralizado', 'Cámaras IP Antivandálicas'] },
  { path: '/servicios/soporte-ti', title: 'Soporte TI Empresarial', desc: 'Continuidad operativa, soporte remoto y en campo.', icon: Cpu, features: ['Mesa de Ayuda 24/7', 'Mantenimiento Preventivo', 'Acuerdos de SLA ágiles'] },
  { path: '/servicios/servicio-tecnico', title: 'Servicio Técnico Autorizado', desc: 'Atención técnica para equipos electrónicos de marcas reconocidas.', icon: Wrench, features: ['Laboratorio con protección ESD', 'Repuestos de primera línea', 'Diagnóstico Certificado'] },
  { path: '/servicios/infraestructura', title: 'Infraestructura Tecnológica', desc: 'Cableado estructurado, fibra óptica y racks.', icon: Server, features: ['Certificación Fluke Networks', 'Enlaces de Fibra Óptica', 'Garantía Estructural de Red'] },
];

export const pillars = [
  { title: 'Cobertura Nacional', desc: 'Atendemos proyectos e incidencias en Lima y las principales ciudades del país mediante personal propio y aliados estratégicos, garantizando soporte oportuno para operaciones distribuidas.', icon: Map },
  { title: 'Equipo Técnico Especializado', desc: 'Contamos con personal técnico de campo, laboratorio, logística y gestión de proyectos para brindar una atención integral en cada etapa del servicio.', icon: Award },
  { title: 'Soluciones Integrales', desc: 'Desde el diagnóstico inicial hasta la implementación y el soporte continuo, integrando tecnología, procesos y capital humano para garantizar resultados sostenibles.', icon: Layers },
  { title: 'Experiencia Multisedes', desc: 'Atención de cadenas comerciales, restaurantes y organizaciones con operaciones distribuidas a nivel nacional, con soporte consistente donde su negocio lo requiera.', icon: Building2 },
];

export const processTimeline = [
  { step: '01', title: 'Identificación del Problema', desc: 'Analizamos las necesidades de cada cliente mediante reuniones, levantamiento de información y evaluaciones técnicas en campo. Utilizamos equipos especializados para simular condiciones reales de operación y validar el comportamiento esperado de la solución, permitiéndonos definir la alternativa más adecuada para cada entorno y desafío.', icon: Search },
  { step: '02', title: 'Ingeniería de Diseño', desc: 'Combinamos la experiencia de nuestros ingenieros con herramientas avanzadas de diseño y validación técnica para desarrollar soluciones seguras, eficientes y escalables, alineadas a los objetivos de negocio y preparadas para acompañar el crecimiento de cada organización.', icon: FileText },
  { step: '03', title: 'Implementación del Proyecto', desc: 'Ejecutamos la instalación, configuración y puesta en marcha de cada solución siguiendo buenas prácticas técnicas y de gestión. Nuestro personal cuenta con capacitación para operar de forma segura en entornos de alta exigencia, incluyendo trabajos en altura y espacios confinados, garantizando implementaciones confiables y alineadas a los estándares de cada proyecto.', icon: Cpu },
  { step: '04', title: 'Seguimiento Post Proyecto', desc: 'Todas nuestras soluciones se registran en plataformas de seguimiento en la nube, permitiendo acceder de forma rápida a la información técnica, documentación y evolución de cada proyecto. Complementamos este proceso con soporte, capacitación y acompañamiento continuo para garantizar el máximo rendimiento de la solución implementada.', icon: ShieldCheck },
];

export const timelineImages = [
  '/images/timeline/step-01-identificacion.webp',
  '/images/timeline/step-02-ingenieria.webp',
  '/images/timeline/step-03-implementacion.webp',
  '/images/timeline/step-04-seguimiento.webp',
];

export const sucursales = [
  { title: 'Sede Central', subtitle: 'Administración y Laboratorio', desc: 'Centro de ingeniería de alta complejidad y soporte corporativo general de hardware.', location: 'Los Olivos, Lima', icon: Building2, image: '/images/sucursales/sede-central.webp' },
  { title: 'Lima Centro Cyber Plaza', subtitle: 'Acopio y Soporte', desc: 'Mesa de soporte rápido, acopio logístico y diagnóstico express de equipos informáticos.', location: 'Cercado de Lima, Lima', icon: Store, image: '/images/sucursales/cyber-plaza.webp' },
  { title: 'Puente Piedra', subtitle: 'Centro de Logística de 1,100 m²', desc: 'Nuestra base operativa de almacenamiento general, bobinas de red, servidores y repuestos oficiales.', location: 'Puente Piedra, Lima', icon: Warehouse, image: '/images/sucursales/puente-piedra.webp' },
];

export const stats = [
  { label: 'Años de Experiencia', value: 14, suffix: '+', icon: Award },
  { label: 'Proyectos Mensuales', value: 100, suffix: '+', icon: Layers },
  { label: 'Ejecuciones Mensuales', value: 700, suffix: '+', icon: Zap },
  { label: 'Clientes Satisfechos', value: 1000, suffix: '+', icon: Heart },
];

export const testimonials = [
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
