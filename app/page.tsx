import About from "@/components/About";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectsSection";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/SkillsSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <HeroSection />
      <SectionDivider />
      <About />
      <ProjectSection />
      <Skills />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}
