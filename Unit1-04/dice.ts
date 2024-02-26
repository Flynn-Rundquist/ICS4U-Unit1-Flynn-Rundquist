/**
 * This program generates a random number
 * and lets the player guess it.
 *
 * By: Flynn
 * Version: 1.0
 * Since: 2024/04/26
**/

import { createSelection } from 'bun-promtpx'

const randomNumber = randomInt(0, 5)

const userGuess = createSelection([
        { text: '1' },
        { text: '2' },
        { text: '3' },
        { text: '4' },
        { text: '5' },
        { text: '6'}
], {
        headerText: 'Guess a number between 1 to 6: "
        perPage: 6
})


