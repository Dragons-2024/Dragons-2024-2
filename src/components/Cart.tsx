import { useState } from "react";
import { Main } from "../layout/Main";

// Interfaz para los productos del carrito
interface Product {
  id: number;
  name: string;
  image: string;
  quantity: number;
  price: number;
}

// Interfaz del Carrito de Compras
interface Cart {
  products: Product[];
  subtotal: number;
  taxes: number;
  shipping: number;
  discount: number;
}

// Estado inicial del carrito de compras
const initialCart: Cart = {
  products: [
    {
      id: 1,
      name: "Portátil Lenovo ThinkPad X1 Carbon",
      image:
        "https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727489877/destacado1_hpq1bc.jpg",
      quantity: 1,
      price: 2879920,
    },
    {
      id: 2,
      name: "Portátil Gamer HP Spectre x360",
      image:
        "https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727489877/destacado2_mqnvaz.png",
      quantity: 1,
      price: 3199000,
    },
    {
      id: 3,
      name: "Portátil Dell XPS 13",
      image:
        "https://res.cloudinary.com/dgdcjwkyx/image/upload/v1727489877/destacado3_g2yk2v.png",
      quantity: 1,
      price: 5903100,
    },
  ],
  subtotal: 0,
  taxes: 0,
  shipping: 10000, // Costo de envío simulado
  discount: 5000, // Descuento simulado
};

export const Cart = () => {
  const [cart, setCart] = useState<Cart>(initialCart);
  const [shippingMethod, setShippingMethod] = useState<string>("Express");

  // Función para cambiar la cantidad de productos
  const handleQuantityChange = (id: number, newQuantity: number) => {
    setCart((prevCart) => ({
      ...prevCart,
      products: prevCart.products.map((product) =>
        product.id === id ? { ...product, quantity: newQuantity } : product
      ),
    }));
  };

  // Función para eliminar un producto
  const handleRemoveProduct = (id: number) => {
    setCart((prevCart) => ({
      ...prevCart,
      products: prevCart.products.filter((product) => product.id !== id),
    }));
  };

  // Calcular el subtotal dinámicamente
  const calculateSubtotal = () => {
    return cart.products.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
  };

  // Calcular total
  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const taxes = subtotal * 0.15; // Impuesto simulado al 15%
    return subtotal + taxes + cart.shipping - cart.discount;
  };

  return (
    <Main>
      <section className="mx-8">
        <section>
          <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-600 mb-8">
            Carrito de Compras
          </h1>
          <span className="text-blue-800">
            <a href="/" className="hover:underline">
              Inicio
            </a>{" "}
            &gt; <span>Carrito</span>
          </span>
        </section>

        {/* Selección de método de envío general */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-blue-600 mb-6">
            Método de envío
          </h2>
          <div className="flex space-x-4 text-lg">
            <label>
              <input
                type="radio"
                name="shipping"
                checked={shippingMethod === "Estandar"}
                onChange={() => setShippingMethod("Estandar")}
                className="mr-2"
              />
              Estandar
            </label>
            <label>
              <input
                type="radio"
                name="shipping"
                checked={shippingMethod === "Express"}
                onChange={() => setShippingMethod("Express")}
                className="mr-2"
              />
              Express
            </label>
            <label>
              <input
                type="radio"
                name="shipping"
                checked={shippingMethod === "Programado"}
                onChange={() => setShippingMethod("Programado")}
                className="mr-2"
              />
              Programado
            </label>
          </div>
        </section>

        <div className="flex flex-col md:flex-row items-start mb-4 md:space-x-10 mt-8">
          {/* Listado de productos */}
          <section className="w-full md:w-3/5 bg-white rounded-lg space-y-2">
            {cart.products.map((product) => (
              <div
                key={product.id}
                className="grid grid-cols-2 gap-4  bg-white border rounded-lg border-blue-600 p-4 "
              >
                <figure className="col-span-1 flex justify-center">
                  <img
                    className="max-h-40 max-w-full object-contain mb-4 rounded-lg"
                    src={product.image}
                    alt={product.name}
                  />
                </figure>
                <div className="flex flex-col justify-center">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    {product.name}
                  </h3>

                  <div className="flex flex-col justify-center space-y-4">
                    <div className="md:flex items-center md:space-x-4">
                      <label className="flex text-lg  items-center">
                        Cantidad:
                        <select
                          value={product.quantity}
                          onChange={(e) =>
                            handleQuantityChange(
                              product.id,
                              Number(e.target.value)
                            )
                          }
                          className="ml-2 w-16 border border-gray-400 rounded"
                        >
                          {[1, 2, 3, 4, 5].map((qty) => (
                            <option key={qty} value={qty}>
                              {qty}
                            </option>
                          ))}
                        </select>
                      </label>
                      <button
                        onClick={() => handleRemoveProduct(product.id)}
                        className="p-2 text-lg border border-gray-400 rounded hover:bg-red-500 hover:text-white"
                      >
                        Eliminar
                      </button>
                    </div>
                    <div>
                      {/* Precio total basado en la cantidad */}
                      <p className="text-blue-900 text-lg font-semibold">
                        Precio: $
                        {(product.price * product.quantity).toLocaleString(
                          "es-ES"
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Resumen de compra */}
          <section className="mt-8 mb-2 md:mt-0 w-full md:w-2/5 border p-4 border-blue-600 rounded-lg bg-white">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Resumen de compra
            </h2>
            <div>
              <p className="text-lg">
                Subtotal: ${calculateSubtotal().toLocaleString("es-ES")}
              </p>
              <p className="text-lg">
                Impuestos (15%): $
                {(calculateSubtotal() * 0.15).toLocaleString("es-ES")}
              </p>
              <p className="text-lg">
                Envío: ${cart.shipping.toLocaleString("es-ES")}
              </p>
              <p className="text-lg">
                Descuento: -${cart.discount.toLocaleString("es-ES")}
              </p>
              <hr className="my-2" />
              <p className="text-xl font-bold">
                Total: ${calculateTotal().toLocaleString("es-ES")}
              </p>
              <hr className="my-2" />
              <button className="p-2 w-full text-lg font-bold border bg-blue-600  rounded hover:bg-blue-800 text-white">
                Pagar
              </button>
            </div>
          </section>
        </div>
      </section>
    </Main>
  );
};
