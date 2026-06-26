"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, CheckCircle, Send, Terminal } from 'lucide-react';
import { LeadFormInput } from '@/lib/types';

export default function Contacto() {
  const [formData, setFormData] = useState<LeadFormInput>({
    nombre: '', empresa: '', telefono: '', correo: '', servicio: '', mensaje: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [webhookDetails, setWebhookDetails] = useState<any>(null);

  useEffect(() => {
    const preselected = localStorage.getItem('selected_service_interest');
    if (preselected) {
      setFormData(prev => ({ ...prev, servicio: preselected }));
      localStorage.removeItem('selected_service_interest');
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.correo || !formData.telefono || !formData.servicio) {
      alert('Por favor, rellene todos los campos requeridos (*).');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const mockWebhookPayload = {
        timestamp: new Date().toISOString(),
        leadId: 'GKM-LEAD-' + Math.floor(Math.random() * 900000 + 100000),
        origin: 'GKM Web Corporativa - Landing Page',
        crmStatus: 'LEAD_CAPTURED',
        payload: { ...formData }
      };
      setWebhookDetails(mockWebhookPayload);
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="bg-brand-light py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-red font-bold text-xs tracking-widest uppercase bg-brand-red/10 px-3 py-1.5 rounded-full inline-block mb-3">Atención Inmediata</span>
          <h1 className="font-display font-extrabold text-3xl md:text-5xl text-brand-dark tracking-tight mb-4">Contáctenos</h1>
          <p className="text-brand-gray text-sm leading-relaxed font-light">Escríbanos o visítenos. Nuestro equipo de soporte y asesores técnicos senior resolverán sus dudas en menos de 2 horas hábiles.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 space-y-6">
              <h3 className="font-display font-bold text-lg text-brand-dark uppercase tracking-wide border-b border-gray-100 pb-3">Información Corporativa</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-red flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-sm text-brand-dark">Sede Central</p>
                    <p className="text-xs text-brand-gray mt-0.5 leading-relaxed">Av. Santa Elvira E Mz. B lote 8 - Los Olivos, Lima (Administración y Laboratorio de alta complejidad)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-brand-red flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-sm text-brand-dark">Central de Atención</p>
                    <p className="text-xs text-brand-gray mt-0.5 leading-relaxed">Línea gratuita nacional: <span className="font-semibold text-brand-dark">0800-80142</span></p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-brand-red flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-sm text-brand-dark">Correos Electrónicos</p>
                    <p className="text-xs text-brand-gray mt-0.5 leading-relaxed">
                      Atención al Cliente: <a href="mailto:atencionalcliente@gkmtechnology.com.pe" className="text-brand-red font-medium">atencionalcliente@gkmtechnology.com.pe</a><br />
                      Soporte B2B: <span className="text-brand-dark">soporte@gkmtechnology.com.pe</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-dark text-white rounded-2xl p-8 relative overflow-hidden border border-brand-gray/30 shadow-lg">
              <h4 className="font-display font-bold text-base mb-2 text-white">Logística de Respuesta Rápida</h4>
              <p className="text-xs text-gray-400 leading-relaxed font-light mb-4">Nuestro Centro de Logística y Almacén en Puente Piedra (1,100 m²) asegura el abastecimiento inmediato de switches, cámaras, bobinas de fibra y racks para despliegues a gran escala.</p>
              <div className="text-[10px] font-mono text-brand-red font-bold uppercase tracking-widest">// Cobertura a nivel nacional certificada</div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 space-y-6"
                >
                  <div className="border-b border-gray-100 pb-4">
                    <h3 className="font-display font-extrabold text-xl text-brand-dark">Registro de Requerimiento Técnico</h3>
                    <p className="text-xs text-brand-gray mt-1">Complete los datos del requerimiento para que un Ingeniero de Proyectos evalúe su caso.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-brand-dark tracking-wide uppercase block">Nombre Completo <span className="text-brand-red">*</span></label>
                      <input type="text" name="nombre" required value={formData.nombre} onChange={handleChange} placeholder="Ej. Juan Pérez" className="w-full px-4 py-3 bg-brand-light border border-gray-200 focus:border-brand-red focus:ring-1 focus:ring-brand-red rounded-xl text-sm text-brand-dark outline-none transition-all placeholder-gray-400" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-brand-dark tracking-wide uppercase block">Empresa <span className="text-brand-red">*</span></label>
                      <input type="text" name="empresa" required value={formData.empresa} onChange={handleChange} placeholder="Ej. Corporación S.A.C." className="w-full px-4 py-3 bg-brand-light border border-gray-200 focus:border-brand-red focus:ring-1 focus:ring-brand-red rounded-xl text-sm text-brand-dark outline-none transition-all placeholder-gray-400" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-brand-dark tracking-wide uppercase block">Correo Corporativo <span className="text-brand-red">*</span></label>
                      <input type="email" name="correo" required value={formData.correo} onChange={handleChange} placeholder="ejemplo@empresa.com" className="w-full px-4 py-3 bg-brand-light border border-gray-200 focus:border-brand-red focus:ring-1 focus:ring-brand-red rounded-xl text-sm text-brand-dark outline-none transition-all placeholder-gray-400" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-brand-dark tracking-wide uppercase block">Teléfono <span className="text-brand-red">*</span></label>
                      <input type="tel" name="telefono" required value={formData.telefono} onChange={handleChange} placeholder="999 999 999" className="w-full px-4 py-3 bg-brand-light border border-gray-200 focus:border-brand-red focus:ring-1 focus:ring-brand-red rounded-xl text-sm text-brand-dark outline-none transition-all placeholder-gray-400" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-brand-dark tracking-wide uppercase block">Servicio de Interés <span className="text-brand-red">*</span></label>
                    <select name="servicio" required value={formData.servicio} onChange={handleChange} className="w-full px-4 py-3 bg-brand-light border border-gray-200 focus:border-brand-red focus:ring-1 focus:ring-brand-red rounded-xl text-sm text-brand-dark outline-none transition-all cursor-pointer">
                      <option value="">Seleccione una especialidad...</option>
                      <option value="CCTV Empresarial">CCTV Empresarial (Seguridad y Control)</option>
                      <option value="Soporte TI Empresarial">Soporte TI Empresarial (Continuidad TI)</option>
                      <option value="Servicio Técnico Autorizado">Servicio Técnico Autorizado (Hardware Multimarca)</option>
                      <option value="Infraestructura Tecnológica">Infraestructura Tecnológica (Cableado, Racks, Fibra)</option>
                      <option value="Otro Servicio">Otro Requerimiento Técnico</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-brand-dark tracking-wide uppercase block">Mensaje / Detalles del Requerimiento</label>
                    <textarea name="mensaje" rows={4} value={formData.mensaje} onChange={handleChange} placeholder="Describa brevemente el estado de su equipo o el alcance del proyecto de infraestructura..." className="w-full px-4 py-3 bg-brand-light border border-gray-200 focus:border-brand-red focus:ring-1 focus:ring-brand-red rounded-xl text-sm text-brand-dark outline-none transition-all placeholder-gray-400 resize-none" />
                  </div>

                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" disabled={loading} className="w-full py-4 bg-brand-red hover:bg-brand-red/95 disabled:bg-brand-gray/50 text-white font-semibold rounded-xl text-sm shadow-lg shadow-brand-red/20 transition-all cursor-pointer flex items-center justify-center gap-2">
                    {loading ? (
                      <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /><span>Enviando Lead a CRM...</span></>
                    ) : (
                      <><Send className="w-4 h-4" /><span>Enviar Requerimiento Técnico</span></>
                    )}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div key="success-card" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-green-100 space-y-6">
                  <div className="flex items-center gap-4 text-green-600 bg-green-50 p-4 rounded-xl border border-green-100">
                    <CheckCircle className="w-8 h-8 flex-shrink-0" />
                    <div>
                      <h4 className="font-display font-extrabold text-lg text-green-800">¡Lead Registrado Exitosamente!</h4>
                      <p className="text-xs text-green-700 font-light">Hemos conectado su requerimiento con nuestro sistema CRM. Un Ingeniero de Proyectos le contactará en breve.</p>
                    </div>
                  </div>
                  <div className="space-y-3 bg-brand-dark text-gray-200 rounded-xl p-6 font-mono text-xs overflow-hidden border border-brand-gray/40">
                    <div className="flex items-center gap-2 text-brand-red font-bold uppercase tracking-wider text-[10px] mb-2 border-b border-brand-gray/30 pb-2">
                      <Terminal className="w-4 h-4" />
                      <span>// GKM CRM WEBHOOK INTEGRATION PAYLOAD</span>
                    </div>
                    <p className="text-gray-400">POST /api/leads/gkm-crm-connector HTTP/1.1</p>
                    <p className="text-gray-400">Content-Type: application/json</p>
                    <p className="text-green-400 mt-2">// Response 200 OK</p>
                    <pre className="text-gray-300 font-sans text-xs bg-black/40 p-3 rounded leading-relaxed overflow-x-auto">{JSON.stringify(webhookDetails, null, 2)}</pre>
                  </div>
                  <div className="text-center pt-4">
                    <button onClick={() => { setSubmitted(false); setFormData({ nombre: '', empresa: '', telefono: '', correo: '', servicio: '', mensaje: '' }); }} className="px-6 py-3 bg-brand-dark hover:bg-brand-red text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer">Registrar otro requerimiento</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
