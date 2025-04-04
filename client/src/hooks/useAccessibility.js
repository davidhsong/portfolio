// src/hooks/useAccessibility.js
import { useEffect, useRef } from 'react';

// Hook to automatically set focus on first element when a component loads
export const useFocusTrap = (active = false) => {
  const elRef = useRef(null);

  useEffect(() => {
    if (!active || !elRef.current) return;

    // Find all focusable elements inside the container
    const focusableElements = elRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (focusableElements.length === 0) return;

    // Set focus to the first element
    const firstElement = focusableElements[0];
    firstElement.focus();

    // Handle keydown events to trap focus
    const handleKeyDown = (e) => {
      if (e.key !== 'Tab') return;

      const firstFocusableEl = focusableElements[0];
      const lastFocusableEl = focusableElements[focusableElements.length - 1];

      // If shift + tab and on first element, move to last element
      if (e.shiftKey && document.activeElement === firstFocusableEl) {
        e.preventDefault();
        lastFocusableEl.focus();
      }
      // If tab and on last element, move to first element
      else if (!e.shiftKey && document.activeElement === lastFocusableEl) {
        e.preventDefault();
        firstFocusableEl.focus();
      }
    };

    elRef.current.addEventListener('keydown', handleKeyDown);
    
    return () => {
      if (elRef.current) {
        elRef.current.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [active]);

  return elRef;
};

// Hook to announce dynamic content changes to screen readers
export const useAnnouncement = () => {
  const announcerRef = useRef(null);

  const announce = (message, politeness = 'polite') => {
    if (!announcerRef.current) return;

    announcerRef.current.setAttribute('aria-live', politeness);
    announcerRef.current.textContent = '';
    // Using setTimeout to ensure the DOM has time to process this change
    setTimeout(() => {
      announcerRef.current.textContent = message;
    }, 100);
  };

  return { announcerRef, announce };
};