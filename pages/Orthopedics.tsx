import React from 'react';
import { Bone, Activity, HeartPulse, ShieldCheck, UserCheck, Stethoscope } from 'lucide-react';

export const Orthopedics: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">

      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-xl shadow-sm mb-6 text-medical-600 border border-slate-100">
            <Bone size={32} strokeWidth={1.5} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-medical-900 mb-6 tracking-tight">
            Especialidad en Ortopedia
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed">
            Diagnóstico, tratamiento y rehabilitación de patologías del sistema musculoesquelético.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Column 1: Content Text - Preserved exactly as requested */}
          <div className="space-y-8 order-2 lg:order-1">

            {/* Introduction Card */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-medical-900 mb-6 flex items-center">
                <span className="w-10 h-10 rounded-xl bg-medical-50 text-medical-600 flex items-center justify-center mr-4">
                  <Activity size={20} />
                </span>
                ¿Qué es la Ortopedia?
              </h3>
              <div className="prose prose-lg text-slate-600 leading-relaxed">
                <p className="mb-4">
                  La ortopedia es la rama de la medicina dedicada al diagnóstico, tratamiento, rehabilitación y prevención de lesiones y enfermedades del sistema musculoesquelético del cuerpo humano. Este complejo sistema incluye los huesos, las articulaciones, los ligamentos, los tendones, los músculos y los nervios que le permiten moverse, trabajar y estar activo.
                </p>
                <p>
                  Antiguamente asociada principalmente con el cuidado de niños con deformidades de columna o extremidades, la ortopedia moderna atiende a pacientes de todas las edades, desde recién nacidos con pie equino hasta jóvenes atletas que requieren cirugía artroscópica y personas mayores con artritis.
                </p>
              </div>
            </div>

            {/* Scope & Objectives */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-medical-900 mb-6 flex items-center">
                <span className="w-10 h-10 rounded-xl bg-medical-50 text-medical-600 flex items-center justify-center mr-4">
                  <HeartPulse size={20} />
                </span>
                Nuestro Objetivo Médico
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                El objetivo principal de nuestro servicio de ortopedia es mejorar la calidad de vida de los pacientes. Esto se logra mediante:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <UserCheck className="w-5 h-5 text-medical-500 mt-1 mr-3 shrink-0" />
                  <span className="text-slate-600"><strong>Alivio del dolor:</strong> Tratamiento de condiciones crónicas y agudas.</span>
                </li>
                <li className="flex items-start">
                  <Activity className="w-5 h-5 text-medical-500 mt-1 mr-3 shrink-0" />
                  <span className="text-slate-600"><strong>Restauración de la función:</strong> Ayudar a los pacientes a recuperar la movilidad y la fuerza.</span>
                </li>
                <li className="flex items-start">
                  <ShieldCheck className="w-5 h-5 text-medical-500 mt-1 mr-3 shrink-0" />
                  <span className="text-slate-600"><strong>Prevención:</strong> Educar sobre cómo evitar futuras lesiones y detener la progresión de enfermedades.</span>
                </li>
              </ul>
            </div>

            {/* Common Conditions */}
            <div className="bg-medical-50 p-8 rounded-2xl border border-medical-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-medical-100 text-medical-700 rounded-full flex items-center justify-center">
                  <Stethoscope size={24} />
                </div>
                <h4 className="text-xl font-bold text-medical-900">
                  Áreas de Atención
                </h4>
              </div>
              <p className="text-medical-800 text-base leading-relaxed mb-4">
                Nuestros especialistas ortopédicos abordan una amplia gama de afecciones, que incluyen pero no se limitan a:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm font-medium text-medical-700">
                <div className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-medical-400 mr-2"></span>Fracturas y dislocaciones</div>
                <div className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-medical-400 mr-2"></span>Desgarros de ligamentos (LCA)</div>
                <div className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-medical-400 mr-2"></span>Lesiones de meniscos</div>
                <div className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-medical-400 mr-2"></span>Túnel del carpo</div>
                <div className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-medical-400 mr-2"></span>Lesiones del manguito rotador</div>
                <div className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-medical-400 mr-2"></span>Artritis y osteoporosis</div>
              </div>
            </div>
          </div>

          {/* Column 2: Single Image - Surgery Team */}
          <div className="sticky top-24 order-1 lg:order-2 space-y-6">
            <div className="rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 bg-white group">
              <img
                src="/assets/images/orthopedics_team.jpg"
                alt="Equipo médico en cirugía ortopédica"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};