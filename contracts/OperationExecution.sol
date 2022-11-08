// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Filter.sol";
import "./Operations/TransferETH.sol";

contract OperationExecution {
    address accessControlAddress;
    mapping(address => mapping(string => dataObject)) internal dataStore;
    mapping(address => bool) internal dataAccess;
    mapping(address => bool) private owners;

    uint256 balance;

    constructor(address accessControlAddr) {
        accessControlAddress = accessControlAddr;
        owners[msg.sender] = true;
        dataAccess[msg.sender] = true;
    }

    function queryData(address user, string memory key)
        public
        view
        returns (dataObject memory)
    {
        require(dataAccess[msg.sender]);
        return dataStore[user][key];
    }

    function requestTransfer(transactionAttributes calldata attrs, opcode code)
        public
    {
        require(
            AccessControl(accessControlAddress).verifyCode(code, msg.sender)
        );
        Operation operation = new TransferETH(attrs);
    }
}
