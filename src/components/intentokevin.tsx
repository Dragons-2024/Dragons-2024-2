import {  useEffect } from 'react';
import { Main } from '../layout/Main';
import ProductItem from './ProductItem';
import { CategoryLink,  plpBreadCrumb } from '../utils/BreadcrumbData';
import promo4 from '../assets/Promotional_Images/promo4.png';
import { Breadcrumb } from './Breadcrumb';
import { useParams } from 'react-router-dom';

export const ProductListPLP = () => {
    // const [products, setProducts] = useState([]);
    const { category } = useParams(); 

    useEffect(() => {
        
        if (!category) {
            console.error('Category is undefined');
            return; 
        }

        const name = category.charAt(0).toUpperCase() + category.slice(1); 
        CategoryLink({ name, link: `/${category}` });
        plpBreadCrumb({ name, link: `/${category}` });

        // const fetchProducts = async () => {
        //     try {
        //         const response = await fetch(`https://dragons-2024-2-api.onrender.com/${category}`);
        //         const data = await response.json();
        //         setProducts(data);
        //     } catch (error) {
        //         console.error('Error fetching products:', error);
        //     }
        // };

        // fetchProducts();
    }, [category]);

    return (
        <Main>
            {category ? ( 
                <>
                    <Breadcrumb blinks={[{ id: 1, name: category, link: `/${category}` }]} />

                    <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen">
                        
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
