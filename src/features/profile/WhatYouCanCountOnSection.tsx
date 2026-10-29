import { Check } from 'lucide-react';
import { Reveal } from '../../components/Reveal';
import { portfolioData } from '../../data/portfolio';

export function WhatYouCanCountOnSection() {
  return (
    <section
      className="section-block commitments-section"
      id="commitments"
      data-home-section
      aria-labelledby="commitments-title"
    >
      <div className="page-container">
        <Reveal className="section-heading-row">
          <div>
            <p className="eyebrow">The working relationship</p>
            <h2 className="section-title" id="commitments-title">
              What you can count on<span className="title-period">.</span>
            </h2>
          </div>
          <p className="section-intro">
            A practical reflection of the approach and values already documented in this portfolio.
          </p>
        </Reveal>
        <div className="commitments-grid">
          {portfolioData.commitments.map((commitment) => (
            <Reveal className="commitment-card" key={commitment.title}>
              <span><Check size={17} aria-hidden="true" /></span>
              <div>
                <h3>{commitment.title}</h3>
                <p>{commitment.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
