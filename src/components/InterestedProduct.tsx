

import { Link } from 'react-router-dom';

type InterestedProduct={
  id:number;
  image:string;
  name:string;
  price:string;
  discountprice:string;
  slug:string;
  category:string;
}

export function InterestedProduct({id,image, name, price, discountprice,slug,category}:InterestedProduct){
  return (
    <Link to={`${slug}`} state={{id:id,category:category,op:false}} className="no-underline">
    <div className="p-5 gap-5 lg:shrink grow bg-white rounded-lg text-center shadow-lg flex flex-col  
    justify-between  sm:w-[300px] md:w-[250px] lg:w-[300px] sm:min-h-[420px]
    transition-transform transform hover:scale-105 hover:shadow-xl">
     <img 
        src={image} 
        alt={name} 
        className="w-9/12 mx-auto h-auto rounded-md object-cover sm:h-[200px] md:h-[180px] lg:h-[200px]" 
      />

<div >
<h2 className="text-lg sm:text-xl font-bold ">{name}</h2>
      <p className="text-sm sm:text-base text-gray-500 line-through">{price}</p>
      <p className="text-base sm:text-lg text-blue-600 font-bold">{discountprice}</p>
</div>
    <button className="bg-yellow-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full text-sm sm:text-base w-full sm:w-[200px] mx-auto">
      Agregar al Carrito
    </button>
  </div>
  </Link>
  
  );
};
