import { Phone, UserCheck, Wrench, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Solicita",
    description: "Contáctanos por teléfono, WhatsApp o llena nuestro formulario online. Describe el problema de tu electrodoméstico.",
    icon: Phone,
    details: ["Atención 24/7", "Respuesta inmediata", "Sin compromiso"]
  },
  {
    number: "02", 
    title: "Asignamos",
    description: "Asignamos el técnico certificado más cercano a tu zona. Te confirmamos fecha y hora de la visita.",
    icon: UserCheck,
    details: ["Técnicos certificados", "Zona cercana", "Confirmación rápida"]
  },
  {
    number: "03",
    title: "Reparamos", 
    description: "Nuestro técnico diagnostica y repara tu electrodoméstico con repuestos originales y garantía.",
    icon: Wrench,
    details: ["Diagnóstico gratuito", "Repuestos originales", "Garantía 6 meses"]
  }
];

export function HowItWorksSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container-wide">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold">
            <span className="text-gradient">Cómo</span>{" "}
            <span className="text-foreground">Funciona</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proceso simple y confiable en solo 3 pasos para solucionar los problemas de tus electrodomésticos
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-full max-w-4xl h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 -z-10"></div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={step.number} className="relative text-center group">
                {/* Step Number Circle */}
                <div className="relative mb-8">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-primary-hover rounded-full flex items-center justify-center shadow-primary group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-primary-foreground">{step.number}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-card border-2 border-background rounded-full flex items-center justify-center shadow-medium">
                    <step.icon className="h-5 w-5 text-primary" />
                  </div>
                  
                  {/* Arrow to next step */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-6 xl:-right-8 transform -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-primary" />
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
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-primary/5 via-background to-primary/5 border border-primary/10 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              ¿Listo para reparar tu electrodoméstico?
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Únete a más de 5,000 clientes satisfechos que confían en nuestro servicio profesional
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-hero">
                Solicitar Servicio Ahora
              </button>
              <button className="btn-secondary">
                Ver Precios
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}