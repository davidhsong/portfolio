import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Projects.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  // Use useMemo to memoize the projects array
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

  // Find the project with matching ID
  useEffect(() => {
    const findProject = projects.find(p => p.id === id);
    
    if (findProject) {
      setProject(findProject);
      setLoading(false);
    } else {
      // Project not found, redirect to projects page
      setTimeout(() => {
        navigate('/projects');
      }, 1000);
    }
  }, [id, navigate, projects]);

  if (loading) {
    return (
      <div className="loading">
        <p>Loading project details...</p>
      </div>
    );
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
          {project.categories && project.categories.map((category, index) => (
            <div key={index} className="project-detail-category">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                <line x1="7" y1="7" x2="7.01" y2="7"></line>
              </svg>
              {category}
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
          {project.technologies.map((tech, index) => (
            <span key={index} className="project-detail-tech-item">{tech}</span>
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
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
          View Code
        </a>
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            View Live Demo
          </a>
        )}
      </motion.div>
    </div>
  );
};

export default ProjectDetail;