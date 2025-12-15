"use client";

import { useState, useEffect, useRef } from 'react';

const CustomCursor = () => {
  const [isClient, setIsClient] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Use refs for mutable values to avoid re-renders
  const mousePosition = useRef({ x: 0, y: 0 });
  const cursorPosition = useRef({ x: 0, y: 0 });
  const trailPositions = useRef<Array<{ x: number; y: number }>>([]);
  
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Initialize trail positions
    trailPositions.current = Array(8).fill({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const onMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"], input, textarea, select')) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseleave', onMouseLeave);

    let animationFrameId: number;

    const animateCursor = () => {
      // Update main cursor position
      const dx = mousePosition.current.x - cursorPosition.current.x;
      const dy = mousePosition.current.y - cursorPosition.current.y;
      const easing = 0.15;
      
      cursorPosition.current.x += dx * easing;
      cursorPosition.current.y += dy * easing;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${cursorPosition.current.x}px`;
        cursorRef.current.style.top = `${cursorPosition.current.y}px`;
      }

      // Update trails
      // Shift positions
      const newTrails = [...trailPositions.current];
      newTrails.pop();
      newTrails.unshift({ ...cursorPosition.current });
      trailPositions.current = newTrails;

      // Apply to DOM
      trailRefs.current.forEach((ref, index) => {
        if (ref) {
            const pos = trailPositions.current[index];
            ref.style.left = `${pos.x}px`;
            ref.style.top = `${pos.y}px`;
        }
      });

      animationFrameId = requestAnimationFrame(animateCursor);
    };

    animationFrameId = requestAnimationFrame(animateCursor);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isClient, isVisible]);

  if (!isClient) {
    return null;
  }

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className={`custom-cursor ${isPointer ? 'pointer' : ''} ${isVisible ? 'visible' : ''}`}
        style={{
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          position: 'fixed',
          zIndex: 9999
        }}
      />

      {/* Cursor trails */}
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          ref={(el) => { trailRefs.current[index] = el; }}
          className="cursor-trail"
          style={{
            transform: 'translate(-50%, -50%)',
             pointerEvents: 'none',
             position: 'fixed',
             zIndex: 9998
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;