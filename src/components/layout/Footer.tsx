"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Mail, Phone, MapPin, Shield, CheckCircle, ArrowUp } from 'lucide-react';

export default function Footer() {
  const router = useRouter();
  const currentYear = new Date().getFullYear();

  const handleNav = (path: string) => {
    router.push(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark border-t border-brand-gray/30 text-gray-300 font-sans">
      <div className="h-1.5 w-full bg-gradient-to-r from-brand-red via-brand-red/70 to-brand-gray" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="cursor-pointer" onClick={() => handleNav('/')}>
              <Image src="/images/logo/gkm-logo.webp" alt="GKM Technology" width={120} height={120} className="object-contain" />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed font-light">
              Líderes en diseño, instalación y mantenimiento de infraestructura tecnológica, CCTV, soporte TI y servicio técnico autorizado a nivel nacional.
            </p>
            <div className="flex items-center gap-2 text-xs text-brand-red font-semibold tracking-wider uppercase">
              <CheckCircle className="w-4 h-4 text-brand-red" />
              <span>Operaciones que no se detienen</span>
            </div>
          </div>

          <div>
            <h2 className="font-display font-bold text-sm tracking-widest text-white uppercase mb-6 border-l-2 border-brand-red pl-3">Navegación</h2>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => handleNav('/')} className="hover:text-brand-red transition-colors text-left cursor-pointer">Inicio</button></li>
              <li><button onClick={() => handleNav('/nosotros')} className="hover:text-brand-red transition-colors text-left cursor-pointer">Nosotros</button></li>
              <li><button onClick={() => handleNav('/servicios')} className="hover:text-brand-red transition-colors text-left cursor-pointer">Servicios de TI &amp; Hardware</button></li>
              <li><button onClick={() => handleNav('/blog')} className="hover:text-brand-red transition-colors text-left cursor-pointer">Blog Tecnológico</button></li>
              <li><button onClick={() => handleNav('/contacto')} className="hover:text-brand-red transition-colors text-left cursor-pointer">Contáctanos</button></li>
              <li><button onClick={() => handleNav('/portal')} className="hover:text-brand-red transition-colors text-left cursor-pointer flex items-center gap-1.5">Portal de Clientes <span className="bg-brand-red text-white text-[10px] px-1.5 py-0.5 rounded font-bold">B2B</span></button></li>
            </ul>
          </div>

          <div>
            <h2 className="font-display font-bold text-sm tracking-widest text-white uppercase mb-6 border-l-2 border-brand-red pl-3">Servicios</h2>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => handleNav('/servicios/cctv')} className="hover:text-brand-red transition-colors text-left cursor-pointer">CCTV y Seguridad Corporativa</button></li>
              <li><button onClick={() => handleNav('/servicios/soporte-ti')} className="hover:text-brand-red transition-colors text-left cursor-pointer">Soporte TI 24/7 y Mesa de Ayuda</button></li>
              <li><button onClick={() => handleNav('/servicios/servicio-tecnico')} className="hover:text-brand-red transition-colors text-left cursor-pointer">Servicio Técnico Autorizado</button></li>
              <li><button onClick={() => handleNav('/servicios/infraestructura')} className="hover:text-brand-red transition-colors text-left cursor-pointer">Infraestructura y Redes</button></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-display font-bold text-sm tracking-widest text-white uppercase mb-6 border-l-2 border-brand-red pl-3">Contacto</h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">Av. Santa Elvira E Mz. B lote 8 - Los Olivos, Lima</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-red flex-shrink-0" />
                <span className="text-gray-400 hover:text-white transition-colors">0800-80142</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-red flex-shrink-0" />
                <a href="mailto:atencionalcliente@gkmtechnology.com.pe" className="text-gray-400 hover:text-white transition-colors break-all">atencionalcliente@gkmtechnology.com.pe</a>
              </div>
            </div>
            <div className="pt-2">
              <p className="text-xs text-gray-400">Soporte Técnico de Emergencia 24/7 disponible para contratos corporativos.</p>
            </div>
          </div>
        </div>

        <hr className="my-10 border-brand-gray/25" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {currentYear} GKM Technology S.A.C. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Políticas de Privacidad</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Términos de Servicio</a>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="p-2 rounded bg-brand-gray/10 text-gray-400 hover:text-white hover:bg-brand-red transition-colors cursor-pointer flex items-center gap-1" title="Volver Arriba">
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Subir</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
