import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { areas } from "@/components/MarketingAreas";

const MarketingAreaDetails = () => {
  const { area } = useParams();
  const navigate = useNavigate();
  
  const areaDetails = areas.find((a) => a.title.toLowerCase().replace(/\s+/g, '-') === area);

  if (!areaDetails) {
    return <div>Área não encontrada</div>;
  }

  return (
    <div className="min-h-screen bg-primary p-8">
      <div className="max-w-4xl mx-auto">
        <Button
          onClick={() => navigate('/')}
          variant="secondary"
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Home
        </Button>

        <div className="bg-primary-dark rounded-lg p-8 text-white">
          <div className="flex items-center gap-4 mb-6">
            <areaDetails.icon className="w-16 h-16 text-secondary" />
            <h1 className="text-4xl font-bold">{areaDetails.title}</h1>
          </div>
          
          <p className="text-gray-300 text-lg mb-6">{areaDetails.description}</p>
          
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-secondary">O que é?</h2>
              <p className="text-gray-300">
                {getAreaDescription(areaDetails.title)}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

const getAreaDescription = (title: string) => {
  const descriptions: Record<string, string> = {
    "SEO": "Search Engine Optimization (SEO) é um conjunto de técnicas e estratégias que visam melhorar o posicionamento de um site nos resultados orgânicos dos mecanismos de busca. Através de otimizações técnicas, criação de conteúdo relevante e construção de autoridade, o SEO ajuda a aumentar a visibilidade online e atrair mais visitantes qualificados.",
    "Mídias Sociais": "O Marketing em Mídias Sociais envolve a criação e compartilhamento de conteúdo nas redes sociais para atingir objetivos de marketing e branding. Através de estratégias específicas para cada plataforma, é possível construir relacionamentos com o público, aumentar o engajamento e gerar resultados para o negócio.",
    "Email Marketing": "Email Marketing é uma estratégia que utiliza o envio de emails para comunicar com clientes e prospects. Através de newsletters, campanhas promocionais e emails automatizados, é possível nutrir leads, fidelizar clientes e aumentar as vendas de forma personalizada e mensurável.",
    "Marketing de Conteúdo": "O Marketing de Conteúdo é uma abordagem estratégica focada na criação e distribuição de conteúdo valioso e relevante para atrair e reter um público-alvo definido. Através de blog posts, vídeos, podcasts e outros formatos, busca-se estabelecer autoridade e gerar resultados de longo prazo.",
    "Marketing de Performance": "Marketing de Performance é focado em resultados mensuráveis e otimização constante das campanhas. Através de anúncios pagos em diferentes plataformas, é possível gerar tráfego qualificado, leads e vendas com investimento controlado e ROI mensurável.",
    "Marketing Visual": "O Marketing Visual utiliza elementos visuais para comunicar a mensagem da marca de forma efetiva. Através de design, fotografia, vídeos e identidade visual consistente, busca-se criar uma conexão emocional com o público e fortalecer o reconhecimento da marca."
  };
  
  return descriptions[title] || "Descrição em breve.";
};

export default MarketingAreaDetails;