import React from 'react';
import { Target, TrendingUp, Building2, Stethoscope, Heart, DollarSign, Clock } from 'lucide-react';

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
            Hospital de Cirugía Ortopédica Ambulatoria
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed">
            Excelencia médica y tecnología avanzada.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* 1. Quiénes Somos */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100">
            <h2 className="text-3xl font-bold text-medical-900 mb-6">¿Quiénes Somos?</h2>
            <div className="prose prose-lg text-slate-600 max-w-none">
              <p className="font-medium text-medical-800 text-lg leading-relaxed">
                Somos un hospital de dia enfocado en procedimientos programados,
              </p>
              <p>
                Somos el resultado de una integración vertical luego de varios años como proveedores de material y equipo médico.
              </p>
            </div>
          </div>

          {/* 2. Misión */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-medical-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6 text-medical-600">
                <Target size={28} />
                <h3 className="text-2xl font-bold uppercase tracking-wider">Misión</h3>
              </div>
              <p className="text-slate-600 italic text-xl leading-relaxed">
                "Proporcionar al médico un espacio con la infraestructura, el equipo, el material y el personal especializado para brindar a su paciente la atención médica que requiere."
              </p>
            </div>
          </div>

          {/* 3. Quiénes Somos (Repetido según solicitud) */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100">
            <h2 className="text-3xl font-bold text-medical-900 mb-6">¿Quiénes Somos?</h2>
            <div className="prose prose-lg text-slate-600 max-w-none">
              <p className="font-medium text-medical-800 text-lg leading-relaxed">
                Somos un hospital de dia enfocado en procedimientos programados,
              </p>
              <p>
                Somos el resultado de una integración vertical luego de varios años como proveedores de material y equipo médico.
              </p>
            </div>
          </div>

          {/* 4. Ventajas */}
          <div className="bg-medical-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-lg shadow-medical-500/30">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp size={28} />
              <h3 className="text-2xl font-bold uppercase tracking-wider">Ventajas</h3>
            </div>
            <p className="text-medical-50 text-lg leading-relaxed">
              Nuestra empresa se destaca por su agilidad y eficiencia, aprovechando al máximo nuestro tamaño para reducir costos sin comprometer la calidad. Contamos con un experimentado equipo médico y de enfermería con más de 15 años de experiencia, respaldado por equipos y materiales de vanguardia.
            </p>
          </div>

        </div>
      </section>

      {/* 5. Benefits Section (Why Choose Ambulatory) */}
      <section className="bg-white py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <span className="text-medical-600 font-bold tracking-wider uppercase text-sm mb-3 block">Información al Paciente</span>
            <h2 className="text-3xl md:text-5xl font-bold text-medical-900 mb-6 tracking-tight">
              ¿Por qué elegir una cirugía ortopédica en un hospital ambulatorio?
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Card: Menor Tiempo De Recuperación */}
            <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl transition-all duration-500 group">
              <div className="w-14 h-14 bg-medical-100 text-medical-600 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 group-hover:rotate-3">
                <Clock size={28} />
              </div>
              <h3 className="text-2xl font-bold text-medical-900 mb-5">Menor Tiempo De Recuperación</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Para cirugías ortopédicas menos invasivas o procedimientos que no requieren una estadía hospitalaria prolongada, un centro ambulatorio puede ser más conveniente y permitir una recuperación en el hogar más rápida.
              </p>
            </div>

            {/* Card: Mayor Comodidad Para El Paciente */}
            <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl transition-all duration-500 group">
              <div className="w-14 h-14 bg-medical-100 text-medical-600 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 group-hover:rotate-3">
                <Heart size={28} />
              </div>
              <h3 className="text-2xl font-bold text-medical-900 mb-5">Mayor Comodidad Para El Paciente</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Los hospitales ambulatorios suelen centrarse en procedimientos programados y en ofrecer un ambiente más tranquilo y personalizado. Los pacientes pueden sentirse más cómodos y menos estresados en estas instalaciones.
              </p>
            </div>

            {/* Card: Atención Centrada En La Especialidad */}
            <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl transition-all duration-500 group">
              <div className="w-14 h-14 bg-medical-100 text-medical-600 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 group-hover:rotate-3">
                <Stethoscope size={28} />
              </div>
              <h3 className="text-2xl font-bold text-medical-900 mb-5">Atención Centrada En La Especialidad</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Los centros quirúrgicos ambulatorios a menudo están especializados en procedimientos específicos, como cirugías ortopédicas, lo que puede resultar en un mayor enfoque y experiencia en ese campo en particular.
              </p>
            </div>

            {/* Card: Menor Costo */}
            <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl transition-all duration-500 group">
              <div className="w-14 h-14 bg-medical-100 text-medical-600 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 group-hover:rotate-3">
                <DollarSign size={28} />
              </div>
              <h3 className="text-2xl font-bold text-medical-900 mb-5">Menor Costo</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                En general, las cirugías ambulatorias tienden a ser menos costosas que las realizadas en hospitales generales, ya que no implican gastos adicionales relacionados con la estancia hospitalaria.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};