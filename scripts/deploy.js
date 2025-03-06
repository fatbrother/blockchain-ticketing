const { ethers } = require("hardhat");

async function main() {
    // Deploy contract
    const TicketNFT = await ethers.getContractFactory("TicketNFT");
    const ticketNFT = await TicketNFT.deploy(); // Deploying the contract

    console.log("Deploying TicketNFT...");

    // Wait for the deployment to be mined
    await ticketNFT.waitForDeployment();

    // Now that the contract is deployed, log its address
    console.log(`TicketNFT deployed successfully to: ${ticketNFT.target}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

