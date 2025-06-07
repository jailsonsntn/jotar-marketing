
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      company: "Boutique Fashion",
      role: "CEO",
      content: "Em apenas 3 meses, nossa loja online triplicou as vendas. A equipe é extremamente profissional e os resultados falam por si só!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b388?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "João Santos",
      company: "Clínica Dental Pro",
      role: "Diretor",
      content: "Nunca imaginei que o marketing digital pudesse ser tão eficaz. Conseguimos 150 novos pacientes em 4 meses. Recomendo!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Ana Costa",
      company: "Consultoria Financeira AC",
      role: "Sócia-Fundadora",
      content: "A consultoria estratégica foi um divisor de águas para nosso negócio. ROI de 250% em apenas 6 meses. Excelente trabalho!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Carlos Oliveira",
      company: "TechStart Solutions",
      role: "CTO",
      content: "A equipe entendeu perfeitamente nosso nicho. As campanhas de tráfego pago geraram leads de altíssima qualidade.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Luciana Ferreira",
      company: "Sabor & Arte Restaurante",
      role: "Proprietária",
      content: "O trabalho com redes sociais foi impecável. Nossas reservas aumentaram 80% e a marca ganhou muito reconhecimento.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Roberto Lima",
      company: "FitLife Academia",
      role: "Proprietário",
      content: "Superaram todas as expectativas! A campanha de matrícula trouxe mais de 200 novos alunos. Parceria de longo prazo garantida!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-marketing-green mb-6">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Depoimentos reais de empresários que transformaram seus negócios conosco
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-marketing-gray p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up border-l-4 border-l-marketing-orange"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-marketing-orange text-xl">⭐</span>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-marketing-green">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-marketing-orange font-semibold">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-gradient-to-r from-marketing-green to-marketing-orange p-8 rounded-2xl text-white animate-scale-in">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Pronto para ser o próximo case de sucesso?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Junte-se a centenas de empresas que já transformaram seus resultados
          </p>
          <button 
            className="bg-white text-marketing-green px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Quero ser o próximo case de sucesso! Vamos conversar?', '_blank')}
          >
            Quero Melhorar Meu Marketing
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
