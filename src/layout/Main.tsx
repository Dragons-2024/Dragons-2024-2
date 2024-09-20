// src/layout/Main.tsx
import React from 'react';
import Footer from '../components/Footer'; // Importación corregida

const Main = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Header content</h1>
      </header>
      <main>{children}</main>
      <Footer /> {/* Uso del componente Footer */}
    </div>
  );
};

export default Main;