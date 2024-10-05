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

import { ProductListPLP } from '../components/intentokevin';

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
], {
  basename: "/Dragons-2024-2"
});
