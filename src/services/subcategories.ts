import { axiosApi } from "../api/axios";

export const getProductsBySubcategory = async (subcategoria: string) => {
  const response = await axiosApi.get(`/${subcategoria}`);
  console.log(response);
  return response.data;
};
