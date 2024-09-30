import React, { useState } from 'react';
import { Main } from '../layout/Main';
import ProductItem from './ProductItem';
 // Importa el componente FilterBox
import promo4 from '../assets/Promotional_Images/promo4.png'; // Importa la imagen promo4
import { CategoryLink, itemprops, plpBreadCrumb } from '../utils/BreadcrumbData';
import { Breadcrumb } from './Breadcrumb';
import { useLocation } from 'react-router-dom';
import FilterBoxLavadoras from './FilterBoxLavadoras';

const placeholderImage = 'https://via.placeholder.com/150';

const products = [
  {
    img: placeholderImage,
    name: 'LG TurboWash 360',
    rating: 5.0,
    features: 'Lavadora de carga frontal, 4.5 cu. ft.',
    normalPrice: '$2.599.900',
    discountedPrice: '$2.079.200'
  },
  {
    img: placeholderImage,
    name: 'Samsung FlexWash',
    rating: 4.5,
    features: 'Lavadora de carga frontal, 6.0 cu. ft.',
    normalPrice: '$3.499.000',
    discountedPrice: '$2.799.000'
  },
  {
    img: placeholderImage,
    name: 'Whirlpool Cabrio',
    rating: 4.0,
    features: 'Lavadora de carga superior, 5.3 cu. ft.',
    normalPrice: '$2.999.000',
    discountedPrice: '$2.499.000'
  },
  // Agrega más productos aquí
  {
    img: placeholderImage,
    name: 'Bosch Serie 6',
    rating: 4.9,
    features: 'Lavadora de carga frontal, 8 kg',
    normalPrice: '$1.999.000',
    discountedPrice: '$1.599.100',
    category: 'Lavadoras/Secadoras'
  },
  {
    img: placeholderImage,
    name: 'Maytag Bravos XL',
    rating: 4.6,
    features: 'Lavadora de carga superior, 5.3 cu. ft.',
    normalPrice: '$2.499.000',
    discountedPrice: '$1.999.200',
    category: 'Lavadoras/Secadoras'
  },
  {
    img: placeholderImage,
    name: 'Electrolux EFLS627UTT',
    rating: 4.3,
    features: 'Lavadora de carga frontal, 4.4 cu. ft.',
    normalPrice: '$2.039.920',
    discountedPrice: '$1.631.920',
    category: 'Lavadoras/Secadoras'
  },
  {
    img: placeholderImage,
    name: 'GE GTW720BSNWS',
    rating: 4.7,
    features: 'Lavadora de carga superior, 4.8 cu. ft.',
    normalPrice: '$3.993.900',
    discountedPrice: '$3.194.510',
    category: 'Lavadoras/Secadoras'
  },
  {
    img: placeholderImage,
    name: 'Kenmore Elite 41072',
    rating: 4.8,
    features: 'Lavadora de carga frontal, 5.2 cu. ft.',
    normalPrice: '$4.380.000',
    discountedPrice: '$3.490.000',
    category: 'Lavadoras/Secadoras'
  },
  {
    img: placeholderImage,
    name: 'Speed Queen TR3000WN',
    rating: 4.5,
    features: 'Lavadora de carga superior, 3.2 cu. ft.',
    normalPrice: '$2.900.400',
    discountedPrice: '$2.405.380',
    category: 'Lavadoras/Secadoras'
  },
  {
    img: placeholderImage,
    name: 'Miele W1',
    rating: 4.7,
    features: 'Lavadora de carga frontal, 2.26 cu. ft.',
    normalPrice: '$2.140.000',
    discountedPrice: '$1.726.000',
    category: 'Lavadoras/Secadoras'
  }
];

export const PLPLavadorasSecadoras = () => {
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
          <FilterBoxLavadoras />
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