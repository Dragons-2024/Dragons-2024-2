import React, { useState } from 'react';
import { Main } from '../layout/Main';
import televisor1 from '../assets/televisores/televisor1.jpg';
import televisor2 from '../assets/televisores/televisor2.jpg';
import televisor3 from '../assets/televisores/televisor3.jpg';
import televisor4 from '../assets/televisores/televisor4.jpg';
import televisor5 from '../assets/televisores/televisor5.jpg';
import televisor6 from '../assets/televisores/televisor6.jpg';
import televisor7 from '../assets/televisores/televisor7.jpg';
import televisor8 from '../assets/televisores/televisor8.jpg';
import televisor9 from '../assets/televisores/televisor9.jpg';
import televisor10 from '../assets/televisores/televisor10.jpg';
import ProductItem from './ProductItem';
import FilterBox from './FilterBox'; // Importa el componente FilterBox
import promo4 from '../assets/Promotional_Images/promo4.png'; // Importa la imagen promo4
import { CategoryLink, itemprops, plpBreadCrumb } from '../utils/BreadcrumbData';
import { Breadcrumb } from './Breadcrumb';
import { useLocation } from 'react-router-dom';

const products = [
  {
    img: televisor1,
    name: 'Samsung QLED 4K',
    rating: 5.0,
    features: '55 pulgadas, 4K UHD, Smart TV',
    normalPrice: '$2.599.900',
    discountedPrice: '$2.079.200'
  },
  {
    img: televisor2,
    name: 'LG OLED 4K',
    rating: 4.5,
    features: '65 pulgadas, 4K UHD, Smart TV',
    normalPrice: '$3.499.000',
    discountedPrice: '$2.799.000'
  },
  {
    img: televisor3,
    name: 'Sony Bravia 4K',
    rating: 4.0,
    features: '55 pulgadas, 4K UHD, Smart TV',
    normalPrice: '$2.999.000',
    discountedPrice: '$2.499.000'
  },
  // Agrega más productos aquí
  {
    img: televisor4,
    name: 'TCL 4K UHD',
    rating: 4.9,
    features: '50 pulgadas, 4K UHD, Smart TV',
    normalPrice: '$1.999.000',
    discountedPrice: '$1.599.100',
    category: 'Televisores'
  },
  {
    img: televisor5,
    name: 'Hisense 4K UHD',
    rating: 4.6,
    features: '55 pulgadas, 4K UHD, Smart TV',
    normalPrice: '$2.499.000',
    discountedPrice: '$1.999.200',
    category: 'Televisores'
  },
  {
    img: televisor6,
    name: 'Panasonic 4K UHD',
    rating: 4.3,
    features: '58 pulgadas, 4K UHD, Smart TV',
    normalPrice: '$2.039.920',
    discountedPrice: '$1.631.920',
    category: 'Televisores'
  },
  {
    img: televisor7,
    name: 'Philips 4K UHD',
    rating: 4.7,
    features: '65 pulgadas, 4K UHD, Smart TV',
    normalPrice: '$3.993.900',
    discountedPrice: '$3.194.510',
    category: 'Televisores'
  },
  {
    img: televisor8,
    name: 'Vizio 4K UHD',
    rating: 4.8,
    features: '70 pulgadas, 4K UHD, Smart TV',
    normalPrice: '$4.380.000',
    discountedPrice: '$3.490.000',
    category: 'Televisores'
  },
  {
    img: televisor9,
    name: 'Sharp 4K UHD',
    rating: 4.5,
    features: '60 pulgadas, 4K UHD, Smart TV',
    normalPrice: '$2.900.400',
    discountedPrice: '$2.405.380',
    category: 'Televisores'
  },
  {
    img: televisor10,
    name: 'Toshiba 4K UHD',
    rating: 4.7,
    features: '55 pulgadas, 4K UHD, Smart TV',
    normalPrice: '$2.140.000',
    discountedPrice: '$1.726.000',
    category: 'Televisores'
  }
];

export const ProductListPLP_Televisores = () => {
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
          <FilterBox />
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