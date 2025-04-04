// src/pages/Home.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { LanguageContext } from '../context/LanguageContext';
import '../styles/Home.css';

const Home = () => {
  const { } = useContext(ThemeContext);
  const { t } = useContext(LanguageContext);

  // Featured projects from resume
  const featuredProjects = [
    {
      id: 'zaiku',
      title: 'Zaiku',
      description: 'A full-stack e-commerce platform for Asian-inspired fashion with user authentication, shopping cart, and secure checkout.',
      image: '/images/zaiku.png',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      github: 'https://github.com/hanbit0218/zaiku.git',
      demo: 'https://www.zaikuofficial.com/'
    },
    {
      id: 'promptwave',
      title: 'PromptWave',
      description: 'A modern AI chatbot leveraging free Hugging Face models with a responsive React frontend and Express backend.',
      image: '/images/promptwave.png',
      technologies: ['React', 'Express.js', 'Node.js', 'Hugging Face API', 'styled-components', 'Vercel'],
      github: 'https://github.com/hanbit0218/promptwave',
      demo: 'https://promptwave-frontend.vercel.app/'
    }, 
    {
      id: 'hydro-sense',
      title: 'Hydro Sense',
      description: 'IoT-based dashboard for soil moisture monitoring, visualizing sensor data and enabling environmental data analysis.',
      image: '/images/hydro-sense.jpg',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'Firebase'],
      github: 'https://github.com/hanbit0218/HydroSense.git',
      demo: null
    }
  ];

  // Skills from resume
  const skills = [
    { category: 'Programming & Languages', items: ['Python', 'Java', 'JavaScript', 'C++', 'SQL', 'HTML/CSS'] },
    { category: 'Frameworks & Libraries', items: ['React', 'Next.js', 'Node.js', 'Express.js', 'Django', 'Spring Boot'] },
    { category: 'Infrastructure & Tools', items: ['MongoDB', 'MySQL', 'Firebase', 'AWS', 'Git', 'Docker'] }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>{t('home.hero.greeting')} <span className="highlight">David Song</span></h1>
            <h2>{t('home.hero.title')}</h2>
            <p>{t('home.hero.description')}</p>
            
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">{t('home.hero.viewWork')}</Link>
              <Link to="/contact" className="btn btn-secondary">{t('home.hero.getInTouch')}</Link>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="hero-image-container">
              {/* Replace with your actual image */}
              <div className="placeholder-image">
                <span>DS</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <p>{t('home.hero.scrollDown')}</p>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="featured-projects-section section">
        <div className="section-header">
          <h2>{t('home.projects.title')}</h2>
          <p>{t('home.projects.subtitle')}</p>
        </div>
        
        <div className="featured-projects-grid">
          {featuredProjects.map((project, index) => (
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    {t('home.projects.code')}
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      {t('home.projects.demo')}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="view-all-projects">
          <Link to="/projects" className="btn btn-secondary">{t('home.projects.viewAll')}</Link>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="skills-section section">
        <div className="section-header">
          <h2>{t('home.skills.title')}</h2>
          <p>{t('home.skills.subtitle')}</p>
        </div>
        
        <div className="skills-container">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-group">
              <h3>{skillGroup.category}</h3>
              <div className="skill-tags">
                {skillGroup.items.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="view-resume">
          <Link to="/resume" className="btn btn-secondary">{t('home.skills.viewResume')}</Link>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="cta-section section">
        <div className="cta-container">
          <div className="cta-content">
            <h2>{t('home.cta.title')}</h2>
            <p>{t('home.cta.subtitle')}</p>
            <Link to="/contact" className="btn btn-primary">{t('home.cta.button')}</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;