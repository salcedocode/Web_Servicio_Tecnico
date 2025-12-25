import { Star, Quote, Shield, Clock, CheckCircle, UserCheck } from 'lucide-react'
import { useState, useEffect } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'María González',
    location: 'Cali, Valle del Cauca',
    rating: 5,
    text: 'Excelente servicio. Mi nevera Samsung quedó como nuevo. El técnico fue muy profesional y explicó todo el proceso. Definitivamente los recomiendo.',
    appliance: 'Nevera Samsung',
    image:
      'https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    location: 'Bogotá, Cundinamarca',
    rating: 5,
    text: 'Repararon mi lavadora en menos de 2 horas. Llegaron puntual y el precio fue muy justo. La garantía de 3 meses me da mucha tranquilidad.',
    appliance: 'Lavadora LG',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: 3,
    name: 'Ana Martínez',
    location: 'Medellín, Antioquia',
    rating: 5,
    text: 'Mi nevera no enfriaba y pensé que tendría que comprar una nueva. TechRepair Pro la dejó funcionando perfectamente. Servicio 100% recomendable.',
    appliance: 'Nevera Mabe',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: 4,
    name: 'Roberto Silva',
    location: 'Cali, Valle del Cauca',
    rating: 5,
    text: 'Atención al cliente excepcional desde el primer contacto. El técnico llegó a tiempo y solucionó el problema de mi estufa rápidamente.',
    appliance: 'Estufa Whirlpool',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container-wide">
        <div className="text-center space-y-3 mb-10">
          <h2 className="text-2xl lg:text-4xl font-bold">
            <span className="text-foreground">Lo que dicen</span>{' '}
            <span className="text-gradient">nuestros clientes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Clientes satisfechos respaldan la calidad de nuestro servicio técnico especializado
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-bold text-gradient mb-1">
              200+
            </div>
            <div className="text-sm text-muted-foreground">Clientes Atendidos</div>
          </div>
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-bold text-gradient mb-1">
              4.8
            </div>
            <div className="text-sm text-muted-foreground">Calificación Promedio</div>
          </div>
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-bold text-gradient mb-1">
              95%
            </div>
            <div className="text-sm text-muted-foreground">Reparaciones Exitosas</div>
          </div>
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-bold text-gradient mb-1">
              Lun-Sab
            </div>
            <div className="text-sm text-muted-foreground">Horario de Atención</div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map(testimonial => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-3 md:px-4">
                  <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-medium text-center">
                    <Quote className="h-6 w-6 md:h-7 md:w-7 text-primary/30 mx-auto mb-3" />

                    <blockquote className="text-base md:text-lg leading-relaxed mb-4 italic">
                      "{testimonial.text}"
                    </blockquote>

                    <div className="flex justify-center mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>

                    <div className="flex items-center justify-center gap-3">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                      />
                      <div className="text-left">
                        <div className="font-semibold text-sm md:text-base">{testimonial.name}</div>
                        <div className="text-xs md:text-sm text-muted-foreground">
                          {testimonial.location}
                        </div>
                        <div className="text-xs text-primary font-medium">
                          {testimonial.appliance}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary w-5 md:w-6'
                    : 'bg-border hover:bg-primary/30'
                }`}
                aria-label={`Ver testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mt-10 max-w-3xl mx-auto">
          <div className="text-center p-4">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-success-light rounded-full flex items-center justify-center mx-auto mb-2">
              <Shield className="h-6 w-6 md:h-7 md:w-7 text-success" />
            </div>
            <h4 className="font-semibold mb-1 text-sm md:text-base">Garantía Incluida</h4>
            <p className="text-xs md:text-sm text-muted-foreground">
              3 meses de garantía en todas nuestras reparaciones
            </p>
          </div>
          <div className="text-center p-4">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-2">
              <UserCheck className="h-6 w-6 md:h-7 md:w-7 text-primary" />
            </div>
            <h4 className="font-semibold mb-1 text-sm md:text-base">Técnicos Certificados</h4>
            <p className="text-xs md:text-sm text-muted-foreground">
              Personal capacitado y con experiencia comprobada
            </p>
          </div>
          <div className="text-center p-4">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-secondary-light rounded-full flex items-center justify-center mx-auto mb-2">
              <Clock className="h-6 w-6 md:h-7 md:w-7 text-secondary" />
            </div>
            <h4 className="font-semibold mb-1 text-sm md:text-base">Respuesta Rápida</h4>
            <p className="text-xs md:text-sm text-muted-foreground">
              Atención Lun-Sab con respuesta inmediata
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
