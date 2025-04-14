
import { useEffect } from 'react';

export function StructuredData() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Ayush Yadav",
      "url": "https://ayushyadav.in",
      "jobTitle": "Software Engineer & Full Stack Developer",
      "sameAs": [
        "https://github.com/iamayushy",
        "https://linkedin.com/in/ayushbb,",
        "https://twitter.com/findayush"
      ],
      "knowsAbout": ["React", "Node.js", "TypeScript", "JavaScript", "Web Development", "UI/UX Design", "Remix", "Influencer", "Content Creator", "Cloud Technologies"],
      "alumniOf": {
        "@type": "University",
        "name": "University of Mumbai"
      },
      "worksFor": {
        "@type": "Organization",
        "name": "Fynd | Reliance | Boltic",
      }
    });
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}