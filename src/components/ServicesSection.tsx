
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      title: "Tráfego Pago Estratégico",
      description: "Campanhas no Google e Facebook que geram leads qualificados. Investimento otimizado para máximo retorno e vendas consistentes.",
      icon: "🎯",
      features: ["ROI Positivo", "Leads Qualificados", "Otimização Contínua", "Relatórios Detalhados"]
    },
    {
      title: "Gestão de Redes Sociais",
      description: "Presença profissional nas redes sociais com conteúdo que engaja e converte. Transforme seguidores em clientes reais.",
      icon: "📱",
      features: ["Conteúdo Estratégico", "Engajamento Real", "Crescimento Orgânico", "Conversões Diretas"]
    },
    {
      title: "Design e Criativos",
      description: "Materiais visuais profissionais que chamam atenção e comunicam sua mensagem de forma clara e impactante.",
      icon: "🎨",
      features: ["Design Profissional", "Identidade Visual", "Materiais de Vendas", "Alta Qualidade"]
    },
    {
      title: "Sites e Landing Pages",
      description: "Páginas otimizadas para conversão que transformam visitantes em clientes. Design responsivo e carregamento rápido.",
      icon: "💻",
      features: ["Alta Conversão", "Design Responsivo", "Carregamento Rápido", "SEO Otimizado"]
    },
    {
      title: "Consultoria em Marketing",
      description: "Análise completa do seu negócio e estratégia personalizada para acelerar seus resultados de forma sustentável.",
      icon: "📊",
      features: ["Estratégia Personalizada", "Análise Completa", "Acompanhamento", "Resultados Medidos"]
    },
    {
      title: "SEO e Conteúdo",
      description: "Posicionamento no Google através de conteúdo relevante e otimização técnica. Mais visibilidade e tráfego orgânico.",
      icon: "🔍",
      features: ["Posicionamento Google", "Tráfego Orgânico", "Conteúdo Relevante", "Autoridade Digital"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-marketing-green mb-6">
            Como Ajudamos Seu Negócio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas de marketing digital para empresas que querem crescer de forma consistente e sustentável.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-l-marketing-orange animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-marketing-green group-hover:text-marketing-orange transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-marketing-orange rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full bg-marketing-green hover:bg-marketing-green/90 text-white transition-all duration-300"
                  onClick={() => window.open('https://wa.me/+5513985994965?text=Quero saber mais sobre ' + service.title + ' para meu negócio', '_blank')}
                >
                  💬 Saber Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Differentials */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="text-center animate-scale-in">
            <div className="w-16 h-16 bg-marketing-orange rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">⭐</span>
            </div>
            <h3 className="text-xl font-bold text-marketing-green mb-2">Experiência Comprovada</h3>
            <p className="text-gray-600">Mais de 5 anos ajudando empresas a crescerem online</p>
          </div>
          
          <div className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-marketing-orange rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-bold text-marketing-green mb-2">Resultados Consistentes</h3>
            <p className="text-gray-600">Estratégias testadas que realmente funcionam</p>
          </div>
          
          <div className="text-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <div className="w-16 h-16 bg-marketing-orange rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🛡️</span>
            </div>
            <h3 className="text-xl font-bold text-marketing-green mb-2">Suporte Completo</h3>
            <p className="text-gray-600">Acompanhamento próximo durante todo o processo</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
