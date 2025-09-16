import { Link } from 'react-router-dom'
import {
  Wrench,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Clock,
} from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-wide py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-primary to-primary-hover p-2 rounded-lg">
                <Wrench className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl text-gradient">
                TechRepair Pro
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Líderes en servicios técnicos de electrodomésticos con más de 10
              años de experiencia. Técnicos certificados y garantía en todos
              nuestros trabajos.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  to="/como-funciona"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Cómo Funciona
                </Link>
              </li>
              <li>
                <Link
                  to="/precios"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Precios
                </Link>
              </li>
              <li>
                <Link
                  to="/contacto"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Nuestros Servicios</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/servicios/nevecones"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  nevecones
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios/lavadoras"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Lavadoras
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios/aires-acondicionados"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Aires Acondicionados
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios/microondas"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Microondas
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios/estufas"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Estufas
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios/secadoras"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Secadoras
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contáctanos</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">Llamadas</div>
                  <div className="text-muted-foreground text-sm">
                    +52 55 1234 5678
                    <br />
                    +52 55 8765 4321
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-muted-foreground text-sm">
                    info@techrepairpro.mx
                    <br />
                    soporte@techrepairpro.mx
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">Horarios</div>
                  <div className="text-muted-foreground text-sm">
                    Lun - Dom: 24 horas
                    <br />
                    Emergencias: Siempre
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">Cobertura</div>
                  <div className="text-muted-foreground text-sm">
                    Ciudad de México, Guadalajara,
                    <br />
                    Monterrey y área metropolitana
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-border my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-muted-foreground text-sm">
            © 2024 TechRepair Pro. Todos los derechos reservados.
          </div>
          <div className="flex gap-6 text-sm">
            <Link
              to="/privacidad"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Política de Privacidad
            </Link>
            <Link
              to="/terminos"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Términos y Condiciones
            </Link>
            <Link
              to="/cookies"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Política de Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
