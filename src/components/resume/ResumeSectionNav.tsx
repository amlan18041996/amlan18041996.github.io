import { resumeSections } from '../../constants/resume';
import { useSectionSpy } from '../../hooks/useSectionSpy';
import { scrollToSection } from '../../lib/navigation';

/**
 * Sticky scroll-spy table of contents. Highlights the section currently in
 * view and smooth-scrolls to a section when a link is activated.
 */
export function ResumeSectionNav() {
  const activeId = useSectionSpy(resumeSections.map((section) => section.id));

  return (
    <nav className="resume-toc" aria-label="Résumé sections">
      <p className="eyebrow"><span className="eyebrow-mark" aria-hidden="true" /> Index</p>
      <ul className="resume-toc-list">
        {resumeSections.map((section, index) => {
          const isActive = activeId === section.id;
          return (
            <li key={section.id}>
              <a
                className={`resume-toc-link ${isActive ? 'is-active' : ''}`}
                href={`#${section.id}`}
                aria-current={isActive ? 'location' : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection(section.id);
                }}
              >
                <span className="resume-toc-index">{String(index + 1).padStart(2, '0')}</span>
                {section.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
