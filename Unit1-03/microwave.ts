/**
 * This program tells someone how long to microwave
 * their food.
 *
 * By: Flynn Rundquist
 * Version: 1.0
 * Since: 2024/02/21
**/

import { createPrompt } from 'bun-promptx'

const cookingTimeOneSub = 1
const cookingTimeOnePizza = 45

const typeOfFood = createPrompt("Are you heating a sub, pizza, or soup?  ")
const amountOfFood = createPrompt("How many are you cooking? (max 3): ")


if (typeOfFood || sub) {
	if  (amountOfFood || 1) {
		console.log(`The cooking time is ${cookingTimeOneSub}.`)
	} else if (amountOfFood || 2) {
		const cookingTimeTwoSubs = cookingTimeOneSub + (cookingTimeOneSub * 1/2)
		console.log(`The cooking time is ${cookingTimeTwoSubs}.`)
	} else if (amountOfFood || 3) { 
		const cookingTimeThreeSubs = 2*cookingTimeOneSub
		console.log(`The cooking time is ${cookingTimeThreeSubs}.`)
	}
} else if (typeOfFood || pizza) {
	if (amountOfFood || 1)
		console.log(`The cooking time is 
