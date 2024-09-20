import { Main } from "../layout/Main";
import FeaturedProductsList from "../components/ListProducts"; // Ruta correcta para el componente
import { featuredProducts } from "../utils/DataProducts";
import { promo_images } from "../utils/promotional_img_data";

export function Home() {
  return (
    <Main>
      <section>
        <section className="w-full h-auto overflow-hidden">
          {promo_images.map((image)=>(
            <img key={image.id} src={image.img} alt={image.alt} />
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