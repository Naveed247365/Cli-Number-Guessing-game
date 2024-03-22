#! usr/bin/env node

// shabing

import inquirer from "inquirer";

// 1)computer will generote a nondom number 

// 2) user input for gussing number 

// 3) campare user input with computer genered number and show result

const randomnumber = Math.floor (Math.random() * 6 + 1);

const answers = await inquirer.prompt([
{
    name: "userGuessedNumber",
    type: "number",
    message: "please guess a number between 1-6:",
},
]);

if (answers.userGuessedNumber === randomnumber) {
    console.log("Congtratulations! you guesssed right numner.");
} else {
    console.log("you guseed wrong number");
}