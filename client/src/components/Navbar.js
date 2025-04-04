// src/components/Navbar.js (partial update)
import React, { useState, useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { LanguageContext } from '../context/LanguageContext'; // Add this
import LanguageSwitcher from './LanguageSwitcher'; // Add this
import '../styles/Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { t } = useContext(LanguageContext); // Add this
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <div className="logo-content">
            <span className="logo-text">David Song</span>
            <span className="logo-dot"></span>
          </div>
        </Link>

        <div className="navbar-buttons">
          <LanguageSwitcher /> {/* Add this */}
          
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`${t('accessibility.switchTo')} ${theme === 'light' ? t('accessibility.darkMode') : t('accessibility.lightMode')}`}
          >
            {theme === 'light' ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            )}
          </button>
          
          <button
            className={`mobile-menu-button ${menuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label={menuOpen ? t('accessibility.closeMenu') : t('accessibility.openMenu')}
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <nav className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <Link
                to="/"
                className={location.pathname === '/' ? 'active' : ''}
              >
                {t('navbar.home')}
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={location.pathname === '/about' ? 'active' : ''}
              >
                {t('navbar.about')}
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={location.pathname === '/projects' || location.pathname.startsWith('/projects/') ? 'active' : ''}
              >
                {t('navbar.projects')}
              </Link>
            </li>
            <li>
              <Link
                to="/resume"
                className={location.pathname === '/resume' ? 'active' : ''}
              >
                {t('navbar.resume')}
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className={location.pathname === '/blog' || location.pathname.startsWith('/blog/') ? 'active' : ''}
              >
                {t('navbar.blog')}
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={location.pathname === '/contact' ? 'active' : ''}
              >
                {t('navbar.contact')}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;