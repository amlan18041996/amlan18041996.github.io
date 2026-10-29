export const resumeSections = [
  { id: 'resume-profile', label: 'Profile' },
  { id: 'resume-experience', label: 'Experience' },
  { id: 'resume-skills', label: 'Skills' },
  { id: 'resume-credentials', label: 'Credentials' },
  { id: 'resume-education', label: 'Education' },
  { id: 'resume-interests', label: 'Interests' },
] as const;

export type ResumeSectionId = (typeof resumeSections)[number]['id'];
