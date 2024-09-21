import React, { useState } from 'react';
import ProductItem from './ProductItem';

const products = [
  {
    img: 'img/productos/computadora1.jpg',
    name: 'Lenovo ThinkPad X1 Carbon',
    rating: 5.0,
    features: 'Intel i7, 16GB RAM, 512GB SSD',
    normalPrice: '$3.599.900',
    discountedPrice: '$2.879.200',
    category: 'Computadores'
  },
  {
    img: 'img/productos/computadora2.jpg',
    name: 'HP Spectre x360',
    rating: 4.5,
    features: 'Intel i5, 8GB RAM, 256GB SSD',
    normalPrice: '$6.499.000',
    discountedPrice: '$3.199.000',
    category: 'Computadores'
  },
  {
    img: 'img/productos/computadora3.jpg',
    name: 'Dell XPS 13',
    rating: 4.8,
    features: 'Intel i7, 16GB RAM, 512GB SSD',
    normalPrice: '$6.559.000',
    discountedPrice: '$5.903.100',
    category: 'Computadores'
  },
  {
    img: 'img/productos/computadora4.jpg',
    name: 'Apple MacBook Air',
    rating: 4.9,
    features: 'Apple M1, 8GB RAM, 256GB SSD',
    normalPrice: '$3.399.000',
    discountedPrice: '$3.059.100',
    category: 'Computadores'
  },
  {
    img: 'img/productos/computadora5.jpg',
    name: 'Asus ZenBook 14',
    rating: 4.6,
    features: 'AMD Ryzen 7, 16GB RAM, 512GB SSD',
    normalPrice: '$4.999.000',
    discountedPrice: '$3.999.200',
    category: 'Computadores'
  },
  {
    img: 'img/productos/computadora6.jpg',
    name: 'Acer Swift 3',
    rating: 4.3,
    features: 'Intel i5, 8GB RAM, 512GB SSD',
    normalPrice: '$3.039.920',
    discountedPrice: '$2.431.920',
    category: 'Computadores'
  },
  {
    img: 'img/productos/computadora7.jpg',
    name: 'Microsoft Surface Laptop 4',
    rating: 4.7,
    features: 'Intel i5, 8GB RAM, 256GB SSD',
    normalPrice: '$8.993.900',
    discountedPrice: '$8.094.510',
    category: 'Computadores'
  },
  {
    img: 'img/productos/computadora8.jpg',
    name: 'Razer Blade 15',
    rating: 4.8,
    features: 'Intel i7, 16GB RAM, 1TB SSD',
    normalPrice: '$23.380.000',
    discountedPrice: '$11.690.000',
    category: 'Computadores'
  },
  {
    img: 'img/productos/computadora9.jpg',
    name: 'HP Envy x360',
    rating: 4.5,
    features: 'AMD Ryzen 5, 8GB RAM, 512GB SSD',
    normalPrice: '$3.900.400',
    discountedPrice: '$3.705.380',
    category: 'Computadores'
  },
  {
    img: 'img/productos/computadora10.jpg',
    name: 'LG Gram 17',
    rating: 4.7,
    features: 'Intel i7, 16GB RAM, 1TB SSD',
    normalPrice: '$7.140.000',
    discountedPrice: '$6.426.000',
    category: 'Computadores'
  }
];

const ProductListPLP: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Computadores');

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = products.filter(product => product.category === selectedCategory);

  return (
    <section className="product-list w-full">
      <div className="list-header flex justify-between items-center mb-4">
        <span>Mostrando {filteredProducts.length} resultados de {products.length}</span>
        <select className="border border-gray-300 rounded p-2" onChange={handleCategoryChange}>
          <option value="Computadores">Computadores</option>
          <option value="Televisores">Televisores</option>
          <option value="Audio">Audio</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-0">
        {filteredProducts.map((product, index) => (
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