type Props = { id: string; title: string; intro?: string };

export default function SectionHeading({ id, title, intro }: Props) {
  return (
    <header className="section-heading">
      <h2 id={id}>{title}</h2>
      {intro ? <p>{intro}</p> : null}
    </header>
  );
}
