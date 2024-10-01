import React, { useState } from 'react';
import { Main } from '../layout/Main';
import ProductItem from './ProductItem';
 // Importa el componente FilterBox
import promo4 from '../assets/Promotional_Images/promo4.png'; // Importa la imagen promo4
import { CategoryLink, itemprops, plpBreadCrumb } from '../utils/BreadcrumbData';
import { Breadcrumb } from './Breadcrumb';
import { useLocation } from 'react-router-dom';
import FilterBoxCocina from './FilterBoxCocina';

const placeholderImage = 'https://via.placeholder.com/150';

const products = [
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761196/71_fsqwca.png',
    name: 'Licuadora Oster',
    rating: 5.0,
    features: '600W, 1.5L, 3 velocidades',
    normalPrice: '$299.900',
    discountedPrice: '$239.200'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761197/72_cwbtsh.png',
    name: 'Microondas LG',
    rating: 4.5,
    features: '1000W, 20L, Digital',
    normalPrice: '$499.000',
    discountedPrice: '$399.000'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761199/73_ubxz3i.png',
    name: 'Cafetera Nespresso',
    rating: 4.0,
    features: '19 bares, Automática',
    normalPrice: '$699.000',
    discountedPrice: '$559.000'
  },
  // Agrega más productos aquí
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761201/74_rx84vx.png',
    name: 'Batidora KitchenAid',
    rating: 4.9,
    features: '300W, 4.8L, 10 velocidades',
    normalPrice: '$1.199.000',
    discountedPrice: '$959.100',
    category: 'Cocina'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761211/75_zoie7e.png',
    name: 'Horno Tostador Black+Decker',
    rating: 4.6,
    features: '1500W, 20L, Convección',
    normalPrice: '$399.000',
    discountedPrice: '$319.200',
    category: 'Cocina'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761212/76_rofr3t.png',
    name: 'Freidora de Aire Philips',
    rating: 4.3,
    features: '1400W, 4.1L, Digital',
    normalPrice: '$799.920',
    discountedPrice: '$639.920',
    category: 'Cocina'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761214/77_anqfr9.png',
    name: 'Procesador de Alimentos Cuisinart',
    rating: 4.7,
    features: '720W, 14 tazas, 2 velocidades',
    normalPrice: '$999.900',
    discountedPrice: '$799.510',
    category: 'Cocina'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761218/78_t74rew.png',
    name: 'Extractor de Jugos Hamilton Beach',
    rating: 4.8,
    features: '800W, 1.1L, Acero Inoxidable',
    normalPrice: '$380.000',
    discountedPrice: '$304.000',
    category: 'Cocina'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761216/79_ofzzyb.png',
    name: 'Tostadora Oster',
    rating: 4.5,
    features: '800W, 2 rebanadas, Acero Inoxidable',
    normalPrice: '$140.400',
    discountedPrice: '$112.380',
    category: 'Cocina'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761219/80_bb3jiv.png',
    name: 'Licuadora Ninja',
    rating: 4.7,
    features: '1000W, 2.1L, 3 velocidades',
    normalPrice: '$240.000',
    discountedPrice: '$192.000',
    category: 'Cocina'
  }
];

export const PLPCocina = () => {
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
          <FilterBoxCocina />
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
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