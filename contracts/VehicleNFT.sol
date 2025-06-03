
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

/**
 * @title VehicleNFT
 * @dev Contrato NFT para tokenizar vehículos del sistema registral argentino
 */
contract VehicleNFT is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    
    Counters.Counter private _tokenIdCounter;
    
    // Estructura de datos del vehículo
    struct VehicleData {
        string chasisNumber;      // Número de chasis
        string motorNumber;       // Número de motor
        string formulario08Hash;  // Hash del formulario 08
        string brand;             // Marca
        string model;             // Modelo
        uint16 year;              // Año de fabricación
        uint8 ownerCount;         // Cantidad de dueños
        bool isLibreDeuda;        // Estado libre de deuda
        string dominioReport;     // Último informe de dominio
        string filecoinCID;       // CID de Filecoin con metadata comprimida
        uint256 registrationDate; // Fecha de registro en blockchain
        bool isActive;            // Estado activo del NFT
    }
    
    // Mapeo de tokenId a datos del vehículo
    mapping(uint256 => VehicleData) public vehicles;
    
    // Mapeo de número de chasis a tokenId (para evitar duplicados)
    mapping(string => uint256) public chasisToTokenId;
    
    // Eventos
    event VehicleTokenized(
        uint256 indexed tokenId,
        string chasisNumber,
        address indexed owner,
        string filecoinCID
    );
    
    event VehicleDataUpdated(
        uint256 indexed tokenId,
        string newFilecoinCID,
        bool newLibreDeudaStatus
    );
    
    constructor() ERC721("RegistroBlockchain Vehicle", "RBV") {}
    
    /**
     * @dev Tokeniza un vehículo nuevo
     * @param to Dirección del propietario
     * @param chasisNumber Número de chasis único
     * @param motorNumber Número de motor
     * @param formulario08Hash Hash del formulario 08
     * @param brand Marca del vehículo
     * @param model Modelo del vehículo
     * @param year Año de fabricación
     * @param ownerCount Cantidad de dueños previos
     * @param filecoinCID CID de Filecoin con todos los documentos
     */
    function tokenizeVehicle(
        address to,
        string memory chasisNumber,
        string memory motorNumber,
        string memory formulario08Hash,
        string memory brand,
        string memory model,
        uint16 year,
        uint8 ownerCount,
        string memory filecoinCID,
        string memory tokenURI
    ) public onlyOwner returns (uint256) {
        require(chasisToTokenId[chasisNumber] == 0, "Vehicle already tokenized");
        require(bytes(chasisNumber).length > 0, "Invalid chasis number");
        require(year >= 1900 && year <= 2030, "Invalid year");
        
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        
        // Crear datos del vehículo
        vehicles[tokenId] = VehicleData({
            chasisNumber: chasisNumber,
            motorNumber: motorNumber,
            formulario08Hash: formulario08Hash,
            brand: brand,
            model: model,
            year: year,
            ownerCount: ownerCount,
            isLibreDeuda: true, // Se asume libre de deuda al tokenizar
            dominioReport: "Initial registration",
            filecoinCID: filecoinCID,
            registrationDate: block.timestamp,
            isActive: true
        });
        
        // Mapear chasis a tokenId
        chasisToTokenId[chasisNumber] = tokenId;
        
        // Mintear NFT
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, tokenURI);
        
        emit VehicleTokenized(tokenId, chasisNumber, to, filecoinCID);
        
        return tokenId;
    }
    
    /**
     * @dev Actualizar datos del vehículo (solo oráculos autorizados)
     * @param tokenId ID del token
     * @param newFilecoinCID Nuevo CID con documentos actualizados
     * @param newLibreDeudaStatus Nuevo estado de libre deuda
     * @param newDominioReport Nuevo informe de dominio
     */
    function updateVehicleData(
        uint256 tokenId,
        string memory newFilecoinCID,
        bool newLibreDeudaStatus,
        string memory newDominioReport
    ) public onlyOwner {
        require(_exists(tokenId), "Token does not exist");
        
        vehicles[tokenId].filecoinCID = newFilecoinCID;
        vehicles[tokenId].isLibreDeuda = newLibreDeudaStatus;
        vehicles[tokenId].dominioReport = newDominioReport;
        
        emit VehicleDataUpdated(tokenId, newFilecoinCID, newLibreDeudaStatus);
    }
    
    /**
     * @dev Transferir vehículo (incrementa contador de dueños)
     */
    function transferVehicle(address from, address to, uint256 tokenId) public {
        require(_isApprovedOrOwner(_msgSender(), tokenId), "Not authorized");
        require(vehicles[tokenId].isLibreDeuda, "Vehicle not libre de deuda");
        
        // Incrementar contador de dueños
        vehicles[tokenId].ownerCount++;
        
        _transfer(from, to, tokenId);
    }
    
    /**
     * @dev Obtener todos los datos del vehículo
     */
    function getVehicleData(uint256 tokenId) public view returns (VehicleData memory) {
        require(_exists(tokenId), "Token does not exist");
        return vehicles[tokenId];
    }
    
    /**
     * @dev Verificar si un vehículo está libre de deuda
     */
    function isVehicleLibreDeuda(uint256 tokenId) public view returns (bool) {
        require(_exists(tokenId), "Token does not exist");
        return vehicles[tokenId].isLibreDeuda;
    }
    
    // Override functions requeridas
    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
        
        // Limpiar datos
        string memory chasis = vehicles[tokenId].chasisNumber;
        delete vehicles[tokenId];
        delete chasisToTokenId[chasis];
    }
    
    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }
}
