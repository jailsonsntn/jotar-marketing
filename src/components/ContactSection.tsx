
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
        title: "Erro no formulário",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Obrigado!",
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
      title: "E-mail",
      info: "contato@digitalmarketing.com.br",
      action: "mailto:contato@digitalmarketing.com.br"
    },
    {
      icon: "📱",
      title: "WhatsApp",
      info: "+55 (13) 98599-4965",
      action: "https://wa.me/+5513985994965"
    },
    {
      icon: "📍",
      title: "Localização",
      info: "São Paulo, SP - Brasil",
      action: "#"
    },
    {
      icon: "⏰",
      title: "Horário",
      info: "Seg à Sex: 9h às 18h",
      action: "#"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-marketing-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-marketing-green mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pronto para transformar seu negócio? Vamos conversar e criar uma estratégia personalizada para você
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="animate-slide-up shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-marketing-green text-center">
                Solicite uma Proposta
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Seu nome completo"
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    WhatsApp *
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
                    Interesse *
                  </label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-marketing-orange focus:border-transparent"
                    required
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="trafego-pago">Tráfego Pago</option>
                    <option value="social-media">Social Media</option>
                    <option value="criativos">Criativos</option>
                    <option value="landing-pages">Landing Pages</option>
                    <option value="consultoria">Consultoria Estratégica</option>
                    <option value="seo">SEO & Conteúdo</option>
                    <option value="todos">Todos os Serviços</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensagem (Opcional)
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Conte-nos mais sobre seu projeto..."
                    className="w-full h-24"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-marketing-orange hover:bg-marketing-orange/90 text-white py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Enviar Solicitação
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-marketing-green mb-6">
                Informações de Contato
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
                Prefere falar por WhatsApp?
              </h3>
              <p className="mb-6 opacity-90">
                Clique no botão abaixo e fale diretamente com um especialista agora mesmo!
              </p>
              <Button 
                className="bg-white text-marketing-green px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open('https://wa.me/+5513985994965?text=Olá! Vim através do site e gostaria de falar com um especialista.', '_blank')}
              >
                Falar com Especialista
              </Button>
            </div>

            {/* Social Media */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-marketing-green mb-4">
                Siga-nos nas Redes Sociais
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
