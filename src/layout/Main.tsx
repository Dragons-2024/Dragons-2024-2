import React from 'react';
<<<<<<< HEAD
import Footer from '../components/Footer'; // Importación corregida
import Header from '../components/Header'; // Asegúrate de que este componente exista
=======
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import FilterBox from "../components/FilterBox";
>>>>>>> HU2014-Plp-Filters

export const Main: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
<<<<<<< HEAD
    <div className="flex flex-col min-h-screen">
      <Header /> {/* Uso del componente Header */}
      <main className="flex-grow text-2xl bg-[#F5F5F5] text-[#555555]">
        {children}
      </main>
      <Footer /> {/* Uso del componente Footer */}
    </div>
=======
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow text-2xl bg-[#F5F5F5] text-[#555555] flex">
          <FilterBox />
          <div className="flex-grow">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </>
>>>>>>> HU2014-Plp-Filters
  );
};

export default Main; // Asegúrate de exportar el componente