#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 3000;

let myPin = 6242;

let answerPin = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your pin",
    type: "number",
  },
]);

if (answerPin.pin === myPin) {
  console.log("correct PIN.");
  let operationAnswer = await inquirer.prompt([
    {
      name: "operation",
      message: "Please select option.",
      type: "list",
      choices: ["Withdrawal", "Check balance", "Fast Cash"],
    },
  ]);
  if (operationAnswer.operation === "Withdrawal") {
    let amountAnswer = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter your amount:",
        type: "number",
      },
    ]);
    if (amountAnswer.amount <= myBalance) {
      myBalance -= amountAnswer.amount;
      console.log(
        "Successfully withdrawal!",
        "Your remaining balance is: " + myBalance
      );
    } else {
      console.log("Insufficient balance");
    }
     }if (operationAnswer.operation === "Check balance") {
      console.log("Your balance is: " + myBalance);
  }
     
     
    if (operationAnswer.operation === "Fast Cash") {
    let fastCashAnswer = await inquirer.prompt([
      {
        name: "fastCash",
        message: "Select your fast cash option.",
        type: "list",
        choices: [1000, 2000, 3000, 5000],
      },
    ]);
    if (myBalance >= fastCashAnswer.fastCash) {
      console.log("Successfully withdrawal!");
    } else {
      console.log("Insufficient funds!");
    }
  }
} else {
  console.log("PIN is incorrect.");
}
