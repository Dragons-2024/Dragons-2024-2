import React, { useState } from 'react';
import { Main } from '../layout/Main';
import ProductItem from './ProductItem';
import FilterBoxCamaras from './FilterBoxCamaras'; // Importa el componente FilterBox
import promo4 from '../assets/Promotional_Images/promo4.png'; // Importa la imagen promo4
import { CategoryLink, itemprops, plpBreadCrumb } from '../utils/BreadcrumbData';
import { Breadcrumb } from './Breadcrumb';
import { useLocation } from 'react-router-dom';

const placeholderImage = 'https://via.placeholder.com/150';

const products = [
  {
    img: placeholderImage,
    name: 'Canon EOS R5',
    rating: 5.0,
    features: '45 MP, Full-Frame, 8K Video',
    normalPrice: '$3.999.900',
    discountedPrice: '$3.199.200'
  },
  {
    img: placeholderImage,
    name: 'Sony Alpha a7 III',
    rating: 4.5,
    features: '24 MP, Full-Frame, 4K Video',
    normalPrice: '$2.499.000',
    discountedPrice: '$1.999.000'
  },
  {
    img: placeholderImage,
    name: 'Nikon Z6',
    rating: 4.0,
    features: '24.5 MP, Full-Frame, 4K Video',
    normalPrice: '$1.999.000',
    discountedPrice: '$1.599.000'
  },
  // Agrega más productos aquí
  {
    img: placeholderImage,
    name: 'Fujifilm X-T4',
    rating: 4.9,
    features: '26 MP, APS-C, 4K Video',
    normalPrice: '$1.799.000',
    discountedPrice: '$1.439.100',
    category: 'Cámaras'
  },
  {
    img: placeholderImage,
    name: 'Panasonic Lumix GH5',
    rating: 4.6,
    features: '20 MP, Micro Four Thirds, 4K Video',
    normalPrice: '$1.499.000',
    discountedPrice: '$1.199.200',
    category: 'Cámaras'
  },
  {
    img: placeholderImage,
    name: 'Olympus OM-D E-M1 Mark III',
    rating: 4.3,
    features: '20 MP, Micro Four Thirds, 4K Video',
    normalPrice: '$1.399.920',
    discountedPrice: '$1.119.920',
    category: 'Cámaras'
  },
  {
    img: placeholderImage,
    name: 'Leica Q2',
    rating: 4.7,
    features: '47 MP, Full-Frame, 4K Video',
    normalPrice: '$4.999.900',
    discountedPrice: '$3.999.510',
    category: 'Cámaras'
  },
  {
    img: placeholderImage,
    name: 'GoPro HERO9 Black',
    rating: 4.8,
    features: '20 MP, 5K Video, Waterproof',
    normalPrice: '$499.000',
    discountedPrice: '$399.000',
    category: 'Cámaras'
  },
  {
    img: placeholderImage,
    name: 'DJI Osmo Pocket',
    rating: 4.5,
    features: '12 MP, 4K Video, Gimbal Stabilizer',
    normalPrice: '$349.000',
    discountedPrice: '$279.000',
    category: 'Cámaras'
  },
  {
    img: placeholderImage,
    name: 'Canon PowerShot G7 X Mark III',
    rating: 4.7,
    features: '20 MP, 1-inch Sensor, 4K Video',
    normalPrice: '$749.000',
    discountedPrice: '$599.000',
    category: 'Cámaras'
  }
];

export const PLPCamaras = () => {
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
          <FilterBoxCamaras />
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