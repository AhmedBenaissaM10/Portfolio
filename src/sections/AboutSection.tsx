import SectionHeading from '../components/SectionHeading';
import { portfolio } from '../data/portfolio';

export default function AboutSection() {
  return (
    <section className="section" aria-labelledby="about">
      <div className="container">
        <SectionHeading id="about" title="About" />
        <div className="about-grid">
          {portfolio.about.map((block) => (
            <div key={block.title} className="about-block">
              <h3>{block.title}</h3>
              {block.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
