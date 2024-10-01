import React, { useState } from 'react';
import { Main } from '../layout/Main';
import ProductItem from './ProductItem';
 // Importa el componente FilterBox
import promo4 from '../assets/Promotional_Images/promo4.png'; // Importa la imagen promo4
import { CategoryLink, itemprops, plpBreadCrumb } from '../utils/BreadcrumbData';
import { Breadcrumb } from './Breadcrumb';
import { useLocation } from 'react-router-dom';
import FilterBoxTabletas from './FilterBoxTabletas';


const products = [
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761933/141_wnrzsf.png',
    name: 'Apple iPad Pro',
    rating: 5.0,
    features: '12.9 pulgadas, 256GB, Wi-Fi',
    normalPrice: '$3.599.900',
    discountedPrice: '$2.879.200'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761939/142_josg4h.png',
    name: 'Samsung Galaxy Tab S7',
    rating: 4.5,
    features: '11 pulgadas, 128GB, Wi-Fi',
    normalPrice: '$2.499.000',
    discountedPrice: '$1.999.000'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761942/143_sf7ftg.png',
    name: 'Microsoft Surface Pro 7',
    rating: 4.0,
    features: '12.3 pulgadas, 256GB, Wi-Fi',
    normalPrice: '$3.999.000',
    discountedPrice: '$3.499.000'
  },
  // Agrega más productos aquí
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761936/144_xfojkm.png',
    name: 'Lenovo Tab P11 Pro',
    rating: 4.9,
    features: '11.5 pulgadas, 128GB, Wi-Fi',
    normalPrice: '$1.999.000',
    discountedPrice: '$1.599.100',
    category: 'Tabletas'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761944/145_zxyxsk.png',
    name: 'Amazon Fire HD 10',
    rating: 4.6,
    features: '10.1 pulgadas, 64GB, Wi-Fi',
    normalPrice: '$999.000',
    discountedPrice: '$799.200',
    category: 'Tabletas'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761947/146_yuldqf.png',
    name: 'Huawei MatePad Pro',
    rating: 4.3,
    features: '10.8 pulgadas, 128GB, Wi-Fi',
    normalPrice: '$2.039.920',
    discountedPrice: '$1.631.920',
    category: 'Tabletas'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761949/147_hy0sid.png',
    name: 'Asus ZenPad 3S 10',
    rating: 4.7,
    features: '9.7 pulgadas, 64GB, Wi-Fi',
    normalPrice: '$1.199.900',
    discountedPrice: '$959.510',
    category: 'Tabletas'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727762136/148_wyphb7.png',
    name: 'Google Pixel Slate',
    rating: 4.8,
    features: '12.3 pulgadas, 128GB, Wi-Fi',
    normalPrice: '$3.380.000',
    discountedPrice: '$2.690.000',
    category: 'Tabletas'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761952/149_fztt8f.png',
    name: 'Sony Xperia Z4 Tablet',
    rating: 4.5,
    features: '10.1 pulgadas, 32GB, Wi-Fi',
    normalPrice: '$1.400.400',
    discountedPrice: '$1.205.380',
    category: 'Tabletas'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761954/150_tpzury.png',
    name: 'Acer Iconia Tab 10',
    rating: 4.7,
    features: '10 pulgadas, 32GB, Wi-Fi',
    normalPrice: '$740.000',
    discountedPrice: '$626.000',
    category: 'Tabletas'
  }
];

export const PLPTabletas = () => {
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
          <FilterBoxTabletas />
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