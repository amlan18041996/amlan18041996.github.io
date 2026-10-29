import { useState } from 'react';
import { ArrowUpRight, Award, ShieldCheck } from 'lucide-react';
import { Reveal } from '../Reveal';
import { Modal } from '../ui/Modal';
import { portfolioData } from '../../data/portfolio';

interface CredentialItem {
  id: string;
  kind: 'Certification' | 'Award';
  title: string;
  issuer: string;
  period: string;
  validUntil?: string;
  description?: string;
  image: string;
  link: string;
}

const credentials: CredentialItem[] = [
  ...portfolioData.certifications.map((certification) => ({
    id: certification.id,
    kind: 'Certification' as const,
    title: certification.title,
    issuer: certification.issuer,
    period: certification.period,
    validUntil: certification.validUntil,
    image: certification.image,
    link: certification.link,
  })),
  ...portfolioData.awards.map((award) => ({
    id: award.id,
    kind: 'Award' as const,
    title: award.title,
    issuer: 'GSPANN Technologies',
    period: award.period,
    description: award.description,
    image: award.image,
    link: award.link,
  })),
];

/**
 * Certifications & awards as a thumbnail gallery. Selecting an entry opens
 * an accessible lightbox with the full image and verification link.
 */
export function CredentialsGallery() {
  const [selected, setSelected] = useState<CredentialItem | null>(null);

  return (
    <section className="resume-section" id="resume-credentials" aria-labelledby="resume-credentials-title">
      <Reveal className="resume-section-heading">
        <div>
          <p className="eyebrow"><ShieldCheck size={15} aria-hidden="true" /> 03 / Learning &amp; recognition</p>
          <h2 id="resume-credentials-title">Credentials</h2>
        </div>
        <p className="resume-skill-count">{credentials.length} total</p>
      </Reveal>

      <ul className="resume-credentials-grid">
        {credentials.map((credential) => (
          <Reveal as="li" className="resume-credential-card" key={credential.id}>
            <button
              type="button"
              className="resume-credential-open"
              onClick={() => setSelected(credential)}
              aria-label={`View ${credential.kind.toLowerCase()}: ${credential.title}`}
            >
              <img src={credential.image} alt={credential.title} loading="lazy" decoding="async" />
              <span className="resume-credential-overlay" aria-hidden="true">
                <Award size={18} />
              </span>
            </button>
            <div className="resume-credential-meta">
              <span className={`resume-credential-kind is-${credential.kind.toLowerCase()}`}>{credential.kind}</span>
              <h3>{credential.title}</h3>
              <p>{credential.issuer} · {credential.period}</p>
              {credential.validUntil && <p className="resume-credential-validity">Valid until {credential.validUntil}</p>}
            </div>
          </Reveal>
        ))}
      </ul>

      <Modal
        isOpen={selected !== null}
        onClose={() => setSelected(null)}
        title={selected?.title}
        className="resume-lightbox"
      >
        {selected && (
          <div className="resume-lightbox-body">
            <img src={selected.image} alt={selected.title} />
            <div className="resume-lightbox-meta">
              <span className={`resume-credential-kind is-${selected.kind.toLowerCase()}`}>{selected.kind}</span>
              <p>{selected.issuer} · {selected.period}</p>
              {selected.validUntil && <p>Valid until {selected.validUntil}</p>}
              {selected.description && <p className="resume-lightbox-description">{selected.description}</p>}
              <a className="text-link" href={selected.link} target="_blank" rel="noreferrer">
                Verify credential <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
