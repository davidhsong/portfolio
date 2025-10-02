import React, { useState } from 'react';
import { DATA } from './data';
import ProjectCard from './components/ProjectCard';

export default function App() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  // ===== Contact form =====
  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!form.email.trim()) e.email = 'Please enter your email.';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email.';
    if (!form.message.trim()) e.message = 'Please enter a message.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submitMailto = (evt) => {
    evt.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(`Inquiry for ${DATA.name} — Portfolio`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${DATA.contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="site-header" role="banner">
        <div className="container header-inner">
          <a href="#top" className="brand" aria-label="Home">
            <span className="brand-dot" aria-hidden="true">●</span> {DATA.name}
          </a>
          <nav aria-label="Primary">
            <ul className="nav">
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Hobbies</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main id="top">
        <section className="hero container" aria-label="Introduction">
          <div className="hero-card">
            <div className="hero-inner">
              {/* Left: copy */}
              <div className="hero-copy">
                <h1 className="hero-title">{DATA.name}</h1>
                {DATA.tagline && <p className="hero-tag">{DATA.tagline}</p>}

                {/* Résumé header chips */}
                {Array.isArray(DATA.headerMeta) && DATA.headerMeta.length > 0 && (
                  <div className="chips" aria-label="Contact and links" style={{marginBottom: '0.6rem'}}>
                    {DATA.headerMeta.map((item, i) =>
                      item.url ? (
                        <a
                          key={i}
                          className="chip"
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={item.label}
                        >
                          {item.label}
                        </a>
                      ) : (
                        <span key={i} className="chip">{item.label}</span>
                      )
                    )}
                  </div>
                )}

                <div className="cta-row">
                  <a
                    className="btn primary"
                    href="/resume.pdf"
                    download="davids_resume.pdf"
                    aria-label="Download Résumé PDF"
                  >
                    Download Résumé
                  </a>
                  <a className="btn ghost" href="#hobbies">
                    Contact Me
                  </a>
                </div>
              </div>

              {/* Right: avatar */}
              <div className="hero-portrait">
                <img
                  src="/me.jpg"
                  className="avatar"
                  width="240"
                  height="240"
                  loading="lazy"
                  alt="Portrait of David Song"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="section container" aria-labelledby="projects-title">
          <h2 id="projects-title" className="section-title">Projects</h2>
          <div className="grid">
            {DATA.projects.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="section container" aria-labelledby="experience-title">
          <h2 id="experience-title" className="section-title">Experience</h2>
          <ol className="timeline" aria-label="Work experience">
            {DATA.experience.map((item) => (
              <li className="timeline-item" key={item.title + item.company}>
                <div className="tl-card">
                  <div className="tl-header">
                    <h3 className="tl-title">{item.title}</h3>
                    <span className="tl-meta">{item.company} • {item.dates}</span>
                  </div>
                  <ul className="tl-bullets">
                    {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Education */}
        <section id="education" className="section container" aria-labelledby="education-title">
          <h2 id="education-title" className="section-title">Education</h2>
          <div className="card" role="article" aria-label="Education details">
            <h3 style={{marginTop: 0}}>{DATA.education.school}</h3>
            <div className="tl-meta" style={{marginBottom: '0.4rem'}}>{DATA.education.location}</div>
            <div><strong>{DATA.education.degree}</strong></div>
            <div className="tl-meta" style={{margin: '0.2rem 0 0.8rem'}}>{DATA.education.dates}</div>
            <div>
              <strong>Relevant Coursework:</strong>
              <ul style={{margin: '0.5rem 0 0.5rem 1rem'}}>
                {DATA.education.coursework.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section container" aria-labelledby="skills-title">
          <h2 id="skills-title" className="section-title">Skills</h2>
          <div className="skills">
            {Object.entries(DATA.skills).map(([group, items]) => (
              <div className="skill-group" key={group}>
                <h3 className="skill-title">{group}</h3>
                <div className="chips">
                  {items.map((s) => <span key={s} className="chip" role="listitem">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        {/* Hobbies */}
        <section id="hobbies" className="section container" aria-labelledby="hobbies-title">
          <h2 id="hobbies-title" className="section-title">Hobbies</h2>
          <div className="grid">
            {DATA.interestsDetailed.map((hobby, i) => (
              <div className="card hobby-card" key={i}>
                {/* Icon */}
                <div className="hobby-icon">
                  {hobby.icon && <span className="icon">{hobby.icon}</span>}
                </div>
                <h3>{hobby.title}</h3>
                <p>{hobby.explanation}</p>
                <div className="chips">
                  {hobby.images.map((img, j) => (
                    <img
                      key={j}
                      src={img}
                      alt={`${hobby.title} example ${j + 1}`}
                      className="hobby-img"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} {DATA.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
