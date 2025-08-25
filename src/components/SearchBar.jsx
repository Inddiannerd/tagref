import React, { useState, useEffect } from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);

  // Update local state when prop changes
  useEffect(() => {
    setLocalSearchTerm(searchTerm);
  }, [searchTerm]);

  // Debounce search term updates
  useEffect(() => {
    const handler = setTimeout(() => {
      onSearchChange(localSearchTerm);
    }, 200);

    return () => {
      clearTimeout(handler);
    };
  }, [localSearchTerm, onSearchChange]);

  const handleChange = (e) => {
    setLocalSearchTerm(e.target.value);
  };

  const handleClear = () => {
    setLocalSearchTerm('');
    onSearchChange('');
  };

  return (
    <div className="search-bar">
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Search by tag name, description, or category..."
          value={localSearchTerm}
          onChange={handleChange}
          className="search-input"
        />
        {localSearchTerm && (
          <button 
            className="clear-button"
            onClick={handleClear}
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;