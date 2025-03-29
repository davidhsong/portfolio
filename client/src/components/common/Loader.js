// src/components/common/Loader.js
import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/Loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-content">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="loader-logo"
        >
          <span className="loader-text">DS</span>
          <span className="loader-dot"></span>
        </motion.div>
        
        <div className="loader-spinner">
          <motion.div 
            animate={{ 
              rotate: 360,
              transition: { 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "linear" 
              }
            }}
            className="spinner"
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;