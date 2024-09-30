import { axiosApi } from '../api/axios';
import { FeaturedProductsListProps } from '../core/interfaces/FeaturedProductsInter';

export const getFeaturedProducts = async (): Promise<FeaturedProductsListProps['products']> => {
  const response = await axiosApi.get('http://localhost:3000/featuredproducts');
  return response.data;
};