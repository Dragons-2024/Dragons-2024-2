import React, { useState, useMemo } from 'react';
import ErrorMessage from './ErrorMessage';
import { Loading } from './Loading';
import { useProductsBycategory } from '../hooks/useProducts';
import ProductItem from './ProductItem';
import { CategoryProducts } from '../services/subcategories';

// interface Product {
//   id: string;
//   img: string;
//   name: string;
//   rating: number;
//   features: string;
//   normalPrice: string;
//   discountedPrice: string;
// }

interface PlpImagesProps {
  category: string;
}

export function PlpImages({ category }: PlpImagesProps) {
  const { data: products = [], isLoading, error } = useProductsBycategory(category);
  const [sortCriteria, setSortCriteria] = useState('rating');

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortCriteria(event.target.value);
  };

  const sortedProducts = useMemo(() => {
    return [...products].sort((a, b) => {
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
  }, [products, sortCriteria]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message={`Error al obtener los productos: ${error.message}`} />;
  }

  return (
    <>
      <div className="list-header flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <span className="text-sm md:text-base">Mostrando {sortedProducts.length} resultados de {products.length}</span>
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
        {sortedProducts.map((product: CategoryProducts) => (
          <ProductItem
            key={product.id}
            id={product.id}
            img={product.img}
            name={product.name}
            rating={product.rating}
            features={product.features}
            normalPrice={product.normalPrice}
            discountedPrice={product.discountedPrice}
            slug={product.slug}
            category={category}
          />
        ))}
      </div>
    </>
  );
}
