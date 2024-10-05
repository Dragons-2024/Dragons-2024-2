
import React from 'react';
import ProductItem from './ProductItem';

type Product = {
  id: number;
  name: string;
  price: number; 
  image: string; 
  features: string; 
  rating: number;
  discountedPrice: string; 
};

type ProductGridProps = {
  products: Product[];
};

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <ProductItem
        key={product.id}
        img={product.image} 
        name={product.name}
        rating={product.rating}
        features={product.features} 
        normalPrice={`$${product.price}`} 
        discountedPrice={product.discountedPrice} 
        />
      ))}
    </div>
  );
};

export default ProductGrid;
