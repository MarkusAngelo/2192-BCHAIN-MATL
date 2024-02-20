// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MappingExample {
    mapping (address => uint256) public valueMapping;

    constructor(){
        valueMapping[msg.sender]=100;
    }

    function setValue(uint256 _value) public nonZeroValue(_value){
        // require(_value!=0, "Value cannot be zero");
        if (_value > valueMapping[msg.sender]){
            valueMapping[msg.sender]=_value;
        }
        // valueMapping[msg.sender]=_value;

    }

    modifier nonZeroValue(uint256 _value){
        require(_value!=0, "Value cannot be zero");
        _;
    }

    modifier valueHasBeenSet(){
        require(valueMapping[msg.sender]!=0, "No Value set for sender");
        _;
    }


    function getValue() public view valueHasBeenSet returns (uint256){
        // require(valueMapping[msg.sender]!=0, "No Value set for sender");
        return valueMapping[msg.sender];
        
    }
}