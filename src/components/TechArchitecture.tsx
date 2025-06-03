
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Layers, Database, Zap, Globe2 } from 'lucide-react';

const TechArchitecture = () => {
  const components = [
    {
      icon: Layers,
      title: "NFTs como Certificados Digitales",
      description: "Cada token representa un documento registral inmutable con metadata completa del vehículo",
      features: ["Título de propiedad", "Cédula verde/azul", "Formulario 08", "Historial completo"],
      color: "border-blue-200 bg-blue-50"
    },
    {
      icon: Zap,
      title: "Contratos Inteligentes",
      description: "Automatizan el proceso de transferencia y custodia de fondos sin intermediarios",
      features: ["Custodia automática", "Liberación por eventos", "Validación DNRPA", "Ejecución garantizada"],
      color: "border-green-200 bg-green-50"
    },
    {
      icon: Database,
      title: "Oráculos DNRPA",
      description: "Conectan el sistema blockchain con la base de datos oficial del registro automotor",
      features: ["Validación en tiempo real", "Integración oficial", "Datos verificados", "Sincronización automática"],
      color: "border-purple-200 bg-purple-50"
    },
    {
      icon: Globe2,
      title: "Interoperabilidad",
      description: "Compatible con múltiples redes blockchain para mayor flexibilidad y alcance",
      features: ["Multi-chain", "Escalabilidad", "Bajo costo", "Alta velocidad"],
      color: "border-orange-200 bg-orange-50"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Arquitectura Tecnológica
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Infraestructura blockchain de próxima generación para el sector automotor
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {components.map((component, index) => (
            <Card key={index} className={`${component.color} border-2 hover:shadow-lg transition-shadow`}>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <component.icon className="h-8 w-8 text-gray-700" />
                  <CardTitle className="text-xl text-gray-900">{component.title}</CardTitle>
                </div>
                <p className="text-gray-600">{component.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {component.features.map((feature, featureIndex) => (
                    <Badge key={featureIndex} variant="secondary" className="bg-white/70">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Flujo de Datos Integrado</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Nuestro sistema conecta seamlessly con la infraestructura registral existente,
              creando un puente entre el mundo tradicional y la tecnología blockchain.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-lg font-bold">1</span>
                </div>
                <div className="font-semibold">Validación DNRPA</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-lg font-bold">2</span>
                </div>
                <div className="font-semibold">Tokenización NFT</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-lg font-bold">3</span>
                </div>
                <div className="font-semibold">Contrato Inteligente</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-lg font-bold">4</span>
                </div>
                <div className="font-semibold">Transferencia Automática</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechArchitecture;
