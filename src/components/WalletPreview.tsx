import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Wallet, Car, CheckCircle, Calendar, User, Hash, Shield, ExternalLink, Clock } from 'lucide-react';

const WalletPreview = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  // Datos simulados de NFTs de vehículos en la wallet
  const vehicleNFTs = [
    {
      tokenId: "1001",
      contractAddress: "0x742d35Cc6534C0532925a3b8D5c62F4c8f7c48e8",
      patente: "ABC123",
      marca: "Toyota",
      modelo: "Corolla",
      año: 2020,
      chasis: "1HGBH41JXMN109186",
      motor: "4T40E1234567",
      titular: "Juan Pérez",
      dni: "12.345.678",
      ownerCount: 1,
      mintDate: "2024-03-15",
      lastTransfer: "2024-03-15",
      isLibreDeuda: true,
      filecoinCID: "QmYwAPJzv5CZsnA625s3Xf2nemtYgPpHdWEz79ojWnPbdG",
      verificationStatus: "Verificado DNRPA",
      marketValue: "15,000 USDC",
      image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=400&h=300&fit=crop"
    },
    {
      tokenId: "1002",
      contractAddress: "0x742d35Cc6534C0532925a3b8D5c62F4c8f7c48e8",
      patente: "DEF456",
      marca: "Ford",
      modelo: "Focus",
      año: 2019,
      chasis: "2HGBH41JXMN109187",
      motor: "5T40E1234568",
      titular: "María González",
      dni: "87.654.321",
      ownerCount: 2,
      mintDate: "2024-02-20",
      lastTransfer: "2024-05-10",
      isLibreDeuda: true,
      filecoinCID: "QmYwAPJzv5CZsnA625s3Xf2nemtYgPpHdWEz79ojWnPbdH",
      verificationStatus: "Verificado DNRPA",
      marketValue: "12,500 USDC",
      image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=400&h=300&fit=crop"
    }
  ];

  const mockWalletAddress = "0x742d35Cc6534C0532925a3b8D5c62F4c8f7c48e8";

  const handleConnectWallet = async () => {
    setIsConnecting(true);
    // Simular conexión de wallet
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsConnected(true);
    setIsConnecting(false);
  };

  const handleDisconnectWallet = () => {
    setIsConnected(false);
    setSelectedVehicle(null);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Preview: Conectá tu Wallet y Descubrí tus NFTs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experimentá cómo sería detectar automáticamente los NFTs de vehículos en tu wallet 
            con análisis completo on-chain
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {!isConnected ? (
            // Pantalla de conexión de wallet
            <Card className="text-center py-12">
              <CardContent>
                <div className="space-y-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto">
                    <Wallet className="h-12 w-12 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Conectá tu Wallet para Continuar
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Una vez conectada, detectaremos automáticamente todos los NFTs de vehículos 
                      en tu wallet con información completa verificada on-chain.
                    </p>
                  </div>
                  <Button 
                    onClick={handleConnectWallet}
                    disabled={isConnecting}
                    size="lg"
                    className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                  >
                    {isConnecting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Conectando...
                      </>
                    ) : (
                      <>
                        <Wallet className="mr-2 h-4 w-4" />
                        Conectar Wallet (Demo)
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            // Dashboard de NFTs detectados
            <div className="space-y-8">
              {/* Header de wallet conectada */}
              <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">Wallet Conectada</h3>
                        <p className="text-sm text-gray-600 font-mono">{mockWalletAddress}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-100 text-green-800 mb-2">
                        {vehicleNFTs.length} NFTs Detectados
                      </Badge>
                      <div>
                        <Button onClick={handleDisconnectWallet} variant="outline" size="sm">
                          Desconectar
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Lista de NFTs */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">NFTs de Vehículos Detectados</h3>
                  {vehicleNFTs.map((vehicle, index) => (
                    <Card 
                      key={vehicle.tokenId}
                      className={`cursor-pointer transition-all hover:shadow-lg ${
                        selectedVehicle?.tokenId === vehicle.tokenId 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedVehicle(vehicle)}
                    >
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          <img 
                            src={vehicle.image}
                            alt={`${vehicle.marca} ${vehicle.modelo}`}
                            className="w-16 h-16 rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-bold">{vehicle.marca} {vehicle.modelo}</h4>
                              <Badge variant="secondary">#{vehicle.tokenId}</Badge>
                            </div>
                            <div className="space-y-1 text-sm text-gray-600">
                              <div>Patente: <span className="font-mono">{vehicle.patente}</span></div>
                              <div>Año: {vehicle.año} | Titular: {vehicle.titular}</div>
                              <div className="flex items-center gap-2">
                                <CheckCircle className="h-3 w-3 text-green-500" />
                                <span className="text-green-600">{vehicle.verificationStatus}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Detalles del NFT seleccionado */}
                <div>
                  {selectedVehicle ? (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Car className="h-5 w-5" />
                          Análisis On-Chain Completo
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {/* Imagen del vehículo */}
                        <div className="relative rounded-lg overflow-hidden">
                          <img 
                            src={selectedVehicle.image}
                            alt={`${selectedVehicle.marca} ${selectedVehicle.modelo}`}
                            className="w-full h-48 object-cover"
                          />
                          <div className="absolute top-2 right-2">
                            <Badge className="bg-green-500">Libre de Deuda</Badge>
                          </div>
                        </div>

                        {/* Información básica */}
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="text-sm text-gray-500">Marca/Modelo</div>
                            <div className="font-semibold">{selectedVehicle.marca} {selectedVehicle.modelo}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500">Año</div>
                            <div className="font-semibold">{selectedVehicle.año}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500">Patente</div>
                            <div className="font-mono font-semibold">{selectedVehicle.patente}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500">Valor de Mercado</div>
                            <div className="font-semibold text-green-600">{selectedVehicle.marketValue}</div>
                          </div>
                        </div>

                        {/* Información técnica */}
                        <div className="space-y-3">
                          <h4 className="font-semibold flex items-center gap-2">
                            <Hash className="h-4 w-4" />
                            Datos Técnicos
                          </h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-500">Número de Chasis:</span>
                              <span className="font-mono">{selectedVehicle.chasis}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-500">Número de Motor:</span>
                              <span className="font-mono">{selectedVehicle.motor}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-500">DNI Titular:</span>
                              <span>{selectedVehicle.dni}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-500">Cantidad de Dueños:</span>
                              <span>{selectedVehicle.ownerCount}</span>
                            </div>
                          </div>
                        </div>

                        {/* Información blockchain */}
                        <div className="space-y-3">
                          <h4 className="font-semibold flex items-center gap-2">
                            <Shield className="h-4 w-4" />
                            Información Blockchain
                          </h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-500">Token ID:</span>
                              <span className="font-mono">#{selectedVehicle.tokenId}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-500">Contrato:</span>
                              <span className="font-mono text-xs">{selectedVehicle.contractAddress.slice(0, 8)}...</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-500">Fecha de Mint:</span>
                              <span>{selectedVehicle.mintDate}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-500">Última Transferencia:</span>
                              <span>{selectedVehicle.lastTransfer}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-500">Metadata IPFS:</span>
                              <span className="font-mono text-xs">{selectedVehicle.filecoinCID.slice(0, 8)}...</span>
                            </div>
                          </div>
                        </div>

                        {/* Estados de verificación */}
                        <div className="space-y-3">
                          <h4 className="font-semibold flex items-center gap-2">
                            <CheckCircle className="h-4 w-4" />
                            Estado de Verificación
                          </h4>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                              <span className="text-sm">Verificación DNRPA</span>
                              <Badge className="bg-green-100 text-green-800">✅ Verificado</Badge>
                            </div>
                            <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                              <span className="text-sm">Estado Libre de Deuda</span>
                              <Badge className="bg-green-100 text-green-800">✅ Al día</Badge>
                            </div>
                            <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                              <span className="text-sm">Documentación Digital</span>
                              <Badge className="bg-blue-100 text-blue-800">📄 Completa</Badge>
                            </div>
                          </div>
                        </div>

                        {/* Acciones */}
                        <div className="flex gap-2">
                          <Button className="flex-1" size="sm">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Ver en Blockchain
                          </Button>
                          <Button variant="outline" className="flex-1" size="sm">
                            <Clock className="h-4 w-4 mr-2" />
                            Historial Completo
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ) : (
                    <Card>
                      <CardContent className="p-12 text-center">
                        <Car className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-gray-500 mb-2">
                          Seleccioná un NFT
                        </h3>
                        <p className="text-gray-400">
                          Hacé clic en cualquier NFT de la lista para ver el análisis on-chain completo
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WalletPreview;
