import React, { useState } from 'react';
import { Main } from '../layout/Main';
import ProductItem from './ProductItem';
import FilterBoxTVs from './FilterBoxTVs'; // Importa el componente FilterBox
import promo4 from '../assets/Promotional_Images/promo4.png'; // Importa la imagen promo4
import { CategoryLink, itemprops, plpBreadCrumb } from '../utils/BreadcrumbData';
import { Breadcrumb } from './Breadcrumb';
import { useLocation } from 'react-router-dom';

const placeholderImage = 'https://via.placeholder.com/150';

const products = [
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727762210/151_datyzx.png',
    name: 'Samsung QLED 4K',
    rating: 5.0,
    features: '55 pulgadas, 4K UHD, Smart TV',
    normalPrice: '$2.599.900',
    discountedPrice: '$2.079.200'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727762217/152_o9i3zu.png',
    name: 'LG OLED 4K',
    rating: 4.5,
    features: '65 pulgadas, 4K UHD, Smart TV',
    normalPrice: '$3.499.000',
    discountedPrice: '$2.799.000'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727762214/153_rtv5ux.png',
    name: 'Sony Bravia 4K',
    rating: 4.0,
    features: '55 pulgadas, 4K UHD, Smart TV',
    normalPrice: '$2.999.000',
    discountedPrice: '$2.499.000'
  },
  // Agrega más productos aquí
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727762223/154_rnxr4q.png',
    name: 'TCL 4K UHD',
    rating: 4.9,
    features: '50 pulgadas, 4K UHD, Smart TV',
    normalPrice: '$1.999.000',
    discountedPrice: '$1.599.100',
    category: 'Televisores'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727762226/155_vb9n5a.png',
    name: 'Hisense 4K UHD',
    rating: 4.6,
    features: '55 pulgadas, 4K UHD, Smart TV',
    normalPrice: '$2.499.000',
    discountedPrice: '$1.999.200',
    category: 'Televisores'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727762228/156_tlefjz.png',
    name: 'Panasonic 4K UHD',
    rating: 4.3,
    features: '58 pulgadas, 4K UHD, Smart TV',
    normalPrice: '$2.039.920',
    discountedPrice: '$1.631.920',
    category: 'Televisores'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727762231/157_pf5evc.png',
    name: 'Philips 4K UHD',
    rating: 4.7,
    features: '65 pulgadas, 4K UHD, Smart TV',
    normalPrice: '$3.993.900',
    discountedPrice: '$3.194.510',
    category: 'Televisores'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727762220/158_j9q9bx.png',
    name: 'Vizio 4K UHD',
    rating: 4.8,
    features: '70 pulgadas, 4K UHD, Smart TV',
    normalPrice: '$4.380.000',
    discountedPrice: '$3.490.000',
    category: 'Televisores'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727762237/159_fhggbs.png',
    name: 'Sharp 4K UHD',
    rating: 4.5,
    features: '60 pulgadas, 4K UHD, Smart TV',
    normalPrice: '$2.900.400',
    discountedPrice: '$2.405.380',
    category: 'Televisores'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727762234/160_ywuxda.png',
    name: 'Toshiba 4K UHD',
    rating: 4.7,
    features: '55 pulgadas, 4K UHD, Smart TV',
    normalPrice: '$2.140.000',
    discountedPrice: '$1.726.000',
    category: 'Televisores'
  }
];

export const PLPTVS = () => {
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
          <FilterBoxTVs />
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