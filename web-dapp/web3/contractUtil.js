
const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));



// const Web3 = require('web3')
// const web3 = new Web3(window.ethereum);
// await window.ethereum.enable();


const deployContract = (uri, name, args = [], root = "", provider = web3) => {
    const source = require(uri).contracts
    const file = name + ".sol";
    const sourceKey = `${root}${file}:${name}`
    const schema = source[sourceKey]
    const ABI = schema.abi;
    const bytecode = schema.bin;
    const contract = new provider.eth.Contract(ABI);
    return provider.eth.getAccounts().then((accounts) => {
        // Display all Ganache Accounts
        const mainAccount = accounts[0];

        // address that will deploy smart contract

        return contract
            .deploy({ data: bytecode, arguments: args })
            .send({ from: mainAccount, gas: 4700000 })
            .on("receipt", (receipt) => {
                console.log(receipt.contractAddress)
                return receipt
            }).then(receipt => {
                return receipt.options.address
            })
    });
}


const main = async () => {
    const name1 = "AccessControl";
    const uri1 = `../../contracts/deploy/${name1}/combined.json`

    const name2 = "TransferETHFilter";
    const uri2 = `../../contracts/deploy/${name2}/combined.json`
    const root = "Filters/"

    // struct transactionFilter{
    //     uint256 amountPerTransaction;
    //     bool balanceBased;
    //     uint256 balance;
    //     bool sendall;
    //     address[] allowedRecievers;
    // }

    const filterSpecifications = {

        "amountPerTransaction": 1,    //    uint256 amountPerTransaction;
        "balanceBased": true,  //    bool balanceBased;
        "balance": 6,     //    uint256 balance;
        "sendall": false, //    bool sendall;
        "allowedRecievers": []     //    address[] allowedRecievers;

    }


    // const filterSpecifications = [
    //     1,    //    uint256 amountPerTransaction;
    //     true,  //    bool balanceBased;
    //     6,     //    uint256 balance;
    //     false, //    bool sendall;
    //     []     //    address[] allowedRecievers;
    // ]

    const contractAddressParent = await deployContract(uri1, name1, provider = web3)
    const contractAddress = await deployContract(uri2, name2, [filterSpecifications, contractAddressParent], root, provider = web3)
    // await testLoadContract(contractAddress)
}

const testLoadContract = async (filterAddr, provider = web3) => {
    const name = "TransferETHFilter";
    const uri = `../../contracts/deploy/${name}/combined.json`
    const root = "Filters/"
    const abi = loadABI(name, uri, root)
    const contract = new provider.eth.Contract(abi, filterAddr);
    console.log(await contract.methods.filters().call())
}

const loadABI = (name, uri, root = "") => {
    const source = require(uri).contracts
    const file = name + ".sol";
    const sourceKey = `${root}${file}:${name}`
    const schema = source[sourceKey]
    const ABI = schema.abi;
    return ABI;
}

const loadExisting = async (addr, abi, provider = web3) => {
    return new provider.eth.Contract(abi, addr);
}

// main()



module.exports = { deployContract, loadABI, loadExisting }