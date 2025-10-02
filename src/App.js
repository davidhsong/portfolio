import React, { useEffect } from 'react';
import { DATA } from './data';
import NodeRects from './NodeRects';
import ProjectCard from './ProjectCard';
import './styles.css';

export default function App() {
  const mail = () => {
    const subject = encodeURIComponent('Interview with David Song');
    const body = encodeURIComponent('Hi David,\n\nSaw your work and wanted to connect about a role.\n\nBest,\n');
    window.location.href = `mailto:${DATA.contactEmail}?subject=${subject}&body=${body}`;
  };

  // Center sections on navbar click so the whole section is visible
  useEffect(() => {
    const links = Array.from(document.querySelectorAll('.tabs .tab, .logo'));
    const onClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el && 'scrollIntoView' in el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    };
    links.forEach(a => a.addEventListener('click', onClick));
    return () => links.forEach(a => a.removeEventListener('click', onClick));
  }, []);

  return (
    <div className="site">
      <header className="mast">
        <div className="mast-inner">
          <a href="#hero" className="logo"><span>DS</span> {DATA.name}</a>
          <nav className="tabs" aria-label="Primary">
            <a className="tab" href="#projects">Projects</a>
            <a className="tab" href="#experience">Experience</a>
            <a className="tab" href="#education">Education</a>
            <a className="tab" href="#skills">Skills</a>
            <a className="tab" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <NodeRects
        outlineOffset={18}
        nodeRadius={11}
        lineWidth={2}
        lineColor="rgba(135,206,250,0.75)"
        nodeColorA="#60a5fa"
        nodeColorB="#a78bfa"
        hoverMaxOffset={12}
        hoverRadius={180}
        maxOutward={22}
        ease={0.12}
        fps={30}
        perimeterExtrasPerSide={2}
        perimeterOutwardCap={24}
        perimeterDriftTangential={0.06}
        perimeterDriftNormal={0.02}
        perimeterMouseFactor={0.08}
      >
        {/* ===== HERO / ABOUT ===== */}
        <section className="pane section hero" id="hero" data-pane="hero" aria-labelledby="hero-title">
          <header className="section-header">
            <div className="section-eyebrow glow">About</div>
            <h1 id="hero-title" className="title-tight glow-strong">{DATA.name}</h1>
            <p className="section-sub glow">
              CS @ SJSU · Digital Media Art minor · Graduating Dec 2025
            </p>
          </header>

          <div className="hero-stack">
            <p className="lead-compact glow">
              I like building clean, useful software with small teams that ship. I’m graduating
              <strong> December 2025</strong> (CS major, <em>Digital Media Art</em> minor) and I’m looking for
              <strong> New-Grad SWE roles</strong> (frontend-leaning full-stack) starting
              <strong> Jan–Aug 2026</strong>. Open to internship chats before then, too.
            </p>

            <div className="meta-kv">
              <div className="kv">
                <div className="k">Degree</div>
                <div className="v">{DATA.education.degree}</div>
              </div>
              <div className="kv">
                <div className="k">Graduation</div>
                <div className="v">{DATA.education.dates}</div>
              </div>
              <div className="kv">
                <div className="k">Location</div>
                <div className="v">{DATA.education.location}</div>
              </div>
              <div className="kv">
                <div className="k">Seeking</div>
                <div className="v">New-Grad SWE • Frontend-leaning Full-Stack</div>
              </div>
            </div>

            <div className="row gap-s hero-actions">
              <button className="btn prime" onClick={mail}>Email</button>
              <a className="btn" href="/resume.pdf" download="david_song_resume.pdf">Resume</a>
              <a className="btn ghost" href="https://www.linkedin.com/in/davidthesong/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="btn ghost" href="https://github.com/davidhsong" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </section>

        {/* ===== PROJECTS ===== */}
        <section className="pane section" id="projects" data-pane="projects" aria-labelledby="projects-title">
          <header className="section-header">
            <div className="section-eyebrow glow">Work</div>
            <h2 id="projects-title" className="h2-tight glow-strong">Projects</h2>
            <p className="section-sub glow">Selected builds with clean UIs and stable backends.</p>
          </header>
          <div className="hr"></div>
          <div className="cards three-col">
            {DATA.projects.map(p => <ProjectCard key={p.name} project={p} />)}
          </div>
        </section>

        {/* ===== EXPERIENCE ===== */}
        <section className="pane section" id="experience" data-pane="experience" aria-labelledby="experience-title">
          <header className="section-header">
            <div className="section-eyebrow glow">Background</div>
            <h2 id="experience-title" className="h2-tight glow-strong">Experience</h2>
            <p className="section-sub glow">Internships & fellowships focused on reliable product work.</p>
          </header>
          <div className="hr"></div>

          <ol className="timeline compact-timeline">
            {DATA.experience.map(x => (
              <li key={x.title + x.company} className="xp-item">
                <div className="xp-head">
                  <div className="xp-titles">
                    <h3 className="h3-tight glow">{x.title}</h3>
                    <div className="xp-company muted glow">{x.company}</div>
                  </div>
                  <span className="badge glow">{x.dates}</span>
                </div>
                <ul className="mini compact-list bullets glow xp-bullets">
                  {x.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        {/* ===== EDUCATION ===== */}
        <section className="pane section" id="education" data-pane="education" aria-labelledby="education-title">
          <header className="section-header">
            <div className="section-eyebrow glow">School</div>
            <h2 id="education-title" className="h2-tight glow-strong">Education</h2>
            <p className="section-sub glow">{DATA.education.school} • {DATA.education.location}</p>
          </header>
          <div className="hr"></div>

          <div className="tile tile-compact edu-block">
            <div className="edu-top">
              <div>
                <h3 className="h3-tight glow">{DATA.education.degree}</h3>
                <div className="muted glow">{DATA.education.location}</div>
              </div>
              <span className="badge glow">{DATA.education.dates}</span>
            </div>
            <div className="edu-body">
              <div className="panel-title glow">Relevant Coursework</div>
              {/* EVENLY SPREAD OUT via multi-columns */}
              <ul className="mini compact-list edu-courses glow">
                {DATA.education.coursework.map((c) => <li key={c} className="edu-course">{c}</li>)}
              </ul>
            </div>
          </div>
        </section>

        {/* ===== SKILLS ===== */}
        <section className="pane section" id="skills" data-pane="skills" aria-labelledby="skills-title">
          <header className="section-header">
            <div className="section-eyebrow glow">Toolkit</div>
            <h2 id="skills-title" className="h2-tight glow-strong">Skills</h2>
            <p className="section-sub glow">The stacks and concepts I use most.</p>
          </header>
          <div className="hr"></div>

          <div className="skill-groups">
            {Object.entries(DATA.skills).map(([group, items]) => (
              <div key={group} className="skill-group">
                <div className="skill-head glow">{group}</div>
                <ul className="skills-list glow">
                  {items.map(s => <li key={s}>{s}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ===== CONTACT ===== */}
        <section className="pane section cta" id="contact" data-pane="contact" aria-labelledby="contact-title">
          <header className="section-header">
            <div className="section-eyebrow glow">Contact</div>
            <h2 id="contact-title" className="h2-tight glow-strong">Reach out</h2>
            <p className="section-sub glow">If this lines up with what you're building, I’m easy to reach.</p>
          </header>
          <div className="hr"></div>

          <div className="row gap-s">
            <button className="btn prime" onClick={mail}>Email</button>
            <a className="btn" href="/resume.pdf" download="david_song_resume.pdf">Resume</a>
            <a className="btn ghost" href="https://www.linkedin.com/in/davidthesong/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn ghost" href="https://github.com/davidhsong" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </section>
      </NodeRects>

      <footer className="foot muted glow">© {new Date().getFullYear()} {DATA.name}</footer>
    </div>
  );
}
