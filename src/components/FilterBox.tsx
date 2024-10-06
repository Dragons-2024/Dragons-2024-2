import { useParams } from 'react-router-dom';
import { useFilterProduct } from '../hooks/useFilterProduct';
import { Loading } from './Loading';

const FilterBox: React.FC = () => {
  const { category } = useParams<{ category: string }>();

  
  const { data: filters, isLoading, error } = useFilterProduct(category || '');

  if (!category) {
    return <div>Error: Category is undefined</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div
      className="font-poppins filter-box border border-gray-200 rounded p-4 mb-4 transition-shadow duration-300 hover:shadow-lg bg-white"
      style={{ boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)' }}
    >
      <h2 className="text-base md:text-lg font-semibold mb-4">Filtrar por</h2>
      {filters ? (
        filters.map((filter) => (
          <div className="mb-4" key={filter.name}>
            <h3 className="text-sm md:text-base font-semibold mb-2">{filter.name}</h3>
            {filter.options.map((option) => (
              <label key={option.label} className="block text-xs md:text-sm">
                <input type="checkbox" className="mr-2" /> {option.label} ({option.count})
              </label>
            ))}
          </div>
        ))
      ) : (
        <div>No filters available</div>
      )}
    </div>
  );
};

export default FilterBox;
