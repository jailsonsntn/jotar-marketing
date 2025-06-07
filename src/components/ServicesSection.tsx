
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      title: "Tráfego Pago",
      description: "Campanhas otimizadas no Google Ads, Facebook Ads e Instagram Ads para maximizar seu ROI e gerar leads qualificados.",
      icon: "🎯",
      features: ["Google Ads", "Facebook & Instagram Ads", "Otimização de Conversão", "Relatórios Detalhados"]
    },
    {
      title: "Social Media",
      description: "Gestão completa das suas redes sociais com conteúdo estratégico que engaja e converte seguidores em clientes.",
      icon: "📱",
      features: ["Gestão de Redes", "Criação de Conteúdo", "Planejamento Editorial", "Monitoramento"]
    },
    {
      title: "Criativos",
      description: "Design profissional que comunica sua marca de forma impactante e converte visitantes em clientes.",
      icon: "🎨",
      features: ["Design Gráfico", "Banners Publicitários", "Identidade Visual", "Material Promocional"]
    },
    {
      title: "Landing Pages",
      description: "Páginas de alta conversão otimizadas para capturar leads e maximizar suas vendas online.",
      icon: "💻",
      features: ["Design Responsivo", "Otimização CRO", "Integração Analytics", "Testes A/B"]
    },
    {
      title: "Consultoria Estratégica",
      description: "Análise completa do seu negócio e estratégias personalizadas para acelerar seu crescimento digital.",
      icon: "📊",
      features: ["Análise de Mercado", "Planejamento Estratégico", "Auditoria Digital", "Mentoria"]
    },
    {
      title: "SEO & Conteúdo",
      description: "Posicione sua empresa no topo do Google com estratégias de SEO e marketing de conteúdo eficazes.",
      icon: "🔍",
      features: ["Otimização SEO", "Marketing de Conteúdo", "Link Building", "Análise de Palavras-chave"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-marketing-green mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas de marketing digital para fazer sua empresa crescer e se destacar no mercado
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
                  onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Tenho interesse no serviço de ' + service.title + '. Gostaria de mais informações.', '_blank')}
                >
                  Saiba Mais
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
            <p className="text-gray-600">Mais de 5 anos no mercado com centenas de projetos bem-sucedidos</p>
          </div>
          
          <div className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-marketing-orange rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">📈</span>
            </div>
            <h3 className="text-xl font-bold text-marketing-green mb-2">Resultados Mensuráveis</h3>
            <p className="text-gray-600">Estratégias baseadas em dados com relatórios transparentes</p>
          </div>
          
          <div className="text-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <div className="w-16 h-16 bg-marketing-orange rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🤝</span>
            </div>
            <h3 className="text-xl font-bold text-marketing-green mb-2">Atendimento Personalizado</h3>
            <p className="text-gray-600">Cada cliente é único e merece uma estratégia exclusiva</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
