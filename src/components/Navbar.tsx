
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-facifit-600 font-bold text-2xl">FaciFit</span>
            </Link>
          </div>

         
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/" className="text-gray-700 hover:text-facifit-600 px-3 py-2 rounded-md font-medium">
              Início
            </Link>
            <Link to="/instrutores" className="text-gray-700 hover:text-facifit-600 px-3 py-2 rounded-md font-medium">
              Instrutores
            </Link>
            <Link to="/nutricao" className="text-gray-700 hover:text-facifit-600 px-3 py-2 rounded-md font-medium">
              Nutrição
            </Link>
            <Link to="/contato" className="text-gray-700 hover:text-facifit-600 px-3 py-2 rounded-md font-medium">
              Contato
            </Link>
            <Button className="ml-4 bg-facifit-600 hover:bg-facifit-700">
              Agendar Consulta
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-facifit-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>


      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-facifit-600 block px-3 py-2 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link 
              to="/instrutores" 
              className="text-gray-700 hover:text-facifit-600 block px-3 py-2 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Instrutores
            </Link>
            <Link 
              to="/nutricao" 
              className="text-gray-700 hover:text-facifit-600 block px-3 py-2 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Nutrição
            </Link>
            <Link 
              to="/contato" 
              className="text-gray-700 hover:text-facifit-600 block px-3 py-2 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
            <Button 
              className="w-full mt-3 bg-facifit-600 hover:bg-facifit-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Agendar Consulta
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
