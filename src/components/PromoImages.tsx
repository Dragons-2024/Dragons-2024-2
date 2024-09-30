import { usePromotionalImages } from "../hooks/usePromotionalImages";
import { PromotionalImages } from "./PromotionalImage";
import ErrorMessage from './ErrorMessage';
import { Loading } from "./Loading";
import { PromotionalImagesContainerProps } from "../core/interfaces/PromotionalImages";

export function PromotionalImagesContainer({ minId, maxId }: PromotionalImagesContainerProps) {
    const { data, isLoading, error } = usePromotionalImages();
    if (isLoading) {
        return (
            <Loading />
        );
    }
    if (error) {
        return (
            <ErrorMessage message={`Error al obtener los productos: ${error.message}`} /> // Usa el componente de error
        );
    }
    const filteredImages = data?.filter(image => {
        const id = image.id;
        return (minId === undefined || id >= minId) && (maxId === undefined || id <= maxId);
    });
    return <PromotionalImages imgs={filteredImages ?? []} />;
}
