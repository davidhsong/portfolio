import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/About.css';

const About = () => {
  const { theme } = useContext(ThemeContext);

  // Education data from resume
  const education = {
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
  };

  // Skills data from resume
  const skills = [
    {
      category: "Programming & Languages",
      items: ["Python", "Java", "JavaScript", "C++", "SQL", "HTML/CSS"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      )
    },
    {
      category: "Frameworks & Libraries",
      items: ["React", "Next.js", "Node.js", "Express.js", "Django", "Spring Boot", "Pandas", "NumPy", "Scikit-learn"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      )
    },
    {
      category: "Infrastructure & Tools",
      items: ["MongoDB", "MySQL", "Firebase", "AWS EC2", "Git", "GitHub", "Docker", "Linux", "RESTful APIs"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
        </svg>
      )
    }
  ];

  // Interests data 
  const interests = [
    {
      title: "Machine Learning",
      description: "Exploring neural networks and their applications in real-world problems.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
          <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
          <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      )
    },
    {
      title: "Open Source",
      description: "Contributing to open source projects and learning from the community.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      )
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful interfaces that enhance user experience.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
          <path d="M2 2l7.586 7.586"></path>
          <circle cx="11" cy="11" r="2"></circle>
        </svg>
      )
    },
    {
      title: "Mobile Development",
      description: "Building cross-platform mobile applications using React Native.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      )
    }
  ];

  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About Me</h1>
        <p>Get to know more about who I am, my background, and what drives me.</p>
      </div>

      <div className="about-container">
        <section className="about-section">
          <div className="section-content">
            <div className="section-text">
              <h2>My Story</h2>
              <p>
                Hello! I'm David Song, a passionate Computer Science student at San José State University with a focus on full-stack development. My journey in technology began with a fascination for how software shapes our daily experiences, which led me to pursue a career where I can create impactful digital solutions.
              </p>
              <p>
                Throughout my academic and professional journey, I've developed a strong foundation in both frontend and backend technologies. I enjoy the process of building applications from concept to deployment, solving complex problems, and continuously learning new technologies to stay at the forefront of the industry.
              </p>
              <p>
                My experience spans from developing e-commerce platforms to creating data analysis tools and IoT dashboards. I'm particularly interested in creating user-centered applications that combine technical excellence with intuitive design.
              </p>
            </div>
            <div className="section-image">
              <div className="about-image-placeholder">
                <span>DS</span>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Education</h2>
          <div className="education-card">
            <div className="education-header">
              <div>
                <h3>{education.institution}</h3>
                <p className="education-degree">{education.degree}</p>
              </div>
              <div className="education-meta">
                <span className="education-location">{education.location}</span>
                <span className="education-date">{education.date}</span>
              </div>
            </div>
            <div className="education-details">
              <h4>Relevant Coursework</h4>
              <div className="courses-list">
                {education.courses.map((course, index) => (
                  <span key={index} className="course-item">{course}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Skills</h2>
          <div className="skills-grid">
            {skills.map((skillGroup, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon">
                  {skillGroup.icon}
                </div>
                <h3>{skillGroup.category}</h3>
                <div className="skill-items">
                  {skillGroup.items.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="about-section">
          <h2>Interests & Hobbies</h2>
          <div className="interests-grid">
            {interests.map((interest, index) => (
              <div key={index} className="interest-card">
                <div className="interest-icon">
                  {interest.icon}
                </div>
                <h3>{interest.title}</h3>
                <p>{interest.description}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="about-cta">
          <h2>Let's Connect</h2>
          <p>Interested in working together or have questions about my experience?</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
            <Link to="/resume" className="btn btn-secondary">View My Resume</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;