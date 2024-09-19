// ListaProductosDestacados.tsx
import React from 'react';
import ProductoDestacado from '../components/DesProductos';

const productosDestacados = [
  {
    id: 1,
    nombre: "Portátil Lenovo ThinkPad X1 Carbon",
    precioNormal: 3599900,
    precioDescuento: 2879920,
    descuento: "20",
    imagen: "/Dragons-2024-2/src/assets/productos-destacados/destacado1.jpeg",
    slug: "/Dragons-2024-2/",
  },
  {
    id: 2,
    nombre: "Portátil Gamer HP Spectre x360 ",
    precioNormal: 6499000,
    precioDescuento: 3199000,
    descuento: "50",
    imagen: "/Dragons-2024-2/src/assets/productos-destacados/destacado2.png",
    slug: "/Dragons-2024-2/",
  },

  {
    id: 3,
    nombre: "Portátil Dell XPS 13",
    precioNormal: 6559000,
    precioDescuento: 5903100,
    descuento: "10",
    imagen: "/Dragons-2024-2/src/assets/productos-destacados/destacado3.png",
    slug: "/Dragons-2024-2/",
  },

  {
    id: 4,
    nombre: "Portátil Apple MacBook Air M1",
    precioNormal: 3399000,
    precioDescuento: 3059100,
    descuento: "10",
    imagen: "/Dragons-2024-2/src/assets/productos-destacados/destacado4.png",
    slug: "/Dragons-2024-2/",
  },

  {
    id: 5,
    nombre: "Portátil Asus ZenBook 14",
    precioNormal: 4999900,
    precioDescuento: 3999200,
    descuento: "20",
    imagen: "/Dragons-2024-2/src/assets/productos-destacados/destacado5.png",
    slug: "/Dragons-2024-2/",
  },

  {
    id: 6,
    nombre: "Portátil Acer Swift 3",
    precioNormal: 3039900,
    precioDescuento: 2431920,
    descuento: "20",
    imagen: "/Dragons-2024-2/src/assets/productos-destacados/destacado6.png",
    slug: "/Dragons-2024-2/",
  },

  {
    id: 7,
    nombre: "Portátil Microsoft Surface Laptop 4",
    precioNormal: 8993900,
    precioDescuento: 8094510,
    descuento: "10",
    imagen: "/Dragons-2024-2/src/assets/productos-destacados/destacado7.png",
    slug: "/Dragons-2024-2/",
  },

  {
    id: 8,
    nombre: "Portátil Razer Blade 15",
    precioNormal: 23380000,
    precioDescuento: 11690000,
    descuento: "50",
    imagen: "/Dragons-2024-2/src/assets/productos-destacados/destacado8.png",
    slug: "/Dragons-2024-2/",
  },

  {
    id: 9,
    nombre: "Portátil HP Envy x360",
    precioNormal: 3900400,
    precioDescuento: 3705380,
    descuento: "5",
    imagen: "/Dragons-2024-2/src/assets/productos-destacados/destacado9.png",
    slug: "/Dragons-2024-2/",
  },

  {
    id: 10,
    nombre: "Portátil LG Gram 17",
    precioNormal: 7140000,
    precioDescuento: 6426000,
    descuento: "10",
    imagen: "/Dragons-2024-2/src/assets/productos-destacados/destacado10.png",
    slug: "/Dragons-2024-2/",
  },

  {
    id: 11,
    nombre: "Portátil ASUS ROG Zephyrus G16",
    precioNormal: 14999000,
    precioDescuento: 10499000,
    descuento: "30",
    imagen: "/Dragons-2024-2/src/assets/productos-destacados/destacado11.png",
    slug: "/Dragons-2024-2/",
  },

  {
    id: 12,
    nombre: "Portátil Asus ROG Strix G16",
    precioNormal: 11499000,
    precioDescuento: 8899000,
    descuento: "25",
    imagen: "/Dragons-2024-2/src/assets/productos-destacados/destacado12.png",
    slug: "/Dragons-2024-2/",
  },

];


const ListaProductosDestacados: React.FC = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 p-4">
        {productosDestacados.map((producto) => (
          <ProductoDestacado key={producto.id} {...producto} />
        ))}
      </div>
    );
  };

export default ListaProductosDestacados;
