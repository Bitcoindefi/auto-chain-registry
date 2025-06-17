import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Wallet, Car, Shield, ExternalLink, Eye, Download, RefreshCw, Sparkles } from 'lucide-react';

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
      image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=400&h=300&fit=crop&crop=center"
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
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&h=300&fit=crop&crop=center"
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
    <section className="py-24 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/50"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23e2e8f0" fill-opacity="0.3"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="relative container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3 rounded-full text-sm font-medium text-blue-800 mb-6 shadow-lg">
            <Sparkles className="h-4 w-4" />
            Simulación en Tiempo Real
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Wallet Conectada
            </span>
            <br />
            <span className="text-gray-800">con NFTs Vehiculares</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Simulación de detección automática de NFTs de vehículos con análisis completo on-chain
          </p>
        </div>

        {/* Conceptual image */}
        <div className="mb-16 text-center">
          <div className="relative inline-block rounded-3xl overflow-hidden shadow-2xl max-w-5xl group">
            <img 
              src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&h=400&fit=crop&crop=center"
              alt="Dashboard de wallet digital con vehículos NFT - Interfaz blockchain automotor"
              className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-indigo-600/90 flex items-center justify-center">
              <div className="text-center text-white space-y-4">
                <h3 className="text-3xl font-black">Wallet Digital Automotor</h3>
                <p className="text-xl text-blue-100 max-w-2xl">Gestión completa de NFTs vehiculares con análisis on-chain</p>
                <div className="flex justify-center space-x-8 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">2</div>
                    <div className="text-sm text-blue-200">NFTs Detectados</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">100%</div>
                    <div className="text-sm text-blue-200">Verificados</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Enhanced wallet connection panel */}
          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm hover:shadow-blue-500/10 transition-all duration-500 group">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                  <Wallet className="h-6 w-6 text-white" />
                </div>
                Conexión de Wallet
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {!isConnected ? (
                <div className="text-center space-y-8">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <Wallet className="h-12 w-12 text-blue-600" />
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900">Conectá tu Wallet</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Detectamos automáticamente NFTs de vehículos con verificación DNRPA
                    </p>
                  </div>
                  <Button 
                    onClick={connectWallet} 
                    disabled={isConnecting}
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-700 hover:via-purple-700 hover:to-blue-700 text-white border-0 py-4 text-lg font-semibold shadow-xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105"
                  >
                    {isConnecting ? (
                      <>
                        <RefreshCw className="mr-3 h-5 w-5 animate-spin" />
                        Conectando...
                      </>
                    ) : (
                      <>
                        <Wallet className="mr-3 h-5 w-5" />
                        Conectar MetaMask
                      </>
                    )}
                  </Button>
                  
                  <div className="grid grid-cols-1 gap-3 text-sm">
                    <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">Detección automática de NFTs vehiculares</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700">Análisis on-chain en tiempo real</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Verificación contra base DNRPA</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl shadow-lg">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-green-800 text-lg">Wallet Conectada</div>
                      <div className="text-sm text-green-600 font-mono">0x742d35Cc6534C0532925a3b8D5c62F4c...</div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6 shadow-lg">
                    <h4 className="font-bold text-blue-900 mb-4 text-lg">NFTs Detectados</h4>
                    <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">{mockNFTs.length}</div>
                    <div className="text-blue-700 font-medium">Vehículos tokenizados</div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Enhanced NFT list */}
          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm hover:shadow-purple-500/10 transition-all duration-500">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                  <Car className="h-6 w-6 text-white" />
                </div>
                NFTs Vehiculares Detectados
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!isConnected ? (
                <div className="text-center py-12 text-gray-500">
                  <Car className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                  <p className="text-lg">Conectá tu wallet para ver tus NFTs vehiculares</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {mockNFTs.map((nft) => (
                    <div key={nft.tokenId} className="group border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-purple-300 transition-all duration-300 bg-gradient-to-r from-white to-gray-50">
                      <div className="flex gap-6">
                        <div className="relative">
                          <img 
                            src={nft.image}
                            alt={`${nft.marca} ${nft.modelo} - NFT vehicular`}
                            className="w-24 h-24 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                            <Shield className="h-3 w-3 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <h4 className="font-bold text-lg text-gray-900">{nft.marca} {nft.modelo} {nft.año}</h4>
                            <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-200 text-xs font-medium">
                              {nft.verificationStatus}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                            <div><span className="font-semibold text-gray-800">Patente:</span> {nft.patente}</div>
                            <div><span className="font-semibold text-gray-800">Token ID:</span> #{nft.tokenId}</div>
                            <div><span className="font-semibold text-gray-800">Propietario:</span> {nft.propietario}</div>
                            <div><span className="font-semibold text-gray-800">Valor:</span> <span className="text-green-600 font-bold">{nft.marketValue}</span></div>
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

        {/* Enhanced detailed analysis */}
        {isConnected && (
          <div className="mt-16">
            <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                  Análisis On-Chain Detallado - NFT #{mockNFTs[0].tokenId}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="space-y-6">
                    <h4 className="font-bold text-gray-900 text-lg border-b border-gray-200 pb-2">Datos del Vehículo</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Chasis:</span>
                        <span className="font-mono text-sm">{mockNFTs[0].chasis}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Motor:</span>
                        <span className="font-mono text-sm">{mockNFTs[0].motor}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">DNI Titular:</span>
                        <span className="font-semibold">{mockNFTs[0].dni}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Año Modelo:</span>
                        <span className="font-semibold">{mockNFTs[0].año}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <h4 className="font-bold text-gray-900 text-lg border-b border-gray-200 pb-2">Blockchain Data</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Block:</span>
                        <span className="font-mono text-sm">#{mockNFTs[0].blockNumber}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Mint Date:</span>
                        <span className="font-semibold">{mockNFTs[0].mintDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Last Transfer:</span>
                        <span className="font-semibold">{mockNFTs[0].lastTransfer}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">TX Hash:</span>
                        <span className="font-mono text-xs">{mockNFTs[0].transactionHash}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <h4 className="font-bold text-gray-900 text-lg border-b border-gray-200 pb-2">Documentación</h4>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer">
                        <Download className="h-4 w-4 text-blue-500" />
                        <span className="text-sm font-medium">Formulario 08 Digital</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors cursor-pointer">
                        <Download className="h-4 w-4 text-green-500" />
                        <span className="text-sm font-medium">Cédula Verde</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors cursor-pointer">
                        <ExternalLink className="h-4 w-4 text-purple-500" />
                        <span className="text-sm font-medium">Filecoin IPFS</span>
                      </div>
                      <div className="text-xs text-gray-500 font-mono bg-gray-50 p-2 rounded">
                        CID: {mockNFTs[0].filecoinCID}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 border border-green-200 rounded-2xl shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-green-800 text-lg">Verificación DNRPA Completa</div>
                      <div className="text-green-700">
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
