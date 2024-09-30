import { axiosApi } from '../api/axios';
import { FeaturedProductsListProps } from '../core/interfaces/FeaturedProductsInter';

export const getPlpProduct = async (id:number): Promise<FeaturedProductsListProps['products']> => {
  const response = await axiosApi.get(`http://localhost:3000/featuredproducts/${id}`);
  return response.data;
};