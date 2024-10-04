// src/components/ProductGrid.tsx
import React from 'react';
import ProductItem from './ProductItem';

type Product = {
  id: number;
  name: string;
  price: number; // Este será el precio normal
  image: string; // Este será la imagen
  features: string; // Lo mapearemos a features
  rating: number;
  discountedPrice: string; // Precio con descuento
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
