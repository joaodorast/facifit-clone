
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "A consultoria da FaciFit transformou completamente a forma como orientamos nossos clientes sobre alimentação na loja.",
    author: "Marcela Rodrigues",
    role: "Gerente de Loja",
    company: "Nutrifit Store"
  },
  {
    quote: "Os instrutores técnicos da FaciFit nos ajudaram a entender melhor os produtos que vendemos e como orientar os clientes.",
    author: "João Paulo",
    role: "Proprietário",
    company: "Health Supplements"
  },
  {
    quote: "Desde que contratamos os serviços da FaciFit, nossas vendas aumentaram e nossos clientes estão muito mais satisfeitos com o atendimento.",
    author: "Carla Mendonça",
    role: "Diretora Comercial",
    company: "Vida Saudável"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Depoimentos</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Veja o que nossos clientes dizem sobre nossos serviços de consultoria e orientação nutricional.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-facifit-300 mb-4" />
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.role}, {testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
