import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Wrench, CheckCircle } from 'lucide-react'

interface ServiceInfo {
  name: string
  value: string
  description: string
  commonIssues: string[]
  avgPrice: string
  warranty: string
  serviceTypes: string[]
}

const serviceInfoData: Record<string, ServiceInfo> = {
  neveras: {
    name: 'Neveras-Nevecones',
    value: 'neveras',
    description: 'Reparación profesional de sistemas de enfriamiento, termostatos y compresores',
    commonIssues: ['No enfría correctamente', 'Ruidos extraños', 'Fugas de agua', 'Problemas eléctricos'],
    avgPrice: '$80.000 - $150.000',
    warranty: '3 meses',
    serviceTypes: ['Reparación', 'Mantenimiento', 'Instalación'],
  },
  lavadora: {
    name: 'Lavadoras-Secadoras',
    value: 'lavadora',
    description: 'Servicio completo para lavadoras y secadoras automáticas y semiautomáticas',
    commonIssues: ['No centrifuga', 'No llena agua', 'Fugas', 'Problemas de motor'],
    avgPrice: '$60.000 - $120.000',
    warranty: '3 meses',
    serviceTypes: ['Reparación', 'Mantenimiento', 'Instalación'],
  },
  calentadores: {
    name: 'Calentadores',
    value: 'calentadores',
    description: 'Reparación y mantenimiento de calentadores de agua eléctricos y a gas',
    commonIssues: ['No calienta', 'Fugas de agua', 'Problemas eléctricos', 'Mantenimiento preventivo'],
    avgPrice: '$70.000 - $130.000',
    warranty: '3 meses',
    serviceTypes: ['Reparación', 'Mantenimiento', 'Instalación'],
  },
  estufa: {
    name: 'Estufas-Hornos',
    value: 'estufa',
    description: 'Reparación de hornos, quemadores y sistemas de gas o eléctricos',
    commonIssues: ['Quemadores no funcionan', 'Horno no calienta', 'Válvulas de gas', 'Problemas de ignición'],
    avgPrice: '$50.000 - $100.000',
    warranty: '3 meses',
    serviceTypes: ['Reparación', 'Mantenimiento', 'Instalación'],
  },
  microondas: {
    name: 'Microondas',
    value: 'microondas',
    description: 'Reparación de magnetrón, platos giratorios y sistemas eléctricos',
    commonIssues: ['No calienta', 'Plato no gira', 'Problemas de puerta', 'Panel de control'],
    avgPrice: '$40.000 - $90.000',
    warranty: '3 meses',
    serviceTypes: ['Reparación', 'Mantenimiento'],
  },
  televisores: {
    name: 'Televisores LCD',
    value: 'televisores',
    description: 'Reparación de pantallas LCD, sistemas de imagen y audio',
    commonIssues: ['Sin imagen', 'Sin sonido', 'Problemas de fuente de poder', 'Panel dañado'],
    avgPrice: '$100.000 - $200.000',
    warranty: '3 meses',
    serviceTypes: ['Reparación', 'Mantenimiento'],
  },
}

interface ServiceInfoModalProps {
  isOpen: boolean
  onClose: () => void
  serviceValue: string | null
  onRequestService: (serviceValue: string) => void
}

export function ServiceInfoModal({
  isOpen,
  onClose,
  serviceValue,
  onRequestService,
}: ServiceInfoModalProps) {
  if (!serviceValue || !serviceInfoData[serviceValue]) {
    return null
  }

  const service = serviceInfoData[serviceValue]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Wrench className="h-5 w-5 text-primary" />
            {service.name}
          </DialogTitle>
          <DialogDescription className="text-base">
            {service.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Problemas Comunes */}
          <div>
            <h5 className="font-semibold mb-2 flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              Problemas Comunes:
            </h5>
            <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
              {service.commonIssues.map((issue, idx) => (
                <li key={idx}>{issue}</li>
              ))}
            </ul>
          </div>

          {/* Información de Precio y Garantía */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-primary-light/10 rounded-lg border border-primary/20">
            <div>
              <strong className="text-sm font-semibold block mb-1">Precio Estimado:</strong>
              <p className="text-primary font-semibold">{service.avgPrice}</p>
            </div>
            <div>
              <strong className="text-sm font-semibold block mb-1">Garantía:</strong>
              <p className="text-foreground font-semibold">{service.warranty}</p>
            </div>
          </div>

          {/* Tipos de Servicio */}
          <div>
            <h5 className="font-semibold mb-2 text-sm">Tipos de Servicio Disponibles:</h5>
            <div className="flex flex-wrap gap-2">
              {service.serviceTypes.map((type, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-primary-light text-primary px-3 py-1.5 rounded-full font-medium"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>

          {/* Botón de Acción */}
          <Button
            className="w-full mt-4"
            onClick={() => {
              onClose()
              onRequestService(service.value)
            }}
          >
            Solicitar Servicio para {service.name}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

