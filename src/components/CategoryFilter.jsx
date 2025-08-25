import React, { useState } from 'react';

const CategoryFilter = ({ categories, selectedCategories, onCategoryChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCategoryToggle = (category) => {
    if (selectedCategories.includes(category)) {
      // Remove category if already selected
      onCategoryChange(selectedCategories.filter(c => c !== category));
    } else {
      // Add category if not selected
      onCategoryChange([...selectedCategories, category]);
    }
  };

  const handleSelectAll = () => {
    if (selectedCategories.length === categories.length) {
      // If all are selected, clear selection
      onCategoryChange([]);
    } else {
      // If not all are selected, select all
      onCategoryChange([...categories]);
    }
  };

  const areAllSelected = selectedCategories.length === categories.length && categories.length > 0;

  return (
    <div className="category-filter">
      <div className="filter-header">
        <h3>Filter by Category</h3>
        <button 
          className="toggle-button"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
        >
          {isExpanded ? 'Hide' : 'Show'}
        </button>
      </div>
      
      {isExpanded && (
        <div className="category-checkboxes">
          <div className="checkbox-item">
            <input
              type="checkbox"
              id="select-all"
              checked={areAllSelected}
              onChange={handleSelectAll}
            />
            <label htmlFor="select-all">All Categories</label>
          </div>
          
          {categories.map(category => (
            <div className="checkbox-item" key={category}>
              <input
                type="checkbox"
                id={`category-${category}`}
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryToggle(category)}
              />
              <label htmlFor={`category-${category}`}>{category}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryFilter;