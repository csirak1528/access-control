// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Filter.sol";
import "./Operations/TransferETH.sol";

contract AccessControl {
    mapping(opcode => address[]) private opcodesToActions;
    mapping(address => mapping(opcode => uint256)) private userAccessControl;
    mapping(address => mapping(string => dataObject)) internal dataStore;
    mapping(address => bool) internal dataAccess;
    mapping(address => bool) private owners;

    uint256 balance;

    constructor() {
        owners[msg.sender] = true;
        dataAccess[msg.sender] = true;
    }

    //Verify User access to operation
    function verifyCode(opcode code, address user)
        public
        view
        returns (address)
    {
        uint256 contractPosition = userAccessControl[user][code];
        require(contractPosition > 0);
        return opcodesToActions[code][contractPosition];
    }

    // Read and Write to contract Data
    //START
    function queryData(address user, string memory key)
        public
        view
        returns (dataObject memory)
    {
        require(dataAccess[msg.sender]);
        return dataStore[user][key];
    }

    function storeData(
        address user,
        string memory key,
        dataObject data
    ) public {
        require(dataAccess[msg.sender]);
        dataStore[user][key] = data;
    }

    //END

    //Sample Request and Execution of Eth Transfer
    //START
    function requestTransferEth(transactionAttributes calldata attr) public {
        attr.sender = msg.sender;
        
        Operation operation = new TransferETH(attrs);
        address filterAddr = verifyCode(operation.code, msg.sender);

        require(filterAddr != address(0));
        Filter filter = Filter(filterAddr);

        require(filter.validate(operation.getAllAttributes().transaction));

        executeTransferEth(
            operation.getAllAttributes().transaction,
            filter.filters.transaction.balanceBased,
            msg.sender
        );
    }

    function executeTransferEth(
        transactionAttributes memory transcationData,
        bool balanceBased
    ) private {
        payable(transcationData.to).transfer(transcationData.amount);
        if (balanceBased) {
            uint256 curBalance = queryData(transcationData.sender, "balance");
            storeData(
                transcationData.sender,
                "balance",
                curBalance - transcationData.amount
            );
        }
    }

    //END

    //Add New Filters
    function addFilter(opcode code, address newAddr) public {
        require(owners[msg.sender]);
        dataAccess[newAddr] = true;
        opcodesToActions[code].push(newAddr);
    }

    //Link Users To Filters

    function linkUser(
        opcode code,
        address user,
        uint256 level
    ) public {
        require(owners[msg.sender]);
        userAccessControl[user][code] = level;
    }
}
