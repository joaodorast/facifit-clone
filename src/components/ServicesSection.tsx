
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Apple, Book, ShoppingBag, Users } from "lucide-react";

const services = [
  {
    title: "Instrução Técnica",
    description: "Capacitação e orientação técnica para profissionais de sua loja sobre alimentação saudável e suplementação.",
    icon: Book,
    buttonText: "Saiba mais"
  },
  {
    title: "Consultoria para Lojas",
    description: "Ajudamos sua loja a oferecer os melhores produtos e orientação alimentar para seus clientes.",
    icon: ShoppingBag,
    buttonText: "Contratar"
  },
  {
    title: "Orientação Nutricional",
    description: "Planos alimentares personalizados para ajudar seus clientes a atingirem seus objetivos.",
    icon: Apple,
    buttonText: "Ver planos"
  },
  {
    title: "Atendimento de Cliente",
    description: "Treinamos sua equipe para oferecer o melhor atendimento nutricional para seus clientes.",
    icon: Users,
    buttonText: "Contratar"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma variedade de serviços para ajudar sua loja e seus clientes a alcançarem uma alimentação mais saudável e equilibrada.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-gray-200 hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-facifit-100 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-facifit-600" />
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 min-h-[100px]">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-white text-facifit-600 hover:bg-facifit-50 border border-facifit-600">
                  {service.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
