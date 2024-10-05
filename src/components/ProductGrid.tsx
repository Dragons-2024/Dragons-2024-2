
import React from 'react';
import ProductItem from './ProductItem';
import { CategoryProducts } from '../services/subcategories';

// type Product = {
//   id: number;
//   name: string;
//   price: number; 
//   image: string; 
//   features: string; 
//   rating: number;
//   discountedPrice: string; 
// };

// type ProductGridProps = {
//   products: Product[];
// };

const ProductGrid: React.FC<CategoryProducts[]> = (products) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          img={product.img}
          name={product.name}
          rating={product.rating}
          features={product.features}
          normalPrice={product.normalPrice}
          discountedPrice={product.discountedPrice} id={product.id} slug={product.slug} category={product.category}        />
      ))}
    </div>
  );
};

export default ProductGrid;
