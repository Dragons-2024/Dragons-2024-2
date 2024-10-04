import { useState, useEffect } from 'react';
import { Main } from '../layout/Main';
import ProductItem from './ProductItem';
import { CategoryLink, plpBreadCrumb } from '../utils/BreadcrumbData';
import promo4 from '../assets/Promotional_Images/promo4.png';
import { Breadcrumb } from './Breadcrumb';
import { useParams } from 'react-router-dom';

interface Product {
    id: number;
    img: string;
    name: string;
    rating: number;
    features: string;
    normalPrice: string;
    discountedPrice: string;
    description?: string;
}

export const ProductListPLP = () => {
    const [products, setProducts] = useState<Product[]>([]); // Usa la interfaz aquí
    const { category } = useParams();
    const [sortCriteria, setSortCriteria] = useState('rating');
    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSortCriteria(event.target.value);
    };

    const sortedProducts = [...products].sort((a, b) => {
        if (sortCriteria === 'rating') {
            return b.rating - a.rating;
        } else if (sortCriteria === 'priceAsc') {
            return parseFloat(a.normalPrice.replace(/[$,.]/g, '')) - parseFloat(b.normalPrice.replace(/[$,.]/g, ''));
        } else if (sortCriteria === 'priceDesc') {
            return parseFloat(b.normalPrice.replace(/[$,.]/g, '')) - parseFloat(a.normalPrice.replace(/[$,.]/g, ''));
        } else if (sortCriteria === 'discount') {
            const discountA = parseFloat(a.normalPrice.replace(/[$,.]/g, '')) - parseFloat(a.discountedPrice.replace(/[$,.]/g, ''));
            const discountB = parseFloat(b.normalPrice.replace(/[$,.]/g, '')) - parseFloat(b.discountedPrice.replace(/[$,.]/g, ''));
            return discountB - discountA;
        }
        return 0;
    });

    useEffect(() => {
        if (!category) {
            console.error('Category is undefined');
            return;
        }

        const name = category.charAt(0).toUpperCase() + category.slice(1);
        CategoryLink({ name, link: `/${category}` });
        plpBreadCrumb({ name, link: `/${category}` });

        const fetchProducts = async () => {
            try {
                const response = await fetch(`https://dragons-2024-2-api.onrender.com/${category}`);
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [category]);

    return (
        <Main>
            {category ? (
                <>
                    <Breadcrumb blinks={[{ id: 1, name: category, link: `/${category}` }]} />

                    <div className="list-header flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                        <span className="text-sm md:text-base">Mostrando {sortedProducts.length} resultados de 35</span>
                        <div className="flex space-x-4 mt-2 md:mt-0">
                            <select className="border border-gray-300 rounded p-2 text-sm md:text-base" onChange={handleSortChange}>
                                <option value="default">Ordenar por Defecto</option>
                                <option value="rating">Ordenar por Calificación</option>
                                <option value="priceAsc">Ordenar por Precio: Menor a Mayor</option>
                                <option value="priceDesc">Ordenar por Precio: Mayor a Menor</option>
                                <option value="discount">Ordenar por Mayor Descuento</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                        {sortedProducts.map(product => (
                            <ProductItem
                                key={product.id}
                                img={product.img}
                                name={product.name}
                                rating={product.rating}
                                features={product.features}
                                normalPrice={product.normalPrice}
                                discountedPrice={product.discountedPrice}
                            />
                        ))}
                    </div>


                    <div className="w-full p-4">
                        <img src={promo4} alt="Promotional Banner" className="w-full h-auto rounded-lg" />
                    </div>
                </>
            ) : (
                <div className="text-center">
                    <h2 className="text-red-500">No se encontró la categoría.</h2>
                    <p>Por favor, verifica la URL o vuelve a la página principal.</p>
                </div>
            )}
        </Main>
    );
};
