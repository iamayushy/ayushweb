export function HeroDescription() {
  return (
    <div className="space-y-6">
      <p className="mx-auto max-w-2xl animate-slide-up text-base text-zinc-400 sm:text-lg leading-relaxed">
        Frontend Software Engineer with 2+ years of experience building scalable web applications. 
        Specializing in React, Remix.js, and TypeScript, with a focus on performance optimization 
        and component-driven architecture.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
        <span className="rounded-full bg-zinc-900/50 px-3 py-1 text-emerald-400 border border-zinc-800 hover:bg-zinc-800 transition-colors">React</span>
        <span className="rounded-full bg-zinc-900/50 px-3 py-1 text-emerald-400 border border-zinc-800 hover:bg-zinc-800 transition-colors">TypeScript</span>
        <span className="rounded-full bg-zinc-900/50 px-3 py-1 text-emerald-400 border border-zinc-800 hover:bg-zinc-800 transition-colors">Remix.js</span>
        <span className="rounded-full bg-zinc-900/50 px-3 py-1 text-emerald-400 border border-zinc-800 hover:bg-zinc-800 transition-colors">Vue.js</span>
        <span className="rounded-full bg-zinc-900/50 px-3 py-1 text-emerald-400 border border-zinc-800 hover:bg-zinc-800 transition-colors">Tailwind</span>
      </div>
      <div className="flex items-center justify-center gap-4 text-sm text-zinc-500">
        <a href="mailto:ayushhuns@gmail.com" className="hover:text-emerald-400 transition-colors">
          ayushhuns@gmail.com
        </a>
        <span>•</span>
        <span>Mumbai, India</span>
      </div>
    </div>
  );
}