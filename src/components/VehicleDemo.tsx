
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Car, Wallet, FileText, Shield, ArrowRight } from 'lucide-react';

const VehicleDemo = () => {
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  const vehicleData = {
    patente: "ABC123",
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020,
    chasis: "1HGBH41JXMN109186",
    motor: "4T40E1234567",
    titular: "Juan Pérez",
    dni: "12.345.678",
    walletAddress: "0x742d35Cc6534C0532925a3b8D5c62F4c...",
    form08: "08-2024-001234",
    cedula: "Verde - Vigente"
  };

  const steps = [
    { id: 1, title: "Verificación KYC", description: "Wallet verificada con identidad del titular" },
    { id: 2, title: "Validación DNRPA", description: "Verificación contra base de datos oficial" },
    { id: 3, title: "Tokenización NFT", description: "Creación del NFT con metadata completa" },
    { id: 4, title: "Transferencia", description: "Envío seguro a wallet verificada" }
  ];

  const handleNextStep = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setStep(prev => prev < 4 ? prev + 1 : prev);
      setIsProcessing(false);
    }, 2000);
  };

  const resetDemo = () => {
    setStep(1);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Demo Interactivo: Tokenización de Vehículo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simulación del proceso de tokenización inspirado en los estándares RG 1069/2025 CNV
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Imagen del vehículo y información */}
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&h=600&fit=crop&crop=center"
                alt="Vehículo sedán moderno - Toyota Corolla para tokenización NFT"
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-green-500 text-white">
                  Listo para Tokenización
                </Badge>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="h-5 w-5" />
                  Datos del Vehículo
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div><strong>Patente:</strong> {vehicleData.patente}</div>
                  <div><strong>Marca:</strong> {vehicleData.marca}</div>
                  <div><strong>Modelo:</strong> {vehicleData.modelo}</div>
                  <div><strong>Año:</strong> {vehicleData.año}</div>
                  <div><strong>Chasis:</strong> {vehicleData.chasis}</div>
                  <div><strong>Motor:</strong> {vehicleData.motor}</div>
                </div>
                
                <div className="border-t pt-3 mt-3">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-500" />
                    Documentación Digital Certificada
                  </h4>
                  <div className="space-y-1 text-sm">
                    <div>📄 Formulario 08: {vehicleData.form08}</div>
                    <div>🆔 Cédula: {vehicleData.cedula}</div>
                    <div>✅ Firma Digital: Verificada</div>
                    <div>💾 Almacenamiento: Filecoin IPFS</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Proceso de tokenización */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wallet className="h-5 w-5" />
                  Titular Verificado (KYC)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div><strong>Nombre:</strong> {vehicleData.titular}</div>
                  <div><strong>DNI:</strong> {vehicleData.dni}</div>
                  <div><strong>Wallet:</strong> {vehicleData.walletAddress}</div>
                  <Badge className="bg-green-100 text-green-800">
                    ✅ KYC Verificado
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Proceso de Tokenización</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {steps.map((stepItem, index) => (
                    <div 
                      key={stepItem.id}
                      className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                        step > stepItem.id ? 'bg-green-50 border border-green-200' :
                        step === stepItem.id ? 'bg-blue-50 border border-blue-200' :
                        'bg-gray-50 border border-gray-200'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        step > stepItem.id ? 'bg-green-500 text-white' :
                        step === stepItem.id ? 'bg-blue-500 text-white' :
                        'bg-gray-300 text-gray-600'
                      }`}>
                        {step > stepItem.id ? <CheckCircle className="w-4 h-4" /> : stepItem.id}
                      </div>
                      <div>
                        <div className="font-semibold">{stepItem.title}</div>
                        <div className="text-sm text-gray-600">{stepItem.description}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-3">
                  {step < 4 ? (
                    <Button 
                      onClick={handleNextStep} 
                      disabled={isProcessing}
                      className="w-full"
                    >
                      {isProcessing ? 'Procesando...' : `Ejecutar ${steps[step - 1]?.title}`}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <div className="text-center space-y-3">
                      <div className="p-4 bg-green-100 border border-green-200 rounded-lg">
                        <div className="font-bold text-green-800 mb-2">¡NFT Creado Exitosamente!</div>
                        <div className="text-sm text-green-700">
                          El vehículo {vehicleData.marca} {vehicleData.modelo} ha sido tokenizado 
                          y enviado a la wallet verificada con toda la documentación certificada.
                        </div>
                      </div>
                      <Button onClick={resetDemo} variant="outline" className="w-full">
                        Reiniciar Demo
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Innovaciones RG 1069/2025 */}
            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-800">
                  Innovaciones RG 1069/2025 CNV
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Equivalencia funcional 1:1 NFT = Vehículo</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Respaldo y segregación patrimonial</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Derecho irrestricto de canje</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Transparencia y protección al usuario</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleDemo;
