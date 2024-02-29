/**
 * This program tells someone how long to microwave
 * their food.
 *
 * By: Flynn
 * Version: 1.0
 * Since: 2024/02/21
**/

import { createPrompt } from 'bun-promptx'
import { createSelection } from 'bun-promptx'

const typeOfFood = createSelection([
  { text: 'sub' },
  { text: 'pizza' },
  { text: 'soup' }
], {
  headerText: 'Are you heating a sub, pizza, or soup?: ',
  perPage:3,
})

const amountOfFood = createSelection([
  { text: '1' },
  { text: '2' },
  { text: '3' }
], {
  headerText: `How many ${typeOfFood}(s) are you cooking? (max 3): `,
  perPage: 3,
})

if (typeOfFood.selectedIndex === 0) {
  console.log("Selected: Sub")
  if (amountOfFood.selectedIndex === 0) {
    console.log("Selected: 1")
    console.log("The total cook time is 1 minute 0 seconds.")
  } else if (amountOfFood.selectedIndex === 1) {
    console.log("The total cook time is 1 minute 30 seconds.")
  } else if (amountOfFood.selectedIndex === 2) {
    console.log("The total cook time is 2 minutes 0 seconds.")
  } 

} else if (typeOfFood.selectedIndex === 1) {
  console.log("Selected: Pizza")
  if (amountOfFood.selectedIndex === 0) {
    console.log("Selected: 1")
    console.log("The total cook time is 0 minutes 45 seconds.")
  } else if (amountOfFood.selectedIndex === 1) {
    console.log("Selected: 2")
    console.log("The total cool time is 1 minute 7.5 seconds.")
  } else if (amountOfFood.selectedIndex === 2) {
    console.log("Selected: 2")
    console.log("The total cook time is 1 minute 30 seconds.")
  } 
} else if (typeOfFood.selectedIndex === 2) {
  console.log("Selected: Soup")
  if (amountOfFood.selectedIndex ===0) {
    console.log("Selected: 1")
    console.log("The total cook time is 1 minute 45 seconds.")
  } else if (amountOfFood.selectedIndex === 1) {
    console.log("Selected: 2")
    console.log("The total cook time is 2 minute 37.5 seconds.")
  } else if (amountOfFood.selectedIndex === 2) {
    console.log("Selected: 3")
    console.log("The total cook time is 3 minutes 30 seconds.")
  }}

console.log("\nDone.")

