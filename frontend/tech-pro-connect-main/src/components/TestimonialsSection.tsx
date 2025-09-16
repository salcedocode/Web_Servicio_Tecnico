import { Star, Quote } from 'lucide-react'
import { useState, useEffect } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'María González',
    location: 'Ciudad de México',
    rating: 5,
    text: 'Excelente servicio. Mi neveras Samsung quedó como nuevo. El técnico fue muy profesional y explicó todo el proceso. Definitivamente los recomiendo.',
    appliance: 'neveras Samsung',
    image:
      'https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    location: 'Guadalajara',
    rating: 5,
    text: 'Repararon mi aire acondicionado en menos de 2 horas. Llegaron puntual y el precio fue muy justo. La garantía de 6 meses me da mucha tranquilidad.',
    appliance: 'Aire Acondicionado',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: 3,
    name: 'Ana Martínez',
    location: 'Monterrey',
    rating: 5,
    text: 'Mi lavadora no centrifugaba y pensé que tendría que comprar una nueva. TechRepair Pro la dejó funcionando perfectamente. Servicio 100% recomendable.',
    appliance: 'Lavadora LG',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: 4,
    name: 'Roberto Silva',
    location: 'Puebla',
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
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container-wide">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold">
            <span className="text-foreground">Lo que dicen</span>{' '}
            <span className="text-gradient">nuestros clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Más de 5,000 clientes satisfechos respaldan la calidad de nuestro
            servicio técnico especializado
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">
              5,000+
            </div>
            <div className="text-muted-foreground">Clientes Atendidos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">
              4.9★
            </div>
            <div className="text-muted-foreground">Calificación Promedio</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">
              98%
            </div>
            <div className="text-muted-foreground">Reparaciones Exitosas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">
              24/7
            </div>
            <div className="text-muted-foreground">Atención al Cliente</div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map(testimonial => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-card border border-border rounded-2xl p-8 shadow-medium text-center">
                    <Quote className="h-8 w-8 text-primary/30 mx-auto mb-4" />

                    <blockquote className="text-lg lg:text-xl leading-relaxed mb-6 italic">
                      "{testimonial.text}"
                    </blockquote>

                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>

                    <div className="flex items-center justify-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="text-left">
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">
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
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary w-6'
                    : 'bg-border hover:bg-primary/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
          <div className="text-center p-4">
            <div className="w-16 h-16 bg-success-light rounded-full flex items-center justify-center mx-auto mb-3">
              <Star className="h-8 w-8 text-success" />
            </div>
            <h4 className="font-semibold mb-2">Garantía Incluida</h4>
            <p className="text-sm text-muted-foreground">
              6 meses de garantía en todas nuestras reparaciones
            </p>
          </div>
          <div className="text-center p-4">
            <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-3">
              <Quote className="h-8 w-8 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">Técnicos Certificados</h4>
            <p className="text-sm text-muted-foreground">
              Personal capacitado y con años de experiencia
            </p>
          </div>
          <div className="text-center p-4">
            <div className="w-16 h-16 bg-secondary-light rounded-full flex items-center justify-center mx-auto mb-3">
              <Star className="h-8 w-8 text-secondary" />
            </div>
            <h4 className="font-semibold mb-2">Atención 24/7</h4>
            <p className="text-sm text-muted-foreground">
              Disponibles cualquier día del año
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
