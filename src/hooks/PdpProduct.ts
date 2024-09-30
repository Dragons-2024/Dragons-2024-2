import { useQuery } from '@tanstack/react-query';
import { getPlpProduct } from '../services/PdpService';

export const usePlpProduct = (productId: number) => {
  return useQuery({
    queryKey: ['PlpProduct', productId], // Agregar el productId a la clave de consulta
    queryFn: ()=>getPlpProduct(productId),
  });
};