
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      title: "Tráfego Pago Que Converte",
      description: "Campanhas que geram lucro desde o primeiro dia. Pare de queimar dinheiro em anúncios que não vendem e comece a faturar com estratégias comprovadas.",
      icon: "🎯",
      features: ["ROI Garantido de 3:1", "Leads Qualificados Diários", "Campanhas Lucrativas", "Suporte 24/7"]
    },
    {
      title: "Social Media Que Vende",
      description: "Transforme suas redes sociais em máquinas de vendas automáticas. Conteúdo estratégico que converte seguidores em clientes pagantes.",
      icon: "📱",
      features: ["Conteúdo Viral", "Engajamento Real", "Vendas Diretas", "Crescimento Orgânico"]
    },
    {
      title: "Criativos Irresistíveis",
      description: "Designs que hipnotizam e vendem. Criatividade estratégica que faz seus clientes clicarem, comprarem e recomendarem.",
      icon: "🎨",
      features: ["Design Persuasivo", "Alta Conversão", "Identidade Marcante", "Impacto Visual"]
    },
    {
      title: "Landing Pages Que Convertem",
      description: "Páginas de vendas com taxa de conversão acima de 15%. Cada elemento otimizado para transformar visitantes em compradores.",
      icon: "💻",
      features: ["Conversão +15%", "Mobile Otimizado", "Carregamento Rápido", "Psicologia da Venda"]
    },
    {
      title: "Consultoria Estratégica Exclusiva",
      description: "Acesso direto ao nosso time de especialistas. Estratégias personalizadas que multiplicam seu faturamento em tempo recorde.",
      icon: "📊",
      features: ["Plano Personalizado", "Mentoria VIP", "Resultados Rápidos", "Acompanhamento Total"]
    },
    {
      title: "SEO Que Domina o Google",
      description: "Posicionamento no topo do Google em 90 dias. Milhares de clientes te encontrando organicamente todos os meses.",
      icon: "🔍",
      features: ["Top 3 Garantido", "Tráfego Orgânico", "Autoridade Digital", "Leads Gratuitos"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-marketing-green mb-6">
            Como Multiplicamos Seu Faturamento
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Métodos comprovados que já geraram milhões em vendas para empresas como a sua. 
            <strong className="text-marketing-orange"> Resultados garantidos ou seu dinheiro de volta.</strong>
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
                  onClick={() => window.open('https://wa.me/+5513985994965?text=Quero saber mais sobre ' + service.title + ' e como posso começar hoje!', '_blank')}
                >
                  💬 Quero Começar Agora
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
            <h3 className="text-xl font-bold text-marketing-green mb-2">Resultados Comprovados</h3>
            <p className="text-gray-600">Mais de R$ 50 milhões gerados para nossos clientes em 5 anos</p>
          </div>
          
          <div className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-marketing-orange rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-bold text-marketing-green mb-2">Crescimento Acelerado</h3>
            <p className="text-gray-600">Aumento médio de 300% no faturamento em 90 dias</p>
          </div>
          
          <div className="text-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <div className="w-16 h-16 bg-marketing-orange rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🛡️</span>
            </div>
            <h3 className="text-xl font-bold text-marketing-green mb-2">Garantia Total</h3>
            <p className="text-gray-600">30 dias de garantia ou devolvemos 100% do seu investimento</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
