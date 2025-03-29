
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, ChevronRight, Apple, Utensils, BookOpen, BatteryCharging, ShoppingBag, Zap, Clock } from "lucide-react";

const Nutricao = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-facifit-600 to-facifit-700 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-facifit-500 opacity-20 clip-path-polygon"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-facifit-500 opacity-10 rounded-tr-full"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:w-1/2 md:pr-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Orientação Nutricional Especializada
                </h1>
                <p className="text-xl text-facifit-100 mb-8">
                  Oferecemos soluções nutricionais completas para a sua loja e seus clientes, 
                  com foco em alimentação saudável, equilibrada e personalizada.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-facifit-600 hover:bg-facifit-50 px-8 py-6 text-lg">
                    Conhecer Serviços
                  </Button>
                  <Button className="bg-transparent border-2 border-white text-white hover:bg-facifit-500 px-8 py-6 text-lg">
                    Falar com Especialista
                  </Button>
                </div>
              </div>
              <div className="mt-12 md:mt-0 md:w-1/2">
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-xl">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                      <div className="flex items-center justify-center mb-3">
                        <Apple className="w-8 h-8 text-facifit-200" />
                      </div>
                      <h3 className="text-lg font-semibold mb-1 text-center">Alimentação Saudável</h3>
                      <p className="text-sm text-facifit-100 text-center">Orientação personalizada</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                      <div className="flex items-center justify-center mb-3">
                        <Utensils className="w-8 h-8 text-facifit-200" />
                      </div>
                      <h3 className="text-lg font-semibold mb-1 text-center">Planos Alimentares</h3>
                      <p className="text-sm text-facifit-100 text-center">Adaptados ao seu perfil</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                      <div className="flex items-center justify-center mb-3">
                        <ShoppingBag className="w-8 h-8 text-facifit-200" />
                      </div>
                      <h3 className="text-lg font-semibold mb-1 text-center">Consultoria para Lojas</h3>
                      <p className="text-sm text-facifit-100 text-center">Orientação técnica completa</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                      <div className="flex items-center justify-center mb-3">
                        <BookOpen className="w-8 h-8 text-facifit-200" />
                      </div>
                      <h3 className="text-lg font-semibold mb-1 text-center">Educação Nutricional</h3>
                      <p className="text-sm text-facifit-100 text-center">Conhecimento que transforma</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Abordagem Nutricional */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossa Abordagem Nutricional</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Trabalhamos com uma metodologia única que combina ciência e praticidade para 
                oferecer soluções nutricionais eficientes e personalizadas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-facifit-100 hover:border-facifit-200 transition-all duration-300 hover:shadow-md">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-facifit-100 flex items-center justify-center mb-4">
                    <Utensils className="h-6 w-6 text-facifit-600" />
                  </div>
                  <CardTitle>Nutrição Personalizada</CardTitle>
                  <CardDescription>
                    Cada cliente é único, por isso desenvolvemos planos alimentares totalmente personalizados.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-facifit-600 flex-shrink-0 mr-2 mt-0.5" />
                      <span className="text-gray-700">Avaliação de necessidades individuais</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-facifit-600 flex-shrink-0 mr-2 mt-0.5" />
                      <span className="text-gray-700">Análise de objetivos específicos</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-facifit-600 flex-shrink-0 mr-2 mt-0.5" />
                      <span className="text-gray-700">Consideração de preferências alimentares</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-facifit-600 flex-shrink-0 mr-2 mt-0.5" />
                      <span className="text-gray-700">Ajustes conforme resposta individual</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-white text-facifit-600 hover:bg-facifit-50 border border-facifit-300">
                    Saiba Mais <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-facifit-100 hover:border-facifit-200 transition-all duration-300 hover:shadow-md">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-facifit-100 flex items-center justify-center mb-4">
                    <BatteryCharging className="h-6 w-6 text-facifit-600" />
                  </div>
                  <CardTitle>Nutrição Baseada em Evidências</CardTitle>
                  <CardDescription>
                    Todos os nossos protocolos nutricionais são fundamentados em estudos científicos atualizados.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-facifit-600 flex-shrink-0 mr-2 mt-0.5" />
                      <span className="text-gray-700">Protocolos baseados em pesquisas recentes</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-facifit-600 flex-shrink-0 mr-2 mt-0.5" />
                      <span className="text-gray-700">Metodologias testadas e comprovadas</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-facifit-600 flex-shrink-0 mr-2 mt-0.5" />
                      <span className="text-gray-700">Abordagem científica para resultados</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-facifit-600 flex-shrink-0 mr-2 mt-0.5" />
                      <span className="text-gray-700">Constante atualização técnica</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-white text-facifit-600 hover:bg-facifit-50 border border-facifit-300">
                    Saiba Mais <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-facifit-100 hover:border-facifit-200 transition-all duration-300 hover:shadow-md">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-facifit-100 flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-facifit-600" />
                  </div>
                  <CardTitle>Nutrição Prática e Aplicável</CardTitle>
                  <CardDescription>
                    Desenvolvemos soluções que se adaptam à rotina dos clientes, garantindo aderência e resultados.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-facifit-600 flex-shrink-0 mr-2 mt-0.5" />
                      <span className="text-gray-700">Planos alimentares adaptáveis</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-facifit-600 flex-shrink-0 mr-2 mt-0.5" />
                      <span className="text-gray-700">Opções para diferentes estilos de vida</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-facifit-600 flex-shrink-0 mr-2 mt-0.5" />
                      <span className="text-gray-700">Receitas práticas e saborosas</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-facifit-600 flex-shrink-0 mr-2 mt-0.5" />
                      <span className="text-gray-700">Estratégias para situações especiais</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-white text-facifit-600 hover:bg-facifit-50 border border-facifit-300">
                    Saiba Mais <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Programas Nutricionais */}
        <section className="py-16 bg-facifit-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Programas Nutricionais</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Oferecemos diferentes programas nutricionais para atender às necessidades específicas 
                da sua loja e dos seus clientes.
              </p>
            </div>

            <Tabs defaultValue="lojas" className="w-full">
              <TabsList className="grid grid-cols-1 md:grid-cols-3 w-full mb-8">
                <TabsTrigger value="lojas" className="text-base py-3">Para Lojas</TabsTrigger>
                <TabsTrigger value="clientes" className="text-base py-3">Para Clientes</TabsTrigger>
                <TabsTrigger value="equipes" className="text-base py-3">Para Equipes</TabsTrigger>
              </TabsList>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <TabsContent value="lojas" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="border-facifit-100">
                      <CardHeader className="bg-facifit-600 text-white rounded-t-lg">
                        <CardTitle className="text-center">Consultoria Básica</CardTitle>
                        <div className="text-center">
                          <span className="text-3xl font-bold">R$ 499</span>
                          <span className="text-sm">/mês</span>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-facifit-600 mr-2 mt-0.5" />
                            <span>Treinamento básico da equipe</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-facifit-600 mr-2 mt-0.5" />
                            <span>Orientação sobre produtos</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-facifit-600 mr-2 mt-0.5" />
                            <span>Material informativo para clientes</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-facifit-600 mr-2 mt-0.5" />
                            <span>Suporte técnico (horário comercial)</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-facifit-600 hover:bg-facifit-700 text-white">
                          Contratar Agora
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card className="border-facifit-100 relative">
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-facifit-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Mais Popular
                      </div>
                      <CardHeader className="bg-facifit-700 text-white rounded-t-lg">
                        <CardTitle className="text-center">Consultoria Premium</CardTitle>
                        <div className="text-center">
                          <span className="text-3xl font-bold">R$ 999</span>
                          <span className="text-sm">/mês</span>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-facifit-600 mr-2 mt-0.5" />
                            <span>Treinamento avançado da equipe</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-facifit-600 mr-2 mt-0.5" />
                            <span>Consultoria nutricional personalizada</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-facifit-600 mr-2 mt-0.5" />
                            <span>Material exclusivo e personalizado</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-facifit-600 mr-2 mt-0.5" />
                            <span>Suporte técnico 24/7</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-facifit-600 mr-2 mt-0.5" />
                            <span>Visitas mensais presenciais</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-facifit-600 mr-2 mt-0.5" />
                            <span>Workshops exclusivos para clientes</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-facifit-700 hover:bg-facifit-800 text-white">
                          Contratar Agora
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>
                
                <TabsContent value="clientes" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="border-facifit-100">
                      <CardHeader className="bg-facifit-600 text-white rounded-t-lg">
                        <CardTitle className="text-center">Consulta Única</CardTitle>
                        <div className="text-center">
                          <span className="text-3xl font-bold">R$ 299</span>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-facifit-600 mr-2 mt-0.5" />
                            <span>Avaliação nutricional completa</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-facifit-600 mr-2 mt-0.5" />
                            <span>Plano alimentar personalizado</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-facifit-600 mr-2 mt-0.5" />
                            <span>Recomendações de suplementação</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-facifit-600 mr-2 mt-0.5" />
                            <span>Material educativo</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-facifit-600 hover:bg-facifit-700 text-white">
                          Agendar Consulta
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card className="border-facifit-100 relative">
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-facifit-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Mais Popular
                      </div>
                      <CardHeader className="bg-facifit-700 text-white rounded-t-lg">
                        <CardTitle className="text-center">Pacote Trimestral</CardTitle>
                        <div className="text-center">
                          <span className="text-3xl font-bold">R$ 699</span>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-facifit-600 mr-2 mt-0.5" />
                            <span>Tudo da consulta única</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-facifit-600 mr-2 mt-0.5" />
                            <span>3 consultas de acompanhamento</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-facifit-600 mr-2 mt-0.5" />
                            <span>Ajustes mensais do plano alimentar</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-facifit-600 mr-2 mt-0.5" />
                            <span>Suporte via WhatsApp</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-facifit-700 hover:bg-facifit-800 text-white">
                          Agendar Consulta
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card className="border-facifit-100">
                      <CardHeader className="bg-facifit-600 text-white rounded-t-lg">
                        <CardTitle className="text-center">Pacote Anual</CardTitle>
                        <div className="text-center">
                          <span className="text-3xl font-bold">R$ 2.499</span>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-facifit-600 mr-2 mt-0.5" />
                            <span>Tudo do pacote trimestral</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-facifit-600 mr-2 mt-0.5" />
                            <span>12 consultas de acompanhamento</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-facifit-600 mr-2 mt-0.5" />
                            <span>Acesso a workshops exclusivos</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-facifit-600 mr-2 mt-0.5" />
                            <span>Desconto em exames laboratoriais</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-facifit-600 hover:bg-facifit-700 text-white">
                          Agendar Consulta
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>
                
                <TabsContent value="equipes" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="border-facifit-100">
                      <CardHeader className="bg-facifit-600 text-white rounded-t-lg">
                        <CardTitle className="text-center">Treinamento Básico</CardTitle>
                        <div className="text-center">
                          <span className="text-3xl font-bold">R$ 1.499</span>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-facifit-600 mr-2 mt-0.5" />
                            <span>Treinamento para até 5 funcionários</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-facifit-600 mr-2 mt-0.5" />
                            <span>Conhecimento básico em nutrição</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-facifit-600 mr-2 mt-0.5" />
                            <span>Orientação sobre suplementação</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-facifit-600 mr-2 mt-0.5" />
                            <span>Material de apoio completo</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-facifit-600 mr-2 mt-0.5" />
                            <span>Certificado de participação</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-facifit-600 hover:bg-facifit-700 text-white">
                          Contratar Treinamento
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card className="border-facifit-100 relative">
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-facifit-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Mais Completo
                      </div>
                      <CardHeader className="bg-facifit-700 text-white rounded-t-lg">
                        <CardTitle className="text-center">Treinamento Avançado</CardTitle>
                        <div className="text-center">
                          <span className="text-3xl font-bold">R$ 3.499</span>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-facifit-600 mr-2 mt-0.5" />
                            <span>Treinamento para até 10 funcionários</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-facifit-600 mr-2 mt-0.5" />
                            <span>Conhecimento avançado em nutrição</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-facifit-600 mr-2 mt-0.5" />
                            <span>Consultoria personalizada por perfil de cliente</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-facifit-600 mr-2 mt-0.5" />
                            <span>Treinamento em análise corporal</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-facifit-600 mr-2 mt-0.5" />
                            <span>Material exclusivo e personalizável</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-facifit-600 mr-2 mt-0.5" />
                            <span>Certificação profissional</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-facifit-600 mr-2 mt-0.5" />
                            <span>Suporte técnico por 6 meses</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-facifit-700 hover:bg-facifit-800 text-white">
                          Contratar Treinamento
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </section>

        {/* Perguntas Frequentes */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Tire suas dúvidas sobre nossos serviços de nutrição e orientação alimentar.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left font-medium">
                    Como os instrutores técnicos podem ajudar minha loja?
                  </AccordionTrigger>
                  <AccordionContent>
                    Nossos instrutores técnicos oferecem treinamento especializado para sua equipe, 
                    ajudando-os a entender melhor os produtos nutricionais que vocês vendem e como 
                    orientar os clientes de forma adequada. Além disso, eles podem auxiliar na 
                    organização dos produtos, criar materiais educativos e desenvolver estratégias 
                    para melhorar a experiência do cliente.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left font-medium">
                    Os planos alimentares são realmente personalizados?
                  </AccordionTrigger>
                  <AccordionContent>
                    Sim, todos os nossos planos alimentares são 100% personalizados. Levamos em 
                    consideração diversos fatores, como objetivos pessoais, preferências alimentares, 
                    histórico médico, rotina, necessidades calóricas e até mesmo suas preferências 
                    de sabor. Nossos nutricionistas trabalham para criar um plano que seja não apenas 
                    eficiente, mas também prazeroso e sustentável a longo prazo.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left font-medium">
                    Qual a frequência das consultas de acompanhamento?
                  </AccordionTrigger>
                  <AccordionContent>
                    A frequência das consultas de acompanhamento varia de acordo com o pacote contratado 
                    e as necessidades individuais. No pacote trimestral, geralmente realizamos consultas 
                    mensais, enquanto no pacote anual, as consultas podem ser mensais ou a cada 45 dias, 
                    dependendo do progresso e necessidades do cliente. Também oferecemos suporte contínuo 
                    via WhatsApp para dúvidas pontuais entre as consultas.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left font-medium">
                    É possível adaptar o treinamento para as necessidades específicas da minha loja?
                  </AccordionTrigger>
                  <AccordionContent>
                    Absolutamente! Na verdade, essa é uma das nossas especialidades. Antes de iniciar 
                    qualquer treinamento, realizamos uma análise detalhada da sua loja, produtos oferecidos 
                    e perfil dos clientes. Com base nessas informações, customizamos todo o conteúdo do 
                    treinamento para abordar as necessidades específicas do seu negócio e da sua equipe.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left font-medium">
                    Vocês oferecem suporte após o término do contrato?
                  </AccordionTrigger>
                  <AccordionContent>
                    Sim, oferecemos opções de suporte pós-contrato para todos os nossos clientes. 
                    Para lojas, temos pacotes de manutenção que incluem visitas periódicas, atualizações 
                    de material e suporte técnico. Para clientes individuais, oferecemos consultas avulsas 
                    de acompanhamento a preços especiais para aqueles que já foram nossos clientes. 
                    Nosso objetivo é estabelecer relacionamentos duradouros.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left font-medium">
                    Como funciona o processo de implementação na minha loja?
                  </AccordionTrigger>
                  <AccordionContent>
                    O processo de implementação segue quatro etapas principais: avaliação inicial, 
                    desenvolvimento do plano estratégico, treinamento da equipe e acompanhamento. 
                    Iniciamos com uma análise completa da sua loja, depois desenvolvemos um plano 
                    personalizado. Em seguida, realizamos o treinamento da sua equipe e, por fim, 
                    fazemos um acompanhamento regular para garantir que tudo esteja funcionando 
                    conforme o planejado e realizar ajustes quando necessário.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
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
                Pronto para transformar a experiência nutricional da sua loja?
              </h2>
              <p className="text-xl text-facifit-100 mb-8 max-w-3xl mx-auto">
                Entre em contato conosco hoje mesmo e descubra como nossos serviços de nutrição 
                podem beneficiar sua loja e seus clientes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-facifit-600 hover:bg-facifit-50 px-8 py-6 text-lg">
                  Agendar Consulta
                </Button>
                <Button className="bg-transparent border-2 border-white text-white hover:bg-facifit-500 px-8 py-6 text-lg">
                  Falar com Especialista
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

export default Nutricao;
