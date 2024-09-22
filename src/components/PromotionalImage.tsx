type PromoImg ={
   img:string;
   alt:string;
}

type PromoImgs ={
   id:number
   img:string;
   alt:string;
}

export type imgspropstype={
    imgs:PromoImgs[];
}

export function PromotionalImage({img,alt}:PromoImg){
    return(
        <img className="w-full h-auto object-cover max-w-full" src={img} alt={alt} />
    );
}