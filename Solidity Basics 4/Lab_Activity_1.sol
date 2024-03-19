// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract EtherWallet{
    address payable public owner;
    event Withdraw(uint amount);

    constructor(){
        owner = payable(msg.sender);
    }

    receive() external payable {}

    function withdraw(uint _amount) external {
        require(msg.sender == owner, "Not Owner!");
        owner.transfer(_amount);
        emit Withdraw(_amount);
    }

    function getBalance() external view returns(uint){
        return address(this).balance;
    }
}

/*

The contract initializes with the contract deployer as the owner 
and Ether can be deposited into the contract. The functions also 
allow the owner to withdraw a specified amount of Ether, ensuring 
only the owner can initiate withdrawals. This contract provides a 
simple yet functional implementation of an Ethereum wallet with 
basic deposit and withdrawal functionalities.
*/