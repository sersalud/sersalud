import React from 'react';
import {
  Calendar,
  Activity,
  Users,
  Bed
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';

const Counter: React.FC<{ value: string; duration?: number }> = ({ value, duration = 2 }) => {
  const numericValue = parseInt(value?.replace(/,/g, '') || '0', 10);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const spring = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  const display = useTransform(spring, (latest) => {
    const val = typeof latest === 'number' ? latest : 0;
    return Math.floor(val).toLocaleString();
  });

  React.useEffect(() => {
    if (isInView && !isNaN(numericValue)) {
      spring.set(numericValue);
    }
  }, [isInView, spring, numericValue]);

  return <motion.span ref={ref}>{display}</motion.span>;
};

// Metrics restored and corrected: "4 Habitaciones Privadas"
const stats = [
  { value: '2021', label: 'Nuestra Inauguración', icon: Calendar },
  { value: '30', label: 'Procedimientos Mensuales', icon: Activity },
  { value: '36', label: 'Edad Promedio', sub: 'De Un Paciente De Ortopedia', icon: Users },
  { value: '4', label: 'Habitaciones Privadas', icon: Bed },
];

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Section */}
      {/* Increased margin-top to ensure navbar does not cover the image content */}
      <section className="hero-section mt-24 md:mt-32 lg:mt-48">

        {/* Background Image - Original Hero Image */}
        <div className="hero-bg">
            <img
              src="/assets/images/hero_quirofano.jpg"
              alt="Hospital Sersalud"
              width="1920"
              height="1080"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          {/* Gradient Overlay for text readability */}
          <div className="hero-overlay" />
        </div>

        {/* Content Area */}
        <div className="hero-content pt-10 md:pt-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl bg-white/70 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none p-6 md:p-8 lg:p-0 rounded-[2.5rem] lg:rounded-none shadow-xl lg:shadow-none border border-white/50 lg:border-none"
          >

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center space-x-2 mb-6 px-4 py-2 bg-medical-50 rounded-full border border-medical-100"
            >
              <span className="w-2 h-2 rounded-full bg-medical-600 animate-pulse"></span>
              <span className="text-medical-800 font-bold tracking-wide text-xs uppercase">
                SERSALUD
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-medical-900 leading-[1.1] mb-8 tracking-tight"
            >
              Hospital de <br />
              <span className="text-medical-600">Cirugía Ortopédica</span> <br />
              Ambulatoria
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg md:text-xl text-slate-700 mb-10 leading-relaxed max-w-2xl"
            >
              Somos un hospital de día enfocado en procedimientos quirúrgicos programados, principalmente artroscópicos.
              <br className="hidden md:block" />
              Somos el resultado de una integración vertical luego de varios años como proveedores de material y equipo médico.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/hospital" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-medical-700 bg-white/80 backdrop-blur-sm border border-medical-100 rounded-2xl hover:bg-white transition-all duration-300">
                Conocer más sobre el Hospital
              </Link>
            </motion.div>
            
            {/* Hidden SEO Content - Placed after H1 for correct hierarchy */}
            <div className="sr-only" aria-hidden="true">
              <h2>Hospital de Especialidades Quirúrgicas y Ortopedia en Guatemala</h2>
              <p>
                En Sersalud contamos con un equipo médico altamente calificado en ortopedia y servicios quirúrgicos. 
                Somos un hospital de cirugía ortopédica líder en el sector, enfocado en brindar una atención de día 
                enfocada en la recuperación rápida del paciente. Realizamos procedimientos quirúrgicos avanzados, 
                incluyendo cirugía ortopédica de mínima invasión y técnicas artroscópicas.
              </p>
            </div>


          </motion.div>
        </div>
      </section>



      {/* Metrics Section - Directly under Testimonials */}
      <section className="relative z-20 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-y md:divide-y-0 md:divide-x divide-slate-100">
              {stats.map((stat, index) => (
                <div key={index} className="pt-8 md:pt-0 md:px-6 text-center group">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="inline-flex items-center justify-center w-16 h-16 mb-5 bg-medical-50 text-medical-600 rounded-2xl transition-transform duration-300"
                  >
                    <stat.icon size={32} strokeWidth={1.5} />
                  </motion.div>
                  <div className="text-4xl md:text-5xl font-bold text-medical-900 mb-2 font-sans tracking-tight">
                    <Counter value={stat.value} />
                  </div>
                  <div className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                    {stat.label}
                  </div>
                  {stat.sub && (
                    <div className="text-xs text-medical-600 mt-1 font-medium">
                      {stat.sub}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};