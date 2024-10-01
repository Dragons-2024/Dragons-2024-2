import { useLocation, useParams } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import { ProductDetail } from "../components/ProductDetail";
import { usePlpProduct } from "../hooks/PdpProduct";
import { Main } from "../layout/Main";


export function Pdp(){
    const {name}=useParams(); 
    const location=useLocation();
  const id:number= location.state;  
  const { data: product, error, isLoading } = usePlpProduct(id);
  
  if (isLoading) {
    return (
      <div className="font-poppins flex items-center justify-center h-full">
        <div className="text-4xl font-bold text-gray-600 animate-bounce">Cargando...</div>
      </div>
    );
  }

  if (error) {
    return (
      <ErrorMessage message={`Error al obtener los productos: ${error.message}`} /> // Usa el componente de error
    );
  }

   

   return (
    <Main>
        <div className="mx-auto my-0 py-20 px-0 w-11/12 max-w-7xl flex flex-col">
        <h1 className="text-3xl text-blue-950 font-semibold max-[768px]:text-center 
        xl:text-4xl xl:text-left">{name}</h1>
        <ProductDetail name={product.name} img={product.image} description={product.description}/>
        </div>
    </Main>
   );
}