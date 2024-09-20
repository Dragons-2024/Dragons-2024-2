import { PromotionalImage } from "../components/PromotionalImages";
import { Main } from "../layout/Main";
import { PromoImages } from "../utils/PromotionalImgData";

export function Home() {
  return (
    <Main>
      <section>
        <h2>Home</h2>
        <p>Welcome to the Dragons website.</p>
        <section className="w-full h-auto overflow-hidden">
          {PromoImages.map((image)=>(
            <PromotionalImage img={image.img} alt={image.alt} />
          ))}
        </section>
      </section>
    </Main>
  );
}