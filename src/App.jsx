import React, { useState, useEffect, useMemo } from 'react';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import AZJump from './components/AZJump';
import TagCard from './components/TagCard';
import TagDrawer from './components/TagDrawer';
import tagsData from './data/tags.json';

const ALL_CATEGORIES = [
  'Content', 'Forms', 'Media', 'Metadata', 
  'Table', 'Text', 'Interactive', 'Scripting', 
  'Deprecated', 'Obsolete'
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Filter tags based on search term and selected categories
  const filteredTags = useMemo(() => {
    return tagsData.filter(tag => {
      // Check search term against name, description, and categories
      const matchesSearch = 
        tag.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tag.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tag.categories.some(category => 
          category.toLowerCase().includes(searchTerm.toLowerCase())
        );
      
      // Check category filter
      const matchesCategory = 
        selectedCategories.length === 0 || 
        tag.categories.some(category => 
          selectedCategories.includes(category)
        );
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategories]);

  // Handle tag selection for drawer
  const handleTagSelect = (tag) => {
    setSelectedTag(tag);
    setIsDrawerOpen(true);
  };

  // Handle drawer close
  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
    setSelectedTag(null);
  };

  // Handle category selection
  const handleCategoryChange = (categories) => {
    setSelectedCategories(categories);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>HTML Tag Reference</h1>
        <p>Search and browse HTML elements with detailed information</p>
      </header>

      <main className="app-main">
        <div className="search-section">
          <SearchBar 
            searchTerm={searchTerm} 
            onSearchChange={setSearchTerm} 
          />
          <CategoryFilter 
            categories={ALL_CATEGORIES}
            selectedCategories={selectedCategories}
            onCategoryChange={handleCategoryChange}
          />
        </div>

        <AZJump tags={filteredTags} />

        <div className="tags-grid">
          {filteredTags.length > 0 ? (
            filteredTags.map(tag => (
              <TagCard 
                key={tag.name} 
                tag={tag} 
                searchTerm={searchTerm}
                onClick={() => handleTagSelect(tag)}
              />
            ))
          ) : (
            <div className="no-results">
              <p>No tags found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>

      <TagDrawer 
        tag={selectedTag}
        isOpen={isDrawerOpen}
        onClose={handleDrawerClose}
      />
    </div>
  );
}

export default App;