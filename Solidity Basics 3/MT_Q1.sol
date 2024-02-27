// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

contract MQuizContract{
    uint16 public age;
    uint256 public hrsWorked;
    uint256 public hrlyRate;
    uint256 public total;
    address public owner;

    constructor(){
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "You're not allowed!");
        _;
    }

    modifier hrsValidator(uint256 _value){
        require(_value > 0, "Hours Worked should be greater than 0");
        _;
    }

    modifier rateValidator(uint256 _value){
        require(_value > 0, "Hourly Rate should be greater than 0");
        _;
    }

    function setAge(uint16 inputAge) public {
        age = inputAge;
    }

    function setHrsWrk(uint256 inputHrs) public hrsValidator(inputHrs){
        hrsWorked = inputHrs;
    }

    function setRate(uint256 inputRate) public rateValidator(inputRate) onlyOwner(){
        hrlyRate = inputRate;
    }

    function calculateTotSal() public onlyOwner(){
        if(hrsWorked == 0 || hrlyRate == 0){
            revert("Hours Worked and Hourly Rate should be greater than 0.");
        }
        total = hrsWorked * hrlyRate;
    }


}