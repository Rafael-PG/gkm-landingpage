"use client";

import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Lock, UserCheck, Shield, Clock, Server, AlertTriangle, FileDown } from 'lucide-react';

export default function Portal() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('demo@corporacion.com.pe');
  const [password, setPassword] = useState('********');
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'tickets' | 'projects' | 'equipment'>('tickets');

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setIsAuthenticated(true);
      setLoading(false);
    }, 1200);
  };

  const tickets = [
    { id: 'TKT-9012', issue: 'Mantenimiento Preventivo de Servidor Rack 3', status: 'En Proceso', priority: 'Alta', assigned: 'Ing. Francisco Rosales', date: '26/06/2026', sla: '2 hrs restantes' },
    { id: 'TKT-8945', issue: 'Fusión de Fibra de Enlace Secundario - Planta Lurin', status: 'Resuelto', priority: 'Crítica', assigned: 'Ing. Alejandro Prado', date: '22/06/2026', sla: 'Cumplido (1.5 hrs)' },
    { id: 'TKT-8831', issue: 'Ajuste de ángulo y limpieza de Cámara Domo 14 IP', status: 'Resuelto', priority: 'Media', assigned: 'Téc. Luis Ramos', date: '15/06/2026', sla: 'Cumplido (4 hrs)' },
  ];

  const projects = [
    { name: 'Implementación CCTV Almacén 1,100 m²', status: '90% Completado', phase: 'Fase 4: Pruebas y calibración de lentes', start: '01/06/2026', end: '30/06/2026' },
    { name: 'Cableado Estructurado Cat 6A - Oficinas Administrativas', status: '100% Entregado', phase: 'Fase Final: Certificación Fluke Networks y rotulado', start: '10/05/2026', end: '15/06/2026' },
  ];

  const equipments = [
    { serial: 'SN-X98012-HIK', type: 'Cámara Bullet IP 4K PTZ', location: 'Puerta Principal - Sede Lurin', health: 'Óptimo', lastService: '12/05/2026' },
    { serial: 'SN-Z84013-DELL', type: 'Servidor PowerEdge R640', location: 'Data Center principal - Piso 2', health: 'Óptimo', lastService: '26/06/2026' },
    { serial: 'SN-N77102-FORTI', type: 'FortiGate 100F Firewall', location: 'Core Rack - Piso 2', health: 'Requiere Mantenimiento (Polvo)', lastService: '15/12/2025' },
  ];

  return (
    <div className="bg-brand-light min-h-[70vh] py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!isAuthenticated ? (
          <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="bg-brand-dark text-white p-8 text-center relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-red/10 rounded-full blur-xl -mr-6 -mt-6" />
              <Lock className="w-8 h-8 text-brand-red mx-auto mb-4" />
              <h3 className="font-display font-extrabold text-xl tracking-tight">Portal B2B Clientes</h3>
              <p className="text-xs text-gray-400 mt-1 font-light">Trazabilidad de equipos, tickets de soporte y reportes Fluke.</p>
            </div>

            <form onSubmit={handleLogin} className="p-8 space-y-5">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-brand-dark tracking-wide uppercase block">Correo Corporativo</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2.5 bg-brand-light border border-gray-200 focus:border-brand-red focus:ring-1 focus:ring-brand-red rounded-lg text-sm text-brand-dark outline-none transition-all" required />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-brand-dark tracking-wide uppercase block">Contraseña</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2.5 bg-brand-light border border-gray-200 focus:border-brand-red focus:ring-1 focus:ring-brand-red rounded-lg text-sm text-brand-dark outline-none transition-all" required />
              </div>
              <div className="text-xs text-brand-gray text-right">
                <a href="#" className="hover:text-brand-red transition-colors">¿Olvidó sus credenciales de soporte?</a>
              </div>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" disabled={loading} className="w-full py-3 bg-brand-red hover:bg-brand-red/90 disabled:bg-brand-gray/50 text-white font-semibold rounded-lg text-sm shadow-md shadow-brand-red/10 transition-all cursor-pointer flex items-center justify-center gap-2">
                {loading ? (
                  <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /><span>Autenticando canal seguro...</span></>
                ) : (
                  <span>Ingresar a mi Consola B2B</span>
                )}
              </motion.button>
              <div className="border-t border-gray-100 pt-4 text-center">
                <p className="text-[11px] text-brand-gray">Este portal es de acceso restringido para empresas con contrato de soporte y mantenimiento GKM SLA vigente.</p>
              </div>
            </form>
          </div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10 space-y-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-gray-100 pb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center"><UserCheck className="w-6 h-6" /></div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-display font-extrabold text-xl text-brand-dark">Corporación Sika Perú</h2>
                    <span className="bg-brand-red text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">SLA Premium</span>
                  </div>
                  <p className="text-xs text-brand-gray font-light">ID de Cliente: <span className="font-mono text-brand-dark">GKM-CLI-9042</span> • Contrato TI Activo</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={() => setIsAuthenticated(false)} className="px-4 py-2 border border-gray-200 hover:border-brand-red hover:text-brand-red rounded-lg text-xs font-semibold text-brand-gray transition-colors cursor-pointer">Cerrar Sesión</button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-brand-light p-5 rounded-2xl border border-gray-100 flex items-center justify-between">
                <div>
                  <p className="text-xs text-brand-gray font-bold uppercase tracking-wider">Tickets de Soporte</p>
                  <p className="font-display font-extrabold text-2xl text-brand-dark mt-1">1 Pendiente</p>
                  <p className="text-[10px] text-green-600 mt-1">2 resueltos esta semana</p>
                </div>
                <Clock className="w-8 h-8 text-brand-red opacity-85" />
              </div>
              <div className="bg-brand-light p-5 rounded-2xl border border-gray-100 flex items-center justify-between">
                <div>
                  <p className="text-xs text-brand-gray font-bold uppercase tracking-wider">Proyectos Físicos</p>
                  <p className="font-display font-extrabold text-2xl text-brand-dark mt-1">1 en Curso</p>
                  <p className="text-[10px] text-brand-gray mt-1">90% CCTV Almacén</p>
                </div>
                <Server className="w-8 h-8 text-brand-red opacity-85" />
              </div>
              <div className="bg-brand-light p-5 rounded-2xl border border-gray-100 flex items-center justify-between">
                <div>
                  <p className="text-xs text-brand-gray font-bold uppercase tracking-wider">Salud de Equipos</p>
                  <p className="font-display font-extrabold text-2xl text-green-600 mt-1">92% Óptimo</p>
                  <p className="text-[10px] text-amber-500 mt-1">1 requiere limpieza de polvo</p>
                </div>
                <Shield className="w-8 h-8 text-green-600 opacity-85" />
              </div>
            </div>

            <div className="border-b border-gray-100">
              <div className="flex space-x-6 text-sm">
                <button onClick={() => setActiveTab('tickets')} className={`pb-3 font-semibold tracking-wide border-b-2 cursor-pointer transition-all ${activeTab === 'tickets' ? 'border-brand-red text-brand-red' : 'border-transparent text-brand-gray hover:text-brand-dark'}`}>Tickets de Mesa de Ayuda</button>
                <button onClick={() => setActiveTab('projects')} className={`pb-3 font-semibold tracking-wide border-b-2 cursor-pointer transition-all ${activeTab === 'projects' ? 'border-brand-red text-brand-red' : 'border-transparent text-brand-gray hover:text-brand-dark'}`}>Proyectos de Infraestructura</button>
                <button onClick={() => setActiveTab('equipment')} className={`pb-3 font-semibold tracking-wide border-b-2 cursor-pointer transition-all ${activeTab === 'equipment' ? 'border-brand-red text-brand-red' : 'border-transparent text-brand-gray hover:text-brand-dark'}`}>Inventario de Hardware TI</button>
              </div>
            </div>

            <div className="min-h-[250px]">
              {activeTab === 'tickets' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-bold text-brand-gray bg-brand-light p-3 rounded-lg border border-gray-100">
                    <span className="w-24">CÓDIGO TICKET</span>
                    <span className="flex-1">DETALLE DEL INCIDENTE / REQUERIMIENTO</span>
                    <span className="w-32">ESTADO</span>
                    <span className="w-32">NIVEL SLA</span>
                    <span className="w-36">TÉCNICO ASIGNADO</span>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {tickets.map((t) => (
                      <div key={t.id} className="flex items-center justify-between py-4 text-xs">
                        <span className="w-24 font-mono font-bold text-brand-dark">{t.id}</span>
                        <span className="flex-1 font-medium text-gray-700 pr-4">{t.issue}</span>
                        <span className="w-32"><span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${t.status === 'En Proceso' ? 'bg-amber-100 text-amber-800' : 'bg-green-100 text-green-800'}`}>{t.status}</span></span>
                        <span className={`w-32 font-semibold ${t.status === 'En Proceso' ? 'text-brand-red animate-pulse' : 'text-gray-400'}`}>{t.sla}</span>
                        <span className="w-36 text-brand-gray font-light">{t.assigned}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-6 border-t border-gray-100 text-right">
                    <button onClick={() => alert('Demostración: En entornos reales, esto abriría un formulario de ticket B2B rápido con sincronización instantánea de ingenieros.')} className="px-4 py-2 bg-brand-dark hover:bg-brand-red text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer">+ Abrir Nuevo Ticket SLA</button>
                  </div>
                </div>
              )}

              {activeTab === 'projects' && (
                <div className="space-y-6">
                  {projects.map((p, idx) => (
                    <div key={idx} className="bg-brand-light p-6 rounded-2xl border border-gray-100 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <h4 className="font-display font-bold text-sm text-brand-dark uppercase tracking-wide">{p.name}</h4>
                        <span className="bg-brand-red text-white text-[10px] font-bold px-3 py-1 rounded-full">{p.status}</span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
                        <div><p className="text-brand-gray">Fase Actual</p><p className="font-semibold text-brand-dark mt-0.5">{p.phase}</p></div>
                        <div><p className="text-brand-gray">Fecha de Inicio</p><p className="font-mono text-brand-dark mt-0.5">{p.start}</p></div>
                        <div><p className="text-brand-gray">Entrega Estimada</p><p className="font-mono text-brand-dark mt-0.5">{p.end}</p></div>
                      </div>
                      {p.status === '100% Entregado' && (
                        <div className="pt-4 border-t border-gray-200/50 flex items-center justify-between">
                          <span className="text-[10px] text-brand-gray font-mono">// REPORTES DE CERTIFICACIÓN FLUKE NETWORKS DISPONIBLES</span>
                          <button onClick={() => alert('Descargando reporte de certificación de puntos de red (PDF Mockup)...')} className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 hover:border-brand-red hover:text-brand-red rounded-lg text-[11px] font-semibold text-brand-gray transition-colors cursor-pointer">
                            <FileDown className="w-3.5 h-3.5" />
                            <span>Descargar Reporte.pdf</span>
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'equipment' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-bold text-brand-gray bg-brand-light p-3 rounded-lg border border-gray-100">
                    <span className="w-36">SERIE HARDWARE</span>
                    <span className="w-56">TIPO DE EQUIPO</span>
                    <span className="flex-1">UBICACIÓN FÍSICA EN SINOPSIS</span>
                    <span className="w-32">SALUD FÍSICA</span>
                    <span className="w-32">ÚLT. MANTENIMIENTO</span>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {equipments.map((e) => (
                      <div key={e.serial} className="flex items-center justify-between py-4 text-xs">
                        <span className="w-36 font-mono text-brand-gray">{e.serial}</span>
                        <span className="w-56 font-bold text-brand-dark">{e.type}</span>
                        <span className="flex-1 text-gray-600 font-light">{e.location}</span>
                        <span className="w-32"><span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${e.health.includes('Óptimo') ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>{e.health}</span></span>
                        <span className="w-32 font-mono text-brand-gray">{e.lastService}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
