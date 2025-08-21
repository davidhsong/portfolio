import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  // Only projects that appear on the resume
  const projects = useMemo(() => [
    {
      id: 'zaiku',
      title: 'Zaiku',
      description:
        'Full-stack e-commerce platform with secure auth (JWT + Google OAuth), Elastic Search, and structured Express routes.',
      longDescription:
        'Implemented secure login/session features (JWT + Google OAuth), integrated Elastic Search for fast queries, and organized Node.js/Express routes with tests to catch common issues during development.',
      image: '/images/zaiku.png',
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
      description:
        'AI chatbot UI in React supporting multiple Hugging Face models; improved latency with async + caching.',
      longDescription:
        'Built the chatbot frontend in React with model switching across Hugging Face APIs. Reduced response latency using asynchronous patterns and caching, and debugged Express routes to ensure correct message processing.',
      image: '/images/promptwave.png',
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
      description:
        'IoT dashboard for water monitoring; real-time data view and export via Google Sheets API.',
      longDescription:
        'Developed an IoT dashboard using React + Node.js to display sensor data for water monitoring. Added Google Sheets API integration for external export/analysis and improved responsive layout across devices.',
      image: '/images/hydrosense.png',
      technologies: ['React', 'Node.js', 'Firebase', 'Google Sheets API'],
      categories: ['Frontend', 'Backend', 'IoT', 'Web Development'],
      github: 'https://github.com/hanbit0218/HydroSense.git',
      demo: null,
      date: 'Oct 2023 – Nov 2023',
      featured: true
    }
  ], []);

  // Helper to sort by end date
  const parseDateString = (dateString) => {
    const parts = dateString.split('–')[1] || dateString;
    return new Date(parts.trim());
  };

  const sortedProjects = useMemo(() => {
    return [...projects].sort((a, b) => parseDateString(b.date) - parseDateString(a.date));
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (filter === 'all') return sortedProjects;
    return sortedProjects.filter(p => p.categories.map(c => c.toLowerCase()).includes(filter.toLowerCase()));
  }, [filter, sortedProjects]);

  const categories = useMemo(() => {
    const all = projects.flatMap(p => p.categories);
    return ['all', ...Array.from(new Set(all))];
  }, [projects]);

  return (
    <div className="projects-page">
      <div className="projects-header">
        <h1>My Projects</h1>
        <p>These projects are featured on my resume.</p>
      </div>

      <div className="projects-filter">
        <div className="filter-container">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-button ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <Link to={`/projects/${project.id}`} className="project-link">
              <div className="project-image">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="project-placeholder">
                    <span>{project.title.charAt(0)}</span>
                  </div>
                )}
                {project.featured && <div className="project-featured">Featured</div>}
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-meta">
                  <span className="project-date">{project.date}</span>
                </div>
                <div className="project-tech">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-more">+{project.technologies.length - 3}</span>
                  )}
                </div>
              </div>
            </Link>
            <div className="project-actions">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-action">Code</a>
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-action">Demo</a>
              )}
              <Link to={`/projects/${project.id}`} className="project-action">Details</Link>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="no-projects">
          <h3>No projects found in this category</h3>
          <button className="btn btn-secondary" onClick={() => setFilter('all')}>
            Show All Projects
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
