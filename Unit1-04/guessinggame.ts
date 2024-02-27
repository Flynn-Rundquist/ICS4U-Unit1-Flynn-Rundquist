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

if (userGuess.selectedIndex  > randomNumber - 1) {
        console.log(`You guessed ${userGuess.selectedIndex + 1}. Too high, try again. \n`)
} else if (userGuess.selectedIndex < randomNumber - 1) {
        console.log(`You guessed ${userGuess.selectedIndex + 1}. Too low, try again. \n`)
} else {
        console.log(`You guessed ${userGuess.selectedIndex + 1}. Correct.\n`)
        console.log(`It took you ${counter} attempt(s).`)
        break
        }
}

console.log("\nDone.")

