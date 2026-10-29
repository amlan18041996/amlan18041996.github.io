import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Copies text to the clipboard and tracks which value was copied last,
 * so callers can show a transient "Copied" affordance per item.
 */
export function useCopyToClipboard(resetDelay = 1800) {
  const [copied, setCopied] = useState<string | null>(null);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = useCallback(
    async (text: string) => {
      let ok = false;
      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(text);
          ok = true;
        } else {
          // Fallback for browsers/contexts without the async clipboard API.
          const field = document.createElement('textarea');
          field.value = text;
          field.setAttribute('readonly', '');
          field.style.position = 'fixed';
          field.style.opacity = '0';
          document.body.appendChild(field);
          field.select();
          ok = document.execCommand('copy');
          document.body.removeChild(field);
        }
      } catch {
        ok = false;
      }

      if (ok) {
        setCopied(text);
        window.clearTimeout(timer.current);
        timer.current = window.setTimeout(() => setCopied(null), resetDelay);
      }
      return ok;
    },
    [resetDelay],
  );

  return { copied, copy };
}
