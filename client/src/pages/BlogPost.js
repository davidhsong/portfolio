// src/pages/BlogPost.js
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { blogPosts } from '../data/blogPosts';
import '../styles/BlogPost.css';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    // Find the post with matching ID
    const foundPost = blogPosts.find(post => post.id === id);
    
    if (foundPost) {
      setPost(foundPost);
      
      // Find related posts (same category, excluding current post)
      const related = blogPosts
        .filter(p => p.category === foundPost.category && p.id !== id)
        .slice(0, 3);
      setRelatedPosts(related);
      
      // Update document title
      document.title = `${foundPost.title} | David Song Blog`;
      
      setLoading(false);
    } else {
      // Post not found, redirect to blog page
      setTimeout(() => {
        navigate('/blog');
      }, 1000);
    }
    
    // Reset document title when unmounting
    return () => {
      document.title = 'David Song | Portfolio';
    };
  }, [id, navigate]);

  // Custom renderers for markdown components
  const renderers = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <SyntaxHighlighter
          style={tomorrow}
          language={match[1]}
          PreTag="div"
          {...props}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    }
  };

  if (loading) {
    return (
      <div className="blog-post-loading">
        <div className="loading-spinner"></div>
        <p>Loading article...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="blog-post-not-found">
        <h2>Post not found</h2>
        <p>Redirecting to blog page...</p>
      </div>
    );
  }

  return (
    <div className="blog-post-page">
      <Link to="/blog" className="back-to-blog">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Back to Blog
      </Link>

      <article className="blog-post-article">
        <header className="blog-post-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="blog-post-meta">
              <span className="blog-post-category">{post.category}</span>
              <span className="blog-post-date">{post.date}</span>
              <span className="blog-post-read-time">{post.readTime}</span>
            </div>
            <h1 className="blog-post-title">{post.title}</h1>
            <div className="blog-post-author">
              <span>By {post.author}</span>
            </div>
          </motion.div>
        </header>

        <motion.div
          className="blog-post-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ReactMarkdown 
            components={renderers}
            className="markdown-content"
          >
            {post.content}
          </ReactMarkdown>
        </motion.div>

        <motion.div
          className="blog-post-tags"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3>Topics</h3>
          <div className="tags-container">
            {post.tags.map(tag => (
              <span key={tag} className="blog-tag">{tag}</span>
            ))}
          </div>
        </motion.div>
      </article>

      {relatedPosts.length > 0 && (
        <motion.div
          className="related-posts"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2>Related Articles</h2>
          <div className="related-posts-grid">
            {relatedPosts.map(relatedPost => (
              <div key={relatedPost.id} className="related-post-card">
                <Link to={`/blog/${relatedPost.id}`}>
                  <div className="related-post-image">
                    {relatedPost.image ? (
                      <img src={relatedPost.image} alt={relatedPost.title} />
                    ) : (
                      <div className="blog-image-placeholder">
                        <span>{relatedPost.title.charAt(0)}</span>
                      </div>
                    )}
                  </div>
                  <div className="related-post-content">
                    <h3>{relatedPost.title}</h3>
                    <span className="related-post-date">{relatedPost.date}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default BlogPost;