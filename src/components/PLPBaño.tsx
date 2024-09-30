import React, { useState } from 'react';
import { Main } from '../layout/Main';
import ProductItem from './ProductItem';
import FilterBoxBaño from './FilterBoxBaño'; // Importa el componente FilterBox
import promo4 from '../assets/Promotional_Images/promo4.png'; // Importa la imagen promo4
import { CategoryLink, itemprops, plpBreadCrumb } from '../utils/BreadcrumbData';
import { Breadcrumb } from './Breadcrumb';
import { useLocation } from 'react-router-dom';

const placeholderImage = 'https://via.placeholder.com/150';

const products = [
  {
    img: placeholderImage,
    name: 'Toallero Eléctrico',
    rating: 5.0,
    features: 'Acero inoxidable, 100W',
    normalPrice: '$299.900',
    discountedPrice: '$239.200'
  },
  {
    img: placeholderImage,
    name: 'Espejo con Luz LED',
    rating: 4.5,
    features: '60x80 cm, Luz regulable',
    normalPrice: '$499.000',
    discountedPrice: '$399.000'
  },
  {
    img: placeholderImage,
    name: 'Ducha Termostática',
    rating: 4.0,
    features: 'Acero inoxidable, Control de temperatura',
    normalPrice: '$699.000',
    discountedPrice: '$559.000'
  },
  // Agrega más productos aquí
  {
    img: placeholderImage,
    name: 'Dispensador de Jabón Automático',
    rating: 4.9,
    features: 'Sensor de movimiento, 500ml',
    normalPrice: '$199.000',
    discountedPrice: '$159.100',
    category: 'Baño'
  },
  {
    img: placeholderImage,
    name: 'Alfombra de Baño Antideslizante',
    rating: 4.6,
    features: 'Microfibra, 50x80 cm',
    normalPrice: '$99.000',
    discountedPrice: '$79.200',
    category: 'Baño'
  },
  {
    img: placeholderImage,
    name: 'Cortina de Ducha Impermeable',
    rating: 4.3,
    features: 'Poliéster, 180x200 cm',
    normalPrice: '$59.920',
    discountedPrice: '$47.920',
    category: 'Baño'
  },
  {
    img: placeholderImage,
    name: 'Set de Accesorios de Baño',
    rating: 4.7,
    features: 'Acero inoxidable, 5 piezas',
    normalPrice: '$399.900',
    discountedPrice: '$319.510',
    category: 'Baño'
  },
  {
    img: placeholderImage,
    name: 'Organizador de Ducha',
    rating: 4.8,
    features: 'Acero inoxidable, 3 niveles',
    normalPrice: '$180.000',
    discountedPrice: '$150.000',
    category: 'Baño'
  },
  {
    img: placeholderImage,
    name: 'Inodoro Inteligente',
    rating: 4.5,
    features: 'Control remoto, Bidé integrado',
    normalPrice: '$2.900.400',
    discountedPrice: '$2.405.380',
    category: 'Baño'
  },
  {
    img: placeholderImage,
    name: 'Grifo de Lavabo Cascada',
    rating: 4.7,
    features: 'Acero inoxidable, Monomando',
    normalPrice: '$740.000',
    discountedPrice: '$626.000',
    category: 'Baño'
  }
];

export const PLPBaño = () => {
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
          <FilterBoxBaño />
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