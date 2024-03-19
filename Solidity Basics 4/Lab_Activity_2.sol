// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract MyFinalsActivity2{

    address payable public owner;
    uint256 immutable public creationTime;
    uint256 constant public INITIAL_ETH_AMOUNT = 2 ether;
    uint256 public remainingEth;
    event EtherReceived(address payable receiver, uint amtReceived);
    event EtherSent(address payable sender, uint amtSent);

    modifier onlyOwner() {
        require(msg.sender == owner, "You're not allowed!");
        _;
    }

    constructor() payable{
        owner = payable(msg.sender);
        creationTime = block.timestamp;
        remainingEth = INITIAL_ETH_AMOUNT;
    }

    receive() external payable{
        
    }
    
    function receiveAndEmit() external payable{
        remainingEth = address(msg.sender).balance;
        emit EtherReceived(payable(msg.sender), address(this).balance);
    }
    
    function sendEther(address payable _recipient, uint256 _amount) external onlyOwner(){
         _recipient.transfer(_amount); 
         remainingEth = address(msg.sender).balance - _amount;
        emit EtherSent(_recipient, _amount);

    }

    function getBalance()external view returns(uint){
        return address(msg.sender).balance;
    }

    function destroy() external {
       emit EtherSent(owner, remainingEth);
        selfdestruct(payable(msg.sender));
          
    }
}

/*
The contract assigns an owner upon deployment, initializing with a predefined 
amount of Ether and recording the creation time. It uses a modifier to restrict 
certain functions exclusively, allows the contract to accept incoming transactions, 
receives Ether, updates the contract's balance, and emits an event to log the 
received amount and sender's address. It also provides a flexible platform for 
managing transactions, emphasizing security and ownership control over contract operations.
*/
