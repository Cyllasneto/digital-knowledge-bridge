import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { 
  Search, 
  Share2, 
  Mail, 
  TrendingUp, 
  MessageSquare, 
  Camera 
} from "lucide-react";

export const areas = [
  {
    title: "SEO",
    icon: Search,
    description: "Domine as técnicas de otimização para mecanismos de busca e aumente sua visibilidade online de forma orgânica"
  },
  {
    title: "Mídias Sociais",
    icon: Share2,
    description: "Aprenda a criar estratégias eficientes para as principais redes sociais e construa uma presença digital impactante"
  },
  {
    title: "Email Marketing",
    icon: Mail,
    description: "Desenvolva campanhas de email marketing eficazes para nutrir leads e converter clientes"
  },
  {
    title: "Marketing de Conteúdo",
    icon: MessageSquare,
    description: "Crie conteúdo relevante e estratégico que atrai, engaja e converte sua audiência"
  },
  {
    title: "Marketing de Performance",
    icon: TrendingUp,
    description: "Aprenda a criar e otimizar campanhas pagas para maximizar seu retorno sobre investimento"
  },
  {
    title: "Marketing Visual",
    icon: Camera,
    description: "Desenvolva uma identidade visual forte e crie conteúdo visual que se destaca e gera resultados"
  }
];

export const MarketingAreas = () => {
  const navigate = useNavigate();

  const handleCardClick = (title: string) => {
    const slug = title.toLowerCase().replace(/\s+/g, '-');
    navigate(`/area/${slug}`);
  };

  return (
    <section id="marketing-areas" className="py-20 bg-primary-light">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6 text-white">
          Áreas do Marketing Digital
        </h2>
        <p className="text-xl text-center mb-12 text-gray-300 max-w-3xl mx-auto">
          Explore as diferentes áreas do Marketing Digital e descubra como cada uma pode contribuir para seu sucesso profissional. 
          De iniciante a especialista, oferecemos o conhecimento necessário para você se destacar no mercado.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area) => (
            <Card 
              key={area.title} 
              className="p-6 card-hover bg-primary-dark border-none cursor-pointer"
              onClick={() => handleCardClick(area.title)}
            >
              <area.icon className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">{area.title}</h3>
              <p className="text-gray-300">{area.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};