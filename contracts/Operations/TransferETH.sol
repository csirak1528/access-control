// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// type opcode is bytes20;
// type contractAddress is address;

import "../Operation.sol";

contract TransferETH is Operation {
    uint256 public code = uint256(sha256("TransferETH"));

    transactionAttributes attributes;

    constructor(transactionAttributes memory attrs) {
        attributes = attrs;
    }

    function getAllAttributes()
        public
        view
        override
        returns (attributeObject memory)
    {
        attributeObject memory temp;
        temp.transaction = attributes;
        return temp;
    }

    function getData(AccessControl control, string memory key)
        internal
        view
        override
        returns (dataObject memory)
    {}
}
