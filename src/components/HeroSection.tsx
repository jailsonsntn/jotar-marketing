
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="inicio" className="pt-20 bg-gradient-to-br from-marketing-gray via-white to-marketing-gray min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-marketing-green leading-tight mb-6">
              Transforme sua empresa em uma
              <span className="text-marketing-orange"> máquina de vendas</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Estratégias comprovadas de marketing digital que geram resultados reais. 
              Mais tráfego, mais leads e mais vendas para o seu negócio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg"
                className="bg-marketing-orange hover:bg-marketing-orange/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Quero solicitar uma cotação para melhorar meu marketing digital.', '_blank')}
              >
                Solicite uma Cotação no WhatsApp
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-marketing-green text-marketing-green hover:bg-marketing-green hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
                onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Conhecer Serviços
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-marketing-orange">500+</div>
                <div className="text-sm text-gray-600">Projetos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-marketing-orange">98%</div>
                <div className="text-sm text-gray-600">Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-marketing-orange">5 Anos</div>
                <div className="text-sm text-gray-600">Experiência</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-marketing-orange/20 to-marketing-green/20 rounded-2xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
                alt="Marketing Digital"
                className="relative z-10 w-full h-[400px] object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-lg shadow-lg animate-bounce">
                <div className="text-2xl">📈</div>
                <div className="text-xs font-semibold text-marketing-green">+150% ROI</div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg animate-bounce" style={{ animationDelay: '1s' }}>
                <div className="text-2xl">🎯</div>
                <div className="text-xs font-semibold text-marketing-orange">Leads Qualificados</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
