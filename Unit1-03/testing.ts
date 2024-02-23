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

const foodTypes = {
  sub: { cookTime: [60, 90, 120], displayName: "Sub" },
  pizza: { cookTime: [45, 67.5, 90], displayName: "Pizza" },
  soup: { cookTime: [105, 157.5, 210], displayName: "Soup" }
};

const typeOfFood = createSelection(
  Object.values(foodTypes).map(food => ({ text: food.displayName })),
  {
    headerText: 'Are you heating a sub, pizza, or soup?: ',
    perPage: 3,
  }
);

const amountOfFood = createSelection([
  { text: '1' },
  { text: '2' },
  { text: '3' }
], {
  headerText: `How many ${foodTypes[typeOfFood.selectedIndex].displayName}(s) are you cooking? (max 3): `,
  perPage: 3,
});

const selectedFoodType = foodTypes[typeOfFood.selectedIndex];
const cookTime = selectedFoodType.cookTime[amountOfFood.selectedIndex];

console.log(`Selected: ${selectedFoodType.displayName}`);
console.log(`Selected: ${amountOfFood.selectedIndex + 1}`);
console.log(`The total cook time is ${Math.floor(cookTime / 60)} minute${cookTime < 120 ? '' : 's'} ${cookTime % 60} second${cookTime % 60 === 1 ? '' : 's'}.`);
console.log("\nDone.");
