export function ExperienceSection() {
  const experiences = [
    {
      company: "Fynd (Reliance Jio)",
      role: "Software Development Engineer",
      period: "September 2022 – Present",
      type: "Remote",
      achievements: [
        "Developed and maintained large-scale React applications with focus on scalability",
        "Migrated build tools from Webpack to Vite, improving development speed by 60%",
        "Engineered reusable component system for visual workflow editors",
        "Created technical documentation and enforced frontend best practices",
        "Built Boltic.io serverless platform frontend from ground up using React and TypeScript",
        "Implemented complex workflow editor with React-Flow",
        "Developed integration system for third-party services",
        "Created AI-powered workflow generation interface"
      ]
    }
  ];

  return (
    <section className="w-full max-w-4xl px-4 py-20">
      <h2 className="mb-16 text-center text-2xl font-semibold text-white">Experience</h2>
      <div className="relative space-y-12">
        {experiences.map((exp) => (
          <div 
            key={exp.company}
            className="group relative rounded-lg gradient-border-mask bg-zinc-900/30 p-6 backdrop-blur-sm transition-all hover:bg-zinc-900/50"
          >
            <div className="relative">
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-medium text-white">{exp.company}</h3>
                  <p className="mt-1 text-sm font-medium text-emerald-500">{exp.role}</p>
                  <p className="mt-1 text-sm text-zinc-500">{exp.type}</p>
                </div>
                <span className="text-sm text-zinc-500">{exp.period}</span>
              </div>
              
              <ul className="stagger-animation space-y-3">
                {exp.achievements.map((achievement) => (
                  <li 
                    key={achievement} 
                    className="flex items-start animate-slide-up-fade"
                  >
                    <span className="mr-3 mt-1.5 h-1 w-1 rounded-full bg-emerald-500" />
                    <span className="text-sm text-zinc-300">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}