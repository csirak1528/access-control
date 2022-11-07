// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Filter.sol";
import "./Types.sol";

abstract contract Operation {
    function getAllAttributes()
        public
        view
        virtual
        returns (attributeObject[] memory);

    function validateTransaction() internal virtual;

    function validateTransactionFilter(Filter filter) internal virtual;

    function execute() internal virtual;

    function fail() internal virtual;
}
