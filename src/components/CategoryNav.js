import React from 'react';
export default function CategoryNav({ activeCategory, onCategoryChange }) {
  const categories = ['Games', 'Watches', 'Movies'];

  return (
    <nav className="category-nav">
      {categories.map((category) => (
        <button
          key={category}
          className={activeCategory === category ? 'active' : ''}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </nav>
  );
}


