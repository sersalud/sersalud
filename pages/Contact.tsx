import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-medical-900">Contacto</h2>
          <p className="mt-4 text-xl text-slate-500">Estamos aquí para atenderle</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info Card */}
          <div className="bg-slate-50 rounded-3xl p-6 md:p-10 space-y-8 h-fit">
            <h3 className="text-2xl font-bold text-medical-900 mb-6">Información</h3>

            <div className="flex items-start space-x-4">
              <div className="bg-white p-3 rounded-xl shadow-sm text-medical-600">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-medical-900">Ubicación</h4>
                <p className="text-slate-500 italic">
                  Interamericas Diagonal 6 10-50 zona 10<br />
                  Torre Norte 601, 01010<br />
                  Guatemala City, Guatemala
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-white p-3 rounded-xl shadow-sm text-medical-600">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-medical-900">Teléfono</h4>
                <p className="text-slate-500 italic">+502 2212-9234</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-white p-3 rounded-xl shadow-sm text-medical-600">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-medical-900">Correo Electrónico</h4>
                <p className="text-slate-500 italic">info@sersalud.hospital</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-white p-3 rounded-xl shadow-sm text-medical-600">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-medical-900">Horario</h4>
                <p className="text-slate-500 italic">Lunes a Viernes: 7:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-6 md:p-10 rounded-3xl border border-slate-100 shadow-xl">
            <h3 className="text-2xl font-bold text-medical-900 mb-8">Envíenos un mensaje</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Nombre</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-medical-500 focus:ring-2 focus:ring-medical-200 outline-none transition-all" placeholder="Su nombre" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Apellido</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-medical-500 focus:ring-2 focus:ring-medical-200 outline-none transition-all" placeholder="Su apellido" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Correo Electrónico</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-medical-500 focus:ring-2 focus:ring-medical-200 outline-none transition-all" placeholder="ejemplo@correo.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Mensaje</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-medical-500 focus:ring-2 focus:ring-medical-200 outline-none transition-all resize-none" placeholder="¿Cómo podemos ayudarle?"></textarea>
              </div>

              <button type="button" className="w-full py-4 bg-medical-600 text-white font-bold rounded-xl hover:bg-medical-700 transition-colors shadow-lg shadow-medical-500/30">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};