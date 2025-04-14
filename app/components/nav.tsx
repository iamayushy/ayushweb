import { Link, useLocation } from "@remix-run/react";

export function Nav() {
  const location = useLocation();
  const currentPath = location.pathname === "/" ? "home" : location.pathname.slice(1);

  const isActive = (path: string) => {
    if (path === "home") {
      return currentPath === "home";
    }
    return currentPath === path;
  };

  return (
    <div className="fixed left-1/2 top-6 z-50 -translate-x-1/2">
      <div className="rounded-full border border-white/[0.2] bg-black/[0.8] px-8 py-4 backdrop-blur-md">
        <nav className="flex items-center gap-6 text-sm font-medium text-zinc-200">
          <Link 
            to="/" 
            className={`transition ${isActive("home") ? "text-emerald-400" : "hover:text-white"}`}
          >
            Home
          </Link>
          <Link 
            to="/projects" 
            className={`transition ${isActive("projects") ? "text-emerald-400" : "hover:text-white"}`}
          >
            Projects
          </Link>
          <Link 
            to="/skills" 
            className={`transition ${isActive("skills") ? "text-emerald-400" : "hover:text-white"}`}
          >
            Skills
          </Link>
          <Link 
            to="/contact" 
            className={`transition ${isActive("contact") ? "text-emerald-400" : "hover:text-white"}`}
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}