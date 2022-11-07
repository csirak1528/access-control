// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

abstract contract Operation {
    function getAllAttributes() internal virtual;

    function applyLimit() internal virtual;

    function validateTransaction() internal virtual;

    function execute() internal virtual;

    function fail() internal virtual;
}
