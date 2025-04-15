export function FeaturedProjects() {
  const projects = [
    {
      title: "Boltic.io Platform",
      description: "Built a complete serverless platform from scratch featuring workflow automation, integrations, and AI-powered workflow generation. Similar to Zapier but with serverless capabilities.",
      tech: ["React", "TypeScript", "React-Flow", "Serverless"],
      highlights: [
        "Engineered visual workflow editor using React-Flow",
        "Built serverless functions UI similar to Supabase",
        "Developed integration library for external services",
        "Implemented AI-powered workflow generation"
      ],
      link: "https://boltic.io"
    },
    {
      title: "AI Workflow Generator",
      description: "Full-stack application enabling users to design and execute AI processing workflows through an intuitive interface.",
      tech: ["Remix", "React", "Express.js", "TypeScript"],
      highlights: [
        "Drag-and-drop workflow designer",
        "Real-time workflow validation",
        "Result visualization components",
        "User authentication system"
      ],
      link: "https://console.boltic.io"
    },
    {
      title: "JioMartDigital Platform",
      description: "Led development of e-commerce platform serving 8,000+ merchants with ₹2 Cr+ monthly revenue.",
      tech: ["Vue.js", "SpiceMoney", "Hathway"],
      highlights: [
        "Integrated multiple payment gateways",
        "Improved POS system performance",
        "Implemented merchant dashboard",
        "Awarded Fynd Star Award"
      ],
      link: "https://jiomartdigital.com"
    }
  ];

  return (
    <section className="w-full max-w-6xl px-4 py-20">
      <h2 className="mb-8 text-center text-3xl font-bold text-white">Featured Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div 
            key={project.title}
            className="group relative rounded-xl animate-border p-[1px] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10"
          >
            <div className="relative rounded-xl bg-zinc-900/50 p-6 h-full backdrop-blur-sm">
              <div className="mb-4">
                <h3 className="mb-2 text-xl font-semibold text-white transition-colors group-hover:text-emerald-500">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-400">{project.description}</p>
              </div>
              
              <ul className="mb-4 space-y-2 text-sm text-zinc-400">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center">
                    <span className="mr-2 text-emerald-500 transition-transform duration-300 group-hover:scale-125">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="rounded-full bg-zinc-800/50 px-2 py-1 text-xs text-zinc-300 transition-colors duration-300 group-hover:bg-zinc-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm text-emerald-500 opacity-0 transition-all duration-300 group-hover:opacity-100"
              >
                View Project 
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}