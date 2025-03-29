
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Award, Medal, Clock, UserCheck, BookOpen, Dumbbell, Heart } from "lucide-react";

const instrutores = [
  {
    id: 1,
    nome: "Dra. Ana Silva",
    cargo: "Nutricionista Chefe",
    especialidade: "Nutrição Esportiva",
    descricao: "Especialista em nutrição esportiva com mais de 10 anos de experiência orientando atletas e pessoas que buscam uma alimentação balanceada para melhorar o desempenho físico.",
    imagem: "https://randomuser.me/api/portraits/women/44.jpg",
    habilidades: ["Dietas esportivas", "Suplementação", "Nutrição clínica", "Reabilitação nutricional"],
    experiencia: "12 anos",
    formacao: "Doutorado em Nutrição Funcional"
  },
  {
    id: 2,
    nome: "Dr. Carlos Mendes",
    cargo: "Instrutor Técnico",
    especialidade: "Suplementação",
    descricao: "Especialista em suplementação e alimentação funcional para atletas e praticantes de atividades físicas intensas. Desenvolve protocolos personalizados.",
    imagem: "https://randomuser.me/api/portraits/men/32.jpg",
    habilidades: ["Suplementação avançada", "Periodização nutricional", "Composição corporal", "Nutrição funcional"],
    experiencia: "8 anos",
    formacao: "Mestrado em Bioquímica Nutricional"
  },
  {
    id: 3,
    nome: "Fernanda Oliveira",
    cargo: "Consultora Nutricional",
    especialidade: "Reeducação Alimentar",
    descricao: "Especialista em reeducação alimentar e dietas personalizadas para diferentes objetivos. Ajuda clientes a desenvolverem uma relação saudável com a comida.",
    imagem: "https://randomuser.me/api/portraits/women/68.jpg",
    habilidades: ["Reeducação alimentar", "Emagrecimento", "Alimentação intuitiva", "Intolerâncias alimentares"],
    experiencia: "7 anos",
    formacao: "Especialização em Comportamento Alimentar"
  },
  {
    id: 4,
    nome: "Ricardo Almeida",
    cargo: "Nutricionista Esportivo",
    especialidade: "Hipertrofia",
    descricao: "Especializado em nutrição para hipertrofia muscular e ganho de massa magra. Trabalha com atletas de alto rendimento e praticantes de musculação.",
    imagem: "https://randomuser.me/api/portraits/men/76.jpg",
    habilidades: ["Ganho de massa muscular", "Cutting", "Periodização nutricional", "Suplementação específica"],
    experiencia: "9 anos",
    formacao: "Especialização em Nutrição Esportiva"
  }
];

const Instrutores = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
       
        <section className="bg-gradient-to-br from-facifit-50 to-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Nossa Equipe de Especialistas
              </h1>
              <p className="text-xl text-gray-600 mb-10">
                Conheça os instrutores técnicos e nutricionistas que irão transformar 
                a alimentação da sua loja e de seus clientes.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button className="bg-facifit-600 hover:bg-facifit-700 text-white px-6 py-3 text-lg">
                  Agendar Consulta
                </Button>
                <Button className="bg-white text-facifit-600 hover:bg-facifit-50 border-2 border-facifit-600 px-6 py-3 text-lg">
                  Ver Especialidades
                </Button>
              </div>
            </div>
          </div>
        </section>

      
        <section className="py-16 bg-facifit-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <p className="text-4xl font-bold text-white mb-2">10+</p>
                <p className="text-facifit-100">Anos de Experiência</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <p className="text-4xl font-bold text-white mb-2">500+</p>
                <p className="text-facifit-100">Clientes Satisfeitos</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <p className="text-4xl font-bold text-white mb-2">30+</p>
                <p className="text-facifit-100">Instrutores Qualificados</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <p className="text-4xl font-bold text-white mb-2">95%</p>
                <p className="text-facifit-100">Taxa de Satisfação</p>
              </div>
            </div>
          </div>
        </section>

       
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Conheça Nossos Especialistas</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Nossa equipe é formada por profissionais altamente qualificados e com vasta experiência 
                em nutrição e alimentação técnica.
              </p>
            </div>

            {instrutores.map((instrutor) => (
              <div key={instrutor.id} className="mb-20">
                <div className="bg-facifit-50 rounded-xl p-8 md:p-0 overflow-hidden shadow-lg mb-8">
                  <div className="md:flex">
                    <div className="md:flex-shrink-0 md:w-1/3">
                      <div className="h-64 md:h-full w-full overflow-hidden relative">
                        <img 
                          src={instrutor.imagem} 
                          alt={instrutor.nome}
                          className="w-full h-full object-cover object-center" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:bg-none"></div>
                      </div>
                    </div>
                    <div className="p-6 md:p-8 md:w-2/3">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{instrutor.nome}</h3>
                          <p className="text-facifit-600 font-medium mb-2">{instrutor.cargo}</p>
                        </div>
                        <div className="flex items-center mt-2 md:mt-0">
                          <Clock className="h-5 w-5 text-facifit-600 mr-1" />
                          <span className="text-gray-700">{instrutor.experiencia} de experiência</span>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <div className="flex items-center mb-2">
                          <BookOpen className="h-5 w-5 text-facifit-600 mr-2" />
                          <span className="font-medium">Especialidade:</span>
                          <span className="ml-2 text-gray-700">{instrutor.especialidade}</span>
                        </div>
                        <div className="flex items-center">
                          <Award className="h-5 w-5 text-facifit-600 mr-2" />
                          <span className="font-medium">Formação:</span>
                          <span className="ml-2 text-gray-700">{instrutor.formacao}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-6">{instrutor.descricao}</p>
                      
                      <div>
                        <p className="font-medium mb-2">Habilidades:</p>
                        <div className="flex flex-wrap gap-2">
                          {instrutor.habilidades.map((habilidade, index) => (
                            <span 
                              key={index} 
                              className="bg-facifit-100 text-facifit-700 px-3 py-1 rounded-full text-sm"
                            >
                              {habilidade}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <Button className="bg-facifit-600 hover:bg-facifit-700 text-white">
                    Agendar Consulta
                  </Button>
                  <Button className="bg-white text-facifit-600 hover:bg-facifit-50 border border-facifit-600">
                    Ver Detalhes Completos
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

       
        <section className="py-16 bg-facifit-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossa Metodologia de Trabalho</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Conheça como nossos instrutores técnicos trabalham para oferecer o melhor serviço 
                para sua loja e seus clientes.
              </p>
            </div>

            <Tabs defaultValue="avaliacao" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full mb-8">
                <TabsTrigger value="avaliacao" className="text-base py-3">Avaliação</TabsTrigger>
                <TabsTrigger value="planejamento" className="text-base py-3">Planejamento</TabsTrigger>
                <TabsTrigger value="implementacao" className="text-base py-3">Implementação</TabsTrigger>
                <TabsTrigger value="acompanhamento" className="text-base py-3">Acompanhamento</TabsTrigger>
              </TabsList>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <TabsContent value="avaliacao" className="mt-0">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Avaliação Completa</h3>
                      <p className="text-gray-600 mb-4">
                        Na primeira etapa, realizamos uma avaliação completa da sua loja, dos produtos oferecidos
                        e do perfil dos seus clientes. Esta análise nos permite entender as necessidades específicas
                        e criar um plano personalizado.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <UserCheck className="h-5 w-5 text-facifit-600 mr-3 mt-0.5" />
                          <span>Análise do perfil de clientes</span>
                        </li>
                        <li className="flex items-start">
                          <UserCheck className="h-5 w-5 text-facifit-600 mr-3 mt-0.5" />
                          <span>Avaliação de produtos disponíveis</span>
                        </li>
                        <li className="flex items-start">
                          <UserCheck className="h-5 w-5 text-facifit-600 mr-3 mt-0.5" />
                          <span>Identificação de necessidades específicas</span>
                        </li>
                        <li className="flex items-start">
                          <UserCheck className="h-5 w-5 text-facifit-600 mr-3 mt-0.5" />
                          <span>Diagnóstico de pontos de melhoria</span>
                        </li>
                      </ul>
                    </div>
                    <div className="md:w-1/2 rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350"
                        alt="Avaliação nutricional" 
                        className="w-full h-auto object-cover rounded-lg shadow-md" 
                      />
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="planejamento" className="mt-0">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Planejamento Estratégico</h3>
                      <p className="text-gray-600 mb-4">
                        Desenvolvemos um plano estratégico completo, incluindo treinamento da equipe, 
                        recomendações de produtos e orientações técnicas para melhor atender seus clientes.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <UserCheck className="h-5 w-5 text-facifit-600 mr-3 mt-0.5" />
                          <span>Criação de planos alimentares personalizados</span>
                        </li>
                        <li className="flex items-start">
                          <UserCheck className="h-5 w-5 text-facifit-600 mr-3 mt-0.5" />
                          <span>Seleção de produtos recomendados</span>
                        </li>
                        <li className="flex items-start">
                          <UserCheck className="h-5 w-5 text-facifit-600 mr-3 mt-0.5" />
                          <span>Desenvolvimento de material educativo</span>
                        </li>
                        <li className="flex items-start">
                          <UserCheck className="h-5 w-5 text-facifit-600 mr-3 mt-0.5" />
                          <span>Planejamento de treinamentos</span>
                        </li>
                      </ul>
                    </div>
                    <div className="md:w-1/2 rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350"
                        alt="Planejamento estratégico" 
                        className="w-full h-auto object-cover rounded-lg shadow-md" 
                      />
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="implementacao" className="mt-0">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Implementação Assistida</h3>
                      <p className="text-gray-600 mb-4">
                        Nossos instrutores técnicos acompanham a implementação das recomendações,
                        garantindo que sua equipe esteja preparada para orientar os clientes corretamente.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <UserCheck className="h-5 w-5 text-facifit-600 mr-3 mt-0.5" />
                          <span>Treinamento da equipe de vendas</span>
                        </li>
                        <li className="flex items-start">
                          <UserCheck className="h-5 w-5 text-facifit-600 mr-3 mt-0.5" />
                          <span>Organização de produtos por objetivos</span>
                        </li>
                        <li className="flex items-start">
                          <UserCheck className="h-5 w-5 text-facifit-600 mr-3 mt-0.5" />
                          <span>Criação de protocolos de atendimento</span>
                        </li>
                        <li className="flex items-start">
                          <UserCheck className="h-5 w-5 text-facifit-600 mr-3 mt-0.5" />
                          <span>Suporte presencial durante a transição</span>
                        </li>
                      </ul>
                    </div>
                    <div className="md:w-1/2 rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350"
                        alt="Implementação assistida" 
                        className="w-full h-auto object-cover rounded-lg shadow-md" 
                      />
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="acompanhamento" className="mt-0">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Acompanhamento Contínuo</h3>
                      <p className="text-gray-600 mb-4">
                        Oferecemos acompanhamento contínuo para garantir resultados duradouros.
                        Nossos especialistas estão sempre disponíveis para ajustar as recomendações
                        conforme necessário.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <UserCheck className="h-5 w-5 text-facifit-600 mr-3 mt-0.5" />
                          <span>Consultas de acompanhamento mensais</span>
                        </li>
                        <li className="flex items-start">
                          <UserCheck className="h-5 w-5 text-facifit-600 mr-3 mt-0.5" />
                          <span>Análise de resultados e ajustes</span>
                        </li>
                        <li className="flex items-start">
                          <UserCheck className="h-5 w-5 text-facifit-600 mr-3 mt-0.5" />
                          <span>Atualização sobre novos produtos e tendências</span>
                        </li>
                        <li className="flex items-start">
                          <UserCheck className="h-5 w-5 text-facifit-600 mr-3 mt-0.5" />
                          <span>Suporte técnico contínuo</span>
                        </li>
                      </ul>
                    </div>
                    <div className="md:w-1/2 rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350"
                        alt="Acompanhamento contínuo" 
                        className="w-full h-auto object-cover rounded-lg shadow-md" 
                      />
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </section>

       
        <section className="py-16 bg-facifit-600 relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-facifit-500 opacity-30"></div>
          <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-facifit-500 opacity-20"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Pronto para trabalhar com nossos instrutores?
              </h2>
              <p className="text-xl text-facifit-100 mb-8 max-w-3xl mx-auto">
                Agende uma consulta gratuita com nossos especialistas e descubra como podemos 
                transformar a experiência alimentar da sua loja.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-facifit-600 hover:bg-facifit-50 px-8 py-6 text-lg">
                  Agendar Consulta
                </Button>
                <Button className="bg-transparent border-2 border-white text-white hover:bg-facifit-500 px-8 py-6 text-lg">
                  Conhecer Planos
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

export default Instrutores;
