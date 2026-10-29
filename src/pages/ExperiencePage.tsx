import { ArrowUpRight, GraduationCap } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { portfolioData } from '../data/portfolio';

export default function ExperiencePage() {
  return (
    <article className="route-page">
      <div className="page-container">
        <Reveal className="route-heading">
          <p className="eyebrow">The journey</p>
          <h1 className="section-title">Experience<span className="title-period">.</span></h1>
          <p className="route-lead">
            Roles, responsibilities, and contributions from the work history documented in the résumé.
          </p>
        </Reveal>

        <div className="timeline experience-page-timeline">
          {portfolioData.experiences.map((experience, index) => (
            <Reveal className="timeline-entry" key={experience.id}>
              <div className="timeline-marker" aria-hidden="true">
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>
              <article className="timeline-card">
                <div className="timeline-card-heading">
                  <div>
                    <p className="timeline-period">{experience.period}</p>
                    <h2>{experience.role}</h2>
                    <p className="timeline-company">
                      {experience.company}{experience.location ? ` · ${experience.location}` : ''}
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
                <section className="experience-responsibilities" aria-label="Responsibilities">
                  <h3 className="responsibilities-heading">Responsibilities</h3>
                  <p>{experience.description}</p>
                </section>
                <section className="experience-contributions" aria-label="Contributions">
                  <h3 className="responsibilities-heading">Contributions</h3>
                  <ul className="detail-list">
                    {experience.responsibilitiesAndContributions.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </section>
              </article>
            </Reveal>
          ))}
        </div>

        <section className="education-block experience-education" aria-labelledby="education-title">
          <div className="education-heading">
            <GraduationCap size={19} aria-hidden="true" />
            <h2 id="education-title">Education</h2>
          </div>
          <div className="education-grid">
            {portfolioData.education.map((education) => (
              <article className="education-card" key={education.id}>
                <p className="timeline-period">{education.period}</p>
                <h3>{education.degree}</h3>
                <p>{education.school} <span>·</span> {education.description}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
