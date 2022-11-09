const solc = require('solc')
const fs = require('fs')
const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
file = fs.readFileSync('initial.sol').toString()
console.log(file)
let input = {
    language: "Solidity",
    sources: {
        "initial.sol": {
            content: file,
        },
    },

    settings: {
        outputSelection: {
            "*": {
                "*": ["*"],
            },
        },
    },
};

var output = JSON.parse(solc.compile(JSON.stringify(input)));
fs.writeFileSync("./out.json", JSON.stringify(output))

// ABI = output.contracts["initial.sol"]["initial"].abi;
// bytecode = output.contracts["initial.sol"]["initial"].evm.bytecode.object;
// console.log("Bytecode: ", bytecode);
// console.log("ABI: ", ABI);

// contract = new web3.eth.Contract(ABI);
// web3.eth.getAccounts().then((accounts) => {
//     // Display all Ganache Accounts
//     console.log("Accounts:", accounts);

//     mainAccount = accounts[0];

//     // address that will deploy smart contract
//     console.log("Default Account:", mainAccount);
//     contract
//         .deploy({ data: bytecode })
//         .send({ from: mainAccount, gas: 470000 })
//         .on("receipt", (receipt) => {

//             // Contract Address will be returned here
//             console.log("Contract Address:", receipt.contractAddress);
//         })
//         .then((initialContract) => {
//             initialContract.methods.message().call((err, data) => {
//                 console.log("Initial Data:", data);
//             });
//         });
// });