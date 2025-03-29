
import { Card, CardContent } from "@/components/ui/card";

const instructors = [
  {
    name: "Dra. Ana Silva",
    role: "Nutricionista Chefe",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    description: "Especialista em nutrição esportiva com mais de 10 anos de experiência."
  },
  {
    name: "Dr. Carlos Mendes",
    role: "Instrutor Técnico",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    description: "Especialista em suplementação e alimentação funcional para atletas."
  },
  {
    name: "Fernanda Oliveira",
    role: "Consultora Nutricional",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    description: "Especialista em reeducação alimentar e dietas personalizadas."
  }
];

const InstructorsSection = () => {
  return (
    <section className="py-16 bg-facifit-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Instrutores</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conheça nossa equipe de especialistas em nutrição e alimentação saudável que irão ajudar você e seus clientes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <Card key={index} className="border-0 overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative pb-[100%]">
                <img 
                  src={instructor.image} 
                  alt={instructor.name}
                  className="absolute w-full h-full object-cover" 
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{instructor.name}</h3>
                <p className="text-facifit-600 font-medium mb-3">{instructor.role}</p>
                <p className="text-gray-600">{instructor.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;
