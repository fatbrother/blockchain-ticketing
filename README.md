# Blockchain Ticketing System (NFT-based)

A decentralized ticketing system using blockchain technology to issue, verify, and manage event tickets as NFTs. Built with Solidity, Hardhat, and Polygon network, this project allows for secure and transparent ticket management via smart contracts.

## Features
Ticket Issuance: Issue tickets as NFTs (ERC-721 tokens).

Pre-sale and Lottery: Users can pre-order tickets during a specified period, and tickets are randomly assigned using Chainlink VRF.

Ticket Status: Check whether a ticket has been sold or not.

Ticket Validation: Verify tickets at the event using Web3 and update ticket status to "used" to prevent reuse.

Integration: Backend APIs for querying ticket information and user holdings.

## Tech Stack
Solidity: Smart contracts for ticketing (ERC-721).

Hardhat: Development environment for compiling, testing, and deploying contracts.

Chainlink VRF: Random number generation for lottery-based ticket allocation.

Polygon (Mumbai Testnet): Deployed on the Polygon test network for testing purposes.

Express.js: Backend API server to interact with the blockchain.

Web3.js: Frontend integration to interact with the smart contract.

## Project Structure

.  
├── contracts/  
│   └── TicketNFT.sol         # Solidity smart contract for NFT ticketing  
├── scripts/  
│   └── deploy.js             # Deployment script for the contract  
├── test/  
│   └── TicketNFT-test.js     # Tests for the smart contract  
├── package.json              # Project dependencies and scripts  
├── README.md                 # Project documentation  
├── .env                      # Environment variables (e.g., private keys, API keys)  
└── node_modules/             # Node.js dependencies  

## Installation

### Prerequisites  
Install Node.js (LTS version recommended).
Install Hardhat for smart contract development.

### Setup
Clone the repository:
```
git clone https://github.com/your-username/blockchain-ticketing.git
cd blockchain-ticketing
```

Install dependencies:

```
npm install
```

Set up environment variables by creating a .env file:

```
touch .env
```

Inside the .env file, add the following:

```
PRIVATE_KEY=your_wallet_private_key
```
Replace the placeholders with your actual values:

PRIVATE_KEY: Your wallet's private key (for contract deployment).
INFURA_API_KEY: Infura project ID for interacting with the Polygon network.
POLYGON_RPC_URL: Polygon's RPC URL for the testnet (Mumbai).

### Deployment
To deploy the smart contract to the local network (Hardhat Network):

```
npx hardhat run scripts/deploy.js --network localhost
```

## Testing
You can test your contract using Hardhat's built-in test environment. Write your tests in the test folder.

Run the tests:

```
npx hardhat test
```

## Backend API
You can interact with the deployed contract through the backend APIs:

GET /tickets: Returns a list of all tickets.  
GET /user/:address: Returns a list of tickets owned by a user.  

The backend is powered by Express.js and communicates with the Ethereum blockchain via Web3.js.

## Future Improvements
Account Binding: Implement mobile or identity verification.  

Frontend: Develop a web interface for users to buy, verify, and transfer tickets.  

Scalability: Explore layer 2 solutions for handling a larger number of transactions.  

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Additional Notes
Security: Make sure to audit the smart contract code before deploying it to a production network.  
Gas Fees: Deploying contracts and minting tickets on the Ethereum or Polygon network requires gas fees, which can vary.  
