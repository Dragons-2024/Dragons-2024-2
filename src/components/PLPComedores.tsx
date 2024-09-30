import React, { useState } from 'react';
import { Main } from '../layout/Main';
import ProductItem from './ProductItem';
// Importa el componente FilterBox
import promo4 from '../assets/Promotional_Images/promo4.png'; // Importa la imagen promo4
import { CategoryLink, itemprops, plpBreadCrumb } from '../utils/BreadcrumbData';
import { Breadcrumb } from './Breadcrumb';
import { useLocation } from 'react-router-dom';
import FilterBoxComedores from './FilterBoxComedores';

const placeholderImage = 'https://via.placeholder.com/150';

const products = [
  {
    img: placeholderImage,
    name: 'Mesa de Comedor Moderna',
    rating: 5.0,
    features: 'Madera, 6 sillas, color blanco',
    normalPrice: '$1.299.900',
    discountedPrice: '$1.039.200'
  },
  {
    img: placeholderImage,
    name: 'Juego de Comedor Clásico',
    rating: 4.5,
    features: 'Madera, 8 sillas, color marrón',
    normalPrice: '$1.899.000',
    discountedPrice: '$1.519.000'
  },
  {
    img: placeholderImage,
    name: 'Mesa de Comedor de Vidrio',
    rating: 4.0,
    features: 'Vidrio templado, 4 sillas, color negro',
    normalPrice: '$999.000',
    discountedPrice: '$799.000'
  },
  // Agrega más productos aquí
  {
    img: placeholderImage,
    name: 'Mesa de Comedor Extensible',
    rating: 4.9,
    features: 'Madera, 6 sillas, color gris',
    normalPrice: '$1.499.000',
    discountedPrice: '$1.199.100',
    category: 'Comedores'
  },
  {
    img: placeholderImage,
    name: 'Juego de Comedor Minimalista',
    rating: 4.6,
    features: 'Madera, 4 sillas, color blanco',
    normalPrice: '$1.299.000',
    discountedPrice: '$1.039.200',
    category: 'Comedores'
  },
  {
    img: placeholderImage,
    name: 'Mesa de Comedor Redonda',
    rating: 4.3,
    features: 'Madera, 4 sillas, color natural',
    normalPrice: '$1.199.920',
    discountedPrice: '$959.920',
    category: 'Comedores'
  },
  {
    img: placeholderImage,
    name: 'Juego de Comedor Industrial',
    rating: 4.7,
    features: 'Metal y madera, 6 sillas, color negro',
    normalPrice: '$1.599.900',
    discountedPrice: '$1.279.510',
    category: 'Comedores'
  },
  {
    img: placeholderImage,
    name: 'Mesa de Comedor Escandinava',
    rating: 4.8,
    features: 'Madera, 4 sillas, color blanco',
    normalPrice: '$1.380.000',
    discountedPrice: '$1.190.000',
    category: 'Comedores'
  },
  {
    img: placeholderImage,
    name: 'Juego de Comedor Vintage',
    rating: 4.5,
    features: 'Madera, 6 sillas, color marrón',
    normalPrice: '$1.400.400',
    discountedPrice: '$1.205.380',
    category: 'Comedores'
  },
  {
    img: placeholderImage,
    name: 'Mesa de Comedor Rústica',
    rating: 4.7,
    features: 'Madera, 8 sillas, color natural',
    normalPrice: '$1.740.000',
    discountedPrice: '$1.426.000',
    category: 'Comedores'
  }
];

export const PLPComedores = () => {
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
          <FilterBoxComedores />
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