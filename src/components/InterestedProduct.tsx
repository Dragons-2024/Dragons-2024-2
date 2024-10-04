

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
    <div className="font-poppins bg-white rounded-lg text-center shadow-lg flex flex-col  justify-between flex-grow min-h-[400px] w-full sm:w-[300px] md:w-[250px] lg:w-[300px] mx-auto transition-transform transform hover:scale-105 hover:shadow-xl">
    <div >
      <img 
        src={image} 
        alt={name} 
        className="w-full h-auto rounded-md mb-4 object-cover sm:h-[200px] md:h-[180px] lg:h-[200px]" 
      />
      <h2 className="text-lg sm:text-xl font-bold mt-2">{name}</h2>
      <p className="text-sm sm:text-base text-gray-500 line-through">{price}</p>
      <p className="text-base sm:text-lg text-blue-600 font-bold">{discountprice}</p>
    </div>
    <button className="bg-yellow-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full text-sm sm:text-base mt-auto w-full sm:w-[200px] mx-auto">
      Agregar al Carrito
    </button>
  </div>
  </Link>
  
  );
};
