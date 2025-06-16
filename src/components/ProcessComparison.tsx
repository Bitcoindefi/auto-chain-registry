
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Shield, DollarSign, FileText, AlertTriangle, CheckCircle } from 'lucide-react';

const ProcessComparison = () => {
  const traditional = [
    { icon: Clock, title: "Verificación Manual", subtitle: "2-3 días", color: "text-red-500" },
    { icon: AlertTriangle, title: "Transferencia Riesgosa", subtitle: "Sin garantías", color: "text-red-500" },
    { icon: FileText, title: "Documentos Físicos", subtitle: "Vulnerables", color: "text-red-500" },
    { icon: Clock, title: "Gestorías", subtitle: "7-15 días", color: "text-red-500" },
    { icon: DollarSign, title: "Liberación Manual", subtitle: "Riesgo de estafa", color: "text-red-500" }
  ];

  const blockchain = [
    { icon: CheckCircle, title: "Verificación Automática", subtitle: "Instantánea", color: "text-green-500" },
    { icon: Shield, title: "Contrato Inteligente", subtitle: "Garantía total", color: "text-green-500" },
    { icon: Shield, title: "NFT Inmutable", subtitle: "En blockchain", color: "text-green-500" },
    { icon: CheckCircle, title: "Inscripción Automática", subtitle: "Post-validación", color: "text-green-500" },
    { icon: CheckCircle, title: "Liberación Automática", subtitle: "Por contrato", color: "text-green-500" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Transformación del Proceso Registral
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Del sistema tradicional a la revolución blockchain automotor
          </p>
        </div>

        {/* Imagen ilustrativa del registro automotor */}
        <div className="mb-12 text-center">
          <div className="relative inline-block rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=400&fit=crop&crop=center"
              alt="Oficina de registro automotor - Evolución digital del trámite vehicular"
              className="w-full max-w-5xl h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/70 via-yellow-500/70 to-green-600/70 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-2">Evolución del Registro Automotor Argentino</h3>
                <p className="text-yellow-100">Del papel tradicional a la tokenización blockchain</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="border-red-200 shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-red-700 mb-2">Sistema Actual</h3>
                <p className="text-red-600">Lento • Riesgoso • Costoso</p>
                <div className="text-sm text-red-500 mt-2">
                  33% de operaciones no se realizan en blanco
                </div>
              </div>
              
              <div className="space-y-6">
                {traditional.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-red-50 rounded-lg">
                    <item.icon className={`h-6 w-6 ${item.color}`} />
                    <div>
                      <div className="font-semibold text-gray-900">{item.title}</div>
                      <div className="text-sm text-gray-600">{item.subtitle}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-red-100 rounded-lg text-center">
                <div className="text-3xl font-bold text-red-700">15-30 días</div>
                <div className="text-red-600">Tiempo promedio total</div>
                <div className="text-sm text-red-500 mt-1">Costos: 5.5% del valor del vehículo</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-green-700 mb-2">Registro.blockchain</h3>
                <p className="text-green-600">Rápido • Seguro • Eficiente</p>
                <div className="text-sm text-green-500 mt-2">
                  Inspirado en RG 1069/2025 CNV
                </div>
              </div>
              
              <div className="space-y-6">
                {blockchain.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
                    <item.icon className={`h-6 w-6 ${item.color}`} />
                    <div>
                      <div className="font-semibold text-gray-900">{item.title}</div>
                      <div className="text-sm text-gray-600">{item.subtitle}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-green-100 rounded-lg text-center">
                <div className="text-3xl font-bold text-green-700">1-3 días</div>
                <div className="text-green-600">Tiempo promedio total</div>
                <div className="text-sm text-green-500 mt-1">Reducción del 80% en costos</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Beneficios clave */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Beneficios para Todos los Actores
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-blue-900 mb-2">Para el Usuario</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Menos impuestos y gastos</li>
                <li>• Trámites 100% digitales</li>
                <li>• Propiedad garantizada</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-green-900 mb-2">Para el Estado</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Mayor transparencia</li>
                <li>• Reducción operaciones en negro</li>
                <li>• Innovación y eficiencia</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-purple-900 mb-2">Para el Mercado</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• Más seguridad, menos fraude</li>
                <li>• Expansión territorial</li>
                <li>• Interoperabilidad internacional</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessComparison;
