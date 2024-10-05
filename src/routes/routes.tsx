import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Cart } from "../components/Cart";
import { Pdp } from "../pages/Pdp";
import { ProductListPLP } from '../components/plpComponent';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/Cart",
    element: <Cart />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/plp/:category",
    element: <ProductListPLP />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/pdp/:name",
    element: <Pdp />,
    errorElement: <div>404 Not Found</div>,
  }
], {
  basename: "/Dragons-2024-2"
});
