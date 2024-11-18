import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MarketingAreas } from "@/components/MarketingAreas";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <MarketingAreas />
    </main>
  );
};

export default Index;