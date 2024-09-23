// src/routes/routes.tsx
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { ProductListPLP } from '../components/ProductListPLP';

export const router = createBrowserRouter([
  {
    path: "/Dragons-2024-2/",
    element: <Home />,
    errorElement: <div>404 Not Found</div>, 
  },
  {
    path: "/Dragons-2024-2/Plp",
    element: <ProductListPLP />,
    errorElement: <div>404 Not Found</div>,
  }
]);