import { AboutSection } from "@/features/about";
import { ContactSection } from "@/features/contact";
import { ExperienceSection } from "@/features/experience";
import { ProjectsSection } from "@/features/projects";
import { SkillsSection } from "@/features/skills";
import HeroSection from "./HeroSection";

export default function HomeView() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
