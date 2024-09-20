
import React from 'react';
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

export default FeaturedProductsList;

