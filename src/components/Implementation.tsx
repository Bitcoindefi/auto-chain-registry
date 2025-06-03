
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, MapPin, Smartphone } from 'lucide-react';

const Implementation = () => {
  const phases = [
    {
      phase: "Fase 1",
      title: "Piloto Regulatorio",
      duration: "6 meses",
      icon: Users,
      color: "bg-blue-500",
      tasks: [
        "Desarrollo de framework legal con DNRPA",
        "Creación de sandbox regulatorio",
        "Tokenización de 1,000 vehículos de prueba",
        "Validación de oráculos institucionales"
      ]
    },
    {
      phase: "Fase 2",
      title: "Escalamiento Gradual",
      duration: "12 meses",
      icon: MapPin,
      color: "bg-green-500",
      tasks: [
        "Integración completa con sistemas DNRPA",
        "Lanzamiento en 3 provincias piloto",
        "Capacitación de escribanos y gestorías",
        "Desarrollo de aplicación móvil para usuarios"
      ]
    },
    {
      phase: "Fase 3",
      title: "Expansión Nacional",
      duration: "18 meses",
      icon: Smartphone,
      color: "bg-purple-500",
      tasks: [
        "Cobertura nacional completa",
        "Integración con compañías de seguros",
        "Marketplace de vehículos tokenizados",
        "Análisis de datos para insights de mercado"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Implementación Estratégica
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Roadmap estructurado para la transformación del sistema registral argentino
          </p>
        </div>

        <div className="space-y-8">
          {phases.map((phase, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <CardHeader className={`${phase.color} text-white`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <phase.icon className="h-8 w-8" />
                    <div>
                      <Badge variant="secondary" className="bg-white/20 text-white border-0 mb-2">
                        {phase.phase}
                      </Badge>
                      <CardTitle className="text-2xl">{phase.title}</CardTitle>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-white/80">
                      <Calendar className="h-4 w-4" />
                      <span>{phase.duration}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {phase.tasks.map((task, taskIndex) => (
                    <div key={taskIndex} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-700">{task}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Timeline Total: 36 meses</h3>
              <p className="text-blue-100 mb-6 max-w-2xl">
                Desde el desarrollo del framework regulatorio hasta la implementación 
                nacional completa, estableciendo a Argentina como líder en innovación registral blockchain.
              </p>
              <div className="flex justify-center gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold">3</div>
                  <div className="text-sm text-blue-200">Años para liderazgo</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">24</div>
                  <div className="text-sm text-blue-200">Provincias cubiertas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm text-blue-200">Digital</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Implementation;
