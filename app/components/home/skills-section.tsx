export function SkillsSection() {
  const skills = {
    "Frontend": [
      "React", "TypeScript", "Next.js", "Remix", "Vue.js",
      "Tailwind CSS", "HTML5", "CSS3"
    ],
    "Development Tools": [
      "Vite", "Webpack", "Babel", "NPM", "Jest",
      "React Testing Library"
    ],
    "Cloud & Deployment": [
      "GCP", "Vercel", "Serverless Architecture", "AWS"
    ],
    "Development Practices": [
      "Performance Optimization",
      "Responsive Design",
      "Cross-Browser Compatibility",
      "Component Design",
      "API Integration"
    ]
  };

  return (
    <section className="w-full max-w-6xl px-4 py-20">
      <h2 className="mb-16 text-center text-2xl font-semibold text-white">Skills & Technologies</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {Object.entries(skills).map(([category, items]) => (
          <div 
            key={category}
            className="group relative rounded-xl animate-border p-[1px] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10"
          >
            <div className="relative h-full rounded-xl bg-zinc-900/50 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-lg font-medium text-white transition-colors group-hover:text-emerald-500">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-zinc-800/50 px-3 py-1 text-sm text-zinc-300 transition-colors duration-300 group-hover:bg-zinc-700/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}