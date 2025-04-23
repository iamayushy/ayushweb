import { RoleBadge } from "~/components/home/role-badge"
import { HeroHeading } from "~/components/home/hero-heading"
import { HeroDescription } from "~/components/home/hero-description";
import { HeroActions } from "~/components/home/hero-actions";

export function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 max-w-4xl mx-auto">
      <RoleBadge />
      <HeroHeading />
      <HeroDescription />
      <HeroActions />
    </div>
  );
}
