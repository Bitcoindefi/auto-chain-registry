
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Zap, Globe, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="relative container mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30 px-6 py-3 rounded-full text-sm font-medium text-white shadow-lg">
                <Sparkles className="h-4 w-4 text-yellow-400 animate-pulse" />
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Inspirado en RG 1069/2025 CNV
                </span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-black leading-none">
                <span className="block bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-2">
                  Revolucionamos
                </span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  el Registro
                </span>
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Automotor
                </span>
              </h1>
              
              <p className="text-2xl lg:text-3xl text-blue-100 font-light leading-relaxed">
                Transferencias más <span className="text-green-400 font-semibold">simples</span>, 
                <span className="text-blue-400 font-semibold"> seguras</span> y 
                <span className="text-purple-400 font-semibold"> económicas</span>
              </p>
              
              <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                Tokenización de registros automotores mediante NFTs, adoptando los más altos 
                estándares regulatorios. Reducimos tiempos de <span className="text-green-400 font-bold">30 días a 3 días</span> 
                y costos del <span className="text-green-400 font-bold">80%</span>.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                size="lg" 
                className="group relative overflow-hidden bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 hover:from-green-600 hover:via-blue-600 hover:to-purple-600 text-white border-0 px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center">
                  Súmate a la Revolución
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-4 text-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                Descargá la Propuesta
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-12">
              <div className="text-center group">
                <div className="text-4xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">80%</div>
                <div className="text-sm text-blue-200 mt-2">Reducción de costos</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">95%</div>
                <div className="text-sm text-blue-200 mt-2">Menos fraude</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">1:1</div>
                <div className="text-sm text-blue-200 mt-2">Equivalencia NFT</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Main image container */}
            <div className="relative z-10 group">
              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl transform group-hover:scale-105 transition-all duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=center"
                  alt="Vehículo moderno con concepto digital - Representación de tokenización vehicular"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent"></div>
                
                {/* Floating info cards */}
                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <Shield className="h-6 w-6 text-green-400" />
                    <div>
                      <div className="text-white font-semibold text-sm">NFT Verificado</div>
                      <div className="text-green-400 text-xs">DNRPA</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <Globe className="h-6 w-6 text-blue-400" />
                    <div>
                      <div className="text-white font-semibold text-sm">Blockchain</div>
                      <div className="text-blue-400 text-xs">Ethereum</div>
                    </div>
                  </div>
                </div>
                
                {/* Overlay with regulatory info */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-green-400" />
                      <span className="text-sm font-medium text-white">NFT = Equivalencia 1:1 con Vehículo</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="h-5 w-5 text-blue-400" />
                      <span className="text-sm font-medium text-white">Respaldo y Segregación Patrimonial</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Zap className="h-5 w-5 text-yellow-400" />
                      <span className="text-sm font-medium text-white">Sandbox Regulatorio Piloto</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Glowing background effect */}
            <div className="absolute -inset-8 bg-gradient-to-r from-green-500/30 via-blue-500/30 to-purple-500/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
            
            {/* Floating particles */}
            <div className="absolute top-10 left-10 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute top-32 right-12 w-3 h-3 bg-purple-400 rounded-full animate-pulse animation-delay-2000"></div>
            <div className="absolute bottom-20 left-20 w-2 h-2 bg-green-400 rounded-full animate-pulse animation-delay-4000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
