import React from 'react';
import '../styles/Resume.css';

const Resume = () => {
  // Resume data from your PDF resume
  const resumeData = {
    personalInfo: {
      name: "David Song",
      email: "davidhsongg@gmail.com",
      phone: "(669) 236-1331",
      linkedin: "linkedin.com/in/davidthesong",
      github: "github.com/hanbit0218",
      website: "https://dsong.bio"
    },
    education: [
      {
        institution: "San José State University",
        location: "San José, CA",
        degree: "B.S., Computer Science",
        date: "Expected Dec 2025",
        courses: [
          "Object-Oriented Programming",
          "Operating Systems",
          "Data Structures",
          "Database Management Systems",
          "Artificial Intelligence",
          "Machine Learning",
          "Formal Languages",
          "Information Security",
          "Programming Paradigms"
        ]
      }
    ],
    experience: [
      {
        company: "Headstarter AI",
        position: "Software Engineer Fellow",
        date: "Jul 2024 - Aug 2024",
        accomplishments: [
          "Contributed to a team project creating a basic inventory tracking tool using Firebase for data storage and React for the frontend UI",
          "Implemented a simple chatbot using pre-built AWS Bedrock templates and followed tutorials to host it on an AWS EC2 instance",
          "Participated in daily stand-ups and weekly sprint planning meetings, learning Agile methodologies through hands-on practice"
        ],
        technologies: "JavaScript, React, Firebase, AWS (basic usage), Git, GitHub"
      },
      {
        company: "Life Stages",
        position: "Software Engineer Intern",
        date: "May 2024 - Jul 2024",
        accomplishments: [
          "Developed REST endpoints using Node.js and Express.js to capture user engagement metrics, contributing to the analytics dashboard",
          "Participated in DevOps meetings and helped test deployment scripts, learning about CI/CD workflows in a production environment",
          "Fixed 8 minor bugs in the API codebase and created documentation for backend services under senior developer supervision"
        ],
        technologies: "Node.js, Express.js, RESTful APIs, Git, Jenkins"
      }
    ],
    projects: [
      {
        name: "Zaiku",
        url: "https://github.com/hanbit0218/zaiku.git",
        website: "https://www.zaikuofficial.com/",
        date: "Jan 2025 - Mar 2025",
        accomplishments: [
          "Built a full-stack e-commerce platform for Asian-inspired fashion using React, Node.js/Express, and MongoDB with JWT authentication",
          "Implemented responsive UI components including shopping cart with persistent storage, advanced search functionality with real-time suggestions, and secure checkout process",
          "Designed and consumed RESTful APIs for user management, product catalog, and order processing using Axios and context-based state management"
        ],
        technologies: "React, JavaScript, Node.js, Express, MongoDB, JWT Authentication, Google OAuth, RESTful API, Context API"
      },
      {
        name: "Sales Forecast",
        url: "https://github.com/hanbit0218/sales_forecast.git",
        date: "Feb 2024 - Mar 2024",
        accomplishments: [
          "Implemented a time-series analysis project using Python to predict monthly sales trends with a Linear Regression model",
          "Processed historical sales data with Pandas, applying differencing techniques to achieve stationarity and visualizing monthly patterns across multiple time periods",
          "Evaluated model performance using RMSE and MAE metrics, achieving prediction accuracy within 15% of actual sales figures"
        ],
        technologies: "Python, Pandas, NumPy, Matplotlib, Scikit-learn, TensorFlow (imported but not fully implemented)"
      },
      {
        name: "Hydro Sense",
        url: "https://github.com/hanbit0218/HydroSense.git",
        date: "Oct 2023 - Nov 2023",
        accomplishments: [
          "Led a frontend team of 5 developers in creating an IoT-based dashboard for SJSU Community Garden's soil moisture monitoring system",
          "Developed responsive React components to visualize sensor data, integrating Google Sheets API to allow gardeners to export and analyze environmental data",
          "Created 3 informational pages with responsive design using Next.js and Tailwind CSS to enhance user experience across both mobile and desktop devices"
        ],
        technologies: "Next.js, React, JavaScript, Tailwind CSS, Firebase, Google API"
      }
    ],
    skills: [
      {
        category: "Programming & Languages",
        items: ["Python", "Java", "JavaScript", "C++", "SQL", "HTML/CSS"]
      },
      {
        category: "Frameworks & Libraries",
        items: ["React", "Next.js", "Node.js", "Express.js", "Django", "Spring Boot", "Pandas", "NumPy", "Scikit-learn"]
      },
      {
        category: "Infrastructure & Tools",
        items: ["MongoDB", "MySQL", "Firebase", "AWS EC2", "AWS Bedrock", "Vercel", "Git", "GitHub", "CI/CD Pipelines", "Docker", "Linux", "UNIX", "Windows", "RESTful APIs", "JWT Authentication", "Agile Development", "Time Series Analysis"]
      }
    ]
  };

  return (
    <div className="resume-page">
      <div className="resume-header">
        <h1>Resume</h1>
        <p>Here's a summary of my education, work experience, projects, and skills.</p>
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-primary download-resume"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Download Resume
        </a>
      </div>

      <div className="resume-container">
        <div className="resume-sidebar">
          <div className="resume-contact">
            <h3>Contact Information</h3>
            <ul>
              <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href={`mailto:${resumeData.personalInfo.email}`}>{resumeData.personalInfo.email}</a>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href={`tel:${resumeData.personalInfo.phone}`}>{resumeData.personalInfo.phone}</a>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <a href={`https://${resumeData.personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer">
                  {resumeData.personalInfo.linkedin}
                </a>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <a href={`https://${resumeData.personalInfo.github}`} target="_blank" rel="noopener noreferrer">
                  {resumeData.personalInfo.github}
                </a>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                <a href={resumeData.personalInfo.website} target="_blank" rel="noopener noreferrer">
                  {resumeData.personalInfo.website}
                </a>
              </li>
            </ul>
          </div>
          
          <div className="resume-skills">
            <h3>Skills</h3>
            {resumeData.skills.map((skillGroup, index) => (
              <div key={index} className="skill-category">
                <h4>{skillGroup.category}</h4>
                <div className="skill-list">
                  {skillGroup.items.map((skill, i) => (
                    <span key={i} className="skill-item">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="resume-content">
          <section className="resume-section">
            <h2>Education</h2>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="resume-item">
                <div className="item-header">
                  <div>
                    <h3>{edu.institution}</h3>
                    <p className="item-subtitle">{edu.degree}</p>
                  </div>
                  <div className="item-meta">
                    <span className="item-location">{edu.location}</span>
                    <span className="item-date">{edu.date}</span>
                  </div>
                </div>
                <div className="item-details">
                  <h4>Relevant Coursework</h4>
                  <div className="courses-list">
                    {edu.courses.map((course, i) => (
                      <span key={i} className="course-item">{course}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </section>
          
          <section className="resume-section">
            <h2>Experience</h2>
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="resume-item">
                <div className="item-header">
                  <div>
                    <h3>{exp.company}</h3>
                    <p className="item-subtitle">{exp.position}</p>
                  </div>
                  <div className="item-meta">
                    <span className="item-date">{exp.date}</span>
                  </div>
                </div>
                <div className="item-details">
                  <ul className="accomplishments-list">
                    {exp.accomplishments.map((accomplishment, i) => (
                      <li key={i}>{accomplishment}</li>
                    ))}
                  </ul>
                  <div className="tech-stack">
                    <strong>Tech Stack:</strong> {exp.technologies}
                  </div>
                </div>
              </div>
            ))}
          </section>
          
          <section className="resume-section">
            <h2>Projects</h2>
            {resumeData.projects.map((project, index) => (
              <div key={index} className="resume-item">
                <div className="item-header">
                  <div>
                    <h3>
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        {project.name}
                      </a>
                      {project.website && (
                        <span className="project-website">
                          <a href={project.website} target="_blank" rel="noopener noreferrer">
                            Live Demo
                          </a>
                        </span>
                      )}
                    </h3>
                  </div>
                  <div className="item-meta">
                    <span className="item-date">{project.date}</span>
                  </div>
                </div>
                <div className="item-details">
                  <ul className="accomplishments-list">
                    {project.accomplishments.map((accomplishment, i) => (
                      <li key={i}>{accomplishment}</li>
                    ))}
                  </ul>
                  <div className="tech-stack">
                    <strong>Tech Stack:</strong> {project.technologies}
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;