import { useEffect, useState, useRef } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const lastPosition = useRef({ x: 0, y: 0 });
  const velocityRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Hide default cursor
    document.documentElement.style.cursor = 'none';
    
    const updatePosition = (e: MouseEvent) => {
      // Calculate velocity for more dynamic cursor behavior
      const dx = e.clientX - lastPosition.current.x;
      const dy = e.clientY - lastPosition.current.y;
      velocityRef.current = { x: dx * 0.1, y: dy * 0.1 };
      
      // Update position with slight lag for smoother movement
      setPosition(prev => ({
        x: prev.x + (e.clientX - prev.x) * 0.3,
        y: prev.y + (e.clientY - prev.y) * 0.3
      }));
      
      lastPosition.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.documentElement.style.cursor = 'auto';
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer ring */}
      <div
        className="pointer-events-none fixed z-50 h-8 w-8 -translate-x-1/2 -translate-y-1/2 transform-gpu rounded-full border border-emerald-400/50 transition-all duration-200 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.8 : 1}) translate(${velocityRef.current.x}px, ${velocityRef.current.y}px)`,
        }}
      />
      
      {/* Inner dot */}
      <div
        className={`pointer-events-none fixed z-50 h-2 w-2 -translate-x-1/2 -translate-y-1/2 transform-gpu rounded-full bg-emerald-400 transition-all duration-100 ease-out ${isClicking ? 'animate-flame-pulse' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 1.5 : 1})`,
        }}
      />
      
      {/* Glow effect */}
      <div
        className="pointer-events-none fixed z-40 h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform-gpu rounded-full bg-emerald-400/10 blur-md transition-all duration-300 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 1.5 : 1}) translate(${velocityRef.current.x * 1.5}px, ${velocityRef.current.y * 1.5}px)`,
          opacity: isClicking ? 0.7 : 0.3,
        }}
      />
    </>
  );
}