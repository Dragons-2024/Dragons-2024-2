import { axiosApi } from "../api/axios";

export const getProductsBycategory = async (categoria: string) => {
  const response = await axiosApi.get(`https://dragons-2024-2-api.onrender.com/${categoria}`);
  console.log(response);
  return response.data;
};
