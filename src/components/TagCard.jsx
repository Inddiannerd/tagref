import React from 'react';

const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const highlightText = (text, searchTerm) => {
  if (!searchTerm) return text;
  const source = String(text);
  const escaped = escapeRegExp(searchTerm);
  if (!escaped) return source;
  const splitRe = new RegExp(`(${escaped})`, 'ig');
  const testRe = new RegExp(escaped, 'i');
  const parts = source.split(splitRe);
  return parts.map((part, index) =>
    testRe.test(part)
      ? <mark key={index} className="highlight">{part}</mark>
      : part
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