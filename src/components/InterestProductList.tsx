import ErrorMessage from "../components/ErrorMessage";
import {Loading} from "../components/Loading";
import {useProductsBySubcategory} from "../hooks/useProducts";
import { InterestedProduct } from "./InterestedProduct";
import {CategoryProducts} from "../services/subcategories"

function selectproducts(id:number,array:CategoryProducts[]){
  let newarray:CategoryProducts[]=[];
  let c:number;
  c=0;
  for(let i:number=0;c<4;i++){
     if(array[i].id!==id){
        newarray[c]=array[i];
        c++;
     }
    
  }
  return newarray;
}

type InterestedProductList={
    id:number;
    category:string;
}

export function InterestedProductList( {id,category}:InterestedProductList){
    const { data: products, error, isLoading }= useProductsBySubcategory(category);  

   
   
   if (isLoading) {
    return (
      <>
      <Loading/>
      </>
    );
  }

  if (error) {
    return (
      <>
      <ErrorMessage message={`Error al obtener los productos: ${error.message}`} />
      </> // Usa el componente de error
    );
  }
  if(products!==undefined){
    const SelectedProducts=(selectproducts(id,products));
    console.log(SelectedProducts);
    return(    
        <section className="mx-auto my-10 lg:my-5 w-full">
            <h2 className="text-blue-800 font-semibold mb-10 max-[769px]:text-center">Te puede interesar</h2>
        <div className="flex justify-center gap-3 w-11/12 mx-auto max-[1251px]:flex-wrap">
            {SelectedProducts?.map((product)=>(
                <InterestedProduct key={product.id} id={product.id} image={product.img} name={product.name}
                price={product.normalPrice} discountprice={product.discountedPrice} slug={product.slug}
                category={category}/>
            ))}
        </div>
        </section>
    );
}

}