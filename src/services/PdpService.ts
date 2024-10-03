import { axiosApi } from '../api/axios';
import { FeaturedProductProps } from '../core/interfaces/FeaturedProductsInter';

type pdpProps={
  id:number;
  category:String;
}

export const getPdpProductFeatured = async (id:number): Promise<FeaturedProductProps> => {
  const response = await axiosApi.get(`http://localhost:3000/featuredproducts/${id}`);
  return response.data;
};

export const getPdpProductPlp = async ({id,category}:pdpProps): Promise<FeaturedProductProps> => {
  const response = await axiosApi.get(`http://localhost:3000/${category}/${id}`);
  return response.data;
};