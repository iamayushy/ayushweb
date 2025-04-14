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
    { title: "Ayush Yadav | Full Stack Engineer & UI/UX Designer" },
    { name: "description", content: "Full Stack Engineer specializing in React, Node.js, TypeScript, and cloud technologies. Building scalable web applications with modern architecture, clean code, and exceptional user experiences." },
    { name: "keywords", content: "full stack engineer, full stack developer, UI designer, React, Node.js, TypeScript, JavaScript, web development, backend development, cloud architecture, API design, database, portfolio, Ayush Yadav" },
    { name: "author", content: "Ayush Yadav" },
    { property: "og:title", content: "Ayush Yadav | Full Stack Engineer & UI/UX Designer" },
    { property: "og:description", content: "Full Stack Engineer specializing in React, Node.js, TypeScript, and cloud technologies. Building scalable web applications with modern architecture." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://ayushyadav.in" },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: "Ayush Yadav | Full Stack Engineer & UI/UX Designer" },
    { name: "twitter:description", content: "Full Stack Engineer specializing in React, Node.js, TypeScript, and cloud technologies. Building scalable web applications with modern architecture." },
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
