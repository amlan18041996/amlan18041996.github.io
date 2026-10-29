import { ResumeMasthead } from '../components/resume/ResumeMasthead';
import { ResumeProgressRail } from '../components/resume/ResumeProgressRail';
import { ExperienceTimeline } from '../components/resume/ExperienceTimeline';
import { SkillsMatrix } from '../components/resume/SkillsMatrix';
import { CredentialsGallery } from '../components/resume/CredentialsGallery';
import { ResumeAside } from '../components/resume/ResumeAside';
import { usePrintResume } from '../hooks/usePrintResume';

/**
 * The digital résumé: an interactive, printable career dossier.
 *
 * Layout: masthead → [experience + skills + credentials] alongside an
 * education/languages/interests aside. A fixed right-center rail lists the
 * sections and doubles as a progress meter drawn around its own border.
 */
export default function DigitalResumePage() {
  const { expandSignal, isPreparing, print } = usePrintResume();

  return (
    <article className="route-page digital-resume-page">
      <ResumeProgressRail />
      <div className="page-container resume-document">
        <ResumeMasthead onPrint={print} isPreparingPrint={isPreparing} />

        <div className="resume-main-layout">
          <div className="resume-career">
            <ExperienceTimeline expandSignal={expandSignal} />
            <SkillsMatrix />
            <CredentialsGallery />
          </div>
          <ResumeAside />
        </div>
      </div>
    </article>
  );
}
