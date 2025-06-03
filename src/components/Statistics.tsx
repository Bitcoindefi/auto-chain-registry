
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingDown, Shield, Clock, DollarSign } from 'lucide-react';

const Statistics = () => {
  const stats = [
    {
      icon: TrendingDown,
      percentage: "5.5%",
      description: "Costo actual para realizar una transferencia (1,5%) de un vehículo + imp sellos (3%)",
      improvement: "Reducción del 80%",
      color: "text-red-500"
    },
    {
      icon: Shield,
      percentage: "33%",
      description: "Aprox 1/3 (33 %) de las operaciones de compra y venta de vehículos podrían no realizarse en blanco",
      improvement: "95% menos fraude",
      color: "text-orange-500"
    }
  ];

  const benefits = [
    {
      title: "Reducción de Tiempo",
      value: "80%",
      description: "De 30 días a 3 días",
      icon: Clock,
      color: "bg-blue-500"
    },
    {
      title: "Menos Fraude",
      value: "95%",
      description: "Blockchain inmutable",
      icon: Shield,
      color: "bg-green-500"
    },
    {
      title: "Ahorro Promedio",
      value: "$100K",
      description: "Por transacción",
      icon: DollarSign,
      color: "bg-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Estadísticas del Mercado</h2>
          <p className="text-xl text-blue-100">
            Problemática actual vs. Solución Blockchain
          </p>
        </div>

        {/* Estadísticas principales */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8 text-center">
                <stat.icon className={`h-12 w-12 ${stat.color} mx-auto mb-4`} />
                <div className="text-6xl font-bold mb-4">{stat.percentage}</div>
                <p className="text-blue-100 mb-4">{stat.description}</p>
                <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-3">
                  <p className="text-green-300 font-semibold">{stat.improvement}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Beneficios de Registro.blockchain */}
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold mb-4">Beneficios de Registro.blockchain</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-green-400 mb-2">{benefit.value}</div>
                <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
                <p className="text-blue-200 text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">¿Altos costos en el registro automotor?</h3>
            <p className="text-blue-100 text-lg mb-6">
              Con blockchain, simplificamos los trámites, reducimos los impuestos y te ofrecemos un alivio 
              tributario que te permitirá ahorrar dinero.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-sm">Trámites simplificados</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span className="text-sm">Impuestos reducidos</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                <span className="text-sm">Alivio tributario</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
