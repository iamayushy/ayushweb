import { useEffect, useState, useRef } from "react";

export function FlameCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [trailPoints, setTrailPoints] = useState<Array<{ x: number; y: number; id: number; scale: number }>>([]); 
  const lastPointTime = useRef(0);
  const pointIdCounter = useRef(0);
  const lastPosition = useRef({ x: 0, y: 0 });
  const velocityRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      // Calculate velocity for more dynamic flame behavior
      const dx = e.clientX - lastPosition.current.x;
      const dy = e.clientY - lastPosition.current.y;
      velocityRef.current = { x: dx * 0.1, y: dy * 0.1 };
      
      // Update position with slight lag for smoother movement
      setPosition(prev => ({
        x: prev.x + (e.clientX - prev.x) * 0.3,
        y: prev.y + (e.clientY - prev.y) * 0.3
      }));
      
      lastPosition.current = { x: e.clientX, y: e.clientY };
      
      // Add trail points with varying sizes based on velocity
      const now = Date.now();
      if (now - lastPointTime.current > 60) {
        const speed = Math.sqrt(dx * dx + dy * dy);
        lastPointTime.current = now;
        const newId = pointIdCounter.current++;
        const scale = Math.min(1.2, Math.max(0.6, speed / 30));
        
        setTrailPoints(prev => [...prev, { 
          x: e.clientX, 
          y: e.clientY, 
          id: newId,
          scale
        }]);
        
        // Limit the number of trail points
        if (trailPoints.length > 7) {
          setTrailPoints(prev => prev.slice(1));
        }
      }
      
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setTrailPoints([]);
    };

    // Clean up trail points after they fade
    const cleanupInterval = setInterval(() => {
      setTrailPoints(prev => {
        if (prev.length > 0) {
          return prev.slice(1);
        }
        return prev;
      });
    }, 800);

    window.addEventListener("mousemove", updatePosition);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      clearInterval(cleanupInterval);
    };
  }, [isVisible, trailPoints.length]);

  if (!isVisible) return null;

  return (
    <>
      {/* Trail flames */}
      {trailPoints.map((point, index) => (
        <div
          key={point.id}
          className="pointer-events-none fixed z-40 h-[300px] w-[300px] transform-gpu"
          style={{
            left: `${point.x - 150}px`,
            top: `${point.y - 150}px`,
            opacity: 0.7 - index * 0.1,
            transform: `scale(${point.scale})`,
            transition: "opacity 0.3s ease-out",
          }}
        >
          <div className="relative h-full w-full">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-[80px] w-[80px] animate-flame-flicker rounded-full bg-gradient-to-t from-orange-600/10 via-emerald-500/10 to-emerald-300/20 blur-xl" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-[50px] w-[50px] animate-flame-sway rounded-full bg-gradient-to-t from-emerald-500/10 via-emerald-400/20 to-teal-300/20 blur-lg" />
            </div>
          </div>
        </div>
      ))}

      {/* Main cursor flame */}
      <div
        className="pointer-events-none fixed z-50 h-[400px] w-[400px] transform-gpu"
        style={{
          left: `${position.x - 200}px`,
          top: `${position.y - 200}px`,
          transition: "transform 0.1s cubic-bezier(0.23, 1, 0.32, 1), left 0.2s cubic-bezier(0.23, 1, 0.32, 1), top 0.2s cubic-bezier(0.23, 1, 0.32, 1)",
          transform: `translate(${velocityRef.current.x}px, ${velocityRef.current.y}px)`,
        }}
      >
        <div className="relative h-full w-full">
          {/* Outer largest flame layer */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-[140px] w-[140px] animate-flame-flicker rounded-full bg-gradient-to-t from-emerald-600/10 via-emerald-500/20 to-emerald-300/30 blur-2xl" />
          </div>
          
          {/* Middle flame layer */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-[100px] w-[100px] animate-flame-sway rounded-full bg-gradient-to-t from-emerald-500/20 via-emerald-400/30 to-teal-300/40 blur-xl" />
          </div>
          
          {/* Inner flame layer */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-[70px] w-[70px] animate-flame-pulse rounded-full bg-gradient-to-t from-teal-400/30 via-emerald-300/40 to-cyan-200/50 blur-lg" />
          </div>
          
          {/* Core flame */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-[40px] w-[40px] animate-flame-pulse rounded-full bg-gradient-to-t from-white/40 via-emerald-200/50 to-white/60 blur-md" />
          </div>
        </div>
      </div>
    </>
  );
}