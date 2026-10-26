import type { Project } from '../data/portfolio';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card project-card">
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <ul className="tags" aria-label={`${project.title} technologies`}>
        {project.stack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      {project.links && project.links.length > 0 ? (
        <div className="project-links">
          {project.links.map((link) => (
            <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}
