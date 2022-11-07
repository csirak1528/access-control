// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

struct dataObject {
    uint256 unsigned;
    int256 signed;
    string str;
}

struct attributeObject{
    string name;
    int256 valueInt;
}

type opcode is bytes20;
type contractAddress is address;