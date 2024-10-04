

type ProductDetailProps={
    name:string;
    image:string;
    description:string;
}

export function ProductDetail({name,image,description}:ProductDetailProps){
   return(
    <section className="flex flex-wrap gap-20 my-10 items-center max-[768px]:flex-col 
    max-[768px]:text-center max-[768px]:gap-10">
        <figure className="flex-1 mx-0 my-auto lg:max-w-lg ">
           <img className="w-full h-auto border-2 border-[#ddd] border-solid rounded-lg" 
           src={image} alt={name} />
        </figure>
        <div className="text-base leading-relaxed flex-1 text-center max-w-2xl ">
            <p className="text-base leading-relaxed flex-1">
            {description}
            </p>
        </div>
    </section>
   );
}