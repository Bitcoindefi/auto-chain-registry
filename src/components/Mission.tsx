
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Plane, TrendingUp, Lightbulb, ArrowRight } from 'lucide-react';

const Mission = () => {
  const missionItems = [
    {
      icon: Plane,
      title: "Airdrop",
      description: "Inicialmente vincular la BD de DGNRPA y sus dominios de vehículos para realizar un airdrop a todas las patentes con wallet informadas.",
      color: "bg-blue-500"
    },
    {
      icon: TrendingUp,
      title: "Desarrollo",
      description: "El airdrop consiste en realizarse apenas se vinculen las wallet a los usuarios y su tenencia de rodados. El contrato tendrá la función onlyOwner",
      color: "bg-green-500"
    },
    {
      icon: Lightbulb,
      title: "Innovación",
      description: "De esta forma la wallet vinculada a cada usuario ya tendrá su NFT perteneciente a su rodado para comerciar libremente con él, de forma segura y eficaz, sin pagar gastos adicionales, utilizando firma digital en los documentos.",
      color: "bg-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido principal */}
          <div className="space-y-8">
            <div>
              <Badge className="bg-white/10 text-white border-white/20 mb-4">
                Misión del Proyecto
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                TU AUTO, TU NFT, 
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {" "}TU FUTURO
                </span>
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                ¡Únete a la iniciativa para que el nuevo registro automotor reconozca este derecho!
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-lg leading-relaxed">
                Los NFT en el registro vehicular permitirán garantizar la autenticidad y la propiedad, 
                simplificar los trámites y reducir el fraude.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Al tokenizar los registros automotores, estaremos creando un sistema más seguro, 
                transparente y eficiente.
              </p>
            </div>

            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0">
              Únete a la Revolución
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Elementos de misión */}
          <div className="space-y-6">
            {missionItems.map((item, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`${item.color} p-3 rounded-lg flex-shrink-0`}>
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                      <p className="text-blue-100 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sección de beneficios para Argentina */}
        <div className="mt-20 text-center">
          <Card className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg border-white/20 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🇦🇷</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Público Objetivo y Problemática</h3>
              <h4 className="text-xl text-cyan-300 mb-4">Compradores y vendedores de vehículos</h4>
              <p className="text-blue-100 text-lg leading-relaxed">
                ¿Altos costos en el registro automotor? Con blockchain, simplificamos los trámites, 
                reducimos los impuestos y te ofrecemos un alivio tributario que te permitirá ahorrar dinero.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Mission;
