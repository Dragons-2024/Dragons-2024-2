import React from 'react';
import { Link } from 'react-router-dom';
import { FeaturedProductProps } from '../core/interfaces/FeaturedProductsInter';

const FeaturedProduct: React.FC<FeaturedProductProps> = ({ id,img, name, normalPrice, discountPrice, discount, slug}) => {
  return (
    <Link to={`${slug}`} state={{id:id,category:"Computadores",op:true}} className="no-underline">
    <div className="font-poppins bg-white p-4 rounded-lg text-center shadow-lg flex flex-col  justify-between flex-grow min-h-[400px] w-full sm:w-[300px] md:w-[250px] lg:w-[300px] mx-auto transition-transform transform hover:scale-105 hover:shadow-xl">
    <div >
      <img 
        src={img} 
        alt={name} 
        className="w-full h-auto rounded-md mb-4 object-cover sm:h-[200px] md:h-[180px] lg:h-[200px]" 
      />
      <h2 className="text-lg sm:text-xl font-bold mt-2">{name}</h2>
      <p className="text-sm sm:text-base text-gray-500 line-through">${normalPrice.toLocaleString()}</p>
      <p className="text-base sm:text-lg text-blue-600 font-bold">${discountPrice.toLocaleString()} <span className="text-blue-400">-{discount}%</span></p>
    </div>
    <button className="bg-yellow-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full text-sm sm:text-base mt-auto w-full sm:w-[200px] mx-auto">
      Agregar al Carrito
    </button>
  </div>
  </Link>
  
  );
};

export default FeaturedProduct;
