import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Send, Clock, MessagesSquare } from "lucide-react";

const Contato = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
    tipo: "",
    newsletter: false,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, tipo: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, newsletter: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulando envio para API
    setTimeout(() => {
      console.log("Dados do formulário:", formData);
      
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve.",
        variant: "default",
      });
      
      // Resetar formulário
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        assunto: "",
        mensagem: "",
        tipo: "",
        newsletter: false,
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-facifit-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 h-full w-1/3 bg-facifit-100 clip-path-diagonal"></div>
          <div className="absolute bottom-0 left-0 h-12 w-full bg-gradient-to-r from-facifit-100 to-white"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Entre em Contato
              </h1>
              <p className="text-xl text-gray-600 mb-10">
                Estamos prontos para atender você e sua loja, oferecendo as melhores
                soluções em orientação técnica nutricional.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                  <Phone className="h-6 w-6 text-facifit-600 mr-3" />
                  <span className="text-gray-700">(21) 99999-9999</span>
                </div>
                <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                  <Mail className="h-6 w-6 text-facifit-600 mr-3" />
                  <span className="text-gray-700">contato@facifit.com</span>
                </div>
                <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                  <Clock className="h-6 w-6 text-facifit-600 mr-3" />
                  <span className="text-gray-700">Seg-Sex: 8h às 18h</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formulário e Informações */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Formulário de Contato */}
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Envie-nos uma mensagem</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="nome" className="text-sm font-medium text-gray-700">Nome completo</label>
                      <Input
                        id="nome"
                        name="nome"
                        placeholder="Digite seu nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="telefone" className="text-sm font-medium text-gray-700">Telefone</label>
                      <Input
                        id="telefone"
                        name="telefone"
                        placeholder="(21) 00000-0000"
                        value={formData.telefone}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="tipo" className="text-sm font-medium text-gray-700">Tipo de Atendimento</label>
                      <Select value={formData.tipo} onValueChange={handleSelectChange}>
                        <SelectTrigger id="tipo">
                          <SelectValue placeholder="Selecione o tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="loja">Consultoria para Loja</SelectItem>
                          <SelectItem value="cliente">Atendimento Individual</SelectItem>
                          <SelectItem value="treinamento">Treinamento de Equipe</SelectItem>
                          <SelectItem value="outros">Outros</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="assunto" className="text-sm font-medium text-gray-700">Assunto</label>
                    <Input
                      id="assunto"
                      name="assunto"
                      placeholder="Assunto da mensagem"
                      value={formData.assunto}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="mensagem" className="text-sm font-medium text-gray-700">Mensagem</label>
                    <Textarea
                      id="mensagem"
                      name="mensagem"
                      placeholder="Digite sua mensagem"
                      value={formData.mensagem}
                      onChange={handleChange}
                      rows={5}
                      required
                    />
                  </div>
                  
                  <div className="flex items-start">
                    <Checkbox
                      id="newsletter"
                      checked={formData.newsletter}
                      onCheckedChange={handleCheckboxChange}
                    />
                    <label
                      htmlFor="newsletter"
                      className="text-sm text-gray-500 ml-2"
                    >
                      Desejo receber a newsletter com dicas nutricionais e novidades
                    </label>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-facifit-600 hover:bg-facifit-700 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Enviando...</>
                    ) : (
                      <>
                        Enviar Mensagem
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
              
              {/* Informações de Contato e Mapa */}
              <div>
                <div className="bg-facifit-50 rounded-lg p-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-facifit-600 flex-shrink-0 mt-1" />
                      <div className="ml-4">
                        <h3 className="font-medium text-gray-900">Endereço</h3>
                        <p className="text-gray-600">Av. Duque de Caxias, 500, Duque de Caxias, RJ</p>
                        <p className="text-gray-600">CEP: 25010-000</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-facifit-600 flex-shrink-0 mt-1" />
                      <div className="ml-4">
                        <h3 className="font-medium text-gray-900">Telefones</h3>
                        <p className="text-gray-600">(21) 99999-9999 (WhatsApp)</p>
                        <p className="text-gray-600">(21) 3333-3333 (Comercial)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-facifit-600 flex-shrink-0 mt-1" />
                      <div className="ml-4">
                        <h3 className="font-medium text-gray-900">Email</h3>
                        <p className="text-gray-600">contato@facifit.com</p>
                        <p className="text-gray-600">comercial@facifit.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="h-6 w-6 text-facifit-600 flex-shrink-0 mt-1" />
                      <div className="ml-4">
                        <h3 className="font-medium text-gray-900">Horário de Atendimento</h3>
                        <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                        <p className="text-gray-600">Sábados: 9h às 13h</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-lg overflow-hidden shadow-lg h-80 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.1505307550195!2d-43.31347638503982!3d-22.79181994273075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99a1d3dc88f6f5%3A0x44c76caf48eb4089!2sAv.%20Duque%20de%20Caxias%2C%20Duque%20de%20Caxias%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1654321065432!5m2!1spt-BR!2sbr"
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    title="Mapa FaciFit"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Canais de Atendimento */}
        <section className="py-16 bg-facifit-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Canais de Atendimento</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Escolha a melhor forma de entrar em contato conosco para solicitar informações, 
                tirar dúvidas ou agendar uma consulta.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-8 text-center transition-all duration-300 hover:shadow-lg">
                <div className="w-16 h-16 bg-facifit-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-8 w-8 text-facifit-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Atendimento Telefônico</h3>
                <p className="text-gray-600 mb-6">
                  Nossa equipe está pronta para atender suas dúvidas e agendar consultas por telefone.
                </p>
                <Button className="bg-facifit-600 hover:bg-facifit-700 text-white">
                  (21) 99999-9999
                </Button>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 text-center transition-all duration-300 hover:shadow-lg">
                <div className="w-16 h-16 bg-facifit-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessagesSquare className="h-8 w-8 text-facifit-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Chat Online</h3>
                <p className="text-gray-600 mb-6">
                  Converse em tempo real com um de nossos instrutores técnicos através do chat online.
                </p>
                <Button className="bg-facifit-600 hover:bg-facifit-700 text-white">
                  Iniciar Chat
                </Button>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 text-center transition-all duration-300 hover:shadow-lg">
                <div className="w-16 h-16 bg-facifit-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-8 w-8 text-facifit-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">E-mail</h3>
                <p className="text-gray-600 mb-6">
                  Envie suas dúvidas por e-mail e receba uma resposta personalizada em até 24 horas.
                </p>
                <Button className="bg-facifit-600 hover:bg-facifit-700 text-white">
                  contato@facifit.com
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Rápido */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Algumas perguntas comuns que podem ajudar com suas dúvidas imediatas.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-facifit-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Quanto tempo leva para receber uma resposta?
                </h3>
                <p className="text-gray-600">
                  Respondemos a todas as mensagens em até 24 horas úteis. Para assuntos urgentes, 
                  recomendamos o contato por telefone ou WhatsApp.
                </p>
              </div>
              
              <div className="bg-facifit-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Como agendar uma visita técnica?
                </h3>
                <p className="text-gray-600">
                  Para agendar uma visita técnica, entre em contato por telefone ou preencha o 
                  formulário indicando suas necessidades e preferência de datas.
                </p>
              </div>
              
              <div className="bg-facifit-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Vocês atendem em todo o Brasil?
                </h3>
                <p className="text-gray-600">
                  Sim, atendemos presencialmente em Duque de Caxias e região metropolitana do Rio. Para 
                  outras localidades, oferecemos consultoria e treinamento online.
                </p>
              </div>
              
              <div className="bg-facifit-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Como funciona a consultoria online?
                </h3>
                <p className="text-gray-600">
                  A consultoria online é realizada por videoconferência, com envio prévio de 
                  material digital e seguida de relatório detalhado com as recomendações.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-facifit-600 relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-facifit-500 opacity-30"></div>
          <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-facifit-500 opacity-20"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Vamos trabalhar juntos?
              </h2>
              <p className="text-xl text-facifit-100 mb-8 max-w-3xl mx-auto">
                Estamos prontos para oferecer a melhor orientação técnica em alimentação para
                sua loja e seus clientes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-facifit-600 hover:bg-facifit-50 px-8 py-6 text-lg" asChild>
                  <Link to="/agendar">Agendar Consulta</Link>
                </Button>
                <Button className="bg-transparent border-2 border-white text-white hover:bg-facifit-500 px-8 py-6 text-lg">
                  Ver Nossos Serviços
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contato;
