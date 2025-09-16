import { useState } from 'react'
import {
  BarChart3,
  Users,
  Wrench,
  Settings,
  UserCheck,
  FileText,
  TrendingUp,
  AlertTriangle,
  Calendar,
  MapPin,
  Search,
  Filter,
  Download,
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
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')

  // Mock data
  const recentOrders = [
    {
      id: '#TR-001',
      customer: 'María González',
      technician: 'José García',
      appliance: 'neveras Samsung',
      status: 'completed',
      date: '2024-01-20',
      revenue: '$150',
    },
    {
      id: '#TR-002',
      customer: 'Carlos Rodríguez',
      technician: 'María López',
      appliance: 'Aire Acondicionado',
      status: 'in-progress',
      date: '2024-01-21',
      revenue: '$200',
    },
    {
      id: '#TR-003',
      customer: 'Ana Martínez',
      technician: 'Roberto Silva',
      appliance: 'Lavadora LG',
      status: 'assigned',
      date: '2024-01-22',
      revenue: '$120',
    },
  ]

  const technicians = [
    {
      id: 1,
      name: 'José García',
      specialties: ['Refrigeración', 'Aires AC'],
      activeOrders: 3,
      completedToday: 2,
      rating: 4.8,
      status: 'active',
    },
    {
      id: 2,
      name: 'María López',
      specialties: ['Lavadoras', 'Secadoras'],
      activeOrders: 2,
      completedToday: 3,
      rating: 4.9,
      status: 'active',
    },
    {
      id: 3,
      name: 'Roberto Silva',
      specialties: ['Estufas', 'Microondas'],
      activeOrders: 1,
      completedToday: 1,
      rating: 4.7,
      status: 'break',
    },
  ]

  const customers = [
    {
      id: 1,
      name: 'María González',
      email: 'maria@email.com',
      totalServices: 5,
      lastService: '2024-01-20',
      status: 'active',
    },
    {
      id: 2,
      name: 'Carlos Rodríguez',
      email: 'carlos@email.com',
      totalServices: 3,
      lastService: '2024-01-21',
      status: 'active',
    },
  ]

  const getStatusBadge = (status: string, type: 'order' | 'user' = 'order') => {
    if (type === 'order') {
      const variants = {
        completed: {
          label: 'Completado',
          className: 'bg-success text-success-foreground',
        },
        'in-progress': {
          label: 'En Progreso',
          className: 'bg-primary text-primary-foreground',
        },
        assigned: {
          label: 'Asignado',
          className: 'bg-secondary text-secondary-foreground',
        },
        cancelled: {
          label: 'Cancelado',
          className: 'bg-destructive text-destructive-foreground',
        },
      }
      const config = variants[status as keyof typeof variants]
      return <Badge className={config.className}>{config.label}</Badge>
    } else {
      const variants = {
        active: {
          label: 'Activo',
          className: 'bg-success text-success-foreground',
        },
        break: {
          label: 'En Descanso',
          className: 'bg-secondary text-secondary-foreground',
        },
        offline: {
          label: 'Desconectado',
          className: 'bg-muted text-muted-foreground',
        },
      }
      const config = variants[status as keyof typeof variants]
      return <Badge className={config.className}>{config.label}</Badge>
    }
  }

  const sidebarItems = [
    { id: 'overview', label: 'Dashboard', icon: BarChart3 },
    { id: 'orders', label: 'Gestión de Órdenes', icon: FileText },
    { id: 'technicians', label: 'Técnicos', icon: UserCheck },
    { id: 'customers', label: 'Clientes', icon: Users },
    { id: 'settings', label: 'Configuración', icon: Settings },
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
                <p className="text-xs text-muted-foreground">Panel Admin</p>
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
              <h1 className="text-3xl font-bold mb-2">
                Panel de Administración
              </h1>
              <p className="text-muted-foreground">
                Controla y supervisa todas las operaciones del negocio
              </p>
            </div>

            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Main Stats */}
                <div className="grid md:grid-cols-4 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center">
                          <TrendingUp className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold">$12,450</p>
                          <p className="text-sm text-muted-foreground">
                            Ingresos del Mes
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-success-light rounded-full flex items-center justify-center">
                          <FileText className="h-6 w-6 text-success" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold">247</p>
                          <p className="text-sm text-muted-foreground">
                            Órdenes Completadas
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-secondary-light rounded-full flex items-center justify-center">
                          <UserCheck className="h-6 w-6 text-secondary" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold">12</p>
                          <p className="text-sm text-muted-foreground">
                            Técnicos Activos
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-destructive-light rounded-full flex items-center justify-center">
                          <Users className="h-6 w-6 text-destructive" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold">1,284</p>
                          <p className="text-sm text-muted-foreground">
                            Clientes Registrados
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Activity */}
                <div className="grid lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Órdenes Recientes</CardTitle>
                      <CardDescription>
                        Últimas 5 órdenes del sistema
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentOrders.slice(0, 5).map(order => (
                          <div
                            key={order.id}
                            className="flex items-center justify-between p-3 border border-border rounded-lg"
                          >
                            <div>
                              <p className="font-medium">{order.id}</p>
                              <p className="text-sm text-muted-foreground">
                                {order.customer}
                              </p>
                            </div>
                            <div className="text-right">
                              {getStatusBadge(order.status)}
                              <p className="text-sm font-medium text-success mt-1">
                                {order.revenue}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Técnicos en Línea</CardTitle>
                      <CardDescription>
                        Estado actual de los técnicos
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {technicians.map(tech => (
                          <div
                            key={tech.id}
                            className="flex items-center justify-between p-3 border border-border rounded-lg"
                          >
                            <div>
                              <p className="font-medium">{tech.name}</p>
                              <p className="text-sm text-muted-foreground">
                                {tech.activeOrders} órdenes activas
                              </p>
                            </div>
                            <div className="text-right">
                              {getStatusBadge(tech.status, 'user')}
                              <p className="text-sm text-muted-foreground mt-1">
                                ★ {tech.rating}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Performance Metrics */}
                <Card>
                  <CardHeader>
                    <CardTitle>Métricas de Rendimiento</CardTitle>
                    <CardDescription>
                      Indicadores clave del negocio
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center p-4">
                        <div className="text-3xl font-bold text-success mb-2">
                          96%
                        </div>
                        <p className="text-muted-foreground">
                          Tasa de Satisfacción
                        </p>
                      </div>
                      <div className="text-center p-4">
                        <div className="text-3xl font-bold text-primary mb-2">
                          2.3h
                        </div>
                        <p className="text-muted-foreground">Tiempo Promedio</p>
                      </div>
                      <div className="text-center p-4">
                        <div className="text-3xl font-bold text-secondary mb-2">
                          15%
                        </div>
                        <p className="text-muted-foreground">
                          Crecimiento Mensual
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === 'technicians' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Gestión de Técnicos</h2>
                  <Button className="btn-hero">Agregar Técnico</Button>
                </div>

                <div className="flex gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Buscar técnicos..." className="pl-10" />
                  </div>
                  <Select>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos</SelectItem>
                      <SelectItem value="active">Activos</SelectItem>
                      <SelectItem value="break">En Descanso</SelectItem>
                      <SelectItem value="offline">Desconectados</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {technicians.map(tech => (
                    <Card key={tech.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="font-semibold text-lg">
                              {tech.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {tech.specialties.join(', ')}
                            </p>
                          </div>
                          {getStatusBadge(tech.status, 'user')}
                        </div>

                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Órdenes Activas:
                            </span>
                            <span className="font-medium">
                              {tech.activeOrders}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Completadas Hoy:
                            </span>
                            <span className="font-medium">
                              {tech.completedToday}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Calificación:
                            </span>
                            <span className="font-medium">★ {tech.rating}</span>
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-border flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1"
                          >
                            Ver Perfil
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1"
                          >
                            Asignar Orden
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Other tabs content would go here */}
            {activeTab !== 'overview' && activeTab !== 'technicians' && (
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

export default AdminDashboard
