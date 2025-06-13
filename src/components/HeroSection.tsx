
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="inicio" className="pt-20 bg-gradient-to-br from-marketing-gray via-white to-marketing-gray min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-marketing-green leading-tight mb-6">
              Dispare suas vendas online em 
              <span className="text-marketing-orange"> 30 dias ou menos</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Descubra as estratégias secretas que fizeram nossos clientes aumentarem suas vendas em até 300%. 
              Pare de perder dinheiro com marketing que não funciona e comece a faturar hoje mesmo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-marketing-orange hover:bg-marketing-orange/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg" onClick={() => window.open('https://wa.me/+5513985994965?text=Quero DOBRAR minhas vendas! Me mostre como posso começar hoje mesmo.', '_blank')}>
                🚀 Quero Dobrar Minhas Vendas Agora
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-marketing-green text-marketing-green hover:bg-marketing-green hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300" onClick={() => document.getElementById('servicos')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Ver Como Funciona
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-marketing-orange">300%</div>
                <div className="text-sm text-gray-600">Aumento Médio</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-marketing-orange">R$ 50M+</div>
                <div className="text-sm text-gray-600">Gerados</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-marketing-orange">500+</div>
                <div className="text-sm text-gray-600">Empresas</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-marketing-orange/20 to-marketing-green/20 rounded-2xl transform rotate-3"></div>
              <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop" alt="Marketing Digital" className="relative z-10 w-full h-[400px] object-cover rounded-2xl shadow-2xl" />
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-lg shadow-lg animate-bounce">
                <div className="text-2xl">📈</div>
                <div className="text-xs font-semibold text-marketing-green">+300% ROI</div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg animate-bounce" style={{
              animationDelay: '1s'
            }}>
                <div className="text-2xl">💰</div>
                <div className="text-xs font-semibold text-marketing-orange">Vendas Garantidas</div>
              </div>

              {/* Logo overlay */}
              <div className="absolute top-4 right-4 bg-white/90 p-3 rounded-lg shadow-lg">
                <img src="/lovable-uploads/fc9645a5-0ea8-413a-aa15-5ded98d3c7ee.png" alt="Jota R Marketing" className="h-8 w-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
