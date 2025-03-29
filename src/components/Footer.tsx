
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-facifit-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">FaciFit</h3>
            <p className="text-gray-600 mb-4">
              Sua assistência técnica alimentar para uma vida mais saudável e equilibrada.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-facifit-600 hover:text-facifit-800">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-facifit-600 hover:text-facifit-800">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-facifit-600 hover:text-facifit-800">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-facifit-600">Início</Link>
              </li>
              <li>
                <Link to="/instrutores" className="text-gray-600 hover:text-facifit-600">Instrutores</Link>
              </li>
              <li>
                <Link to="/nutricao" className="text-gray-600 hover:text-facifit-600">Nutrição</Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-600 hover:text-facifit-600">Contato</Link>
              </li>
              <li>
                <Link to="/agendar" className="text-gray-600 hover:text-facifit-600">Agendar Consulta</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-facifit-600">Avaliação Nutricional</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-facifit-600">Planos Alimentares</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-facifit-600">Orientação Técnica</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-facifit-600">Consultoria para Lojas</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-facifit-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Av. Duque de Caxias, 500, Duque de Caxias, RJ</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-facifit-600 flex-shrink-0" />
                <span className="text-gray-600">(21) 99999-9999</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-facifit-600 flex-shrink-0" />
                <span className="text-gray-600">contato@facifit.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-gray-500 text-center">© {new Date().getFullYear()} FaciFit. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
