/**
 * This program takes the mass of an object
 * and calculates the amount of energy released
 *
 * By:	Flynn Rundquist
 * Version: 1.0
 * Since: 2024/02/20
**/

import { createPrompt } from 'bun-promptx'

const speedOfLight = 2.998e8; // Speed of light (m/s) 

// input
const massOfObjectInput = createPrompt("Enter the mass of object (kg): ")

// // error checking
const massOfObject = parseFloat(massOfObjectInput.value || "-1")

if (isNaN(massOfObject) || massOfObject < 0) {
     console.log("Invalid input")
     } else {
         // process
             const energyOfObject = massOfObject * Math.pow(speedOfLight, 2)

// output
console.log(`${massOfObject} kg of mass would produce ${energyOfObject.toExponential(3)} J of energy.`)
}

console.log("\nDone.")

