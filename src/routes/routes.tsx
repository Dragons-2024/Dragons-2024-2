import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { ProductListPLP } from '../components/intentokevin';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/plp/:category", // Añadido :category como parámetro
    element: <ProductListPLP />,
    errorElement: <div>404 Not Found</div>,
  },
], {
  basename: "/Dragons-2024-2"
});
