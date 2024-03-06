// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

contract GradeContract{
    address public owner;
    string public studName;
    uint256 public prelimGrade;
    uint256 public midtermGrade;
    uint256 public finalGrade;
    uint256 average;

    event Log(string student, Status status);

    event AnotherLog();

    enum Status{
        Fail,
        Pass
    }

    Status status;

    constructor(){
        owner = msg.sender;
    }

    modifier onlyOwner(){
        require(msg.sender == owner, "Only the owner can call this function.");
        _;
    }

    modifier validGrade(uint256 _value){
        require(_value >= 0 && _value <= 100, "Grades must be between 0 and 100.");
        _;
    }

    function setName(string calldata inputName) public {
        studName = inputName;
        
    }
    function setPrelimGrade(uint256 inputPrelim) public onlyOwner() validGrade(inputPrelim){
         prelimGrade = inputPrelim;
    }

    function setMidtermGrade(uint256 inputMidterm) public onlyOwner() validGrade(inputMidterm){
       midtermGrade = inputMidterm;
    }

    function setFinalGrade(uint256 inputFinal) public onlyOwner() validGrade(inputFinal) {
       finalGrade = inputFinal;
    }

    function calculateGrade() public onlyOwner() {
         average = (prelimGrade + midtermGrade + finalGrade) / 3;
         if(average >= 75){
            status = Status.Pass;
         }
         else {
            status = Status.Fail;
         }

         emit Log(studName, status);
         emit AnotherLog();
    }

    function gradeStatus() public view returns (Status) {
        return status;
    }

}