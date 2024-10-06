import React from 'react';
import star from '../assets/star.svg'; // Asegúrate de que la ruta sea correcta
import { Link } from 'react-router-dom';
import { CategoryProducts } from '../services/categoriesService';


const ProductItem: React.FC<CategoryProducts> = ({id, img, name, rating, features, normalPrice, discountedPrice,slug,category }) => {
  return (
    <Link to={slug} state={{id:id,category:category,op:false}}>
    <div
      className="font-poppins product-item border border-gray-200 rounded p-4 mb-4 transition-shadow duration-300 hover:shadow-lg flex flex-col items-center text-center bg-white"
    >
      
        <img src={img} alt={name} className="max-h-48 max-w-full object-contain mb-4 mx-auto" />
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-lg rating flex items-center justify-center mb-2">
          <img src={star} alt={`${rating} estrellas`} className="w-4 h-4 mr-1" /> {rating}
        </p>
        <p className="text-lg features mb-2">{features}</p>
        <p className="text-lg price mb-2">
          <span className="normal-price line-through text-gray-500 mr-2">{normalPrice}</span>
          <span className="discounted-price text-blue-500 font-bold">{discountedPrice}</span>
        </p>
        <button className="bg-yellow-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full text-sm sm:text-base mt-auto w-full sm:w-[200px] mx-auto">
          Añadir al Carrito
        </button>
      
    </div>
    </Link>
  );
};

export default ProductItem;