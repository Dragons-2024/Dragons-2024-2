import { axiosApi } from "../api/axios";

export interface CategoryProducts {
  id: number;
  img: string;
  name: string;
  rating: number;
  features: string;
  normalPrice: string;
  discountedPrice: string;
  description?: string;
  details?: {
    [key: string]: string;
  }
  slug: string;
  category: string;
};

export const getProductsByCategory = async (categoria: string): Promise<CategoryProducts[]> => {
  const response = await axiosApi.get(`https://dragons-2024-2-api.onrender.com/${categoria}`);
  console.log(response);
  return response.data;
};
