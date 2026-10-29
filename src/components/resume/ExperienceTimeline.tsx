import { useEffect, useState } from 'react';
import { ArrowUpRight, BriefcaseBusiness, ChevronDown } from 'lucide-react';
import { Reveal } from '../Reveal';
import { portfolioData } from '../../data/portfolio';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface ExperienceTimelineProps {
  /** Increment to force-expand every entry (used by the print action). */
  expandSignal?: number;
}

/**
 * Vertical career timeline. Each role expands to reveal its full
 * contribution list; "Expand all" toggles every entry at once.
 */
export function ExperienceTimeline({ expandSignal = 0 }: ExperienceTimelineProps) {
  const experiences = portfolioData.experiences;
  const reducedMotion = useReducedMotion();
  const [openIds, setOpenIds] = useState<Set<string>>(
    () => new Set(experiences.length ? [experiences[0].id] : []),
  );

  // When the parent asks to expand (e.g. before printing), open every entry.
  useEffect(() => {
    if (expandSignal > 0) {
      setOpenIds(new Set(experiences.map((experience) => experience.id)));
    }
  }, [expandSignal, experiences]);

  const allOpen = openIds.size === experiences.length;

  const toggle = (id: string) => {
    setOpenIds((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section className="resume-section" id="resume-experience" aria-labelledby="resume-experience-title">
      <Reveal className="resume-section-heading">
        <div>
          <p className="eyebrow"><BriefcaseBusiness size={15} aria-hidden="true" /> 01 / Career history</p>
          <h2 id="resume-experience-title">Experience</h2>
        </div>
        <button
          type="button"
          className="button button-quiet resume-expand-all"
          aria-pressed={allOpen}
          onClick={() => setOpenIds(allOpen ? new Set() : new Set(experiences.map((experience) => experience.id)))}
        >
          {allOpen ? 'Collapse all' : 'Expand all'}
        </button>
      </Reveal>

      <ol className="resume-timeline">
        {experiences.map((experience, index) => {
          const isOpen = openIds.has(experience.id);
          const panelId = `experience-panel-${experience.id}`;
          return (
            <Reveal as="li" className={`resume-timeline-item ${isOpen ? 'is-open' : ''}`} key={experience.id}>
              <span className="resume-timeline-marker" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <article className="resume-timeline-card">
                <h3>
                  <button
                    type="button"
                    className="resume-timeline-toggle"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(experience.id)}
                  >
                    <span className="resume-timeline-role">{experience.role}</span>
                    <ChevronDown
                      size={18}
                      aria-hidden="true"
                      className={`resume-timeline-chevron ${reducedMotion ? '' : 'is-animated'}`}
                    />
                  </button>
                </h3>

                <p className="resume-timeline-company">
                  {experience.company}
                  {experience.location ? ` · ${experience.location}` : ''}
                </p>
                <p className="resume-timeline-period">{experience.period}</p>

                <div className="resume-timeline-panel" id={panelId} hidden={!isOpen}>
                  <p className="resume-timeline-summary">{experience.description}</p>
                  <p className="resume-detail-label">Responsibilities &amp; contributions</p>
                  <ul className="detail-list">
                    {experience.responsibilitiesAndContributions.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  {experience.companyUrl && (
                    <a className="text-link" href={experience.companyUrl} target="_blank" rel="noreferrer">
                      Company website <ArrowUpRight size={13} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          );
        })}
      </ol>
    </section>
  );
}
