import { SectionRail } from '../components/SectionRail';
import { ContactSection } from '../features/contact/ContactSection';
import { CredentialsSection } from '../features/credentials/CredentialsSection';
import { ExperienceSection } from '../features/experience/ExperienceSection';
import { HeroSection } from '../features/hero/HeroSection';
import { ProjectsSection } from '../features/projects/ProjectsSection';
import { SkillsSection } from '../features/skills/SkillsSection';
import { MoreAboutSection } from '../features/profile/MoreAboutSection';
import { WhatYouCanCountOnSection } from '../features/profile/WhatYouCanCountOnSection';

export default function PortfolioPage() {
  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <CredentialsSection />
      <MoreAboutSection />
      <WhatYouCanCountOnSection />
      <ContactSection />
      <SectionRail />
    </>
  );
}
