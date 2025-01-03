import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../CSS/HomeMenu.css";

const HomeMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav>
      <button className="mobile-menu-button" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? '✕' : '☰'}
      </button>
      
      <div className={`home-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        {categories.map((category, index) => (
          <div 
            key={category.name} 
            className={`dropdown ${activeDropdown === index ? 'active' : ''}`}
            onClick={() => window.innerWidth <= 768 && toggleDropdown(index)}
          >
            <Link to="/">{category.name}</Link>
            <div className="dropdown-content">
              <div className="main-menu">
                {category.sections.map((section) => (
                  <div key={section.title} className="category">
                    <h3 className="category-heading">{section.title}</h3>
                    <ul>
                      {section.items.map((item) => (
                        <li key={item}>
                          <Link to="#">{item}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
};

const categories = [
  {
    name: 'Women',
    sections: [
      {
        title: 'Ethnic Wear',
        items: ['Kurta / Kurtis', 'Kurta Sets', 'Ethnic Dresses', 'Tops/Tunics']
      },
      {
        title: 'Western Wear',
        items: ['Top/Tees', 'Dresses', 'Jumpsuits', 'Jeans']
      },
      // Add other sections...
    ]
  },
  {
    name: 'Stitched',
    sections: [
      {
        title: 'Ethnic Wear',
        items: ['Kurta / Kurtis', 'Kurta Sets', 'Ethnic Dresses', 'Tops/Tunics']
      },
      {
        title: 'Western Wear',
        items: ['Top/Tees', 'Dresses', 'Jumpsuits', 'Jeans']
      },
      // Add other sections...
    ]
  },
  {
    name: 'Unstitched',
    sections: [
      {
        title: 'Ethnic Wear',
        items: ['Kurta / Kurtis', 'Kurta Sets', 'Ethnic Dresses', 'Tops/Tunics']
      },
      {
        title: 'Western Wear',
        items: ['Top/Tees', 'Dresses', 'Jumpsuits', 'Jeans']
      },
      // Add other sections...
    ]
  },
  {
    name: 'Women',
    sections: [
      {
        title: 'Ethnic Wear',
        items: ['Kurta / Kurtis', 'Kurta Sets', 'Ethnic Dresses', 'Tops/Tunics']
      },
      {
        title: 'Western Wear',
        items: ['Top/Tees', 'Dresses', 'Jumpsuits', 'Jeans']
      },
      // Add other sections...
    ]
  },
  // Add other categories...
];

export default HomeMenu;