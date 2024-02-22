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
  { text: 'sub', description: ' ' },
  { text: 'pizza', description: ' ' },
  { text: 'soup', description: ' ' }
}, {
  headerText: 'Are you heating a sub, pizza, or soup?: ',
  perPage:3,
})

const amountOfFood = createSelection([
  { text: '1', description: ' ' }
  { text: '2', description: ' '}
  { text: '3', description: ' ' }
], {
  headerText: 'How many ${typeOfFood}(s) are you cooking? (max 3): ',
  perPage: 3,
})

