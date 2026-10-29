import { useEffect, useState } from 'react';

/**
 * Scroll-spy hook: returns the id of the section currently crossing the
 * activation line (roughly one third down the viewport). Uses an
 * IntersectionObserver plus a rAF-throttled scroll fallback so the active
 * state stays accurate even while momentum scrolling.
 */
export function useSectionSpy(sectionIds: readonly string[]) {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '');
  const idsKey = sectionIds.join('|');

  useEffect(() => {
    const ids = idsKey.split('|').filter(Boolean);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;

    let frame = 0;
    const update = () => {
      const activationLine = window.innerHeight * 0.35;
      const current = sections.reduce<HTMLElement | null>((closest, section) => {
        return section.getBoundingClientRect().top <= activationLine + 2 ? section : closest;
      }, null);
      setActiveId(current?.id ?? sections[0].id);
    };
    const handleScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        update();
      });
    };

    const observer = new IntersectionObserver(update, {
      rootMargin: '-35% 0px -60% 0px',
      threshold: 0,
    });
    sections.forEach((section) => observer.observe(section));
    update();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', update);
    };
  }, [idsKey]);

  return activeId;
}
