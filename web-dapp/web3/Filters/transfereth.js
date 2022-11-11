const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
const {Filter} = require("../filter")
const { deployContract, loadABI } = require("../contractUtil")

const name = "TransferETHFilter";
const uri = `../../contracts/deploy/${name}/combined.json`
const root = "Filters/"

const deploy = async (args) => {
    const addr = await deployContract(uri, name, args, root, web3)
}




class TransferETHFilter extends Filter{

    constructor(addr, provider = web3) {
        this.contract = loadExisting(addr, provider)
    }

    linkUser(userAddr) {
        return this.contract.methods.linkUser(userAddr).call()
    }

}

