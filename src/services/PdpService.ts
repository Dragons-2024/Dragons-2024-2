import { axiosApi } from '../api/axios';
import { PlpProductProps } from '../core/interfaces/PlpProductInter';

type pdpProps={
  id:number;
  category:String;
}

export const getPdpProductFeatured = async (id:number): Promise<PlpProductProps> => {
  const response = await axiosApi.get(`https://dragons-2024-2-api.onrender.com/featuredproducts/${id}`);
  return response.data;
};

export const getPdpProductPlp = async ({id,category}:pdpProps): Promise<PlpProductProps> => {
  const response = await axiosApi.get(`https://dragons-2024-2-api.onrender.com/${category}/${id}`);
  return response.data;
};