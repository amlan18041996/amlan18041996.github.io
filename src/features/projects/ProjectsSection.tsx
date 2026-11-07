import { useMemo, useState } from 'react';
import { Link } from 'react-router';
import type { Project } from '../../types/portfolio';
import { portfolioData } from '../../data/portfolio';
import { Reveal } from '../../components/Reveal';

type ProjectFilter = 'all' | Project['type'];

const filters: { value: ProjectFilter; label: string }[] = [
  { value: 'all', label: 'All projects' },
  { value: 'work', label: 'Professional' },
  { value: 'personal', label: 'Personal' },
];

interface ProjectsSectionProps {
  showAllProjects?: boolean;
}

export function ProjectsSection({ showAllProjects = false }: ProjectsSectionProps) {
  const [filter, setFilter] = useState<ProjectFilter>('all');
  const [homeProjectIds] = useState(() => {
    if (showAllProjects) return new Set<string>();
    const shuffled = [...portfolioData.projects];
    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
    }
    return new Set(shuffled.slice(0, 4).map((project) => project.id));
  });
  const projects = useMemo(
    () => portfolioData.projects.filter((project) =>
      (showAllProjects || homeProjectIds.has(project.id))
      && (filter === 'all' || project.type === filter)),
    [filter, homeProjectIds, showAllProjects],
  );
  const Heading = showAllProjects ? 'h1' : 'h2';

  return (
    <section
      className="section-block"
      id="projects"
      data-home-section={showAllProjects ? undefined : true}
      aria-labelledby="projects-title"
    >
      <div className="page-container">
        <Reveal className="section-heading-row">
          <div>
            <p className="eyebrow">{showAllProjects ? 'Selected work' : '02 — Selected work'}</p>
            <Heading className="section-title" id="projects-title">
              {showAllProjects ? 'Works' : 'Projects'}<span className="title-period">.</span>
            </Heading>
          </div>
          <p className="section-intro">
            Enterprise products and independent builds, with the original project details and technology stacks.
          </p>
        </Reveal>

        <div className={`project-toolbar ${showAllProjects ? 'project-toolbar-all' : ''}`}>
          {!showAllProjects && (
            <div className="project-filters" role="group" aria-label="Filter projects">
              {filters.map((item) => (
                <button
                  className={`filter-button ${filter === item.value ? 'is-active' : ''}`}
                  type="button"
                  key={item.value}
                  aria-pressed={filter === item.value}
                  onClick={() => setFilter(item.value)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
          <span className="project-count">{String(projects.length).padStart(2, '0')} projects</span>
        </div>

        <div className="projects-grid" aria-live="polite">
          {projects.map((project, index) => (
            <Reveal className="project-card" key={project.id}>
              <Link
                className="project-card-content"
                to={`/works/${project.id}`}
                aria-label={`View project details for ${project.title}`}
              >
                <div className="project-card-topline">
                  <h3>{project.title}</h3>
                  <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
                </div>
                {(project.company || project.role) && (
                  <p className="project-company">
                    {[project.role, project.company].filter(Boolean).join(' · ')}
                  </p>
                )}
                <p className="project-description">{project.description}</p>
                <div className="project-tags" aria-label="Technologies">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        {!showAllProjects && (
          <div className="projects-more">
            <Link className="button button-quiet" to="/works">
              See all projects
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
