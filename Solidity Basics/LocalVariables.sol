// SPDX-License-Identifier: MIT
// compiler version must be grreater than or equal to 0.8.20 and less than 0.9.0

pragma solidity ^0.8.7;

contract LocalVariables {
    uint public i ;
    bool public b ;
    address public myAdress;
    
    function foo() external {
        uint x = 123;
        bool f = false;

        x += 456;
        f = true;

        i = 123;
        b = true;

        myAdress = address(1);
    }
}

//  Upon clicking the buttons for each variable (b, i, and myAdress) first before the foo button, 
//  their initial values is returned: b = false, i = 0, and myAdress all consists of repeating 0s after the 0x
//  When the foo button is clicked, their values within the function are rendered: i = 123, b = true, and
//  myAdress having a 1 in the end.