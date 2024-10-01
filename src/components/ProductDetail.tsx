type detailsprops={
    name:string;
    img:string;
    description:string;
}


export function ProductDetail({name,img,description}:detailsprops){
   return(
    <section className="flex flex-wrap gap-20 mt-5 items-center max-[768px]:flex-col max-[768px]:text-center ">
        <figure className="flex-1 mx-0 my-auto max-w-lg ">
           <img className="w-full h-auto border-2 border-[#ddd] border-solid rounded-lg" 
           src={img} alt={name} />
        </figure>
        <div className="text-base leading-relaxed flex-1 text-center max-w-2xl">
            <p className="mb-20 text-base leading-relaxed flex-1">
            {description}
            </p>
        </div>
    </section>
   );
}