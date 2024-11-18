import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  const scrollToMarketingAreas = () => {
    const marketingAreasSection = document.querySelector('#marketing-areas');
    marketingAreasSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-primary text-white">
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
          Marketing Digital: Do Básico ao Avançado
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Descubra o poder do Marketing Digital: desde conceitos fundamentais até estratégias avançadas. 
          Aprenda como transformar conhecimento em resultados reais e construir uma carreira lucrativa nesta área em constante crescimento.
        </p>
        <Button 
          className="bg-secondary text-white hover:bg-secondary-dark text-lg px-8 py-6"
          onClick={scrollToMarketingAreas}
        >
          Começar Agora <ArrowRight className="ml-2" />
        </Button>
      </div>
    </div>
  );
};