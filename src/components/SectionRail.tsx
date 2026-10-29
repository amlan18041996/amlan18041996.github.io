import { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router';
import { homeSectionLinks } from '../constants/site';
import { scrollToSection } from '../lib/navigation';

export function SectionRail() {
  const [activeSection, setActiveSection] = useState<string>('top');
  const navigateToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    scrollToSection(sectionId);
  };

  useEffect(() => {
    const sections = homeSectionLinks
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    if (!sections.length) return;

    let frame = 0;
    const updateActiveSection = () => {
      const activationLine = window.innerHeight * 0.4;
      const currentSection = sections.reduce<HTMLElement | null>((current, section) => {
        return section.getBoundingClientRect().top <= activationLine + 2 ? section : current;
      }, null);
      setActiveSection(currentSection?.id ?? sections[0].id);
    };
    const handleScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        updateActiveSection();
      });
    };

    const observer = new IntersectionObserver(updateActiveSection, {
      rootMargin: '-40% 0px -59% 0px',
      threshold: 0,
    });

    sections.forEach((section) => observer.observe(section));
    updateActiveSection();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  const activeIndex = homeSectionLinks.findIndex(({ id }) => id === activeSection);
  const previousSection = homeSectionLinks[activeIndex - 1];
  const nextSection = homeSectionLinks[activeIndex + 1];

  return (
    <aside className="section-rail" aria-label="Homepage sections">
      {previousSection ? (
        <Link
          className="section-rail-arrow"
          to={`/#${previousSection.id}`}
          aria-label={`Go to previous section: ${previousSection.label}`}
          onClick={(event) => {
            event.preventDefault();
            navigateToSection(previousSection.id);
          }}
        >
          <ChevronUp size={17} aria-hidden="true" />
        </Link>
      ) : (
        <span className="section-rail-arrow is-disabled" aria-hidden="true">
          <ChevronUp size={17} />
        </span>
      )}
      <nav className="section-rail-dots" aria-label="Jump to section">
        {homeSectionLinks.map((section) => (
          <Link
            className={`section-rail-dot ${activeSection === section.id ? 'is-active' : ''}`}
            to={`/#${section.id}`}
            key={section.id}
            aria-label={`Go to ${section.label}`}
            aria-current={activeSection === section.id ? 'location' : undefined}
            title={section.label}
            onClick={(event) => {
              event.preventDefault();
              navigateToSection(section.id);
            }}
          >
            <span>{section.label}</span>
          </Link>
        ))}
      </nav>
      {nextSection ? (
        <Link
          className="section-rail-arrow"
          to={`/#${nextSection.id}`}
          aria-label={`Go to next section: ${nextSection.label}`}
          onClick={(event) => {
            event.preventDefault();
            navigateToSection(nextSection.id);
          }}
        >
          <ChevronDown size={17} aria-hidden="true" />
        </Link>
      ) : (
        <span className="section-rail-arrow is-disabled" aria-hidden="true">
          <ChevronDown size={17} />
        </span>
      )}
    </aside>
  );
}
