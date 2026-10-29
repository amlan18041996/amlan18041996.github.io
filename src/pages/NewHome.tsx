import { HeroNew } from '../features/hero/HeroNew';
import { ProjectsSection } from '../features/projects/ProjectsSection';
import { ContactSection } from '../features/contact/ContactSection';
import { ThemesSection } from '../features/themes/ThemesSection';
import { UILayoutToggle } from '../features/layout/UILayoutToggle';
import { useUIModeStore } from '../store/uiModeStore';
import { Section } from '../components/ui/Section';
import { portfolioData } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function NewHome() {
  const { sectionToggles } = useUIModeStore();
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <div>
      {sectionToggles.hero && <HeroNew />}

      {sectionToggles.about && (
        <Section ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">{portfolioData.person.bio}</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h3 className="font-semibold mb-2 text-blue-400">Frontend</h3>
                  <p className="text-gray-400 text-sm">React, Vue JS, Angular, Next JS, Nuxt JS</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h3 className="font-semibold mb-2 text-purple-400">Backend & AEM</h3>
                  <p className="text-gray-400 text-sm">Node.js, Python, PHP, AEM 6.5, AEM EDS</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-20" />
              <img
                src={portfolioData.person.avatar}
                alt={portfolioData.person.name}
                className="relative rounded-2xl w-full h-[400px] object-cover border border-white/10"
              />
            </div>
          </div>
        </Section>
      )}

      {sectionToggles.projects && <ProjectsSection />}

      {sectionToggles.experience && (
        <Section>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
            <p className="text-gray-400">Professional journey</p>
          </div>
          <div className="space-y-4">
            {portfolioData.experiences.map((exp) => (
              <div key={exp.id} className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className="text-gray-400">{exp.company}</p>
                  </div>
                  <span className="text-sm text-blue-400 mt-2 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.responsibilitiesAndContributions.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-400">
                      <span className="w-1.5 h-1.5 mt-2 rounded-full bg-blue-400 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>
      )}

      {sectionToggles.skills && (
        <Section>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
            <p className="text-gray-400">Technical expertise</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {portfolioData.skillCategories.map((cat) => (
              <div key={cat.id} className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <h3 className="text-lg font-semibold mb-4">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 text-sm rounded-full bg-white/10">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {sectionToggles.awards && (
        <Section>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Awards & Certifications</h2>
            <p className="text-gray-400">Recognition and credentials</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Awards</h3>
              <div className="space-y-3">
                {portfolioData.awards.map((award) => (
                  <div key={award.id} className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{award.title}</h4>
                      <span className="text-sm text-blue-400">{award.period}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{award.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Certifications</h3>
              <div className="space-y-3">
                {portfolioData.certifications.map((cert) => (
                  <div key={cert.id} className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="font-semibold">{cert.title}</h4>
                    <p className="text-sm text-gray-400">{cert.issuer} • {cert.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      )}

      {sectionToggles.principles && (
        <Section>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Principles</h2>
            <p className="text-gray-400">Vision, Mission, Values</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolioData.principles.map((p) => (
              <div key={p.id} className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                <p className="text-gray-300 mb-4">{p.description}</p>
                <ul className="space-y-2">
                  {p.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-400 text-sm">
                      <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-blue-400 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>
      )}

      {sectionToggles.contact && <ContactSection />}

      {sectionToggles.themes && (
        <>
          <ThemesSection />
          <Section>
            <UILayoutToggle />
          </Section>
        </>
      )}
    </div>
  );
}
