import { useState } from "react";
import { Phone, UserCheck, Wrench, CheckCircle, ArrowRight } from "lucide-react";
import { ServiceRequestModal } from "./ServiceRequestModal";

const steps = [
  {
    number: "01",
    title: "Solicita",
    description: "Contáctanos por teléfono, WhatsApp o llena nuestro formulario online. Describe el problema de tu electrodoméstico.",
    icon: Phone,
    details: ["Atención Lun/Sab", "Respuesta inmediata", "Sin compromiso"]
  },
  {
    number: "02", 
    title: "Asignamos",
    description: "Asignamos el técnico más cercano a tu zona. Te confirmamos disponibilidad de la fecha y hora de la visita solicitada.",
    icon: UserCheck,
    details: ["Técnicos certificados", "Zona cercana", "Confirmación rápida"]
  },
  {
    number: "03",
    title: "Reparamos", 
    description: "Nuestro técnico diagnostica y valida la reparación tu electrodoméstico con repuestos originales y garantía.",
    icon: Wrench,
    details: ["Visita Tecnica aplica costo", "Repuestos originales", "Garantía 3 meses"]
  }
];

export function HowItWorksSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container-wide">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold">
            <span className="text-gradient">Proceso</span>{" "}
            <span className="text-foreground">de Atención</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proceso simple y confiable en solo 3 pasos para solucionar los problemas de tus electrodomésticos
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-full max-w-4xl h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 -z-10"></div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              // Definir los 3 tonos de azul: suave (izquierda), intermedio (centro), oscuro (derecha)
              const circleColors = [
                'bg-gradient-to-br from-blue-300 to-blue-400', // Azul más suave - paso 1
                'bg-gradient-to-br from-blue-500 to-blue-600', // Azul intermedio - paso 2
                'bg-gradient-to-br from-blue-700 to-blue-800', // Azul más oscuro - paso 3
              ]
              
              return (
                <div key={step.number} className="relative text-center group">
                  {/* Step Number Circle */}
                  <div className="relative mb-4">
                    <div className={`w-32 h-32 mx-auto ${circleColors[index]} rounded-full flex items-center justify-center shadow-primary group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                    </div>
                    
                    {/* Icon - Debajo del lado derecho, invadiendo levemente el círculo del step */}
                    <div className="absolute bottom-0 left-60 transform -translate-x-5 -translate-y-2 w-12 h-12 bg-card rounded-full flex items-center justify-center shadow-medium" >
                      <step.icon className="h-5 w-5 text-primary" />
                    </div>
                    
                    {/* Arrow to next step */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-6 xl:-right-8 transform -translate-y-1/2">
                        <ArrowRight className="h-12 w-12 text-primary" />
                      </div>
                    )}
                  </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2 pt-2">
                    {step.details.map((detail) => (
                      <div key={detail} className="flex items-center justify-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                        <span className="font-medium">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              )
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-primary/5 via-background to-primary/5 border border-primary/10 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              ¿Listo para reparar tu electrodoméstico?
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Únete a la lista de clientes satisfechos que confían en nuestro servicio profesional
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="btn-hero"
                onClick={() => setIsModalOpen(true)}
              >
                Solicitar Servicio Ahora
              </button>
              <button className="btn-secondary">
                Ver Precios
              </button>
            </div>
          </div>
        </div>
      </div>

      <ServiceRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}