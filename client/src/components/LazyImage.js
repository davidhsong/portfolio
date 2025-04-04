// src/components/LazyImage.js
import React, { useState, useEffect, useRef } from 'react';

const LazyImage = ({ src, alt, className, placeholder = null }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    // Create intersection observer to detect when image is in viewport
    observerRef.current = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        // Once in viewport, load the image
        if (imgRef.current) {
          const img = imgRef.current;
          const actualSrc = img.getAttribute('data-src');
          img.setAttribute('src', actualSrc);
          
          img.onload = () => {
            setIsLoaded(true);
            // Disconnect observer after loading
            if (observerRef.current) {
              observerRef.current.disconnect();
            }
          };
        }
      }
    });

    // Start observing the image element
    if (imgRef.current && observerRef.current) {
      observerRef.current.observe(imgRef.current);
    }

    // Cleanup observer on unmount
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className={`lazy-image-container ${className || ''}`} style={{ position: 'relative' }}>
      {!isLoaded && (
        <div className="lazy-image-placeholder">
          {placeholder || <div className="image-placeholder-shimmer"></div>}
        </div>
      )}
      <img
        ref={imgRef}
        className={`lazy-image ${isLoaded ? 'loaded' : ''}`}
        data-src={src}
        src={placeholder ? "" : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"} // Blank placeholder
        alt={alt}
        style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.3s' }}
      />
    </div>
  );
};

export default LazyImage;