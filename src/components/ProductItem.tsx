import React from 'react';
import star from '../assets/star.svg'; // Importa la imagen SVG

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
    <div className="product-item border border-gray-200 rounded p-4 mb-4 transition-shadow duration-300 hover:shadow-lg flex flex-col items-center text-center">
      <a href="./pdp.html">
        <img src={img} alt={name} className="max-h-48 max-w-full object-contain mb-4" />
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="rating flex items-center justify-center mb-2">
          <img src={star} alt={`${rating} estrellas`} className="w-4 h-4 mr-1" /> {rating}
        </p>
        <p className="features mb-2">{features}</p>
        <p className="price mb-2">
          <span className="normal-price line-through text-gray-500 mr-2">{normalPrice}</span>
          <span className="discounted-price text-blue-500 font-bold">{discountedPrice}</span>
        </p>
        <button className="add-to-cart bg-yellow-500 text-white py-2 px-4 rounded-full transition-colors duration-300 hover:bg-blue-500">
          Añadir al Carrito
        </button>
      </a>
    </div>
  );
};

export default ProductItem;
