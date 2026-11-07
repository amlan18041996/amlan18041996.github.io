import { SectionRail } from '../components/SectionRail';
import { ContactSection } from '../features/contact/ContactSection';
import { HeroSection } from '../features/hero/HeroSection';
import { ProjectsSection } from '../features/projects/ProjectsSection';
import { SkillsSection } from '../features/skills/SkillsSection';
import { MoreAboutSection } from '../features/profile/MoreAboutSection';
import { WhatYouCanCountOnSection } from '../features/profile/WhatYouCanCountOnSection';

export default function PortfolioPage() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <MoreAboutSection />
      <WhatYouCanCountOnSection />
      <ContactSection />
      <SectionRail />
    </>
  );
}
