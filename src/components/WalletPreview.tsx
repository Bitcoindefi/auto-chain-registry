import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Wallet, Car, Shield, ExternalLink, Eye, Download, RefreshCw } from 'lucide-react';

const WalletPreview = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);

  const mockNFTs = [
    {
      tokenId: "1001",
      patente: "ABC123",
      marca: "Toyota",
      modelo: "Corolla",
      año: 2020,
      propietario: "Juan Pérez",
      dni: "12.345.678",
      chasis: "1HGBH41JXMN109186",
      motor: "4T40E1234567",
      transactionHash: "0x1a2b3c4d5e6f...",
      blockNumber: 18450123,
      mintDate: "2024-01-15",
      lastTransfer: "2024-03-10",
      filecoinCID: "QmYwAPJzv5CZsnA625s3Xf2nemtYgPpHdWEz79ojWnPbdG",
      verificationStatus: "Verificado DNRPA",
      marketValue: "15,000 USDC",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop&crop=center"
    },
    {
      tokenId: "1002",
      patente: "XYZ789",
      marca: "Honda",
      modelo: "Civic",
      año: 2021,
      propietario: "María García",
      dni: "23.456.789",
      chasis: "2HGFC2F59MH123456",
      motor: "R18A1234567",
      transactionHash: "0x7f8e9d6c5b4a...",
      blockNumber: 18450567,
      mintDate: "2024-02-20",
      lastTransfer: "2024-06-15",
      filecoinCID: "QmPkDPiX26Dvne7oEDAenkdXq6cxstHJZWgXm8M8CaQ3Pc",
      verificationStatus: "Verificado DNRPA",
      marketValue: "18,500 USDC",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop&crop=center"
    }
  ];

  const connectWallet = () => {
    setIsConnecting(true);
    setTimeout(() => {
      setIsConnected(true);
      setIsConnecting(false);
    }, 2000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Preview: Wallet Conectada con NFTs Vehiculares
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simulación de detección automática de NFTs de vehículos con análisis completo on-chain
          </p>
        </div>

        {/* Imagen conceptual del wallet conectado */}
        <div className="mb-12 text-center">
          <div className="relative inline-block rounded-2xl overflow-hidden shadow-xl max-w-4xl">
            <img 
              src="https://images.unsplash.com/photo-1560472355-536de3962603?w=1200&h=400&fit=crop&crop=center"
              alt="Dashboard de wallet digital con vehículos NFT - Interfaz blockchain automotor"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 via-purple-600/80 to-indigo-600/80 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-2">Wallet Digital Automotor</h3>
                <p className="text-blue-100">Gestión completa de NFTs vehiculares con análisis on-chain</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Panel de conexión de wallet */}
          <Card className="border-blue-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wallet className="h-6 w-6 text-blue-600" />
                Conexión de Wallet
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!isConnected ? (
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <Wallet className="h-10 w-10 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Conectá tu Wallet</h3>
                    <p className="text-gray-600 mb-4">
                      Detectamos automáticamente NFTs de vehículos con verificación DNRPA
                    </p>
                  </div>
                  <Button 
                    onClick={connectWallet} 
                    disabled={isConnecting}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    {isConnecting ? (
                      <>
                        <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                        Conectando...
                      </>
                    ) : (
                      <>
                        <Wallet className="mr-2 h-4 w-4" />
                        Conectar MetaMask
                      </>
                    )}
                  </Button>
                  
                  <div className="text-xs text-gray-500 space-y-1">
                    <div>• Detección automática de NFTs vehiculares</div>
                    <div>• Análisis on-chain en tiempo real</div>
                    <div>• Verificación contra base DNRPA</div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <Shield className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-green-800">Wallet Conectada</div>
                      <div className="text-sm text-green-600">0x742d35Cc6534C0532925a3b8D5c62F4c...</div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">NFTs Detectados</h4>
                    <div className="text-2xl font-bold text-blue-700">{mockNFTs.length}</div>
                    <div className="text-sm text-blue-600">Vehículos tokenizados</div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Lista de NFTs detectados */}
          <Card className="border-purple-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Car className="h-6 w-6 text-purple-600" />
                NFTs Vehiculares Detectados
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!isConnected ? (
                <div className="text-center py-8 text-gray-500">
                  <Car className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                  <p>Conectá tu wallet para ver tus NFTs vehiculares</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {mockNFTs.map((nft) => (
                    <div key={nft.tokenId} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex gap-4">
                        <img 
                          src={nft.image}
                          alt={`${nft.marca} ${nft.modelo} - NFT vehicular`}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-semibold">{nft.marca} {nft.modelo} {nft.año}</h4>
                            <Badge className="bg-green-100 text-green-800 text-xs">
                              {nft.verificationStatus}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 space-y-1">
                            <div><strong>Patente:</strong> {nft.patente}</div>
                            <div><strong>Token ID:</strong> #{nft.tokenId}</div>
                            <div><strong>Propietario:</strong> {nft.propietario}</div>
                            <div><strong>Valor estimado:</strong> {nft.marketValue}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Análisis on-chain detallado */}
        {isConnected && (
          <div className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-6 w-6 text-indigo-600" />
                  Análisis On-Chain Detallado - NFT #{mockNFTs[0].tokenId}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Datos del Vehículo</h4>
                    <div className="space-y-2 text-sm">
                      <div><strong>Chasis:</strong> {mockNFTs[0].chasis}</div>
                      <div><strong>Motor:</strong> {mockNFTs[0].motor}</div>
                      <div><strong>DNI Titular:</strong> {mockNFTs[0].dni}</div>
                      <div><strong>Año Modelo:</strong> {mockNFTs[0].año}</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Blockchain Data</h4>
                    <div className="space-y-2 text-sm">
                      <div><strong>Block:</strong> #{mockNFTs[0].blockNumber}</div>
                      <div><strong>Mint Date:</strong> {mockNFTs[0].mintDate}</div>
                      <div><strong>Last Transfer:</strong> {mockNFTs[0].lastTransfer}</div>
                      <div><strong>TX Hash:</strong> {mockNFTs[0].transactionHash}</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Documentación</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Download className="h-4 w-4 text-blue-500" />
                        <span>Formulario 08 Digital</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Download className="h-4 w-4 text-blue-500" />
                        <span>Cédula Verde</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ExternalLink className="h-4 w-4 text-purple-500" />
                        <span>Filecoin IPFS</span>
                      </div>
                      <div className="text-xs text-gray-500">CID: {mockNFTs[0].filecoinCID}</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="font-semibold text-green-800">Verificación DNRPA Completa</div>
                      <div className="text-sm text-green-700">
                        Todos los datos han sido verificados contra la base oficial del DNRPA
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default WalletPreview;
