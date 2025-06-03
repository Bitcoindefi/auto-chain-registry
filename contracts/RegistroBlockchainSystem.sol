
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./VehicleNFT.sol";
import "./VehicleMarketplace.sol";
import "./DNRPAOracle.sol";

/**
 * @title RegistroBlockchainSystem
 * @dev Contrato principal que integra todo el sistema
 */
contract RegistroBlockchainSystem {
    
    VehicleNFT public vehicleNFT;
    VehicleMarketplace public marketplace;
    DNRPAOracle public oracle;
    
    address public admin;
    
    // Eventos del sistema
    event SystemDeployed(
        address vehicleNFT,
        address marketplace,
        address oracle
    );
    
    event VehicleRegistered(
        uint256 indexed tokenId,
        string chasisNumber,
        address indexed owner
    );
    
    modifier onlyAdmin() {
        require(msg.sender == admin, "Not admin");
        _;
    }
    
    constructor() {
        admin = msg.sender;
        
        // Desplegar contratos del sistema
        vehicleNFT = new VehicleNFT();
        marketplace = new VehicleMarketplace(address(vehicleNFT));
        oracle = new DNRPAOracle(address(vehicleNFT));
        
        emit SystemDeployed(address(vehicleNFT), address(marketplace), address(oracle));
    }
    
    /**
     * @dev Caso de uso completo: Registrar vehículo en el sistema
     */
    function registerVehicle(
        address owner,
        string memory chasisNumber,
        string memory motorNumber,
        string memory formulario08Hash,
        string memory brand,
        string memory model,
        uint16 year,
        uint8 ownerCount,
        string memory filecoinCID,
        string memory tokenURI
    ) external onlyAdmin returns (uint256) {
        
        uint256 tokenId = vehicleNFT.tokenizeVehicle(
            owner,
            chasisNumber,
            motorNumber,
            formulario08Hash,
            brand,
            model,
            year,
            ownerCount,
            filecoinCID,
            tokenURI
        );
        
        emit VehicleRegistered(tokenId, chasisNumber, owner);
        
        return tokenId;
    }
    
    /**
     * @dev Caso de uso: Proceso completo de venta
     * 1. Verificar vehículo con DNRPA
     * 2. Listar en marketplace
     * 3. Crear escrow
     * 4. Transferir cuando ambas partes aprueben
     */
    function initiateSaleProcess(uint256 tokenId, uint256 price) external returns (bytes32, uint256) {
        // 1. Solicitar verificación
        bytes32 requestId = oracle.requestVerification(tokenId);
        
        // 2. Listar en marketplace (se hace después de verificación en práctica)
        // Por simplicidad del demo, asumimos verificación instantánea
        marketplace.listVehicle(tokenId, price);
        uint256 saleId = marketplace.tokenToSaleId(tokenId);
        
        return (requestId, saleId);
    }
    
    /**
     * @dev Obtener información completa del vehículo
     */
    function getVehicleInfo(uint256 tokenId) external view returns (
        VehicleNFT.VehicleData memory vehicleData,
        address currentOwner,
        string memory tokenURI
    ) {
        vehicleData = vehicleNFT.getVehicleData(tokenId);
        currentOwner = vehicleNFT.ownerOf(tokenId);
        tokenURI = vehicleNFT.tokenURI(tokenId);
    }
    
    /**
     * @dev Obtener estadísticas del sistema
     */
    function getSystemStats() external view returns (
        uint256 totalVehicles,
        uint256 activeSales,
        address vehicleNFTAddress,
        address marketplaceAddress,
        address oracleAddress
    ) {
        // Nota: En implementación real se mantendría contadores
        totalVehicles = 0; // Se debería implementar contador
        activeSales = 0;   // Se debería implementar contador
        vehicleNFTAddress = address(vehicleNFT);
        marketplaceAddress = address(marketplace);
        oracleAddress = address(oracle);
    }
    
    /**
     * @dev Transferir administración
     */
    function transferAdmin(address newAdmin) external onlyAdmin {
        admin = newAdmin;
    }
}
