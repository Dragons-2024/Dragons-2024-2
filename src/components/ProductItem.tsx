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
    <div className="border border-gray-300 rounded-lg p-6 mb-6 transition-shadow duration-300 hover:shadow-lg bg-white w-full max-w-[900px] flex flex-col items-center">
      <img
        src={img}
        alt={name}
        className="h-48 w-48 object-contain mb-4"
      />
      <div className="flex flex-col justify-between items-center text-center w-full">
        <h2 className="text-2xl font-semibold mb-2">{name}</h2>
        <div className="flex items-center text-yellow-500 mb-2">
          <i className="fas fa-star"></i>
          <span className="ml-2 text-lg">{rating}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{features}</p>
        <div className="flex items-center mb-4">
          <span className="text-gray-500 line-through text-sm mr-4">{normalPrice}</span>
          <span className="text-blue-600 text-2xl font-bold">{discountedPrice}</span>
        </div>
        <button className="bg-yellow-500 text-white py-2 px-6 rounded-full hover:bg-yellow-600 focus:outline-none">
          Añadir al Carrito
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
