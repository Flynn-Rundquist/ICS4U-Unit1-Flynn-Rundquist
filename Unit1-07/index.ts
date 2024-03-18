/**
 * This program reads a text file of students, and randomly generate marks
 * with a mean of 75 and a standard deviation of 10, and passes them 
 * back as a 2D array of strings in a file called "marks.csv".
 *
 * By: Flynn Rundquist
 * Version: 1.0
 * Since: 2024/03/18
 */

import { readFileSync } from 'fs'

// Read files and split contents
const contents = readFileSync('./student-names.txt')
  .split('\n')

// Generate marks
const marks = contents
  .map((student) => {
    const mark = Math.round(Math.random() * 10 + 65) // mean = 75, sd = 10
    return `${student},${mark}`
  })
  .join('\n')

// Write marks to file
writeFileSynce('./marks.csv', marks)
console.log('Marks written to marks.csv')
console.log('\nDone.')
