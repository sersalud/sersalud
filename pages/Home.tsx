import React from 'react';
import {
  Calendar,
  Activity,
  Users,
  Bed
} from 'lucide-react';
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
      <section className="relative min-h-[calc(100vh-10rem)] flex items-center overflow-hidden mt-24 md:mt-32 lg:mt-48">

        {/* Background Image - Original Hero Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/hero_quirofano.jpg"
            alt="Hospital Sersalud"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent lg:via-slate-50/30" />
        </div>

        {/* Content Area */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-0">
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
              className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-lg"
            >
              Somos un hospital de día enfocado en procedimientos quirúrgicos programados, principalmente artroscópicos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#/hospital" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-medical-700 bg-white/80 backdrop-blur-sm border border-medical-100 rounded-2xl hover:bg-white transition-all duration-300">
                Conocer Más
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="mt-12 flex items-center gap-4 text-sm font-medium text-slate-500"
            >
              <div className="flex -space-x-4">
                {[
                  '1LMLemkirhvFIBPJqSS2eXF9Kkd_FnA5z',
                  '1PKiHCU0AosQghWYe9ZQDEvg4QWpANsss',
                  '1Z3p5PgY2okuPrwyl1EXfsHPkpQNHrqLx'
                ].map((id, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                    <img
                      src={i === 0 ? "/assets/images/doctor_1.png" : "/assets/images/facility_1.png"}
                      alt="Doctor Sersalud"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
              <p>Equipo médico certificado</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section - Reduced Prominence */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-medical-900 tracking-tight mb-2">
              Opiniones de Pacientes
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Valentina Morales',
                procedure: 'Paciente, Zona 10',
                text: 'Las instalaciones son impecables, todo muy limpio y moderno. Me sentí como en un lugar de primer nivel desde el momento en que entré.',
                rating: 5
              },
              {
                name: 'Roberto Sandoval',
                procedure: 'Paciente, Ciudad de Guatemala',
                text: 'El servicio del personal es excepcional. Desde la recepción hasta la sala de recuperación, todos estuvieron muy atentos y amables en todo momento.',
                rating: 5
              },
              {
                name: 'Diana Castillo',
                procedure: 'Paciente, Zona 15',
                text: 'Me sorprendió lo cómodo y tranquilo del ambiente. Las habitaciones son muy privadas y bien equipadas. Un hospital de día que realmente se siente diferente.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-slate-200 pt-3">
                  <p className="font-bold text-medical-900 text-sm">{testimonial.name}</p>
                  <p className="text-xs text-medical-600">{testimonial.procedure}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">
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