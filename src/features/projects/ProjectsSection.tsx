import { useMemo, useState } from 'react';
import { BriefcaseBusiness, Code2 } from 'lucide-react';
import { Link } from 'react-router';
import type { Project } from '../../types/portfolio';
import { portfolioData } from '../../data/portfolio';
import { Reveal } from '../../components/Reveal';
import { ProjectDetailModal } from './ProjectDetailModal';

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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [homeProjectIds] = useState(() => {
    const ids = portfolioData.projects.map((project) => project.id);
    for (let index = ids.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [ids[index], ids[randomIndex]] = [ids[randomIndex], ids[index]];
    }
    return ids.slice(0, 5);
  });
  const projects = useMemo(
    () => portfolioData.projects.filter((project) =>
      (showAllProjects || homeProjectIds.includes(project.id))
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
            <p className="eyebrow">{showAllProjects ? 'Selected work' : '03 — Selected work'}</p>
            <Heading className="section-title" id="projects-title">
              {showAllProjects ? 'Works' : 'Projects'}<span className="title-period">.</span>
            </Heading>
          </div>
          <p className="section-intro">
            Enterprise products and independent builds, with the original project details and technology stacks.
          </p>
        </Reveal>

        <div className="project-toolbar">
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
          <span className="project-count">{String(projects.length).padStart(2, '0')} projects</span>
        </div>

        <div className="projects-grid" aria-live="polite">
          {projects.map((project, index) => (
            <Reveal className="project-card" key={project.id}>
              <article
                className="project-card-content"
                role="button"
                tabIndex={0}
                aria-haspopup="dialog"
                aria-label={`View project details for ${project.title}`}
                onClick={() => setSelectedProject(project)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    setSelectedProject(project);
                  }
                }}
              >
                <div className="project-card-topline">
                  <span className="project-type">
                    {project.type === 'work' ? (
                      <BriefcaseBusiness size={14} aria-hidden="true" />
                    ) : (
                      <Code2 size={14} aria-hidden="true" />
                    )}
                    {project.type === 'work' ? 'Professional' : 'Personal'}
                  </span>
                  <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3>{project.title}</h3>
                <p className="project-period">{project.period}</p>
                {(project.company || project.role) && (
                  <p className="project-company">
                    {[project.role, project.company].filter(Boolean).join(' · ')}
                  </p>
                )}
                <p className="project-description">{project.description}</p>
                <div className="project-tags" aria-label="Technologies">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
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
      <ProjectDetailModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
