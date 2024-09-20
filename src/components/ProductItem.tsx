import React from 'react';

interface ProductItemProps {
  img: string;
  name: string;
  rating: number;
  features: string;
  normalPrice: string;
  discountedPrice: string;
}

const ProductItem: React.FC<ProductItemProps> = ({ img, name, rating, features, normalPrice, discountedPrice }) => {
  return (
    <div className="border border-gray-200 rounded-md p-4 mb-4 transition-shadow duration-300 flex flex-col items-center text-center">
      <img
        src={img}
        alt={name}
        className="max-h-full max-w-[200px] object-contain mb-4"
      />
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <div className="flex items-center justify-center mb-2">
        <i className="fas fa-star text-yellow-500"></i>
        <span className="ml-1 text-lg">{rating}</span>
      </div>
      <p className="text-gray-700 mb-2">{features}</p>
      <div className="flex items-center justify-center mb-4">
        <span className="text-gray-500 line-through mr-2">{normalPrice}</span>
        <span className="text-blue-500 text-xl font-bold">{discountedPrice}</span>
      </div>
      <button className="bg-yellow-500 text-white py-2 px-4 rounded-full hover:bg-yellow-600">
        Añadir al Carrito
      </button>
    </div>
  );
};

export default ProductItem;