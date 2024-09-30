// src/routes/routes.tsx
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { ProductListPLP } from '../components/ProductListPLP';
import { Pdp } from "../pages/Pdp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>404 Not Found</div>, 
  },
  {
    path: "/plp2",
    element: <ProductListPLP />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path:"/pdp/:name",
    element:<Pdp/>,
    errorElement: <div>404 Not Found</div>,
  }
], {
  basename: "/Dragons-2024-2"
});