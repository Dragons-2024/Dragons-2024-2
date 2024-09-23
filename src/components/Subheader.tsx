import React, { useState } from "react";
import { categories } from "../core/interfaces/categories";
import { FaBars } from "react-icons/fa"; // Icono de menú tipo hamburguesa
export const SubHeader: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<number | null>(null);
    const [menuOpen, setMenuOpen] = useState(false); // Estado del menú hamburguesa
  
    const handleCategoryClick = (index: number) => {
      if (activeCategory === index) {
        setActiveCategory(null); // Colapsar si se vuelve a hacer clic en la misma categoría
      } else {
        setActiveCategory(index); // Abrir nueva categoría
      }
    };
  
    return (
      <section className="bg-gray-200 py-4 px-8">
        {/* Menú para móviles */}
        <div className="font-poppins flex justify-between items-center md:hidden">
          <h2 className="text-lg font-bold">Menú</h2>
          <button className="text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars />
          </button>
        </div>
  
        {/* Menú de categorías dinámico */}
        <nav
          className={`font-poppins md:flex md:space-x-8 mt-4 ${menuOpen ? "block" : "hidden"} md:block`}
        >
          <ul className="font-poppins md:flex md:space-x-8">
            {categories.map((category, index) => (
              <li key={index} className="relative">
                {/* Botón de categoría */}
                <button
                  onClick={() => handleCategoryClick(index)}
                  className="font-poppins font-semibold text-left w-full md:w-auto"
                >
                  {category.name}
                </button>
  
                {/* Subcategorías (aparecen debajo en móviles y como dropdown en desktop) */}
                <ul
                  className={`font-poppins rounded-lg mt-2 space-y-2 md:absolute md:top-full md:left-0 md:mt-0 md:ml-2 p-4 bg-white shadow-lg ${
                    activeCategory === index ? "block" : "hidden"
                  }`}
                >
                  {category.subcategories.map((subcategory, subIndex) => (
                    <li key={subIndex}>
                      <a
                        href={subcategory.link}
                        className="font-poppins text-gray-700 hover:text-blue-600 block"
                      >
                        {subcategory.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    );
  };