import React from 'react';
import Footer from '../components/Footer'; // Importación corregida
import Header from '../components/Header'; // Asegúrate de que este componente exista

export const Main: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header /> {/* Uso del componente Header */}
      <main className="flex-grow text-2xl bg-[#F5F5F5] text-[#555555]">
        {children}
      </main>
      <Footer /> {/* Uso del componente Footer */}
    </div>
  );
};

export default Main; // Asegúrate de exportar el componente