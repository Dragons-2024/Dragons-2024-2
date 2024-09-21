import React from 'react';

interface Filter {
  id: string;
  label: string;
  options: string[];
}

interface FilterBoxProps {
  filters: Filter[];
}

const FilterBox: React.FC<FilterBoxProps> = ({ filters }) => {
  return (
    <aside className="filter-box w-full md:w-1/4 p-4 bg-white border border-gray-200 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Filtros</h2>
      {filters.map(filter => (
        <div key={filter.id} className="filter-group mb-4">
          <h3 className="text-md font-semibold mb-2">{filter.label}</h3>
          <ul className="list-none p-0">
            {filter.options.map(option => (
              <li key={option} className="mb-2">
                <input type="checkbox" id={`${filter.id}-${option}`} className="mr-2" />
                <label htmlFor={`${filter.id}-${option}`}>{option}</label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button className="apply-filters bg-blue-500 text-white py-2 px-4 rounded-full transition-colors duration-300 hover:bg-blue-700">
        Aplicar Filtros
      </button>
    </aside>
  );
};

export default FilterBox;