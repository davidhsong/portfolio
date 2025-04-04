// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext'; // Add this

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CursorTrail from './components/CursorTrail';
import Accessibility from './components/Accessibility';
import AppRoutes from './routes';

// Styles
import './styles/App.css';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider> {/* Add this */}
        <Router>
          <div className="app">
            <CursorTrail />
            <Navbar />
            <main className="main-content">
              <AppRoutes />
            </main>
            <Footer />
            <Accessibility />
          </div>
        </Router>
      </LanguageProvider> {/* Add this */}
    </ThemeProvider>
  );
}

export default App;