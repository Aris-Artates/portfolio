import { HeroSection } from "@/components/sections/HeroSection";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { SkillsShowcase } from "@/components/sections/SkillsShowcase";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { ActivityOverview } from "@/components/sections/ActivityOverview";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <SkillsShowcase />
      <FeaturedProjects />
      <ActivityOverview />
      <ContactCTA />
    </>
  );
}
