import { useQuery } from "@tanstack/react-query";
import { getProductsBycategory } from "../services/subcategories";

export const useProductsBycategory = (categoria: string) => {
  return useQuery({
    queryKey: ["products", categoria],
    queryFn: () => getProductsBycategory(categoria),
  });
};
