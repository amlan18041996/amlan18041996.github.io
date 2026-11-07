import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link, useParams } from 'react-router';
import { portfolioData } from '../data/portfolio';
import { NotFoundPage } from './NotFoundPage';

export default function ProjectPage() {
  const { projectId } = useParams();
  const project = portfolioData.projects.find((item) => item.id === projectId);

  if (!project) return <NotFoundPage />;

  return (
    <article className="route-page project-detail-page">
      <div className="page-container">
        <Link className="text-link project-back-link" to="/works">
          <ArrowLeft size={15} aria-hidden="true" /> Back to all work
        </Link>
        <header className="project-detail-heading">
          <h1 className="section-title">{project.title}<span className="title-period">.</span></h1>
        </header>

        <div className="project-detail-layout">
          <div className="project-detail-story">
            <section className="project-story-section project-overview">
              <h2>Overview</h2>
              <p>{project.description}</p>
            </section>
            <section className="project-story-section project-delivery">
              <h2>Responsibilities</h2>
              <div className="project-detail-subsections">
                <ul className="detail-list">
                  {project.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </section>
            <section className="project-story-section project-contributions">
              <h2>Contributions</h2>
              <div className="project-detail-subsections">
                <ul className="detail-list">
                  {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
              </div>
            </section>
            <section className="project-story-section project-challenges-impact">
              <div className="project-detail-subsections">
                <section>
                  <h2>Challenges</h2>
                  <p>{project.challenge ?? 'Project challenges are not detailed in the available notes.'}</p>
                </section>
                <section>
                  <h2>Impact</h2>
                  <p>{project.impact ?? 'Measured outcomes are not documented in the available project notes.'}</p>
                </section>
              </div>
            </section>
          </div>

          <aside className="project-detail-sidebar" aria-label="Project details">
            <dl className="project-detail-meta">
              {project.company && (
                <div>
                  <dt>Organization</dt>
                  <dd>
                    {project.companyUrl ? (
                      <a className="text-link" href={project.companyUrl} target="_blank" rel="noreferrer">
                        {project.company} <ArrowUpRight size={14} aria-hidden="true" />
                      </a>
                    ) : project.company}
                  </dd>
                </div>
              )}
              {project.role && (
                <div>
                  <dt>Role</dt>
                  <dd>{project.role}</dd>
                </div>
              )}
            </dl>
            <section className="project-detail-technologies" aria-labelledby="project-technologies-title">
              <h2 id="project-technologies-title">Technologies</h2>
              <ul className="project-tech-list">
                {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </section>
          </aside>
        </div>
      </div>
    </article>
  );
}
