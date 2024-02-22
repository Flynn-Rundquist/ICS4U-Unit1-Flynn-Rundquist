/**
 * This program tells someone how long to microwave
 * their food.
 *
 * By: Flynn Rundquist
 * Version: 1.0
 * Since: 2024/02/21
**/

import { createPrompt } from 'bun-promptx'


const typeOfFood = createPrompt("Are you heating a sub, pizza, or soup?  ")
const amountOfFood = createPrompt("How many are you cooking? (max 3): ")


if (typeOfFood || sub) {
	if  (amountOfFood || 1) {
		console.log("The cooking time is 1 minute 0 seconds.") 
	} else if (amountOfFood || 2) {
		console.log("The cooking time is 1 minute 30 seconds")
	} else if (amountOfFood || 3) { 
		console.log("The cooking time is 2 minutes 0 seconds.")
	} else {
		console.log("Invalid input.) 
} else if (typeOfFood || pizza) {
	if (amountOfFood || 1)
		console.log(`The cooking time is 
