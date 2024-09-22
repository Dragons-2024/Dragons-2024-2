import React, { useState } from 'react';
<<<<<<< HEAD
import ProductGrid from './ProductGrid';
import computadora1 from '../assets/computadores/computadora1.jpg';
import computadora2 from '../assets/computadores/computadora2.jpg';
import computadora3 from '../assets/computadores/computadora3.jpg';
import computadora4 from '../assets/computadores/computadora4.jpg';
import computadora5 from '../assets/computadores/computadora5.jpg';
import computadora6 from '../assets/computadores/computadora6.jpg';
import computadora7 from '../assets/computadores/computadora7.jpg';
import computadora8 from '../assets/computadores/computadora8.jpg';
import computadora9 from '../assets/computadores/computadora9.jpg';
import computadora10 from '../assets/computadores/computadora10.jpg';
import ProductItem from './ProductItem';

const products = [
  {
    img: computadora1,
    name: 'Lenovo ThinkPad X1 Carbon',
    rating: 5.0,
    features: 'Intel i7, 16GB RAM, 512GB SSD',
    normalPrice: '$3.599.900',
    discountedPrice: '$2.879.200'
  },
  {
    img: computadora2,
    name: 'HP Spectre x360',
    rating: 4.5,
    features: 'Intel i5, 8GB RAM, 256GB SSD',
    normalPrice: '$6.499.000',
    discountedPrice: '$3.199.000'
  },
  {
    img: computadora3,
    name: 'Dell XPS 13',
    rating: 4.0,
    features: 'Intel i7, 16GB RAM, 1TB SSD',
    normalPrice: '$7.999.000',
    discountedPrice: '$6.499.000'
  },
  // Agrega más productos aquí
  {
    img: computadora4,
    name: 'Apple MacBook Air',
    rating: 4.9,
    features: 'Apple M1, 8GB RAM, 256GB SSD',
    normalPrice: '$399.000',
    discountedPrice: '$3.059.100',
    category: 'Computadores'
  },
  {
    img: computadora5,
    name: 'Asus ZenBook 14',
    rating: 4.6,
    features: 'AMD Ryzen 7, 16GB RAM, 512GB SSD',
    normalPrice: '$4.999.000',
    discountedPrice: '$3.999.200',
    category: 'Computadores'
  },
  {
    img: computadora6,
    name: 'Acer Swift 3',
    rating: 4.3,
    features: 'Intel i5, 8GB RAM, 512GB SSD',
    normalPrice: '$3.039.920',
    discountedPrice: '$2.431.920',
    category: 'Computadores'
  },
  {
    img: computadora7,
    name: 'Microsoft Surface Laptop 4',
    rating: 4.7,
    features: 'Intel i5, 8GB RAM, 256GB SSD',
    normalPrice: '$8.993.900',
    discountedPrice: '$8.094.510',
    category: 'Computadores'
  },
  {
    img: computadora8,
    name: 'Razer Blade 15',
    rating: 4.8,
    features: 'Intel i7, 16GB RAM, 1TB SSD',
    normalPrice: '$23.380.000',
    discountedPrice: '$11.690.000',
    category: 'Computadores'
  },
  {
    img: computadora9,
    name: 'HP Envy x360',
    rating: 4.5,
    features: 'AMD Ryzen 5, 8GB RAM, 512GB SSD',
    normalPrice: '$3.900.400',
    discountedPrice: '$3.705.380',
    category: 'Computadores'
  },
  {
    img: computadora10,
    name: 'LG Gram 17',
    rating: 4.7,
    features: 'Intel i7, 16GB RAM, 1TB SSD',
    normalPrice: '$7.140.000',
    discountedPrice: '$6.426.000',
    category: 'Computadores'
  }
];

const ProductListPLP = () => {
  const [sortCriteria, setSortCriteria] = useState('rating');

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortCriteria(event.target.value);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortCriteria === 'rating') {
      return b.rating - a.rating;
    } else if (sortCriteria === 'priceAsc') {
      return parseFloat(a.normalPrice.replace(/[$,.]/g, '')) - parseFloat(b.normalPrice.replace(/[$,.]/g, ''));
    } else if (sortCriteria === 'priceDesc') {
      return parseFloat(b.normalPrice.replace(/[$,.]/g, '')) - parseFloat(a.normalPrice.replace(/[$,.]/g, ''));
    } else if (sortCriteria === 'discount') {
      const discountA = parseFloat(a.normalPrice.replace(/[$,.]/g, '')) - parseFloat(a.discountedPrice.replace(/[$,.]/g, ''));
      const discountB = parseFloat(b.normalPrice.replace(/[$,.]/g, '')) - parseFloat(b.discountedPrice.replace(/[$,.]/g, ''));
      return discountB - discountA;
    }
    return 0;
  });

  return (
    <div className="flex flex-col md:flex-row">
      <aside className="w-full md:w-1 xl:w-1 p-">
        {/* Aquí puedes agregar contenido adicional para el aside */}
      </aside>
      <section className="w-full md:w-3/4 xl:w-4/5 p- md:ml">
      <div className="list-header flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
  <span>Mostrando {sortedProducts.length} resultados de 35</span>
  <div className="flex space-x-4 mt-2 md:mt-0">
    <select className="border border-gray-300 rounded p-2" onChange={handleSortChange}>
      <option value="default">Ordenar por Defecto</option>
      <option value="rating">Ordenar por Calificación</option>
      <option value="priceAsc">Ordenar por Precio: Menor a Mayor</option>
      <option value="priceDesc">Ordenar por Precio: Mayor a Menor</option>
      <option value="discount">Ordenar por Mayor Descuento</option>
    </select>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {sortedProducts.map((product, index) => (
=======
import ProductItem from './ProductItem';
import FilterBox from './FilterBox';

const products = [
  // Array de productos
];

const filters = [
  {
    id: 'category',
    label: 'Categorías',
    options: ['Computadores', 'Televisores', 'Audio']
  },
  {
    id: 'brand',
    label: 'Marca',
    options: ['Lenovo', 'HP', 'Dell']
  },
  {
    id: 'price-range',
    label: 'Rango de Precios',
    options: ['$3.500.000 - $5.500.000', '$5.500.000 - $7.500.000', '$7.500.000 - $11.500.000']
  }
];

const ProductListPLP: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Computadores');

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = products.filter(product => product.category === selectedCategory);

  return (
    <div className="flex flex-col md:flex-row">
      <FilterBox filters={filters} />
      <section className="product-list w-full md:w-3/4 p-4">
        <div className="list-header flex justify-between items-center mb-4">
          <span>Mostrando {filteredProducts.length} resultados de {products.length}</span>
          <select className="border border-gray-300 rounded p-2" onChange={handleCategoryChange}>
            <option value="Computadores">Computadores</option>
            <option value="Televisores">Televisores</option>
            <option value="Audio">Audio</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product, index) => (
>>>>>>> HU2014-Plp-Filters
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
    </div>
  );
};

export default ProductListPLP;