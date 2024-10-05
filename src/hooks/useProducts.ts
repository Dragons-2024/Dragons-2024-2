import { useQuery } from "@tanstack/react-query";
import { getProductsBySubcategory } from "../services/subcategories";

export const useProductsBycategory = (categoria: string) => {
  return useQuery({
    queryKey: ["products", categoria],
    queryFn: () => getProductsBySubcategory(categoria),
  });
};
