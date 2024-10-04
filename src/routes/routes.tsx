// src/routes/routes.tsx
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { ProductListPLP } from '../components/ProductListPLP';
import { PLPTVS } from '../components/PLPTVS';
import { PLPAudio } from '../components/PLPAudio';
import { PLPSmartwatches } from '../components/PLPSmartwatches';
import { PLPBaño } from '../components/PLPBaño'; // Asegúrate de que la ruta sea correcta
import { PLPCocina } from '../components/PLPCocina';
import { PLPComedores } from '../components/PLPComedores';
import { PLPSalas } from '../components/PLPSalas';
import { PLPTabletas } from '../components/PLPTabletas';
import { PLPCelulares } from '../components/PLPCelulares';
import { PLPLavadorasSecadoras } from '../components/PLPLavadorasSecadoras';
import { PLPClimatizacion } from '../components/PLPClimatizacion';
import { PLPCamaras } from '../components/PLPCamaras';
import { PLPImpresion } from '../components/PLPImpresion';
import { PLPVideo } from '../components/PLPVideo';
import { PLPRefrigeracion } from '../components/PLPRefrigeracion';
import { Cart } from "../components/Cart";
import { Pdp } from "../pages/Pdp";

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
    path: "/plp2",
    element: <ProductListPLP />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/plp-tvs",
    element: <PLPTVS />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/plp-audio",
    element: <PLPAudio />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/plp-video",
    element: <PLPVideo />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/plp-impresion",
    element: <PLPImpresion />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/plp-camaras",
    element: <PLPCamaras />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/plp-climatizacion",
    element: <PLPClimatizacion />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/plp-refrigeracion",
    element: <PLPRefrigeracion />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/plp-lavadoras-secadoras",
    element: <PLPLavadorasSecadoras />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/plp-celulares",
    element: <PLPCelulares />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/plp-tabletas",
    element: <PLPTabletas />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/plp-smartwatches",
    element: <PLPSmartwatches />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/plp-salas",
    element: <PLPSalas />,
    errorElement: <div>404 Not Found</div>,
  } ,
  {
    path: "/plp-comedores",
    element: <PLPComedores />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/plp-cocina",
    element: <PLPCocina />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/plp-bano",
    element: <PLPBaño />,
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