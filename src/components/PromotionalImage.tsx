import { imgspropstype } from "../core/interfaces/PromotionalImages";

export function PromotionalImages({ imgs }: imgspropstype) {
    return (
        <>
            {imgs.map(({ id, image, name }) => (
                <img
                    key={id}
                    className="w-full h-auto object-cover max-w-full"
                    src={image}
                    alt={name}
                />
            ))}
        </>
    );
}
