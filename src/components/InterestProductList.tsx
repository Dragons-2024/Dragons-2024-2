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
        <section className="mx-10">
            <h2 className="text-blue-800 font-semibold mb-10">Te puede interesar</h2>
        <div className="flex w-full justify-center gap-2 mx-4">
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