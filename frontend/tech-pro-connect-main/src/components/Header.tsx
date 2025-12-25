import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone, MessageCircle, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceRequestModal } from "./ServiceRequestModal";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Función para scroll suave a secciones
  const scrollToSection = (sectionId: string, delay = 0) => {
    const scrollFunction = (retryCount = 0) => {
      const element = document.getElementById(sectionId);
      if (!element) {
        // Si el elemento no existe, intentar de nuevo (máximo 10 intentos)
        if (retryCount < 10) {
          setTimeout(() => scrollFunction(retryCount + 1), 100);
          return;
        }
        console.warn(`No se pudo encontrar la sección: ${sectionId}`);
        return;
      }

      const headerOffset = 80; // Altura del header sticky
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
    };

    if (delay > 0) {
      setTimeout(() => {
        requestAnimationFrame(() => scrollFunction(0));
      }, delay);
    } else {
      requestAnimationFrame(() => scrollFunction(0));
    }
  };

  // Manejar clicks en enlaces de navegación
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setIsMenuOpen(false); // Cerrar menú móvil
    
    if (location.pathname === "/") {
      // Si ya estamos en la página principal, hacer scroll inmediatamente
      scrollToSection(sectionId);
      // Actualizar la URL con el hash
      window.history.pushState(null, "", `#${sectionId}`);
    } else {
      // Si no estamos en la página principal, navegar primero y luego hacer scroll
      navigate(`/#${sectionId}`);
      // El scroll se manejará en el useEffect cuando cambie la ruta
    }
  };

  // Manejar scroll cuando cambia el hash en la URL o cuando la página carga
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const sectionId = location.hash.substring(1); // Remover el #
      // Esperar a que el DOM esté completamente listo
      // Usar un delay más largo para asegurar que todas las secciones estén renderizadas
      const timer = setTimeout(() => {
        scrollToSection(sectionId, 0);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.hash]);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <nav className="container-wide">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="/logotipos/logotipo2.1.png" 
              alt="logotipo TechRepair Pro" 
              className="h-16 w-auto object-contain"
            />
            <span className="font-bold text-xl text-gradient">TechRepair Pro</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#inicio"
              onClick={(e) => handleNavClick(e, "inicio")}
              className="text-foreground/80 hover:text-primary transition-colors font-medium cursor-pointer"
            >
              Inicio
            </a>
            <a
              href="#como-funciona"
              onClick={(e) => handleNavClick(e, "como-funciona")}
              className="text-foreground/80 hover:text-primary transition-colors font-medium cursor-pointer"
            >
              Cómo Funciona
            </a>
            <a
              href="#servicios"
              onClick={(e) => handleNavClick(e, "servicios")}
              className="text-foreground/80 hover:text-primary transition-colors font-medium cursor-pointer"
            >
              Servicios
            </a>
            <a
              href="#contacto"
              onClick={(e) => handleNavClick(e, "contacto")}
              className="text-foreground/80 hover:text-primary transition-colors font-medium cursor-pointer"
            >
              Contacto
            </a>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/login">Iniciar Sesión</Link>
            </Button>
            <Button className="btn-hero" onClick={() => setIsModalOpen(true)}>
              Solicitar Servicio
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <div className="space-y-2">
              <a
                href="#inicio"
                onClick={(e) => handleNavClick(e, "inicio")}
                className="block py-2 text-foreground/80 hover:text-primary transition-colors cursor-pointer"
              >
                Inicio
              </a>
              <a
                href="#como-funciona"
                onClick={(e) => handleNavClick(e, "como-funciona")}
                className="block py-2 text-foreground/80 hover:text-primary transition-colors cursor-pointer"
              >
                Cómo Funciona
              </a>
              <a
                href="#servicios"
                onClick={(e) => handleNavClick(e, "servicios")}
                className="block py-2 text-foreground/80 hover:text-primary transition-colors cursor-pointer"
              >
                Servicios
              </a>
              <a
                href="#contacto"
                onClick={(e) => handleNavClick(e, "contacto")}
                className="block py-2 text-foreground/80 hover:text-primary transition-colors cursor-pointer"
              >
                Contacto
              </a>
            </div>
            <div className="space-y-2 pt-4 border-t border-border">
              <Button variant="ghost" className="w-full" asChild>
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  Iniciar Sesión
                </Link>
              </Button>
              <Button 
                className="btn-hero w-full"
                onClick={() => {
                  setIsModalOpen(true)
                  setIsMenuOpen(false)
                }}
              >
                Solicitar Servicio
              </Button>
            </div>
          </div>
        )}
      </nav>

      <ServiceRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </header>
  );
}