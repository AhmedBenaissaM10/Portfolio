import type { SkillGroup as SkillGroupType } from '../data/portfolio';

export default function SkillGroup({ group }: { group: SkillGroupType }) {
  return (
    <section className="skill-group" aria-label={group.group}>
      <h3>{group.group}</h3>
      <ul className="tags">
        {group.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
