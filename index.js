#! /usr/bin/env node 
import inquirer from "inquirer";
console.log("     [WELLCOME]");
const answer = await inquirer.prompt([
    { message: "enter first num", type: "number", name: "firstNumber" },
    { message: "enter second num", type: "number", name: "secondNumber" },
    {
        message: "select one oprator to perform operation",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"]
    },
]);
// conditional statment
if (answer.operator === "addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("please select valid oprator");
}
console.log("  [PLEASE! USE AGAIN]");
