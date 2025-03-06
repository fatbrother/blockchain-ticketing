require("dotenv").config();
const express = require("express");
const { ethers } = require("ethers");

const app = express();
const port = 3000;

const provider = new ethers.JsonRpcProvider(process.env.MUMBAI_RPC_URL);
const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";
const abi = [
  "function totalSupply() public view returns (uint256)",
  "function balanceOf(address owner) public view returns (uint256)"
];

const contract = new ethers.Contract(contractAddress, abi, provider);

app.get("/tickets", async (req, res) => {
  try {
    const totalSupply = await contract.totalSupply();
    res.json({ totalTickets: totalSupply.toString() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/user/:address", async (req, res) => {
  try {
    const balance = await contract.balanceOf(req.params.address);
    res.json({ address: req.params.address, ownedTickets: balance.toString() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
