import { useQuery } from "@tanstack/react-query";
import { getPromotionalImages } from "../services/PromotionalImagesService";

export const usePromotionalImages = () => {
    return useQuery({
        queryKey: ["PromotionalImages"],
        queryFn: getPromotionalImages,
    });
    }