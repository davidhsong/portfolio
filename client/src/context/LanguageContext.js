// src/context/LanguageContext.js
import React, { createContext, useState, useEffect } from 'react';

// Create context
export const LanguageContext = createContext({
  language: 'en',
  setLanguage: () => {},
  t: (key) => key
});

// Available languages
export const LANGUAGES = {
  en: { code: 'en', name: 'English', flag: '🇺🇸' },
  es: { code: 'es', name: 'Español', flag: '🇪🇸' },
  ko: { code: 'ko', name: '한국어', flag: '🇰🇷' }
};

export const LanguageProvider = ({ children }) => {
  // Get initial language from localStorage or browser settings
  const getInitialLanguage = () => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && LANGUAGES[savedLanguage]) {
      return savedLanguage;
    }
    
    // Check browser language
    const browserLanguage = navigator.language.split('-')[0];
    return LANGUAGES[browserLanguage] ? browserLanguage : 'en';
  };

  const [language, setLanguage] = useState(getInitialLanguage);
  const [translations, setTranslations] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Load translations for the current language
  useEffect(() => {
    const loadTranslations = async () => {
      setIsLoading(true);
      try {
        const module = await import(`../translations/${language}.json`);
        setTranslations(module.default);
      } catch (error) {
        console.error(`Failed to load translations for ${language}`, error);
        // Fallback to English if translation file not found
        if (language !== 'en') {
          const enModule = await import('../translations/en.json');
          setTranslations(enModule.default);
        }
      }
      setIsLoading(false);
    };

    loadTranslations();
    
    // Save language preference to localStorage
    localStorage.setItem('language', language);
    
    // Set html lang attribute
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  // Translation function
  const t = (key) => {
    // Split nested keys (e.g. 'navbar.home')
    const keys = key.split('.');
    let result = translations;
    
    // Traverse the translations object
    for (const k of keys) {
      if (result && result[k]) {
        result = result[k];
      } else {
        // Return the key if translation not found
        return key;
      }
    }
    
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isLoading, languages: LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
};