import { useState } from 'react'
import { Star, Shield, Clock, Phone, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ServiceRequestModal } from './ServiceRequestModal'
import heroImage from '@/assets/hero-technician.jpg'

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container-wide py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Reparamos tus</span>
                <br />
                <span className="text-gradient">Electrodomésticos</span>
                <br />
                <span className="text-foreground">en Casa</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Técnicos certificados, garantía de 6 meses y servicio 24/7. La
                solución más confiable para el cuidado de tus electrodomésticos.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-success" />
                <span className="text-sm font-medium">Garantía 6 meses</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-success" />
                <span className="text-sm font-medium">+5000 clientes</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-success" />
                <span className="text-sm font-medium">Servicio 24/7</span>
              </div>
            </div>

            {/* Quick Form */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-medium">
              <h3 className="text-lg font-semibold mb-4">
                Solicita tu servicio ahora
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Tipo de electrodoméstico" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="neveras">neveras</SelectItem>
                    <SelectItem value="lavadora">Lavadora</SelectItem>
                    <SelectItem value="aire">Aire Acondicionado</SelectItem>
                    <SelectItem value="microondas">Microondas</SelectItem>
                    <SelectItem value="estufa">Estufa</SelectItem>
                    <SelectItem value="secadora">Secadora</SelectItem>
                  </SelectContent>
                </Select>
                <Input placeholder="Código postal" />
              </div>
              <Button
                className="btn-hero w-full mt-4"
                onClick={() => setIsModalOpen(true)}
              >
                Solicitar Servicio Técnico
              </Button>
            </div>

            {/* Contact Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Llamar Ahora
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-float">
            <div className="relative">
              <img
                src={heroImage}
                alt="Técnico profesional de TechRepair Pro"
                className="rounded-2xl shadow-strong w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      <ServiceRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  )
}
