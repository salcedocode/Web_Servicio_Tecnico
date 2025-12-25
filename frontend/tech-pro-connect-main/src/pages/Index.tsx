import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div id="inicio">
          <HeroSection />
        </div>
        <div id="como-funciona">
          <HowItWorksSection />
        </div>
        <div id="servicios">
          <ServicesSection />
        </div>
        <div id="testimonios">
          <TestimonialsSection />
        </div>
      </main>
      <div id="contacto">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
