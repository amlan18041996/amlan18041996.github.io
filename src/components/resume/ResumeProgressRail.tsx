import { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { resumeSections } from '../../constants/resume';
import { scrollToSection } from '../../lib/navigation';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { useSectionSpy } from '../../hooks/useSectionSpy';

/**
 * Fixed section rail for the résumé (mirrors the homepage `SectionRail`).
 *
 * The pill's own border doubles as a progress meter: a conic-gradient overlay
 * draws the accent border around the aside as the document scrolls, and fires
 * a single ping when it completes (100%). Re-arms only after the reader
 * scrolls back up, so the celebration plays once per "first reach".
 *
 * On mobile the rail starts slid-off (right). It slides in the instant the
 * reader scrolls and, once they stop, waits 1.5s before sliding back out of
 * view — so it never lingers over the content while they are reading.
 */
const MOBILE_HIDE_DELAY = 1500;

export function ResumeProgressRail() {
  const progress = useScrollProgress();
  const activeId = useSectionSpy(resumeSections.map((section) => section.id));
  const [hasPinged, setHasPinged] = useState(false);
  const [mobileVisible, setMobileVisible] = useState(false);
  const wasCompleteRef = useRef(false);

  // Fire the one-time ping the moment the ring completes; reset the latch
  // only once the reader has meaningfully scrolled back up from the bottom.
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

  // Mobile: reveal the rail the moment the reader scrolls; once they stop,
  // wait 1.5s and slide it back off-screen to the right. This class is a no-op
  // on desktop (>=1200px), where the rail stays pinned.
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

  const activeIndex = resumeSections.findIndex(({ id }) => id === activeId);
  const previousSection = resumeSections[activeIndex - 1];
  const nextSection = resumeSections[activeIndex + 1];

  const navigateTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    else scrollToSection(sectionId);
  };

  return (
    <aside
      className={[
        'resume-rail',
        hasPinged ? 'is-complete' : '',
        mobileVisible ? 'is-mobile-visible' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      aria-label="Résumé sections"
      style={{ ['--resume-progress' as string]: String(progress) }}
    >
      <div className="resume-rail-inner">
        {previousSection ? (
          <button
            type="button"
            className="resume-rail-arrow"
            aria-label={`Go to previous section: ${previousSection.label}`}
            onClick={() => navigateTo(previousSection.id)}
          >
            <ChevronUp size={16} aria-hidden="true" />
          </button>
        ) : (
          <span className="resume-rail-arrow is-disabled" aria-hidden="true">
            <ChevronUp size={16} />
          </span>
        )}

        <nav className="resume-rail-dots" aria-label="Jump to section">
          {resumeSections.map((section) => (
            <button
              type="button"
              key={section.id}
              className={`resume-rail-dot ${activeId === section.id ? 'is-active' : ''}`}
              aria-label={`Go to ${section.label}`}
              aria-current={activeId === section.id ? 'location' : undefined}
              title={section.label}
              onClick={() => navigateTo(section.id)}
            >
              <span className="resume-rail-dot-label">{section.label}</span>
            </button>
          ))}
        </nav>

        {nextSection ? (
          <button
            type="button"
            className="resume-rail-arrow"
            aria-label={`Go to next section: ${nextSection.label}`}
            onClick={() => navigateTo(nextSection.id)}
          >
            <ChevronDown size={16} aria-hidden="true" />
          </button>
        ) : (
          <span className="resume-rail-arrow is-disabled" aria-hidden="true">
            <ChevronDown size={16} />
          </span>
        )}
      </div>
    </aside>
  );
}
