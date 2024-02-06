// SPDX-License-Identifier: MIT
// compiler version must be grreater than or equal to 0.8.20 and less than 0.9.0

pragma solidity ^0.8.7;

contract GlobalVar{
    function globalVars() external view returns (address, uint, uint, uint, bytes4, uint){
        address sender = msg.sender;
        uint timestamp = block.timestamp;
        uint blockNum = block.number;
        uint chainId = block.chainid;
        bytes4 sig = msg.sig;
        uint gaslimit = block.gaslimit ;
        return (sender, timestamp, blockNum, chainId, sig, gaslimit);
    }
}

// Similar to the previous exercise with the local variables, the output will only show upon the click of a button.
// Through the used of the predefined variables (msg and block) the following information regarding the execution
// of the contract. These types of variable are useful for a variety of things apart from retrieving the information.
// These retrieved information can be used for furthering the purpose of each contract, such as comparison, assignment, etc. 

