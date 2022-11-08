// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Types.sol";

contract AccessControl {
    mapping(opcode => address[]) private opcodesToActions;
    address public executionContract;
    mapping(address => mapping(opcode => uint256)) private userAccessControl;

    function verifyCode(opcode code, address user) public view returns (bool) {
        uint256 contractPosition = userAccessControl[user][code];
        require(contractPosition > 0);
        return opcodesToActions[code][contractPosition] == address(0);
    }
}
