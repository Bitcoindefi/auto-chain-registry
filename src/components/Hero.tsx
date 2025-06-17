
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Zap, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>
      
      <div className="relative container mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                <Zap className="h-4 w-4 text-yellow-400" />
                Inspirado en RG 1069/2025 CNV
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  ¡Revolucionamos el Registro Automotor!
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-blue-100 font-light">
                Transferencias más simples, seguras y económicas para todos los argentinos
              </p>
              
              <p className="text-lg text-blue-200 leading-relaxed max-w-xl">
                Tokenización de registros automotores mediante NFTs, adoptando los más altos 
                estándares regulatorios. Reducimos tiempos de <span className="font-semibold text-white">30 días a 3 días</span> 
                y costos del <span className="font-semibold text-white">80%</span>.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white border-0">
                Súmate a la Revolución
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Descargá la Propuesta
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">80%</div>
                <div className="text-sm text-blue-200">Reducción de costos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">95%</div>
                <div className="text-sm text-blue-200">Menos fraude</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">1:1</div>
                <div className="text-sm text-blue-200">Equivalencia NFT</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Imagen de NFT y vehículos digitales */}
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop&crop=center"
                alt="NFT digital art - Representación de tokens no fungibles para vehículos"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent"></div>
              
              {/* Overlay con información regulatoria */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-green-400" />
                    <span className="text-sm font-medium">NFT = Equivalencia 1:1 con Vehículo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-blue-400" />
                    <span className="text-sm font-medium">Respaldo y Segregación Patrimonial</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="h-5 w-5 text-yellow-400" />
                    <span className="text-sm font-medium">Sandbox Regulatorio Piloto</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-3xl blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
