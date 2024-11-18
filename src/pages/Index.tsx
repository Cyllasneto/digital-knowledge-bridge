import { HeroSection } from "@/components/HeroSection";
import { MarketingAreas } from "@/components/MarketingAreas";
import { FeaturedCourses } from "@/components/FeaturedCourses";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <MarketingAreas />
      <FeaturedCourses />
    </main>
  );
};

export default Index;