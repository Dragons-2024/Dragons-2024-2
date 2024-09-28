import React from 'react';
import FeaturedProduct from './FeaturedProducts';
import { FeaturedProductProps} from '../core/interfaces/FeaturedProductsInter';
import { useFeaturedProducts } from '../hooks/useFeaturedProducts'; 
import ErrorMessage from './ErrorMessage'; 

const FeaturedProductsList: React.FC = () => {
  const { data: products = [], error, isLoading } = useFeaturedProducts();

  if (isLoading) {
    return (
      <div className="font-poppins flex items-center justify-center h-full">
        <div className="text-4xl font-bold text-gray-600 animate-bounce">Cargando...</div>
      </div>
    );
  }

  if (error) {
    return (
      <ErrorMessage message={`Error al obtener los productos: ${error.message}`} /> // Usa el componente de error
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 p-4">
      {products.map((product: FeaturedProductProps) => (
        <FeaturedProduct key={product.id} {...product} />
      ))}
    </div>
  );
};

export default FeaturedProductsList;
