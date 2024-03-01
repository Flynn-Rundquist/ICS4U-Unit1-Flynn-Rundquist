/**
 * This program finds the length of a wooden board
 * that's 1 board foot in dimesion.
 *
 * By: Flynn Rundquist
 * Version: 1.0
 * Since: 2024/02/29
 */

import { createPrompt } from 'bun-promptx'

// input
console.log("This program finds out the length of a wooden board that is 1 board foot in dimension.")
const boardWidthString = createPrompt("Entre width of board (inches): ")
const boardHeightString = createPrompt("Enter height of board (inches): ")
const boardFoot = 144

// error checking
const boardWidth = parseFloat(boardWidthString.value || "-1")
const boardHeight = parseFloat(boardHeightString.value || "-1")

if (isNaN(boardWidth) == true || isNaN(boardHeight) == true) {
  console.log("Invalid input.")
} else if (boardWidth < 0 || boardHeight < 0) {
  console.log("Invalid input.") 
} else {
  // process
  let boardLength = (12 * boardFoot) / (boardHeight * boardWidth)
  // output
  console.log(`The wood should be ${boardLength} inch(es) long.`)
}

console.log("\nDone.")
