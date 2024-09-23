import { Main } from "../layout/Main";
import FeaturedProductsList from "../components/ListProducts"; // Ruta correcta para el componente
import { featuredProducts } from "../utils/DataProducts";
import { PromotionalImages } from "../components/PromoImages";
import { PromoImages, NewPromoImage } from "../utils/PromotionalImgData";
import { Breadcrumb } from "../components/Breadcrumb";
import { BreadcrumbLinks } from "../utils/BreadcrumbData";


export function Home() {
  return (
    <Main>
      <Breadcrumb blinks={BreadcrumbLinks}/>
      <section>
        <section className="w-full h-auto overflow-hidden">
        <PromotionalImages imgs={PromoImages}/>
        </section>
      </section>
      <section className="mb-8">
        <h2 className="px-5 py-5 font-poppins text-2xl text-center font-semibold mb-4">Productos Destacados</h2>
        <FeaturedProductsList products={featuredProducts} />
        </section>
        <section className="mt-8">
        <PromotionalImages imgs={[NewPromoImage]} /> 
      </section>
    </Main>
  );
}