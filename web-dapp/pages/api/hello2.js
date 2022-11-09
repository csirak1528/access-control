// const Web3=require('web3')

const { deployAccessControl } = require("../../actions/accesscontrol")
export default function handler(req, res) {

    deployAccessControl()
}
