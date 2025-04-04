// src/pages/NotFound.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';

const NotFound = () => {
  const { t } = useContext(LanguageContext);
  
  return (
    <div className="not-found-page">
      <h1>{t('notFound.title')}</h1>
      <p>{t('notFound.message')}</p>
      <Link to="/" className="btn btn-primary">{t('notFound.backHome')}</Link>
    </div>
  );
};

export default NotFound;