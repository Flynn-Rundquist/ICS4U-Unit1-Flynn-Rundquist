/**
 * This program reads a text file of students, and randomly generate marks
 * with a mean of 75 and a standard deviation of 10.
 *
 * By: Flynn Rundquist
 * Version: 1.0
 * Since: 2024/03/18
 */

import { readFileSynce } from 'fs'

// Read files and split contents
const studentList = readFileSync(process.argv[2], 'utf8')
const newArray = fileContents.trim().split(/\r?\n/)

console.log(newArray)

