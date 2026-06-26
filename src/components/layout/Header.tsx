"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Shield, Server, Wrench, Headphones, ShieldCheck, Cpu, ArrowRight } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleNav = (path: string) => {
    router.push(path);
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    { name: 'CCTV Empresarial', path: '/servicios/cctv', icon: ShieldCheck, desc: 'Videovigilancia y control operativo' },
    { name: 'Soporte TI Empresarial', path: '/servicios/soporte-ti', icon: Cpu, desc: 'Continuidad operativa y soporte remoto/campo' },
    { name: 'Servicio Técnico Autorizado', path: '/servicios/servicio-tecnico', icon: Wrench, desc: 'Atención técnica multimarca especializada' },
    { name: 'Infraestructura Tecnológica', path: '/servicios/infraestructura', icon: Server, desc: 'Cableado estructurado, fibra y racks' },
  ];

  const isActive = (path: string) => pathname === path;
  const isServicesActive = pathname.startsWith('/servicios');

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-dark/95 backdrop-blur-md border-b border-brand-gray/20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleNav('/')}>
            <div className="flex items-center gap-2">
              <div className="relative w-10 h-10 flex items-center justify-center bg-brand-red rounded-lg overflow-hidden group">
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full group-hover:translate-x-[-150%] transition-transform duration-1000" />
                <span className="font-display font-bold text-xl tracking-tighter text-white">GKM</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-lg tracking-tight leading-none text-white">
                  GKM <span className="text-brand-red">TECHNOLOGY</span>
                </span>
                <span className="text-[9px] text-brand-gray tracking-widest font-sans uppercase">
                  Hardware &amp; TI Solutions
                </span>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-1">
            <button
              onClick={() => handleNav('/')}
              className={`px-4 py-2 text-sm font-medium tracking-wide transition-colors relative cursor-pointer ${isActive('/') ? 'text-brand-red' : 'text-gray-300 hover:text-white'}`}
            >
              Inicio
              {isActive('/') && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-4 right-4 h-0.5 bg-brand-red"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>

            <button
              onClick={() => handleNav('/nosotros')}
              className={`px-4 py-2 text-sm font-medium tracking-wide transition-colors relative cursor-pointer ${isActive('/nosotros') ? 'text-brand-red' : 'text-gray-300 hover:text-white'}`}
            >
              Nosotros
              {isActive('/nosotros') && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-4 right-4 h-0.5 bg-brand-red"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>

            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                onClick={() => handleNav('/servicios')}
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium tracking-wide transition-colors relative cursor-pointer ${isServicesActive ? 'text-brand-red' : 'text-gray-300 hover:text-white'}`}
              >
                Servicios
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                {isServicesActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-brand-red"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 mt-0 w-80 rounded-xl bg-brand-dark border border-brand-gray/30 shadow-2xl p-2 z-50"
                  >
                    <div className="grid gap-1">
                      <div className="px-3 py-2 border-b border-brand-gray/20 mb-1">
                        <p className="text-[10px] font-bold text-brand-gray tracking-wider uppercase">Nuestras Especialidades</p>
                      </div>
                      {services.map((item) => (
                        <button
                          key={item.path}
                          onClick={() => handleNav(item.path)}
                          className={`flex items-start gap-3 p-3 rounded-lg text-left transition-colors w-full cursor-pointer hover:bg-brand-gray/10 group ${isActive(item.path) ? 'bg-brand-red/10 border-l-2 border-brand-red' : ''}`}
                        >
                          <div className={`p-2 rounded-lg ${isActive(item.path) ? 'bg-brand-red/20 text-brand-red' : 'bg-brand-gray/20 text-gray-300 group-hover:text-brand-red'} transition-colors`}>
                            <item.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <p className={`text-sm font-semibold ${isActive(item.path) ? 'text-brand-red' : 'text-white'}`}>{item.name}</p>
                            <p className="text-xs text-gray-400 mt-0.5 font-sans">{item.desc}</p>
                          </div>
                        </button>
                      ))}
                      <div className="mt-1 p-2 bg-brand-gray/5 rounded-lg flex items-center justify-between text-xs text-brand-gray cursor-pointer hover:text-white transition-colors" onClick={() => handleNav('/servicios')}>
                        <span>Ver catálogo completo</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => handleNav('/blog')}
              className={`px-4 py-2 text-sm font-medium tracking-wide transition-colors relative cursor-pointer ${isActive('/blog') ? 'text-brand-red' : 'text-gray-300 hover:text-white'}`}
            >
              Blog
              {isActive('/blog') && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-4 right-4 h-0.5 bg-brand-red"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>

            <button
              onClick={() => handleNav('/contacto')}
              className={`px-4 py-2 text-sm font-medium tracking-wide transition-colors relative cursor-pointer ${isActive('/contacto') ? 'text-brand-red' : 'text-gray-300 hover:text-white'}`}
            >
              Contáctanos
              {isActive('/contacto') && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-4 right-4 h-0.5 bg-brand-red"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          </nav>

          <div className="hidden md:flex items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNav('/portal')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-sans font-semibold text-sm transition-all border shadow-md cursor-pointer ${isActive('/portal') ? 'bg-white text-brand-dark border-white' : 'bg-brand-red hover:bg-brand-red text-white border-brand-red hover:shadow-brand-red/30'}`}
            >
              <span>Portal B2B</span>
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping" />
            </motion.button>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-brand-gray/20 focus:outline-none transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden border-t border-brand-gray/20 bg-brand-dark/98"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <button onClick={() => handleNav('/')} className={`block w-full text-left px-3 py-3 rounded-lg text-base font-medium ${isActive('/') ? 'bg-brand-red/10 text-brand-red' : 'text-gray-300 hover:bg-brand-gray/10 hover:text-white'}`}>Inicio</button>
              <button onClick={() => handleNav('/nosotros')} className={`block w-full text-left px-3 py-3 rounded-lg text-base font-medium ${isActive('/nosotros') ? 'bg-brand-red/10 text-brand-red' : 'text-gray-300 hover:bg-brand-gray/10 hover:text-white'}`}>Nosotros</button>

              <div className="py-2 border-y border-brand-gray/10 my-2 bg-black/30 rounded-lg px-2">
                <p className="px-3 py-1 text-xs font-bold text-brand-gray uppercase tracking-widest">Servicios de Hardware y TI</p>
                {services.map((item) => (
                  <button key={item.path} onClick={() => handleNav(item.path)} className={`flex items-center gap-3 w-full text-left px-3 py-3 rounded-lg text-sm font-medium ${isActive(item.path) ? 'text-brand-red bg-brand-red/5' : 'text-gray-300 hover:text-white'}`}>
                    <item.icon className="w-4 h-4 text-brand-red" />
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>

              <button onClick={() => handleNav('/blog')} className={`block w-full text-left px-3 py-3 rounded-lg text-base font-medium ${isActive('/blog') ? 'bg-brand-red/10 text-brand-red' : 'text-gray-300 hover:bg-brand-gray/10 hover:text-white'}`}>Blog</button>
              <button onClick={() => handleNav('/contacto')} className={`block w-full text-left px-3 py-3 rounded-lg text-base font-medium ${isActive('/contacto') ? 'bg-brand-red/10 text-brand-red' : 'text-gray-300 hover:bg-brand-gray/10 hover:text-white'}`}>Contáctanos</button>

              <div className="pt-4 px-3">
                <button onClick={() => handleNav('/portal')} className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-base font-semibold text-white bg-brand-red hover:bg-brand-red/90 transition-colors cursor-pointer">
                  <span>Portal B2B Clientes</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
