import { useQuery } from '@tanstack/react-query';
import { getFilters } from '../services/FilterService';

export const useFilterProduct = (category: string) => {
    return useQuery({
        queryKey: ['filters', category],
        queryFn: () => getFilters(category),
    });
};