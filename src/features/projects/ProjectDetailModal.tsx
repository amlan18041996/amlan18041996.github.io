import { ArrowDownRight, Briefcase, Calendar, Code } from 'lucide-react';
import { Modal } from '../../components/ui/Modal';
import type { Project } from '../../types/portfolio';

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailModalProps) {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Project Details" className="project-detail-modal">
      <div className="project-modal-content">
        <h3>{project.title}</h3>
        <div className="project-modal-meta">
          <span><Calendar size={16} aria-hidden="true" />{project.period}</span>
          {project.company && <span><Briefcase size={16} aria-hidden="true" />{project.company}</span>}
          {project.role && <span><Code size={16} aria-hidden="true" />{project.role}</span>}
        </div>
        <section className="project-story-section project-challenge">
          <span className="project-story-index"><ArrowDownRight size={16} aria-hidden="true" /> 01</span>
          <div>
            <h4>Challenge</h4>
          <p>{project.description}</p>
          </div>
        </section>
        <section className="project-story-section project-delivery">
          <span className="project-story-index"><ArrowDownRight size={16} aria-hidden="true" /> 02</span>
          <div>
            <h4>Delivery</h4>
          <ul className="detail-list">
            {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
          </ul>
          </div>
        </section>
        <section className="project-story-section project-impact">
          <span className="project-story-index"><ArrowDownRight size={16} aria-hidden="true" /> 03</span>
          <div>
            <h4>Impact</h4>
            <p>
              {project.impact ?? 'The project notes describe the delivered work but do not document a measured impact.'}
            </p>
          </div>
        </section>
        <section>
          <h4>Technologies</h4>
          <div className="project-tags">
            {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </section>
      </div>
    </Modal>
  );
}
