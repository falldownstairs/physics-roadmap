import HeroSection from "@/components/frontPage/HeroSection";
import StatsSection from "@/components/frontPage/StatsSection";
import AboutSection from "@/components/frontPage/AboutSection";
import FeaturesSection from "@/components/frontPage/FeaturesSection";

export default function HomePage() {
  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-white relative">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <FeaturesSection />
    </div>
  );
}
