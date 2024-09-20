
import React from 'react';
import FeaturedProduct from './FeaturedProducts';

interface FeaturedProductsListProps {
  products: {
    id: number;
    name: string;
    normalPrice: number;
    discountPrice: number;
    discount: string;
    image: string;
    slug: string;
  }[];
}

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

