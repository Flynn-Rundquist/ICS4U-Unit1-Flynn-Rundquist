/**
 * This program tells someone how long to microwave
 * their food.
 *
 * By: Flynn Rundquist
 * Version: 1.0
 * Since: 2024/02/21
**/

import { createPrompt } from 'bun-promptx'
import { createSelection } from 'bun-promptx'

let typeOfFood = createSelection([
  { text: 'sub' },
  { text: 'pizza' },
  { text: 'soup' }
], {
  headerText: 'Are you heating a sub, pizza, or soup?: ',
  perPage:3,
})

let amountOfFood = createSelection([
  { text: '1' },
  { text: '2' },
  { text: '3' }
], {
  headerText: `How many ${typeOfFood}(s) are you cooking? (max 3): `,
  perPage: 3,
})

if (typeOfFood = 'sub') {
  if (amountOfFood === 1) {
  const cookingTimeMin = 1
  const cookingTimeSec = 0
  } else if (amountOfFood === 2) {
  const cookingTimeMin = 1
  const cookingTimeSec = 30
  } else if (amountOfFood === 3) {
  const cookingTimeMin = 2
  const cookingTimeSec = 0
  }}
  console.log(`The cooking time for ${amountOfFood} ${typeOfFood}(s) is ${cookingTimeMin} minutes ${cookingTimeSec} seconds.`)
  console.log("\nDone.")
