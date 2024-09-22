
import { imgspropstype, PromotionalImage } from "./PromotionalImage";

export function PromotionalImages({imgs}:imgspropstype){
    return(
        <>
        {imgs.map((image)=>(
            <PromotionalImage key={image.id} img={image.img} alt={image.alt} />
          ))}
          </>
    );
}
