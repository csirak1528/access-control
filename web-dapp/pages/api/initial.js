solc=require('solc')
fs=require('fs')
Web3=require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
file=fs.readFileSync('initial.sol').toString()
console.log(file)
let input={
    language:"Solidity",
    sources:{
        "initial.sol":{
            content:file,
        },
    },

    settings:{
        outputSelection:{
            "*":{
                "*": ["*"],
            },
        },
    },
};