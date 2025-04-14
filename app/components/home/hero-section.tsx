import { RoleBadge } from "~/components/home/role-badge"
import { HeroHeading } from "~/components/home/hero-heading"
import { HeroDescription } from "~/components/home/hero-description";
import { HeroActions } from "~/components/home/hero-actions";

export function HeroSection() {
  return (
    <div className="space-y-6 text-center">
      <RoleBadge />
      <HeroHeading />
      <HeroDescription />
      <HeroActions />
    </div>
  );
}
