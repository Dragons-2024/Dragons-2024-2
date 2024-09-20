// src/pages/Home.tsx
import React from 'react';
import Main from "../layout/Main";
import { promo_images } from "../utils/promotional_img_data";
import ProductListPLP from '../components/ProductListPLP';
import FilterBox from '../components/FilterBox';
import Breadcrumb from '../components/Breadcrumb';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

export function Home() {
  return (
    <Main>
      <section className="p-4">
        <h2 className="text-2xl font-bold mb-4">Home</h2>
        <p className="mb-4">Welcome to the Dragons website.</p>
        <section className="w-full h-auto overflow-hidden mb-8">
          {promo_images.map((image) => (
            <img key={image.id} src={image.img} alt={image.alt} className="w-full h-auto mb-4" />
          ))}
        </section>
        <Breadcrumb />
        <div className="container mx-auto flex flex-col md:flex-row">
          <FilterBox />
          <div className="md:ml-8 w-full md:w-11/12 lg:w-11/12 xl:w-11/12"> {/* Ajuste de estilo para hacer el contenedor más grande */}
            <ProductListPLP />
          </div>
        </div>
        <Banner />
        <Footer />
      </section>
    </Main>
  );
}