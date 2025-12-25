import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
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
import { PricingModal } from './PricingModal'
import { ServiceInfoModal } from './ServiceInfoModal'
import { ServiceRequestModal } from './ServiceRequestModal'

export function Footer() {
  const location = useLocation()
  const navigate = useNavigate()
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false)
  const [isServiceInfoModalOpen, setIsServiceInfoModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [isServiceRequestModalOpen, setIsServiceRequestModalOpen] = useState(false)

  // Función para scroll suave a secciones
  const scrollToSection = (sectionId: string) => {
    const scrollFunction = (retryCount = 0) => {
      const element = document.getElementById(sectionId)
      if (!element) {
        if (retryCount < 10) {
          setTimeout(() => scrollFunction(retryCount + 1), 100)
          return
        }
        return
      }

      const headerOffset = 80
      const elementPosition = element.offsetTop
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth',
      })
    }

    requestAnimationFrame(() => scrollFunction(0))
  }

  // Manejar clicks en enlaces de navegación
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    if (location.pathname === '/') {
      scrollToSection(sectionId)
      window.history.pushState(null, '', `#${sectionId}`)
    } else {
      navigate(`/#${sectionId}`)
    }
  }

  // Manejar click en precios
  const handlePricingClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setIsPricingModalOpen(true)
  }

  // Manejar click en servicio - abrir modal de información
  const handleServiceClick = (serviceValue: string) => {
    setSelectedService(serviceValue)
    setIsServiceInfoModalOpen(true)
  }

  // Manejar solicitud de servicio desde el modal de información
  const handleServiceRequest = (serviceValue: string) => {
    setSelectedService(serviceValue)
    setIsServiceRequestModalOpen(true)
  }
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
                <a
                  href="#inicio"
                  onClick={(e) => handleNavClick(e, 'inicio')}
                  className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  onClick={(e) => handleNavClick(e, 'servicios')}
                  className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#como-funciona"
                  onClick={(e) => handleNavClick(e, 'como-funciona')}
                  className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  Cómo Funciona
                </a>
              </li>
              <li>
                <a
                  href="#precios"
                  onClick={handlePricingClick}
                  className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  Precios
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  onClick={(e) => handleNavClick(e, 'contacto')}
                  className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  Contacto
                </a>
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
                <button
                  onClick={() => handleServiceClick('neveras')}
                  className="text-left text-muted-foreground hover:text-primary transition-colors cursor-pointer w-full"
                >
                  Neveras-Nevecones
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceClick('lavadora')}
                  className="text-left text-muted-foreground hover:text-primary transition-colors cursor-pointer w-full"
                >
                  Lavadoras-Secadoras
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceClick('calentadores')}
                  className="text-left text-muted-foreground hover:text-primary transition-colors cursor-pointer w-full"
                >
                  Calentadores
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceClick('estufa')}
                  className="text-left text-muted-foreground hover:text-primary transition-colors cursor-pointer w-full"
                >
                  Estufas-Hornos
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceClick('microondas')}
                  className="text-left text-muted-foreground hover:text-primary transition-colors cursor-pointer w-full"
                >
                  Microondas
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceClick('televisores')}
                  className="text-left text-muted-foreground hover:text-primary transition-colors cursor-pointer w-full"
                >
                  Televisores LCD
                </button>
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
                    +57 300 309 4854
                    <br />
                    +57 315 678 9012
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-muted-foreground text-sm">
                    info@techrepairpro.co
                    <br />
                    soporte@techrepairpro.co
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">Horarios</div>
                  <div className="text-muted-foreground text-sm">
                    Lun - Sáb: 8:00 AM - 6:00 PM
                    <br />
                    Dom: Solo emergencias
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">Ubicación</div>
                  <div className="text-muted-foreground text-sm">
                    Cali, Valle del Cauca
                    <br />
                    Colombia
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

      {/* Modal de Precios */}
      <PricingModal
        isOpen={isPricingModalOpen}
        onClose={() => setIsPricingModalOpen(false)}
      />

      {/* Modal de Información de Servicio */}
      <ServiceInfoModal
        isOpen={isServiceInfoModalOpen}
        onClose={() => setIsServiceInfoModalOpen(false)}
        serviceValue={selectedService}
        onRequestService={handleServiceRequest}
      />

      {/* Modal de Solicitud de Servicio */}
      <ServiceRequestModal
        isOpen={isServiceRequestModalOpen}
        onClose={() => setIsServiceRequestModalOpen(false)}
        initialAppliance={selectedService || ''}
      />
    </footer>
  )
}
