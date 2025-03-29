
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center bg-facifit-50 py-20">
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-lg">
          <h1 className="text-9xl font-bold text-facifit-600 mb-4">404</h1>
          <p className="text-2xl text-gray-900 font-semibold mb-4">Página não encontrada</p>
          <p className="text-gray-600 mb-8">
            A página que você está procurando não existe ou foi removida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-facifit-600 hover:bg-facifit-700">
              <Link to="/">Voltar para o início</Link>
            </Button>
            <Button asChild className="bg-white text-facifit-600 hover:bg-facifit-50 border border-facifit-600">
              <Link to="/contato">Contato</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
