import { useState, useEffect } from 'react';

function TypingText({ text, speed = 50, delay = 1000 }) {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = text[wordIndex];
    
    if (!isDeleting) {
      // Typing 
      if (charIndex < currentWord.length) {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev + currentWord.charAt(charIndex));
          setCharIndex(charIndex + 1);
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delay);
        return () => clearTimeout(timeout);
      }
    } else {
      // Backspace
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
          setCharIndex(charIndex - 1);
        }, speed / 2);
        return () => clearTimeout(timeout);
      } else {
        // Move to next word
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % text.length);
        setCharIndex(0);
      }
    }
  }, [charIndex, isDeleting, text, wordIndex, speed, delay]);

  return <span className="typing-text">{displayText}</span>;
}

export default TypingText;