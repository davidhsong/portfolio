// src/pages/BlogPost.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  
  return (
    <div className="blog-post-page">
      <Link to="/blog">&larr; Back to Blog</Link>
      <h1>Blog Post {id}</h1>
      <p>This blog post is under construction.</p>
    </div>
  );
};

export default BlogPost;