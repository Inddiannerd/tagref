import React, { useState, useEffect, useRef } from 'react';

const TagDrawer = ({ tag, isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const drawerRef = useRef(null);

  // Handle escape key to close drawer
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      // Focus the drawer when it opens for accessibility
      setTimeout(() => {
        if (drawerRef.current) {
          drawerRef.current.focus();
        }
      }, 100);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  // Handle copy to clipboard
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Handle overlay click to close
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!tag || !isOpen) {
    return null;
  }

  return (
    <div 
      className={`drawer-overlay ${isOpen ? 'open' : ''}`}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="drawer-title"
    >
      <div 
        className="drawer"
        ref={drawerRef}
        tabIndex={-1}
      >
        <div className="drawer-header">
          <h2 id="drawer-title" className="drawer-title">
            {"<"}{tag.name}{">"} Tag
          </h2>
          <button 
            className="close-button"
            onClick={onClose}
            aria-label="Close details"
          >
            ×
          </button>
        </div>

        <div className="drawer-content">
          <div className="drawer-section">
            <h3>Description</h3>
            <p>{tag.description}</p>
          </div>

          {tag.attributes && tag.attributes.length > 0 && (
            <div className="drawer-section">
              <h3>Attributes</h3>
              <div className="attributes-table">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Required</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tag.attributes.map((attr, index) => (
                      <tr key={index}>
                        <td><code>{attr.name}</code></td>
                        <td>{attr.type}</td>
                        <td>{attr.required ? 'Yes' : 'No'}</td>
                        <td>{attr.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div className="drawer-section">
            <h3>Example</h3>
            <div className="code-block">
              <pre><code>{tag.example}</code></pre>
              <button 
                className="copy-button"
                onClick={() => handleCopy(tag.example)}
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>

          <div className="drawer-section">
            <h3>Live Preview</h3>
            <div className="preview-container">
              <div 
                className="preview-content"
                dangerouslySetInnerHTML={{ __html: tag.example }}
              />
            </div>
          </div>

          <div className="drawer-section">
            <h3>Documentation</h3>
            <p>
              <a 
                href={tag.mdn} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mdn-link"
              >
                View on MDN Web Docs
              </a>
            </p>
          </div>

          {tag.notes && (
            <div className="drawer-section">
              <h3>Notes</h3>
              <p>{tag.notes}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TagDrawer;