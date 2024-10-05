import React, { useEffect } from 'react';
import { Main } from '../layout/Main';
import { CategoryLink, plpBreadCrumb } from '../utils/BreadcrumbData';
import promo4 from '../assets/Promotional_Images/promo4.png';
import { useParams } from 'react-router-dom';
import { Breadcrumb } from './Breadcrumb';
import { PlpImages } from './plpimages';

export const ProductListPLP = () => {
  const { category } = useParams<{ category: string }>();

  useEffect(() => {
    if (!category) {
      console.error('Category is undefined');
      return;
    }
    const name = category.charAt(0).toUpperCase() + category.slice(1);
    CategoryLink({ name, link: `/${category}` });
    plpBreadCrumb({ name, link: `/${category}` });
  }, [category]);

  return (
    <Main>
      {category ? (
        <>
          <Breadcrumb blinks={[{ id: 1, name: category, link: `/${category}` }]} />
          <PlpImages category={category} />
          <div className="w-full p-4">
            <img src={promo4} alt="Promotional Banner" className="w-full h-auto rounded-lg" />
          </div>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-red-500">No se encontró la categoría.</h2>
          <p>Por favor, verifica la URL o vuelve a la página principal.</p>
        </div>
      )}
    </Main>
  );
};
