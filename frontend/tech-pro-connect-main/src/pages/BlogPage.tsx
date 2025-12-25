import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";

const BlogPage = () => {
  // Placeholder para artículos del blog
  const blogPosts = [
    {
      id: 1,
      title: "Cómo mantener tu nevera funcionando eficientemente",
      description: "Consejos prácticos para el mantenimiento preventivo de tu nevera y evitar reparaciones costosas.",
      date: "15 de Marzo, 2024",
      readTime: "5 min lectura",
      category: "Mantenimiento",
    },
    {
      id: 2,
      title: "Señales de que tu lavadora necesita reparación",
      description: "Aprende a identificar los síntomas comunes que indican que tu lavadora necesita atención técnica.",
      date: "10 de Marzo, 2024",
      readTime: "4 min lectura",
      category: "Reparación",
    },
    {
      id: 3,
      title: "¿Cuándo es momento de cambiar tu electrodoméstico?",
      description: "Guía para decidir entre reparar o reemplazar tus electrodomésticos según su estado y antigüedad.",
      date: "5 de Marzo, 2024",
      readTime: "6 min lectura",
      category: "Consejos",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16 lg:py-24">
        <div className="container-wide">
          {/* Header del Blog */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-foreground">Blog</span>{" "}
              <span className="text-gradient">TechRepair Pro</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Consejos, guías y noticias sobre el cuidado y reparación de electrodomésticos
            </p>
          </div>

          {/* Mensaje de próximamente */}
          <div className="bg-primary-light/10 border border-primary/20 rounded-lg p-8 mb-12 text-center">
            <h2 className="text-2xl font-bold mb-2">¡Próximamente!</h2>
            <p className="text-muted-foreground">
              Estamos preparando contenido exclusivo para ti. Muy pronto encontrarás artículos,
              guías y consejos útiles sobre el cuidado de tus electrodomésticos.
            </p>
          </div>

          {/* Placeholder de artículos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span className="px-2 py-1 bg-primary-light rounded text-primary text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;

