import React, { useEffect } from 'react';

export const Admission: React.FC = () => {
  useEffect(() => {
    window.location.href = '/form/index.html';
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900">
      <div className="text-white text-center">
        <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-sm font-medium">Cargando formulario de admisión...</p>
      </div>
    </div>
  );
};