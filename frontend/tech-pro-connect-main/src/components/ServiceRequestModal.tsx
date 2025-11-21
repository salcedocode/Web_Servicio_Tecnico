import { useState, useEffect } from 'react'
import {
  Phone,
  MessageCircle,
  Mail,
  User,
  Wrench,
  Calendar,
  Loader2,
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
import { useToast } from '@/hooks/use-toast'
import { submitServiceRequest, sendWhatsAppMessage } from '@/lib/api'

interface ServiceRequestModalProps {
  isOpen: boolean
  onClose: () => void
  initialAppliance?: string
}

export function ServiceRequestModal({
  isOpen,
  onClose,
  initialAppliance = '',
}: ServiceRequestModalProps) {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    appliance: initialAppliance,
    brand: '',
    model: '',
    problem: '',
    preferredDate: '',
    preferredTime: '',
  })

  // Actualizar appliance cuando cambie initialAppliance
  useEffect(() => {
    if (initialAppliance && isOpen) {
      setFormData(prev => ({ ...prev, appliance: initialAppliance }))
    }
  }, [initialAppliance, isOpen])

  // Limpiar formulario cuando se cierra el modal
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        name: '',
        phone: '',
        email: '',
        address: '',
        appliance: initialAppliance || '',
        brand: '',
        model: '',
        problem: '',
        preferredDate: '',
        preferredTime: '',
      })
      setIsSubmitting(false)
    }
  }, [isOpen, initialAppliance])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Validar campos requeridos
      if (!formData.name || !formData.phone || !formData.address || !formData.appliance || !formData.problem) {
        toast({
          title: 'Error de validación',
          description: 'Por favor completa todos los campos requeridos',
          variant: 'destructive',
        })
        setIsSubmitting(false)
        return
      }

      // Enviar a la base de datos
      const dbResponse = await submitServiceRequest(formData)
      
      // Enviar a WhatsApp
      await sendWhatsAppMessage(formData)

      toast({
        title: 'Solicitud enviada',
        description: 'Tu solicitud ha sido enviada exitosamente. Te contactaremos pronto.',
      })

      // Limpiar formulario (mantener initialAppliance si existe)
      setFormData({
        name: '',
        phone: '',
        email: '',
        address: '',
        appliance: initialAppliance || '',
        brand: '',
        model: '',
        problem: '',
        preferredDate: '',
        preferredTime: '',
      })

      onClose()
    } catch (error) {
      console.error('Error al enviar solicitud:', error)
      toast({
        title: 'Error',
        description: 'Hubo un problema al enviar tu solicitud. Por favor intenta nuevamente.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
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
                <Label htmlFor="name">
                  Nombre completo <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  placeholder="Ej: Juan Pérez García"
                  value={formData.name}
                  onChange={e =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">
                  Teléfono <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Ej: 300 123 4567 o +57 300 123 4567"
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
                  placeholder="Ej: juan.perez@email.com"
                  value={formData.email}
                  onChange={e =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">
                  Dirección completa <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="address"
                  placeholder="Ej: Calle 123 #45-67, Barrio Centro, Ciudad"
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
                <Label htmlFor="appliance">
                  Tipo de electrodoméstico <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={formData.appliance}
                  onValueChange={value =>
                    setFormData({ ...formData, appliance: value })
                  }
                  required
                >
                  <SelectTrigger id="appliance">
                    <SelectValue placeholder="Ej: Nevera, Lavadora, Microondas..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="neveras">Neveras-Nevecones</SelectItem>
                    <SelectItem value="lavadora">Lavadoras-Secadoras</SelectItem>
                    <SelectItem value="calentadores">Calentadores</SelectItem>
                    <SelectItem value="estufa">Estufas-Hornos</SelectItem>
                    <SelectItem value="microondas">Microondas</SelectItem>
                    <SelectItem value="televisores">Televisores LCD</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="brand">Marca</Label>
                <Input
                  id="brand"
                  placeholder="Ej: Samsung, LG, Whirlpool, Mabe"
                  value={formData.brand}
                  onChange={e =>
                    setFormData({ ...formData, brand: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="model">Modelo (si lo conoce)</Label>
                <Input
                  id="model"
                  placeholder="Ej: RF28R7351SG, WM3900HWA"
                  value={formData.model}
                  onChange={e =>
                    setFormData({ ...formData, model: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="problem">
                  Descripción del problema <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="problem"
                  placeholder="Ej: La nevera no enfría, hace ruidos extraños y la luz no se apaga. El problema comenzó hace 3 días."
                  value={formData.problem}
                  onChange={e =>
                    setFormData({ ...formData, problem: e.target.value })
                  }
                  required
                  rows={4}
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
                <Label htmlFor="preferredDate">Fecha preferida para la visita</Label>
                <Input
                  id="preferredDate"
                  type="date"
                  placeholder="Ej: 15/03/2024"
                  value={formData.preferredDate}
                  onChange={e =>
                    setFormData({ ...formData, preferredDate: e.target.value })
                  }
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="preferredTime">Hora preferida para la visita</Label>
                <Select
                  value={formData.preferredTime}
                  onValueChange={value =>
                    setFormData({ ...formData, preferredTime: value })
                  }
                >
                  <SelectTrigger id="preferredTime">
                    <SelectValue placeholder="Ej: Mañana 8:00 AM - 12:00 PM" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="manana-temprano">
                      Mañana Temprano (8:00 AM - 10:00 AM)
                    </SelectItem>
                    <SelectItem value="manana-tarde">
                      Mañana Tarde (10:00 AM - 12:00 PM)
                    </SelectItem>
                    <SelectItem value="tarde-temprano">
                      Tarde Temprano (12:00 PM - 3:00 PM)
                    </SelectItem>
                    <SelectItem value="tarde-tarde">
                      Tarde Tarde (3:00 PM - 6:00 PM)
                    </SelectItem>
                    <SelectItem value="noche">
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
              disabled={isSubmitting}
            >
              Cancelar
            </Button>
            <Button 
              type="submit" 
              className="btn-hero flex-1"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                'Enviar Solicitud'
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
