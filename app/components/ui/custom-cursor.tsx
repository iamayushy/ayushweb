import { useEffect, useState, useRef } from "react";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const lastPosition = useRef({ x: 0, y: 0 });
  const velocityRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Hide default cursor
    document.documentElement.style.cursor = 'none';
    
    const updatePosition = (e: MouseEvent) => {
      // Calculate velocity for more dynamic cursor behavior
      const dx = e.clientX - lastPosition.current.x;
      const dy = e.clientY - lastPosition.current.y;
      velocityRef.current = { x: dx * 0.1, y: dy * 0.1 };
      
      lastPosition.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
      
      // Use requestAnimationFrame for smoother updates
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      rafRef.current = requestAnimationFrame(() => {
        if (!cursorRef.current || !dotRef.current || !glowRef.current) return;
        
        // Direct DOM manipulation instead of state updates
        const cursorX = lastPosition.current.x;
        const cursorY = lastPosition.current.y;
        
        // Update outer ring
        cursorRef.current.style.left = `${cursorX}px`;
        cursorRef.current.style.top = `${cursorY}px`;
        cursorRef.current.style.transform = `translate(-50%, -50%) scale(${isClicking ? 0.8 : 1}) translate(${velocityRef.current.x}px, ${velocityRef.current.y}px)`;
        
        // Update inner dot
        dotRef.current.style.left = `${cursorX}px`;
        dotRef.current.style.top = `${cursorY}px`;
        dotRef.current.style.transform = `translate(-50%, -50%) scale(${isClicking ? 1.5 : 1})`;
        
        // Update glow effect
        glowRef.current.style.left = `${cursorX}px`;
        glowRef.current.style.top = `${cursorY}px`;
        glowRef.current.style.transform = `translate(-50%, -50%) scale(${isClicking ? 1.5 : 1}) translate(${velocityRef.current.x * 1.5}px, ${velocityRef.current.y * 1.5}px)`;
        glowRef.current.style.opacity = isClicking ? '0.7' : '0.3';
      });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Use passive event listeners for better performance
    window.addEventListener("mousemove", updatePosition, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    document.documentElement.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    document.documentElement.addEventListener("mouseenter", handleMouseEnter, { passive: true });

    return () => {
      document.documentElement.style.cursor = 'auto';
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
      
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isVisible, isClicking]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer ring */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed z-50 h-8 w-8 -translate-x-1/2 -translate-y-1/2 transform-gpu rounded-full border border-emerald-400/50 transition-all duration-200 ease-out"
      />
      
      {/* Inner dot */}
      <div
        ref={dotRef}
        className={`pointer-events-none fixed z-50 h-2 w-2 -translate-x-1/2 -translate-y-1/2 transform-gpu rounded-full bg-emerald-400 transition-all duration-100 ease-out ${isClicking ? 'animate-flame-pulse' : ''}`}
      />
      
      {/* Glow effect */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed z-40 h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform-gpu rounded-full bg-emerald-400/10 blur-md transition-all duration-300 ease-out"
      />
    </>
  );
}