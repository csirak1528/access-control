// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Operation.sol";

abstract contract Filter {
    address private parentControl;
    filterObject public filters;

    function validate(attributeObject memory attrs) public view virtual returns (bool);

    function getFilters() public view virtual returns (filterObject memory);

    function linkUser(address user) public virtual;
}
