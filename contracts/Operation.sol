// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Filter.sol";
import "./Types.sol";
import "./AccessControl.sol";

abstract contract Operation {
    function getCode() public view virtual returns (uint256) {}

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
