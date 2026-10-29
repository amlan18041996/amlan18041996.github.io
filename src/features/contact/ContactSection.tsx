import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router';
import { Reveal } from '../../components/Reveal';

interface ContactSectionProps {
  homeSection?: boolean;
}

export function ContactSection({ homeSection = true }: ContactSectionProps) {
  return (
    <section
      className="section-block contact-section"
      id={homeSection ? 'contact' : undefined}
      data-home-section={homeSection ? true : undefined}
      aria-labelledby="contact-title"
    >
      <div className="page-container contact-cta-layout">
        <Reveal className="contact-cta-copy">
          <p className="eyebrow">{homeSection ? '06 — Start a conversation' : 'Start a conversation'}</p>
          <h2 className="section-title" id="contact-title">
            Have something in mind?
            <br />
            <span>Let’s talk about it.</span>
          </h2>
          <p className="body-copy">
            Whether you have a project to discuss or simply want to explore an idea, I’d be glad to hear from you.
          </p>
          <div className="contact-cta-actions">
            <Link className="button button-primary" to="/contact">
              Discuss a project <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
            <Link className="button button-quiet" to="/works">
              See the work <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
