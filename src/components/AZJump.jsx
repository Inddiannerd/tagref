import React, { useMemo } from 'react';

const AZJump = ({ tags }) => {
  // Get unique first letters from tag names
  const availableLetters = useMemo(() => {
    const letters = new Set();
    tags.forEach(tag => {
      const firstLetter = tag.name.charAt(0).toUpperCase();
      letters.add(firstLetter);
    });
    return Array.from(letters).sort();
  }, [tags]);

  const handleLetterClick = (letter) => {
    const element = document.getElementById(`tag-${letter}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Generate all letters A-Z
  const allLetters = Array.from({length: 26}, (_, i) => 
    String.fromCharCode(65 + i)
  );

  return (
    <div className="az-jump">
      <h3>Jump to Letter</h3>
      <div className="letter-strip">
        {allLetters.map(letter => {
          const isAvailable = availableLetters.includes(letter);
          return (
            <button
              key={letter}
              className={`letter-button ${isAvailable ? 'available' : 'unavailable'}`}
              onClick={() => isAvailable && handleLetterClick(letter)}
              disabled={!isAvailable}
              aria-label={isAvailable ? `Jump to ${letter}` : `${letter} (no tags)`}
            >
              {letter}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AZJump;