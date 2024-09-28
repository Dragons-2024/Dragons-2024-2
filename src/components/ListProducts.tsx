
 {/* import React from 'react';
import FeaturedProduct from './FeaturedProducts';
import { FeaturedProductsListProps } from '../core/interfaces/FeaturedProductsInter';

const FeaturedProductsList: React.FC<FeaturedProductsListProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 p-4">
      {products.map((product) => (
        <FeaturedProduct key={product.id} {...product} />
      ))}
    </div>
  );
};

export default FeaturedProductsList;*/}

 {/*
import React, { useEffect, useState } from 'react';
import { axiosApi } from '../api/axios'; 
import FeaturedProduct from './FeaturedProducts';
import { FeaturedProductsListProps } from '../core/interfaces/FeaturedProductsInter';


const FeaturedProductsList: React.FC = () => {
  const [products, setProducts] = useState<FeaturedProductsListProps['products']>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosApi.get('https://dragons-2024-2-api.onrender.com/FeaturedProducts');
        setProducts(response.data); 
      } catch (error) {
        console.error('Error fetching the products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 p-4">
      {products.map(product => (
        <FeaturedProduct key={product.id} {...product} />
      ))}
    </div>
  );
};

export default FeaturedProductsList;*/}

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { axiosApi } from '../api/axios'; 
import FeaturedProduct from './FeaturedProducts';
import { FeaturedProductProps, FeaturedProductsListProps } from '../core/interfaces/FeaturedProductsInter';

// Función para obtener los productos destacados
const fetchFeaturedProducts = async () => {
  const response = await axiosApi.get('https://dragons-2024-2-api.onrender.com/FeaturedProducts');
  return response.data; // Asegúrate de que esto devuelve un arreglo de productos
};

const FeaturedProductsList: React.FC = () => {
  const { data: products = [], error, isLoading } = useQuery<FeaturedProductsListProps['products'], Error>(
    {
      queryKey: ['featuredProducts'], // Usamos un objeto con 'queryKey'
      queryFn: fetchFeaturedProducts, // Función para obtener los productos
    }
  );

  // Manejo de estados de carga y error
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching the products: {error.message}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 p-4">
      {products.map((product: FeaturedProductProps) => (
        <FeaturedProduct key={product.id} {...product} />
      ))}
    </div>
  );
};

export default FeaturedProductsList;
