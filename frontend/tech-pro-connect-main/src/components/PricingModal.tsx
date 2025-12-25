import { DollarSign } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { ServiceRequestModal } from './ServiceRequestModal'
import { useState } from 'react'

interface PricingModalProps {
  isOpen: boolean
  onClose: () => void
}

export function PricingModal({ isOpen, onClose }: PricingModalProps) {
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false)

  const pricingPlans = [
    {
      name: 'Visita Técnica',
      price: 'Desde $30.000',
      description: 'Diagnóstico profesional de tu electrodoméstico',
      features: [
        'Diagnóstico completo',
        'Evaluación técnica detallada',
        'Presupuesto sin compromiso',
        'Válido por 30 días',
      ],
      popular: false,
    },
    {
      name: 'Reparación Básica',
      price: 'Desde $80.000',
      description: 'Reparaciones simples y cambio de piezas básicas',
      features: [
        'Reparación incluida',
        'Piezas básicas incluidas',
        'Garantía 3 meses',
        'Servicio a domicilio',
      ],
      popular: true,
    },
    {
      name: 'Reparación Completa',
      price: 'Desde $150.000',
      description: 'Reparaciones complejas con repuestos originales',
      features: [
        'Reparación completa',
        'Repuestos originales',
        'Garantía 6 meses',
        'Mantenimiento incluido',
        'Servicio prioritario',
      ],
      popular: false,
    },
  ]

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-2xl">
              Nuestros Precios
            </DialogTitle>
            <DialogDescription className="text-base">
              Precios transparentes y competitivos. El diagnóstico tiene un costo que se descuenta de la reparación si decides continuar con nosotros.
            </DialogDescription>
          </DialogHeader>

          <div className="py-6">
            <div className="grid md:grid-cols-3 gap-6">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative rounded-xl border-2 p-6 ${
                    plan.popular
                      ? 'border-primary bg-primary-light/10'
                      : 'border-border bg-card'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                        Más Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <div className="text-3xl font-bold text-primary mb-2">
                      {plan.price}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {plan.description}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <svg
                          className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="w-full"
                    variant={plan.popular ? 'default' : 'outline'}
                    onClick={() => {
                      onClose()
                      setIsServiceModalOpen(true)
                    }}
                  >
                    Solicitar Servicio
                  </Button>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-primary-light/10 rounded-lg border border-primary/20">
              <h4 className="font-semibold mb-2">Información importante:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Los precios son estimados y pueden variar según el diagnóstico</li>
                <li>• El costo de la visita técnica se descuenta si contratas el servicio</li>
                <li>• Todos nuestros servicios incluyen garantía</li>
                <li>• Aceptamos efectivo, transferencia y tarjetas de crédito/débito</li>
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <ServiceRequestModal
        isOpen={isServiceModalOpen}
        onClose={() => setIsServiceModalOpen(false)}
      />
    </>
  )
}

