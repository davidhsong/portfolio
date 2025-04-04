// src/components/Accessibility.js
import React, { useState, useEffect } from 'react';

const Accessibility = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  
  // Apply font size scaling to the document
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);
  
  // Apply high contrast mode
  useEffect(() => {
    if (highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }, [highContrast]);
  
  const increaseFontSize = () => {
    if (fontSize < 150) {
      setFontSize(fontSize + 10);
    }
  };
  
  const decreaseFontSize = () => {
    if (fontSize > 80) {
      setFontSize(fontSize - 10);
    }
  };
  
  const resetFontSize = () => {
    setFontSize(100);
  };
  
  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
  };
  
  return (
    <div className={`accessibility-widget ${isOpen ? 'open' : ''}`}>
      <button 
        className="accessibility-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Accessibility options"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 8v8"></path>
          <path d="M8 12h8"></path>
        </svg>
      </button>
      
      {isOpen && (
        <div 
          className="accessibility-menu"
          role="region"
          aria-label="Accessibility controls"
        >
          <div className="accessibility-option">
            <span id="font-size-label">Font Size</span>
            <div className="font-size-controls" role="group" aria-labelledby="font-size-label">
              <button onClick={decreaseFontSize} aria-label="Decrease font size">A-</button>
              <button onClick={resetFontSize} aria-label="Reset font size">Reset</button>
              <button onClick={increaseFontSize} aria-label="Increase font size">A+</button>
            </div>
          </div>
          
          <div className="accessibility-option">
            <div className="toggle-option">
              <span id="contrast-label">High Contrast</span>
              <button 
                onClick={toggleHighContrast}
                className={`toggle-button ${highContrast ? 'active' : ''}`}
                aria-pressed={highContrast}
                aria-labelledby="contrast-label"
              >
                <span className="toggle-slider"></span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Accessibility;