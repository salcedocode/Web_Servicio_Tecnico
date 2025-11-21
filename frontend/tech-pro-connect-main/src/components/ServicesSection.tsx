import { useState } from 'react'
import { ArrowRight, Wrench, CheckCircle } from 'lucide-react'
import { ServiceRequestModal } from './ServiceRequestModal'

const services = [
  {
    title: 'Neveras-Nevecones',
    description:
      'Reparación de sistemas de enfriamiento, termostatos, compresores y más',
    image: '/neveras-nevecones/nevecon lg1.jpg',
    features: [
      'No enfría',
      'Ruidos extraños',
      'Fugas de agua',
      'Problemas eléctricos',
    ],
  },
  {
    title: 'Lavadoras-Secadoras',
    description:
      'Servicio completo para lavadoras y secadoras automáticas y semiautomáticas',
    image: '/lavadoras-secadoras/lavadora blanca lg1.jpg',
    features: ['No centrifuga', 'No llena agua', 'Fugas', 'Problemas motor'],
  },
  {
    title: 'Calentadores',
    description:
      'Reparación y mantenimiento de calentadores de agua eléctricos y a gas',
    image: '/calentador/calentador challenger.jpg',
    features: [
      'No calienta',
      'Fugas de agua',
      'Problemas eléctricos',
      'Mantenimiento',
    ],
  },
  {
    title: 'Estufas-Hornos',
    description:
      'Reparación de hornos, quemadores y sistemas de gas o eléctricos',
    image: '/estufas-hornos/estufa grande whirpol.jpg',
    features: ['Quemadores', 'Horno', 'Válvulas gas', 'Ignición'],
  },
  {
    title: 'Microondas',
    description:
      'Reparación de magnetrón, platos giratorios y sistemas eléctricos',
    image: '/microondas/microonda 1.jpg',
    features: ['No calienta', 'Plato no gira', 'Puerta', 'Panel control'],
  },
  {
    title: 'Televisores LCD',
    description: 'Reparación de pantallas LCD, sistemas de imagen y audio',
    image: '/televisores/tv lg uhd.jpg',
    features: ['Sin imagen', 'Sin sonido', 'Problemas de fuente', 'Panel dañado'],
  },
]

export function ServicesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedAppliance, setSelectedAppliance] = useState('')

  const handleServiceClick = (applianceValue: string) => {
    setSelectedAppliance(applianceValue)
    setIsModalOpen(true)
  }

  // Mapeo de títulos a valores del formulario
  const getApplianceValue = (title: string): string => {
    const mapping: Record<string, string> = {
      'Neveras-Nevecones': 'neveras',
      'Lavadoras-Secadoras': 'lavadora',
      'Calentadores': 'calentadores',
      'Estufas-Hornos': 'estufa',
      'Microondas': 'microondas',
      'Televisores LCD': 'televisores',
    }
    return mapping[title] || title.toLowerCase()
  }

  return (
    <section className="py-16 lg:py-24 bg-gradient-subtle">
      <div className="container-wide">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold">
            <span className="text-foreground">Nuestros</span>{' '}
            <span className="text-gradient">Servicios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Especialistas certificados en reparación y mantenimiento de todos
            los electrodomésticos del hogar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="relative rounded-2xl overflow-hidden shadow-medium group hover:shadow-strong transition-all duration-300 animate-fade-in-up h-[500px] sm:h-[550px] lg:h-[600px]"
              style={{ animationDelay: `${index * 100}ms`, textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
            >
              {/* Imagen de fondo - Ocupa todo el contenedor */}
              <div className="relative flex justify-center items-center w-50 h-3/4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-auto h-auto object group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback a placeholder si la imagen no carga
                    const target = e.target as HTMLImageElement
                    target.src = '/placeholder.svg'
                  }}
                />
              </div>

              {/* Gradiente overlay desde la mitad hacia abajo - Más transparente arriba */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent from-0% via-transparent via-[40%] to-black/70 to-100%"></div>

              {/* Contenido superpuesto sobre la imagen */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                {/* Título */}
                <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">
                  {service.title}
                </h3>

                {/* Descripción */}
                <p className="text-white/90 mb-4 text-sm leading-relaxed drop-shadow-md">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map(feature => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm text-white/95"
                    >
                      <CheckCircle className="h-4 w-4 text-white flex-shrink-0 drop-shadow-md" />
                      <span className="drop-shadow-md">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Botón */}
                <button 
                  className="w-full bg-blue-600 backdrop-blur-sm text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-500 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-lg"
                  onClick={() => handleServiceClick(getApplianceValue(service.title))}
                >
                  Solicitar servicio
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-card border border-border rounded-2xl p-8 max-w-2xl mx-auto">
            <Wrench className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">
              ¿No encuentras tu electrodoméstico?
            </h3>
            <p className="text-muted-foreground mb-6">
              También reparamos lavavajillas, ventiladores, purificadores de
              aire y más equipos del hogar
            </p>
            <button 
              className="btn-hero"
              onClick={() => handleServiceClick('otro')}
            >
              Consultar otros servicios
            </button>
          </div>
        </div>
      </div>

      <ServiceRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialAppliance={selectedAppliance}
      />
    </section>
  )
}
