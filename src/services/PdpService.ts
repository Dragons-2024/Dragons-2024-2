import { axiosApi } from '../api/axios';
import { PlpProductProps } from '../core/interfaces/PlpProductInter';
import { CategoryProducts } from '../services/subcategories';

type pdpProps={
  id:number;
  category:String;
}

export const getPdpProductFeatured = async (id:number): Promise<PlpProductProps> => {
  const response = await axiosApi.get(`http://localhost:3000/featuredproducts/${id}`);
  return response.data;
};

export const getPdpProductPlp = async ({id,category}:pdpProps): Promise<PlpProductProps> => {
  const response = await axiosApi.get(`http://localhost:3000/${category}/${id}`);
  return response.data;
};