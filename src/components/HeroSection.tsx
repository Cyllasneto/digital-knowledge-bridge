import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  const scrollToMarketingAreas = () => {
    const marketingAreasSection = document.querySelector('#marketing-areas');
    marketingAreasSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-[90vh] md:min-h-[80vh] flex items-center justify-center bg-primary text-white px-4 md:px-8">
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center w-full max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 animate-fade-up leading-tight">
          Marketing Digital: Do Básico ao Avançado
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed text-gray-100">
          Descubra o poder do Marketing Digital: desde conceitos fundamentais até estratégias avançadas. 
          Aprenda como transformar conhecimento em resultados reais e construir uma carreira lucrativa nesta área em constante crescimento.
        </p>
        <Button 
          className="bg-secondary hover:bg-secondary-dark text-white text-base md:text-lg px-6 py-3 md:px-8 md:py-6 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
          onClick={scrollToMarketingAreas}
        >
          Começar Agora <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};