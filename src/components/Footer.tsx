import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router';
import { portfolioData } from '../data/portfolio';
import { primaryLinks } from '../constants/site';

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
  website: ArrowUpRight,
};

function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-container">
        <div className="footer-cta">
          <div>
            <p className="eyebrow">Amlan Sengupta · Full Stack Developer</p>
            <h2>Build with purpose<span>.</span></h2>
          </div>
          <Link className="button button-primary" to="/contact">
            Start a conversation <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <div className="footer-main">
          <div className="footer-identity">
            <Link className="brand-link" to="/">
              <span className="brand-mark" aria-hidden="true">AS</span>
              <span>{portfolioData.person.name}</span>
            </Link>
            <p>Thoughtful digital experiences, elegant code, and continuous learning.</p>
          </div>
          <nav className="footer-navigation" aria-label="Footer navigation">
            {primaryLinks.map((item) => (
              <Link to={item.href} key={item.href}>{item.label}</Link>
            ))}
          </nav>
          <div className="footer-socials" aria-label="Social profiles">
            {portfolioData.socials.map((social) => {
              const Icon = socialIcons[social.platform];
              return (
                <a
                  href={social.url}
                  key={social.platform}
                  aria-label={social.label}
                  title={social.label}
                  target={social.platform === 'email' ? undefined : '_blank'}
                  rel={social.platform === 'email' ? undefined : 'noreferrer'}
                >
                  <Icon size={17} aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
        <div className="footer-bottom">
          <small>© {new Date().getFullYear()} {portfolioData.person.name}</small>
          <small>Designed &amp; built with care</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
