import { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router';
import { homeSectionLinks } from '../constants/site';
import { scrollToSection } from '../lib/navigation';
import { useScrollProgress } from '../hooks/useScrollProgress';

const MOBILE_HIDE_DELAY = 1500;

export function SectionRail() {
  const progress = useScrollProgress();
  const [activeSection, setActiveSection] = useState<string>('introduction');
  const [mobileVisible, setMobileVisible] = useState(false);
  const [hasPinged, setHasPinged] = useState(false);
  const wasCompleteRef = useRef(false);
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

  useEffect(() => {
    const complete = progress >= 0.999;
    if (complete && !wasCompleteRef.current) {
      wasCompleteRef.current = true;
      setHasPinged(true);
    } else if (!complete && progress < 0.9 && wasCompleteRef.current) {
      wasCompleteRef.current = false;
      setHasPinged(false);
    }
  }, [progress]);

  useEffect(() => {
    let hideTimer: number | undefined;
    const show = () => {
      setMobileVisible(true);
      window.clearTimeout(hideTimer);
      hideTimer = window.setTimeout(() => setMobileVisible(false), MOBILE_HIDE_DELAY);
    };
    window.addEventListener('scroll', show, { passive: true });
    return () => {
      window.removeEventListener('scroll', show);
      window.clearTimeout(hideTimer);
    };
  }, []);

  const activeIndex = homeSectionLinks.findIndex(({ id }) => id === activeSection);
  const previousSection = homeSectionLinks[activeIndex - 1];
  const nextSection = homeSectionLinks[activeIndex + 1];

  return (
    <aside
      className={`section-rail ${mobileVisible ? 'is-mobile-visible' : ''} ${hasPinged ? 'is-complete' : ''}`}
      aria-label="Homepage sections"
      style={{ ['--resume-progress' as string]: String(progress) }}
    >
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
