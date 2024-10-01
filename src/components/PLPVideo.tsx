import React, { useState } from 'react';
import { Main } from '../layout/Main';
import ProductItem from './ProductItem';
// Importa el componente FilterBox
import promo4 from '../assets/Promotional_Images/promo4.png'; // Importa la imagen promo4
import { CategoryLink, itemprops, plpBreadCrumb } from '../utils/BreadcrumbData';
import { Breadcrumb } from './Breadcrumb';
import { useLocation } from 'react-router-dom';
import FilterBoxVideo from './FilterBoxVideo';

const placeholderImage = 'https://via.placeholder.com/150';

const products = [
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727762349/161_gbbfhs.png',
    name: 'Canon EOS R5',
    rating: 5.0,
    features: 'Cámara sin espejo, 45 MP, 8K video',
    normalPrice: '$3.999.900',
    discountedPrice: '$3.199.200'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727762359/162_izodfc.png',
    name: 'Sony A7 III',
    rating: 4.5,
    features: 'Cámara sin espejo, 24 MP, 4K video',
    normalPrice: '$2.499.000',
    discountedPrice: '$1.999.000'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727762362/163_qhtp0g.png',
    name: 'Panasonic Lumix GH5',
    rating: 4.0,
    features: 'Cámara sin espejo, 20 MP, 4K video',
    normalPrice: '$1.999.000',
    discountedPrice: '$1.599.000'
  },
  // Agrega más productos aquí
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727762352/164_i60fyc.png',
    name: 'GoPro HERO9 Black',
    rating: 4.9,
    features: 'Cámara de acción, 5K video, HyperSmooth 3.0',
    normalPrice: '$499.000',
    discountedPrice: '$399.100',
    category: 'Video'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727762365/165_ughhzr.png',
    name: 'DJI Osmo Pocket',
    rating: 4.6,
    features: 'Cámara de bolsillo, 4K video, estabilizador',
    normalPrice: '$349.000',
    discountedPrice: '$279.200',
    category: 'Video'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727762367/166_x0euio.png',
    name: 'Blackmagic Pocket Cinema Camera 6K',
    rating: 4.3,
    features: 'Cámara de cine, 6K video, sensor Super 35',
    normalPrice: '$2.499.920',
    discountedPrice: '$1.999.920',
    category: 'Video'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727762370/167_skpvkf.png',
    name: 'Canon VIXIA HF G50',
    rating: 4.7,
    features: 'Videocámara, 4K video, zoom óptico 20x',
    normalPrice: '$1.399.900',
    discountedPrice: '$1.119.510',
    category: 'Video'
  },
  {
    img:'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727762356/168_amzjui.png',
    name: 'Sony FDR-AX43',
    rating: 4.8,
    features: 'Videocámara, 4K video, estabilizador óptico',
    normalPrice: '$1.380.000',
    discountedPrice: '$1.190.000',
    category: 'Video'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727762373/169_pavta4.png',
    name: 'Panasonic HC-VX981K',
    rating: 4.5,
    features: 'Videocámara, 4K video, zoom óptico 20x',
    normalPrice: '$899.400',
    discountedPrice: '$719.380',
    category: 'Video'
  },
  {
    img: 'https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727762376/170_wgwxht.png',
    name: 'JVC Everio GZ-R460',
    rating: 4.7,
    features: 'Videocámara, Full HD, resistente al agua',
    normalPrice: '$740.000',
    discountedPrice: '$626.000',
    category: 'Video'
  }
];

export const PLPVideo = () => {
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
          <FilterBoxVideo />
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