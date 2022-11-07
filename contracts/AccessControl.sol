// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Types.sol";

contract AccessControl {
    mapping(address => bool) private owners;
    mapping(opcode => contractAddress[]) private opcodesToActions;
    mapping(string => dataObject) private dataStore;
    address private opcodeContract;
    mapping(address => mapping(opcode => uint256)) private userAccessControl;

    //helpers
    

    function storeData(string memory key, dataObject calldata data) internal {
        dataStore[key] = data;
    }
}
