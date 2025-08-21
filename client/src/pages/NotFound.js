import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <h1>Page not found</h1>
      <p>Sorry, the page you’re looking for doesn’t exist.</p>
      <Link to="/" className="btn btn-primary">Back to Home</Link>
    </div>
  );
};

export default NotFound;
