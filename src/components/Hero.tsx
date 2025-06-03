
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Zap, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="relative container mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                <Zap className="h-4 w-4 text-yellow-400" />
                Revolución Blockchain Automotor
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Registro.blockchain
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-blue-100 font-light">
                Tokenización del Sistema Registral Automotor mediante NFTs
              </p>
              
              <p className="text-lg text-blue-200 leading-relaxed max-w-xl">
                Revolucionamos las transacciones automotoras creando un ecosistema digital seguro, 
                transparente y eficiente que reduce tiempos de <span className="font-semibold text-white">30 días a 3 días</span>.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white border-0">
                Solicitar Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Ver Arquitectura
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">80%</div>
                <div className="text-sm text-blue-200">Reducción de tiempo</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">95%</div>
                <div className="text-sm text-blue-200">Menos fraude</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">$100K</div>
                <div className="text-sm text-blue-200">Ahorro promedio</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-green-400" />
                  <span className="font-medium">NFT Certificado Digital</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-6 w-6 text-blue-400" />
                  <span className="font-medium">Blockchain Inmutable</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="h-6 w-6 text-yellow-400" />
                  <span className="font-medium">Contratos Inteligentes</span>
                </div>
                
                <div className="mt-8 p-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl border border-green-400/30">
                  <div className="text-sm font-medium text-green-300 mb-1">Estado del Proceso</div>
                  <div className="text-lg font-bold">Transferencia Automática</div>
                  <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                    <div className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full w-4/5"></div>
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
