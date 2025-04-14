import { useEffect } from "react";
import { useParams, useNavigate } from "@remix-run/react";
import { Nav } from "~/components/nav";
import { HeroSection } from "~/components/home/hero-section";
import { FeaturedProjects } from "~/components/home/featured-projects";
import { ExperienceSection } from "~/components/home/experience-section";
import { SkillsSection } from "~/components/home/skills-section";
import { ContactSection } from "~/components/home/contact-section";
import { CustomCursor } from "~/components/ui/custom-cursor";

export default function SectionPage() {
  const { path } = useParams();
  const navigate = useNavigate();

  // Validate path and redirect to home if invalid
  // Inside the SectionPage component, update the validPaths array
  useEffect(() => {
    const validPaths = ["hero", "projects", "experience", "skills", "contact"];
    if (!path || !validPaths.includes(path)) {
      navigate("/");
    }
  }, [path, navigate]);

  // Add the about case to your renderSection function
  const renderSection = () => {
    switch (path) {
      case "hero":
        return (
          <section
            id="hero"
            className="flex min-h-screen w-full flex-col items-center justify-center px-4"
          >
            <HeroSection />
          </section>
        );
      case "projects":
        return (
          <section id="projects">
            <FeaturedProjects />
          </section>
        );
      case "experience":
        return (
          <section id="experience">
            <ExperienceSection />
          </section>
        );
      case "skills":
        return (
          <section id="skills">
            <SkillsSection />
          </section>
        );
      case "contact":
        return (
          <section id="contact">
            <ContactSection />
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen bg-black">
      <Nav />
      <CustomCursor />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      <main className="flex min-h-screen flex-col justify-center items-center">
        {renderSection()}
      </main>
    </div>
  );
}
