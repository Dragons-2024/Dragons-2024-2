import { useQuery } from "@tanstack/react-query";
import { getProductsBySubcategory } from "../services/subcategories";

export const useProductsBySubcategory = (subcategoria: string) => {
  return useQuery({
    queryKey: ["products", subcategoria],
    queryFn: () => getProductsBySubcategory(subcategoria),
    staleTime: 5000,
  });
};
