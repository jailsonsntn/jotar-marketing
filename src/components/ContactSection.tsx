
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    interest: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.whatsapp || !formData.interest) {
      toast({
        title: "Ops! Faltam alguns dados",
        description: "Preencha todos os campos para receber sua proposta personalizada.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "🚀 Proposta enviada com sucesso!",
      description: "Nossa equipe entrará em contato em até 30 minutos. Prepare-se para decolar!",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      whatsapp: '',
      interest: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "E-mail VIP",
      info: "contato@digitalmarketing.com.br",
      action: "mailto:contato@digitalmarketing.com.br"
    },
    {
      icon: "💬",
      title: "WhatsApp Direto",
      info: "+55 (13) 98599-4965",
      action: "https://wa.me/+5513985994965"
    },
    {
      icon: "🌎",
      title: "Atendimento Global",
      info: "São Paulo, SP - Brasil",
      action: "#"
    },
    {
      icon: "⚡",
      title: "Resposta Rápida",
      info: "Atendimento em 30min",
      action: "#"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-marketing-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-marketing-green mb-6">
            Pronto Para Multiplicar Suas Vendas?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <strong className="text-marketing-orange">ÚLTIMAS 24 VAGAS DISPONÍVEIS!</strong> Solicite sua análise gratuita agora e descubra 
            como aumentar seu faturamento em até 300% nos próximos 90 dias.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="animate-slide-up shadow-xl border-2 border-marketing-orange/20">
            <CardHeader className="bg-gradient-to-r from-marketing-green to-marketing-orange text-white rounded-t-lg">
              <CardTitle className="text-2xl text-center">
                🎯 Análise Gratuita de R$ 2.500
              </CardTitle>
              <p className="text-center text-sm opacity-90">
                Descubra exatamente como multiplicar suas vendas
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Seu Nome Completo *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Como devemos te chamar?"
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Seu Melhor E-mail *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Onde te enviamos o diagnóstico?"
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    WhatsApp para Contato Direto *
                  </label>
                  <Input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    placeholder="(11) 99999-9999"
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Qual Seu Maior Desafio? *
                  </label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-marketing-orange focus:border-transparent"
                    required
                  >
                    <option value="">Selecione sua prioridade</option>
                    <option value="trafego-pago">🎯 Gerar Leads Qualificados</option>
                    <option value="social-media">📱 Vender Pelas Redes Sociais</option>
                    <option value="criativos">🎨 Criar Anúncios Que Convertem</option>
                    <option value="landing-pages">💻 Páginas Que Vendem Mais</option>
                    <option value="consultoria">📊 Estratégia Completa de Vendas</option>
                    <option value="seo">🔍 Aparecer no Google</option>
                    <option value="todos">🚀 Explodir Meu Faturamento</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Conte Mais Sobre Seu Negócio
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Qual seu faturamento atual? Quantos clientes atende por mês? Quanto quer crescer?"
                    className="w-full h-24"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-marketing-orange hover:bg-marketing-orange/90 text-white py-4 text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  🚀 QUERO MINHA ANÁLISE GRATUITA AGORA!
                </Button>
                
                <p className="text-xs text-center text-gray-500">
                  ⚡ Resposta em até 30 minutos • 🔒 Seus dados estão 100% seguros
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-marketing-green/20">
              <h3 className="text-2xl font-bold text-marketing-green mb-6">
                💬 Fale Diretamente Conosco
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-marketing-orange rounded-lg flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-marketing-green">{item.title}</h4>
                      <a 
                        href={item.action}
                        className="text-gray-600 hover:text-marketing-orange transition-colors duration-300"
                        target={item.action.startsWith('http') ? '_blank' : undefined}
                      >
                        {item.info}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-gradient-to-r from-marketing-green to-marketing-orange p-8 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-4">
                🔥 Quer Resultados HOJE Mesmo?
              </h3>
              <p className="mb-6 opacity-90">
                Clique agora e fale direto com um especialista que já faturou milhões para empresas como a sua!
              </p>
              <Button 
                className="bg-white text-marketing-green px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                onClick={() => window.open('https://wa.me/+5513985994965?text=🚀 Quero começar AGORA! Preciso multiplicar minhas vendas o mais rápido possível.', '_blank')}
              >
                💬 FALAR COM ESPECIALISTA AGORA
              </Button>
            </div>

            {/* Social Media */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-marketing-green mb-4">
                📱 Acompanhe Nossos Cases de Sucesso
              </h3>
              <div className="flex space-x-4">
                {[
                  { name: 'Instagram', icon: '📷', color: 'bg-pink-500' },
                  { name: 'LinkedIn', icon: '💼', color: 'bg-blue-600' },
                  { name: 'Facebook', icon: '👥', color: 'bg-blue-500' },
                  { name: 'YouTube', icon: '📺', color: 'bg-red-500' }
                ].map((social, index) => (
                  <button
                    key={index}
                    className={`w-12 h-12 ${social.color} rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-300`}
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
