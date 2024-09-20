import React from 'react';

const products = [
  {
    img: 'img/productos/computadora1.jpg',
    name: 'Lenovo ThinkPad X1 Carbon',
    rating: 5.0,
    features: 'Intel i7, 16GB RAM, 512GB SSD',
    normalPrice: '$3.599.900',
    discountedPrice: '$2.879.200'
  },
  {
    img: 'img/productos/computadora2.jpg',
    name: 'HP Spectre x360',
    rating: 4.5,
    features: 'Intel i5, 8GB RAM, 256GB SSD',
    normalPrice: '$6.499.000',
    discountedPrice: '$3.199.000'
  },
  {
    img: 'img/productos/computadora3.jpg',
    name: 'Dell XPS 13',
    rating: 4.8,
    features: 'Intel i7, 16GB RAM, 512GB SSD',
    normalPrice: '$6.559.000',
    discountedPrice: '$5.903.100'
  },
  {
    img: 'img/productos/computadora4.jpg',
    name: 'Apple MacBook Air',
    rating: 4.9,
    features: 'Apple M1, 8GB RAM, 256GB SSD',
    normalPrice: '$3.399.000',
    discountedPrice: '$3.059.100'
  },
  {
    img: 'img/productos/computadora5.jpg',
    name: 'Asus ZenBook 14',
    rating: 4.6,
    features: 'AMD Ryzen 7, 16GB RAM, 512GB SSD',
    normalPrice: '$4.999.000',
    discountedPrice: '$3.999.200'
  },
  {
    img: 'img/productos/computadora6.jpg',
    name: 'Acer Swift 3',
    rating: 4.3,
    features: 'Intel i5, 8GB RAM, 512GB SSD',
    normalPrice: '$3.039.920',
    discountedPrice: '$2.431.920'
  },
  {
    img: 'img/productos/computadora7.jpg',
    name: 'Microsoft Surface Laptop 4',
    rating: 4.7,
    features: 'Intel i5, 8GB RAM, 256GB SSD',
    normalPrice: '$8.993.900',
    discountedPrice: '$8.094.510'
  },
  {
    img: 'img/productos/computadora8.jpg',
    name: 'Razer Blade 15',
    rating: 4.8,
    features: 'Intel i7, 16GB RAM, 1TB SSD',
    normalPrice: '$23.380.000',
    discountedPrice: '$11.690.000'
  },
  {
    img: 'img/productos/computadora9.jpg',
    name: 'HP Envy x360',
    rating: 4.5,
    features: 'AMD Ryzen 5, 8GB RAM, 512GB SSD',
    normalPrice: '$3.900.400',
    discountedPrice: '$3.705.380'
  },
  {
    img: 'img/productos/computadora10.jpg',
    name: 'LG Gram 17',
    rating: 4.7,
    features: 'Intel i7, 16GB RAM, 1TB SSD',
    normalPrice: '$7.140.000',
    discountedPrice: '$6.426.000'
  }
];

const ProductListPLP: React.FC = () => {
  return (
    <section className="product-list w-full">
      <div className="list-header flex justify-between items-center mb-4">
        <span>Mostrando {products.length} resultados de 35</span>
        <select className="border border-gray-300 rounded p-2">
          <option>Ordenar por: Relevancia</option>
          <option>Fecha de carga</option>
          <option>Precio menor a mayor</option>
          <option>Precio mayor a menor</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
        {products.map((product, index) => (
          <div key={index} className="product-item border border-gray-200 rounded p-4 mb-4 transition-shadow duration-300 hover:shadow-lg flex flex-col items-center text-center">
            <a href="./pdp.html">
              <img src={product.img} alt={product.name} className="max-h-48 max-w-full object-contain mb-4" />
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="rating flex items-center justify-center mb-2">
                <img src="img/star.svg" alt={`${product.rating} estrellas`} className="w-4 h-4 mr-1" /> {product.rating}
              </p>
              <p className="features mb-2">{product.features}</p>
              <p className="price mb-2">
                <span className="normal-price line-through text-gray-500 mr-2">{product.normalPrice}</span>
                <span className="discounted-price text-blue-500 font-bold">{product.discountedPrice}</span>
              </p>
              <button className="add-to-cart bg-yellow-500 text-white py-2 px-4 rounded-full transition-colors duration-300 hover:bg-blue-500">
                Añadir al Carrito
              </button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductListPLP;