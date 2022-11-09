// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../Filter.sol";

contract TransferETHFilter is Filter {
    filterObject filters;
    address parentControl;

    // constructor(address exectuor, address control) {
    //     parentExecutor = exectuor;
    //     parentControl = control;
    // }

    constructor(filterObject memory filter) public {
        filters = filter;
        parentControl = control;
    }

    function linkUser(address user) public override {
        if (filters.transaction.balanceBased) {
            dataObject memory data;
            data.balance = filters.transaction.balance;
            AccessControl(parentControl).storeData(user, "balance", data);
        }
    }

    function validate(transactionAttributes transaction)
        public
        view
        override
        returns (bool)
    {
        transactionFilter memory mainFilter = filters.transaction;
        if (!(mainFilter.amountPerTransaction >= transaction.amount)) {
            return false;
        }
        if (mainFilter.balanceBased) {
            uint256 balance = AccessControl(parentControl).queryData(
                transaction.sender,
                "balance"
            );
            if (balance - transaction.amount < 0) {
                return false;
            }
        }
        for (uint256 i = 0; i < mainFilter.allowedRecievers.length; i++) {
            if (mainFilter.allowedRecievers[i] == transaction.to) {
                return true;
            }
        }
        return false;
    }

    function getFilters() public view override returns (filterObject memory) {
        return filters;
    }
}
