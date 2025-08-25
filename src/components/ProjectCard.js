import React from 'react';

export default function ProjectCard({ project }) {
  return (
    <article className="card" aria-labelledby={`proj-${slug(project.name)}`}>
      <h3 id={`proj-${slug(project.name)}`}>{project.name}</h3>

      {project.dates && <div className="tl-meta" style={{marginBottom: '0.4rem'}}>{project.dates}</div>}

      {project.description && <p>{project.description}</p>}

      {project.bullets && project.bullets.length > 0 && (
        <ul style={{margin: '0.5rem 0 0.5rem 1rem'}}>
          {project.bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      )}

      {project.tech && project.tech.length > 0 && (
        <div className="chips" role="list" aria-label="Technologies used">
          {project.tech.map((t) => <span className="chip" key={t}>{t}</span>)}
        </div>
      )}

      {project.links && project.links.length > 0 && (
        <div className="links" aria-label="Project links">
          {project.links.map((l, idx) => {
            if (!l.url) return <span key={idx} className="chip">{l.label}</span>;
            return (
              <a
                key={l.label}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} ${l.label}`}
              >
                {l.label}
              </a>
            );
          })}
        </div>
      )}
    </article>
  );
}

function slug(s) {
  return s.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}
