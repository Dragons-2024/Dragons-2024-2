type PromoImg ={
   img:string;
   alt:string;
}

export function PromotionalImage({img,alt}:PromoImg){
    return(
        <img className="w-full h-auto object-cover max-w-full" src={img} alt={alt} />
    );
}