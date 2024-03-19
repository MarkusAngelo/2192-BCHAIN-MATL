// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

contract FallbackExample{
    event FallbackReceived(address sender, uint amount);
    event PaymentReceived(address payer, uint256 amount);

    fallback() external payable{
        emit FallbackReceived(msg.sender, msg.value);
    }

    receive() external payable{
        emit PaymentReceived(msg.sender, msg.value);
    }


}

/* One can learn about the usage of fallback functions and the receive function in smart contracts, 
such as how the former can demonstrate handling incoming transactions from Ether without a specific 
function call. Understanding these ways is important for designing reliable and flexible Ethereum 
contracts capable of interacting with Ether transfers seamlessly.*/