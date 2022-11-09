import { useEffect } from "react"
const Deploy = () => {
   
    const testDeploy = async () => {
        const uri = "../../contracts/deploy/AccessControl/combined.json"
        const name = "AccessControl";

        const Web3 = require('web3')
        const web3 = new Web3(window.ethereum);
        await window.ethereum.enable();

        deployContract(web3, uri, name)
    }
    useEffect(() => {
        testDeploy()
    }, [])
    return (<div>

    </div>);
}

export default Deploy;