import React from 'react';
import ProductItem from './ProductItem';

const products = [
  {
    img: 'img/productos/computadora1.jpg',
    name: 'Lenovo ThinkPad X1 Carbon',
    rating: 5.0,
    features: 'Intel i7, 16GB RAM, 512GB SSD',
    normalPrice: '$3.599.900',
    discountedPrice: '$2.879.200'
  },
  // Agrega más productos aquí...
];

const ProductListPLP: React.FC = () => {
  return (
    <section className="w-full">
      <div className="flex justify-between items-center mb-4">
        <span>Mostrando {products.length} resultados de 35</span>
        <select className="border border-gray-300 rounded p-2">
          <option>Ordenar por: Relevancia</option>
          <option>Fecha de carga</option>
          <option>Precio menor a mayor</option>
          <option>Precio mayor a menor</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
        {products.map((product, index) => (
          <ProductItem
            key={index}
            img={product.img}
            name={product.name}
            rating={product.rating}
            features={product.features}
            normalPrice={product.normalPrice}
            discountedPrice={product.discountedPrice}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductListPLP;
