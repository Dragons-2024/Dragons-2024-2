import React, { useState } from 'react';
import { Main } from '../layout/Main';
import ProductItem from './ProductItem';
 // Importa el componente FilterBox
import promo4 from '../assets/Promotional_Images/promo4.png'; // Importa la imagen promo4
import { CategoryLink, itemprops, plpBreadCrumb } from '../utils/BreadcrumbData';
import { Breadcrumb } from './Breadcrumb';
import { useLocation } from 'react-router-dom';
import FilterBoxSalas from './FilterBoxSalas';

const placeholderImage = 'https://via.placeholder.com/150';

const products = [
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761756/121_ptkdur.png',
    name: 'Sofá de Cuero',
    rating: 5.0,
    features: 'Sofá de 3 plazas, cuero genuino',
    normalPrice: '$2.599.900',
    discountedPrice: '$2.079.200'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761767/122_jptly7.png',
    name: 'Mesa de Centro Moderna',
    rating: 4.5,
    features: 'Mesa de centro de vidrio templado',
    normalPrice: '$899.000',
    discountedPrice: '$719.000'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761769/123_exabgx.png',
    name: 'Sillón Reclinable',
    rating: 4.0,
    features: 'Sillón reclinable de tela',
    normalPrice: '$1.299.000',
    discountedPrice: '$1.039.000'
  },
  // Agrega más productos aquí
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761774/124_rfsqw8.png',
    name: 'Estantería de Madera',
    rating: 4.9,
    features: 'Estantería de madera de 5 niveles',
    normalPrice: '$799.000',
    discountedPrice: '$639.100',
    category: 'Salas'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761772/125_ocdbmx.png',
    name: 'Lámpara de Pie',
    rating: 4.6,
    features: 'Lámpara de pie con luz LED',
    normalPrice: '$499.000',
    discountedPrice: '$399.200',
    category: 'Salas'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761780/126_ohcdsf.png',
    name: 'Alfombra Moderna',
    rating: 4.3,
    features: 'Alfombra de 200x300 cm',
    normalPrice: '$1.039.920',
    discountedPrice: '$831.920',
    category: 'Salas'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761782/127_zy4yxc.png',
    name: 'Mesa Auxiliar',
    rating: 4.7,
    features: 'Mesa auxiliar de madera',
    normalPrice: '$399.900',
    discountedPrice: '$319.510',
    category: 'Salas'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761785/128_csc8fi.png',
    name: 'Cuadro Decorativo',
    rating: 4.8,
    features: 'Cuadro decorativo de 100x70 cm',
    normalPrice: '$380.000',
    discountedPrice: '$290.000',
    category: 'Salas'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761778/129_rhrjsn.png',
    name: 'Cojines Decorativos',
    rating: 4.5,
    features: 'Set de 4 cojines decorativos',
    normalPrice: '$140.400',
    discountedPrice: '$105.380',
    category: 'Salas'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727761787/130_klwefo.png',
    name: 'Mueble para TV',
    rating: 4.7,
    features: 'Mueble para TV de hasta 55 pulgadas',
    normalPrice: '$740.000',
    discountedPrice: '$626.000',
    category: 'Salas'
  }
];

export const PLPSalas = () => {
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
          <FilterBoxSalas />
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