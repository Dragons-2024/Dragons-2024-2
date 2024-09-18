import React from 'react';

interface ProductoDestacadoProps {
  imagen: string;
  nombre: string;
  precioNormal: number;
  precioDescuento: number;
  descuento: string;
}


const ProductoDestacado: React.FC<ProductoDestacadoProps> = ({ imagen, nombre, precioNormal, precioDescuento, descuento }) => {
  return (
    <div className="font-poppins bg-white p-4 rounded-lg text-center shadow-lg flex flex-col justify-between min-h-[300px]">
    <div>
      <img src={imagen} alt={nombre} className="font-poppins font-bold w-full h-auto rounded-md mb-4" />
      <h2 className="text-poppins font-bold text-xl mt-2">{nombre}</h2>
      <p className="font-poppins text-base text-gray-500 line-through">${precioNormal.toLocaleString()}</p>
      <p className="font-poppins text-lg text-blue-600 font-bold">${precioDescuento.toLocaleString()} <span className="text-blue-400">-{descuento}%</span></p>
    </div>
    <button className="font-poppins bg-yellow-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full text-sm mt-auto w-[200px] mx-auto">
      Agregar al Carrito
    </button>
  </div>
  
  );
};

export default ProductoDestacado;
