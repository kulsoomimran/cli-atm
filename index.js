#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000;
let myPin = 69875;
const pinAnswer = await inquirer.prompt([
    {
        message: "Enter your PIN ",
        type: "number",
        name: "pinNumber",
    },
]);
if (pinAnswer.pinNumber === myPin) {
    console.log("Correct PIN code!!");
    const operationAnswer = await inquirer.prompt([
        {
            message: "Please select any operation",
            type: "list",
            name: "operation",
            choices: ["Check Balance", "WithDrawal", "Deposit", "Fast Cash"],
        },
    ]);
    if (operationAnswer.operation === "Check Balance") {
        console.log(`Your current balance is: ${myBalance}`);
    }
    else if (operationAnswer.operation === "WithDrawal") {
        const withdrawalAns = await inquirer.prompt([
            {
                message: "Please enter the amount you want to withdrawal",
                type: "number",
                name: "withdrawalAmount",
            },
        ]);
        if (withdrawalAns.withdrawalAmount <= myBalance) {
            console.log(`Now your balance is ${myBalance - withdrawalAns.withdrawalAmount}`);
        }
        else if (withdrawalAns.withdrawalAmount > myBalance) {
            console.log("Insufficient balance");
        }
    }
    else if (operationAnswer.operation === "Deposit") {
        const depositAns = await inquirer.prompt([
            {
                message: "Please enter the amount you want to deposit",
                type: "number",
                name: "depositedAmount",
            },
        ]);
        console.log(`Now your balance is ${myBalance + depositAns.depositedAmount}`);
    }
    else if (operationAnswer.operation === "Fast Cash") {
        const fastcashAns = await inquirer.prompt([
            {
                message: "Please select any one option",
                type: "list",
                name: "fastcashAmount",
                choices: [500, 1000, 1500, 2000, "None of the above"],
            },
        ]);
        if (fastcashAns.fastcashAmount === 500) {
            console.log(`Now your balance is ${myBalance - 500}`);
        }
        else if (fastcashAns.fastcashAmount === 1000) {
            console.log(`Now your balance is ${myBalance - 1000}`);
        }
        else if (fastcashAns.fastcashAmount === 1500) {
            console.log(`Now your balance is ${myBalance - 1500}`);
        }
        else if (fastcashAns.fastcashAmount === 2000) {
            console.log(`Now your balance is ${myBalance - 2000}`);
        }
        else {
            console.log("Please select withdrawal option");
        }
    }
}
else {
    console.log("Please enter correct PIN code");
}
