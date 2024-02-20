/**
 * The program shows how to get input
 *   and deal with numbers
 *
 *   By:	Flynn Rundquist
**/

import { createPrompt } from 'bun-promptx'

console.log('\nChoose the length of logs you would like to move with a truck.')

const lengthOfLog = createPrompt('Enter length in meters -> 0.25, 0.5, 1:')
let lengthOfLogFloat = parseFloat(lengthOfLog.value)
const capacity = 1100
const weight = 20
let maxLength = capacity / weight
let numberOfLogs = maxLength / lengthOfLog

console.log('The truck can carry ${numberOfLogs} logs that are ${lengthOfLog} meters long.')
console.log('\nDone.')


