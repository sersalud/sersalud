import React from 'react';
import { Activity, Bone, Stethoscope, Cog, ScanLine } from 'lucide-react';

const procedures = [
  {
    title: "Artroscopía De Rodilla",
    description: "Es una cirugía mínimamente invasiva que se realiza para evaluar o reparar el interior de la rodilla.",
    icon: Bone,
    style: "light"
  },
  {
    title: "Artroscopía De Hombro",
    description: "Cirugía mínimamente invasiva que se realiza para evaluar o reparar el interior del hombro.",
    icon: ScanLine,
    style: "dark"
  },
  {
    title: "Reparación De Ligamento Cruzado Anterior",
    description: "Implica reemplazar o reconstruir el LCA dañado, generalmente con tejido de otra parte del cuerpo o un implante.",
    icon: Activity,
    style: "light"
  },
  {
    title: "Reparación De Meniscos",
    description: "Es una cirugía para reparar el cartílago que amortigua la articulación de la rodilla.",
    icon: HeartPulseIcon,
    style: "dark"
  },
  {
    title: "Reparación De Manguito Rotador",
    description: "La reparación del manguito rotador es una cirugía para reparar los tendones dañados que rodean el hombro.",
    icon: Cog,
    style: "light"
  },
  {
    title: "Liberación De Túnel Del Carpo",
    description: "La liberación del túnel del carpo es una cirugía para aliviar la presión sobre el nervio mediano en la muñeca.",
    icon: Stethoscope,
    style: "dark"
  }
];

// Helper component for the specific heart pulse icon used in the design
function HeartPulseIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M12 5v14" />
      <path d="m4 10 8 5" />
    </svg>
  )
}


export const Services: React.FC = () => {
  const images = [
    "/assets/images/Portada de Facebook Agencia de Marketing Profesional Azul Morado.png",
    "/assets/images/Portada de Facebook Agencia de Marketing Profesional Azul Morado.png",
    "/assets/images/Portada de Facebook Agencia de Marketing Profesional Azul Morado.png",
    "/assets/images/Portada de Facebook Agencia de Marketing Profesional Azul Morado.png"
  ];

  return (
    <div className="pt-24 bg-white min-h-screen flex flex-col justify-between">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">

        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-medical-50 text-medical-600 mb-6">
            <Activity size={32} />
          </div>
          <h2 className="text-4xl font-bold text-medical-900 mb-4 tracking-tight">Procedimientos más Comunes</h2>
          <p className="text-xl text-slate-500">
            Nuestra especialidad en intervenciones quirúrgicas ambulatorias de alta precisión.
          </p>
        </div>

        {/* Procedures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {procedures.map((proc, idx) => {
            const isDark = proc.style === "dark";
            return (
              <div
                key={idx}
                className={`
                  group relative overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:shadow-xl
                  ${isDark ? 'bg-medical-600 text-white shadow-lg shadow-medical-900/20' : 'bg-slate-50 text-medical-900 border border-slate-100 hover:border-medical-200'}
                `}
              >
                <div className="flex items-start gap-6">
                  {/* Icon Circle */}
                  <div className={`
                    shrink-0 w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110
                    ${isDark ? 'bg-white text-medical-600' : 'bg-medical-600 text-white shadow-lg shadow-medical-500/30'}
                  `}>
                    <proc.icon size={32} strokeWidth={1.5} />
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-medical-900'}`}>
                      {proc.title}
                    </h3>
                    <p className={`text-base leading-relaxed ${isDark ? 'text-medical-100' : 'text-slate-600'}`}>
                      {proc.description}
                    </p>
                  </div>
                </div>

                {/* Decorative background circle for dark cards */}
                {isDark && (
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white opacity-5 rounded-full pointer-events-none"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Full Width Facebook Cover - Height reduced as per user request */}
      <div className="w-full overflow-hidden h-[300px] md:h-[400px]">
        <img
          src="/assets/images/9.png"
          alt="Sersalud Hospital de Día"
          className="w-full h-full object-cover object-bottom"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
};