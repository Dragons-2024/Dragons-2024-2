

type ProductDetailProps={
    name:string;
    image:string;
    description:string;
}

export function ProductDetail({name,image,description}:ProductDetailProps){
   return(
    <section className="flex flex-wrap gap-10 lg:gap-20 mt-5 items-center max-[768px]:flex-col max-[768px]:text-center ">
        <figure className="flex-1 mx-0 my-auto max-w-md ">
           <img className="w-full h-auto border-2 border-[#ddd] border-solid rounded-lg" 
           src={image} alt={name} />
        </figure>
        <div className="text-base leading-relaxed flex-1 text-center max-w-2xl lg:pt-8">
            <p className="mb-20 text-base leading-relaxed flex-1">
            {description}
            </p>
        </div>
    </section>
   );
}