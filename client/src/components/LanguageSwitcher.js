// src/components/LanguageSwitcher.js
import React, { useState, useContext, useRef, useEffect } from 'react';
import { LanguageContext, LANGUAGES } from '../context/LanguageContext';
import '../styles/LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (langCode) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="language-switcher" ref={dropdownRef}>
      <button 
        className="language-toggle" 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={t('accessibility.languageSwitcher')}
      >
        <span className="language-flag">{LANGUAGES[language].flag}</span>
        <span className="language-code">{language.toUpperCase()}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      
      {isOpen && (
        <div className="language-dropdown">
          <ul role="menu">
            {Object.values(LANGUAGES).map((lang) => (
              <li key={lang.code} role="menuitem">
                <button 
                  className={`language-option ${language === lang.code ? 'active' : ''}`}
                  onClick={() => handleLanguageChange(lang.code)}
                  aria-current={language === lang.code ? 'true' : 'false'}
                >
                  <span className="language-flag">{lang.flag}</span>
                  <span className="language-name">{lang.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;