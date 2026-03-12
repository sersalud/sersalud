import React, { useState, useEffect, useCallback } from 'react';
import { Zap, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

const quirofanoImages = [
   { src: '/assets/images/real_surgery.jpg', alt: 'Quirófano Sersalud' },
   { src: '/assets/images/ortho_1.jpg', alt: 'Quirófano 2 Sersalud' },
   { src: '/assets/images/17.png', alt: 'Quirófano 3 Sersalud' },
];

const habitacionImages = [
   { src: '/assets/images/real_room.png', alt: 'Habitación privada Sersalud' },
   { src: '/assets/images/facility_surgery_new.png', alt: 'Habitación privada 2 Sersalud' },
   { src: '/assets/images/6.png', alt: 'Habitación privada 3 Sersalud' },
];

export const Facilities: React.FC = () => {
   const [currentSlide, setCurrentSlide] = useState(0);
   const [currentRoomSlide, setCurrentRoomSlide] = useState(0);

   const nextSlide = useCallback(() => {
      setCurrentSlide((prev) => (prev + 1) % quirofanoImages.length);
   }, []);

   const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + quirofanoImages.length) % quirofanoImages.length);
   };

   const nextRoomSlide = useCallback(() => {
      setCurrentRoomSlide((prev) => (prev + 1) % habitacionImages.length);
   }, []);

   const prevRoomSlide = () => {
      setCurrentRoomSlide((prev) => (prev - 1 + habitacionImages.length) % habitacionImages.length);
   };

   useEffect(() => {
      const timer = setInterval(nextSlide, 5000);
      return () => clearInterval(timer);
   }, [nextSlide]);

   useEffect(() => {
      const timer = setInterval(nextRoomSlide, 5000);
      return () => clearInterval(timer);
   }, [nextRoomSlide]);

   return (
      <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Header */}
            <div className="text-center mb-16 max-w-3xl mx-auto">
               <h2 className="text-4xl md:text-5xl font-bold text-medical-900 mb-6 tracking-tight">
                  Nuestras Instalaciones
               </h2>
               <p className="text-xl text-slate-500 leading-relaxed">
                  Un entorno diseñado meticulosamente para garantizar la seguridad clínica y el máximo confort para nuestros pacientes y sus familias.
               </p>
            </div>

            {/* Feature: Quirófanos — Carousel */}
            <div className="mb-24">
               <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[400px] md:h-[500px] group">
                  {/* Slides */}
                  {quirofanoImages.map((img, index) => (
                     <img
                        key={img.src}
                        src={img.src}
                        alt={img.alt}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                        referrerPolicy="no-referrer"
                     />
                  ))}

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-medical-900/90 via-medical-900/20 to-transparent"></div>

                  {/* Text content */}
                  <div className="absolute bottom-0 left-0 p-8 md:p-12">
                     <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-bold mb-4 border border-white/30">
                        <Zap size={16} className="mr-2" /> Tecnología de Vanguardia
                     </div>
                     <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">Quirófanos</h3>
                     <p className="text-slate-200 text-lg max-w-2xl">
                        Espacios estériles equipados con iluminación LED quirúrgica, torres de artroscopia de última generación y sistemas de monitoreo avanzado para procedimientos seguros.
                     </p>
                  </div>

                  {/* Prev / Next buttons */}
                  <button
                     onClick={prevSlide}
                     className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white rounded-full p-3 transition-all duration-200 border border-white/30 z-10"
                     aria-label="Foto anterior"
                  >
                     <ChevronLeft size={24} />
                  </button>
                  <button
                     onClick={nextSlide}
                     className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white rounded-full p-3 transition-all duration-200 border border-white/30 z-10"
                     aria-label="Foto siguiente"
                  >
                     <ChevronRight size={24} />
                  </button>

                  {/* Dot indicators */}
                  <div className="absolute bottom-6 right-8 flex gap-2 z-10">
                     {quirofanoImages.map((_, index) => (
                        <button
                           key={index}
                           onClick={() => setCurrentSlide(index)}
                           className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/70'}`}
                           aria-label={`Ir a imagen ${index + 1}`}
                        />
                     ))}
                  </div>
               </div>
            </div>

            {/* Grid: Habitaciones y Áreas Comunes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
               {/* Card 1: Habitación — Carousel */}
               <div className="bg-white rounded-3xl p-2 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300">
                  <div className="h-[300px] rounded-2xl overflow-hidden mb-6 relative">
                     {habitacionImages.map((img, index) => (
                        <img
                           key={img.src}
                           src={img.src}
                           alt={img.alt}
                           className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${index === currentRoomSlide ? 'opacity-100' : 'opacity-0'}`}
                           referrerPolicy="no-referrer"
                        />
                     ))}
                     {/* Prev / Next */}
                     <button
                        onClick={prevRoomSlide}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 z-10 transition-all duration-200"
                        aria-label="Habitación anterior"
                     >
                        <ChevronLeft size={18} />
                     </button>
                     <button
                        onClick={nextRoomSlide}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 z-10 transition-all duration-200"
                        aria-label="Habitación siguiente"
                     >
                        <ChevronRight size={18} />
                     </button>
                     {/* Dots */}
                     <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                        {habitacionImages.map((_, index) => (
                           <button
                              key={index}
                              onClick={() => setCurrentRoomSlide(index)}
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentRoomSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'}`}
                              aria-label={`Habitación ${index + 1}`}
                           />
                        ))}
                     </div>
                  </div>
                  <div className="px-6 pb-6">
                     <h3 className="text-2xl font-bold text-medical-900 mb-3">Habitaciones Privadas</h3>
                     <p className="text-slate-500 mb-4">
                        Diseñadas para la recuperación tranquila, cuentan con baño privado completo y aire acondicionado.
                     </p>
                     <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-lg flex items-center"><CheckCircle2 size={12} className="mr-1 text-medical-600" /> Baño accesible</span>
                        <span className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-lg flex items-center"><CheckCircle2 size={12} className="mr-1 text-medical-600" /> Sofá cama</span>
                     </div>
                  </div>
               </div>

               {/* Card 2: Recuperación */}
               <div className="bg-white rounded-3xl p-2 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300">
                  <div className="h-[300px] rounded-2xl overflow-hidden mb-6 relative">
                     <img
                        src="/assets/images/real_waiting.jpg"
                        alt="Sala de recuperación"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                     />
                     <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-xl text-xs font-bold text-medical-900 shadow-sm border border-slate-100">
                        Atención Post-operatoria
                     </div>
                  </div>
                  <div className="px-6 pb-6">
                     <h3 className="text-2xl font-bold text-medical-900 mb-3">Área de Recuperación</h3>
                     <p className="text-slate-500 mb-4">
                        Amplios cubículos individuales con cortinas de privacidad y monitores de signos vitales de grado hospitalario, conectados directamente a la central de enfermería.
                     </p>
                     <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-lg flex items-center"><CheckCircle2 size={12} className="mr-1 text-medical-600" /> Enfermería dedicada</span>
                        <span className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-lg flex items-center"><CheckCircle2 size={12} className="mr-1 text-medical-600" /> Privacidad</span>
                     </div>
                  </div>
               </div>
            </div>

            {/* Secondary Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="relative h-64 rounded-3xl overflow-hidden group shadow-lg">
                  {/* Imagen: Sillón café con cuadro */}
                  <img
                     src="/assets/images/facility_3.jpg"
                     alt="Sala de espera"
                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                     referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                     <h4 className="text-white text-xl font-bold">Salas de Espera Confortables</h4>
                  </div>
               </div>
               <div className="relative h-64 rounded-3xl overflow-hidden group shadow-lg">
                  {/* Imagen: Accesibilidad Total (Actualizada) */}
                  <img
                     src="/assets/images/building_exterior.png"
                     alt="Equipo de primer nivel"
                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                     referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                     <h4 className="text-white text-xl font-bold">Equipo de Primer Nivel</h4>
                  </div>
               </div>
               <div className="relative h-64 rounded-3xl overflow-hidden group shadow-lg">
                  {/* Imagen: Edificio / Ubicación Premium (Actualizada) */}
                  <img
                     src="/assets/images/real_hallway.png"
                     alt="Interamericas Zona 10"
                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                     referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                     <div>
                        <h4 className="text-white text-xl font-bold leading-tight">Ubicación Privilegiada</h4>
                        <p className="text-white/80 text-sm font-medium mt-0.5">Interamericas Zona 10</p>
                     </div>
                  </div>
               </div>
            </div>



         </div>
      </div>
   );
};