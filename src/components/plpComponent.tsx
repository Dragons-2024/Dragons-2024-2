import { useEffect } from 'react';
import { Main } from '../layout/Main';
import { BreadcrumbLinks, CategoryLink, plpBreadCrumb } from '../utils/BreadcrumbData';
import promo4 from '../assets/Promotional_Images/promo4.png';
import { useParams } from 'react-router-dom';
import { Breadcrumb } from './Breadcrumb';
import { PlpImages } from './plpimages';
import FilterBox from './FilterBox';

export const ProductListPLP = () => {
  const { category } = useParams<{ category: string }>();

    if (category!==undefined) {
      const name = category.charAt(0).toUpperCase() + category.slice(1);
      plpBreadCrumb({ name, link: `/${category}` });
    }
   
 
  return (
    <Main>
      {category ? (
        <>
          <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen">
            <aside className="w-full md:w-1/4 p-4 bg-gray-100 rounded-lg mb-4">
              <FilterBox />
            </aside>
            <section className="w-full md:w-3/4 p-4">
              <Breadcrumb blinks={[{ id: 1, name: category, link: `/${category}` }]} />
              <PlpImages category={category} />
            </section>
          </div>
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
