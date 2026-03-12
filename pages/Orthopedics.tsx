import React from 'react';
import { Bone, Activity, HeartPulse } from 'lucide-react';

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
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* 1. La Ortopedia */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100">
            <h2 className="text-3xl font-bold text-medical-900 mb-8 flex items-center">
              <Activity className="mr-4 text-medical-600" size={32} />
              La Ortopedia
            </h2>
            <div className="prose prose-lg text-slate-600 max-w-none leading-relaxed space-y-6">
              <p>
                La ortopedia es una rama de la medicina que se especializa en el diagnóstico, tratamiento y prevención de los trastornos del sistema musculosquelético. Este sistema incluye huesos, articulaciones, ligamentos, músculos, tendones y otros tejidos relacionados con la función del movimiento y el soporte del cuerpo. Los ortopedistas son médicos especializados en esta disciplina y se dedican a abordar una amplia gama de afecciones y lesiones relacionadas con el sistema musculosquelético.
              </p>
              <p>
                El objetivo principal de la ortopedia es mejorar la calidad de vida de los pacientes al aliviar el dolor, restaurar la función y prevenir futuros problemas musculoesqueléticos. Los ortopedistas utilizan una variedad de técnicas y tratamientos que van desde la fisioterapia y la terapia ocupacional hasta la cirugía ortopédica cuando es necesario. Algunas de las afecciones comunes tratadas por ortopedistas incluyen fracturas óseas, lesiones deportivas, artritis, enfermedades degenerativas de las articulaciones, deformidades congénitas o acquiridas, y trastornos de la columna vertebral.
              </p>
              <p>
                La elección entre una cirugía ortopédica en un hospital ambulatorio (también conocido como centro quirúrgico ambulatorio o clínica quirúrgica) y un hospital general depende de varios factores, incluyendo la naturaleza de la cirugía, el estado de salud del paciente y las políticas del centro de atención médica. Ambos tipos de instalaciones tienen ventajas y desventajas, y lo que es mejor en un caso particular puede variar. Aquí se presentan algunas razones por las que podría considerarse una cirugía ortopédica en un hospital ambulatorio:
              </p>
            </div>
          </div>

          {/* Visual Divider / Image (Optional, but kept clean as per user instruction "sin IMAGE" for Hospital, assuming clean look here too) */}
          <div className="rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 bg-white group">
            <img
              src="/assets/images/orthopedics_team.jpg"
              alt="Especialidad Ortopédica"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>

        </div>
      </div>
    </div>
  );
};