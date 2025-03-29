
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Agradecemos seu contato. Responderemos em breve.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className="py-16 bg-facifit-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
            <p className="text-lg text-gray-600 mb-6">
              Estamos prontos para ajudar você e sua loja a oferecer o melhor em orientação alimentar. Preencha o formulário e nossa equipe entrará em contato.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-mail
                    </label>
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
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="(21) 00000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Como podemos ajudar você?"
                      value={formData.message}
                      onChange={handleChange}
                      className="h-32"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-facifit-600 hover:bg-facifit-700">
                    Enviar Mensagem
                  </Button>
                </div>
              </form>
            </div>
          </div>
          <div className="relative h-full min-h-[400px]">
            <div className="absolute inset-0 bg-facifit-600 rounded-lg transform -rotate-3"></div>
            <div className="absolute inset-0 bg-white rounded-lg shadow-lg p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Informações de Contato</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-gray-700">Endereço:</p>
                  <p className="text-gray-600">Av. Duque de Caxias, 500, Duque de Caxias, RJ</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Telefone:</p>
                  <p className="text-gray-600">(21) 99999-9999</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">E-mail:</p>
                  <p className="text-gray-600">contato@facifit.com</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Horário de Atendimento:</p>
                  <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                  <p className="text-gray-600">Sábado: 9h às 13h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
