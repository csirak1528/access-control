// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

struct dataObject {
    uint256 balance;
}

struct transactionAttributes{
    address to;
    uint256 amount;
    uint256 timestamp;
    address sender;
}

struct attributeObject{
    transactionAttributes transaction;
}

struct transactionFilter{
    uint256 amountPerTransaction;
    bool balanceBased;
    uint256 balance;
    bool sendall;
    address[] allowedRecievers;
}

struct filterObject{
    transactionFilter transaction;
}

type opcode is uint256;
type contractAddress is address;