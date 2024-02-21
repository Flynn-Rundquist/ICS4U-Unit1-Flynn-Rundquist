/**
 * The program shows how to get input
 *   and deal with numbers
 *
 *   By:	Flynn Rundquist
 *   Version: 1.0
 *   Since: 2024/02/14
*/

import { createPrompt } from 'bun-promptx'

console.log('\nChoose the length of logs you would like to move with a truck.')

const lengthOfLogInput = createPrompt('Enter length in meters -> 0.25, 0.5, 1.0: ')
const lengthOfLogFloat = parseFloat(lengthOfLogInput.value)

const capacity = 1100
const weight = 20

const maxLength = capacity / weight
const numberOfLogs = maxLength / lengthOfLogFloat

console.log(`The truck can carry ${numberOfLogs} logs that are ${lengthOfLogFloat} meters long.`)
console.log('\nDone.')

