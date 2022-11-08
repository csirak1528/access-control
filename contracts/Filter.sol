// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./AccessControl.sol";
import "./Operation.sol";

contract Filter {
    address parentExecutor;
    address parentControl;

    constructor(address exectuor, address control) public {
        parentExecutor = exectuor;
        parentControl = control;
    }

    mapping(address => filterObject) internal dataStore;

    function onValidation() internal virtual;

    function onFailure() internal virtual;

    function validate(Operation operation) public view virtual returns (bool);

    function getFilters() public view virtual returns (filterObject memory);
}
