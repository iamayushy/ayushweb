import { Link } from "@remix-run/react";

export function HeroActions() {
  return (
    <div className="flex animate-fade-in items-center justify-center gap-4 pt-4">
      <Link
        to={"/projects"}
        className="group relative overflow-hidden rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-200 transition-colors hover:bg-zinc-800"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-full w-full bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        <span className="relative">View Projects</span>
      </Link>
      <Link
        to={"/contact"}
        className="group rounded-lg border border-zinc-800 px-4 py-2 text-sm font-medium text-zinc-200 transition-colors hover:bg-zinc-900"
      >
        Contact Me
      </Link>
    </div>
  );
}