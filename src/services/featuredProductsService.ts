import { axiosApi } from '../api/axios';
import { FeaturedProductsListProps } from '../core/interfaces/FeaturedProductsInter';

export const getFeaturedProducts = async (): Promise<FeaturedProductsListProps['products']> => {
  const response = await axiosApi.get('https://dragons-2024-2-api.onrender.com/FeaturedProducts');
  return response.data;
};