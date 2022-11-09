import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useEffect, useState} from "react";
import Dropdown from 'react-dropdown'

const Web3 = require('web3')
import 'react-dropdown/style.css'
// import {ethers} from 'ethers'
export default function Home() {
    const [receivers, setReceivers] = useState([])
    const [maxBalance, setMaxBalance] = useState()
    const [maxTransfer, setMaxTransfer] = useState()
    const [totalAdd, setTotalAdd] = useState()
    const [walletAdd, setWalletAdd] = useState()
    // useEffect(async () => {
    //
    //
    // })
    const handleClick = async () => {
        const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
        web3.eth.net.isListening()
            .then(() => alert('Ganache is connected'))
            .catch(e => alert('Wow. Something went wrong: ' + e));

        const latestBlockNumber = await web3.eth.getBlockNumber()
        console.log(latestBlockNumber)

    }
    const handleDeploy = () => {
        return 0
    }

    const options = ["1", "2", "3", "4", "5", "6", "7", "8"]
    return (
        <div className={styles.container}>

            <div>
                <button onClick={handleClick}>Connect to Ganache</button>
                <br/>

                <input type="text" onChange={(e) => setMaxBalance(e.target.value)} name={"Max Balance"}
                       placeholder={"Max Balance"} value={maxBalance}/>
                <input type="text" onChange={(e) => setMaxTransfer(e.target.value)} name={"Max Transfer"}
                       placeholder={"Max Transfer"} value={maxTransfer}/>
                {/*<Dropdown options={options} onChange={(e)=>setTotalAdd(parseInt(e.value))} value={options[0]} placeholder={"Select options"}></Dropdown>*/}

                <div>
                    <br/>
                    Wallet Receiver Add:
                    <input type="text" onChange={(e) => setWalletAdd(e.target.value)} name={"Wallet Address"}
                           placeholder={"Wallet Address"} value={walletAdd}/>
                    <button onClick={() => {
                        setReceivers(
                             [...receivers, walletAdd]
                        )
                        setWalletAdd("")
                    }
                    }>Add Wallet
                    </button>
                    <br/>
                    <br/>
                    Wallets:
                    {receivers.map((a,x)=>{
                        return(
                            <div>{x}: {a}</div>
                        )
                    })}
                </div>
                <br/>
                <button onClick={handleDeploy}>Deploy contract</button>
            </div>
        </div>
    )
}
