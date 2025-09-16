import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Wrench, Mail, Lock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = (e: React.FormEvent, userType: string) => {
    e.preventDefault();
    // Simulate login and redirect to appropriate dashboard
    console.log("Login attempt:", { ...formData, userType });
    
    // Redirect based on user type (in a real app, this would be determined by the backend)
    switch (userType) {
      case "cliente":
        window.location.href = "/dashboard/cliente";
        break;
      case "tecnico":
        window.location.href = "/dashboard/tecnico";
        break;
      case "admin":
        window.location.href = "/dashboard/admin";
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-4">
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
          
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-gradient-to-br from-primary to-primary-hover p-3 rounded-xl">
              <Wrench className="h-8 w-8 text-primary-foreground" />
            </div>
            <span className="font-bold text-2xl text-gradient">TechRepair Pro</span>
          </div>
          <p className="text-muted-foreground">Accede a tu cuenta para gestionar tus servicios</p>
        </div>

        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Iniciar Sesión</CardTitle>
            <CardDescription className="text-center">
              Selecciona tu tipo de cuenta
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="cliente" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="cliente">Cliente</TabsTrigger>
                <TabsTrigger value="tecnico">Técnico</TabsTrigger>
                <TabsTrigger value="admin">Admin</TabsTrigger>
              </TabsList>

              {["cliente", "tecnico", "admin"].map((userType) => (
                <TabsContent key={userType} value={userType}>
                  <form onSubmit={(e) => handleSubmit(e, userType)} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo Electrónico</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="tu@email.com"
                          className="pl-10"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Contraseña</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Tu contraseña"
                          className="pl-10 pr-10"
                          value={formData.password}
                          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <label className="flex items-center space-x-2 text-sm">
                        <input type="checkbox" className="rounded border-border" />
                        <span>Recordarme</span>
                      </label>
                      <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                        ¿Olvidaste tu contraseña?
                      </Link>
                    </div>

                    <Button type="submit" className="btn-hero w-full">
                      Iniciar Sesión como {userType.charAt(0).toUpperCase() + userType.slice(1)}
                    </Button>
                  </form>

                  {userType === "cliente" && (
                    <div className="mt-6 pt-6 border-t border-border text-center">
                      <p className="text-sm text-muted-foreground mb-4">
                        ¿Nuevo cliente?
                      </p>
                      <Button variant="outline" className="w-full">
                        Crear Cuenta de Cliente
                      </Button>
                    </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>

            {/* Demo Credentials */}
            <div className="mt-6 p-4 bg-primary-light rounded-lg">
              <h4 className="font-medium text-sm mb-2">Credenciales de Demo:</h4>
              <div className="text-xs space-y-1 text-muted-foreground">
                <p><strong>Cliente:</strong> cliente@demo.com / demo123</p>
                <p><strong>Técnico:</strong> tecnico@demo.com / demo123</p>
                <p><strong>Admin:</strong> admin@demo.com / demo123</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Links */}
        <div className="text-center mt-6 space-y-2">
          <Link to="/support" className="text-sm text-muted-foreground hover:text-primary">
            ¿Necesitas ayuda? Contáctanos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;