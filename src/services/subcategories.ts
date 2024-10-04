import { axiosApi } from "../api/axios";

export const getProductsBySubcategory = async (subcategoria: string) => {
  const response = await axiosApi.get(`http://localhost:3000/${subcategoria}`);
  console.log(response);
  return response.data;
};
