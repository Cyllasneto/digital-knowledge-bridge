import { Card } from "@/components/ui/card";
import { 
  Search, 
  Share2, 
  Mail, 
  TrendingUp, 
  MessageSquare, 
  Camera 
} from "lucide-react";

const areas = [
  {
    title: "SEO",
    icon: Search,
    description: "Otimize seu site para os mecanismos de busca"
  },
  {
    title: "Mídias Sociais",
    icon: Share2,
    description: "Gerencie e cresça suas redes sociais"
  },
  {
    title: "Email Marketing",
    icon: Mail,
    description: "Construa relacionamentos através de emails"
  },
  {
    title: "Marketing de Conteúdo",
    icon: MessageSquare,
    description: "Crie conteúdo que engaja e converte"
  },
  {
    title: "Marketing de Performance",
    icon: TrendingUp,
    description: "Maximize seus resultados com anúncios"
  },
  {
    title: "Marketing Visual",
    icon: Camera,
    description: "Comunique sua marca visualmente"
  }
];

export const MarketingAreas = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-dark">
          Áreas do Marketing Digital
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area) => (
            <Card key={area.title} className="p-6 card-hover">
              <area.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
              <p className="text-gray-600">{area.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};