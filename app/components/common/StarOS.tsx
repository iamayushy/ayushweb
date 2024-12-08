import { Star } from 'lucide-react';

const StarBackground = () => (
  <div className="fixed inset-0 z-0">
    {[...Array(100)].map((_, i) => (
      <Star
        key={i}
        className="absolute text-white opacity-50 animate-twinkle"
        size={Math.random() * 8 + 1}
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${Math.random() * 3 + 2}s`
        }}
      />
    ))}
  </div>
);

export default StarBackground;