import { useState } from 'react'
import {
  Wrench,
  Calendar,
  FileText,
  User,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  Phone,
  Navigation,
  Camera,
  Upload,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'

const TechnicianDashboard = () => {
  const [activeTab, setActiveTab] = useState('orders')

  // Mock data
  const assignedOrders = [
    {
      id: '#TR-001',
      customer: 'María González',
      address: 'Calle Reforma 123, Col. Centro',
      phone: '+52 55 1234 5678',
      appliance: 'neveras Samsung',
      problem: 'No enfría correctamente',
      status: 'assigned',
      priority: 'high',
      scheduledTime: '14:00 - 16:00',
      date: '2024-01-22',
    },
    {
      id: '#TR-002',
      customer: 'Carlos Rodríguez',
      address: 'Av. Insurgentes Sur 456',
      phone: '+52 55 8765 4321',
      appliance: 'Aire Acondicionado',
      problem: 'No enciende',
      status: 'in-progress',
      priority: 'medium',
      scheduledTime: '10:00 - 12:00',
      date: '2024-01-22',
    },
    {
      id: '#TR-003',
      customer: 'Ana Martínez',
      address: 'Calle Juárez 789, Col. Roma Norte',
      phone: '+52 55 5555 5555',
      appliance: 'Lavadora LG',
      problem: 'No centrifuga',
      status: 'pending',
      priority: 'low',
      scheduledTime: '16:00 - 18:00',
      date: '2024-01-23',
    },
  ]

  const getStatusBadge = (status: string) => {
    const variants = {
      assigned: {
        label: 'Asignado',
        className: 'bg-primary text-primary-foreground',
      },
      'in-progress': {
        label: 'En Progreso',
        className: 'bg-secondary text-secondary-foreground',
      },
      completed: {
        label: 'Completado',
        className: 'bg-success text-success-foreground',
      },
      pending: {
        label: 'Pendiente',
        className: 'bg-muted text-muted-foreground',
      },
    }
    const config = variants[status as keyof typeof variants]
    return <Badge className={config.className}>{config.label}</Badge>
  }

  const getPriorityBadge = (priority: string) => {
    const variants = {
      high: {
        label: 'Alta',
        className: 'bg-destructive text-destructive-foreground',
      },
      medium: {
        label: 'Media',
        className: 'bg-secondary text-secondary-foreground',
      },
      low: { label: 'Baja', className: 'bg-muted text-muted-foreground' },
    }
    const config = variants[priority as keyof typeof variants]
    return (
      <Badge variant="outline" className={config.className}>
        {config.label}
      </Badge>
    )
  }

  const sidebarItems = [
    { id: 'orders', label: 'Órdenes Asignadas', icon: FileText },
    { id: 'schedule', label: 'Mi Agenda', icon: Calendar },
    { id: 'inventory', label: 'Inventario', icon: Wrench },
    { id: 'profile', label: 'Mi Perfil', icon: User },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-card border-r border-border">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-gradient-to-br from-primary to-primary-hover p-2 rounded-lg">
                <Wrench className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <span className="font-bold text-lg text-gradient">
                  TechRepair Pro
                </span>
                <p className="text-xs text-muted-foreground">Panel Técnico</p>
              </div>
            </div>

            <nav className="space-y-2">
              {sidebarItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    activeTab === item.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="container-wide">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Panel de Técnico</h1>
              <p className="text-muted-foreground">
                Gestiona tus órdenes de trabajo y agenda
              </p>
            </div>

            {activeTab === 'orders' && (
              <div className="space-y-6">
                {/* Stats Cards */}
                <div className="grid md:grid-cols-4 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold">8</p>
                          <p className="text-sm text-muted-foreground">
                            Órdenes Hoy
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-success-light rounded-full flex items-center justify-center">
                          <CheckCircle className="h-6 w-6 text-success" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold">5</p>
                          <p className="text-sm text-muted-foreground">
                            Completadas
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-secondary-light rounded-full flex items-center justify-center">
                          <Clock className="h-6 w-6 text-secondary" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold">2</p>
                          <p className="text-sm text-muted-foreground">
                            En Progreso
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-destructive-light rounded-full flex items-center justify-center">
                          <AlertCircle className="h-6 w-6 text-destructive" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold">1</p>
                          <p className="text-sm text-muted-foreground">
                            Urgente
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Orders List */}
                <Card>
                  <CardHeader>
                    <CardTitle>Órdenes Asignadas</CardTitle>
                    <CardDescription>
                      Servicios programados para hoy y próximos días
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {assignedOrders.map(order => (
                        <div
                          key={order.id}
                          className="border border-border rounded-xl p-6 space-y-4"
                        >
                          <div className="flex items-start justify-between">
                            <div className="space-y-1">
                              <div className="flex items-center gap-3">
                                <h3 className="font-semibold text-lg">
                                  {order.id}
                                </h3>
                                {getStatusBadge(order.status)}
                                {getPriorityBadge(order.priority)}
                              </div>
                              <p className="text-muted-foreground">
                                {order.customer}
                              </p>
                            </div>
                            <div className="text-right text-sm">
                              <p className="font-medium">{order.date}</p>
                              <p className="text-muted-foreground">
                                {order.scheduledTime}
                              </p>
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-medium mb-2">
                                Detalles del Servicio
                              </h4>
                              <div className="space-y-1 text-sm">
                                <p>
                                  <strong>Electrodoméstico:</strong>{' '}
                                  {order.appliance}
                                </p>
                                <p>
                                  <strong>Problema:</strong> {order.problem}
                                </p>
                              </div>
                            </div>
                            <div>
                              <h4 className="font-medium mb-2">
                                Información del Cliente
                              </h4>
                              <div className="space-y-1 text-sm">
                                <div className="flex items-center gap-2">
                                  <MapPin className="h-4 w-4" />
                                  <span>{order.address}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Phone className="h-4 w-4" />
                                  <span>{order.phone}</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex items-center gap-2"
                            >
                              <Navigation className="h-4 w-4" />
                              Navegar
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex items-center gap-2"
                            >
                              <Phone className="h-4 w-4" />
                              Llamar
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex items-center gap-2"
                            >
                              <Camera className="h-4 w-4" />
                              Fotos
                            </Button>
                            {order.status === 'assigned' && (
                              <Button size="sm" className="btn-hero">
                                Comenzar Servicio
                              </Button>
                            )}
                            {order.status === 'in-progress' && (
                              <Button
                                size="sm"
                                className="bg-success text-success-foreground"
                              >
                                Completar
                              </Button>
                            )}
                          </div>

                          {order.status === 'in-progress' && (
                            <div className="bg-muted rounded-lg p-4">
                              <h4 className="font-medium mb-2">
                                Actualizar Estado
                              </h4>
                              <Textarea
                                placeholder="Describe el progreso del trabajo o notas importantes..."
                                className="mb-3"
                              />
                              <div className="flex gap-3">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="flex items-center gap-2"
                                >
                                  <Upload className="h-4 w-4" />
                                  Subir Fotos
                                </Button>
                                <Button size="sm" className="btn-hero">
                                  Actualizar Estado
                                </Button>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Other tabs content would go here */}
            {activeTab !== 'orders' && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  Esta sección está en desarrollo
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

export default TechnicianDashboard
