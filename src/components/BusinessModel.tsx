
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Target, BarChart3, DollarSign, ArrowRight } from 'lucide-react';

const BusinessModel = () => {
  const revenueStreams = [
    {
      title: "Comisión por Transacción",
      percentage: "0.5%",
      description: "Del valor del vehículo",
      color: "bg-blue-500"
    },
    {
      title: "Servicios Premium",
      percentage: "15%",
      description: "Verificaciones adicionales y seguros",
      color: "bg-green-500"
    },
    {
      title: "Licenciamiento",
      percentage: "20%",
      description: "Tecnología a otros mercados regionales",
      color: "bg-purple-500"
    },
    {
      title: "Datos e Insights",
      percentage: "10%",
      description: "Análisis de mercado para sector automotor",
      color: "bg-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Modelo de Negocio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Múltiples fuentes de ingresos en un mercado de $15 mil millones USD
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Fuentes de Ingresos</h3>
            <div className="space-y-4">
              {revenueStreams.map((stream, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-4 h-4 ${stream.color} rounded`}></div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{stream.title}</div>
                        <div className="text-sm text-gray-600">{stream.description}</div>
                      </div>
                      <div className="text-xl font-bold text-gray-900">{stream.percentage}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Target de Mercado</h3>
            <div className="space-y-6">
              <Card className="border-blue-200 bg-blue-50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Target className="h-6 w-6 text-blue-600" />
                    <span className="font-semibold text-gray-900">Mercado Primario</span>
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">2.5M</div>
                  <div className="text-gray-600">Transacciones anuales en Argentina</div>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <DollarSign className="h-6 w-6 text-green-600" />
                    <span className="font-semibold text-gray-900">Valor de Mercado</span>
                  </div>
                  <div className="text-3xl font-bold text-green-600 mb-1">$15B USD</div>
                  <div className="text-gray-600">Mercado anual argentino</div>
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-purple-50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingUp className="h-6 w-6 text-purple-600" />
                    <span className="font-semibold text-gray-900">Penetración Objetivo</span>
                  </div>
                  <div className="text-3xl font-bold text-purple-600 mb-1">25%</div>
                  <div className="text-gray-600">En 5 años</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <Card className="bg-gradient-to-r from-slate-900 to-blue-900 text-white">
          <CardContent className="p-12 text-center">
            <BarChart3 className="h-16 w-16 mx-auto mb-6 text-blue-400" />
            <h3 className="text-3xl font-bold mb-4">Impacto Transformador</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Registro.blockchain no solo optimiza procesos existentes, sino que reimagina 
              completamente la experiencia de compra-venta automotor, estableciendo un 
              precedente para la digitalización de otros registros públicos.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">$3.75B</div>
                <div className="text-blue-200">Mercado direccionable en 5 años</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">625K</div>
                <div className="text-blue-200">Transacciones objetivo anuales</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">ROI 300%</div>
                <div className="text-blue-200">Retorno proyectado a 5 años</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white border-0">
                Solicitar Presentación Completa
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Agendar Reunión
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BusinessModel;
