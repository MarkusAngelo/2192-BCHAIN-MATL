// SPDX-License-Identifier: MIT
// compiler version must be grreater than or equal to 0.8.20 and less than 0.9.0

pragma solidity ^0.8.7;

contract ValueTypes{
    bool public b = true;
    uint public u = 123;

    int public i = 123;

    int public minInt = type(int).min;
    int public maxInt = type(int).max;

    address public addr = 0x388C818CA8B9251b393131C08a736A67ccB19297;
    bytes32 public b32 =0x5258d04c8132635f2314214b5c1f4195a8a4e6280f7d46c1e70bde2457c996fc;

}