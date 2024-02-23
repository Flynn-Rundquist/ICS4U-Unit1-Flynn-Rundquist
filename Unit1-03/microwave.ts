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
  perPage: 3,
})

let amountOfFood = createSelection([
  { text: '1' },
  { text: '2' },
  { text: '3' }
], {
  headerText: `How many ${typeOfFood}(s) are you cooking? (max 3): `,
  perPage: 3,
})

let cookingTimeMin = 0;
let cookingTimeSec = 0;

if (typeOfFood === 'sub') {
  if (amountOfFood.text === '1') {
    cookingTimeMin = 1;
    cookingTimeSec = 0;
  } else if (amountOfFood.text === '2') {
    cookingTimeMin = 1;
    cookingTimeSec = 30;
  } else if (amountOfFood.text === '3') {
    cookingTimeMin = 2;
    cookingTimeSec = 0;
  }
}

console.log(`The cooking time for ${amountOfFood.text} ${typeOfFood}(s) is ${cookingTimeMin} minutes ${cookingTimeSec} seconds.`);
console.log("\nDone.");
