import { useEffect, useMemo, useState } from 'react';
import { ArrowDown, ArrowUpRight, Download, MapPin } from 'lucide-react';
import { Link } from 'react-router';
import { portfolioData } from '../../data/portfolio';
import { Reveal } from '../../components/Reveal';
import { scrollToSection } from '../../lib/navigation';
import { getResumeStats } from '../../lib/resume';

const baseUrl = import.meta.env.BASE_URL;

export function HeroSection() {
  const { person } = portfolioData;
  const roles = useMemo(
    () => [...new Set([
      person.role,
      ...person.roleVariants,
      ...portfolioData.services.map((service) => service.title),
    ])].map((role) => role.replace(/\s+Developer$/, '')),
    [person.role, person.roleVariants],
  );
  const typedRoles = useMemo(() => roles.filter((role) => role !== 'Support Engineer'), [roles]);
  const [typedRole, setTypedRole] = useState('');
  const [typedRoleIndex, setTypedRoleIndex] = useState(0);
  const [deletingRole, setDeletingRole] = useState(false);

  useEffect(() => {
    const fullRole = typedRoles[typedRoleIndex];
    if (!fullRole) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTypedRole(fullRole);
      return;
    }

    const pauseAtEnd = typedRole === fullRole && !deletingRole;
    const timeout = window.setTimeout(() => {
      if (deletingRole) {
        if (typedRole.length === 0) {
          setDeletingRole(false);
          setTypedRoleIndex((index) => (index + 1) % typedRoles.length);
        } else {
          setTypedRole(typedRole.slice(0, -1));
        }
      } else if (pauseAtEnd) {
        setDeletingRole(true);
      } else {
        setTypedRole(fullRole.slice(0, typedRole.length + 1));
      }
    }, deletingRole ? 45 : pauseAtEnd ? 1100 : 90);

    return () => window.clearTimeout(timeout);
  }, [deletingRole, typedRole, typedRoleIndex, typedRoles]);

  const stats = getResumeStats();
  const statItems = [
    { value: stats.yearsLabel, label: 'Years experience' },
    { value: String(stats.companies), label: 'Companies' },
    { value: String(stats.projects), label: 'Projects' },
    { value: String(stats.credentials), label: 'Credentials' },
    { value: String(stats.languages), label: 'Languages' },
  ];

  return (
    <section className="hero-section" id="introduction" data-home-section aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-atmosphere" aria-hidden="true">
        <span className="hero-orbit hero-orbit-one" />
        <span className="hero-orbit hero-orbit-two" />
        <span className="hero-glow" />
      </div>
      <div className="page-container hero-layout">
        <Reveal className="hero-copy">
          <h1 className="hero-title" id="hero-title">Roles I play as a</h1>
          <p className="hero-role-type-line" aria-label={`Role focus: ${typedRole} Developer`}>
            <span key={typedRoleIndex} className="eyebrow hero-role-typed" aria-hidden="true">
              <span className="eyebrow-mark" />
              <span>{typedRole}</span>
            </span>
            <span className="hero-role-suffix" aria-hidden="true">Developer</span>
            <span className="hero-role-caret" aria-hidden="true" />
          </p>
          <ul className="hero-roles" aria-label="Developer roles">
            {roles.map((role) => (
              <li className={typedRole === role ? 'is-highlighted' : undefined} aria-current={typedRole === role ? 'true' : undefined} key={role}>
                {role}
              </li>
            ))}
          </ul>
          <p className="hero-summary">Building web products from interface to infrastructure.</p>
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
              <span>{person.name}</span>
              <span className="portrait-index">01 / PROFILE</span>
            </div>
          </div>
        </Reveal>
      </div>
      <dl className="resume-stats hero-stats page-container" aria-label="Career statistics">
        {statItems.map((stat) => (
          <div className="resume-stat" key={stat.label}>
            <dt>{stat.label}</dt>
            <dd>{stat.value}</dd>
          </div>
        ))}
      </dl>
      <div className="hero-bottom-line" aria-hidden="true">
        <span>Thoughtful engineering</span>
        <span>Front end · Back end</span>
      </div>
    </section>
  );
}
