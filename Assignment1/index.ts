/**
 * This program plays rock paper scissors
 *
 * By: Flynn Rundquist
 * Version: 1.0
 * Since: 2024/03/06
 */

import { createSelection } from 'bun-promptx'

const userInput = createSelection([
        { text: 'Rock' },
        { text: 'Paper' },
        { text: 'Scissors' }
], {
        headerText: 'Choose rock, paper, or scissors: ',
        perPage: 3,
})

if (userInput.selectedIndex === 0) {
        console.log("Selected: Rock")
} else if (userInput.selectedIndex === 1) {
        console.log("Selected: Paper")
} else {
        console.log("Selected: Scissors")
}

function getRandomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumber: number = getRandomNumber(1, 3)

if (userInput.selectedIndex === randomNumber) {
        console.log("Draw! You chose the same action.")
} else if (userInput.selectedIndex === 0 && randomNumber === 2) {
        console.log("Computer chose: Paper")
        console.log("You win!")
} else if (user.input.selectedIndex === 1 && randomNumber === 3) {
        console.log("Computer chose: Scissors")
        console.log("You lose!")
} else if (userInput.selectedIndex === 2 && randomNumber === 1) {
        console.log("Computer chose: Rock")
        console.log("You lose!")
} else
