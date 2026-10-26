import ActivityTimeline from '../components/ActivityTimeline';
import SectionHeading from '../components/SectionHeading';
import { portfolio } from '../data/portfolio';

export default function ActivitySection() {
  return (
    <section className="section" aria-labelledby="activity">
      <div className="container">
        <SectionHeading
          id="activity"
          title="Activity"
          intro={`Build and learning log, newest first. Last updated ${portfolio.updated}.`}
        />
        <ActivityTimeline entries={portfolio.log} />
      </div>
    </section>
  );
}
