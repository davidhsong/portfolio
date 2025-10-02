import React from 'react';

export default function ProjectCard({ project }) {
  const hasLinks = (project.links || []).length > 0;
  const gh = hasLinks ? project.links.find(l => /github/i.test(l.label)) || project.links[0] : null;

  return (
    <article className="card project-card" aria-labelledby={`${project.name}-title`}>
      {/* Header */}
      <header className="pc-header">
        <h3 id={`${project.name}-title`} className="pc-title h3-tight glow">
          {project.name}
        </h3>
        <span className="pc-date muted glow" aria-label="Project dates">
          {project.dates}
        </span>
      </header>

      {/* Divider */}
      <div className="pc-divider" aria-hidden="true" />

      {/* Bullets */}
      <section className="pc-body">
        <ul className="pc-bullets glow">
          {project.bullets.map((b, i) => (
            <li key={i} className="pc-bullet">{b}</li>
          ))}
        </ul>
      </section>

      {/* Footer */}
      <footer className="pc-footer">
        {gh && (
          <a
            className="btn ghost tiny pc-cta"
            href={gh.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.name} on GitHub`}
          >
            {gh.label}
          </a>
        )}
      </footer>
    </article>
  );
}
