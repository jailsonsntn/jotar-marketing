
const PortfolioSection = () => {
  const projects = [
    {
      title: "E-commerce de Moda",
      category: "Tráfego Pago + Social Media",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      results: "+300% em vendas online",
      description: "Campanha integrada que triplicou as vendas em 6 meses"
    },
    {
      title: "Clínica Odontológica",
      category: "Landing Page + SEO",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop",
      results: "+150 novos pacientes",
      description: "Estratégia digital que gerou 150 novos pacientes em 4 meses"
    },
    {
      title: "Consultoria Financeira",
      category: "Consultoria Estratégica",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      results: "+250% ROI",
      description: "Reestruturação completa da presença digital"
    },
    {
      title: "Startup de Tecnologia",
      category: "Branding + Social Media",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      results: "1M+ impressões",
      description: "Construção de marca e awareness no mercado tech"
    },
    {
      title: "Restaurante Gourmet",
      category: "Social Media + Criativos",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
      results: "+80% reservas",
      description: "Crescimento orgânico através de conteúdo visual impactante"
    },
    {
      title: "Academia Fitness",
      category: "Tráfego Pago + Landing Page",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      results: "+200 matrículas",
      description: "Campanha de matrícula que superou todas as expectativas"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-marketing-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-marketing-green mb-6">
            Nosso Portfólio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça alguns dos projetos que transformaram negócios e geraram resultados extraordinários
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-marketing-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-marketing-green mb-2 group-hover:text-marketing-orange transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-marketing-orange font-bold text-lg">
                    {project.results}
                  </div>
                  <button className="text-marketing-green hover:text-marketing-orange transition-colors duration-300 font-semibold">
                    Ver Detalhes →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            className="bg-marketing-orange hover:bg-marketing-orange/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de ver mais projetos do portfólio de vocês.', '_blank')}
          >
            Ver Mais Projetos
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
