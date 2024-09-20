import { PromotionalImage } from "../components/PromotionalImages";
import { Main } from "../layout/Main";
import FeaturedProductsList from "../components/ListProducts"; // Ruta correcta para el componente
import { featuredProducts } from "../utils/DataProducts";
import { PromoImages } from "../utils/PromotionalImgData";


export function Home() {
  return (
    <Main>
      <section>
        <section className="w-full h-auto overflow-hidden">
        {PromoImages.map((image)=>(
            <PromotionalImage key={image.id} img={image.img} alt={image.alt} />
          ))}
        </section>
      </section>
      <section className="mb-8">
        <h2 className="px-5 py-5 font-poppins text-2xl text-center font-semibold mb-4">Productos Destacados</h2>
        <FeaturedProductsList products={featuredProducts} />
        </section>
    </Main>
  );
}