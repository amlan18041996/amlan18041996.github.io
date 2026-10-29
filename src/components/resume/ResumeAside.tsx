import { GraduationCap, Languages, Trophy } from 'lucide-react';
import { Reveal } from '../Reveal';
import { portfolioData } from '../../data/portfolio';

/**
 * Education, languages, and interests — the supporting column of the
 * résumé document.
 */
export function ResumeAside() {
  return (
    <div className="resume-aside">
      <section className="resume-section" id="resume-education" aria-labelledby="resume-education-title">
        <Reveal className="resume-section-heading">
          <div>
            <p className="eyebrow"><GraduationCap size={15} aria-hidden="true" /> 04 / Academic background</p>
            <h2 id="resume-education-title">Education</h2>
          </div>
        </Reveal>
        <ul className="resume-education-list">
          {portfolioData.education.map((education, index) => (
            <Reveal as="li" className="resume-education-entry" key={education.id}>
              <span className="resume-education-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{education.degree}</h3>
                <p>{education.school} · {education.description}</p>
              </div>
              <span className="resume-education-period">{education.period}</span>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="resume-section" id="resume-interests" aria-labelledby="resume-interests-title">
        <Reveal className="resume-section-heading">
          <div>
            <p className="eyebrow"><Trophy size={15} aria-hidden="true" /> 05 / Beyond the code</p>
            <h2 id="resume-interests-title">Languages &amp; interests</h2>
          </div>
        </Reveal>

        <div className="resume-languages">
          <h3 className="resume-aside-subheading"><Languages size={14} aria-hidden="true" /> Languages</h3>
          <ul className="resume-language-list">
            {portfolioData.languages.map((language) => <li key={language}>{language}</li>)}
          </ul>
        </div>

        <div className="resume-interests">
          {portfolioData.interests.map((group) => (
            <Reveal className="resume-interest-group" key={group.title}>
              <h3>{group.title}</h3>
              <ul className="resume-skill-tags">
                {group.interests.map((interest) => <li key={interest}>{interest}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
