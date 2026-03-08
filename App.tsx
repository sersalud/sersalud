import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Hospital } from './pages/Hospital';
import { Orthopedics } from './pages/Orthopedics';
import { Services } from './pages/Services';
import { Facilities } from './pages/Facilities';
import { Contact } from './pages/Contact';
import { Admission } from './pages/Admission';
import { Legal } from './pages/Legal';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="font-sans text-slate-600 antialiased selection:bg-medical-200 selection:text-medical-900">
        <ScrollToTop />
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hospital" element={<Hospital />} />
            <Route path="/ortopedia" element={<Orthopedics />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/instalaciones" element={<Facilities />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/admision" element={<Admission />} />
            <Route path="/legal" element={<Legal />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;