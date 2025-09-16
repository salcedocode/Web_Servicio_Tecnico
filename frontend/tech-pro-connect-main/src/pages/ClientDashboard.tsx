import { useState } from 'react'
import {
  Home,
  Wrench,
  FileText,
  User,
  Plus,
  Calendar,
  CheckCircle,
  Clock,
  AlertCircle,
  ChevronRight,
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

const ClientDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')

  // Mock data
  const recentOrders = [
    {
      id: '#TR-001',
      appliance: 'neveras Samsung',
      status: 'completed',
      date: '2024-01-15',
      technician: 'José García',
    },
    {
      id: '#TR-002',
      appliance: 'Lavadora LG',
      status: 'in-progress',
      date: '2024-01-20',
      technician: 'María López',
    },
  ]

  const myAppliances = [
    {
      id: 1,
      type: 'neveras',
      brand: 'Samsung',
      model: 'RF28R7351SG',
      lastService: '2024-01-15',
      nextMaintenance: '2024-07-15',
    },
    {
      id: 2,
      type: 'Lavadora',
      brand: 'LG',
      model: 'WM3900HWA',
      lastService: '2024-01-20',
      nextMaintenance: '2024-07-20',
    },
  ]

  const getStatusBadge = (status: string) => {
    const variants = {
      completed: {
        variant: 'default' as const,
        label: 'Completado',
        className: 'bg-success text-success-foreground',
      },
      'in-progress': {
        variant: 'secondary' as const,
        label: 'En Progreso',
        className: 'bg-primary text-primary-foreground',
      },
      pending: {
        variant: 'outline' as const,
        label: 'Pendiente',
        className: 'bg-secondary text-secondary-foreground',
      },
      cancelled: {
        variant: 'destructive' as const,
        label: 'Cancelado',
        className: '',
      },
    }
    const config = variants[status as keyof typeof variants]
    return <Badge className={config.className}>{config.label}</Badge>
  }

  const sidebarItems = [
    { id: 'overview', label: 'Dashboard', icon: Home },
    { id: 'appliances', label: 'Mis Electrodomésticos', icon: Wrench },
    { id: 'orders', label: 'Mis Órdenes', icon: FileText },
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
              <span className="font-bold text-xl text-gradient">
                TechRepair Pro
              </span>
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
              <h1 className="text-3xl font-bold mb-2">Panel de Cliente</h1>
              <p className="text-muted-foreground">
                Gestiona tus electrodomésticos y servicios técnicos
              </p>
            </div>

            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Stats Cards */}
                <div className="grid md:grid-cols-4 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center">
                          <Wrench className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold">5</p>
                          <p className="text-sm text-muted-foreground">
                            Electrodomésticos
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
                          <p className="text-2xl font-bold">12</p>
                          <p className="text-sm text-muted-foreground">
                            Servicios Completados
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center">
                          <Clock className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold">1</p>
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
                        <div className="w-12 h-12 bg-secondary-light rounded-full flex items-center justify-center">
                          <Calendar className="h-6 w-6 text-secondary" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold">2</p>
                          <p className="text-sm text-muted-foreground">
                            Próximos Mantenimientos
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Orders */}
                <Card>
                  <CardHeader>
                    <CardTitle>Órdenes Recientes</CardTitle>
                    <CardDescription>
                      Últimos servicios técnicos solicitados
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentOrders.map(order => (
                        <div
                          key={order.id}
                          className="flex items-center justify-between p-4 border border-border rounded-lg"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center">
                              <Wrench className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="font-medium">{order.appliance}</p>
                              <p className="text-sm text-muted-foreground">
                                Técnico: {order.technician}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            {getStatusBadge(order.status)}
                            <ChevronRight className="h-5 w-5 text-muted-foreground" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Solicitar Nuevo Servicio</CardTitle>
                      <CardDescription>
                        ¿Tienes un problema con algún electrodoméstico?
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="btn-hero w-full">
                        <Plus className="h-4 w-4 mr-2" />
                        Solicitar Servicio
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Agregar Electrodoméstico</CardTitle>
                      <CardDescription>
                        Registra un nuevo electrodoméstico para hacer
                        seguimiento
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full">
                        <Plus className="h-4 w-4 mr-2" />
                        Agregar Electrodoméstico
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === 'appliances' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Mis Electrodomésticos</h2>
                  <Button className="btn-hero">
                    <Plus className="h-4 w-4 mr-2" />
                    Agregar Electrodoméstico
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {myAppliances.map(appliance => (
                    <Card key={appliance.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="font-semibold text-lg">
                              {appliance.type}
                            </h3>
                            <p className="text-muted-foreground">
                              {appliance.brand} {appliance.model}
                            </p>
                          </div>
                          <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center">
                            <Wrench className="h-6 w-6 text-primary" />
                          </div>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Último Servicio:
                            </span>
                            <span>{appliance.lastService}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Próximo Mantenimiento:
                            </span>
                            <span className="text-primary font-medium">
                              {appliance.nextMaintenance}
                            </span>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-border">
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full"
                          >
                            Ver Historial
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Other tabs content would go here */}
            {activeTab !== 'overview' && activeTab !== 'appliances' && (
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

export default ClientDashboard
