// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TicketNFT is ERC721Enumerable, Ownable {
    uint256 public nextTokenId;
    mapping(address => bool) public hasPreordered;

    constructor() ERC721("TicketNFT", "TKT") Ownable(msg.sender) {}

    function mintTicket() external onlyOwner {
        _safeMint(msg.sender, nextTokenId);
        nextTokenId++;
    }

    function preOrder() external {
        require(!hasPreordered[msg.sender], "Already preordered");
        hasPreordered[msg.sender] = true;
        _safeMint(msg.sender, nextTokenId);
        nextTokenId++;
    }
}
