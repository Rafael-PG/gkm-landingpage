import { motion } from 'motion/react';
import { Phone, Mail, Clock, CheckCircle, HelpCircle } from 'lucide-react';

const servicios = [
  'Seleccione una especialidad...',
  'CCTV Empresarial (Seguridad Electrónica)',
  'Soporte TI Empresarial (Continuidad Operativa)',
  'Servicio Técnico Autorizado (Hardware Multimarca)',
  'Infraestructura Tecnológica (Cableado, Fibra, Racks)',
  'Otro Requerimiento',
];

export default function ContactSection() {
  const labelClass = 'text-xs font-semibold text-brand-dark/70 tracking-wide uppercase block mb-1.5';
  const inputClass = 'w-full px-4 py-3 bg-white border border-gray-200 focus:border-brand-red focus:ring-1 focus:ring-brand-red/20 rounded-xl text-sm text-brand-dark outline-none transition-all placeholder-gray-400';

  return (
    <section className="relative bg-[#F8F9F9] overflow-x-clip">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle,#808080_0.7px,transparent_0.7px)] bg-[size:14px_14px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-20 space-y-3"
        >
          <span className="inline-flex items-center gap-1.5 text-brand-red font-bold text-xs tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />Contáctanos
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-brand-dark tracking-tight leading-tight">
            Hablemos de tu <span className="text-brand-red">PROYECTO</span>
          </h2>
          <p className="text-sm text-brand-gray/70 leading-relaxed font-light max-w-xl mx-auto">
            Un Ingeniero de Proyectos evaluará tu caso y te contactará en menos de 2 horas hábiles.
          </p>
          <div className="h-[3px] w-full max-w-[200px] bg-gradient-to-r from-brand-red via-brand-red to-brand-red/40 rounded-full mt-4 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8 space-y-6">
              <h3 className="font-display font-bold text-base text-brand-dark uppercase tracking-wide border-b border-gray-100 pb-3">
                Información Corporativa
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-brand-red/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-brand-dark">Central Telefónica</p>
                    <p className="text-xs text-brand-gray/70 mt-0.5">Línea gratuita nacional: <span className="text-brand-dark font-medium">0800-80142</span></p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-brand-red/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-brand-dark">Correo Corporativo</p>
                    <p className="text-xs text-brand-gray/70 mt-0.5">atencionalcliente@<span className="text-brand-dark/70">gkmtechnology.com.pe</span></p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-brand-red/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-brand-dark">Horario de Atención</p>
                    <p className="text-xs text-brand-gray/70 mt-0.5">Lun–Sáb: <span className="text-brand-dark/70">8:00 am – 6:00 pm</span></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-dark text-white rounded-2xl p-6 md:p-8 relative overflow-hidden border border-brand-gray/20 shadow-md">
              <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-brand-red/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
              <div className="relative z-10 space-y-4">
                <p className="text-xs font-bold text-brand-red uppercase tracking-widest">// Respuesta Garantizada</p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 text-[11px] text-gray-400 bg-white/5 px-3 py-1.5 rounded-full">
                    <CheckCircle className="w-3 h-3 text-brand-red" /> Respuesta en 2 horas
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] text-gray-400 bg-white/5 px-3 py-1.5 rounded-full">
                    <CheckCircle className="w-3 h-3 text-brand-red" /> Cobertura Nacional
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] text-gray-400 bg-white/5 px-3 py-1.5 rounded-full">
                    <CheckCircle className="w-3 h-3 text-brand-red" /> Ingenieros Certificados
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-gray-100 space-y-5">
              <div className="border-b border-gray-100 pb-4">
                <h3 className="font-display font-bold text-lg text-brand-dark uppercase tracking-wide">Registro de Requerimiento</h3>
                <p className="text-xs text-brand-gray/60 mt-1">Complete los datos para que un Ingeniero evalúe su caso.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-nombres" className={labelClass}>Nombres <span className="text-brand-red">*</span></label>
                  <input id="contact-nombres" type="text" placeholder="Ingrese sus datos" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="contact-apellidos" className={labelClass}>Apellidos <span className="text-brand-red">*</span></label>
                  <input id="contact-apellidos" type="text" placeholder="Ingrese sus apellidos" className={inputClass} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-correo" className={labelClass}>Correo de Empresa <span className="text-brand-red">*</span></label>
                  <input id="contact-correo" type="email" placeholder="ejemplo@empresa.com" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="contact-telefono" className={labelClass}>Teléfono <span className="text-brand-red">*</span></label>
                  <input id="contact-telefono" type="tel" placeholder="Ingrese su número de teléfono" className={inputClass} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-empresa" className={labelClass}>Nombre de la Empresa <span className="text-brand-red">*</span></label>
                  <input id="contact-empresa" type="text" placeholder="Ingrese el nombre de la empresa" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="contact-web" className={labelClass}>Página Web</label>
                  <input id="contact-web" type="url" placeholder="Ingresar su pagina web" className={inputClass} />
                </div>
              </div>

              <div>
                <label htmlFor="contact-servicio" className={labelClass}>¿Qué tipo de servicio necesitas? <span className="text-brand-red">*</span></label>
                <select id="contact-servicio" className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-brand-red focus:ring-1 focus:ring-brand-red/20 rounded-xl text-sm text-brand-dark outline-none transition-all appearance-none cursor-pointer">
                  {servicios.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="contact-captcha" className={labelClass}>Verification Code <span className="text-brand-red">*</span></label>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="bg-brand-red/5 border border-brand-red/10 rounded-xl px-5 py-3 font-display font-bold text-lg text-brand-red select-none tracking-widest">
                    4 + 7 = ?
                  </div>
                  <input id="contact-captcha" type="text" placeholder="Resultado" className="w-28 px-4 py-3 bg-white border border-gray-200 focus:border-brand-red focus:ring-1 focus:ring-brand-red/20 rounded-xl text-sm text-brand-dark outline-none transition-all text-center placeholder-gray-400" />
                  <div className="text-brand-gray/50" title="Nuevo código">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="w-full py-4 bg-brand-red hover:bg-brand-red/90 text-white font-semibold rounded-xl text-sm shadow-lg shadow-brand-red/20 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                Solicitar Cotización
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
