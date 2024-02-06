// SPDX-License-Identifier: MIT
// compiler version must be grreater than or equal to 0.8.20 and less than 0.9.0

pragma solidity ^0.8.20;

contract FunctionIntro{

    function add(uint x, uint y) external pure returns (uint){
        return (x + y);
    }
        function sub(uint x, uint y) external pure returns (uint){
        return (x - y);
    }
        function prod(uint x, uint y) external pure returns (uint){
        return (x * y);
    }
        function quo(uint x, uint y) external pure returns (uint){
        return (x / y);
    }
}