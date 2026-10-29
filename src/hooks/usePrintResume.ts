import { useCallback, useState } from 'react';

/**
 * Coordinates printing: exposes a signal that sections can watch to
 * expand their collapsed content, then triggers the browser print dialog.
 */
export function usePrintResume() {
  const [expandSignal, setExpandSignal] = useState(0);
  const [isPreparing, setIsPreparing] = useState(false);

  const print = useCallback(() => {
    setIsPreparing(true);
    // Bump the signal so collapsible sections open, then print once painted.
    setExpandSignal((value) => value + 1);
    window.setTimeout(() => {
      window.print();
      setIsPreparing(false);
    }, 120);
  }, []);

  return { expandSignal, isPreparing, print };
}
