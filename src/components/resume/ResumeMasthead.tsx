import { ArrowDownToLine, CalendarClock, Check, Mail, MapPin, Phone, Printer } from 'lucide-react';
import { Reveal } from '../Reveal';
import { portfolioData } from '../../data/portfolio';
import { getResumeStats } from '../../lib/resume';
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard';

const baseUrl = import.meta.env.BASE_URL;

interface ResumeMastheadProps {
  onPrint: () => void;
  isPreparingPrint: boolean;
}

/**
 * Résumé masthead: identity, availability, computed career stats,
 * contact chips with copy-to-clipboard, and document actions.
 */
export function ResumeMasthead({ onPrint, isPreparingPrint }: ResumeMastheadProps) {
  const { person } = portfolioData;
  const stats = getResumeStats();
  const { copied, copy } = useCopyToClipboard();

  const statItems = [
    { value: stats.yearsLabel, label: 'Years experience' },
    { value: String(stats.companies), label: 'Companies' },
    { value: String(stats.projects), label: 'Projects' },
    { value: String(stats.credentials), label: 'Credentials' },
    { value: String(stats.languages), label: 'Languages' },
  ];

  const handlePrint = () => {
    onPrint();
  };

  return (
    <Reveal className="resume-cover" >
      <span id="resume-profile" className="resume-anchor" aria-hidden="true" />
      <div className="resume-cover-copy">
        <p className="eyebrow"><span className="eyebrow-mark" aria-hidden="true" /> Digital résumé / Profile</p>
        <h1>{person.name}<span className="title-period">.</span></h1>
        <p className="resume-role">{person.role}</p>
        <p className="resume-cover-bio">{person.bio}</p>

        <dl className="resume-stats" aria-label="Career statistics">
          {statItems.map((stat) => (
            <div className="resume-stat" key={stat.label}>
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>

        <div className="resume-cover-actions">
          <a className="button button-primary" href={`${baseUrl}${person.resumeUrl}`} download>
            <ArrowDownToLine size={16} aria-hidden="true" /> Download PDF
          </a>
          <button className="button button-quiet" type="button" onClick={handlePrint}>
            <Printer size={16} aria-hidden="true" /> {isPreparingPrint ? 'Preparing…' : 'Print'}
          </button>
          {person.appointmentUrl && (
            <a className="button button-quiet" href={person.appointmentUrl} target="_blank" rel="noreferrer">
              <CalendarClock size={16} aria-hidden="true" /> Schedule a call
            </a>
          )}
        </div>
      </div>

      <div className="resume-cover-portrait">
        <img
          src={person.avatar}
          alt={`Portrait of ${person.name}`}
          loading="lazy"
          decoding="async"
        />
        <span>PROFILE / 01</span>
      </div>

      <div className="resume-cover-contact" aria-label="Contact details">
        <button
          type="button"
          className="resume-chip"
          onClick={() => void copy(person.email)}
          aria-label={`Copy email address ${person.email}`}
        >
          {copied === person.email ? <Check size={15} aria-hidden="true" /> : <Mail size={15} aria-hidden="true" />}
          {copied === person.email ? 'Copied!' : person.email}
        </button>
        <button
          type="button"
          className="resume-chip"
          onClick={() => void copy(person.phone)}
          aria-label={`Copy phone number ${person.phone}`}
        >
          {copied === person.phone ? <Check size={15} aria-hidden="true" /> : <Phone size={15} aria-hidden="true" />}
          {copied === person.phone ? 'Copied!' : person.phone}
        </button>
        <span className="resume-chip resume-chip-static">
          <MapPin size={15} aria-hidden="true" />{person.location}
        </span>
        {portfolioData.socials.map((social) => (
          <a
            className="resume-chip"
            key={social.platform}
            href={social.url}
            target={social.url.startsWith('mailto:') ? undefined : '_blank'}
            rel="noreferrer"
          >
            {social.label}
          </a>
        ))}
      </div>
    </Reveal>
  );
}
