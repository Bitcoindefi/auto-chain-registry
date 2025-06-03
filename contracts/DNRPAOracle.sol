
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./VehicleNFT.sol";

/**
 * @title DNRPAOracle
 * @dev Oráculo para conectar con la base de datos del DNRPA
 */
contract DNRPAOracle is Ownable {
    
    VehicleNFT public vehicleNFT;
    
    // Estructura para requests de verificación
    struct VerificationRequest {
        uint256 tokenId;
        string chasisNumber;
        address requester;
        uint256 timestamp;
        bool isCompleted;
        bool isVerified;
        string reportCID; // CID del reporte de verificación
    }
    
    mapping(bytes32 => VerificationRequest) public verificationRequests;
    mapping(address => bool) public authorizedOracles;
    
    // Eventos
    event VerificationRequested(
        bytes32 indexed requestId,
        uint256 indexed tokenId,
        string chasisNumber,
        address requester
    );
    
    event VerificationCompleted(
        bytes32 indexed requestId,
        uint256 indexed tokenId,
        bool isVerified,
        string reportCID
    );
    
    event VehicleStatusUpdated(
        uint256 indexed tokenId,
        bool isLibreDeuda,
        string newDominioReport
    );
    
    modifier onlyAuthorizedOracle() {
        require(authorizedOracles[msg.sender], "Not authorized oracle");
        _;
    }
    
    constructor(address _vehicleNFTAddress) {
        vehicleNFT = VehicleNFT(_vehicleNFTAddress);
        authorizedOracles[msg.sender] = true; // Owner es oráculo inicial
    }
    
    /**
     * @dev Solicitar verificación de vehículo contra DNRPA
     */
    function requestVerification(uint256 tokenId) external returns (bytes32) {
        require(vehicleNFT.ownerOf(tokenId) == msg.sender, "Not token owner");
        
        VehicleNFT.VehicleData memory vehicleData = vehicleNFT.getVehicleData(tokenId);
        
        bytes32 requestId = keccak256(abi.encodePacked(
            tokenId,
            vehicleData.chasisNumber,
            block.timestamp,
            msg.sender
        ));
        
        verificationRequests[requestId] = VerificationRequest({
            tokenId: tokenId,
            chasisNumber: vehicleData.chasisNumber,
            requester: msg.sender,
            timestamp: block.timestamp,
            isCompleted: false,
            isVerified: false,
            reportCID: ""
        });
        
        emit VerificationRequested(requestId, tokenId, vehicleData.chasisNumber, msg.sender);
        
        return requestId;
    }
    
    /**
     * @dev Completar verificación (solo oráculos autorizados)
     */
    function completeVerification(
        bytes32 requestId,
        bool isVerified,
        bool isLibreDeuda,
        string memory reportCID,
        string memory newDominioReport
    ) external onlyAuthorizedOracle {
        VerificationRequest storage request = verificationRequests[requestId];
        require(!request.isCompleted, "Verification already completed");
        require(bytes(request.chasisNumber).length > 0, "Invalid request");
        
        request.isCompleted = true;
        request.isVerified = isVerified;
        request.reportCID = reportCID;
        
        if (isVerified) {
            // Actualizar datos del vehículo en el NFT
            vehicleNFT.updateVehicleData(
                request.tokenId,
                reportCID,
                isLibreDeuda,
                newDominioReport
            );
            
            emit VehicleStatusUpdated(request.tokenId, isLibreDeuda, newDominioReport);
        }
        
        emit VerificationCompleted(requestId, request.tokenId, isVerified, reportCID);
    }
    
    /**
     * @dev Actualizar estado libre de deuda (para casos urgentes)
     */
    function updateLibreDeudaStatus(
        uint256 tokenId,
        bool isLibreDeuda,
        string memory newDominioReport,
        string memory evidenceCID
    ) external onlyAuthorizedOracle {
        vehicleNFT.updateVehicleData(tokenId, evidenceCID, isLibreDeuda, newDominioReport);
        emit VehicleStatusUpdated(tokenId, isLibreDeuda, newDominioReport);
    }
    
    /**
     * @dev Autorizar nuevo oráculo
     */
    function authorizeOracle(address oracle) external onlyOwner {
        authorizedOracles[oracle] = true;
    }
    
    /**
     * @dev Revocar autorización de oráculo
     */
    function revokeOracle(address oracle) external onlyOwner {
        authorizedOracles[oracle] = false;
    }
    
    /**
     * @dev Obtener información de request de verificación
     */
    function getVerificationRequest(bytes32 requestId) external view returns (VerificationRequest memory) {
        return verificationRequests[requestId];
    }
    
    /**
     * @dev Verificar si una dirección es oráculo autorizado
     */
    function isAuthorizedOracle(address oracle) external view returns (bool) {
        return authorizedOracles[oracle];
    }
}
