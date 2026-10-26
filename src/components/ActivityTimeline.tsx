import type { LogEntry } from '../data/portfolio';

export default function ActivityTimeline({ entries }: { entries: LogEntry[] }) {
  // Newest first. Array.prototype.sort is stable, so same-day entries keep their order.
  const sorted = [...entries].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <ol className="timeline">
      {sorted.map((entry) => (
        <li key={`${entry.date}-${entry.title}`}>
          <time dateTime={entry.date}>{entry.date}</time>
          <div className="timeline-body">
            <p className="timeline-title">
              <span className="timeline-kind">{entry.kind}</span>
              {entry.title}
            </p>
            <p>{entry.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
