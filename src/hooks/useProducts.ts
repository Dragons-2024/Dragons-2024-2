import { useQuery } from "@tanstack/react-query";
import { getProductsByCategory } from "../services/categoriesService";

export const useProductsBycategory = (categoria: string) => {
  return useQuery({
    queryKey: ["products", categoria],
    queryFn: () => getProductsByCategory(categoria),
  });
};
