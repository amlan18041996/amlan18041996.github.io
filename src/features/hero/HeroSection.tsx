import { ArrowDown, ArrowUpRight, Download, MapPin } from 'lucide-react';
import { Link } from 'react-router';
import { portfolioData } from '../../data/portfolio';
import { Reveal } from '../../components/Reveal';
import { scrollToSection } from '../../lib/navigation';

const baseUrl = import.meta.env.BASE_URL;

export function HeroSection() {
  const { person } = portfolioData;

  return (
    <section className="hero-section" id="top" data-home-section aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-atmosphere" aria-hidden="true">
        <span className="hero-orbit hero-orbit-one" />
        <span className="hero-orbit hero-orbit-two" />
        <span className="hero-glow" />
      </div>
      <div className="page-container hero-layout">
        <Reveal className="hero-portrait-wrap">
          <div className="hero-portrait-frame">
            <img
              className="hero-portrait"
              src={person.avatar}
              alt={`Portrait of ${person.name}`}
              fetchPriority="high"
              decoding="async"
            />
            <div className="portrait-caption">
              <span className="portrait-index">01 / PROFILE</span>
              <span>{person.name}</span>
            </div>
          </div>
          <div className="hero-stamp" aria-hidden="true">
            <span>FULL STACK</span>
            <span>DEVELOPER</span>
            <span className="stamp-dot">✳</span>
          </div>
        </Reveal>

        <Reveal className="hero-copy">
          <p className="eyebrow" aria-label="Portfolio location">
            <span className="eyebrow-mark" />
            Portfolio <span aria-hidden="true">/</span> {person.location}
          </p>
          <h1 id="hero-title">
            {person.name}
          </h1>
          <p className="hero-role">{person.role}</p>
          <div className="hero-specialties" aria-label="Specialties">
            {person.roleVariants.map((role) => <span key={role}>{role}</span>)}
          </div>
          <p className="hero-summary">{person.tagline}</p>
          <div className="hero-actions">
            <Link
              className="button button-primary"
              to="/#projects"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection('projects');
              }}
            >
              Explore my work <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
            <a
              className="button button-quiet"
              href={`${baseUrl}${person.resumeUrl}`}
              download
            >
              <Download size={16} aria-hidden="true" />
              Download résumé
            </a>
          </div>
          <div className="hero-meta">
            <span>
              <MapPin size={15} aria-hidden="true" />
              {person.location}
            </span>
            <Link to="/about">Who I am <ArrowDown size={15} aria-hidden="true" /></Link>
          </div>
        </Reveal>

      </div>
      <div className="hero-bottom-line" aria-hidden="true">
        <span>Thoughtful engineering</span>
        <span>Front end · Back end</span>
      </div>
    </section>
  );
}
