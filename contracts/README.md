
# Registro.blockchain - Contratos Inteligentes

## Descripción del Sistema

Este conjunto de contratos implementa la funcionalidad core de Registro.blockchain para la tokenización de vehículos del sistema registral argentino usando NFTs y metadata almacenada en Filecoin.

## Contratos Principales

### 1. VehicleNFT.sol
- **Propósito**: NFT principal que representa vehículos tokenizados
- **Funcionalidades**:
  - Tokenización de vehículos con datos completos (chasis, motor, formulario 08)
  - Metadata comprimida almacenada en Filecoin (CID)
  - Tracking de cantidad de dueños
  - Estado libre de deuda
  - Informes de dominio actualizables

### 2. VehicleMarketplace.sol
- **Propósito**: Marketplace para compra-venta segura de vehículos
- **Funcionalidades**:
  - Listado de vehículos para venta
  - Sistema de escrow (depósito en garantía)
  - Aprobación bilateral para transferencias
  - Protección contra fraude
  - Fees de plataforma (0.5%)

### 3. DNRPAOracle.sol
- **Propósito**: Conexión con base de datos oficial del DNRPA
- **Funcionalidades**:
  - Verificación de autenticidad de vehículos
  - Actualización de estado libre de deuda
  - Reportes de dominio actualizados
  - Sistema de requests asíncronos

### 4. RegistroBlockchainSystem.sol
- **Propósito**: Contrato principal que integra todo el ecosistema
- **Funcionalidades**:
  - Deploy automático de todos los contratos
  - Casos de uso completos
  - Administración centralizada
  - Estadísticas del sistema

## Casos de Uso Implementados

### 1. Tokenización de Vehículo
```solidity
// Registrar nuevo vehículo en el sistema
uint256 tokenId = system.registerVehicle(
    owner,
    "1HGCM82633A004352", // Chasis
    "H22A3004352",       // Motor
    "hash_formulario08", // Hash F08
    "Honda",             // Marca
    "Civic",             // Modelo
    2020,                // Año
    1,                   // Cantidad dueños
    "QmXxx...",          // CID Filecoin
    "ipfs://QmYyy..."    // Token URI
);
```

### 2. Proceso de Venta Completo
```solidity
// 1. Iniciar proceso de venta
(bytes32 requestId, uint256 saleId) = system.initiateSaleProcess(tokenId, 5000000); // 5M wei

// 2. Comprador crea escrow
marketplace.createEscrow{value: 5000000}(saleId);

// 3. Verificación DNRPA (simulada por oráculo)
oracle.completeVerification(requestId, true, true, "QmReport...", "Clean title");

// 4. Ambas partes aprueban transferencia
marketplace.approveTransferSeller(saleId);
marketplace.approveTransferBuyer(saleId);

// 5. Transferencia se ejecuta automáticamente
```

### 3. Verificación con DNRPA
```solidity
// Solicitar verificación
bytes32 requestId = oracle.requestVerification(tokenId);

// Oráculo completa verificación
oracle.completeVerification(
    requestId,
    true,                    // Verificado
    true,                    // Libre de deuda
    "QmVerificationReport", // CID del reporte
    "Vehicle verified clean" // Nuevo informe dominio
);
```

## Estructura de Datos del Vehículo

```solidity
struct VehicleData {
    string chasisNumber;      // Número de chasis único
    string motorNumber;       // Número de motor
    string formulario08Hash;  // Hash del formulario 08
    string brand;             // Marca del vehículo
    string model;             // Modelo
    uint16 year;              // Año de fabricación
    uint8 ownerCount;         // Cantidad de dueños
    bool isLibreDeuda;        // Estado libre de deuda
    string dominioReport;     // Último informe de dominio
    string filecoinCID;       // CID con documentos completos
    uint256 registrationDate; // Fecha de registro
    bool isActive;            // Estado del token
}
```

## Integración con Filecoin

Los documentos del vehículo se almacenan comprimidos en Filecoin:

- **Formulario 08** (documento de transferencia)
- **Cédula de identificación del automotor**
- **Título de propiedad**
- **Informes de dominio históricos**
- **Certificados de libre deuda**
- **Fotos del vehículo**

El CID de Filecoin se almacena en el NFT y puede actualizarse cuando hay nuevos documentos.

## Seguridad y Características

### Protecciones Implementadas:
- ✅ ReentrancyGuard en marketplace
- ✅ Verificación de ownership en transferencias
- ✅ Sistema de escrow con timeouts
- ✅ Aprobación bilateral para transferencias
- ✅ Prevención de doble tokenización (mapping chasis → tokenId)
- ✅ Validación de datos de entrada
- ✅ Eventos completos para tracking
- ✅ Sistema de oráculos autorizados

### Características Avanzadas:
- 🔄 Metadata actualizable via oráculos
- 📊 Tracking automático de historial de dueños
- 💰 Sistema de fees configurable
- ⏰ Timeouts para protección de compradores
- 🔐 Control de acceso granular
- 📱 Compatible con wallets estándar

## Deployment

```bash
# Compilar contratos
npx hardhat compile

# Deploy en testnet
npx hardhat run scripts/deploy.js --network goerli

# Verificar en Etherscan
npx hardhat verify --network goerli <CONTRACT_ADDRESS>
```

## Gas Estimado

- **Tokenización**: ~200,000 gas
- **Listado en marketplace**: ~100,000 gas  
- **Creación de escrow**: ~80,000 gas
- **Transferencia completa**: ~150,000 gas
- **Verificación DNRPA**: ~120,000 gas

## Roadmap Técnico

1. **V1**: Funcionalidad básica (actual)
2. **V2**: Integración con Layer 2 (Polygon/Arbitrum)
3. **V3**: Oráculos descentralizados múltiples
4. **V4**: Interoperabilidad cross-chain
5. **V5**: DAO governance para el protocolo
