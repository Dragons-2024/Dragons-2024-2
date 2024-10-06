import { axiosApi } from '../api/axios';
import { FilterCategory } from '../core/interfaces/Filter';

export const getFilters = async (category: string): Promise<FilterCategory[]> => {
    const response = await axiosApi.get(`https://dragons-2024-2-api.onrender.com/Filtro${category}`);
    return response.data;
};
