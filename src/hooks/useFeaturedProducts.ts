import { useQuery } from '@tanstack/react-query';
import { getFeaturedProducts } from '../services/featuredProductsService';

export const useFeaturedProducts = () => {
  return useQuery({
    queryKey: ['featuredProducts'],
    queryFn: getFeaturedProducts,
  });
};
