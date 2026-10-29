export function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (!section) return;

  const hash = `#${sectionId}`;
  if (window.location.pathname === '/' && window.location.hash !== hash) {
    window.history.replaceState(window.history.state, '', `/${hash}`);
  }

  const scrollMargin = Number.parseFloat(getComputedStyle(section).scrollMarginTop) || 0;
  const top = Math.max(0, window.scrollY + section.getBoundingClientRect().top - scrollMargin);
  const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth';
  window.scrollTo({ top, behavior });
}
