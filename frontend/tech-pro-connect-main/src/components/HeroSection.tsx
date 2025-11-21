import { useState } from 'react'
import { Shield, Clock, Phone, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ServiceRequestModal } from './ServiceRequestModal'

/**
 * HeroSection - Sección principal optimizada para conversión
 * 
 * Mejoras implementadas:
 * - Estructura semántica correcta con landmarks ARIA
 * - Cintillo oscuro solo en la mitad inferior (mitad superior sin overlay)
 * - Imagen visible completamente en la mitad superior
 * - Contenido posicionado en la mitad inferior sobre cintillo oscuro
 * - Headline corto y potente (máximo 8 palabras)
 * - Subheadline conciso con beneficios clave
 * - Máximo 2 CTAs (eliminado WhatsApp del hero)
 * - Trust indicators debajo de CTAs
 * - Imagen optimizada con picture element
 * - Tipografía responsive
 * - Animaciones sutiles con fade-in secuencial
 * - Accesibilidad mejorada (contraste, aria-labels, focus states)
 */
export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Número de teléfono (ajustar según necesidad)
  const phoneNumber = '+573003094854'

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`
  }

  return (
    <section 
      className="relative overflow-hidden min-h-[85vh] sm:min-h-[90vh] lg:min-h-screen"
      aria-label="Sección principal"
    >
      {/* Capa de fondo con imagen */}
      <div className="absolute inset-0">
        <picture>
          {/* Imagen para mobile - menos productos, punto focal centrado */}
          <source
            media="(max-width: 640px)"
            srcSet="/portadas/portada-vertical-2.png"
          />
          {/* Imagen para desktop */}
          <source
            media="(min-width: 641px)"
            srcSet="/portadas/portada7.png"
          />
          {/* Fallback */}
          <img
            src="/portadas/portada7.png"
            alt="Técnicos profesionales de TechRepair Pro reparando electrodomésticos a domicilio"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
      </div>

      {/* Cintillo oscuro desde la mitad hacia abajo - La mitad superior sin overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, transparent 50%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.75) 100%)'
        }}
        aria-hidden="true"
      />

      {/* Contenedor de contenido posicionado en la mitad inferior */}
      <div className="relative container-wide min-h-[85vh] sm:min-h-[90vh] lg:min-h-screen flex items-end py-12 sm:py-16 lg:py-5 px-5 sm:px-6 lg:px-0.5">
        <div className="w-full max-w-[700px] space-y-6 sm:space-y-2">

          {/* Badge superior opcional - Disponible Hoy */}
          <div 
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 animate-fade-in-up"
            style={{ animationDelay: '0ms' }}
          >
            <Clock className="h-4 w-4 text-white" aria-hidden="true" />
            <span className="text-sm font-medium text-white">
              Disponible Hoy
            </span>
          </div>

          {/* Headline principal - Máximo 8 palabras, más impactante */}
          <h1 
            className="text-3xl sm:text-4xl lg:text-[52px] font-bold leading-tight tracking-[-0.02em] text-white animate-fade-in-up"
            style={{ animationDelay: '100ms', lineHeight: '1.15', textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}
          >
            Reparamos tus Electrodomésticos en Casa
          </h1>

          {/* Subheadline descriptivo - 15-20 palabras */}
          <p 
            className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl animate-fade-in-up mt-6 sm:mt-8"
            style={{ animationDelay: '200ms' }}
          >
            Técnicos certificados • 3 meses de garantía • Servicio Lun-Sab
          </p>

          {/* Contenedor de CTAs */}
          <div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 animate-fade-in-up"
            style={{ animationDelay: '300ms' }}
          >
            {/* CTA Primario - Solicitar Servicio (Azul) */}
            <Button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto min-w-[280px] min-h-[56px] px-8 py-4 text-base sm:text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white border-blue-600 hover:border-blue-700 shadow-lg hover:shadow-xl hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black/50 transition-all duration-300"
              aria-label="Abrir formulario para solicitar servicio técnico"
            >
              Solicitar Servicio
            </Button>

            {/* CTA Secundario - Llamar Ahora (Verde) */}
            <Button
              onClick={handleCall}
              className="w-full sm:w-auto min-w-[280px] min-h-[56px] px-8 py-4 text-base sm:text-lg font-semibold bg-green-600 hover:bg-green-700 text-white border-green-600 hover:border-green-700 shadow-lg hover:shadow-xl hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black/50 transition-all duration-300"
              aria-label={`Llamar al número ${phoneNumber}`}
            >
              <Phone className="h-5 w-5 mr-2" aria-hidden="true" />
              Llamar Ahora
            </Button>
          </div>

          {/* Trust Indicators / Badges - Debajo de CTAs */}
          <div 
            className="flex flex-wrap gap-3 sm:gap-4 pt-4 animate-fade-in-up"
            style={{ animationDelay: '400ms' }}
          >
            {/* Badge 1: Garantía */}
            <div 
              className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-lg border border-white/20"
              aria-label="Garantía de 3 meses en todos los servicios"
            >
              <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-white flex-shrink-0" aria-hidden="true" />
              <span className="text-sm font-medium text-white">
                Garantía 3 meses
              </span>
            </div>

            {/* Badge 2: Horario */}
            <div 
              className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-lg border border-white/20"
              aria-label="Servicio disponible de lunes a sábado"
            >
              <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-white flex-shrink-0" aria-hidden="true" />
              <span className="text-sm font-medium text-white">
                Servicio Lun-Sab
              </span>
            </div>

            {/* Badge 3: Experiencia (opcional, puede eliminarse si se prefiere solo 2) */}
            <div 
              className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-lg border border-white/20"
              aria-label="Técnicos con experiencia certificada"
            >
              <Star className="h-4 w-4 sm:h-5 sm:w-5 text-white flex-shrink-0" aria-hidden="true" />
              <span className="text-sm font-medium text-white">
                Técnicos Certificados
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de solicitud de servicio */}
      <ServiceRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  )
}
