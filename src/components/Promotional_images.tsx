type promo_img ={
   img:string;
   alt:string;
}

export function Promotional_images({img,alt}:promo_img){
    <img className="w-full h-auto object-cover max-w-full" src={img} alt={alt} />
}