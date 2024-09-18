import { Main } from "../layout/Main";
import ListaProductosDestacados from "../components/ListaProductos";

export function Home() {
  return (
    <Main>
      <section>
        <h2>Home</h2>
        <p>Welcome to the Dragons website.</p>
      </section>
      <section className="mb-8">
        <h2 className="font-poppins text-2xl font-semibold mb-4">Productos Destacados</h2>
        <ListaProductosDestacados />
      </section>
    </Main>
  );
}