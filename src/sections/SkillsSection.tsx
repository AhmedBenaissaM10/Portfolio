import SectionHeading from '../components/SectionHeading';
import SkillGroup from '../components/SkillGroup';
import { portfolio } from '../data/portfolio';

export default function SkillsSection() {
  return (
    <section className="section" aria-labelledby="skills">
      <div className="container">
        <SectionHeading id="skills" title="Skills" />
        <div className="skills-grid">
          {portfolio.skills.map((group) => (
            <SkillGroup key={group.group} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}
