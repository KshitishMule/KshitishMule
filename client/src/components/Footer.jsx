import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { PERSONAL } from '../data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-100 dark:border-gray-800 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400 font-mono">
          © {year} <span className="text-primary">{PERSONAL.name}</span> — Built with React + Express
        </p>
        <div className="flex items-center gap-3">
          {[
            { icon: FiGithub, href: PERSONAL.github },
            { icon: FiLinkedin, href: PERSONAL.linkedin },
            { icon: FiMail, href: `mailto:${PERSONAL.email}` },
          ].map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-primary transition-colors"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
