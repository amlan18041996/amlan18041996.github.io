export interface Person {
  name: string;
  role: string;
  roleVariants: string[];
  tagline: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  appointmentUrl?: string;
  avatar: string;
  secondaryAvatar: string;
  resumeUrl: string;
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'email' | 'website';
  url: string;
  label: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  companyUrl?: string;
  description: string;
  responsibilitiesAndContributions: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  period: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  type: 'work' | 'personal';
  company?: string;
  companyUrl?: string;
  role?: string;
  period: string;
  description: string;
  highlights: string[];
  impact?: string;
  tags: string[];
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  period: string;
  image: string;
  link: string;
  validUntil?: string;
}

export interface Award {
  id: string;
  title: string;
  period: string;
  description: string;
  image: string;
  galleryImage?: string;
  link: string;
}

export interface Principle {
  id: string;
  title: string;
  icon: string;
  description: string;
  points: string[];
}

export interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
  typicalUseCases: string[];
  whatYouGet: string[];
}

export interface DevelopmentApproachStep {
  title: string;
  description: string;
}

export interface Commitment {
  title: string;
  description: string;
}

export interface InterestGroup {
  title: string;
  interests: string[];
}

export interface PortfolioData {
  person: Person;
  socials: SocialLink[];
  experiences: Experience[];
  education: Education[];
  projects: Project[];
  skillCategories: SkillCategory[];
  certifications: Certification[];
  awards: Award[];
  principles: Principle[];
  services: Service[];
  developmentApproach: DevelopmentApproachStep[];
  enjoyBuilding: string;
  commitments: Commitment[];
  languages: string[];
  interests: InterestGroup[];
}
