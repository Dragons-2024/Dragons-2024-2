import React, { useState } from 'react';
import { Main } from '../layout/Main';
import ProductItem from './ProductItem';
 // Importa el componente FilterBox
import promo4 from '../assets/Promotional_Images/promo4.png'; // Importa la imagen promo4
import { CategoryLink, itemprops, plpBreadCrumb } from '../utils/BreadcrumbData';
import { Breadcrumb } from './Breadcrumb';
import { useLocation } from 'react-router-dom';
import FilterBoxClimatizacion from './FilterBoxClimatizacion';



const products = [
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761071/61_qtqyqz.png',
    name: 'Aire Acondicionado LG Dual Inverter',
    rating: 5.0,
    features: '12000 BTU, Eficiencia Energética A++',
    normalPrice: '$2.599.900',
    discountedPrice: '$2.079.200'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761074/62_huxgjo.png',
    name: 'Ventilador de Torre Dyson AM07',
    rating: 4.5,
    features: 'Sin Aspas, Control Remoto',
    normalPrice: '$1.499.000',
    discountedPrice: '$1.199.000'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761076/63_hrwmy0.png',
    name: 'Calefactor Eléctrico DeLonghi',
    rating: 4.0,
    features: '1500W, Termostato Ajustable',
    normalPrice: '$899.000',
    discountedPrice: '$719.000'
  },
  // Agrega más productos aquí
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761085/64_zbcxtr.png',
    name: 'Purificador de Aire Philips',
    rating: 4.9,
    features: 'Filtro HEPA, Control por App',
    normalPrice: '$1.199.000',
    discountedPrice: '$959.100',
    category: 'Climatización'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761095/65_od2orc.png',
    name: 'Humidificador Ultrasónico Levoit',
    rating: 4.6,
    features: '6L, Control Táctil',
    normalPrice: '$499.000',
    discountedPrice: '$399.200',
    category: 'Climatización'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761097/66_yqmypt.png',
    name: 'Deshumidificador Pro Breeze',
    rating: 4.3,
    features: '12L, Auto Apagado',
    normalPrice: '$799.920',
    discountedPrice: '$639.920',
    category: 'Climatización'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761101/67_dyxshn.png',
    name: 'Aire Acondicionado Portátil Honeywell',
    rating: 4.7,
    features: '10000 BTU, Control Remoto',
    normalPrice: '$1.499.900',
    discountedPrice: '$1.199.510',
    category: 'Climatización'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761110/68_oghf7c.png',
    name: 'Ventilador de Mesa Rowenta',
    rating: 4.8,
    features: 'Silencioso, 5 Velocidades',
    normalPrice: '$299.000',
    discountedPrice: '$239.000',
    category: 'Climatización'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761118/69_ugzjpm.png',
    name: 'Calefactor Cerámico Lasko',
    rating: 4.5,
    features: '1500W, Oscilante',
    normalPrice: '$399.400',
    discountedPrice: '$319.380',
    category: 'Climatización'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761122/70_puwr5b.png',
    name: 'Purificador de Aire Xiaomi Mi Air',
    rating: 4.7,
    features: 'Filtro HEPA, Control por App',
    normalPrice: '$599.000',
    discountedPrice: '$479.000',
    category: 'Climatización'
  }
];

export const PLPClimatizacion = () => {
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
          <FilterBoxClimatizacion/>
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