import { ArrowRight, Wrench, CheckCircle } from 'lucide-react'
import refrigeratorIcon from '@/assets/refrigerator-icon.jpg'
import washingMachineIcon from '@/assets/washing-machine-icon.jpg'
import acIcon from '@/assets/ac-icon.jpg'
import microwaveIcon from '@/assets/microwave-icon.jpg'
import stoveIcon from '@/assets/stove-icon.jpg'

const services = [
  {
    title: 'nevecones',
    description:
      'Reparación de sistemas de enfriamiento, termostatos, compresores y más',
    icon: refrigeratorIcon,
    features: [
      'No enfría',
      'Ruidos extraños',
      'Fugas de agua',
      'Problemas eléctricos',
    ],
  },
  {
    title: 'Lavadoras',
    description:
      'Servicio completo para lavadoras automáticas y semiautomáticas',
    icon: washingMachineIcon,
    features: ['No centrifuga', 'No llena agua', 'Fugas', 'Problemas motor'],
  },
  {
    title: 'Aires Acondicionados',
    description:
      'Mantenimiento, limpieza y reparación de equipos de climatización',
    icon: acIcon,
    features: [
      'No enfría',
      'Mantenimiento',
      'Carga de gas',
      'Limpieza profunda',
    ],
  },
  {
    title: 'Microondas',
    description:
      'Reparación de magnetrón, platos giratorios y sistemas eléctricos',
    icon: microwaveIcon,
    features: ['No calienta', 'Plato no gira', 'Puerta', 'Panel control'],
  },
  {
    title: 'Estufas',
    description:
      'Reparación de hornos, quemadores y sistemas de gas o eléctricos',
    icon: stoveIcon,
    features: ['Quemadores', 'Horno', 'Válvulas gas', 'Ignición'],
  },
  {
    title: 'Secadoras',
    description: 'Servicios para secadoras de ropa eléctricas y a gas',
    icon: washingMachineIcon,
    features: ['No seca', 'No calienta', 'Ruidos', 'Problemas tambor'],
  },
]

export function ServicesSection() {
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-service group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-primary-light p-3 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
              </div>

              <div className="space-y-2 mb-6">
                {service.features.map(feature => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-sm"
                  >
                    <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <button className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300">
                  Solicitar servicio
                  <ArrowRight className="h-4 w-4" />
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
            <button className="btn-hero">Consultar otros servicios</button>
          </div>
        </div>
      </div>
    </section>
  )
}
