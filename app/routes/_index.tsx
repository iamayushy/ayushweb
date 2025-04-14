import type { MetaFunction } from "@remix-run/node";
import { Nav } from "~/components/nav";
import { HeroSection } from "~/components/home/hero-section";
import { FeaturedProjects } from "~/components/home/featured-projects";
import { ExperienceSection } from "~/components/home/experience-section";
import { SkillsSection } from "~/components/home/skills-section";
import { ContactSection } from "~/components/home/contact-section";
import { CustomCursor } from "~/components/ui/custom-cursor";

export const meta: MetaFunction = () => {
  return [
    { title: "Ayush Yadav - Portfolio" },
    { name: "description", content: "Frontend Developer & Designer" },
  ];
};

export default function Index() {
  return (
    <div className="relative min-h-screen bg-black">
      <CustomCursor />
      <Nav />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      <main className="flex min-h-screen flex-col items-center">
        <div className="flex min-h-screen w-full flex-col items-center justify-center px-4">
          <HeroSection />
        </div>
        <FeaturedProjects />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
}
