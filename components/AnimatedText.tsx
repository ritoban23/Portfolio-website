"use client";

import { useState, useEffect } from 'react';

interface AnimatedTextProps {
  text: string;
  type?: 'typing' | 'fadeIn' | 'slideUp';
  delay?: number;
  speed?: number;
  className?: string;
}

const AnimatedText = ({
  text,
  type = 'typing',
  delay = 0,
  speed = 100,
  className = ''
}: AnimatedTextProps) => {
  const [isClient, setIsClient] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const timer = setTimeout(() => {
      setIsVisible(true);

      if (type === 'typing') {
        let index = 0;
        const typingTimer = setInterval(() => {
          if (index < text.length) {
            setDisplayText(text.slice(0, index + 1));
            index++;
          } else {
            clearInterval(typingTimer);
          }
        }, speed);

        return () => clearInterval(typingTimer);
      } else {
        setDisplayText(text);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, type, delay, speed, isClient]);

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';

    switch (type) {
      case 'fadeIn':
        return 'animate-fade-in';
      case 'slideUp':
        return 'animate-slide-up';
      case 'typing':
        return 'animate-fade-in';
      default:
        return 'animate-fade-in';
    }
  };

  if (!isClient) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={`${className} ${getAnimationClass()}`}>
      {type === 'typing' ? displayText : text}
      {type === 'typing' && isVisible && displayText.length < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
};

export default AnimatedText;