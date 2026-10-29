import {
  Code2,
  Layers3,
  LayoutTemplate,
  Server,
  Wrench,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { portfolioData } from '../data/portfolio';
import { ContactSection } from '../features/contact/ContactSection';

const serviceIcons: Record<string, LucideIcon> = {
  code: Code2,
  server: Server,
  layers: Layers3,
  'layout-template': LayoutTemplate,
  wrench: Wrench,
};

export default function ServicesPage() {
  return (
    <article className="route-page services-page">
      <div className="page-container">
        <Reveal className="route-heading">
          <p className="eyebrow">Ways I can help</p>
          <h1 className="section-title">Services<span className="title-period">.</span></h1>
          <p className="route-lead">
            Roles and service areas grounded in the technologies and work documented across this portfolio.
          </p>
        </Reveal>
        <div className="service-role-grid">
          {portfolioData.services.map((service, index) => {
            const Icon = serviceIcons[service.icon] ?? Code2;
            return (
              <Reveal
                className="service-directory-entry"
                key={service.id}
                data-index={String(index + 1).padStart(2, '0')}
              >
                <details>
                  <summary>
                    <span className="service-directory-index">{String(index + 1).padStart(2, '0')}</span>
                    <span className="service-directory-icon"><Icon size={21} aria-hidden="true" /></span>
                    <span className="service-directory-title">
                      <strong>{service.title}</strong>
                      <span>{service.description}</span>
                    </span>
                    <span className="service-directory-toggle" aria-hidden="true" />
                  </summary>
                  <div className="service-directory-details">
                    <section>
                      <h3>Typical use cases</h3>
                      <ul>
                        {service.typicalUseCases.map((useCase) => <li key={useCase}>{useCase}</li>)}
                      </ul>
                    </section>
                    <section>
                      <h3>What you get</h3>
                      <ul>
                        {service.whatYouGet.map((deliverable) => <li key={deliverable}>{deliverable}</li>)}
                      </ul>
                    </section>
                  </div>
                </details>
              </Reveal>
            );
          })}
        </div>
      </div>
      <ContactSection homeSection={false} />
    </article>
  );
}
