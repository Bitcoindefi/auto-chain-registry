
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Car, Shield, CheckCircle, Clock, ArrowRight, FileText, Key, Zap } from 'lucide-react';

const VehicleDemo = () => {
  const [demoStep, setDemoStep] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const vehicleData = {
    brand: "Ford",
    model: "Focus",
    year: 2020,
    chasis: "WF0AXXGCDAKR12345",
    motor: "AODA123456789",
    color: "Azul Metalizado",
    ownerCount: 2,
    formulario08: "08-2024-ARG-001234"
  };

  const walletData = {
    address: "0x742d35Cc6575C0532969c78b86a7F7f6b3f40f8E",
    owner: "María González",
    kycStatus: "Verificado",
    documents: ["DNI", "Comprobante domicilio", "Formulario 08"]
  };

  const steps = [
    "Verificación KYC del propietario",
    "Validación de documentos vehiculares",
    "Tokenización en blockchain",
    "Envío de NFT a wallet verificada"
  ];

  const handleDemo = async () => {
    setIsProcessing(true);
    
    for (let i = 0; i <= 3; i++) {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setDemoStep(i + 1);
    }
    
    setIsProcessing(false);
  };

  const resetDemo = () => {
    setDemoStep(0);
    setIsProcessing(false);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Demo Interactivo: Tokenización de Vehículo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simula el proceso completo de registro blockchain y envío de NFT vehicular
          </p>
        </div>

        {/* Imagen ilustrativa del proceso */}
        <div className="mb-12 text-center">
          <div className="relative inline-block rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=400&fit=crop&crop=center"
              alt="Código de programación blockchain en pantalla"
              className="w-full max-w-4xl h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-2">Sistema Blockchain Automotor</h3>
                <p className="text-blue-100">Tecnología avanzada para el registro vehicular</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Panel de datos del vehículo */}
          <Card className="border-2 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Car className="h-6 w-6 text-blue-600" />
                Datos del Vehículo
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Imagen del vehículo */}
              <div className="mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=300&fit=crop&crop=center"
                  alt="Vehículo Ford Focus"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-600">Marca/Modelo</label>
                  <p className="font-semibold">{vehicleData.brand} {vehicleData.model}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Año</label>
                  <p className="font-semibold">{vehicleData.year}</p>
                </div>
                <div className="col-span-2">
                  <label className="text-sm font-medium text-gray-600">Número de Chasis</label>
                  <p className="font-mono text-sm bg-gray-100 p-2 rounded">{vehicleData.chasis}</p>
                </div>
                <div className="col-span-2">
                  <label className="text-sm font-medium text-gray-600">Número de Motor</label>
                  <p className="font-mono text-sm bg-gray-100 p-2 rounded">{vehicleData.motor}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Color</label>
                  <p className="font-semibold">{vehicleData.color}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Cantidad Dueños</label>
                  <p className="font-semibold">{vehicleData.ownerCount}</p>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <label className="text-sm font-medium text-gray-600">Formulario 08</label>
                <div className="flex items-center gap-2 mt-1">
                  <FileText className="h-4 w-4 text-green-600" />
                  <span className="text-sm">{vehicleData.formulario08}</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">Validado</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Panel de wallet destino */}
          <Card className="border-2 border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-green-600" />
                Wallet Verificada KYC
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Imagen tecnológica */}
              <div className="mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=200&fit=crop&crop=center"
                  alt="Tecnología blockchain y programación"
                  className="w-full h-24 object-cover rounded-lg"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-600">Propietario</label>
                <p className="font-semibold text-lg">{walletData.owner}</p>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-600">Dirección de Wallet</label>
                <p className="font-mono text-sm bg-gray-100 p-2 rounded break-all">{walletData.address}</p>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-600">Estado KYC</label>
                <div className="flex items-center gap-2 mt-1">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <Badge className="bg-green-100 text-green-800">{walletData.kycStatus}</Badge>
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-600">Documentos Verificados</label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {walletData.documents.map((doc, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      <Key className="h-3 w-3 mr-1" />
                      {doc}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Panel de proceso */}
        <Card className="mt-8 max-w-4xl mx-auto border-2 border-purple-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-purple-600" />
              Proceso de Tokenización NFT
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    demoStep > index ? 'bg-green-500 text-white' : 
                    demoStep === index && isProcessing ? 'bg-blue-500 text-white animate-pulse' :
                    'bg-gray-200 text-gray-500'
                  }`}>
                    {demoStep > index ? <CheckCircle className="h-4 w-4" /> : 
                     demoStep === index && isProcessing ? <Clock className="h-4 w-4" /> : index + 1}
                  </div>
                  <div className="flex-1">
                    <p className={`font-medium ${demoStep > index ? 'text-green-700' : 'text-gray-700'}`}>
                      {step}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex gap-4 mt-8 justify-center">
              {demoStep === 0 && (
                <Button 
                  onClick={handleDemo} 
                  disabled={isProcessing}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  {isProcessing ? (
                    <>
                      <Clock className="mr-2 h-5 w-5 animate-spin" />
                      Procesando...
                    </>
                  ) : (
                    <>
                      Iniciar Demo
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              )}
              
              {demoStep === 4 && !isProcessing && (
                <div className="text-center space-y-4">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <p className="text-green-800 font-semibold">¡NFT Enviado Exitosamente!</p>
                    <p className="text-sm text-green-600 mt-1">
                      Token ID: #VH-2024-001234 | Gas usado: 0.0021 ETH
                    </p>
                  </div>
                  <Button onClick={resetDemo} variant="outline">
                    Reiniciar Demo
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default VehicleDemo;
