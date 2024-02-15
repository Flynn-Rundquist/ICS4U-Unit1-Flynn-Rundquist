/**
 * The program shows how to get input
 *   and deal with numbers
 *
 *   By:	Flynn Rundquist
**/

import { createPrompt } from 'bun-promptx'

console.log("Choose the length of logs you would like to move with a truck.")

const width = createPrompt('Enter width in meters -> 0.25, 0.5, 1:')

