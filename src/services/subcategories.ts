import { axiosApi } from "../api/axios";

export const getProductsBySubcategory = async (subcategoria: string) => {
  const response = await axiosApi.get(`https://dragons-2024-2-api.onrender.com/${subcategoria}`);
  console.log(response);
  return response.data;
};
