import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectsSection";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <HeroSection />
      <SectionDivider />
      <About />
      <ProjectSection />
    </main>
  );
}
