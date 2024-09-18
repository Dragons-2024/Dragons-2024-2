import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";

const Base = '/Dragons-2024-2/'
export const router = createBrowserRouter([
  {
    path: Base,
    element: <Home />,
  }
]);