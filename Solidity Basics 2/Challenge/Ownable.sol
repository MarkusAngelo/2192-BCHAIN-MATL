// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Ownable{
    address public owner;

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);
    event anotherOwnership();

    constructor(){
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "You're not allowed!");
        _;
    }

    function transferOwnership(address newOwner) public onlyOwner() {
        require(newOwner != address(0), "Invalid Address");
        owner = newOwner;
        emit OwnershipTransferred(owner, newOwner);
        emit anotherOwnership();
        
    }
}

contract MyContract is Ownable{ 
    uint256 public someValue;

    function setSomeValue(uint256 newValue) external onlyOwner{
        someValue = newValue;
    }
}