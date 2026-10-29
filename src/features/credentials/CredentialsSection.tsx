import { ArrowUpRight, Award, BadgeCheck } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import { Reveal } from '../../components/Reveal';

export function CredentialsSection() {
  return (
    <section className="section-block section-tinted" id="credentials" data-home-section aria-labelledby="credentials-title">
      <div className="page-container">
        <Reveal className="section-heading-row">
          <div>
            <p className="eyebrow">05 — Learning & recognition</p>
            <h2 className="section-title" id="credentials-title">
              Credentials<span className="title-period">.</span>
            </h2>
          </div>
          <p className="section-intro">
            Certifications, awards, and the original evidence included with the portfolio.
          </p>
        </Reveal>

        <div className="credentials-grid">
          {portfolioData.certifications.map((certification) => (
            <Reveal className="credential-card" key={certification.id}>
              <a
                className="credential-image-link"
                href={certification.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${certification.title} verification`}
              >
                <img
                  src={certification.image}
                  alt={`${certification.title} certificate`}
                  loading="lazy"
                  decoding="async"
                />
                <span className="credential-open"><ArrowUpRight size={17} aria-hidden="true" /></span>
              </a>
              <div className="credential-copy">
                <p className="credential-period">{certification.period}</p>
                <h3>{certification.title}</h3>
                <p className="credential-issuer">
                  <BadgeCheck size={14} aria-hidden="true" /> {certification.issuer}
                  {certification.validUntil && ` · Valid through ${certification.validUntil}`}
                </p>
                <a className="text-link" href={certification.link} target="_blank" rel="noreferrer">
                  Verify credential <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="awards-heading">
          <Award size={19} aria-hidden="true" />
          <h3>Awards</h3>
        </div>
        <div className="awards-grid">
          {portfolioData.awards.map((award) => (
            <Reveal className="award-card" key={award.id}>
              <a href={award.link} target="_blank" rel="noreferrer" className="award-image-link">
                <img src={award.image} alt={`${award.title} certificate`} loading="lazy" decoding="async" />
              </a>
              <div>
                <p className="credential-period">{award.period}</p>
                <h4>{award.title}</h4>
                <p className="award-description">{award.description}</p>
                {award.galleryImage && (
                  <a
                    className="text-link"
                    href={award.galleryImage}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View award photo <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
