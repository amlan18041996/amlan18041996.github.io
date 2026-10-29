import { portfolioData } from '../data/portfolio';

const MONTHS: Record<string, number> = {
  jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
  jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11,
};

/** Parses strings like "Oct 2022", "March 2025" or "July 2014" into a Date (day 1). */
function parsePeriodStart(period: string): Date | null {
  const match = period.match(/([A-Za-z]+)\s+(\d{4})/);
  if (!match) return null;
  const month = MONTHS[match[1].slice(0, 3).toLowerCase()];
  if (month === undefined) return null;
  return new Date(Number(match[2]), month, 1);
}

function parsePeriodEnd(period: string): Date {
  if (/present/i.test(period)) return new Date();
  const parts = period.split('—');
  const end = parts.length > 1 ? parsePeriodStart(parts[parts.length - 1]) : null;
  return end ?? new Date();
}

/** Total years of professional experience derived from the work history. */
export function getYearsOfExperience(): number {
  const starts = portfolioData.experiences
    .map((experience) => parsePeriodStart(experience.period))
    .filter((date): date is Date => date !== null);
  if (!starts.length) return 0;

  const earliest = new Date(Math.min(...starts.map((date) => date.getTime())));
  const latestEnd = new Date(
    Math.max(...portfolioData.experiences.map((experience) => parsePeriodEnd(experience.period).getTime())),
  );
  const years = (latestEnd.getTime() - earliest.getTime()) / (365.25 * 24 * 60 * 60 * 1000);
  return Math.max(1, Math.round(years));
}

export interface ResumeStats {
  yearsLabel: string;
  companies: number;
  projects: number;
  credentials: number;
  languages: number;
}

/** Aggregate counters derived purely from portfolio data. */
export function getResumeStats(): ResumeStats {
  const companies = new Set(portfolioData.experiences.map((experience) => experience.company));
  return {
    yearsLabel: `${getYearsOfExperience()}+`,
    companies: companies.size,
    projects: portfolioData.projects.length,
    credentials: portfolioData.certifications.length + portfolioData.awards.length,
    languages: portfolioData.languages.length,
  };
}

/** Flattens every skill across categories, de-duplicated and sorted. */
export function getAllSkills(): string[] {
  const skills = new Set<string>();
  portfolioData.skillCategories.forEach((category) => {
    category.skills.forEach((skill) => skills.add(skill));
  });
  return Array.from(skills).sort((a, b) => a.localeCompare(b));
}
