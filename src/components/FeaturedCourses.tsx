import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const courses = [
  {
    title: "Fundamentos do Marketing Digital",
    description: "Aprenda os conceitos básicos e essenciais",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    videoUrl: "#"
  },
  {
    title: "Marketing nas Redes Sociais",
    description: "Domine as principais plataformas sociais",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    videoUrl: "#"
  },
  {
    title: "SEO Avançado",
    description: "Técnicas avançadas de otimização",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    videoUrl: "#"
  }
];

export const FeaturedCourses = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-dark">
          Cursos em Destaque
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.title} className="overflow-hidden card-hover">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <Button className="w-full bg-primary hover:bg-primary-dark">
                  Assistir Aula
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};