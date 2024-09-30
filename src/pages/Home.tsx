import { Main } from "../layout/Main";
import FeaturedProductsList from "../components/ListProducts"; // Ruta correcta para el componente
//import { featuredProducts } from "../utils/DataProducts";
//import { PromoImages, NewPromoImage } from "../utils/PromotionalImgData";
import {PromotionalImagesContainer } from "../components/PromoImages";
import { Breadcrumb } from "../components/Breadcrumb";
import { BreadcrumbLinks, HomeBreadcrumb } from "../utils/BreadcrumbData";


export function Home() {
  HomeBreadcrumb();
  return (
    <Main>
      <Breadcrumb blinks={BreadcrumbLinks}/>
      <section>
        <section className="w-full h-auto overflow-hidden">
        <PromotionalImagesContainer minId={1} maxId={2} />
        </section>
      </section>
      <section className="mb-8">
        <h2 className="px-5 py-5 font-poppins text-2xl text-center font-semibold mb-4">Productos Destacados</h2>
        <FeaturedProductsList />
        </section>
        <section className="mt-8">
        <PromotionalImagesContainer minId={3} maxId={3} />
      </section>
    </Main>
  );
}