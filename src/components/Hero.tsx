
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="hero-pattern relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:max-w-2xl md:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Instruções técnicas de alimentação para uma vida mais saudável
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A FaciFit oferece orientação nutricional especializada para sua loja e seus clientes. Tenha acesso a instrutores técnicos qualificados para garantir uma alimentação balanceada e saudável.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-facifit-600 hover:bg-facifit-700 text-white px-8 py-6 text-lg">
                Consultar agora
              </Button>
              <Button className="bg-white text-facifit-600 hover:bg-facifit-50 border-2 border-facifit-600 px-8 py-6 text-lg">
                Nossos serviços
              </Button>
            </div>
          </div>
          <div className="mt-10 md:mt-0 md:max-w-lg">
            <div className="relative bg-white shadow-lg rounded-lg p-4">
              <div className="absolute -top-3 -left-3 w-24 h-24 bg-facifit-100 rounded-full"></div>
              <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-facifit-200 rounded-full"></div>
              <div className="relative p-2 bg-white rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400"
                  alt="Alimentos saudáveis"
                  className="rounded-lg w-full h-auto object-cover" 
                />
                <div className="absolute bottom-8 right-4 bg-white p-3 rounded-lg shadow-md">
                  <p className="text-sm font-medium text-facifit-600">Orientação personalizada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-6 bg-gradient-to-r from-facifit-100 to-facifit-50"></div>
    </div>
  );
};

export default Hero;
