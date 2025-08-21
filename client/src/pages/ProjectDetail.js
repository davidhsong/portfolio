import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Projects.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  // Only resume-listed projects
  const projects = useMemo(() => [
    {
      id: 'zaiku',
      title: 'Zaiku',
      description: 'Full-stack e-commerce platform with secure auth and fast search.',
      longDescription:
        'Implemented secure login/session features with JWT and Google OAuth, integrated Elastic Search for scalable, fast queries across multiple content types, and organized Node.js/Express routes with tests to catch common issues during development.',
      image: '/images/zaiku.jpg',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Google OAuth', 'Elastic Search', 'REST API'],
      categories: ['Full-Stack', 'Web Development', 'Backend', 'Frontend'],
      github: 'https://github.com/hanbit0218/zaiku.git',
      demo: 'https://www.zaikuofficial.com/',
      date: 'Jan 2025 – Apr 2025',
      featured: true
    },
    {
      id: 'promptwave',
      title: 'PromptWave',
      description: 'AI chatbot with multi-model support and improved latency.',
      longDescription:
        'Built a React frontend that switches between multiple Hugging Face API models. Reduced response latency using caching and async patterns, and debugged Express routes to ensure messages were processed correctly through the APIs.',
      image: '/images/promptwave.jpg',
      technologies: ['React', 'Express.js', 'Hugging Face API', 'Redis'],
      categories: ['AI', 'Web Development', 'Frontend', 'Backend'],
      github: 'https://github.com/davidhsong/promptwave',
      demo: null,
      date: 'Aug 2024 – Oct 2024',
      featured: true
    },
    {
      id: 'hydro-sense',
      title: 'HydroSense',
      description: 'IoT dashboard for water monitoring and data export.',
      longDescription:
        'Developed an IoT dashboard with React + Node.js to display real-time sensor data for water monitoring, integrated Google Sheets API for external export/analysis, and improved the responsive layout across desktop, tablet, and mobile.',
      image: '/images/hydro-sense.jpg',
      technologies: ['React', 'Node.js', 'Firebase', 'Google Sheets API'],
      categories: ['Frontend', 'Backend', 'IoT', 'Web Development'],
      github: 'https://github.com/hanbit0218/HydroSense.git',
      demo: null,
      date: 'Oct 2023 – Nov 2023',
      featured: true
    }
  ], []);

  useEffect(() => {
    const found = projects.find(p => p.id === id);
    if (found) {
      setProject(found);
      setLoading(false);
    } else {
      setTimeout(() => navigate('/projects'), 800);
    }
  }, [id, navigate, projects]);

  if (loading) {
    return <div className="loading"><p>Loading project details...</p></div>;
  }

  if (!project) {
    return (
      <div className="not-found">
        <h2>Project not found</h2>
        <p>Redirecting to projects page...</p>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <Link to="/projects" className="back-to-projects">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Back to Projects
      </Link>

      <motion.div
        className="project-detail-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>{project.title}</h1>
        <div className="project-detail-meta">
          <div className="project-detail-date">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            {project.date}
          </div>
          {project.categories?.map((c, i) => (
            <div key={i} className="project-detail-category">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                <line x1="7" y1="7" x2="7.01" y2="7"></line>
              </svg>
              {c}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="project-detail-image"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="project-placeholder">
          <span>{project.title.charAt(0)}</span>
        </div>
      </motion.div>

      <motion.div
        className="project-detail-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2>Project Overview</h2>
        <p>{project.longDescription}</p>
      </motion.div>

      <motion.div
        className="project-detail-technologies"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2>Technologies Used</h2>
        <div className="project-detail-tech-list">
          {project.technologies.map((tech, i) => (
            <span key={i} className="project-detail-tech-item">{tech}</span>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="project-detail-links"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
          View Code
        </a>
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            View Live Demo
          </a>
        )}
      </motion.div>
    </div>
  );
};

export default ProjectDetail;
