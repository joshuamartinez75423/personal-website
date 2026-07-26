import AnimatedBackground from "@/components/AnimatedBackground";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import FeaturedProjectSection from "@/components/FeaturedProjectSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import SkillsSection from "@/components/SkillsSection";
import TopBar from "@/components/TopBar";

export default function Home() {
  return (
    <main>
      <AnimatedBackground />
      <TopBar />
      <Hero />
      <ExperienceSection />
      <FeaturedProjectSection />
      <Projects />
      <SkillsSection />
      <EducationSection />
      <Footer />
    </main>
  );
}
