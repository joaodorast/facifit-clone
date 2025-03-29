
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { CheckCircle, CalendarDays, Clock, User, CreditCard, AlertCircle } from "lucide-react";

// Definindo o esquema de validação para o formulário
const bookingFormSchema = z.object({
  nome: z.string().min(3, {
    message: "O nome deve ter pelo menos 3 caracteres.",
  }),
  email: z.string().email({
    message: "E-mail inválido.",
  }),
  telefone: z.string().min(10, {
    message: "Telefone inválido.",
  }),
  tipo: z.string({
    required_error: "Selecione o tipo de consulta.",
  }),
  observacoes: z.string().optional(),
  // Campos de pagamento
  cartao: z.object({
    numero: z.string().regex(/^\d{16}$/, {
      message: "O número do cartão deve conter 16 dígitos.",
    }),
    nome: z.string().min(3, {
      message: "O nome no cartão deve ter pelo menos 3 caracteres.",
    }),
    validade: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, {
      message: "Validade deve estar no formato MM/AA.",
    }),
    cvv: z.string().regex(/^\d{3,4}$/, {
      message: "CVV inválido.",
    }),
  }),
});

type BookingFormValues = z.infer<typeof bookingFormSchema>;

const tiposConsulta = [
  {
    id: "avaliacao",
    titulo: "Avaliação Nutricional",
    descricao: "Análise completa do seu perfil alimentar e físico.",
    preco: 150,
    duracao: "60 minutos",
  },
  {
    id: "plano",
    titulo: "Plano Alimentar",
    descricao: "Desenvolvimento de um plano alimentar personalizado.",
    preco: 250,
    duracao: "90 minutos",
  },
  {
    id: "acompanhamento",
    titulo: "Acompanhamento Mensal",
    descricao: "Consultas regulares para ajustes e acompanhamento.",
    preco: 120,
    duracao: "45 minutos",
  },
  {
    id: "treinamento",
    titulo: "Treinamento para Equipe",
    descricao: "Capacitação para equipe de sua loja.",
    preco: 350,
    duracao: "120 minutos",
  },
];

const horariosDisponiveis = [
  "08:00", "09:00", "10:00", "11:00", 
  "13:00", "14:00", "15:00", "16:00", "17:00"
];

// Componente principal da página
const Agendar = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [horario, setHorario] = useState<string | undefined>(undefined);
  const [tipoSelecionado, setTipoSelecionado] = useState(tiposConsulta[0]);
  const [etapaAtual, setEtapaAtual] = useState("data");
  const [processandoPagamento, setProcessandoPagamento] = useState(false);
  const [pagamentoConfirmado, setPagamentoConfirmado] = useState(false);
  
  // Configuração do formulário
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      tipo: tiposConsulta[0].id,
      observacoes: "",
      cartao: {
        numero: "",
        nome: "",
        validade: "",
        cvv: "",
      },
    },
  });
  
  // Função para avançar para a próxima etapa
  const avancarEtapa = () => {
    if (etapaAtual === "data") {
      if (!date || !horario) {
        toast({
          title: "Erro",
          description: "Selecione uma data e horário para a consulta.",
          variant: "destructive",
        });
        return;
      }
      setEtapaAtual("tipo");
    } else if (etapaAtual === "tipo") {
      setEtapaAtual("dados");
    }
  };
  
  // Função para voltar para a etapa anterior
  const voltarEtapa = () => {
    if (etapaAtual === "tipo") {
      setEtapaAtual("data");
    } else if (etapaAtual === "dados") {
      setEtapaAtual("tipo");
    } else if (etapaAtual === "pagamento") {
      setEtapaAtual("dados");
    }
  };
  
  // Função para selecionar o tipo de consulta
  const selecionarTipo = (id: string) => {
    const tipo = tiposConsulta.find(tipo => tipo.id === id);
    if (tipo) {
      setTipoSelecionado(tipo);
      form.setValue("tipo", id);
    }
  };
  
  // Função para submeter os dados pessoais e avançar para pagamento
  const submeterDados = (data: BookingFormValues) => {
    console.log("Dados do formulário:", data);
    setEtapaAtual("pagamento");
  };
  
  // Função para simular o processamento do pagamento
  const processarPagamento = async (data: BookingFormValues) => {
    setProcessandoPagamento(true);
    
    try {
      // Simulando uma requisição de pagamento
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Validar os dados do cartão (simulação)
      const cartaoValido = validarCartao(data.cartao.numero);
      
      if (!cartaoValido) {
        toast({
          title: "Erro no pagamento",
          description: "Os dados do cartão são inválidos. Verifique e tente novamente.",
          variant: "destructive",
        });
        setProcessandoPagamento(false);
        return;
      }
      
      // Pagamento aprovado
      setPagamentoConfirmado(true);
      toast({
        title: "Pagamento aprovado!",
        description: "Sua consulta foi agendada com sucesso.",
      });
      
      // Espera um pouco antes de redirecionar
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      console.error("Erro ao processar pagamento:", error);
      toast({
        title: "Erro no pagamento",
        description: "Houve um problema ao processar o pagamento. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setProcessandoPagamento(false);
    }
  };
  
  // Função simples para validar cartão
  const validarCartao = (numero: string) => {
    // Algoritmo de Luhn (mod 10) - simplificado para exemplo
    if (!numero || !/^\d{16}$/.test(numero)) return false;
    
    // Validação básica - em produção usaria uma biblioteca de validação de cartões
    const digitos = numero.split('').map(Number);
    let soma = 0;
    let dobrar = false;
    
    for (let i = digitos.length - 1; i >= 0; i--) {
      let digito = digitos[i];
      if (dobrar) {
        digito *= 2;
        if (digito > 9) digito -= 9;
      }
      
      soma += digito;
      dobrar = !dobrar;
    }
    
    return soma % 10 === 0;
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-facifit-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 h-full w-1/3 bg-facifit-100 clip-path-diagonal"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Agende sua Consulta
              </h1>
              <p className="text-xl text-gray-600 mb-10">
                Escolha o dia e horário ideal para receber orientação nutricional especializada.
              </p>
            </div>
          </div>
        </section>
        
        {/* Processo de Agendamento */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Indicador de progresso */}
            <div className="mb-10">
              <div className="flex justify-between">
                <div className={`flex flex-col items-center ${etapaAtual === "data" ? "text-facifit-600" : "text-gray-500"}`}>
                  <div className={`w-10 h-10 flex items-center justify-center rounded-full ${etapaAtual === "data" ? "bg-facifit-600 text-white" : "bg-gray-200 text-gray-500"}`}>
                    <CalendarDays className="h-5 w-5" />
                  </div>
                  <span className="mt-2 text-sm font-medium">Data e Hora</span>
                </div>
                
                <div className={`flex flex-col items-center ${etapaAtual === "tipo" ? "text-facifit-600" : "text-gray-500"}`}>
                  <div className={`w-10 h-10 flex items-center justify-center rounded-full ${etapaAtual === "tipo" ? "bg-facifit-600 text-white" : "bg-gray-200 text-gray-500"}`}>
                    <User className="h-5 w-5" />
                  </div>
                  <span className="mt-2 text-sm font-medium">Tipo de Consulta</span>
                </div>
                
                <div className={`flex flex-col items-center ${etapaAtual === "dados" ? "text-facifit-600" : "text-gray-500"}`}>
                  <div className={`w-10 h-10 flex items-center justify-center rounded-full ${etapaAtual === "dados" ? "bg-facifit-600 text-white" : "bg-gray-200 text-gray-500"}`}>
                    <User className="h-5 w-5" />
                  </div>
                  <span className="mt-2 text-sm font-medium">Seus Dados</span>
                </div>
                
                <div className={`flex flex-col items-center ${etapaAtual === "pagamento" || pagamentoConfirmado ? "text-facifit-600" : "text-gray-500"}`}>
                  <div className={`w-10 h-10 flex items-center justify-center rounded-full ${etapaAtual === "pagamento" ? "bg-facifit-600 text-white" : pagamentoConfirmado ? "bg-green-500 text-white" : "bg-gray-200 text-gray-500"}`}>
                    {pagamentoConfirmado ? <CheckCircle className="h-5 w-5" /> : <CreditCard className="h-5 w-5" />}
                  </div>
                  <span className="mt-2 text-sm font-medium">Pagamento</span>
                </div>
              </div>
              
              <div className="relative mt-2">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-200"></div>
                <div 
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-facifit-600 transition-all" 
                  style={{ 
                    width: etapaAtual === "data" 
                      ? "25%" 
                      : etapaAtual === "tipo" 
                        ? "50%" 
                        : etapaAtual === "dados" 
                          ? "75%" 
                          : "100%" 
                  }}
                ></div>
              </div>
            </div>
            
            {/* Conteúdo das etapas */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
              {/* Etapa 1: Selecionar Data e Hora */}
              {etapaAtual === "data" && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Escolha a Data e Horário</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                      <h3 className="text-lg font-medium text-gray-700 mb-4">Selecione uma data</h3>
                      <div className="border rounded-md p-3 bg-white">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          disabled={(date) => {
                            // Desabilita datas anteriores a hoje e fins de semana
                            const day = date.getDay();
                            return (
                              date < new Date(new Date().setHours(0, 0, 0, 0)) ||
                              day === 0 || 
                              day === 6
                            );
                          }}
                          className="p-3 pointer-events-auto"
                          locale={ptBR}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium text-gray-700 mb-4">Selecione um horário</h3>
                      {date ? (
                        <div className="grid grid-cols-3 gap-3">
                          {horariosDisponiveis.map((hora) => (
                            <Button
                              key={hora}
                              variant={horario === hora ? "default" : "outline"}
                              className={`p-4 h-auto ${horario === hora ? "bg-facifit-600" : ""}`}
                              onClick={() => setHorario(hora)}
                            >
                              <Clock className="mr-2 h-4 w-4" />
                              {hora}
                            </Button>
                          ))}
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-64 bg-gray-50 rounded-md border border-gray-200">
                          <p className="text-gray-500">Selecione uma data primeiro</p>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-10 flex justify-end">
                    <Button 
                      onClick={avancarEtapa}
                      className="bg-facifit-600 hover:bg-facifit-700 text-white"
                    >
                      Próximo Passo
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Etapa 2: Selecionar Tipo de Consulta */}
              {etapaAtual === "tipo" && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Escolha o Tipo de Consulta</h2>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {tiposConsulta.map((tipo) => (
                        <Card 
                          key={tipo.id}
                          className={`cursor-pointer transition-all border-2 hover:shadow-md ${
                            tipoSelecionado.id === tipo.id ? "border-facifit-600" : "border-gray-200"
                          }`}
                          onClick={() => selecionarTipo(tipo.id)}
                        >
                          <CardHeader className="pb-2">
                            <CardTitle>{tipo.titulo}</CardTitle>
                            <CardDescription>{tipo.descricao}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex justify-between font-medium">
                              <span className="text-gray-600">Duração:</span>
                              <span>{tipo.duracao}</span>
                            </div>
                            <div className="flex justify-between font-medium mt-2">
                              <span className="text-gray-600">Valor:</span>
                              <span className="text-facifit-600">R$ {tipo.preco.toFixed(2)}</span>
                            </div>
                          </CardContent>
                          <CardFooter className="bg-gray-50 border-t">
                            <div className="flex items-center w-full justify-between">
                              <span className="text-sm text-gray-500">
                                {tipoSelecionado.id === tipo.id && "Selecionado"}
                              </span>
                              {tipoSelecionado.id === tipo.id && (
                                <CheckCircle className="h-5 w-5 text-facifit-600" />
                              )}
                            </div>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                    
                    <div className="p-4 bg-facifit-50 rounded-md">
                      <h3 className="font-medium text-gray-900 mb-2">Resumo da Consulta</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Data:</span>
                          <span>{date ? format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR }) : ""}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Horário:</span>
                          <span>{horario}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Tipo:</span>
                          <span>{tipoSelecionado.titulo}</span>
                        </div>
                        <div className="flex justify-between font-medium">
                          <span className="text-gray-700">Valor Total:</span>
                          <span className="text-facifit-600">R$ {tipoSelecionado.preco.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-10 flex justify-between">
                    <Button 
                      onClick={voltarEtapa}
                      variant="outline"
                    >
                      Voltar
                    </Button>
                    <Button 
                      onClick={avancarEtapa}
                      className="bg-facifit-600 hover:bg-facifit-700 text-white"
                    >
                      Próximo Passo
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Etapa 3: Preencher Dados Pessoais */}
              {etapaAtual === "dados" && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Seus Dados</h2>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(submeterDados)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="nome"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nome completo</FormLabel>
                              <FormControl>
                                <Input placeholder="Seu nome" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input placeholder="seu@email.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="telefone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Telefone</FormLabel>
                            <FormControl>
                              <Input placeholder="(21) 00000-0000" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="observacoes"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Observações (opcional)</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Alguma informação adicional que deseja compartilhar?"
                                rows={4}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="p-4 bg-facifit-50 rounded-md">
                        <h3 className="font-medium text-gray-900 mb-2">Resumo da Consulta</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Data:</span>
                            <span>{date ? format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR }) : ""}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Horário:</span>
                            <span>{horario}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Tipo:</span>
                            <span>{tipoSelecionado.titulo}</span>
                          </div>
                          <div className="flex justify-between font-medium">
                            <span className="text-gray-700">Valor Total:</span>
                            <span className="text-facifit-600">R$ {tipoSelecionado.preco.toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 flex justify-between">
                        <Button 
                          type="button"
                          onClick={voltarEtapa}
                          variant="outline"
                        >
                          Voltar
                        </Button>
                        <Button 
                          type="submit"
                          className="bg-facifit-600 hover:bg-facifit-700 text-white"
                        >
                          Continuar para Pagamento
                        </Button>
                      </div>
                    </form>
                  </Form>
                </div>
              )}
              
              {/* Etapa 4: Pagamento */}
              {etapaAtual === "pagamento" && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Pagamento</h2>
                  
                  {pagamentoConfirmado ? (
                    <div className="text-center py-10">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Pagamento Confirmado!</h3>
                      <p className="text-gray-600 mb-6">
                        Sua consulta foi agendada com sucesso. Enviamos os detalhes para seu e-mail.
                      </p>
                      
                      <div className="max-w-md mx-auto p-4 border border-gray-200 rounded-md bg-gray-50">
                        <h4 className="font-medium text-gray-900 mb-3">Detalhes da Consulta</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Data:</span>
                            <span>{date ? format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR }) : ""}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Horário:</span>
                            <span>{horario}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Tipo:</span>
                            <span>{tipoSelecionado.titulo}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Valor:</span>
                            <span>R$ {tipoSelecionado.preco.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Local:</span>
                            <span>Av. Duque de Caxias, 500 - Duque de Caxias, RJ</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <Button
                          className="bg-facifit-600 hover:bg-facifit-700 text-white"
                          onClick={() => navigate("/")}
                        >
                          Voltar para a Página Inicial
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <Tabs defaultValue="cartao" className="w-full">
                        <TabsList className="grid grid-cols-2 mb-6">
                          <TabsTrigger value="cartao">Cartão de Crédito</TabsTrigger>
                          <TabsTrigger value="pix" disabled>PIX (em breve)</TabsTrigger>
                        </TabsList>
                        
                        <TabsContent value="cartao">
                          <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <Label htmlFor="numero">Número do Cartão</Label>
                                <Input
                                  id="numero"
                                  placeholder="0000 0000 0000 0000"
                                  {...form.register("cartao.numero")}
                                  className="mt-1"
                                />
                                {form.formState.errors.cartao?.numero && (
                                  <p className="text-red-500 text-sm mt-1">
                                    {form.formState.errors.cartao.numero.message}
                                  </p>
                                )}
                              </div>
                              
                              <div>
                                <Label htmlFor="nome">Nome no Cartão</Label>
                                <Input
                                  id="nome"
                                  placeholder="Como está no cartão"
                                  {...form.register("cartao.nome")}
                                  className="mt-1"
                                />
                                {form.formState.errors.cartao?.nome && (
                                  <p className="text-red-500 text-sm mt-1">
                                    {form.formState.errors.cartao.nome.message}
                                  </p>
                                )}
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <Label htmlFor="validade">Validade</Label>
                                <Input
                                  id="validade"
                                  placeholder="MM/AA"
                                  {...form.register("cartao.validade")}
                                  className="mt-1"
                                />
                                {form.formState.errors.cartao?.validade && (
                                  <p className="text-red-500 text-sm mt-1">
                                    {form.formState.errors.cartao.validade.message}
                                  </p>
                                )}
                              </div>
                              
                              <div>
                                <Label htmlFor="cvv">Código de Segurança (CVV)</Label>
                                <Input
                                  id="cvv"
                                  placeholder="123"
                                  {...form.register("cartao.cvv")}
                                  className="mt-1"
                                />
                                {form.formState.errors.cartao?.cvv && (
                                  <p className="text-red-500 text-sm mt-1">
                                    {form.formState.errors.cartao.cvv.message}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-8 p-4 bg-facifit-50 rounded-md">
                            <div className="flex items-start space-x-3 mb-4">
                              <AlertCircle className="h-5 w-5 text-facifit-600 mt-0.5" />
                              <div>
                                <p className="text-sm text-gray-600">
                                  Este é um ambiente de demonstração. Nenhum pagamento real será processado.
                                  Para simular um pagamento bem-sucedido, use número de cartão terminado em dígitos pares.
                                </p>
                              </div>
                            </div>
                            
                            <h3 className="font-medium text-gray-900 mb-2">Resumo da Consulta</h3>
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span className="text-gray-600">Consulta {tipoSelecionado.titulo}:</span>
                                <span>R$ {tipoSelecionado.preco.toFixed(2)}</span>
                              </div>
                              <div className="flex justify-between font-medium border-t pt-2 mt-2">
                                <span className="text-gray-700">Valor Total:</span>
                                <span className="text-facifit-600">R$ {tipoSelecionado.preco.toFixed(2)}</span>
                              </div>
                            </div>
                          </div>
                        </TabsContent>
                      </Tabs>
                      
                      <div className="mt-10 flex justify-between">
                        <Button 
                          onClick={voltarEtapa}
                          variant="outline"
                          disabled={processandoPagamento}
                        >
                          Voltar
                        </Button>
                        <Button 
                          onClick={form.handleSubmit(processarPagamento)}
                          className="bg-facifit-600 hover:bg-facifit-700 text-white"
                          disabled={processandoPagamento}
                        >
                          {processandoPagamento ? (
                            <>Processando...</>
                          ) : (
                            <>Confirmar e Pagar</>
                          )}
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Agendar;
