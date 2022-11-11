const { loadExisting } = require("./contractUtil")

class Filter {
    constructor(addr, abi, provider = web3) {
        this.addr = addr
        this.provider = provider
        this.abi = abi
        this.contract = loadExisting(this.addr, this.abi, this.provider)
    }
    
    linkUser(userAddr) {
        return this.contract.methods.linkUser(userAddr).call()
    }

}

module.exports = {
    Filter
}