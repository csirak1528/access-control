const solc = require('solc')
const fs = require('fs')
const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
const file = fs.readFileSync("../../contracts/AccessControl.sol").toString()
const receipt = await deployContract(file, "AccessControl.sol", []);

const { deployContract } = require("./contractUtil.js")

const deployAccessControlContract = async (params = {}) => {
    console.log(receipt)
}

// deployAccessControlContract()