// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../Filter.sol";

contract TransferETHFilter is Filter {
    transactionFilter filters;

    constructor(
        uint256 amountPerTransaction,
        bool balanceBased,
        uint256 balance
    ) public {
        filters = transactionFilter(
            amountPerTransaction,
            balanceBased,
            balance
        );
    }

    function onValidation() internal override {}

    function onFailure() internal override {}

    function validate(Operation operation) public view returns (bool) {
        transactionAttributes transaction = operation
            .getAllAttributes()
            .transaction;

        if (!(filters.amountPerTransaction >= transaction.amount)) {
            onFailure();
            return false;
        }
        for (uint256 i = 0; i < filters.allowedRecievers.length; i++) {
            if (filters.allowedRecievers[i] == transaction.to) {
                onValidation();
                return true;
            }
        }

        onFailure();
        return false;
    }

    function getFilters() public view override returns (filterObject memory) {
        filterObject memory temp;
        temp.transactionFilter = filters;
        return temp;
    }
}
