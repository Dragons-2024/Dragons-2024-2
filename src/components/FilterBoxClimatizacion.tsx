import React from 'react';

const FilterBoxClimatizacion: React.FC = () => {
  return (
    <div
      className="font-poppins filter-box border border-gray-200 rounded p-4 mb-4 transition-shadow duration-300 hover:shadow-lg bg-white"
      style={{ boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)' }}
    >
      <h2 className="text-base md:text-lg font-semibold mb-4">Filtrar por</h2> {/* Cambiado de text-lg a text-base en móviles */}
      <div className="mb-4">
        <h3 className="text-sm md:text-base font-semibold mb-2">Marca</h3> {/* Cambiado de text-lg a text-sm en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> LG (8)</label> {/* Añadido text-xs en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> Samsung (13)</label> {/* Añadido text-xs en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> Daikin (9)</label> {/* Añadido text-xs en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> Panasonic (5)</label> {/* Añadido text-xs en móviles */}
      </div>
      <div className="mb-4">
        <h3 className="text-sm md:text-base font-semibold mb-2">Tipo</h3> {/* Cambiado de text-lg a text-sm en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> Aire Acondicionado (15)</label> {/* Añadido text-xs en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> Ventiladores (10)</label> {/* Añadido text-xs en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> Calefactores (7)</label> {/* Añadido text-xs en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> Humidificadores (5)</label> {/* Añadido text-xs en móviles */}
      </div>
      <div className="mb-4">
        <h3 className="text-sm md:text-base font-semibold mb-2">Capacidad</h3> {/* Cambiado de text-lg a text-sm en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> 1 Tonelada (15)</label> {/* Añadido text-xs en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> 1.5 Toneladas (10)</label> {/* Añadido text-xs en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> 2 Toneladas (9)</label> {/* Añadido text-xs en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> 2.5 Toneladas (5)</label> {/* Añadido text-xs en móviles */}
      </div>
      <div className="mb-4">
        <h3 className="text-sm md:text-base font-semibold mb-2">Precio</h3> {/* Cambiado de text-lg a text-sm en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> $500.000 - $1.000.000 (9)</label> {/* Añadido text-xs en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> $1.000.000 - $2.000.000 (15)</label> {/* Añadido text-xs en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> $2.000.000 - $3.000.000 (6)</label> {/* Añadido text-xs en móviles */}
        <label className="block text-xs md:text-sm"><input type="checkbox" className="mr-2" /> $3.000.000 - $5.000.000 (5)</label> {/* Añadido text-xs en móviles */}
      </div>
    </div>
  );
};

export default FilterBoxClimatizacion;