
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-16 bg-facifit-600 relative overflow-hidden">
   
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-facifit-500 opacity-30"></div>
      <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-facifit-500 opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto para transformar a alimentação da sua loja e clientes?
          </h2>
          <p className="text-xl text-facifit-100 mb-8 max-w-3xl mx-auto">
            Agende uma consulta gratuita com nossos instrutores técnicos e descubra como podemos ajudar você.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-facifit-600 hover:bg-facifit-50 px-8 py-6 text-lg">
              Agendar Consulta
            </Button>
            <Button className="bg-transparent border-2 border-white text-white hover:bg-facifit-500 px-8 py-6 text-lg">
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
