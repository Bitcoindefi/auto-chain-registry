
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "./VehicleNFT.sol";

/**
 * @title VehicleMarketplace
 * @dev Marketplace para compra-venta de vehículos tokenizados
 */
contract VehicleMarketplace is ReentrancyGuard, Ownable {
    
    VehicleNFT public vehicleNFT;
    
    // Estructura de una venta
    struct Sale {
        uint256 tokenId;
        address seller;
        uint256 price;
        bool isActive;
        uint256 createdAt;
        uint256 escrowDeadline; // Fecha límite para completar transferencia
    }
    
    // Estructura de depósito en garantía
    struct Escrow {
        uint256 saleId;
        address buyer;
        uint256 amount;
        uint256 createdAt;
        bool isActive;
        bool sellerApproved;
        bool buyerApproved;
    }
    
    mapping(uint256 => Sale) public sales; // saleId => Sale
    mapping(uint256 => Escrow) public escrows; // saleId => Escrow
    mapping(uint256 => uint256) public tokenToSaleId; // tokenId => saleId
    
    uint256 private _saleIdCounter;
    uint256 public platformFee = 50; // 0.5% en basis points
    uint256 public escrowPeriod = 7 days; // Período de garantía
    
    // Eventos
    event VehicleListed(
        uint256 indexed saleId,
        uint256 indexed tokenId,
        address indexed seller,
        uint256 price
    );
    
    event VehicleSold(
        uint256 indexed saleId,
        uint256 indexed tokenId,
        address indexed buyer,
        address seller,
        uint256 price
    );
    
    event EscrowCreated(
        uint256 indexed saleId,
        address indexed buyer,
        uint256 amount
    );
    
    event EscrowReleased(
        uint256 indexed saleId,
        address indexed buyer,
        address indexed seller,
        uint256 amount
    );
    
    event SaleCancelled(uint256 indexed saleId);
    
    constructor(address _vehicleNFTAddress) {
        vehicleNFT = VehicleNFT(_vehicleNFTAddress);
    }
    
    /**
     * @dev Listar vehículo para venta
     */
    function listVehicle(uint256 tokenId, uint256 price) external nonReentrant {
        require(vehicleNFT.ownerOf(tokenId) == msg.sender, "Not token owner");
        require(vehicleNFT.isApprovedForAll(msg.sender, address(this)) || 
                vehicleNFT.getApproved(tokenId) == address(this), "Contract not approved");
        require(price > 0, "Price must be greater than 0");
        require(tokenToSaleId[tokenId] == 0, "Vehicle already listed");
        
        // Verificar que el vehículo esté libre de deuda
        require(vehicleNFT.isVehicleLibreDeuda(tokenId), "Vehicle not libre de deuda");
        
        _saleIdCounter++;
        uint256 saleId = _saleIdCounter;
        
        sales[saleId] = Sale({
            tokenId: tokenId,
            seller: msg.sender,
            price: price,
            isActive: true,
            createdAt: block.timestamp,
            escrowDeadline: block.timestamp + escrowPeriod
        });
        
        tokenToSaleId[tokenId] = saleId;
        
        emit VehicleListed(saleId, tokenId, msg.sender, price);
    }
    
    /**
     * @dev Crear depósito en garantía para compra
     */
    function createEscrow(uint256 saleId) external payable nonReentrant {
        Sale storage sale = sales[saleId];
        require(sale.isActive, "Sale not active");
        require(msg.sender != sale.seller, "Seller cannot buy own vehicle");
        require(msg.value == sale.price, "Incorrect payment amount");
        require(escrows[saleId].buyer == address(0), "Escrow already exists");
        require(block.timestamp <= sale.escrowDeadline, "Sale deadline passed");
        
        escrows[saleId] = Escrow({
            saleId: saleId,
            buyer: msg.sender,
            amount: msg.value,
            createdAt: block.timestamp,
            isActive: true,
            sellerApproved: false,
            buyerApproved: false
        });
        
        emit EscrowCreated(saleId, msg.sender, msg.value);
    }
    
    /**
     * @dev Vendedor aprueba la transferencia
     */
    function approveTransferSeller(uint256 saleId) external {
        Sale storage sale = sales[saleId];
        Escrow storage escrow = escrows[saleId];
        
        require(sale.seller == msg.sender, "Not the seller");
        require(escrow.isActive, "Escrow not active");
        require(!escrow.sellerApproved, "Already approved by seller");
        
        escrow.sellerApproved = true;
        
        // Si ambas partes aprobaron, ejecutar transferencia
        if (escrow.buyerApproved) {
            _executeTransfer(saleId);
        }
    }
    
    /**
     * @dev Comprador aprueba la transferencia (tras verificar documentos)
     */
    function approveTransferBuyer(uint256 saleId) external {
        Escrow storage escrow = escrows[saleId];
        
        require(escrow.buyer == msg.sender, "Not the buyer");
        require(escrow.isActive, "Escrow not active");
        require(!escrow.buyerApproved, "Already approved by buyer");
        
        escrow.buyerApproved = true;
        
        // Si ambas partes aprobaron, ejecutar transferencia
        if (escrow.sellerApproved) {
            _executeTransfer(saleId);
        }
    }
    
    /**
     * @dev Ejecutar transferencia final
     */
    function _executeTransfer(uint256 saleId) internal {
        Sale storage sale = sales[saleId];
        Escrow storage escrow = escrows[saleId];
        
        require(sale.isActive, "Sale not active");
        require(escrow.isActive, "Escrow not active");
        require(escrow.sellerApproved && escrow.buyerApproved, "Not approved by both parties");
        
        // Marcar como inactivas
        sale.isActive = false;
        escrow.isActive = false;
        tokenToSaleId[sale.tokenId] = 0;
        
        // Calcular fees
        uint256 fee = (escrow.amount * platformFee) / 10000;
        uint256 sellerAmount = escrow.amount - fee;
        
        // Transferir NFT
        vehicleNFT.transferVehicle(sale.seller, escrow.buyer, sale.tokenId);
        
        // Transferir fondos
        payable(sale.seller).transfer(sellerAmount);
        // Fee queda en el contrato para el owner
        
        emit VehicleSold(saleId, sale.tokenId, escrow.buyer, sale.seller, escrow.amount);
        emit EscrowReleased(saleId, escrow.buyer, sale.seller, escrow.amount);
    }
    
    /**
     * @dev Cancelar venta (solo vendedor)
     */
    function cancelSale(uint256 saleId) external {
        Sale storage sale = sales[saleId];
        require(sale.seller == msg.sender, "Not the seller");
        require(sale.isActive, "Sale not active");
        require(escrows[saleId].buyer == address(0), "Cannot cancel with active escrow");
        
        sale.isActive = false;
        tokenToSaleId[sale.tokenId] = 0;
        
        emit SaleCancelled(saleId);
    }
    
    /**
     * @dev Reembolsar escrow si no se completa en tiempo
     */
    function refundEscrow(uint256 saleId) external nonReentrant {
        Escrow storage escrow = escrows[saleId];
        require(escrow.buyer == msg.sender, "Not the buyer");
        require(escrow.isActive, "Escrow not active");
        require(block.timestamp > escrows[saleId].createdAt + escrowPeriod, "Escrow period not ended");
        require(!escrow.sellerApproved || !escrow.buyerApproved, "Transfer already approved");
        
        escrow.isActive = false;
        sales[saleId].isActive = false;
        tokenToSaleId[sales[saleId].tokenId] = 0;
        
        payable(escrow.buyer).transfer(escrow.amount);
    }
    
    /**
     * @dev Obtener información de venta
     */
    function getSale(uint256 saleId) external view returns (Sale memory) {
        return sales[saleId];
    }
    
    /**
     * @dev Obtener información de escrow
     */
    function getEscrow(uint256 saleId) external view returns (Escrow memory) {
        return escrows[saleId];
    }
    
    /**
     * @dev Retirar fees acumuladas (solo owner)
     */
    function withdrawFees() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }
    
    /**
     * @dev Actualizar fee de plataforma
     */
    function setPlatformFee(uint256 _platformFee) external onlyOwner {
        require(_platformFee <= 1000, "Fee too high"); // Max 10%
        platformFee = _platformFee;
    }
}
