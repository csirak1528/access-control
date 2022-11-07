// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

type opcode is bytes20;
type contractAddress is address;
contract AccessControl {
    mapping(address => bool) private owners;
    mapping (opcode => contractAddress) private opcodesToActions;

    //helpers
    function  actionToOpcode(string memory data) pure internal returns(bytes20) {
        return ripemd160(bytes(data));
    }
}
