import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  // Featured projects (resume as source of truth)
  const featuredProjects = [
    {
      id: 'zaiku',
      title: 'Zaiku',
      description:
        'Full-stack e-commerce platform with secure auth (JWT + Google OAuth), search, and organized Express routes.',
      image: '/images/zaiku.png',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Google OAuth', 'REST API'],
      github: 'https://github.com/hanbit0218/zaiku.git',
      demo: 'https://www.zaikuofficial.com/',
      date: 'Jan 2025 – Apr 2025'
    },
    {
      id: 'promptwave',
      title: 'PromptWave',
      description:
        'AI chatbot UI in React with multiple Hugging Face models, lower latency via async + caching.',
      image: '/images/promptwave.png',
      technologies: ['React', 'Express.js', 'Hugging Face API', 'Redis'],
      github: 'https://github.com/davidhsong/promptwave',
      demo: null,
      date: 'Aug 2024 – Oct 2024'
    },
    {
      id: 'hydro-sense',
      title: 'HydroSense',
      description:
        'IoT dashboard showing real-time water monitoring; exports via Google Sheets API.',
      image: '/images/hydrosense.png',
      technologies: ['React', 'Node.js', 'Firebase', 'Google Sheets API'],
      github: 'https://github.com/hanbit0218/HydroSense.git',
      demo: null,
      date: 'Oct 2023 – Nov 2023'
    }
  ];

  // Skills aligned to resume
  const skills = [
    { category: 'Languages', items: ['JavaScript (ES6+)', 'Python', 'Java', 'SQL'] },
    { category: 'Backend & APIs', items: ['RESTful APIs', 'Microservices', 'JWT/OAuth'] },
    { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Elastic Search'] },
    { category: 'Cloud & Infra', items: ['GCP', 'Firebase', 'Kubernetes', 'Git (CI/CD)'] },
    { category: 'Systems', items: ['InfoSec fundamentals', 'API scalability', 'Redis caching'] }
  ];

  return (
    <div className="home-page">
      {/* Hero */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, I’m <span className="highlight">David Song</span></h1>
            <h2>Software Developer</h2>
            <p>I build reliable web apps and APIs, with a focus on clean UX and performance.</p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">View my work</Link>
              <Link to="/contact" className="btn btn-secondary">Get in touch</Link>
            </div>
          </div>

          <div className="hero-image">
            <div className="hero-image-container">
              <div className="placeholder-image">
                <span>DS</span>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-mouse"><div className="scroll-wheel"></div></div>
          <p>Scroll down</p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="featured-projects-section section">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p>Selected work from my resume.</p>
        </div>

        <div className="featured-projects-grid">
          {featuredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="project-placeholder">
                    <span>{project.title.charAt(0)}</span>
                  </div>
                )}
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    Code
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                      Live Demo
                    </a>
                  )}
                </div>
                <div className="project-meta">
                  <span className="project-date">{project.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-projects">
          <Link to="/projects" className="btn btn-secondary">View all projects</Link>
        </div>
      </section>

      {/* Skills */}
      <section className="skills-section section">
        <div className="section-header">
          <h2>Skills</h2>
          <p>Technologies and tools I use.</p>
        </div>

        <div className="skills-container">
          {skills.map((group, index) => (
            <div key={index} className="skill-group">
              <h3>{group.category}</h3>
              <div className="skill-tags">
                {group.items.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="view-resume">
          <Link to="/resume" className="btn btn-secondary">View my resume</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section section">
        <div className="cta-container">
          <div className="cta-content">
            <h2>Have a project in mind?</h2>
            <p>Let’s talk about how I can help.</p>
            <Link to="/contact" className="btn btn-primary">Contact me</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
