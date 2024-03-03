// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

import "./4_Structs_demo.sol";

contract Todos {
    Todo[] public todos;

    function toDoList() public{
        Todo memory newTask = Todo("Solidity Basics III Demo", true);
        todos.push(newTask);
    }
}