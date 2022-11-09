// const Web3=require('web3')
export default function handler(req, res) {

    console.log("hi")
    // const web3=new Web3("http://127.0.0.1:7545")
    // web3.eth.getBlockNumber().then((error,result)=>console.log(result))
    res.status(200).send({hi:"hi"})
}
