import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router';
import { portfolioData } from '../../data/portfolio';
import { Reveal } from '../../components/Reveal';

export function ExperienceSection() {
  return (
    <section className="section-block section-tinted" id="experience" data-home-section aria-labelledby="experience-title">
      <div className="page-container">
        <Reveal className="section-heading-row">
          <div>
            <p className="eyebrow">02 — The journey</p>
            <h2 className="section-title" id="experience-title">
              Experience<span className="title-period">.</span>
            </h2>
          </div>
          <p className="section-intro">
            A path through product engineering, frontend architecture, and full-stack development.
          </p>
        </Reveal>

        <div className="experience-summaries">
          {portfolioData.experiences.map((experience) => (
            <Reveal className="experience-summary" key={experience.id}>
              <article>
                <div className="timeline-card-heading">
                  <div>
                    <p className="timeline-period">{experience.period}</p>
                    <h3>{experience.role}</h3>
                    <p className="timeline-company">
                      {experience.company}
                      {experience.location ? ` · ${experience.location}` : ''}
                    </p>
                  </div>
                  {experience.companyUrl && (
                    <a
                      className="icon-link"
                      href={experience.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Visit ${experience.company} website`}
                    >
                      <ArrowUpRight size={18} aria-hidden="true" />
                    </a>
                  )}
                </div>
                <p className="body-copy">{experience.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="experience-more-link">
          <Link className="button button-quiet" to="/experience">
            Full experience <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
