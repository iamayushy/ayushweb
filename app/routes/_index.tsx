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
    { title: "Ayush Yadav | Software Engineer & Full Stack Developer" },
    { name: "description", content: "Official website of Ayush Yadav - Full Stack Engineer specializing in React, Node.js, TypeScript, and cloud technologies. Portfolio showcasing projects, experience, and skills." },
    { name: "keywords", content: "Ayush Yadav, Ayush, Yadav, software engineer, full stack developer, UI designer, React, Node.js, TypeScript, JavaScript, web development, portfolio" },
    { name: "author", content: "Ayush Yadav" },
    { property: "og:title", content: "Ayush Yadav | Software Engineer & Full Stack Developer" },
    { property: "og:description", content: "Official website of Ayush Yadav - Full Stack Engineer specializing in React, Node.js, TypeScript, and cloud technologies." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://ayushyadav.in" },
    { property: "og:site_name", content: "Ayush Yadav" },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: "Ayush Yadav | Software Engineer & Full Stack Developer" },
    { name: "twitter:description", content: "Official website of Ayush Yadav - Full Stack Engineer specializing in React, Node.js, TypeScript, and cloud technologies." },
    { name: "robots", content: "index, follow" },
    { name: "googlebot", content: "index, follow" },
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
