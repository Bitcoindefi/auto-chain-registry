
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Coins, ShoppingCart, Globe, BarChart, GraduationCap } from 'lucide-react';

const Roadmap = () => {
  const roadmapItems = [
    {
      icon: ArrowRight,
      title: "Transferencias",
      description: "Transferencia y documentos varios con el NFT emitido equivalente al título del automotor",
      status: "En Desarrollo",
      color: "bg-blue-500"
    },
    {
      icon: Coins,
      title: "Stablecoin",
      description: "Medio de pago mediante stablecoin facilitado",
      status: "Planificado",
      color: "bg-green-500"
    },
    {
      icon: ShoppingCart,
      title: "Marketplace",
      description: "Lista de oferentes de servicios para compra y venta de vehículos modalidad NFT",
      status: "Planificado",
      color: "bg-purple-500"
    },
    {
      icon: Globe,
      title: "Expansión",
      description: "Expansión territorial, desde el lugar de testeo (provincia elegida para iniciar prueba del proyecto) a nivel nacional e internacional",
      status: "Futuro",
      color: "bg-orange-500"
    },
    {
      icon: BarChart,
      title: "Data on Chain",
      description: "Optimización del sistema utilizando análisis con data on chain e IA",
      status: "Futuro",
      color: "bg-indigo-500"
    },
    {
      icon: GraduationCap,
      title: "Educación",
      description: "Capacitar a todo el personal pertinente que ejerce directa o indirectamente control sobre los vehículos. Y tomar el deber de educar a la población para propagar la adopción",
      status: "Continuo",
      color: "bg-teal-500"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "En Desarrollo": return "bg-blue-100 text-blue-800";
      case "Planificado": return "bg-green-100 text-green-800";
      case "Futuro": return "bg-orange-100 text-orange-800";
      case "Continuo": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Roadmap del Proyecto</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hoja de ruta para la implementación completa del sistema de registro blockchain automotor
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid gap-6">
            {roadmapItems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-l-4" style={{borderLeftColor: item.color.replace('bg-', '#')}}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`${item.color} p-3 rounded-full flex-shrink-0`}>
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                        <Badge className={getStatusColor(item.status)}>
                          {item.status}
                        </Badge>
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Objetivos adicionales */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Objetivos Principales</h3>
            <p className="text-blue-100">
              Los NFTs representan el traspaso de titularidad y su compra, monetariamente hablando, 
              representa toda la operación requerida para obtener el rodado.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-lg font-bold">01</span>
              </div>
              <p className="text-sm">La obtención legal del rodado representa el traspaso del NFT</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-lg font-bold">02</span>
              </div>
              <p className="text-sm">Que exista una wallet declarada por el usuario a la entidad</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-lg font-bold">03</span>
              </div>
              <p className="text-sm">El comprador solo tenga que realizar la transacción de compra del NFT</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-lg font-bold">04</span>
              </div>
              <p className="text-sm">La documentación está adjunta al NFT adquirido, bajo un servicio de datafiles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
