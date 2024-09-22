import React from 'react';

const FilterBox: React.FC = () => {
  return (
    <div
      className="filter-box border border-gray-200 rounded p-4 mb-4 transition-shadow duration-300 hover:shadow-lg bg-white"
      style={{ boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)' }}
    >
      <h2 className="text-xl font-semibold mb-4">Filtrar por</h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Marca</h3>
        <label className="block"><input type="checkbox" className="mr-2" /> Lenovo (8)</label>
        <label className="block"><input type="checkbox" className="mr-2" /> HP (13)</label>
        <label className="block"><input type="checkbox" className="mr-2" /> Dell (9)</label>
        <label className="block"><input type="checkbox" className="mr-2" /> Apple (5)</label>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Procesador</h3>
        <label className="block"><input type="checkbox" className="mr-2" /> Intel i5 (15)</label>
        <label className="block"><input type="checkbox" className="mr-2" /> Intel i7 (9)</label>
        <label className="block"><input type="checkbox" className="mr-2" /> AMD Ryzen 5 (7)</label>
        <label className="block"><input type="checkbox" className="mr-2" /> Apple M1 (5)</label>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">RAM</h3>
        <label className="block"><input type="checkbox" className="mr-2" /> 8 GB (11)</label>
        <label className="block"><input type="checkbox" className="mr-2" /> 16 GB (15)</label>
        <label className="block"><input type="checkbox" className="mr-2" /> 32 GB (9)</label>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Disco</h3>
        <label className="block"><input type="checkbox" className="mr-2" /> 256 GB SSD (15)</label>
        <label className="block"><input type="checkbox" className="mr-2" /> 512 GB SSD (11)</label>
        <label className="block"><input type="checkbox" className="mr-2" /> 1 TB HDD (9)</label>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Precio</h3>
        <label className="block"><input type="checkbox" className="mr-2" /> $1.500.000 - $3.500.000 (9)</label>
        <label className="block"><input type="checkbox" className="mr-2" /> $3.500.000 - $5.500.000 (15)</label>
        <label className="block"><input type="checkbox" className="mr-2" /> $5.500.000 - $7.500.000 (6)</label>
        <label className="block"><input type="checkbox" className="mr-2" /> $7.500.000 - $11.500.000 (5)</label>
      </div>
    </div>
  );
};

export default FilterBox;