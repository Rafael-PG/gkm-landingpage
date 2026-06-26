"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, Clock, ArrowRight, Search, ShieldCheck, Cpu, Wrench, Server } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  icon: any;
}

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const posts: BlogPost[] = [
    {
      id: 1,
      title: 'La Importancia de la Certificación de Cableado Estructurado',
      category: 'Infraestructura',
      excerpt: '¿Por qué un reporte de certificación de Fluke Networks evita caídas fantasmas de red y pérdidas millonarias en su negocio?',
      content: `El cableado estructurado es el pilar de toda la comunicación de una empresa. Sin embargo, un gran porcentaje de las fallas intermitentes de red se deben a instalaciones deficientes o materiales de baja calidad que no soportan el tráfico nominal.\n\nLa certificación de cableado estructurado consiste en comparar el rendimiento de transmisión del sistema instalado con un estándar determinado usando métodos de prueba definidos en las normas (como ANSI/TIA-568). En GKM Technology, utilizamos analizadores de la serie Fluke DSX para someter a prueba parámetros como:\n- Pérdida de inserción (Atenuación).\n- NEXT (Parifonía en el extremo cercano).\n- Pérdida de retorno.\n- Resistencia de bucle de CC.\n\nObtener un reporte con estatus "PASA" no es un capricho; es la única garantía de que su red operará a 1 Gbps o 10 Gbps sin colisiones ni retransmisiones constantes. No deje su infraestructura a la suerte; exija siempre la certificación homologada.`,
      date: 'Junio 24, 2026',
      author: 'Ing. Alejandro Prado',
      readTime: '6 min lectura',
      icon: Server
    },
    {
      id: 2,
      title: 'CCTV Inteligente en Almacenes y Centros Logísticos',
      category: 'Seguridad',
      excerpt: 'Cómo las analíticas por Inteligencia Artificial y la lectura automática de matrículas reducen las mermas e incrementan el control.',
      content: `Los centros de distribución modernos manejan miles de transacciones de inventario al día. El monitoreo clásico, donde un operador vigila decenas de pantallas estáticas, ha quedado obsoleto. Hoy en día, la seguridad perimetral y el control operativo se delegan a analíticas de video integradas por IA.\n\nMediante la instalación estratégica de cámaras IP domo e industriales equipadas con chips de Deep Learning, es posible automatizar:\n1. Cruces de línea en zonas restringidas (Alertas instantáneas al centro de control).\n2. Conteo de vehículos y camiones en andenes de carga.\n3. Lectura automática de placas (LPR/ANPR) vinculada a los portones mecánicos.\n4. Detección de merodeo en perímetros exteriores de depósitos durante la madrugada.\n\nEstas herramientas disminuyen la fatiga de los operadores y permiten actuar de forma preventiva antes de que ocurra una intrusión o merma, optimizando además el flujo logístico diario.`,
      date: 'Mayo 18, 2026',
      author: 'Ing. Carlos Mendoza',
      readTime: '5 min lectura',
      icon: ShieldCheck
    },
    {
      id: 3,
      title: 'Mesa de Ayuda TI: Estrategias para Reducir el MTTR',
      category: 'Soporte TI',
      excerpt: 'Cómo la estandarización bajo ITIL v4 y el monitoreo activo reducen el tiempo medio de reparación de incidentes en un 40%.',
      content: `El Tiempo Medio de Reparación (MTTR, por sus siglas en inglés) es la métrica de oro en el soporte técnico empresarial. Cuando una terminal de facturación o un servidor de correo falla, cada minuto cuenta en la productividad general.\n\nPara reducir el MTTR se requieren tres pilares críticos:\n- **Monitoreo Proactivo (RMM)**: Alertas tempranas que informan al equipo de TI sobre una saturación de disco o temperatura anómala en el servidor antes de que el usuario final note la lentitud.\n- **Niveles de Escalamiento Claros**: Respaldados por un sistema de tickets ágil (Mesa de ayuda) estructurado según el framework de ITIL, garantizando que el ticket crítico llegue al especialista de nivel 2 o 3 en menos de 15 minutos.\n- **Soporte Presencial Coordinado**: Contar con repuestos técnicos pre-clasificados y listos en centros de acopio cercanos para sustitución en campo.\n\nEn GKM Technology, nos enfocamos en que las incidencias tengan una resolución inmediata en primer contacto en un 75% de los casos, minimizando drásticamente la inactividad de las sedes.`,
      date: 'Abril 09, 2026',
      author: 'Lic. Mariana Rivera',
      readTime: '4 min lectura',
      icon: Cpu
    },
    {
      id: 4,
      title: '¿Qué es la protección ESD en un Laboratorio Técnico?',
      category: 'Servicio Técnico',
      excerpt: 'La importancia de las descargas electroestáticas al manipular componentes de hardware a nivel de integrados.',
      content: `Muchos gerentes de TI cometen el error de enviar computadoras, servidores o lectores de código de barras industriales a talleres convencionales. Lo que no saben es que una sola chispa electroestática, invisible al ojo humano e imperceptible al tacto, puede dañar permanentemente la microarquitectura de un procesador o chip integrado.\n\nLa electricidad estática que acumulamos en el cuerpo al caminar puede superar los 3,000 voltios. Si tocamos una tarjeta electrónica sin la protección debida, producimos una descarga electroestática (ESD). Esto puede generar un fallo inmediato o, lo que es peor, una "falla latente" (el equipo funciona pero fallará misteriosamente semanas después).\n\nUn laboratorio técnico profesional como el de GKM Technology cuenta con:\n- Pisos conductivos disipadores de estática.\n- Pulseras y taloneras antiestáticas conectadas a una red de tierra física dedicada.\n- Mesas de trabajo con mantas ESD certificadas.\n- Sopladores de aire ionizado para neutralizar cargas en la zona de trabajo.\n\nAsegure la vida útil de su inversión tecnológica exigiendo siempre reparaciones bajo estándares de protección ESD.`,
      date: 'Marzo 12, 2026',
      author: 'Ing. Francisco Rosales',
      readTime: '7 min lectura',
      icon: Wrench
    }
  ];

  const categories = ['Todos', 'Infraestructura', 'Seguridad', 'Soporte TI', 'Servicio Técnico'];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-brand-light py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-brand-red font-bold text-xs tracking-widest uppercase bg-brand-red/10 px-3 py-1.5 rounded-full inline-block mb-3">Conocimiento Técnico</span>
          <h1 className="font-display font-extrabold text-3xl md:text-5xl text-brand-dark tracking-tight mb-4">Blog GKM Technology</h1>
          <p className="text-brand-gray text-sm leading-relaxed font-light">Análisis de infraestructura, mejores prácticas de seguridad operativa, soporte de hardware y soluciones TI para tomadores de decisiones.</p>
        </div>

        <AnimatePresence mode="wait">
          {activePost ? (
            <motion.div
              key="post-detail"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 max-w-4xl mx-auto"
            >
              <button onClick={() => setActivePost(null)} className="mb-8 text-xs font-bold text-brand-red hover:text-brand-dark transition-colors cursor-pointer flex items-center gap-1">← Volver al listado de artículos</button>
              <div className="flex items-center gap-3 text-xs text-brand-gray mb-4 font-semibold uppercase tracking-wider">
                <span className="bg-brand-red/10 text-brand-red px-2.5 py-1 rounded">{activePost.category}</span>
                <span>•</span>
                <span>{activePost.date}</span>
                <span>•</span>
                <span>{activePost.readTime}</span>
              </div>
              <h2 className="font-display font-extrabold text-2xl md:text-4xl text-brand-dark tracking-tight mb-6 leading-tight">{activePost.title}</h2>
              <div className="flex items-center gap-2 mb-8 pb-6 border-b border-gray-100 text-sm text-gray-500">
                <User className="w-4 h-4 text-brand-red" />
                <span>Por <strong className="text-brand-dark font-medium">{activePost.author}</strong></span>
              </div>
              <div className="text-gray-700 leading-relaxed space-y-6 font-light whitespace-pre-line">{activePost.content}</div>
              <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-brand-gray italic">¿Le resultó de utilidad este artículo? Comparta con su equipo de TI.</p>
                <button onClick={() => setActivePost(null)} className="px-5 py-2.5 bg-brand-dark hover:bg-brand-red text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer">Volver al listado</button>
              </div>
            </motion.div>
          ) : (
            <motion.div key="post-list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-gray-400" />
                  <input type="text" placeholder="Buscar artículo..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10 pr-4 py-2.5 w-full bg-brand-light border border-gray-200 focus:border-brand-red focus:ring-1 focus:ring-brand-red rounded-lg text-sm text-brand-dark placeholder-gray-400 outline-none transition-all" />
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {categories.map((cat) => (
                    <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${selectedCategory === cat ? 'bg-brand-red text-white' : 'bg-brand-light hover:bg-gray-200 text-brand-gray'}`}>{cat}</button>
                  ))}
                </div>
              </div>

              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map((post, idx) => {
                    const PostIcon = post.icon;
                    return (
                      <motion.div key={post.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: idx * 0.05 }} whileHover={{ y: -5 }} className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8 flex flex-col justify-between transition-all hover:shadow-lg">
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <span className="bg-brand-red/10 text-brand-red text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">{post.category}</span>
                            <div className="text-gray-400 flex items-center gap-1 text-xs"><Calendar className="w-3.5 h-3.5" /><span>{post.date}</span></div>
                          </div>
                          <h3 onClick={() => setActivePost(post)} className="font-display font-bold text-lg md:text-xl text-brand-dark tracking-tight mb-3 hover:text-brand-red cursor-pointer transition-colors line-clamp-2">{post.title}</h3>
                          <p className="text-brand-gray text-xs md:text-sm leading-relaxed mb-6 font-light line-clamp-3">{post.excerpt}</p>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-1.5 text-xs text-gray-500"><Clock className="w-3.5 h-3.5 text-brand-red" /><span>{post.readTime}</span></div>
                          <button onClick={() => setActivePost(post)} className="text-xs font-bold text-brand-red hover:text-brand-dark transition-colors cursor-pointer flex items-center gap-1 group/link">
                            <span>Leer artículo completo</span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                          </button>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <p className="text-brand-gray text-sm">No se encontraron artículos que coincidan con los criterios de búsqueda.</p>
                  <button onClick={() => { setSearchTerm(''); setSelectedCategory('Todos'); }} className="mt-4 px-4 py-2 bg-brand-red hover:bg-brand-red/90 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer">Restaurar Filtros</button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
