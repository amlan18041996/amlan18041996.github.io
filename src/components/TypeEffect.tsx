import { useState, useEffect } from "react";

interface TypeEffectProps {
  words: string[];
  loop?: boolean;
  delaySpeed?: number;
  className?: string;
}

export default function TypeEffect({
  words,
  loop = true,
  delaySpeed = 2000,
  className = "",
}: TypeEffectProps) {
  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const type = () => {
      const current = words[wordIndex] ?? '';
      if (!current) return;
      if (isDeleting) {
        setCurrentWord(current.substring(0, currentWord.length - 1));
        setTypingSpeed(75);
      } else {
        setCurrentWord(current.substring(0, currentWord.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && currentWord === current) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delaySpeed);
      } else if (isDeleting && currentWord === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (loop ? (prev + 1) % words.length : prev + 1));
      }
    };

    timer = setTimeout(type, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentWord, isDeleting, wordIndex, words, loop, delaySpeed, typingSpeed]);

  return (
    <span className={className}>
      {currentWord}
      <span className="animate-blink">|</span>
    </span>
  );
}
