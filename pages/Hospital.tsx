import React from 'react';
import { Target, TrendingUp, Building2 } from 'lucide-react';

export const Hospital: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center p-4 bg-white rounded-2xl shadow-sm mb-6 text-medical-600 border border-slate-100">
            <Building2 size={32} strokeWidth={1.5} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-medical-900 mb-6 tracking-tight">
            Nuestro Hospital
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed">
            Excelencia médica y tecnología avanzada.
          </p>
        </div>
      </div>

      {/* Quiénes Somos & Imágenes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Columna de Texto */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-medical-900">¿Quiénes Somos?</h2>
            <div className="prose prose-lg text-slate-600">
              <p className="font-medium text-medical-800 text-lg leading-relaxed">
                Somos un hospital de día enfocado en procedimientos quirúrgicos programados, principalmente artroscópicos.
              </p>
              <p>
                Somos el resultado de una integración vertical luego de varios años como proveedores de material y equipo médico. Esto nos permite garantizar la más alta calidad en cada insumo utilizado.
              </p>
            </div>

            {/* Misión Card */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg relative overflow-hidden group hover:border-medical-200 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-medical-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4 text-medical-600">
                  <Target size={24} />
                  <h3 className="font-bold text-lg uppercase tracking-wider">Nuestra Misión</h3>
                </div>
                <p className="text-slate-600 italic leading-relaxed">
                  "Proporcionar al médico un espacio con la infraestructura, el equipo, el material y el personal especializado para brindar a su paciente la atención médica que requiere."
                </p>
              </div>
            </div>

            {/* Ventajas Badge */}
            <div className="bg-medical-600 text-white p-6 rounded-2xl shadow-lg shadow-medical-500/30">
              <h4 className="font-bold text-lg mb-2 flex items-center">
                <TrendingUp className="mr-2" size={20} /> Ventajas Competitivas
              </h4>
              <p className="text-medical-50 text-sm opacity-90">
                Nuestra empresa se destaca por su agilidad y eficiencia, aprovechando al máximo nuestro tamaño para reducir costos sin comprometer la calidad.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-medical-900 mb-8 px-2 text-center">Instalaciones de Primer Nivel</h3>
            <div className="grid grid-cols-1 gap-8">
              {/* Imagen Única: Habitación Paciente */}
              <div className="flex flex-col gap-3">
                <div className="relative rounded-3xl overflow-hidden shadow-lg bg-slate-100 group">
                  <img
                    src="/assets/images/hero.png"
                    alt="Instalaciones Sersalud"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-sm text-center text-slate-500 font-bold uppercase tracking-wide">Habitaciones Privadas</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Why Choose Ambulatory Section (Content preserved) */}
      <section className="bg-white py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-medical-600 font-bold tracking-wider uppercase text-sm mb-3 block">Información al Paciente</span>
            <h2 className="text-3xl md:text-4xl font-bold text-medical-900 mb-6">
              ¿Por qué elegir una cirugía ortopédica en un hospital ambulatorio?
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              La elección entre una cirugía ortopédica en un hospital ambulatorio y un hospital general depende de varios factores. Aquí se presentan algunas razones por las que podría considerarse:
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <h3 className="text-xl font-bold text-medical-900 mb-4">Menor Tiempo De Recuperación</h3>
              <p className="text-slate-600 leading-relaxed">
                Para cirugías ortopédicas menos invasivas o procedimientos que no requieren una estadía hospitalaria prolongada, un centro ambulatorio puede ser más conveniente.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <h3 className="text-xl font-bold text-medical-900 mb-4">Mayor Comodidad</h3>
              <p className="text-slate-600 leading-relaxed">
                Los hospitales ambulatorios suelen centrarse en procedimientos programados y en ofrecer un ambiente más tranquilo y personalizado.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <h3 className="text-xl font-bold text-medical-900 mb-4">Atención Especializada</h3>
              <p className="text-slate-600 leading-relaxed">
                Los centros quirúrgicos ambulatorios a menudo están especializados en procedimientos específicos, lo que puede resultar en un mayor enfoque y experiencia.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};