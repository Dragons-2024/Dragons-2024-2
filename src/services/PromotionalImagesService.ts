import { axiosApi } from '../api/axios';
import { imgspropstype } from '../core/interfaces/PromotionalImages';

export const getPromotionalImages = async (): Promise<imgspropstype['imgs']> => {
  const response = await axiosApi.get('https://dragons-2024-2-api.onrender.com/PromotionalImages');
  return response.data;
}