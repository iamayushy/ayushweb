import { useState } from 'react';

export function ContactSection() {
  const [hoveredLink, setHoveredLink] = useState('');
  
  const links = [
    {
      name: 'GitHub',
      url: 'https://github.com/iamayushy',
      icon: '👨‍💻',
      color: 'hover:text-purple-400'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/ayushbbm,',
      icon: '💼',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/findayush',
      icon: '🐦',
      color: 'hover:text-sky-400'
    },
    {
      name: 'Email',
      url: 'mailto:ayushhuns@gmail.com',
      icon: '📧',
      color: 'hover:text-emerald-400'
    }
  ];

  return (
    <section className="relative w-full px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">Let&apos;s Connect</h2>
          <p className="text-zinc-400">Always open to interesting conversations and opportunities</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative rounded-xl bg-zinc-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 ${link.color}`}
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink('')}
            >
              <div className="mb-4 text-4xl">{link.icon}</div>
              <h3 className="text-lg font-medium text-white">{link.name}</h3>
              <div className={`mt-2 h-1 w-0 bg-current transition-all duration-300 ${
                hoveredLink === link.name ? 'w-12' : 'w-0'
              }`} />
            </a>
          ))}
        </div>

        <div className="mt-20 text-center text-sm text-zinc-500">
          <p>Built with React, Remix, and TailwindCSS</p>
          <p className="mt-2">© {new Date().getFullYear()} Ayush Yadav. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}