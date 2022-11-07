// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// type opcode is bytes20;
// type contractAddress is address;

import "../Operation.sol";
import "../Types.sol";

contract TransferETH is Operation {
    bytes20 public code = ripemd160("TransferETH");

    function getAllAttributes()
        public
        view
        override
        returns (attributeObject memory[] memory)
    {
        attributeObject[10] memory temp;
        for (uint256 i = 0; i < 1; i++) {
            temp[i] = attributeObject("name", 1);
        }
        return temp;
    }
}
