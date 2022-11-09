const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

const { deployContract } = require("../deployContract")

const name = "TransferETHFilter";
const uri = `../../contracts/deploy/${name}/combined.json`
const root = "Filters/"

const deploy = async () => {
    const addr = await deployContract(uri, name, args, root, web3)
}

const loadExisting = async () => {
    const abi = loadABI(name, uri, root)
    return new web3.eth.Contract(abi, filterAddr);

}
