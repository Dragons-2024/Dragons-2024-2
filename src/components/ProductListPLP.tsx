import React, { useState } from 'react';
import ProductItem from './ProductItem';
import FilterBox from './FilterBox';

const products = [
  // Array de productos
];

const filters = [
  {
    id: 'category',
    label: 'Categorías',
    options: ['Computadores', 'Televisores', 'Audio']
  },
  {
    id: 'brand',
    label: 'Marca',
    options: ['Lenovo', 'HP', 'Dell']
  },
  {
    id: 'price-range',
    label: 'Rango de Precios',
    options: ['$3.500.000 - $5.500.000', '$5.500.000 - $7.500.000', '$7.500.000 - $11.500.000']
  }
];

const ProductListPLP: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Computadores');

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = products.filter(product => product.category === selectedCategory);

  return (
    <div className="flex flex-col md:flex-row">
      <FilterBox filters={filters} />
      <section className="product-list w-full md:w-3/4 p-4">
        <div className="list-header flex justify-between items-center mb-4">
          <span>Mostrando {filteredProducts.length} resultados de {products.length}</span>
          <select className="border border-gray-300 rounded p-2" onChange={handleCategoryChange}>
            <option value="Computadores">Computadores</option>
            <option value="Televisores">Televisores</option>
            <option value="Audio">Audio</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product, index) => (
            <ProductItem
              key={index}
              img={product.img}
              name={product.name}
              rating={product.rating}
              features={product.features}
              normalPrice={product.normalPrice}
              discountedPrice={product.discountedPrice}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductListPLP;