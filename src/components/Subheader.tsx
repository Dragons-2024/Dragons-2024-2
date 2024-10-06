import React, { useState } from "react";
import { categories } from "../core/interfaces/categories";
import { FaBars } from "react-icons/fa"; 
import { Link } from "react-router-dom";
export const SubHeader: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<number | null>(null);
    const [menuOpen, setMenuOpen] = useState(false); 
  
    const handleCategoryClick = (index: number) => {
      if (activeCategory === index) {
        setActiveCategory(null); 
      } else {
        setActiveCategory(index); 
      }
    };
  
    return (
      <section className="bg-[#1E2759] py-2 px-8">
        <div className="font-poppins flex justify-between items-center md:hidden">
          <h2 className="text-white text-lg font-bold">Menú</h2>
          <button className="text-2xl text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars />
          </button>
        </div>
        <nav
          className={`font-poppins text-white md:flex md:space-x-8 mt-4 ${menuOpen ? "block" : "hidden"} md:block`}
        >
          <ul className="font-poppins md:flex md:space-x-8">
            {categories.map((category, index) => (
              <li key={index} className="relative">
                <button
                  onClick={() => handleCategoryClick(index)}
                  className="font-poppins font-semibold text-left w-full md:w-auto"
                >
                  {category.name}
                </button>
                <ul
                  className={`font-poppins rounded-lg mt-2 space-y-2 md:absolute md:top-full md:left-0 md:mt-0 md:ml-2 p-4 bg-white shadow-lg ${
                    activeCategory === index ? "block" : "hidden"
                  }`}
                >
                  {category.subcategories.map((subcategory, subIndex) => (
                    <li key={subIndex}>
                    <Link
                        to={subcategory.link}
                        state={{name:subcategory.name,link:subcategory.link}}
                        className="text-gray-700 hover:text-blue-600 block"
                      >
                        {subcategory.name}
                      </Link>
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