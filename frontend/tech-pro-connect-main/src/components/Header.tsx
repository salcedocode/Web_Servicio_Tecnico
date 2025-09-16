import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, MessageCircle, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <nav className="container-wide">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-gradient-to-br from-primary to-primary-hover p-2 rounded-lg">
              <Wrench className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl text-gradient">TechRepair Pro</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Inicio
            </Link>
            <Link 
              to="/servicios" 
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Servicios
            </Link>
            <Link 
              to="/como-funciona" 
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Cómo Funciona
            </Link>
            <Link 
              to="/contacto" 
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Contacto
            </Link>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/login">Iniciar Sesión</Link>
            </Button>
            <Button className="btn-hero">
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
              <Link 
                to="/" 
                className="block py-2 text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                to="/servicios" 
                className="block py-2 text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link 
                to="/como-funciona" 
                className="block py-2 text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Cómo Funciona
              </Link>
              <Link 
                to="/contacto" 
                className="block py-2 text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </div>
            <div className="space-y-2 pt-4 border-t border-border">
              <Button variant="ghost" className="w-full" asChild>
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  Iniciar Sesión
                </Link>
              </Button>
              <Button className="btn-hero w-full">
                Solicitar Servicio
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}