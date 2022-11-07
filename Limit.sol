// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

struct UserLimitStoreObject {
    uint256 value;
}

contract Limit {
    mapping(address => UserLimitStoreObject) private dataStore;

}
