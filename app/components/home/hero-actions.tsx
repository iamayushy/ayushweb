import { Link } from "@remix-run/react";

export function HeroActions() {
  return (
    <div className="flex animate-fade-in items-center justify-center gap-4 pt-4">
      <Link
        to={"/projects"}
        className="group relative overflow-hidden rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-emerald-700"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-full w-full bg-gradient-to-br from-emerald-600 via-emerald-500 to-emerald-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        <span className="relative">View Projects</span>
      </Link>
      <Link
        to={"/contact"}
        className="group rounded-lg border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-all hover:bg-zinc-800 hover:text-white"
      >
        Contact Me
      </Link>
    </div>
  );
}