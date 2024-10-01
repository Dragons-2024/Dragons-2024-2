import React, { useState } from 'react';
import { Main } from '../layout/Main';
import ProductItem from './ProductItem';
 // Importa el componente FilterBox
import promo4 from '../assets/Promotional_Images/promo4.png'; // Importa la imagen promo4
import { CategoryLink, itemprops, plpBreadCrumb } from '../utils/BreadcrumbData';
import { Breadcrumb } from './Breadcrumb';
import { useLocation } from 'react-router-dom';
import FilterBoxRefrigeracion from './FilterBoxRefrigeracion';

const placeholderImage = 'https://via.placeholder.com/150';

const products = [
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761652/111_ox1uyo.png',
    name: 'Samsung French Door',
    rating: 5.0,
    features: 'Refrigerador de puerta francesa, 28 cu. ft.',
    normalPrice: '$3.599.900',
    discountedPrice: '$2.879.200'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761656/112_bsln8s.png',
    name: 'LG InstaView',
    rating: 4.5,
    features: 'Refrigerador de puerta francesa, 26 cu. ft.',
    normalPrice: '$4.499.000',
    discountedPrice: '$3.599.000'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761658/113_fuanql.png',
    name: 'Whirlpool Side-by-Side',
    rating: 4.0,
    features: 'Refrigerador de dos puertas, 25 cu. ft.',
    normalPrice: '$3.999.000',
    discountedPrice: '$3.199.000'
  },
  // Agrega más productos aquí
  {
    img:'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761661/114_ji9o78.png',
    name: 'GE Profile',
    rating: 4.9,
    features: 'Refrigerador de puerta francesa, 27 cu. ft.',
    normalPrice: '$4.999.000',
    discountedPrice: '$3.999.100',
    category: 'Refrigeración'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761666/115_hzqq1c.png',
    name: 'Frigidaire Gallery',
    rating: 4.6,
    features: 'Refrigerador de puerta francesa, 26 cu. ft.',
    normalPrice: '$4.499.000',
    discountedPrice: '$3.599.200',
    category: 'Refrigeración'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761664/116_vxwu1d.png',
    name: 'Bosch 800 Series',
    rating: 4.3,
    features: 'Refrigerador de puerta francesa, 21 cu. ft.',
    normalPrice: '$5.039.920',
    discountedPrice: '$4.431.920',
    category: 'Refrigeración'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761673/117_qmsag6.png',
    name: 'KitchenAid Counter-Depth',
    rating: 4.7,
    features: 'Refrigerador de puerta francesa, 23 cu. ft.',
    normalPrice: '$6.993.900',
    discountedPrice: '$5.994.510',
    category: 'Refrigeración'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761679/118_b1p1vp.png',
    name: 'Maytag Top-Freezer',
    rating: 4.8,
    features: 'Refrigerador de congelador superior, 21 cu. ft.',
    normalPrice: '$2.380.000',
    discountedPrice: '$1.890.000',
    category: 'Refrigeración'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761677/119_wz8gua.png',
    name: 'Haier Quad Door',
    rating: 4.5,
    features: 'Refrigerador de cuatro puertas, 25 cu. ft.',
    normalPrice: '$3.900.400',
    discountedPrice: '$3.405.380',
    category: 'Refrigeración'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761681/120_zrhgnb.png',
    name: 'Kenmore Elite',
    rating: 4.7,
    features: 'Refrigerador de puerta francesa, 29 cu. ft.',
    normalPrice: '$7.140.000',
    discountedPrice: '$6.426.000',
    category: 'Refrigeración'
  }
];

export const PLPRefrigeracion = () => {
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
          <FilterBoxRefrigeracion />
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