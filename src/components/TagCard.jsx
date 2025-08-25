import React from 'react';

const highlightText = (text, searchTerm) => {
  if (!searchTerm) return text;
  
  const regex = new RegExp(`(${searchTerm})`, 'gi');
  const parts = text.split(regex);
  
  return parts.map((part, index) => 
    regex.test(part) ? 
      <mark key={index} className="highlight">{part}</mark> : 
      part
  );
};

const TagCard = ({ tag, searchTerm, onClick }) => {
  return (
    <div 
      className="tag-card"
      onClick={onClick}
      id={`tag-${tag.name.charAt(0).toUpperCase()}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className="tag-header">
        <h3 className="tag-name">{"<"}{tag.name}{">"}</h3>
      </div>
      
      <p className="tag-description">
        {highlightText(tag.description, searchTerm)}
      </p>
      
      <div className="tag-categories">
        {tag.categories.map(category => (
          <span 
            key={category} 
            className="category-badge"
          >
            {highlightText(category, searchTerm)}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TagCard;