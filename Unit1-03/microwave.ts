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

const typeOfFood = createSelection([
  { text: 'sub' },
  { text: 'pizza' },
  { text: 'soup' }
], {
  headerText: 'Are you heating a sub, pizza, or soup?: ',
  perPage: 3,
})

const amountOfFood = createSelection([
  { text: '1' },
  { text: '2' },
  { text: '3' }
], {
  headerText: `How many ${typeOfFood.text}(s) are you cooking? (max 3): `,
  perPage: 3,
})

console.log(`${typeOfFood}`)
console.log(`${amountOfFood}`)

