#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let myBalance = 20000;
let myPin = 69875;
const pinAnswer = await inquirer.prompt([
  {
    message: chalk.blue("Enter your PIN "),
    type: "number",
    name: "pinNumber",
  },
]);
if (pinAnswer.pinNumber === myPin) {
  console.log(chalk.bgGreen("Correct PIN code!!"));
  const operationAnswer = await inquirer.prompt([
    {
      message: chalk.cyanBright("Please select any operation"),
      type: "list",
      name: "operation",
      choices: ["Check Balance", "WithDrawal", "Deposit", "Fast Cash"],
    },
  ]);
  if (operationAnswer.operation === "Check Balance") {
    console.log(chalk.magentaBright(`Your current balance is: ${myBalance}`));
  } else if (operationAnswer.operation === "WithDrawal") {
    const withdrawalAns = await inquirer.prompt([
      {
        message: chalk.yellow("Please enter the amount you want to withdrawal"),
        type: "number",
        name: "withdrawalAmount",
      },
    ]);
    if (withdrawalAns.withdrawalAmount <= myBalance) {
      console.log(chalk.greenBright("Successfully Withdrawal!!"))
      console.log(chalk.magentaBright(
        `Now your balance is ${myBalance - withdrawalAns.withdrawalAmount}`
      ));
    } else if (withdrawalAns.withdrawalAmount > myBalance) {
      console.log(chalk.red("Insufficient balance"));
    }
  } else if (operationAnswer.operation === "Deposit") {
    const depositAns = await inquirer.prompt([
      {
        message: chalk.yellow("Please enter the amount you want to deposit"),
        type: "number",
        name: "depositedAmount",
      },
    ]);
    console.log(chalk.greenBright("Successfully Deposited!!"))
    console.log(chalk.magentaBright(
      `Now your balance is ${myBalance + depositAns.depositedAmount}`
    ));
  } else if (operationAnswer.operation === "Fast Cash") {
    const fastcashAns = await inquirer.prompt([
      {
        message: chalk.yellow("Please select any one option"),
        type: "list",
        name: "fastcashAmount",
        choices: [500, 1000, 2000, 5000, 10000, 20000 ],
      },
    ]);
    if (fastcashAns.fastcashAmount === 500) {
      console.log(chalk.magentaBright(`Now your balance is ${myBalance - 500}`));
    } else if (fastcashAns.fastcashAmount === 1000) {
      console.log(chalk.magentaBright(`Now your balance is ${myBalance - 1000}`));
    } else if (fastcashAns.fastcashAmount === 2000) {
      console.log(chalk.magentaBright(`Now your balance is ${myBalance - 2000}`));
    } else if (fastcashAns.fastcashAmount === 5000) {
      console.log(chalk.magentaBright(`Now your balance is ${myBalance - 5000}`));
    } else if (fastcashAns.fastcashAmount === 10000) {
      console.log(chalk.magentaBright(`Now your balance is ${myBalance - 10000}`));
    } 
    else if (fastcashAns.fastcashAmount === 20000) {
      console.log(chalk.magentaBright(`Now your balance is ${myBalance - 20000}`));
    } 
  }
} else {
  console.log(chalk.red("Please enter correct PIN code"));
}
