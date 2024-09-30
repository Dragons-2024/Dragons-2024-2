import React from 'react';

const FilterBoxImpresion: React.FC = () => {
  return (
    <div
      className="font-poppins filter-box border border-gray-200 rounded p-4 mb-4 transition-shadow duration-300 hover:shadow-lg bg-white"
      style={{ boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)' }}
    >
      <h2 className="text-base md:text-lg font-semibold mb-4">Filtrar por</h2> {/* Cambiado de text-lg a text-base en móviles */}
      <div className="mb-4">
        <h3 className="text-sm md:text-base font-semibold mb-2">Marca</h3> {/* Cambiado de text-lg a text-sm en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> HP (8)</label> {/* Añadido text-xs en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> Canon (13)</label> {/* Añadido text-xs en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> Epson (9)</label> {/* Añadido text-xs en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> Brother (5)</label> {/* Añadido text-xs en móviles */}
      </div>
      <div className="mb-4">
        <h3 className="text-sm md:text-base font-semibold mb-2">Tipo</h3> {/* Cambiado de text-lg a text-sm en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> Impresora Láser (15)</label> {/* Añadido text-xs en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> Impresora de Inyección (10)</label> {/* Añadido text-xs en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> Impresora Multifuncional (7)</label> {/* Añadido text-xs en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> Impresora Fotográfica (5)</label> {/* Añadido text-xs en móviles */}
      </div>
      <div className="mb-4">
        <h3 className="text-sm md:text-base font-semibold mb-2">Conectividad</h3> {/* Cambiado de text-lg a text-sm en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> Wi-Fi (15)</label> {/* Añadido text-xs en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> USB (10)</label> {/* Añadido text-xs en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> Ethernet (9)</label> {/* Añadido text-xs en móviles */}
      </div>
      <div className="mb-4">
        <h3 className="text-sm md:text-base font-semibold mb-2">Precio</h3> {/* Cambiado de text-lg a text-sm en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> $200.000 - $500.000 (9)</label> {/* Añadido text-xs en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> $500.000 - $1.000.000 (15)</label> {/* Añadido text-xs en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> $1.000.000 - $2.000.000 (6)</label> {/* Añadido text-xs en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> $2.000.000 - $3.000.000 (5)</label> {/* Añadido text-xs en móviles */}
      </div>
    </div>
  );
};

export default FilterBoxImpresion;