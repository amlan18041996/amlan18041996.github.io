export const themeOptions = [
  { value: 'default', label: 'Classic Dark', color: '#f08a4b' },
  { value: 'white', label: 'Classic White', color: '#c85e2c' },
  { value: 'ocean', label: 'Ocean Blue', color: '#59c5c6' },
  { value: 'forest', label: 'Forest Green', color: '#a7ca83' },
  { value: 'sunset', label: 'Warm Sunset', color: '#ff9a69' },
] as const;

export const primaryLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/works', label: 'Works' },
  { href: '/experience', label: 'Experience' },
  { href: '/about', label: 'About' },
  { href: '/digital-resume', label: 'Resume' },
  { href: '/contact', label: 'Contact' },
] as const;

export const homeSectionLinks = [
  { id: 'top', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills & tools' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'principles', label: 'Principles' },
  { id: 'interests', label: 'Interests' },
  { id: 'commitments', label: 'What you can count on' },
  { id: 'contact', label: 'Contact' },
] as const;
