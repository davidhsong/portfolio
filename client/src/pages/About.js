import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';

const About = () => {
  // Education pulled from resume
  const education = {
    institution: "San José State University",
    location: "San José, CA",
    degree: "B.S., Computer Science",
    date: "Expected Dec 2025",
    courses: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Science Senior Project",
      "Software Engineering",
      "Object-Oriented Design",
      "Operating Systems",
      "Data Structures & Algorithms",
      "Python Data Analysis",
      "Big Data Processing",
      "Database Systems",
      "Information Security",
      "Programming Paradigms",
      "Data Visualization"
    ]
  };

  // Skills aligned exactly to resume categories
  const skills = [
    {
      category: "Languages",
      items: ["JavaScript (ES6+)", "Python", "Java", "SQL"]
    },
    {
      category: "Backend & APIs",
      items: ["RESTful APIs", "Microservices", "Authentication (JWT, OAuth)"]
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MongoDB", "MySQL", "Elastic Search (indexing/search)"]
    },
    {
      category: "Cloud & Infrastructure",
      items: ["GCP", "Firebase", "Kubernetes", "Git (CI/CD, version control)"]
    },
    {
      category: "Networking & Systems",
      items: ["Information Security fundamentals", "API scalability", "Redis (caching)"]
    }
  ];

  const interests = [
    {
      title: "Machine Learning",
      description: "Exploring model selection, evaluation, and practical applications."
    },
    {
      title: "Open Source",
      description: "Learning from the community and contributing small fixes and docs."
    },
    {
      title: "UI/UX Design",
      description: "Building intuitive interfaces focused on clarity and performance."
    }
  ];

  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About Me</h1>
        <p>I'm David Song, a CS student focused on building reliable, user-centered software.</p>
      </div>

      <div className="about-container">
        <section className="about-section">
          <div className="section-content">
            <div className="section-text">
              <h2>My Story</h2>
              <p>
                I study Computer Science at San José State University and enjoy turning ideas into production-ready software.
                My interests span full-stack web development, APIs, and data-driven apps.
              </p>
              <p>
                Recently, I’ve worked on an e-commerce platform (Zaiku), an AI chatbot (PromptWave),
                and an IoT dashboard (HydroSense) with a focus on correctness, performance, and clean UX.
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
            {skills.map((group, i) => (
              <div key={i} className="skill-card">
                <h3>{group.category}</h3>
                <div className="skill-items">
                  {group.items.map((skill, j) => (
                    <span key={j} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="about-section">
          <h2>Interests</h2>
          <div className="interests-grid">
            {interests.map((item, i) => (
              <div key={i} className="interest-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
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
