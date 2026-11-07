import { Languages, MapPin } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { portfolioData } from '../data/portfolio';

const capabilities = [
  {
    title: 'Frontend architecture',
    description: 'Build reusable React, Vue, and Angular interfaces for content-rich products, portals, and dashboards.',
  },
  {
    title: 'Full-stack applications',
    description: 'Connect modern web interfaces to APIs, services, and data workflows across JavaScript and backend stacks.',
  },
  {
    title: 'AEM & content delivery',
    description: 'Create AEM 6.5 components and authoring patterns, and deliver multi-brand experiences with Edge Delivery Services.',
  },
  {
    title: 'API & platform integrations',
    description: 'Connect products with services such as Coveo, Shopify, Stripe, Zoom, Twilio, and messaging platforms.',
  },
  {
    title: 'Customer & commerce journeys',
    description: 'Build customer portals, product discovery, account flows, case management, and e-commerce experiences.',
  },
  {
    title: 'Real-time communication',
    description: 'Integrate real-time chat and messaging workflows using Socket.io and external communication APIs.',
  },
  {
    title: 'Data-rich tools',
    description: 'Develop search, tables, CSV workflows, content extraction, and interactive data-management interfaces.',
  },
  {
    title: 'AI-enabled product features',
    description: 'Integrate model-backed generation and recommendations using Ollama, Groq, Gemini, and conversational tools.',
  },
  {
    title: 'Performance-aware delivery',
    description: 'Use code splitting, lazy loading, build optimization, and responsive implementation to support maintainable products.',
  },
  {
    title: 'SEO & Accessibility',
    description: 'Use server-side rendering, structured data (JSON-LD), semantic HTML, and meta-tag optimization to build discoverable web applications with WCAG-conscious interfaces for people of all abilities.',
  },
  {
    title: 'Performance Optimization',
    description: 'Apply code splitting, lazy loading, caching strategies, SSR, and bundle optimization to improve Core Web Vitals and page speed.',
  },
  {
    title: 'Responsive UI/UX',
    description: 'Build mobile-first, pixel-precise interfaces with Tailwind CSS and component libraries, translating design files into production-ready responsive experiences.',
  },
];

export default function AboutPage() {
  const { person } = portfolioData;

  return (
    <article className="route-page about-page">
      <div className="page-container">
        <Reveal className="route-heading">
          <p className="eyebrow">A little about me</p>
          <h1 className="section-title">Who I am<span className="title-period">.</span></h1>
          <p className="route-lead">{person.bio}</p>
        </Reveal>

        <div className="about-page-profile">
          <Reveal className="about-photo-wrap">
            <img
              className="about-photo"
              src={person.secondaryAvatar}
              alt={`Portrait of ${person.name}`}
              loading="lazy"
              decoding="async"
            />
          </Reveal>
          <Reveal className="about-facts about-page-facts">
            <div>
              <span className="fact-label"><MapPin size={14} aria-hidden="true" /> Based in</span>
              <strong>{person.location}</strong>
            </div>
            <div>
              <span className="fact-label"><Languages size={14} aria-hidden="true" /> Languages</span>
              <strong>{portfolioData.languages.join(' · ')}</strong>
            </div>
          </Reveal>
        </div>

        <section className="route-content-section about-capabilities" aria-labelledby="capabilities-title">
          <Reveal className="section-heading-row">
            <div>
              <p className="eyebrow">Capabilities</p>
              <h2 className="section-title" id="capabilities-title">What I build</h2>
            </div>
            <p className="section-intro">
              Areas where I bring hands-on depth across application architecture, content platforms, and product delivery.
            </p>
          </Reveal>
          <div className="capabilities-grid">
            {capabilities.map((capability, index) => (
              <Reveal className="capability-card" key={capability.title}>
                <div className="capability-card-topline">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <span className="capability-marker" aria-hidden="true" />
                </div>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="route-content-section" aria-labelledby="approach-title">
          <Reveal className="section-heading-row">
            <div>
              <p className="eyebrow">How I work</p>
              <h2 className="section-title" id="approach-title">How I approach development</h2>
            </div>
          </Reveal>
          <div className="approach-list">
            {portfolioData.developmentApproach.map((step, index) => (
              <Reveal className="approach-item" key={step.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="route-content-section" aria-labelledby="enjoy-title">
          <Reveal className="section-heading-row">
            <div>
              <p className="eyebrow">The work I enjoy</p>
              <h2 className="section-title" id="enjoy-title">What I enjoy building</h2>
            </div>
          </Reveal>
          <Reveal className="enjoy-copy">
            <p>{portfolioData.enjoyBuilding}</p>
          </Reveal>
        </section>
      </div>
    </article>
  );
}
