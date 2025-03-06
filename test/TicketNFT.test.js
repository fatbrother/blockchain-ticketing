const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TicketNFT", function () {
  let TicketNFT, ticketNFT, owner, addr1;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();
    TicketNFT = await ethers.getContractFactory("TicketNFT");
    ticketNFT = await TicketNFT.deploy();
    await ticketNFT.waitForDeployment();
  });

  it("應該能夠成功預購", async function () {
    await ticketNFT.connect(addr1).preOrder();
    expect(await ticketNFT.balanceOf(addr1.address)).to.equal(1);
  });
});
