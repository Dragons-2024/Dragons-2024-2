import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface FilterOption {
  label: string;
  count: number;
}

interface FilterCategory {
  name: string;
  options: FilterOption[];
}

const FilterBox: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [filters, setFilters] = useState<FilterCategory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const response = await fetch(`https://dragons-2024-2-api.onrender.com/Filtro${category}`); // Adjust the URL as needed
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: FilterCategory[] = await response.json();
        setFilters(data);
      } catch (err) {
        
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred'); // Handle unexpected error types
        }
      } finally {
        setLoading(false);
      }
    };

    fetchFilters();
  }, [category]);
  if (loading) {
    return <div>Loading filters...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div
      className="font-poppins filter-box border border-gray-200 rounded p-4 mb-4 transition-shadow duration-300 hover:shadow-lg bg-white"
      style={{ boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)' }}
    >
      <h2 className="text-base md:text-lg font-semibold mb-4">Filtrar por</h2>
      {filters.map((filter) => (
        <div className="mb-4" key={filter.name}>
          <h3 className="text-sm md:text-base font-semibold mb-2">{filter.name}</h3>
          {filter.options.map((option) => (
            <label key={option.label} className="block text-xs md:text-sm">
              <input type="checkbox" className="mr-2" /> {option.label} ({option.count})
            </label>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FilterBox;
