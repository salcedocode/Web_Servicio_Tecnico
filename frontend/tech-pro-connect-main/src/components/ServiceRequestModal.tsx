import { useState } from 'react'
import {
  X,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  User,
  Wrench,
  Calendar,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

interface ServiceRequestModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ServiceRequestModal({
  isOpen,
  onClose,
}: ServiceRequestModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    appliance: '',
    brand: '',
    model: '',
    problem: '',
    preferredDate: '',
    preferredTime: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Service request:', formData)
    // Show success message and close modal
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Wrench className="h-5 w-5 text-primary" />
            Solicitar Servicio Técnico
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <User className="h-4 w-4" />
              Información de Contacto
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre completo *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={e =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={e =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={e =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Dirección completa *</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={e =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  required
                />
              </div>
            </div>
          </div>

          {/* Appliance Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <Wrench className="h-4 w-4" />
              Información del Electrodoméstico
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="appliance">Tipo de electrodoméstico *</Label>
                <Select
                  value={formData.appliance}
                  onValueChange={value =>
                    setFormData({ ...formData, appliance: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="neveras">neveras</SelectItem>
                    <SelectItem value="lavadora">Lavadora</SelectItem>
                    <SelectItem value="aire">Aire Acondicionado</SelectItem>
                    <SelectItem value="microondas">Microondas</SelectItem>
                    <SelectItem value="estufa">Estufa</SelectItem>
                    <SelectItem value="secadora">Secadora</SelectItem>
                    <SelectItem value="lavavajillas">Lavavajillas</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="brand">Marca</Label>
                <Input
                  id="brand"
                  value={formData.brand}
                  onChange={e =>
                    setFormData({ ...formData, brand: e.target.value })
                  }
                  placeholder="Ej: Samsung, LG, Whirlpool"
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="model">Modelo (si lo conoce)</Label>
                <Input
                  id="model"
                  value={formData.model}
                  onChange={e =>
                    setFormData({ ...formData, model: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="problem">Descripción del problema *</Label>
                <Textarea
                  id="problem"
                  value={formData.problem}
                  onChange={e =>
                    setFormData({ ...formData, problem: e.target.value })
                  }
                  placeholder="Describa el problema que presenta su electrodoméstico"
                  required
                />
              </div>
            </div>
          </div>

          {/* Scheduling */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Programar Visita
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="preferredDate">Fecha preferida</Label>
                <Input
                  id="preferredDate"
                  type="date"
                  value={formData.preferredDate}
                  onChange={e =>
                    setFormData({ ...formData, preferredDate: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="preferredTime">Hora preferida</Label>
                <Select
                  value={formData.preferredTime}
                  onValueChange={value =>
                    setFormData({ ...formData, preferredTime: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar horario" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">
                      Mañana (8:00 AM - 12:00 PM)
                    </SelectItem>
                    <SelectItem value="afternoon">
                      Tarde (12:00 PM - 6:00 PM)
                    </SelectItem>
                    <SelectItem value="evening">
                      Noche (6:00 PM - 9:00 PM)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Contact Preference */}
          <div className="bg-primary-light rounded-lg p-4">
            <h4 className="font-medium mb-3">
              ¿Cómo prefieres que te contactemos?
            </h4>
            <div className="flex flex-wrap gap-3">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <Phone className="h-4 w-4" />
                Llamada
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                Email
              </Button>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancelar
            </Button>
            <Button type="submit" className="btn-hero flex-1">
              Enviar Solicitud
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
