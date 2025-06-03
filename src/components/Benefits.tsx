
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingDown, Shield, Clock, Globe, DollarSign, Users } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Eficiencia Operativa",
      description: "Reducción del 80% en tiempos de transacción",
      metric: "De 30 días a 3 días",
      color: "bg-blue-500"
    },
    {
      icon: DollarSign,
      title: "Costos Reducidos",
      description: "Eliminación de gestorías intermediarias",
      metric: "Ahorro $50K-$100K ARS",
      color: "bg-green-500"
    },
    {
      icon: Shield,
      title: "Seguridad Mejorada",
      description: "Reducción del 95% en fraude documental",
      metric: "Inmutabilidad blockchain",
      color: "bg-purple-500"
    },
    {
      icon: Globe,
      title: "Disponibilidad 24/7",
      description: "Sistema siempre disponible vs. horarios limitados",
      metric: "365 días al año",
      color: "bg-indigo-500"
    },
    {
      icon: TrendingDown,
      title: "Eliminación de Riesgos",
      description: "Sin papeles físicos, sin pérdidas o falsificaciones",
      metric: "100% digital",
      color: "bg-teal-500"
    },
    {
      icon: Users,
      title: "Transparencia Total",
      description: "Historial público y verificable de transferencias",
      metric: "Auditable siempre",
      color: "bg-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Beneficios Cuantificables
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Impacto real y medible en el ecosistema automotor argentino
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className={`inline-flex p-3 rounded-lg ${benefit.color} mb-4`}>
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {benefit.description}
                </p>
                
                <div className="p-3 bg-gray-100 rounded-lg">
                  <div className="font-semibold text-gray-900 text-sm">
                    {benefit.metric}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">2.5M</div>
            <div className="text-gray-600">Transacciones anuales en Argentina</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-green-600 mb-2">$15B USD</div>
            <div className="text-gray-600">Valor de mercado anual</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-purple-600 mb-2">25%</div>
            <div className="text-gray-600">Penetración objetivo en 5 años</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
