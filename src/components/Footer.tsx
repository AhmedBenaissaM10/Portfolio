import { portfolio } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {portfolio.name}
        </p>
        <p>Built with React and TypeScript.</p>
      </div>
    </footer>
  );
}
