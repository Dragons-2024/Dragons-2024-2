import React, { useState } from 'react';
import { Main } from '../layout/Main';
import ProductItem from './ProductItem';
import FilterBoxAudio from './FilterBoxAudio'; // Importa el componente FilterBoxAudio
import promo4 from '../assets/Promotional_Images/promo4.png'; // Importa la imagen promo4
import { CategoryLink, itemprops, plpBreadCrumb } from '../utils/BreadcrumbData';
import { Breadcrumb } from './Breadcrumb';
import { useLocation } from 'react-router-dom';

const placeholderImage = 'https://via.placeholder.com/150';

const products = [
  {
    img: placeholderImage,
    name: 'Sony WH-1000XM4',
    rating: 5.0,
    features: 'Auriculares inalámbricos con cancelación de ruido',
    normalPrice: '$1.299.900',
    discountedPrice: '$1.039.200'
  },
  {
    img: placeholderImage,
    name: 'Bose SoundLink Revolve',
    rating: 4.5,
    features: 'Altavoz Bluetooth portátil',
    normalPrice: '$899.000',
    discountedPrice: '$719.000'
  },
  {
    img: placeholderImage,
    name: 'JBL Charge 4',
    rating: 4.0,
    features: 'Altavoz Bluetooth portátil resistente al agua',
    normalPrice: '$599.000',
    discountedPrice: '$499.000'
  },
  // Agrega más productos aquí
  {
    img: placeholderImage,
    name: 'Sennheiser HD 450BT',
    rating: 4.9,
    features: 'Auriculares inalámbricos con cancelación de ruido',
    normalPrice: '$799.000',
    discountedPrice: '$639.100',
    category: 'Audio'
  },
  {
    img: placeholderImage,
    name: 'Marshall Stanmore II',
    rating: 4.6,
    features: 'Altavoz Bluetooth',
    normalPrice: '$1.499.000',
    discountedPrice: '$1.199.200',
    category: 'Audio'
  },
  {
    img: placeholderImage,
    name: 'Bang & Olufsen Beoplay A1',
    rating: 4.3,
    features: 'Altavoz Bluetooth portátil',
    normalPrice: '$1.039.920',
    discountedPrice: '$831.920',
    category: 'Audio'
  },
  {
    img: placeholderImage,
    name: 'Apple AirPods Pro',
    rating: 4.7,
    features: 'Auriculares inalámbricos con cancelación de ruido',
    normalPrice: '$1.199.900',
    discountedPrice: '$959.510',
    category: 'Audio'
  },
  {
    img: placeholderImage,
    name: 'Sonos One',
    rating: 4.8,
    features: 'Altavoz inteligente con control por voz',
    normalPrice: '$1.380.000',
    discountedPrice: '$1.190.000',
    category: 'Audio'
  },
  {
    img: placeholderImage,
    name: 'Bose QuietComfort 35 II',
    rating: 4.5,
    features: 'Auriculares inalámbricos con cancelación de ruido',
    normalPrice: '$1.400.400',
    discountedPrice: '$1.205.380',
    category: 'Audio'
  },
  {
    img: placeholderImage,
    name: 'Ultimate Ears Boom 3',
    rating: 4.7,
    features: 'Altavoz Bluetooth portátil resistente al agua',
    normalPrice: '$740.000',
    discountedPrice: '$626.000',
    category: 'Audio'
  }
];

export const PLPAudio = () => {
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
          <FilterBoxAudio />
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