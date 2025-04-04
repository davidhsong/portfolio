// src/components/SEO.js
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ 
  title = 'David Song | Software Engineer & Full-Stack Developer',
  description = 'David Song is a Software Engineer and Full-Stack Developer specializing in modern web applications with React, Node.js, and MongoDB.',
  image = '/images/meta-image.jpg',
  article = false
}) => {
  const location = useLocation();
  const url = `https://dsong.bio${location.pathname}`;

  useEffect(() => {
    // Set document title
    document.title = title;
    
    // Update meta tags
    const metaTags = {
      description: description,
      image: image,
      url: url,
      'og:title': title,
      'og:description': description,
      'og:image': image,
      'og:url': url,
      'og:type': article ? 'article' : 'website',
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': image,
    };
    
    // Set meta tags
    Object.entries(metaTags).forEach(([name, content]) => {
      // Handle Open Graph and Twitter tags differently
      if (name.startsWith('og:')) {
        updateOrCreateMetaTag('property', name, content);
      } else if (name.startsWith('twitter:')) {
        updateOrCreateMetaTag('name', name, content);
      } else {
        updateOrCreateMetaTag('name', name, content);
      }
    });
    
    // Add structured data
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': article ? 'Article' : 'WebPage',
      headline: title,
      image: [image],
      author: {
        '@type': 'Person',
        name: 'David Song',
        url: 'https://dsong.bio'
      },
      description: description,
      url: url,
    };
    
    // Add or update structured data script
    let script = document.getElementById('structured-data-script');
    if (!script) {
      script = document.createElement('script');
      script.id = 'structured-data-script';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
    
  }, [title, description, image, url, article]);

  // Helper function to update or create meta tags
  const updateOrCreateMetaTag = (attribute, name, content) => {
    let element = document.querySelector(`meta[${attribute}="${name}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attribute, name);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  return null; // No UI output
};

export default SEO;