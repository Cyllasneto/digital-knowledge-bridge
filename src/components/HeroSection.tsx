import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-primary text-white">
      <div className="absolute inset-0 bg-black/30" />
      <div className="container relative z-10 mx-auto px-4 text-center animate-fade-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Domine o Marketing Digital
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Aprenda as estratégias mais eficazes para crescer sua presença online e aumentar seus resultados
        </p>
        <Button className="bg-secondary text-white hover:bg-secondary-dark text-lg px-8 py-6">
          Começar Agora <ArrowRight className="ml-2" />
        </Button>
      </div>
    </div>
  );
};