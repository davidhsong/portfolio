// src/components/CursorTrail.js
import React, { useState, useEffect } from 'react';
import '../styles/CursorTrail.css';

const CursorTrail = () => {
  const [particles, setParticles] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Create and manage particles
  useEffect(() => {
    // Only add a particle when the mouse moves
    if (mousePosition.x > 0 || mousePosition.y > 0) {
      const newParticle = {
        id: Date.now(),
        x: mousePosition.x,
        y: mousePosition.y,
        size: Math.random() * 5 + 3, // Random size between 3-8px
        color: getRandomPastelColor(),
      };
      
      setParticles(prevParticles => [...prevParticles, newParticle]);
      
      // Remove particle after 500ms (half a second)
      setTimeout(() => {
        setParticles(prevParticles => 
          prevParticles.filter(particle => particle.id !== newParticle.id)
        );
      }, 500);
    }
  }, [mousePosition]);
  
  // Generate random pastel color
  const getRandomPastelColor = () => {
    // Pastel colors based on your theme
    const colors = [
      '#a0d9b4', // Pastel green
      '#7cb9e8', // Pastel blue
      '#b5d8f7', // Light pastel blue
      '#f2a7b3', // Pastel pink
      '#d8b5f7', // Pastel purple
      '#f7e6b5', // Pastel yellow
    ];
    
    return colors[Math.floor(Math.random() * colors.length)];
  };
  
  return (
    <div className="cursor-trail">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="cursor-particle"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
          }}
        />
      ))}
    </div>
  );
};

export default CursorTrail;