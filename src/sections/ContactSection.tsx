import SectionHeading from '../components/SectionHeading';
import { emailUrl, githubUrl, portfolio } from '../data/portfolio';

export default function ContactSection() {
  const { contact } = portfolio;

  return (
    <section className="section" aria-labelledby="contact">
      <div className="container">
        <SectionHeading id="contact" title="Contact" />
        <dl className="contact-list">
          <div>
            <dt>Email</dt>
            <dd>
              <a href={emailUrl}>{contact.Email}</a>
            </dd>
          </div>
          <div>
            <dt>GitHub</dt>
            <dd>
              <a href={githubUrl} target="_blank" rel="noreferrer">
                {contact.GitHub}
              </a>
            </dd>
          </div>
          <div>
            <dt>Location</dt>
            <dd>{contact.Location}</dd>
          </div>
          <div>
            <dt>Languages</dt>
            <dd>{contact.Languages}</dd>
          </div>
          <div>
            <dt>Studying</dt>
            <dd>{contact.Studying}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
