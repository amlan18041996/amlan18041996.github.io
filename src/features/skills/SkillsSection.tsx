import { useState } from 'react';
import { ArrowDownRight } from 'lucide-react';
import { Reveal } from '../../components/Reveal';
import { getAllSkills } from '../../lib/resume';

const essentialSkills = [
  'JavaScript',
  'TypeScript',
  'React JS',
  'Vue JS',
  'Node JS',
  'Python',
  'AEM Franklin',
  'Tailwind CSS',
  'Docker',
  'Coveo',
];

const skillIconAliases: Record<string, string> = {
  'Angular 2/4/13': 'angular',
  'Angular 12': 'angular',
  'AEM UI': 'adobe',
  'AEM Franklin': 'adobe',
  'OSGIM Cloud': 'apache',
  'AWS EC2/S3': 'amazonaws',
  'Oracle OCI': 'oracle',
  'GitHub Pages': 'github',
  'VS Code': 'visualstudiocode',
  'IntelliJ': 'intellijidea',
  'PyCharm': 'pycharm',
  'Next JS': 'nextdotjs',
  'Nuxt JS': 'nuxtdotjs',
  'Vue JS': 'vuedotjs',
  'Svelte Kit': 'svelte',
  'Node JS': 'nodedotjs',
  'Express JS': 'express',
  'MongoDB': 'mongodb',
  'MySQL': 'mysql',
  'MariaDB': 'mariadb',
  'PostgreSQL': 'postgresql',
  'SQLite': 'sqlite',
  'jQuery EasyUI': 'jquery',
  'Tailwind CSS': 'tailwindcss',
  'Social Media Integrations': 'meta',
  'Zoom Integration': 'zoom',
  'DialogFlow': 'googleassistant',
  'Botman': 'php',
  'LLaMA 3.2': 'meta',
  'Google Gemini': 'googlegemini',
  'TMDB API': 'themoviedatabase',
  'Shopify Storefront API': 'shopify',
  'Coveo': 'coveo',
  'JWT': 'jsonwebtokens',
  'Artifactory': 'jfrog',
};

const deviconAliases: Record<string, string> = {
  'React JS': 'react',
  'AWS EC2/S3': 'amazonwebservices',
  'CSS3': 'css3',
  'Redux with Thunk': 'redux',
  'Heroku': 'heroku',
  'Windows': 'windows8',
  'Nuxt JS': 'nuxt',
  'Java': 'java',
  'Oracle OCI': 'oracle',
  'VS Code': 'vscode',
  'Twilio': 'twilio',
  'Bootstrap 4/5': 'bootstrap',
};

const iconifyAliases: Record<string, string> = {
  'AEM UI': 'adobe',
  'AEM Franklin': 'adobe',
};

function getSkillMark(skill: string) {
  const words = skill.match(/[A-Z0-9][a-z0-9]*/g) ?? [skill];
  return words.length > 1
    ? words.slice(0, 2).map((word) => word[0]).join('').toUpperCase()
    : skill.replace(/[^a-z0-9]/gi, '').slice(0, 2).toUpperCase();
}

function getSkillIconUrl(skill: string) {
  const slug = skillIconAliases[skill]
    ?? skill.toLowerCase().replace(/\+/g, 'plus').replace(/[^a-z0-9]/g, '');
  const devicon = deviconAliases[skill];
  if (devicon) {
    return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${devicon}/${devicon}-original.svg`;
  }
  const iconify = iconifyAliases[skill];
  if (iconify) return `https://api.iconify.design/logos/${iconify}.svg`;
  return `https://cdn.simpleicons.org/${slug}`;
}

function getSkillIconFallbackUrl(skill: string) {
  const slug = skillIconAliases[skill]
    ?? skill.toLowerCase().replace(/\+/g, 'plus').replace(/[^a-z0-9]/g, '');
  return deviconAliases[skill] ? `https://cdn.simpleicons.org/${slug}` : undefined;
}

export function SkillsSection() {
  const [showAll, setShowAll] = useState(false);
  const allSkills = getAllSkills();
  const skills = showAll
    ? allSkills
    : essentialSkills.filter((skill) => allSkills.includes(skill));

  return (
    <section className="section-block skills-section" id="skills" data-home-section aria-labelledby="skills-title">
      <div className="page-container">
        <Reveal className="section-heading-row">
          <div>
            <p className="eyebrow">03 — The toolkit</p>
            <h2 className="section-title" id="skills-title">
              Skills & tools<span className="title-period">.</span>
            </h2>
          </div>
          <p className="section-intro">
            Technologies and tools documented across the résumé and project history.
          </p>
        </Reveal>
        <div className="essential-skills">
          <div className="essential-skills-heading">
            <div>
              <p className="eyebrow">A focused toolkit</p>
              <h3>{showAll ? 'All skills & tools' : 'Essential skills'}</h3>
            </div>
            <ArrowDownRight size={22} aria-hidden="true" />
          </div>
          <div className="essential-skills-grid" role="list" aria-live="polite">
            {skills.map((skill) => (
              <div className="essential-skill" key={skill} role="listitem">
                <span className="essential-skill-icon" aria-hidden="true">
                  <img
                    src={getSkillIconUrl(skill)}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    data-fallback={getSkillIconFallbackUrl(skill)}
                    onError={(event) => {
                      const fallback = event.currentTarget.dataset.fallback;
                      if (fallback) {
                        delete event.currentTarget.dataset.fallback;
                        event.currentTarget.src = fallback;
                        return;
                      }
                      event.currentTarget.style.display = 'none';
                      const mark = event.currentTarget.nextElementSibling;
                      if (mark instanceof HTMLElement) mark.style.display = 'block';
                    }}
                  />
                  <span>{getSkillMark(skill)}</span>
                </span>
                <span>{skill}</span>
              </div>
            ))}
          </div>
          <button
            className="button button-quiet skills-show-all"
            type="button"
            aria-expanded={showAll}
            onClick={() => setShowAll((expanded) => !expanded)}
          >
            {showAll ? 'Show essential skills' : `Show all ${allSkills.length} skills & tools`}
          </button>
        </div>
      </div>
    </section>
  );
}
