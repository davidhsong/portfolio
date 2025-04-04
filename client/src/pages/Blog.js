// src/pages/Blog.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogPosts';
import LazyImage from '../components/LazyImage';
import '../styles/Blog.css';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Extract unique categories
  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];
  
  // Filter posts based on selected category
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);
  
  return (
    <div className="blog-page">
      <div className="blog-header">
        <h1>Blog</h1>
        <p>Thoughts, insights, and tutorials on web development, programming, and technology.</p>
      </div>
      
      <div className="blog-category-filter">
        <h2>Categories</h2>
        <div className="category-buttons">
          {categories.map(category => (
            <button
              key={category}
              className={`category-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
              aria-pressed={selectedCategory === category}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      <div className="blog-posts-container">
        {filteredPosts.length > 0 ? (
          <div className="blog-posts-grid">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="blog-post-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link to={`/blog/${post.id}`} className="blog-post-link">
                  <div className="blog-post-image">
                    {post.image ? (
                      <LazyImage
                        src={post.image}
                        alt={post.title}
                        placeholder={<div className="blog-image-placeholder">{post.title.charAt(0)}</div>}
                      />
                    ) : (
                      <div className="blog-image-placeholder">
                        <span>{post.title.charAt(0)}</span>
                      </div>
                    )}
                  </div>
                  <div className="blog-post-content">
                    <div className="blog-post-meta">
                      <span className="blog-post-category">{post.category}</span>
                      <span className="blog-post-date">{post.date}</span>
                    </div>
                    <h2 className="blog-post-title">{post.title}</h2>
                    <p className="blog-post-excerpt">{post.excerpt}</p>
                    <div className="blog-post-footer">
                      <span className="blog-post-read-time">{post.readTime}</span>
                      <span className="blog-post-read-more">Read More</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="no-posts-found">
            <h3>No posts found in this category</h3>
            <button 
              className="btn btn-secondary"
              onClick={() => setSelectedCategory('All')}
            >
              View All Posts
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;