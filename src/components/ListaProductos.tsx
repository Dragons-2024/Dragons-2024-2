// ListaProductosDestacados.tsx
import React from 'react';
import ProductoDestacado from './DesProductos';

const productosDestacados = [
  {
    id: 1,
    nombre: "Portátil Lenovo ThinkPad X1 Carbon",
    precioNormal: 3599900,
    precioDescuento: 2879920,
    descuento: "20",
    imagen: "/Dragons-2024-2/src/assets/productos-destacados/destacado1.jpeg",
  },
  {
    id: 2,
    nombre: "MacBook Air M1",
    precioNormal: 4999900,
    precioDescuento: 4199920,
    descuento: "15",
    imagen: "/Dragons-2024-2/src/assets/productos-destacados/destacado2.png",
  },

  {
    id: 3,
    nombre: "MacBook Air M1",
    precioNormal: 4999900,
    precioDescuento: 4199920,
    descuento: "15",
    imagen: "/img/productos-destacados/destacado2.j",
  },

  {
    id: 4,
    nombre: "MacBook Air M1",
    precioNormal: 4999900,
    precioDescuento: 4199920,
    descuento: "15",
    imagen: "/img/productos-destacados/destacado2.j",
  },

  {
    id: 5,
    nombre: "MacBook Air M1",
    precioNormal: 4999900,
    precioDescuento: 4199920,
    descuento: "15",
    imagen: "/img/productos-destacados/destacado2.j",
  },
  // Más productos...
];


const ListaProductosDestacados: React.FC = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {productosDestacados.map((producto) => (
          <ProductoDestacado key={producto.id} {...producto} />
        ))}
      </div>
    );
  };

export default ListaProductosDestacados;
