import React, { useState } from 'react';
import { Main } from '../layout/Main';
import ProductItem from './ProductItem';
 // Importa el componente FilterBox
import promo4 from '../assets/Promotional_Images/promo4.png'; // Importa la imagen promo4
import { CategoryLink, itemprops, plpBreadCrumb } from '../utils/BreadcrumbData';
import { Breadcrumb } from './Breadcrumb';
import { useLocation } from 'react-router-dom';
import FilterBoxCelulares from './FilterBoxCelulares';

const placeholderImage = 'https://via.placeholder.com/150';

const products = [
  {
    img: placeholderImage,
    name: 'iPhone 13 Pro',
    rating: 5.0,
    features: '128GB, 6.1 pulgadas, Triple cámara',
    normalPrice: '$4.599.900',
    discountedPrice: '$4.079.200'
  },
  {
    img: placeholderImage,
    name: 'Samsung Galaxy S21',
    rating: 4.5,
    features: '256GB, 6.2 pulgadas, Triple cámara',
    normalPrice: '$3.999.000',
    discountedPrice: '$3.499.000'
  },
  {
    img: placeholderImage,
    name: 'Google Pixel 6',
    rating: 4.0,
    features: '128GB, 6.4 pulgadas, Doble cámara',
    normalPrice: '$2.999.000',
    discountedPrice: '$2.499.000'
  },
  // Agrega más productos aquí
  {
    img: placeholderImage,
    name: 'OnePlus 9 Pro',
    rating: 4.9,
    features: '256GB, 6.7 pulgadas, Cuádruple cámara',
    normalPrice: '$3.999.000',
    discountedPrice: '$3.599.100',
    category: 'Celulares'
  },
  {
    img: placeholderImage,
    name: 'Xiaomi Mi 11',
    rating: 4.6,
    features: '128GB, 6.81 pulgadas, Triple cámara',
    normalPrice: '$2.999.000',
    discountedPrice: '$2.799.200',
    category: 'Celulares'
  },
  {
    img: placeholderImage,
    name: 'Sony Xperia 1 III',
    rating: 4.3,
    features: '256GB, 6.5 pulgadas, Cuádruple cámara',
    normalPrice: '$3.499.920',
    discountedPrice: '$3.231.920',
    category: 'Celulares'
  },
  {
    img: placeholderImage,
    name: 'Huawei P40 Pro',
    rating: 4.7,
    features: '256GB, 6.58 pulgadas, Cuádruple cámara',
    normalPrice: '$3.993.900',
    discountedPrice: '$3.794.510',
    category: 'Celulares'
  },
  {
    img: placeholderImage,
    name: 'Oppo Find X3 Pro',
    rating: 4.8,
    features: '256GB, 6.7 pulgadas, Cuádruple cámara',
    normalPrice: '$4.380.000',
    discountedPrice: '$3.990.000',
    category: 'Celulares'
  },
  {
    img: placeholderImage,
    name: 'Motorola Edge Plus',
    rating: 4.5,
    features: '256GB, 6.7 pulgadas, Triple cámara',
    normalPrice: '$3.900.400',
    discountedPrice: '$3.705.380',
    category: 'Celulares'
  },
  {
    img: placeholderImage,
    name: 'Nokia 8.3 5G',
    rating: 4.7,
    features: '128GB, 6.81 pulgadas, Cuádruple cámara',
    normalPrice: '$2.140.000',
    discountedPrice: '$1.926.000',
    category: 'Celulares'
  }
];

export const PLPCelulares = () => {
  const [sortCriteria, setSortCriteria] = useState('rating');
  const location = useLocation();
  const { name, link }: itemprops = location.state;
  CategoryLink({ name, link: "#" });
  let arraylinks = plpBreadCrumb({ name, link });

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
    <Main>
      <Breadcrumb blinks={arraylinks} />
      <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen">
        <aside className="w-full md:w-1/4 p-4 bg-gray-100 rounded-lg mb-4">
          <FilterBoxCelulares />
        </aside>
        <section className="w-full md:w-3/4 p-4">
          <div className="list-header flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <span className="text-sm md:text-base">Mostrando {sortedProducts.length} resultados de 35</span>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <select className="border border-gray-300 rounded p-2 text-sm md:text-base" onChange={handleSortChange}>
                <option value="default">Ordenar por Defecto</option>
                <option value="rating">Ordenar por Calificación</option>
                <option value="priceAsc">Ordenar por Precio: Menor a Mayor</option>
                <option value="priceDesc">Ordenar por Precio: Mayor a Menor</option>
                <option value="discount">Ordenar por Mayor Descuento</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sortedProducts.map((product, index) => (
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
      {/* Agrega el banner aquí */}
      <div className="w-full p-4">
        <img src={promo4} alt="Promotional Banner" className="w-full h-auto rounded-lg" />
      </div>
    </Main>
  );
};