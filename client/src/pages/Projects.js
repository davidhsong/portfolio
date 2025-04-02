import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  // Project data from resume + additional details
  const projects = useMemo(() => [
    {
      id: 'zaiku',
      title: 'Zaiku',
      description: 'A full-stack e-commerce platform for Asian-inspired fashion with user authentication, shopping cart, and secure checkout process.',
      longDescription: 'Zaiku is a comprehensive e-commerce solution built with modern web technologies. The platform features a responsive design that works seamlessly across devices, with a focus on user experience and performance. Key functionalities include user authentication with JWT and Google OAuth, product browsing with advanced filtering, shopping cart with persistent storage, and a secure checkout process with multiple payment options.',
      image: '/images/zaiku.jpg',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Google OAuth', 'RESTful API', 'Context API'],
      categories: ['Full-Stack', 'E-Commerce', 'Web Development'],
      github: 'https://github.com/hanbit0218/zaiku.git',
      demo: 'https://www.zaikuofficial.com/',
      date: 'Jan 2025 - Mar 2025',
      featured: true
    },
    {
      id: 'sales-forecast',
      title: 'Sales Forecast',
      description: 'Time-series analysis project using Python to predict monthly sales trends with a Linear Regression model.',
      longDescription: 'This data science project focused on analyzing historical sales data to build a predictive model for future sales forecasting. By leveraging time-series analysis techniques, I processed the data to achieve stationarity and then applied a Linear Regression model for prediction. The project involved extensive data cleaning, feature engineering, model training, and evaluation using common metrics like RMSE and MAE to ensure accuracy.',
      image: '/images/sales-forecast.jpg',
      technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn', 'TensorFlow'],
      categories: ['Data Science', 'Machine Learning', 'Data Analysis'],
      github: 'https://github.com/hanbit0218/sales_forecast.git',
      demo: null,
      date: 'Feb 2024 - Mar 2024',
      featured: true
    },
    {
      id: 'hydro-sense',
      title: 'Hydro Sense',
      description: 'IoT-based dashboard for soil moisture monitoring, visualizing sensor data and enabling environmental data analysis.',
      longDescription: 'Hydro Sense is an innovative IoT solution designed for the SJSU Community Garden to monitor soil moisture levels. As the frontend team lead, I directed the development of a dashboard that pulls data from soil sensors and presents it in an intuitive interface. The project integrates with Google Sheets API for data export and analysis, allowing gardeners to make informed decisions about irrigation and plant health based on environmental data.',
      image: '/images/hydro-sense.jpg',
      technologies: ['Next.js', 'React', 'JavaScript', 'Tailwind CSS', 'Firebase', 'Google API'],
      categories: ['Frontend', 'IoT', 'Web Development'],
      github: 'https://github.com/hanbit0218/HydroSense.git',
      demo: null,
      date: 'Oct 2023 - Nov 2023',
      featured: true
    },
    {
      id: 'inventory-tracker',
      title: 'Inventory Tracker',
      description: 'A collaborative project creating a basic inventory management tool with real-time data synchronization.',
      longDescription: 'Developed during my time as a Software Engineer Fellow at Headstarter AI, this inventory tracking tool was built to demonstrate real-time data synchronization using Firebase. The application allows users to add, edit, and remove inventory items, with changes reflecting immediately across all connected clients. The frontend was built with React, employing reusable components and a clean, intuitive user interface.',
      image: '/images/inventory-tracker.jpg',
      technologies: ['JavaScript', 'React', 'Firebase', 'Git', 'GitHub'],
      categories: ['Frontend', 'Web Development', 'Collaborative'],
      github: 'https://github.com/hanbit0218/inventory-tracker.git',
      demo: null,
      date: 'Jul 2024 - Aug 2024',
      featured: false
    },
    {
      id: 'promptwave',
      title: 'PromptWave',
      description: 'A modern AI chatbot leveraging free Hugging Face models with a responsive React frontend and Express backend.',
      longDescription: 'PromptWave is a fully-functional AI chatbot that utilizes Hugging Face\'s free Inference API to provide intelligent conversation capabilities without any cost. The application features a sleek, responsive interface built with React and styled-components, allowing users to interact with powerful AI models like Google\'s Gemma, Zephyr, and Mistral. The Express.js backend efficiently handles API communication with Hugging Face\'s servers, while maintaining conversation context and providing a seamless user experience across devices. This project demonstrates implementing AI capabilities in web applications while optimizing for both performance and user experience.',
      image: '/images/promptwave.jpg',
      technologies: ['React', 'Express.js', 'Node.js', 'Hugging Face API', 'styled-components', 'React Router', 'Vercel'],
      categories: ['AI', 'Web Development', 'Full-Stack'],
      github: 'https://github.com/hanbit0218/promptwave.git',
      demo: 'https://promptwave.vercel.app/',
      date: 'Mar 2025 - Apr 2025',
      featured: true
    },
    {
      id: 'analytics-dashboard',
      title: 'User Analytics Dashboard',
      description: 'Backend implementation for capturing and visualizing user engagement metrics for web applications.',
      longDescription: 'Developed during my internship at Life Stages, this project involved creating REST endpoints using Node.js and Express.js to capture and process user engagement data. The API collects metrics such as page views, interaction time, click patterns, and conversion rates, feeding them into an analytics dashboard that provides valuable insights for business decisions. The project required careful consideration of data security, API performance, and database design.',
      image: '/images/analytics-dashboard.jpg',
      technologies: ['Node.js', 'Express.js', 'RESTful APIs', 'Git', 'Jenkins'],
      categories: ['Backend', 'API Development', 'Data Analytics'],
      github: 'https://github.com/hanbit0218/analytics-api.git',
      demo: null,
      date: 'Jun 2024',
      featured: false
    }
  ], []);

  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    if (filter === 'all') {
      return projects;
    }
    return projects.filter(project => 
      project.categories.includes(filter)
    );
  }, [filter, projects]);

  // Get unique categories from all projects
  const categories = useMemo(() => {
    const allCategories = projects.flatMap(project => project.categories);
    return ['all', ...new Set(allCategories)];
  }, [projects]);

  return (
    <div className="projects-page">
      <div className="projects-header">
        <h1>My Projects</h1>
        <p>A collection of my work spanning web development, data science, and more.</p>
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
                <div className="project-placeholder">
                  <span>{project.title.charAt(0)}</span>
                </div>
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
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-action">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                Code
              </a>
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-action">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  Demo
                </a>
              )}
              <Link to={`/projects/${project.id}`} className="project-action">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                Details
              </Link>
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