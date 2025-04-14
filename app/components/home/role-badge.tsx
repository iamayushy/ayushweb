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
    <div className="inline-flex animate-fade-in items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-sm space-x-2">
      <div className="mr-2 h-2 w-2 rounded-full bg-emerald-500" />
      <span 
        className={`text-zinc-400 transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
      >
        {roles[roleIndex]}
      </span>
    </div>
  );
}