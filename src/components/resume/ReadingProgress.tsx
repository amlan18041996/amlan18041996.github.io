import { useScrollProgress } from '../../hooks/useScrollProgress';

/** Thin reading-progress bar pinned under the sticky site header. */
export function ReadingProgress() {
  const progress = useScrollProgress();

  return (
    <div className="resume-progress" role="presentation" aria-hidden="true">
      <span className="resume-progress-bar" style={{ transform: `scaleX(${progress})` }} />
    </div>
  );
}
