// src/routes/routes.tsx
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/Dragons-2024-2/",
    element: <Home />,
    errorElement: <div>404 Not Found</div>, // Agregar un elemento de error para manejar errores 404
  },
  // Agrega más rutas aquí si es necesario
]);