import { githubUrl, portfolio } from '../data/portfolio';

export default function HeroSection() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-name">
      <div className="container hero-inner">
        <p className="role">{portfolio.role}</p>
        <h1 id="hero-name">{portfolio.name}</h1>
        <p className="lead">{portfolio.headline}</p>
        <div className="cta-row">
          <a className="btn btn-primary" href="#projects">
            View Projects
          </a>
          <a className="btn btn-secondary" href={githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
        <p className="hero-meta">{portfolio.locationLine}</p>
      </div>
    </section>
  );
}
