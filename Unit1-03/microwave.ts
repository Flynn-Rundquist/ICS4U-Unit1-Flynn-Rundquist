/**
 *  * This program tells someone how long to microwave
 *   * their food.
 *    *
 *     * By: Flynn Rundquist
 *      * Version: 1.0
 *       * Since: 2024/02/21
 *       **/

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

if (typeOfFood === 'sub') {
	  if (amountOfFood === 1) {
		      console.log(`The total cook time for 1 sub is 1 minute 0 seconds.`)
			        } else if (amounfOfFood === 2) {
					    console.log(`The total cook time for 2 subs is 1 minute 30 seconds.`)
						      } else if (amountOfFood = 3) {
							          console.log(`The total cook time for 3 subs is 2 minutes 0 seconds.`)
									    }}
