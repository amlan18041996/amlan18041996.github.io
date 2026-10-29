import { Languages, MapPin } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { portfolioData } from '../data/portfolio';

export default function AboutPage() {
  const { person } = portfolioData;

  return (
    <article className="route-page about-page">
      <div className="page-container">
        <Reveal className="route-heading">
          <p className="eyebrow">A little about me</p>
          <h1 className="section-title">Who I am<span className="title-period">.</span></h1>
          <p className="route-lead">{person.bio}</p>
        </Reveal>

        <div className="about-page-profile">
          <Reveal className="about-photo-wrap">
            <img
              className="about-photo"
              src={person.secondaryAvatar}
              alt={`Portrait of ${person.name}`}
              loading="lazy"
              decoding="async"
            />
          </Reveal>
          <Reveal className="about-facts about-page-facts">
            <div>
              <span className="fact-label"><MapPin size={14} aria-hidden="true" /> Based in</span>
              <strong>{person.location}</strong>
            </div>
            <div>
              <span className="fact-label"><Languages size={14} aria-hidden="true" /> Languages</span>
              <strong>{portfolioData.languages.join(' · ')}</strong>
            </div>
          </Reveal>
        </div>

        <section className="route-content-section" aria-labelledby="approach-title">
          <Reveal className="section-heading-row">
            <div>
              <p className="eyebrow">How I work</p>
              <h2 className="section-title" id="approach-title">How I approach development</h2>
            </div>
          </Reveal>
          <div className="approach-list">
            {portfolioData.developmentApproach.map((step, index) => (
              <Reveal className="approach-item" key={step.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="route-content-section" aria-labelledby="enjoy-title">
          <Reveal className="section-heading-row">
            <div>
              <p className="eyebrow">The work I enjoy</p>
              <h2 className="section-title" id="enjoy-title">What I enjoy building</h2>
            </div>
          </Reveal>
          <Reveal className="enjoy-copy">
            <p>{portfolioData.enjoyBuilding}</p>
          </Reveal>
        </section>
      </div>
    </article>
  );
}
