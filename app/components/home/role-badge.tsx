import { useState, useEffect } from "react";

export function RoleBadge() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const roles = ["Full Stack Engineer", "Frontend Developer", "Software Engineer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setIsAnimating(false);
      }, 500); // Wait for fade out before changing text
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex animate-fade-in items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-1.5 text-sm">
      <div className="mr-2 h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
      <span 
        className={`text-zinc-400 transition-all duration-500 min-w-[140px] text-center ${isAnimating ? 'opacity-0 transform -translate-y-2' : 'opacity-100 transform translate-y-0'}`}
      >
        {roles[roleIndex]}
      </span>
    </div>
  );
}