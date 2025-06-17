
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, FileCheck, Users, Globe, Zap, CheckCircle, Scale } from 'lucide-react';

const RegulatoryFramework = () => {
  const innovations = [
    {
      icon: CheckCircle,
      title: "Equivalencia Funcional 1:1",
      description: "Cada NFT representa exactamente un vehículo real, garantizando autenticidad y trazabilidad legal completa.",
      benefit: "Seguridad jurídica total"
    },
    {
      icon: Shield,
      title: "Respaldo y Segregación Patrimonial",
      description: "Los NFT están protegidos de riesgos de insolvencia o fraude de la plataforma, vinculados al titular legítimo.",
      benefit: "Protección patrimonial"
    },
    {
      icon: Globe,
      title: "Sandbox Regulatorio",
      description: "Prueba piloto en provincia seleccionada con reglas claras, monitoreo y evaluación institucional.",
      benefit: "Adopción gradual segura"
    },
    {
      icon: FileCheck,
      title: "Derecho Irrestricto de Canje",
      description: "El titular puede transferir la propiedad y recuperar el título físico en cualquier momento.",
      benefit: "Flexibilidad total"
    },
    {
      icon: Users,
      title: "Transparencia y Protección",
      description: "Plataforma transparente, auditable y comunicación en lenguaje claro sin publicidad engañosa.",
      benefit: "Confianza del usuario"
    },
    {
      icon: Zap,
      title: "Identificación y KYC",
      description: "Wallet verificada y asociada a identidad, previniendo fraudes y asegurando legitimidad.",
      benefit: "Prevención de fraude"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="bg-purple-100 text-purple-800 mb-4 px-4 py-2">
            Marco Regulatorio Innovador
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Inspirado en RG 1069/2025 CNV
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Adoptamos los más altos estándares regulatorios, adaptando las mejores prácticas 
            de protección al usuario del mercado de capitales al registro automotor
          </p>
        </div>

        {/* Imagen de blockchain governance y regulación */}
        <div className="mb-12 text-center">
          <div className="relative inline-block rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&h=400&fit=crop&crop=center"
              alt="Blockchain governance and smart contracts - Gobernanza blockchain y contratos inteligentes"
              className="w-full max-w-4xl h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-blue-900/80 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Scale className="h-8 w-8" />
                  <h3 className="text-2xl font-bold">Marco Regulatorio de Vanguardia</h3>
                </div>
                <p className="text-purple-100">Cumplimiento normativo y protección del usuario</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {innovations.map((innovation, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <innovation.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">{innovation.title}</div>
                    <Badge variant="secondary" className="mt-1 bg-green-100 text-green-800">
                      {innovation.benefit}
                    </Badge>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{innovation.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparación con estándares internacionales */}
        <Card className="bg-gradient-to-r from-purple-900 to-blue-900 text-white">
          <CardContent className="p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Estándares de Clase Mundial</h3>
              <p className="text-purple-100 text-lg max-w-3xl mx-auto">
                registro.blockchain establece un precedente regulatorio que puede ser replicado 
                en otros registros públicos, posicionando a Argentina como líder en innovación legal blockchain
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2">Seguridad Jurídica</h4>
                <p className="text-purple-100">Equivalencia legal 1:1 entre NFT y documento físico</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2">Protección al Usuario</h4>
                <p className="text-purple-100">KYC, transparencia y derecho de canje irrestricto</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2">Escalabilidad</h4>
                <p className="text-purple-100">Sandbox piloto → Nacional → Internacional</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-center">
                <h4 className="text-xl font-bold mb-2">¿Cómo Funciona el Sandbox?</h4>
                <div className="grid md:grid-cols-4 gap-4 mt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">1</div>
                    <div className="text-sm">Provincia Piloto</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">2</div>
                    <div className="text-sm">Reglas Claras</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">3</div>
                    <div className="text-sm">Monitoreo Continuo</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">4</div>
                    <div className="text-sm">Evaluación y Escalado</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RegulatoryFramework;
