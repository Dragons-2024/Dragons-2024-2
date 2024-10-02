import { axiosApi } from '../api/axios';
import { FeaturedProductsListProps } from '../core/interfaces/FeaturedProductsInter';

type pdpProps={
  id:number;
  category:String;
}

export const getPdpProductFeatured = async (id:number): Promise<FeaturedProductsListProps['products']> => {
  const response = await axiosApi.get(`http://localhost:3000/featuredproducts/${id}`);
  return response.data;
};

export const getPdpProductPlp = async ({id,category}:pdpProps): Promise<FeaturedProductsListProps['products']> => {
  const response = await axiosApi.get(`http://localhost:3000/${category}/${id}`);
  return response.data;
};