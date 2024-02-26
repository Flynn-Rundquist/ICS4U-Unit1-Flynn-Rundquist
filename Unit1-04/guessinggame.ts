/**
 * This program generates a random number
 * and has the player guess.
 *
 * By: Flynn
 * Version: 1.0
 * Since: 2024/02/26
**/

import { createSelection } from 'bun-promptx';

let counter = 0;
const randomNumber = Math.floor(Math.random() * 6) + 1;

while (true) {
        const userGuess = createSelection([
         { text: '1' },
         { text: '2' },
         { text: '3' },
         { text: '4' },
         { text: '5' },
         { text: '6' }
], {
        headerText: "Guess a number between 1 to 6:",
        perPage: 6
})


counter++

if (userGuess > randomNumber) {
        console.log("Too high, try again. \n")
} else if (userGuess < randomNumber) {
        console.log("Too low, try again. \n")
} else {
        console.log("Correct.\n")
        console.log(`It took you ${counter} number of tries.`)
        break

}}

console.log("\nDone.")

