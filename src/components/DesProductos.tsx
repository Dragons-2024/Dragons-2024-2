import React from 'react';
import { Link } from 'react-router-dom';


interface ProductoDestacadoProps {
  imagen: string;
  nombre: string;
  precioNormal: number;
  precioDescuento: number;
  descuento: string;
  slug: string;
}


const ProductoDestacado: React.FC<ProductoDestacadoProps> = ({ imagen, nombre, precioNormal, precioDescuento, descuento, slug }) => {
  return (
    <Link to={`${slug}`} className="no-underline">
    <div className="font-poppins bg-white p-4 rounded-lg text-center shadow-lg flex flex-col  justify-between flex-grow min-h-[400px] w-full sm:w-[300px] md:w-[250px] lg:w-[300px] mx-auto transition-transform transform hover:scale-105 hover:shadow-xl">
    <div >
      <img 
        src={imagen} 
        alt={nombre} 
        className="w-full h-auto rounded-md mb-4 object-cover sm:h-[200px] md:h-[180px] lg:h-[200px]" 
      />
      <h2 className="text-lg sm:text-xl font-bold mt-2">{nombre}</h2>
      <p className="text-sm sm:text-base text-gray-500 line-through">${precioNormal.toLocaleString()}</p>
      <p className="text-base sm:text-lg text-blue-600 font-bold">${precioDescuento.toLocaleString()} <span className="text-blue-400">-{descuento}%</span></p>
    </div>
    <button className="bg-yellow-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full text-sm sm:text-base mt-auto w-full sm:w-[200px] mx-auto">
      Agregar al Carrito
    </button>
  </div>
  </Link>
  
  );
};

export default ProductoDestacado;
