import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-medical-900 text-white pt-16 pb-8 border-t border-medical-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex flex-col items-start gap-3 mb-8">
              <div className="bg-white/90 p-3 rounded-2xl backdrop-blur-sm border border-white/20 inline-flex">
                <img
                  src="/assets/images/logo_sersalud.png"
                  alt="Sersalud Logo bg-white rounded-xl p-2"
                  className="h-12 object-contain"
                />
              </div>
            </div>

            <p className="text-medical-100 mb-6 max-w-sm">
              Somos un hospital de día enfocado en procedimientos quirúrgicos programados, principalmente artroscópicos.
              Somos el resultado de una integración vertical luego de varios años como proveedores de material y equipo médico.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/sersalud.hospital" target="_blank" rel="noopener noreferrer" aria-label="Facebook de Sersalud" className="w-10 h-10 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/SERSALUD.HOSPITAL" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Sersalud" className="w-10 h-10 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110">
                <Instagram size={18} />
              </a>
              <a href="https://www.linkedin.com/company/SERSALUD.HOSPITAL" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Sersalud" className="w-10 h-10 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-medical-300">Enlaces Rápidos</h4>
            <ul className="space-y-3 text-medical-50">
              <li><Link to="/hospital" className="hover:text-white transition-colors">Hospital</Link></li>
              <li><Link to="/ortopedia" className="hover:text-white transition-colors">Ortopedia</Link></li>
              <li><Link to="/servicios" className="hover:text-white transition-colors">Servicios</Link></li>
              <li><Link to="/admision" className="hover:text-white transition-colors">Admisión</Link></li>
              <li><Link to="/legal" className="hover:text-white transition-colors">Aviso de Privacidad</Link></li>
              <li><Link to="/legal" className="hover:text-white transition-colors">Términos de Uso</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-medical-300">Contacto</h4>
            <ul className="space-y-4 text-medical-50">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-medical-400 shrink-0" />
                <span className="leading-tight">
                  Interamericas Diagonal 6 10-50 zona 10<br />
                  Torre Norte 601, 01010<br />
                  Guatemala City, Guatemala
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-medical-400 shrink-0" />
                <span>+502 2212-9234</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-medical-400 shrink-0" />
                <span>info@sersalud.hospital</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Single Line Footer Bottom */}
        <div className="border-t border-medical-800 mt-12 pt-8 text-center text-medical-200 text-sm">
          <p>
            © 2026 Sersalud. Todos los derechos reservados. • Made with AI by <a href="https://mediafusion.online" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline decoration-medical-400 underline-offset-2">MediaFusion.online</a>
          </p>
        </div>
      </div>
    </footer>
  );
};