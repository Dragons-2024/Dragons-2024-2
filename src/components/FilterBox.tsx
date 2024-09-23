import React from 'react';

const FilterBox: React.FC = () => {
  return (
    <div
      className="filter-box border border-gray-200 rounded p-4 mb-4 transition-shadow duration-300 hover:shadow-lg bg-white"
      style={{ boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)' }}
    >
      <h2 className="text-base md:text-lg font-semibold mb-4">Filtrar por</h2> {/* Cambiado de text-lg a text-base en móviles */}
      <div className="mb-4">
        <h3 className="text-sm md:text-base font-semibold mb-2">Marca</h3> {/* Cambiado de text-lg a text-sm en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> Lenovo (8)</label> {/* Añadido text-xs en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> HP (13)</label> {/* Añadido text-xs en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> Dell (9)</label> {/* Añadido text-xs en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> Apple (5)</label> {/* Añadido text-xs en móviles */}
      </div>
      <div className="mb-4">
        <h3 className="text-sm md:text-base font-semibold mb-2">Procesador</h3> {/* Cambiado de text-lg a text-sm en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> Intel i5 (15)</label> {/* Añadido text-xs en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> Intel i7 (10)</label> {/* Añadido text-xs en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> AMD Ryzen 5 (7)</label> {/* Añadido text-xs en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> AMD Ryzen 7 (5)</label> {/* Añadido text-xs en móviles */}
      </div>
      <div className="mb-4">
        <h3 className="text-sm md:text-base font-semibold mb-2">Memoria RAM</h3> {/* Cambiado de text-lg a text-sm en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> 8 GB (15)</label> {/* Añadido text-xs en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> 16 GB (10)</label> {/* Añadido text-xs en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> 32 GB (9)</label> {/* Añadido text-xs en móviles */}
      </div>
      <div className="mb-4">
        <h3 className="text-sm md:text-base font-semibold mb-2">Disco</h3> {/* Cambiado de text-lg a text-sm en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> 256 GB SSD (15)</label> {/* Añadido text-xs en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> 512 GB SSD (11)</label> {/* Añadido text-xs en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> 1 TB HDD (9)</label> {/* Añadido text-xs en móviles */}
      </div>
      <div className="mb-4">
        <h3 className="text-sm md:text-base font-semibold mb-2">Precio</h3> {/* Cambiado de text-lg a text-sm en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> $1.500.000 - $3.500.000 (9)</label> {/* Añadido text-xs en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> $3.500.000 - $5.500.000 (15)</label> {/* Añadido text-xs en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> $5.500.000 - $7.500.000 (6)</label> {/* Añadido text-xs en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> $7.500.000 - $11.500.000 (5)</label> {/* Añadido text-xs en móviles */}
      </div>
    </div>
  );
};

export default FilterBox;