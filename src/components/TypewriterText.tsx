import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  speed = 100, 
  delay = 0,
  className = "" 
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }
    }, currentIndex === 0 ? delay : Math.floor((Math.random() + 0.5) * speed));

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, delay]);

  return (
    <span className={className}>
      {displayedText}
      {currentIndex > 0 && currentIndex < text.length && <span className="animate-pulse">|</span>}
    </span>
  );
};

export default TypewriterText;
