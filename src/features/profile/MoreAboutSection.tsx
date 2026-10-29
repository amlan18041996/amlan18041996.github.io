import { Code2, Heart, Layers3, Palette, Rocket, Target } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import { Reveal } from '../../components/Reveal';

const icons: Record<string, LucideIcon> = {
  code: Code2,
  layers: Layers3,
  target: Target,
  rocket: Rocket,
  heart: Heart,
};

export function MoreAboutSection() {
  return (
    <>
      <section
        className="section-block section-tinted"
        id="principles"
        data-home-section
        aria-labelledby="principles-title"
      >
        <div className="page-container">
          <Reveal className="section-heading-row">
            <div>
              <p className="eyebrow">How I work</p>
              <h2 className="section-title" id="principles-title">
                Principles<span className="title-period">.</span>
              </h2>
            </div>
            <p className="section-intro">The vision, mission, and values already documented in the portfolio.</p>
          </Reveal>
          <div className="principles-grid">
            {portfolioData.principles.map((principle) => {
              const Icon = icons[principle.icon] ?? Heart;
              return (
                <Reveal className="principle-card" key={principle.id}>
                  <Icon size={22} aria-hidden="true" />
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                  <ul className="detail-list">
                    {principle.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="section-block"
        id="interests"
        data-home-section
        aria-labelledby="interests-title"
      >
        <div className="page-container interests-layout">
          <Reveal>
            <p className="eyebrow">Outside of work</p>
            <h2 className="section-title" id="interests-title">
              Curious by nature<span className="title-period">.</span>
            </h2>
            <div className="language-line">
              <Palette size={17} aria-hidden="true" />
              <span>Languages</span>
              <strong>{portfolioData.languages.join(' · ')}</strong>
            </div>
          </Reveal>
          <div className="interest-groups">
            {portfolioData.interests.map((group) => (
              <Reveal className="interest-group" key={group.title}>
                <h3>{group.title}</h3>
                <div className="interest-tags">
                  {group.interests.map((interest) => <span key={interest}>{interest}</span>)}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
