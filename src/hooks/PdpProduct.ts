import { useQuery } from '@tanstack/react-query';
import { getPdpProductFeatured, getPdpProductPlp } from '../services/PdpService';

type usePlpProductProps={
 productId:number;
 category:String;
 op:boolean;
}
export const usePdpProduct = ({productId,category,op}:usePlpProductProps) => {
  if (op){
    return useQuery({
      queryKey: ['PdpProduct', productId], // Agregar el productId a la clave de consulta
      queryFn: ()=>getPdpProductFeatured(productId),
    });
  }else{
      return useQuery({
        queryKey: ['PdpProduct', productId,category], // Agregar el productId a la clave de consulta
        queryFn: ()=>getPdpProductPlp({id:productId,category}),
      });
    }
  
};