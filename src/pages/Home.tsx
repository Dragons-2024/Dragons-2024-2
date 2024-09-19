import { Main } from "../layout/Main";
import ListaProductosDestacados from "../components/ListaProductos";
import { promo_images } from "../utils/promotional_img_data";

export function Home() {
  return (
    <Main>
      <section>
        <h2>Home</h2>
        <p>Welcome to the Dragons website.</p>
        <section className="w-full h-auto overflow-hidden">
          {promo_images.map((image)=>(
            <img key={image.id} src={image.img} alt={image.alt} />
          ))}
        </section>
      </section>
      <section className="mb-8">
        <h2 className="font-poppins text-2xl font-semibold mb-4">Productos Destacados</h2>
        <ListaProductosDestacados />
      </section>
    </Main>
  );
}