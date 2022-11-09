// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Filter.sol";

abstract contract Operation {
    uint256 public code;

    function getAllAttributes()
        public
        view
        virtual
        returns (attributeObject memory);

    function getData(AccessControl control, string memory key)
        internal
        view
        virtual
        returns (dataObject memory);
}
