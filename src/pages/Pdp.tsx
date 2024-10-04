import { useLocation, useParams } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import { ProductDetail } from "../components/ProductDetail";
import { usePdpProduct } from "../hooks/PdpProduct";
import { Main } from "../layout/Main";
import { Loading } from "../components/Loading";
import { BreadcrumbLinks, FeaturedPdpB } from "../utils/BreadcrumbData";
import { Breadcrumb } from "../components/Breadcrumb";
import { ProductEspecification } from "../components/ProductEspecification";
import { InterestedProductList } from "../components/InterestProductList";


type pdpProps={
  id:number;
  category:string;
  op:boolean;
}

export function Pdp(){
   const {name}=useParams(); 
    const location=useLocation();
   var {id,category,op}:pdpProps= location.state;
 if(name!==undefined){
  if(op){
    FeaturedPdpB(name);
   }else{
     BreadcrumbLinks[2]={id:3,name:name,link:"#"}
   }
 }
 

 const { data: product, error, isLoading }=usePdpProduct({productId:id,category:category,op:op});

  
  
  if (isLoading) {
    return (
      <>
      <Breadcrumb blinks={BreadcrumbLinks} />
      <Loading/>
      </>
    );
  }

  if (error) {
    return (
      <>
      <Breadcrumb blinks={BreadcrumbLinks} />
      <ErrorMessage message={`Error al obtener los productos: ${error.message}`} />
      </> // Usa el componente de error
    );
  }

   

   if(product!==undefined){
    return (
      <Main>
          <Breadcrumb blinks={BreadcrumbLinks} />
          <section className="font-poppins mx-auto my-0 py-5 px-0 w-11/12 max-w-7xl flex flex-col">
          <h1 className=" text-3xl text-blue-950 font-semibold max-[768px]:text-center 
          xl:text-4xl xl:text-left">{name}</h1>
          <ProductDetail name={product.name} image={product.img} description={product.description}/>
          <ProductEspecification details={product.details}/>
          <InterestedProductList id={product.id} category={category}/>
          
          </section>
      </Main>
     );
   }
}