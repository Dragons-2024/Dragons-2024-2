
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

export default FeaturedProductsList;
