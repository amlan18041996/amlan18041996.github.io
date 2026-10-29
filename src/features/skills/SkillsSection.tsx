import { useState } from 'react';
import { ArrowDownRight, Check } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import { Reveal } from '../../components/Reveal';

const skillGroups = [
  { id: 'all', label: 'All skills', categories: [] },
  { id: 'frontend', label: 'Frontend', categories: ['web', 'js-libraries', 'js-frameworks', 'state'] },
  { id: 'backend', label: 'Backend', categories: ['languages', 'backend', 'db'] },
  { id: 'platforms', label: 'Platforms', categories: ['cms', 'tools', 'cloud', 'platforms', 'project-tools'] },
  { id: 'integrations', label: 'Integrations', categories: ['payments', 'ai-integrations', 'app-integrations'] },
] as const;

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
  const [activeGroup, setActiveGroup] = useState<(typeof skillGroups)[number]['id']>('all');
  const activeCategoryIds = skillGroups.find((group) => group.id === activeGroup)?.categories ?? [];
  const categories = activeGroup === 'all'
    ? portfolioData.skillCategories
    : portfolioData.skillCategories.filter((category) =>
      (activeCategoryIds as readonly string[]).includes(category.id));
  const skills = categories
    .flatMap((category, categoryIndex) =>
      category.skills.map((skill, skillIndex) => ({
        skill,
        categoryId: category.id,
        categoryIndex,
        skillIndex,
      })))
    .sort((a, b) => a.skillIndex - b.skillIndex || a.categoryIndex - b.categoryIndex);

  return (
    <section className="section-block skills-section" id="skills" data-home-section aria-labelledby="skills-title">
      <div className="page-container">
        <Reveal className="section-heading-row">
          <div>
            <p className="eyebrow">04 — The toolkit</p>
            <h2 className="section-title" id="skills-title">
              Skills & tools<span className="title-period">.</span>
            </h2>
          </div>
          <p className="section-intro">
            Technologies and tools documented across the résumé and project history.
          </p>
        </Reveal>
        <div className="skills-library">
          <nav className="skills-library-nav" aria-label="Filter technologies by category">
            <p className="skills-library-label">Browse the toolkit</p>
            {skillGroups.map((group, index) => (
              <button
                className={`skills-library-filter ${activeGroup === group.id ? 'is-active' : ''}`}
                type="button"
                key={group.id}
                aria-pressed={activeGroup === group.id}
                aria-controls="skills-field"
                onClick={() => setActiveGroup(group.id)}
              >
                <span className="skills-filter-index">{String(index + 1).padStart(2, '0')}</span>
                <span>{group.label}</span>
                {activeGroup === group.id && <Check size={15} aria-hidden="true" />}
              </button>
            ))}
            <p className="skills-library-note">
              A living toolkit, gathered from documented work and projects.
            </p>
          </nav>
          <div className="skills-library-board">
            <div className="skills-board-heading">
              <div>
                <p className="eyebrow">Technology index</p>
                <h3>{skillGroups.find((group) => group.id === activeGroup)?.label}</h3>
              </div>
              <ArrowDownRight size={22} aria-hidden="true" />
            </div>
            <div
              className="skills-matrix"
              id="skills-field"
              role="list"
              aria-label={`${skillGroups.find((group) => group.id === activeGroup)?.label} technologies and tools`}
              aria-live="polite"
            >
              {skills.map(({ skill, categoryId }, index) => (
                <div
                  className="skill-entry"
                  key={`${categoryId}-${skill}`}
                  title={skill}
                  role="listitem"
                >
                  <span className="skill-entry-index">{String(index + 1).padStart(2, '0')}</span>
                  <span className="skill-entry-icon" aria-hidden="true">
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
                  <span className="skill-entry-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
