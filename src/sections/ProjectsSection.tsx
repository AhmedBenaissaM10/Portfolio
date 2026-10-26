import ProjectCard from '../components/ProjectCard';
import SectionHeading from '../components/SectionHeading';
import { portfolio } from '../data/portfolio';

export default function ProjectsSection() {
  return (
    <section className="section" aria-labelledby="projects">
      <div className="container">
        <SectionHeading id="projects" title="Projects" />
        <div className="projects-grid">
          {portfolio.projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
